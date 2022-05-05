function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //convertido
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}` //num é texto e foi convertido para numero que é n.
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

    }

}