const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for(let x = 0; x < usuario.tecnologias.length; x++){
        if(usuario.tecnologias[x] == 'CSS'){
            return true
        }
    }
}

function varreUsuario(usuario){
    for(let i = 0; i < usuario.length; i++){
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])
        if(usuarioTrabalhaComCSS){
            console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
        }
    }
}

varreUsuario(usuarios)