let usuarios = ["Adriano", "Maria", "Joao"];

function inserirUsuario (nome) {
    let promisse = new Promise (function (resolve, reject){
        
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject ({msg: "erro qualquer"});
            }
        }, 3000);
})
    return promisse;
}

function listaUsuarios () {
    console.log(usuarios);
}

inserirUsuario("will")
    .then(listaUsuarios)
    .catch((error) => {
        console.log(error.msg)
});