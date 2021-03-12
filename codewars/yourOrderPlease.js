function order(words) {
    if (words.trim() === '') return words;
    words = words.split(' ');
    const ordered = [];
    let count = 1;
    

    do {
        words.forEach(word => {
            regex = new RegExp(count);
            regex.test(word) ? (ordered.push(word), count++) : null ;
        })
    } while (count <= words.length);

    return ordered.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(" "))