// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.

function pigIt(str) {
    const pigArr = [];

    str.split(' ').forEach(word => {
        (/[.?!]/).test(word) ? pigArr.push(word) :
        pigArr.push(word.slice(1) + word.slice(0,1) + 'ay')
    });

    return pigArr.join(' ');
}

console.log(pigIt('This is my string !'));