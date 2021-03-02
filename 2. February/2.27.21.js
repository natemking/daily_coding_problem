// Given an array of integers, find the first missing positive integer in linear time and constant space.In other words, find the lowest positive integer that does not exist in the array.The array can contain duplicates and negative numbers as well.

// For example, the input[3, 4, -1, 1] should give 2. The input[1, 2, 0] should give 3.

// You can modify the input array in -place.

const findMissingPositiveInt = (arr) => {
    const positiveArr = [];
    
    arr.sort((a, b) => a - b).forEach(num => num >= 0 ? positiveArr.push(num) : null);

    let missingInt = positiveArr[0];
    
    for (let i = 0; i < positiveArr.length; i++) {
        if (i === positiveArr.length - 1) { return missingInt + 1 } 
        else if(positiveArr[i] === missingInt){ missingInt ++  } 
        else { return missingInt }
    }
}


console.log(findMissingPositiveInt([-1, -6, -5, 0, 3, 2, 1, 4, 5, 6, 7, 10, 9, 8]));