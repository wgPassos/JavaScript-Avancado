function novoAluno (nome, idade) {
    return {nome, idade};
}

let alunos = [
    novoAluno("Will", 29),
    novoAluno("Gabriel", 25),
    novoAluno("Miguel", 6)
]

function alunoDaqui5Anos (aluno) {
    return {    
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}

console.log(alunos.map(alunoDaqui5Anos));

// Resumo
// O método map() invoca a função callback passada por argumento para cada elemento do Array e 
// devolve um novo Array como resultado.

// Outro exemplo - Developer Mozilla

let numbers = [1, 4, 9];

let root = numbers.map(Math.sqrt);

console.log(root);
