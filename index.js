let saldo = level(115, 27, "Artur Rochel", "Bradofe")

// Linkedin: https://www.linkedin.com/in/artur-rochel-950361184/
// Instagram: https://www.instagram.com/artur.rochel/

console.log(`O jogador de nome ${saldo[2]} e de nick ${saldo[3]} possui um saldo de vitórias de ${saldo[0]} e está no ranking ${saldo[1]}.`)

function level(victories, defeats, name, nickName){
    let balance = victories - defeats
    let firstName = name.split(" ")[0]
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

    let result = [balance, ranked, firstName, nickName]
    return result
}