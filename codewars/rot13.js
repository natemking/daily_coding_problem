function rot13(message) {
    let final = [];

    const cipher = {
        'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 'g': 't', 'h': 'u', 'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y', 'm': 'z','n': 'a', 'o': 'b','p': 'c','q': 'd','r': 'e','s': 'f','t': 'g','u': 'h','v': 'i','w': 'j','x': 'k','y': 'l','z': 'm'
    }

    message.split('').forEach( char => {
        if (!(/[A-Za-z]/).test(char)){
            final.push(char)
        } else if((/[A-Z]/).test(char)){
            final.push(cipher[char.toLowerCase()].toUpperCase());
        } else {
            final.push(cipher[char]);
        }
    });
    return final.join('');

}

console.log(rot13("10+2 is twelve."))