function createDice(number) {
    const pipPositionMatrix = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80]
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    };
    
    const dice = document.createElement("div");

    dice.classList.add("dice");
    

    for (const pipPosition of pipPositionMatrix[number]) {
        const pip = document.createElement("div");
        
        pip.classList.add("pips");
        pip.style.setProperty("--top", pipPosition[0] + "%");
        pip.style.setProperty("--left", pipPosition[1] + "%");
        dice.appendChild(pip);
    }
    return dice;
}


function randomizeDice(diceContainer, numberOfDice) {
    diceContainer.innerHTML = " ";

    for ( let i = 0; i < numberOfDice; i++) {
        const random = Math.floor((Math.random() * 6) + 1);
        const dice = createDice(random);
        
        diceContainer.appendChild(dice);
        dice.setAttribute("id", "die" + (i + 1))
        dice.addEventListener("click", () => {
            dice.classList.toggle("dice");
            dice.classList.toggle("savedDice")
        })
    
    }
    
    
}
let score = [];
let diceQuantity = 6;
const diceContainer = document.querySelector(".diceContainer");
const btnRollDice = document.querySelector("#beginRoll");



randomizeDice(diceContainer, diceQuantity);

btnRollDice.addEventListener("click", () => {
    removeButton("beginRoll");
    //create secondRoll button
    const button = document.createElement("button");
    button.textContent = "Second Roll";
    button.classList.add("rollDice");
    button.setAttribute("id", "secondRoll");
    document.body.appendChild(button);

    randomRoll();

        secondRoll.addEventListener("click", () => {
            removeButton("secondRoll");
            //Create finalRoll button
            const button = document.createElement("button");
            button.textContent = "Final Roll";
            button.classList.add("rollDice");
            button.setAttribute("id", "finalRoll");
            document.body.appendChild(button);
            
            randomRoll();

                finalRoll.addEventListener("click", () => {
                    removeButton("finalRoll");
                    //Create take score button to finalize round
                    const button = document.createElement("button");
                    button.textContent = ("Take Score");
                    button.classList.add("rollDice");
                    button.setAttribute("id", "takeScore");
                    document.body.appendChild(button);

                    randomRoll();
                });
        });
});



function removeButton(buttonId) {
    const button = document.getElementById(buttonId);
    button.parentNode.removeChild(button);

};

function randomRoll() {
    const interval = setInterval(() => {
        randomizeDice(diceContainer, diceQuantity);
   }, 50);
   setTimeout(() => clearInterval(interval), 1000);
};


