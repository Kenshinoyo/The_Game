// *TETRIS TEMPLATE*

//document.addEventListener('DOMContentLoaded', () => { // <= ensures that the script doesn't launch until the html/DOM has fully loaded
// **Code goes here**
const width = 10 // <-- width of the grid in squares

const sBox = (numberOfSquares) => { // <-- Function used for creating the "grid squares" within the game board.
    for (let i = 0; i < numberOfSquares; i++) {  // For loop allows the mass production of element w/o hard coding
        let box = $('<div>');
        box.addClass('box');
        box.attr("id", i)
        $('.gBoard').append(box); // The
    }
}


$(() => sBox(198)) // <-- This is an "IIFE." It allows a function to be called 
//                       w/o "hard coding" it into the index


const grid = document.querySelector('.grid') //                     ]
let squares = Array.from(document.querySelectorAll('.box')) //      |   <== shorthand identitiers for key elements 
const ScoreDisplay = document.querySelectorAll('#score') //         |
const StartBtn = document.querySelector('#start-button') //         ]

// The Tetrominoes
const tetrominoes = [lTetromino, zTetromino, oTetromino, iTetromino, tTetromino]

// Tetrimino Key:
// [0,0] [0,1] [0,2]
// [1,0] [1,1] [1,2]
// [2,0] [2,1] [2,2]

const lTetromino = [
    [1, width+1, width*2+1, 2], // <-- Using the "width" var turns these values into makeshift (x, y) coordinates(width+1 = 11 = (1, 1))
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width, width*2+1, width*2+2]
]



let name = 'Player'
function showAlert() {
    alert('Hi' + name)
}





//})

