// Find all the primes less than or equal to num
function findAllPrimes(num){
    const allNums = [];
    const allPrimes = [];

    for (let i = 2; i <= num; i++) { allNums.push(i) }

    allNums.forEach(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0){ return false}
        }
        allPrimes.push(num);
    });

   return allPrimes;
}

console.log(findAllPrimes(100));

