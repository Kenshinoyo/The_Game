// *TETRIS TEMPLATE*

//document.addEventListener('DOMContentLoaded', () => { // <= ensures that the script doesn't launch until the html/DOM has fully loaded
// **Code goes here**

let name = 'Player'
function showAlert() {
    alert('Hi' + name)
}

let gBoard = document.getElementsByClassName('gBoard')[0];
    for (let i = 0; i < 198; i++) {
        let element = document.createElement('div');
        if (i >= 195) {
            element.classList.add('taken');
        }
        gBoard.appendChild(element);
}

// const sBox = (numberOfBoxes) => { // <-- Function used for creating the "grid squares" within the game board.
//     for (let i = 0; i < numberOfBoxes; i++) {  // For loop allows the mass production of element w/o hard coding
//         let box = $('<div>');
//         box.addClass('boxes');
//         // box.attr("id", i)
//         $('.gBoard').append(box); // The
//     }
// }


// $(() => sBox(197)) // <-- This is an "IIFE." It allows a function to be called 
//                       w/o "hard coding" it into the index


const grid = document.querySelector('.gBoard') //                     ]
let squares = Array.from(document.querySelectorAll(".gBoard div")) //    |   <== shorthand identitiers for key elements 
const ScoreDisplay = document.querySelectorAll('#score') //         |   "squares" notation turns divs "boxes" divs into an array
const StartBtn = document.querySelector('#start-button') //         ]   with each "box" being a position in the array.

// **THE TETROMINOES**

// Tetromino Key:
// [0,0] [0,1] [0,2] [0,3]
// [1,0] [1,1] [1,2] [1,3]
// [2,0] [2,1] [2,2] [2,3]
// [3,0] [3,1] [3,2] [3,3]

const boxSpacing = 10 // <-- parameter used for determining row/column position


    
// Each position in the individual tetromino arrays is a "rotation"
// EX: lTetrimino[2] = "rotation #2"

    lTetromino = [
        [1, boxSpacing+1, boxSpacing*2+1, 2], // <-- Using the "boxSpacing" var turns these values into makeshift (x, y) coordinates(boxSpacing+1 = 11 = (1, 1))
        [boxSpacing, boxSpacing+1, boxSpacing+2, boxSpacing*2+2], 
        [1, boxSpacing+1, boxSpacing*2+1, boxSpacing*2],
        [boxSpacing, boxSpacing, boxSpacing*2+1, boxSpacing*2+2]
    ],

    zTetromino = [
        [0, boxSpacing, boxSpacing+1, boxSpacing*2+1],
        [boxSpacing+1, boxSpacing+2, boxSpacing*2, boxSpacing*2+1],
        [0, boxSpacing, boxSpacing+1, boxSpacing*2+1],
        [boxSpacing+1, boxSpacing+2, boxSpacing*2, boxSpacing*2+1]
    ],

    tTetromino = [
        [1, boxSpacing, boxSpacing+1, boxSpacing+2],
        [1, boxSpacing+1, boxSpacing+2, boxSpacing*2+1],
        [boxSpacing, boxSpacing+1, boxSpacing+2, boxSpacing*2+1],
        [1, boxSpacing, boxSpacing+1, boxSpacing*2+1]
    ],

    oTetromino = [ //<-- "oTetromino" is the "square" tetromino
        [0, 1, boxSpacing, boxSpacing+1],
        [0, 1, boxSpacing, boxSpacing+1],
        [0, 1, boxSpacing, boxSpacing+1],
        [0, 1, boxSpacing, boxSpacing+1]
    ],

    iTetromino = [
        [1, boxSpacing + 1, boxSpacing * 2 + 1, boxSpacing * 3 + 1],
        [boxSpacing, boxSpacing + 1, boxSpacing + 2, boxSpacing + 3],
        [1, boxSpacing + 1, boxSpacing * 2 + 1, boxSpacing * 3 + 1],
        [boxSpacing, boxSpacing + 1, boxSpacing + 2, boxSpacing + 3]
    ]

const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]



let currentRotation = 0

let randomShape = Math.floor(Math.random() * tetrominoes.length)
let currentShape = tetrominoes[randomShape][currentRotation]

console.log(randomShape)


let currentPosition = 4

const draw = () => {
    currentShape.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
    })
    draw()
}

draw()





//})

