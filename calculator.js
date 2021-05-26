// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert. 

// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber = prompt("Inserisci il primo numero");
var secondNumber = prompt("Inserisci il secondo numero");
var sum = Number(firstNumber) + Number(secondNumber);
var sub = Number(firstNumber) - Number(secondNumber);
var mul = Number(firstNumber) * Number(secondNumber);
var div = Number(firstNumber) / Number(secondNumber);
alert("La somma è: " + sum);
alert("La sottrazione è: " + sub);
alert("La moltiplicazione è: " + mul);
alert("La divisione è " + div);