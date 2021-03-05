function orderWeight(strng) {
    const arr = strng.trim().split(' ');
    const reduceArr = [];
    const weightArr = [];
    const final = [];

    arr.forEach(num => {
        reduceArr.push(num.split('').reduce((a, c) => parseInt(a) + parseInt(c)));
    });

    arr.forEach((num, i) => {
        weightArr.push([reduceArr[i], num])
    });

    weightArr.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < weightArr.length - 1; i++) {
        if (weightArr[i][0] === weightArr[i + 1][0]){
            weightArr.splice(i+1, 0, weightArr.splice(i,1)[0]);
        }
    }

    weightArr.forEach(arr => final.push(arr[1]));

    return final.join(' ');
   
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));