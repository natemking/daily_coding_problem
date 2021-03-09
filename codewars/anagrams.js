function anagrams(word, words) {
    const newWords = [];
    const matches = [];

    // Spilt and alphabetize the words array then push to new array
    words.forEach(wrd => {
        newWords.push(wrd.toLowerCase().split('').sort().join(''));
    });

    // Check if sorted word equals the sorted words
    newWords.forEach((wrd, i) => {
        if (word.toLowerCase().split('').sort().join('') === wrd) {
            matches.push(words.slice(i, i + 1));
        }
    });

    // Array flatten helper function since .flat() does not work on CodeWars
    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
    }

    return flatten(matches);
}
    



console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));