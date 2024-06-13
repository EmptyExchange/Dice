// function createDice(number) {
//     const pipPositionMatrix = {
//         1: [
//             [50, 50]
//         ],
//         2: [
//             [20, 20],
//             [80, 80]
//         ],
//         3: [
//             [20, 20],
//             [50, 50],
//             [80, 80]
//         ],
//         4: [
//             [20, 20],
//             [20, 80],
//             [80, 20],
//             [80, 80]
//         ],
//         5: [
//             [20, 20],
//             [20, 80],
//             [50, 50],
//             [80, 20],
//             [80, 80]
//         ],
//         6: [
//             [20, 20],
//             [20, 80],
//             [50, 20],
//             [50, 80],
//             [80, 20],
//             [80, 80]
//         ]
//     };
    
//     const dice = document.createElement("div");

//     dice.classList.add("dice");
    

//     for (const pipPosition of pipPositionMatrix[number]) {
//         const pip = document.createElement("div");
        
//         pip.classList.add("pips");
//         pip.style.setProperty("--top", pipPosition[0] + "%");
//         pip.style.setProperty("--left", pipPosition[1] + "%");
//         dice.appendChild(pip);
//     }
//     return dice;
// }


// function randomizeDice(diceContainer, numberOfDice) {
//     diceContainer.innerHTML = " ";

//     for ( let i = 0; i < numberOfDice; i++) {
//         const random = Math.floor((Math.random() * 6) + 1);
//         const dice = createDice(random);
        
//         diceContainer.appendChild(dice);
//         dice.setAttribute("id", "die" + (i + 1))
//         dice.addEventListener("click", () => {
//             dice.classList.toggle("dice");
//             dice.classList.toggle("savedDice")
//         })
    
//     }
    
    
// }
// let score = [];
// let diceQuantity = 6;
// const diceContainer = document.querySelector(".diceContainer");
// const btnRollDice = document.querySelector("#beginRoll");



// randomizeDice(diceContainer, diceQuantity);

// btnRollDice.addEventListener("click", () => {
//      btnRollDice.setAttribute("id", "secondRoll");
//      randomRoll();

//         secondRoll.addEventListener("click", () => {
//             secondRoll.setAttribute("id", "finalRoll");
//             randomRoll();

//                 finalRoll.addEventListener("click", () => {
//                     removeButton("finalRoll");
//                     const button = document.createElement("button");
//                     button.textContent = ("Collect Points");
//                     button.classList.add("rollDice");
//                     button.setAttribute("id", "collectScore");
//                     document.body.appendChild(button);
//                     randomRoll();
                        
//                         collectScore.addEventListener("click", () => {
//                             alert("final roll complete this is just a test")
//                         })

                    
//                 });
//         });
// });



// function removeButton(buttonId) {
//     const button = document.getElementById(buttonId);
//     button.parentNode.removeChild(button);

// };



// function randomRoll() {
//     const interval = setInterval(() => {
//         randomizeDice(diceContainer, diceQuantity);
//    }, 50);
//    setTimeout(() => clearInterval(interval), 1000);
// };
let numberOfDice = [];
let keptDice = [0, 0, 0, 0, 0, 0];
function rollDice() {
    numberOfDice = [];
        for(let i = numberOfDice.length; i < 6; i++) {
            
            const random = Math.floor((Math.random() * 6) + 1);
            numberOfDice.push(random);
        }
    
    }
    
const btnRollDice = document.querySelector(".rollDice")
btnRollDice.addEventListener("click", () => {
    rollDice();
    console.log(numberOfDice)
    console.log(keptDice)
});

const die1 = document.querySelector("#diceFace1")
const die2 = document.querySelector("#diceFace2")
const die3 = document.querySelector("#diceFace3")
const die4 = document.querySelector("#diceFace4")
const die5 = document.querySelector("#diceFace5")
const die6 = document.querySelector("#diceFace6")

die1.addEventListener("click", () => {
    die1.classList.toggle("dice");
    die1.classList.toggle("savedDice");
    keptDice.splice(0, 1, numberOfDice[0]);
    });

die2.addEventListener("click", () => {
    die2.classList.toggle("dice");
    die2.classList.toggle("savedDice");
    keptDice.splice(1, 1, numberOfDice[1]);
    });

die3.addEventListener("click", () => {
    die3.classList.toggle("dice");
    die3.classList.toggle("savedDice");
    keptDice.splice(2, 1, numberOfDice[2]);
    });

die4.addEventListener("click", () => {
    die4.classList.toggle("dice");
    die4.classList.toggle("savedDice");
    keptDice.splice(3, 1, numberOfDice[3]);
    });   

die5.addEventListener("click", () => {
    die5.classList.toggle("dice");
    die5.classList.toggle("savedDice");
    keptDice.splice(4, 1, numberOfDice[4]);
    });

die6.addEventListener("click", () => {
    die6.classList.toggle("dice");
    die6.classList.toggle("savedDice");
    keptDice.splice(5, 1, numberOfDice[5]);
    });