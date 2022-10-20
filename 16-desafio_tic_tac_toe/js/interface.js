    // Jesus meu salvador! Obrigado Deus!
    document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {


    console.log(event.target)
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            champion();
            // alert(`Game over! \nO vencedor foi ${playerTime} de simbolo: ${playerWin}\nJogada ganhadora: campo ${gameWin[0]}, campo ${gameWin[1]} e campo ${gameWin[2]}`)

        }, 10);
    };
    console.log("antes da function");
    updateSquare(position);
    console.log("Depois da function");

}

function champion () {
    let modal = document.querySelector("#modal");
    modal.style.display = "flex";
}

function updateSquare (position) {
    let square = document.getElementById(position.toString());
    console.log(`${square} eee`);
    let symbol = boards[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGame)

function resetGame() {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = boards[position];
    

        if (symbol != " ") {
            square.innerHTML = ``
        }

        gameOver = false;
        boards = ["", "", "", "", "", "", "", "", ""];
        gameWin = [];
   

    })

   
}


