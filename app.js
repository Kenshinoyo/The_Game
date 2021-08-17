// *TETRIS TEMPLATE*

//document.addEventListener('DOMContentLoaded', () => { // <= ensures that the script doesn't launch until the html/DOM has fully loaded
    // **Code goes here**

const gBox = (numberOfSquares) => {
    for(i=0; i < numberOfSquares; i++){
        let square = $('<div>').addClass('grid');
        square.addClass('background-color');
        $('body').append(grid);
        }
}
//})