function ola () {
    console.log("ola");
}

function tchau () {
    console.log("tchau")
}

function saudacao (s, nome) {
    s();
    console.log(nome);
}


saudacao(ola, "Will");

// Outro exemplo, usabilidade

let usuarios = ["Adriano", "Maria", "Joao"];

function inserirUsuario (nome, callback) {
    setTimeout(() => {
            usuarios.push(nome);
            callback();
        }, 1000);
    }
    
    function listaUsuarios () {
        console.log(usuarios);
    }
    
inserirUsuario("Willian", listaUsuarios);