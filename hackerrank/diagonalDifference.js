function diagonalDifference(arr) {
    let range1 = 0;
    let range2 = 0;

    for (let i = 0; i < arr.length; i++) {
        range1 += arr[i][i]
        range2 += arr[i][(arr.length - 1) - i]
    }

    return Math.abs(range1 - range2)
}

