let aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 123456,
    cidade: "Joinville"
}
// Maneira de criar uma copia para aletração, mantendo dado original

let { ...copia } = aluno;
console.log(copia);
copia.matricula = 2222;
console.log(copia);

// Desestruturando uma propriedade sozinha apenas, com as outras propriedades desestrurada juntas (obj)

const { matricula, nome, ...resto} = aluno;
console.log(resto);


let aluno1 = {
    matricula: 3333,
    nome: "Pedro",
    telefone: 5678,
    cidade: "Joinville"
}


let aluno2 = {
    matricula: 777,
    nome: "Jota",
    telefone: 5678,
    cidade: "Joinville"
}

let alunoss = [aluno, aluno1, aluno2];
console.log(alunoss);

let [ marcos, ...outros] = alunoss;
console.log(marcos);
console.log(outros);