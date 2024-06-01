// Jesus meu salvador! Obrigado Deus!
let modal = document.querySelector("#modal");
let modalTwo = document.querySelector("#modalTwo");
let squares = document.querySelectorAll(".square");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");
let result3 = document.querySelector("#result3");
// let squares = document.querySelectorAll(".square");

let winsPlayer1 = 0;
let winsPlayer2 = 0;
let drawsTotals = 0;

document.addEventListener("DOMContentLoaded", () => {
    
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
    
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    let result = handleMove(position);
    if (result) {
        setTimeout(() => {
            // alert('Game over! It\'s a draw!');
            if (result === "win") {
                champion();
            } else if (result === "draw") {
                // alert('Game over! It\'s a draw!');
                drawCount();
                // resetGame();
            }
        }, 10)
    }
    updateSquare(position);
}


function champion () {
    // playerTime += 1;
    // Tentativa de criar placa de vitórias
    //
    console.log("teste virtoria  na tela")
    result1.innerHTML = playerTime + 1;
    // result2.classList.remove(symb)
    
    if (symbols[playerTime] == symbols[0]) {
        result2.classList.add("ball_soccer");
    } else {
        result2.classList.add("ball_nfl");
    }
    
    result3.innerHTML = `Campo 1: ${gameWin[0] +1}, campo 2: ${gameWin[1] +1}, campo 3: ${gameWin[2] +1}`;
    // result2.innerHTML +=;
    modal.style.display = "flex";
    reset.style.display = "flex";
    
    scoreboard ();
}

function drawCount () {
    modalTwo.style.display = "flex";
    resetTwo.style.display = "flex";
    
    let drawsFront = document.querySelector("#numbers_draws");
    console.log(drawsFront);

    drawsTotals +=1;
    drawsFront.innerHTML = drawsTotals;

    scoreboard ();
}


function scoreboard () {
    let victories1 = document.querySelector("#numbers_victories_player1");
    let victories2 = document.querySelector("#numbers_victories_player2");

    console.log(victories1);

    if (playerTime == 0) {
        winsPlayer1 +=1;
        victories1.innerHTML = winsPlayer1;
    } else if (playerTime == 1){
        winsPlayer2 +=1;
        victories2.innerHTML = winsPlayer2;
    } 
    
}


function updateSquare (position) {
    let square = document.getElementById(position.toString());
    // console.log(`${square} eee`);
    let symbol = boards[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGame)

let resetTwo = document.querySelector("#resetTwo");
resetTwo.addEventListener("click", resetGame)

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
        playerWin = ""; // adicionado recente
        modal.style.display = "none";
        modalTwo.style.display = "none";
        result1.classList.remove(symbols[playerTime])
        result2.classList.remove("ball_soccer");
        result2.classList.remove("ball_nfl");
        reset.style.display = "none";
        resetTwo.style.display = "none";
   

    })

   
}


// Falta escrever no jogo:

// - Se não haver vencedor, aparecer um modal empate
//     Precisa-se verificar todos as posições dentro array boards se são != "" && gameOver == false
// - Contabilizar contadores de vitórias e empates
//     Precisa-se usar DOM e pegar como number o numeros de vitorias e ir de operador += 1