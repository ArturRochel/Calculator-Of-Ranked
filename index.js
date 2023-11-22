let saldo = level(10, 5)

console.log(`O Heroi tem o saldo de ${saldo[0]} vitórias e está no nível de ${saldo[1]}.`)

function level(victories, defeats, name, nickName,splitChar){
    let balance = victories - defeats
    let ranked = ""
    if(balance <= 10){
        ranked = "Ferro"
    }
    else if(balance >= 11 && balance <= 20){
        ranked = "Bronze"
    }
    else if(balance >= 21 && balance <= 50){
        ranked = "Prata"
    }
    else if(balance >= 51 && balance <= 80){
        ranked = "Ouro"
    }
    else if(balance >= 81 && balance <= 90){
        ranked = "Diamante"
    }
    else if(balance >= 91 && balance <= 100){
        ranked = "Lendário"
    }
    else if(balance >= 101){
        ranked = "Imortal"
    }
    else{ ranked = "Indeterminado"}

    let result = [balance, ranked]
    return result
}