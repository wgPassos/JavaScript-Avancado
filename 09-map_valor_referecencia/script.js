let alunoA = { nome: "Joao", idade: 14};

let alunoB = alunoA;
alunoB.idade = 18;

console.log(alunoB, alunoA);

// No JavaScript o "objeto" é passado como referência
// O que quer dizer isso?



let turmaA = ["pedor", "Pedro", "Marcos"];

let turmaB = turmaA;
turmaB= "Jose";

console.log(turmaA)
console.log(turmaB)
console.log(turmaA)

