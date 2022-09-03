
function novoAluno (nome, idade) {
    return {nome, idade};
}
let alunos = [
    novoAluno("Mario", 45),
    novoAluno("Juca", 48),
    novoAluno("Miguel", 7)
]

// Filtrando menores de 30 anos com laço FOR

// for (let aluno of alunos) {
//     if (aluno.idade < 30) {
//         console.log(aluno.nome);
//     }
// }

// Filtrando < 30 anos com metodo FILTER

function menosTrinta (aluno) {
    return aluno.idade < 30;
}

let menoresDeTrinta = alunos.filter(menosTrinta);

console.log(menoresDeTrinta);