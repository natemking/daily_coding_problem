function iqTest(numbers) {
    const arr1 = [];
    const arr2 = [];

    numbers.split(' ').forEach((num, i) => num % 2 === 0 ? arr1.push(i + 1) : arr2.push(i + 1))

    return arr1.length === 1 ? arr1[0] : arr2[0];
}
console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
console.log(iqTest("1 1 1 2"));