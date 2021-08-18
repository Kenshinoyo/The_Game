// *TETRIS TEMPLATE*

//document.addEventListener('DOMContentLoaded', () => { // <= ensures that the script doesn't launch until the html/DOM has fully loaded
    // **Code goes here**

const gBox = (numberOfSquares) => { // <-- Function used for creating the "game board" 
    for(i=0; i < numberOfSquares; i++){
        let grid = $('<div>').addClass('grid');
        let box = document.createElement('<div>')
        grid.addClass('background-color');
        $('body').append(grid);
        $('grid').append(box);
        }
}

// const sBox = (numberofBoxes) => {
//     for(i=0; i < numberofBoxes; i++){
//         let square = $('<div>').addClass('square');
//         square.addClass('background-color');
//         $('grid').append(square);
//         }
// }


$(() => gBox(200)) // <-- This is an "IIFE." It allows a function to be called 
//                       w/o "hard coding" it into the index
$(() => sBox(200))
//})