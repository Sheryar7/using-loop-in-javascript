// // 1) First example: sum nubers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum(){
    const userNumberInpuElement = document.getElementById("user-number");
    const enteredNumber = userNumberInpuElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++){
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById("calculated-sum");

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display= "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);
 

// // 2) highlight links

const highlightLinksButtonElement = document.querySelector("#highlight-links button");

function highlightLinks(){
    const anchorElements = document.querySelectorAll("#highlight-links a");

    for (const anchorElement of anchorElements){
        anchorElement.classList.add("highlight");
    }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// 3) Display user data

const dummyUserData = {
    firstName: "Sherry",
    lastName: "Khan",
    age: 24
};

const displyUserDataButtonElement = document.querySelector("#user-data button");

function displyUserData() {
    const outputDataElement = document.getElementById("output-user-data");

    outputDataElement.innerHTML = "";

    for (const key in dummyUserData){
        const newUserDataListItemElement = document.createElement("li");
        const outputText = key.toUpperCase() + ": " + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displyUserDataButtonElement.addEventListener("click", displyUserData);


// 4) Statistics / roll the dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice(){
    return  Math.floor(Math.random() * 6) + 1; //math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById("user-target-number");
    const diceRollsListElement = document.getElementById("dice-rolls");
    
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        // (if (rolledNumber == enteredNumber){
        //     hasRolledTargetNumber = true;
        // }
        // numberOfRolls = numberOfRolls + 1;)
        numberOfRolls++;
        const newRollListItemElement = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls)