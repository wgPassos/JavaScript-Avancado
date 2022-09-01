// Vantagens da Arraow Functios -> O código fica menor e mais simples
// Desvantagens -> Não entende o .bind()  e perde o contexto para o this - enxergar apenas o contexto global 

// let dobro = x => 2 * x;

let dobro = function () {
    return 2 * this.x
}

let numero = {
    x: 8,
    d: dobro
}

console.log(numero.d());