function rgb(r, g, b) {
    // Convert RGB number to an array
    const rgb= [r,g,b];
    // Storage array for the converted RGB numbers
    const hexArr = [];
    // Object of the hex letters and there corresponding base10 num
    const hexChars = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    }

    rgb.forEach(color => {
        // If a number outside of the RGB range is given, handle it
        if (color > 255) color = 255;
        if (color < 0 ) color = 0;
        // Divide the RGB number by 16 and convert it to a string
        let convert = (color/16).toString();
        // Push the integer of the converted number to the storage array
        hexArr.push(Number(convert.slice(0,2)));
        // If the converted number is a whole number push 0 to the array, else push the product of the fractional portion and 16
        convert.indexOf('.') === -1 ? hexArr.push(0) :
        hexArr.push(convert.slice(convert.indexOf('.')) * 16);
    });

    // Iterate over stor array. if the num is < 10 return it. If num is > 10 return its corresponding hex char
    let hex = hexArr.map(num => num < 10 ? num : hexChars[num]);
    // Return the hex array as a string
    return hex.join('');
}


console.log(rgb(96, 236, 270));

