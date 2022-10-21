endGame = true;

const statusDisplay = document.querySelector('.game--status');
/*
A variable to hlep end the game
*/
let gameActive = true;
/*
current player
*/
let currentPlayer = "X";
/*
current game
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
winning messages
*/

const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
/*
functions
*/
//needs a function to update each cell when played
//while (endGame)
//{
function cellPlayed(clickedCell, clickedCellIndex) 
{
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
//need a function to determine when the player changes
function playerChange()
{
    if(currentPlayer == "X")
    {
        currentPlayer = "O";
    }
    else
    {
        currentPlayer = "X";
    }
    
    //currentPlayer  ? currentPlayer ="X" : currentPlayer = "O";
    statusDisplay.innerHTML = currentPlayerTurn();
}
//funciton to check the win conditions
//win conditions array
const winningConditions = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 
function resultValidation() 
{
    
     let roundWon = false;
     playerChange();
        for(let i = 0; i <= 7; i++) 
        {
            let winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            
            if (a === '' || b === '' || c === '') 
            {
                continue;
            }
            if (a === b && b === c) 
            {
                roundWon = true;
                break
            }
        }
    if(roundWon)
     {
            function winningMessage()
            {
                if(currentPlayer == "O")
                {
                    currentPlayer = "X";
                }
                else
                {
                    currentPlayer = "O";
                }
                return winningMessage = `Player ${currentPlayer} has won!`;
            }
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            
            //endGame = false;
     }
}

// Checks which cell was clicked.
function cellClick(clickedCellEvent) 
{
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    if(gameState[clickedCellIndex] !== "" || !gameActive)
    {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();

}

/*
event listeners
*/
function restartGame()
{
    window.location.href = window.location.href

}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector(".game--restart").addEventListener('click', restartGame);
