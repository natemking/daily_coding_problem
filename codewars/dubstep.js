function songDecoder(song) {
    return song.replace(/WUB/ig, ' ').trim().replace(/\s\s+/g, ' ');
}

console.log(songDecoder('AWUBBWUBC'));
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));
console.log(songDecoder("WUBAWUBBWUBCWUB"));
console.log(songDecoder('JKDWUBWUBWBIRAQKFWUBWUBYEWUBWV'));
console.log(songDecoder('ABC'));
