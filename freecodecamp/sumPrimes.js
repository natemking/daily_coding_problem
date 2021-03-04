function sumPrimes(num) {
    const allNums = [];
    const primes = [];
    
    // Create an array of all numbers from 3 to num
    for (let i = 2; i <= num; i++) {
        allNums.push(i)
    }
    
    // Iterate over all nums and push only primes to prime array
    allNums.forEach(num => {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) { return false }
        }
        
        if (num > 1) { primes.push(num) }
    });

    // Return the sum of the primes
    return primes.reduce((a, c) => a + c);
    
}

console.log(sumPrimes(19));