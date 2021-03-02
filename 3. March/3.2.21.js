// Given the mapping a = 1, b = 2, ...z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

const decodeCount = (num) => {
  const decoder = {
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    const decoded = [];

    num.toString().split('').forEach((num, i) => {
       
        for( const letter in decoder) {
            if (num == decoder[letter]) {
                decoded.push(letter)
            }
        }
    })
    
    return decoded
    
}

console.log(decodeCount(111));