const nome = 'Silvana'
const sexo = 'F'
const idade = 65
const contribuicao = 35

if(contribuicao >= 30 && sexo == 'F' || contribuicao >= 35 && sexo == 'M'){
    if(idade + contribuicao >= 90 && sexo == 'F'){
        console.log(`${nome}, já você pode se aposentar querida!`)
    }else{
        console.log(`${nome}, já você pode se aposentar amigo!`)
    }
}else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}