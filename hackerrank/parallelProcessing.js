function minTime(files, numCores, limit) {
    files.sort((a,b) => b - a);

    for (let i = 0; i < limit; i++) {
        if (files[i] % numCores === 0 ) {
            files.splice(i, 1, files[i] / numCores)
        }
    }

    return files.reduce((a,c) => a + c);
}

// console.log(minTime([5, 3, 1, 5, 10, 15, 20, 25], 5, 1));
console.log(minTime([3,1,5], 1, 5));