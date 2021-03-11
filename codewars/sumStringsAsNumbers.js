function sumStrings(a, b) {
    // Stor array for sum values
    const finalSum = [];
    // Var for carry over from sum
    let carry = 0;

    // Guard clauses for empty strings
    if (a === '') a = '0';
    if (b === '') b = '0';
    // If one of the numbers is shorter than the other, pad with leading zeros
    a.length < b.length ? a = a.padStart(b.length, '0') : b = b.padStart(a.length, '0');

    // Iterate backwards 
    for (let i = a.length - 1; i >= 0; i--) {
        // var for holding the sum
        let sum = 0;
        // Add the parsed integers of the new arrays from the end to the beginning and add on the value of carry.
        sum = parseInt(a.split('')[i]) + parseInt(b.split('')[i]) + carry;
        // If sum >= 10 add the 2nd digit to the beginning of the stor array and update carry to 1, else add the int to the beginning of the stor array and set carry to zero
        sum >= 10 ? (finalSum.unshift(sum.toString().charAt(1)), carry = 1 ): (finalSum.unshift(sum), carry = 0);
    }
    // If carry == 1 add it to the beginning of the store array
    carry == 1 ? finalSum.unshift(carry) : null ;

    // Return the stor array as a string and remove any leading zeros
    return finalSum.join('').replace(/^[0]/, '');

    // CodeWars doesn't accept BigInt and all above code can be done w/ the line below
    //return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
console.log(sumStrings('5','5'));
console.log(sumStrings('', '10'));
console.log(sumStrings('60', '160'));
console.log(sumStrings('00103', '08567'));