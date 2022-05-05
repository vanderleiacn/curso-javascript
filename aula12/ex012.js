var agora = new Date()
var hora = agora.getHours() //getHours é a hora exata do sistema que ta rodando no computador
console.log(`Agora são exatamente ${ hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}