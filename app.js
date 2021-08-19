// *TETRIS TEMPLATE*

//document.addEventListener('DOMContentLoaded', () => { // <= ensures that the script doesn't launch until the html/DOM has fully loaded
    // **Code goes here**

const gBox = (numberOfSquares) => { // <-- Function used for creating the "game board" 
    for(i=0; i < numberOfSquares; i++){
        let grid = $('<div>').addClass('grid');
        grid.addClass('background-color');
        $('body').append(grid);
        }
}


$(() => gBox(1)) // <-- This is an "IIFE." It allows a function to be called 
//                       w/o "hard coding" it into the index


// $(document).ready(gBox(numberOfSquares){
//     for(i = 0; i < numberOfSquares; i++){
//         $('grid').append('<div id="div'+ i +'"/>');
//     }
// })


var toAdd = document.createDocumentFragment();

const sBox = (numberOfBoxes) => { // <-- Function for adding child divs to "grid" class
    for(i = 0; i < numberOfBoxes; i++){
    let newDiv = document.createElement('div');
        toAdd.appendChild(newDiv);
    }
    
    document.getElementsByClassName('grid').appendChild(toAdd);
}

$(() => sBox(200))

// }
// const sBox = (numberOfBoxes) => {
// for(i = 0; i < numberOfBoxes; i++) 

// }


//})

var name = 'Player'
function showAlert(){
    alert('Hi' + name)
}
