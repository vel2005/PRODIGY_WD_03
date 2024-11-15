// script.js

// Initial variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// DOM elements
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');

// Functions to handle game logic
function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-index');
    
    if (board[cellIndex] !== '' || !gameActive) return;

    updateCell(cellIndex);
    checkWinner();
}

function updateCell(index) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    let roundWon = false;
    
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
        gameActive = false;
    } else if (!board.includes('')) {
        alert('It\'s a draw!');
        gameActive = false;
    }
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}

// Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);
