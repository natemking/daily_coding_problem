function lemmingBattle(battlefield, green, blue) {
    // Sort the incoming lemmings in desc order
    green.sort((a,b) => b - a);
    blue.sort((a, b) => b - a);
    
    // Pull out the lemmings equal to the battlefield num
    const greenWarriors = green.splice(0,battlefield);
    const blueWarriors = blue.splice(0, battlefield);

    // Battle iterator 
    for (let i = 0; i < battlefield; i++) {
        // If one side is short warriors insert a 0
        if (greenWarriors[i] === undefined) { greenWarriors.push(0)};
        if (blueWarriors[i] === undefined) { blueWarriors.push(0)};
        // Assign the outcome value to vars
        const greenVsBlue = greenWarriors[i] - blueWarriors[i];
        const blueVsGreen = blueWarriors[i] - greenWarriors[i];
        // If outcome is > 0 push it back the remainder back to the respective lemmings array
        if (greenVsBlue > 0) { green.push(greenVsBlue) };
        if (blueVsGreen > 0) { blue.push(blueVsGreen) };
    }
    
    // If an array is empty check then return else recall function to battle again
    if (green.length === 0 || blue.length === 0) {
        if (green.length === 0 && blue.length === 0) {
            return 'Green and Blue died';
        }
    } else {
        lemmingBattle(battlefield, green, blue);
    }
    
    // Return the outcome per who won the battle
    if ( green.length > blue.length){
        return `Green wins: ${green.map(num => num).sort((a, b) => b - a).join(' ')}`;
    } else {
        return `Blue wins: ${blue.map(num => num).sort((a, b) => b - a).join(' ')}`;
    }
}

console.log(lemmingBattle(5, [10], [10]))
console.log(lemmingBattle(2, [20, 10], [10, 10, 15]));
console.log(lemmingBattle(3, [50, 40, 30, 40, 50], [50, 30, 30, 20, 60]));
console.log(lemmingBattle(10, [20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30], [15, 30, 20, 30]));