function sumStrings(a, b) {
    if (a === '') a = 0;
    if (b === '') b = 0;
   
    return (BigInt(a) + BigInt(b)).toString();

}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))