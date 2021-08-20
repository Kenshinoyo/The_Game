// *TETRIS TEMPLATE*

//document.addEventListener('DOMContentLoaded', () => { // <= ensures that the script doesn't launch until the html/DOM has fully loaded
// **Code goes here**
const width = 10 // <-- width of the grid in squares

let name = 'Player'
function showAlert() {
    alert('Hi' + name)
}


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

// **THE TETROMINOES**

// Tetromino Key:
// [0,0] [0,1] [0,2] [0,3]
// [1,0] [1,1] [1,2] [1,3]
// [2,0] [2,1] [2,2] [2,3]
// [3,0] [3,1] [3,2] [3,3]


    
// Each position in the individual tetromino arrays is a "rotation"
// EX: lTetrimino[2] = "rotation #2"

    lTetromino = [
        [1, width+1, width*2+1, 2], // <-- Using the "width" var turns these values into makeshift (x, y) coordinates(width+1 = 11 = (1, 1))
        [width, width+1, width+2, width*2+2], 
        [1, width+1, width*2+1, width*2],
        [width, width, width*2+1, width*2+2]
    ],

    zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ],

    tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ],

    oTetromino = [ //<-- "oTetromino" is the "square" tetromino
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ],

    iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]

const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


let currentPosition = 4
let currentRotation = 0

let random = Math.floor(Math.random()*tetrominoes.length)

console.log(random)

let current = tetrominoes[random][0]

function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
}

draw()





//})

