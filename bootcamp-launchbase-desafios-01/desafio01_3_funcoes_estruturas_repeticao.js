const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function listaUsuario(lstUsuarios){
    for(let i = 0; i < lstUsuarios.length; i++){
        usuario = console.log(`${lstUsuarios[i].nome} trabalha com ${lstUsuarios[i].tecnologias}`)
    }
}

//listaUsuario(usuarios)

function checaSeUsuarioUsaCSS(usuario) {
    for(let x = 0; x < usuario.length; x++){
        for(let y = 0; y < usuario[x].tecnologias.length; y++){
            if(usuario[x].tecnologias[y] == 'CSS'){
                manjaCSS = console.log(`O usuário ${usuario[x].nome} trabalha com CSS`)
            }
        }
    }
    return manjaCSS
}

checaSeUsuarioUsaCSS(usuarios)