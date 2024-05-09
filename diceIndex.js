const diceResult = [];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//function rolls dice to get 6 random numbers which will be assigned to dice faces
function rollDice() {
    for (i = 6; i > 0; i--){
        let diceNumber = getRandomNumber(1, 6);
        diceResult.push(diceNumber);
    }
    console.log(diceResult)
}

rollDice();