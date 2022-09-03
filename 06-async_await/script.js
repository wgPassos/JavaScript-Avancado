let usuarios = ["Mario", "Jose", "Pedro"];

function inserirUsuario (nome) {
    let promisse = new Promise (function(resolve, rejesct) {

        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolve();
            } else {
                rejesct({msg: "erro de qualquer coisa"});
            }
        }, 3000);
    })
    return promisse;
}

function listaUsuarios () {
    console.log(usuarios);
}

async function executar () {
    await inserirUsuario ("Will");
    listaUsuarios();
}

executar();