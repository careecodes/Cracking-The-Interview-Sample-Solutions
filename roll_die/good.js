function rollDie(){
    // assuming a standard 6 sided die
    var dieSides = [1, 2, 3, 4, 5, 6];
    return dieSides[Math.floor(Math.random() * dieSides.length)];
}