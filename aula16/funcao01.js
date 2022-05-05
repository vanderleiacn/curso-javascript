function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
/*
let res = parimpar(4)
console.log(res)       esse é um exemplo de chamada para obter o resultado desse caso 
*/

console.log(parimpar(223)) // esse é outro exemplo

//(parimpar é a chamada (223 é o parametro)) o parametro real (nesse caso o 223) vai ser jogado dentro do parametro formal que nesse caso é (n)