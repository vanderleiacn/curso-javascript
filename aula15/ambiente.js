let num = [5, 8, 2, 9, 3]
num.push(1) // num.push acrescenta mais um elemento nesse caso o valor do elemento é 1
num.sort() // num.sort() é o metodo que coloca os elementos em ordem crescente
console.log(num)
console.log(`Nosso valor tem ${num.length} posições`) //num.length para saber quantos elementos
console.log(` O primeiro valor do vetor é ${num [0]}`) // [0] p/ mostrar quem ta na posição 0
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`) //nesse caso esta na posição 4 pois foi usado .sort e ele ordenou os valores e começa do 0
    // se nao existir o valor que for buscar  ele vai ser o valor de -1 significa que nao foi encontrado