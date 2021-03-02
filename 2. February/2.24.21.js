// Good morning! Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const addsUpToK = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (j !== i) {
                if (arr[i] + arr[j] === k) {
                    return true
                }
            }
        }
    }
    return false;
}

console.log(addsUpToK([15,10,3,7,64,12,25,75], 100));


