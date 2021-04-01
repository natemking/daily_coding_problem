function smallestCommons(arr) {
    arr.sort((a,b) => a - b);
    
    const bigArr = Array((arr[1] - arr[0]) + 1).fill(0).map((x, i) => i + arr[0]);
    const maxProduct = bigArr.reduce((previous, current) => previous * current);

    for (let i = arr[0]; i < maxProduct; i++){
        const allDivisible = bigArr.every(num => i % num === 0);
        if (allDivisible){
            return i
        }
    }

    console.log(bigArr);
}


console.log(smallestCommons([23, 18]));