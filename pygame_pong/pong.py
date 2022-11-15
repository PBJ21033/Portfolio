import pygame
import random


'''****************************************************************************
*   The Pong Class. 
*    - This class has a draw function, move function,
*
*
****************************************************************************'''
class Pong:
    
    def __init__(self, screen, color) -> None:
        self.agent_y = 130
        self.agent_direction = 0
        self.computer_y = 130
        self.ball_x = 145
        self.ball_y = 145
        self.ball_angle = random.randint(-1, 1)
        self.ball_velocity = 3        
        self.rl_agent = pygame.draw.rect(screen, color, 
                                    [5, self.agent_y, 10, 40])
    
        self.computer_agent = pygame.draw.rect(screen, color, 
                                          [285, self.computer_y, 10, 40])
    
        self.ball = pygame.draw.rect(screen, color, 
                                [self.ball_x, self.ball_y, 5, 5])
        
        self.done = False
        
    # Getter function
    def get_rl_agent(self):
        return self.rl_agent
    
    # Getter function
    def get_right_paddle(self):
        return self.computer_agent
    
    # Getter function
    def get_ball(self):
        return self.ball    
    
    '''************************************************************************
    *   Draw function
    *   - Inputs: rl_agent, right_paddle, ball
    *   - Description:
    *       - This function draws the actors to the screen and 
    *         refills the screen
    ************************************************************************'''
    def draw(self, screen, color):
        screen.fill((0, 0, 0))
        
        self.rl_agent = pygame.draw.rect(screen, color, 
                                    [15, self.agent_y, 10, 40])
    
        self.computer_agent = pygame.draw.rect(screen, color, 
                                          [275, self.computer_y, 10, 40])
    
        self.ball = pygame.draw.rect(screen, color, 
                                [self.ball_x, self.ball_y, 10, 10])

    '''************************************************************************
    *   Move object function.
    *   - Inputs: update_ball, update_left_paddle, update_right_paddle
    *   - Description:
    *       - This function updates the position of the ball, left paddle,
    *         and the right paddle. 
    ************************************************************************'''
    def move_objects(self, action):
        
        self.update_ball()
        
        
        if self.agent_y - 40 > 0 or self.agent_y - 40 < 290:
            self.update_left_paddle(action)
        
        if self.computer_y -50 > 0 or self.computer_y - 50 < 290:
            self.update_right_paddle()
    
    '''************************************************************************
    *   Check Collisions.
    *   
    *   - Description:
    *       - This function checks for the collisions in the game.  
    ************************************************************************'''
    def check_collision(self):
        
        if self.ball_y - 5 < 0:
            self.ball_angle = -self.ball_angle
        
        elif self.ball_y - 5 > 290:
            self.ball_angle = -self.ball_angle
        
        elif self.ball_x - 5 >= 290 or self.ball_x -5 <= 0:
            self.done = True
        
        elif self.ball_velocity < 0:
            if self.ball_y + 5 >= self.agent_y and self.ball_y <= self.agent_y + 40:
                if self.ball_x - 10 <= 15:
                    self.ball_velocity = -self.ball_velocity
                    
                    middle_y = self.agent_y + 20
                    difference_in_y = middle_y - self.ball_y
                    reduction_factor = 4
                    y_vel = difference_in_y // reduction_factor
                    
                    self.ball_angle = -y_vel
        else:
            if self.ball_y - 5 >= self.computer_y and self.ball_y <= self.computer_y + 40:
                if self.ball_x + 10 >= 275:
                    self.ball_velocity = -self.ball_velocity
                    
                    middle_y = self.computer_y + 20
                    difference_in_y = middle_y - self.ball_y
                    reduction_factor = 4
                    y_vel = difference_in_y // reduction_factor
                    
                    self.ball_angle = -y_vel
        
        
    
    '''************************************************************************
    *   Update Ball
    *   
    *   - Description:
    *       - Updates the ball's position.  
    ************************************************************************'''
    def update_ball(self):
        self.check_collision()
        self.ball_x += self.ball_velocity
        self.ball_y += self.ball_angle 
    
    '''************************************************************************
    *   Update Left Paddle
    *   
    *   - Description:
    *       - Updates the left Paddle's position.  
    ************************************************************************'''
    def update_left_paddle(self, action):
        
        keys = pygame.key.get_pressed()

        if keys[action[1]] == True:
            if self.agent_y <= 253:
                self.agent_y += 4 * self.agent_direction
                self.agent_direction = 1
                
        elif keys[action[0]] == True:
            if self.agent_y >= 10:
                self.agent_y += 4 * self.agent_direction
                self.agent_direction = -1
            
        else:
            self.agent_direction = 0
    
    '''************************************************************************
    *   Update Right Paddle
    *   
    *   - Description:
    *       - Updates the right Paddle's position.  
    ************************************************************************'''
    def update_right_paddle(self):
        paddle_speed = 3
        
        if self.computer_y + 20 > self.ball_y:
            self.computer_y -= paddle_speed *random.randint(0, 3)
        
        elif self.computer_y + 20 < self.ball_y:
            self.computer_y += paddle_speed *random.randint(0, 3)

'''For testing purposes only.'''   
# def main():
#     pygame.init()
#     screen = pygame.display.set_mode([300, 300])
#     white = (255, 255, 255)
#     frame_rate = 60
#     game = Pong(screen, white)
#     running = True
    
#     while running:
#         action = random.randint(0, 1)
#         pygame.time.Clock().tick(frame_rate)
#         game.draw(screen, white)
#         game.move_objects(action)
#         # print(game.ball_x)
        
#         if game.done == True:
#             running = False
        
#         for event in pygame.event.get():
#             if event.type == pygame.QUIT:
#                 running = False
        
#         pygame.display.flip()
        
#     pygame.quit()


# main()