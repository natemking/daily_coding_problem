function compareTriplets(a, b) {
    const count = [0,0];

    a.forEach((num, i) => {
        if( num === b[i]) { return };
        num > b[i] ? count[0]++ : count[1]++;
    });
    return count
}

console.log(compareTriplets([5,6,7], [3,6,10]));