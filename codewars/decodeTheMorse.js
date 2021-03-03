decodeMorse = function (morseCode) {
    const morseArr = [];

    morseCode.split(' ').forEach(code => {
        (/[.-]/g).test(code) ? morseArr.push(MORSE_CODE[code]) : morseArr.push(' ');
    })

    return morseArr.join('').trim().replace(/\s\s+/g, ' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));