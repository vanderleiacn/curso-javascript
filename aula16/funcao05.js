// RECURSIVIDADE      é mais complicado e nao se aprofundar por enquanto (17/04)
function fatorial(n) { // exemplo de fatorial de maneira recursiva (acontece quando uma funcao chama ela mesma )
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))


/* 5! = 5x4x3x2x1 =120
   5! = 5x4!

   n! = n x (n-1)!
   1! = 1 
   */