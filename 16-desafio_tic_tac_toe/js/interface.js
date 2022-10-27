// Jesus meu salvador! Obrigado Deus!
let modal = document.querySelector("#modal");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let result3 = document.querySelector("#result3");

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
    result1.innerHTML = playerTime;
    // result2.classList.remove(symb)

    if (symbols[playerTime] == symbols[0]) {
        result2.classList.add("ball_soccer");
    } else {
        result2.classList.add("ball_nfl");
    }

    result3.innerHTML = `Campo 1: ${gameWin[0]}, campo 2: ${gameWin[1]}, campo 3: ${gameWin[2]}`;
    // result2.innerHTML +=;
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
        playerTime = 0
        gameWin = [];
        modal.style.display = "none";
        result1.classList.remove(symbols[playerTime])
        result2.classList.remove("ball_soccer");
        result2.classList.remove("ball_nfl");
        
   

    })

   
}


