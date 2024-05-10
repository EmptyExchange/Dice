const diceResult = [];

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//function rolls dice to get 6 random numbers which will be assigned to dice faces
function rollDice() {
    for (i = 6; i > 0; i--){
        let diceNumber = getRandomNumber(1, 6);
        diceResult.push(diceNumber);
    }
   console.log(diceResult)
const firstDie = diceResult[0];
const secondDie = diceResult[1];
const thirdDie = diceResult[2];
const fourthDie = diceResult[3];
const fifthDie = diceResult[4];
const sixthDie = diceResult[5];
console.log(firstDie);
console.log(secondDie);
console.log(thirdDie);
console.log(fourthDie);
console.log(fifthDie);
console.log(sixthDie);
}


