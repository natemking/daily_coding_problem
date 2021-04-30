function alphabeticShift(inputString) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alpha2 = 'bcdefghijklmnopqrstuvwxyza'.split('');
    const codeObj = {};

    alpha.forEach((char, i) => {
        codeObj[char] = alpha2[i]
    })


    return inputString.split('').map((char) => codeObj[char]).join('');
}

console.log(alphabeticShift('crazy'));