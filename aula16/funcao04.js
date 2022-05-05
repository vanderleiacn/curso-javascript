function fatorial(n) {
    let fat = 1 // fat é fatorial
    for (let c = n; c > 1; c--) { // enquanto contador for maior que 1 , contador perde 1
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5x4x3x2x1 = 120   calculando fatorial