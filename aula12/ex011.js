/*var idade = 22
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional')      pode ser feito assim tbm. o exemplo a baixo é mais simplificado, o codigo fica menor
    }
}*/

var idade = 68
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}