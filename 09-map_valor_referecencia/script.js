let alunoA = { nome: "Joao", idade: 14};

let alunoB = alunoA;
alunoB.idade = 18;

// console.log(alunoB, alunoA);

// No JavaScript o "objeto" é passado como referência
// O que quer dizer isso?
// É que quando a variável é atribuída outra variável, sendo ela um objeto ou array, será atribuição por referência,
// Tipo: Atribuo var turmaA = ["Marcos", "Pedro"] na var turmaB, 
// e modificar algo na turmaB, também irá modificar a variável turmaA

// Isso só não acontece em variáveis de tipo primitivo: number, strigs ..



let turmaA = ["pedor", "Pedro", "Marcos"];

let turmaB = turmaA;
turmaB.push("Jonas");

// console.log(turmaA)
// console.log(turmaB)
// console.log(turmaA)

// Para evitar isso podemos usar o Spread Operator

let galeraA = ["Messi", "CR7", "Leva"];

// let galeraB = [...alunoA];
// galeraB.push("Cavani");

// console.log(galeraA);
// console.log(galeraB);


// e em Objeto como podemos fazer funcionar??

let grupoA = { nome: "Branco", idade: 41};

let grupoB = Object.assign({}, grupoA);
grupoB.idade = 37;

console.log(grupoA);
console.log(grupoB);

