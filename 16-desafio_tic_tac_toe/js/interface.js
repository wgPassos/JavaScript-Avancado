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
            alert(`Game over! \nO vencedor foi ${playerTime}`)

        }, 10);
    };

    updateSquare(position);

}

function updateSquare (position) {
    let square = document.getElementById(position.toString());
    let symbol = boards[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

// function updateSquares() {

    // let squares = document.querySelectorAll(".square");
    // squares.forEach((square) => {
    //     square.addEventListener("click", );    
    // console.log(square.id+"oi")
    // let position = square.id
    // symbol = boards[position];

    // if (symbol != "") {
    //     square.innerHTML = `<div class= "${symbol}></div>`
// }

//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = boards[position];

//         if (symbol != " ") {
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }

//     })

   
// }


