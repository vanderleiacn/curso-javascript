let num = document.querySelector('input#fnum') //num é numero   
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = [] // declaramos um vetor vazio . vamos ter esse vetor(array) que vamos usar para analisar os dados 

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) { // isNumero para saber se é um numero . só vai add se for verdade os dois.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
}
//num.value = ''
//num.focus()      para limpar o numero e colocar outro

// verificar resultado do exercicio na aula 16 ( exercicio com com erro na hora de add)