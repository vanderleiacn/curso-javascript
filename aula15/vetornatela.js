let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)
    /* 
    exemplo 1
    console.log(valores[0])
    console.log(valores[1])
    console.log(valores[2])
    console.log(valores[3])
    console.log(valores[4])
    console.log(valores[5])
    */

/*
exemplo 2
for (let pos = 0; pos < valores.length; pos++) { //pos é posição (a variavel pos começa com zero e enquamto pos for menor que o valor do vetor o pos vai receber pos mais 1)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


for (let pos in valores) { // for in tem apenas dois elementos ( ele é mais simplificado) ele é otimizado para variaveis compostas e objetos 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/* for se ler para 
 in se ler dentro ou em 
 para cada posição dentro de valores ( variavel composta) eu vou mostrar o valores pos ( pos é posição) valores é a variavel.
 lendo o ultimo exemplo acima. exemplo 3
 essa sintase do for (in) só funciona para array e objeto
*/


// num.indexOf(7) ele vai procurar no vetor onde esta o valor 7