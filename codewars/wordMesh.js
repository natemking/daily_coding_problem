function wordMesh(arr) {
    // Storage array for regex filter result
    let result = []
    // Var for meshed word
    let mesh = '';

    // Use regex to match the same letters at end & beginning of words then push results to stor array
    arr.forEach((word, i) => {
       result.push(`${arr[i]} ${arr[i + 1]}`.match(/(.+) \1/g));
    });

    // Slice off the last array that comes back as null
    result = result.slice(0,-1)

    // Iterate through result and if array is null return w/ message else use regex to pull out matching letters and combine
    for (let i = 0; i < result.length; i++) {
        if (result[i] === null) {
            return 'failed to mesh';
        } else {
            mesh += result[i][0].match(/[^\s]+/);
        }
    }
    return mesh;
}  


console.log(wordMesh(["kingdom", "dominator", "notorious", "usual", "allegory"]));
console.log(wordMesh(["allow", "lowering", "ringmaster", "terror"]));
console.log(wordMesh(["abandon", "donation", "onion", "ongoing"]));
console.log(wordMesh(["jamestown", "ownership", "hippocampus", "pushcart", "cartographer", "pheromone"]));
