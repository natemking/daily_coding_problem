
function cakes(recipe, available) {
    // Stor array 
    const total = [];
    
    for (const ingredient in recipe) {
        // Guard clause for if ingredients are needed in recipe are not available
        if(!available.hasOwnProperty(ingredient)) return 0;
        // Divide the amount available by the amount needed and push results to stor array
        total.push(available[ingredient] / recipe[ingredient]);
    }
    //Return the lowest amount in the total array rounded down
    return Math.floor(Math.min(...total))
}



console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));

console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));