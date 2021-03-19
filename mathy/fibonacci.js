// List out the Fibonacci integers of length num
function fibonacci(num) {
    const fibArr = [0,1];

    for (let i = 2; i < num; i++) {
        const nextNum = (fibArr[i-2] + fibArr[i-1]);
        fibArr.push(nextNum)
    }

    return fibArr;
}

console.log(fibonacci(10));