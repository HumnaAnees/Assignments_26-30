// Question_01

let userInput = parseFloat(prompt("Enter a positive number:"));
if (userInput > 0) {
    document.write("Number: " + userInput + "<br>");
    document.write("Round off value: " + Math.round(userInput) + "<br>");
    document.write("Floor value: " + Math.floor(userInput) + "<br>");
    document.write("Ceil value: " + Math.ceil(userInput) + "<br>");
} else {
    document.write("Please enter a positive number.");
}


// Question_02

let userrInput = parseFloat(prompt("Enter a negative floating point number:"));
if (userrInput < 0) {
    document.write("Number: " + userrInput + "<br>");
    document.write("Round off value: " + Math.round(userrInput) + "<br>");
    document.write("Floor value: " + Math.floor(userrInput) + "<br>");
    document.write("Ceil value: " + Math.ceil(userrInput) + "<br>");
} else {
    document.write("Please enter a negative number.");
}

// Question_03

let userrrInput = parseFloat(prompt("Enter a number:"));
let absoluteValue = Math.abs(userrrInput);
document.write("The absolute value of " + userrrInput + " is: " + absoluteValue +"<br>");


// Question_04

let diceValue = Math.floor(Math.random() * 6) + 1; 
document.write("Random dice value is: " + diceValue + "<br>");


// Question_05

let coinToss = Math.random() < 0.5 ? "Head" : "Tail"; 
document.write("Random coin value is: " + coinToss);


// Question_06

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').textContent = `Random number between 1 and 100: ${randomNumber}`;
}

// Question_07

function displayWeight() {
    const userInput = document.getElementById('weight-input').value;
    const parsedWeight = parseFloat(userInput);
    const weightMessage = isNaN(parsedWeight) 
        ? "Invalid input. Please enter a valid weight." 
        : `Your weight is: ${parsedWeight} kilograms.`;
    document.getElementById('weight-display').textContent = weightMessage;
}

// Question_08

const secretNumber = Math.floor(Math.random() * 10) + 1;
        function checkGuess() {
            const userGuess = parseInt(document.getElementById('guess-input').value);
            const resultMessage = userGuess === secretNumber
                ? "Congratulations! You guessed the secret number."
                : `Sorry, that's not correct. The secret number was ${secretNumber}.`;

            document.getElementById('result-display').textContent = resultMessage;
        }