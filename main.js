let color = "black"

function removeSquares(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll('div')
    squares.forEach((div)=> div.remove())
}

function populateBoard (size){
    let board = document.querySelector(".board");
    removeSquares()
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

ammount = size * size
for(let i = 0; i < ammount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
}


}

function colorSquare() {
    this.style.background = color
}

function changeColor(choice) {
color = choice;
}



populateBoard(16)




function newSize (input) {
    if(input >= 2 && input <= 100) {
        populateBoard(input);

    }else{
        console.log("error")
    }

}

function clearInput() {
    document.getElementById("input").value = "16";
}


let resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", () => {
    populateBoard(16);
    clearInput();
})






