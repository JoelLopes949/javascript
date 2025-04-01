function fatorial(n) {
    let fat = 1
    let sequencia = `${n}`
    for(let c = n; c > 1; c--) {
        fat *= c;
        sequencia += ` x ${c - 1}`;
    }
    console.log(`${sequencia} = ${fat}`)
    return fat
}


fatorial(10)

// 5! = 5 x 4 x 3 x 2 x 1