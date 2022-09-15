// Try catch = caso de erro em parte do código, ele trata e dá continuidade ao restante do processo
// Caso não trate = Quando o código é execultado e digamos, um console.log da errado, então o codigo para e não roda o restante caso exista


// console.log(oi);

// console.log("boa noite");

// O código console.log(oi), dará erro e não executará o console.log("boa noite")

try {
    console.log(oi);
} catch  {

}

console.log("Boa noite");

// Esse código boa noite executará, mesmo com erro no console.log(oi)

try {
    console.log(oi);
} catch (err) {
    console.log("aqui falho :/", err)
}

console.log("Boa noite de novo");