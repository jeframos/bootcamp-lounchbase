const classA = [
    {
        name: 'Mayk',
        grade: 1.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Fulano',
        grade: 2
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 5
    },
    {
        name: 'Robson',
        grade: 5
    },
    {
        name: 'MArcio',
        grade: 3
    },
    {
        name: 'MArcio',
        grade: 8
    }
]

function calculateAverage(studants) {
    //return (studants[0].grade + studants[1].grade + studants[2].grade) / 3
    let sum = 0
    for (let i = 0; i < studants.length; i++) {
        sum = sum + studants[i].grade
    }

    const average = sum / studants.length
    //console.log(sum)
    return average
}

function sendMessage(average, turma, studants) {
    // Se a média for maior 5 parabenizar a turma
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congrats!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good!`)
    }
}

//Marcar studant com flunked se a grade
//for menor que 5.
//E, também enviar mensagem

function markAsFlunked(studant) {
    studant.flunked = false
    if (studant.grade < 5) {
        studant.flunked = true
    }
}

function sendFlunkedMessage(studant) {
    //Este parâmetro do if está sendo utilizado de 
    //forma implicita da function 'markAsFlunked(studant) 
    if (studant.flunked) {
        console.log(`Studant ${studant.name} flunked!`)
    }
}

function studantsflunkeds(studants) {
    for (let studant of studants) {
        markAsFlunked(studant)
        sendFlunkedMessage(studant)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A', classA)
sendMessage(average2, 'Class B', classB)

studantsflunkeds(classA)
studantsflunkeds(classB)