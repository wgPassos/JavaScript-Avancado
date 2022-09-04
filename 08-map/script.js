function novoAluno (nome, idade) {
    return {nome, idade};
}

let alunos = [
    novoAluno("Will", 29),
    novoAluno("Gabriel", 25),
    novoAluno("Miguel", 6)

]

function maior20 (aluno) {
    return aluno.idade > 20;
}

console.log(alunos.filter(maior20));



