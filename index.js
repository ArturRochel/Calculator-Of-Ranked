let saldo = level(10, 5)

console.log(`O saldo de vítorias desse jogador é ${saldo}`)

function level(victories, defeats){
    let balance = victories - defeats
    return balance
}