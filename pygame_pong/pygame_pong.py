import pygame
import random
import numpy as np

from pong import Pong

class Game:
    
    '''************************************************************************
    *  Game Constructor
    ************************************************************************'''
    def __init__(self) -> None:
        pygame.init()
        self.screen = pygame.display.set_mode([300, 300])
        self.clock = pygame.time.Clock()
        self.frame_rate = 60
        self.white = (255, 255, 255)
        self.pong = Pong(self.screen, self.white)
        self.reward = 0
        
    '''************************************************************************
    * Action
    *
    * Inputs: action
    *
    * Description: 
    *   - This function takes an agent action and then translates it to the
    *     screen. 
    ************************************************************************'''
    def action(self, action):
        self.pong.move_objects(action)
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.pong.done = True
    
    '''************************************************************************
    * Evaluate
    *
    * Description:
    *   - This function is what updates the rewards for the agent. 
    ************************************************************************'''
    def evaluate(self):
        
        # if the agent paddle hit the ball.
        if self.pong.ball.colliderect(self.pong.rl_agent):
            self.reward = -.02
            return self.reward

        # if the agent scored.
        elif self.pong.ball_x >= 290:
            self.reward = 1
            return self.reward
        
        # if the agent missed the ball. 
        elif self.pong.ball_x <= 1:
            self.reward = -1
            return self.reward
        
        return self.reward 
    
    def keep_in_bounds(self, objects):
        if objects >= 300:
            objects = 290
            return objects
        elif objects <= 0:
            objects = 10
            return objects
        return objects
    
    '''************************************************************************
    * Observe
    *
    * Output: state => current state of the game. 
    *
    * Description:
    *   - This function returns the current state of the game. 
    *     (ball velocity, ball angle, right paddle position, agent position)
    ************************************************************************'''
    def observe(self):
        ball_x = self.keep_in_bounds(self.pong.ball_x)
        ball_y = self.keep_in_bounds(self.pong.ball_y)
        agent_y = self.keep_in_bounds(self.pong.agent_y // 2)
        computer_y = self.keep_in_bounds(self.pong.computer_y // 2)
        
        observation = np.array([ball_x, ball_y, agent_y, computer_y])
        
        return observation
    
    
    '''************************************************************************
    * View
    *
    * Description:
    *   - This function will display the game to the screen.
    ************************************************************************'''
    def view(self):
        self.clock.tick(self.frame_rate)
        self.pong.draw(self.screen, self.white)
        
        
        pygame.display.flip()
    

'''For testing purposes only.'''
def main():
    start_game = Game()
    running = True
    # print(start_game.reward)
    
    while running:
        #action = random.randint(0, 1)
        up = pygame.K_w
        down = pygame.K_s
        
        action = [up, down]
        
        start_game.evaluate()
        
        if start_game.pong.done == False:
            start_game.view()
            start_game.action(action)
            # start_game.evaluate()
            
        else:
            
            running = False
            print(start_game.reward)
main()