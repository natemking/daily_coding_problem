function spinWords() {
    // Get argumnets and split into array
    let args = arguments[0].split(' ');
    // Iterate over args array, If word >= 5 letters split word to array, reverse it then join it and splice new reversed word into args array
    args.forEach((word, i) => word.length >= 5 ? 
        args.splice(i, 1, word.split('').reverse().join('')) : null )
    // Return arrgs array as string 
    return args.join(' ');
}

console.log(spinWords("Seriously this is the last one"));