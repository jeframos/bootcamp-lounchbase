const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

function createTransaction(newTransactions){
    for(let newTransaction of newTransactions){
        if(newTransaction.type == 'credit'){
            user.balance = user.balance + newTransaction.value
        }if(newTransaction.type == 'debit'){
            user.balance = user.balance - newTransaction.value
        }
        user.transactions.push(newTransaction)
    }
    //console.log(user.transactions)
}

function getHigherTransactionByType(type){
    let highTransaction
    let highValue = 0
    for(let transaction of user.transactions){
        if(transaction.type == type && transaction.value > highValue){
            highTransaction = transaction
            highValue = transaction.value
        }
    }

    return console.log(highTransaction)
}

function getAverageTransactionValue(){
    let sumValue = 0
    for(let transaction of user.transactions){
        sumValue = sumValue + transaction.value
    }

    average = sumValue / user.transactions.length

    return console.log(`Average: ${average}`)
}

function getTransactionCount(){
    let countCrt = 0
    let countDbt = 0
    for(let transaction of user.transactions){
        if(transaction.type == 'credit'){
            countCrt = countCrt + 1
        }if(transaction.type == 'debit'){
            countDbt = countDbt + 1
        }
    }

    countCrtDbt = {credit: countCrt, debit: countDbt}

    return console.log(countCrtDbt)
}

createTransaction([   { type: 'credit', value: 50 }, 
                      { type: 'credit', value: 120 },
                      { type: 'debit', value: 80 },
                      { type: 'debit', value: 30 },
                      { type: 'abc', value: 150 }
                 ])
    
console.log(`Balance: ${user.balance}`)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionCount()