// Jesus meu salvador! Obrigado Deus!
let modal = document.querySelector("#modal");
let squares = document.querySelectorAll(".square");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let result3 = document.querySelector("#result3");
// let squares = document.querySelectorAll(".square");

document.addEventListener("DOMContentLoaded", () => {
    
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
    playerTime += 1;
    // Tentativa de criar placa de vitórias

    //
    result1.innerHTML = playerTime;
    // result2.classList.remove(symb)
    let victories1 = document.querySelector("#numbers_victories_player1");
    let victories2 = document.querySelector("#numbers_victories_player2");
    let draws = document.querySelector("#draws");

    if (symbols[playerTime] == symbols[0]) {
        result2.classList.add("ball_soccer");
        victories1.innerHTML = 1;
    } else {
        result2.classList.add("ball_nfl");
    }

    result3.innerHTML = `Campo 1: ${gameWin[0]}, campo 2: ${gameWin[1]}, campo 3: ${gameWin[2]}`;
    // result2.innerHTML +=;
    modal.style.display = "flex";
    reset.style.display = "flex";
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
        reset.style.display = "none";
   

    })

   
}


// Falta escrever no jogo:

// - Se não haver vencedor, aparecer um modal empate
//     Precisa-se verificar todos as posições dentro array boards se são != "" && gameOver == false
// - Contabilizar contadores de vitórias e empates
//     Precisa-se usar DOM e pegar como number o numeros de vitorias e ir de operador += 1