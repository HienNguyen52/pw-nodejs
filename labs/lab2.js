//Lab 2.1
const readline = require('readline-sync');
let yourWeight = readline.question('Your weight: ');
let yourHeight = readline.question('Your height: ');
let yourBMI = yourWeight / (yourHeight*2);
if(yourBMI < 18.5) {
    console.log('Underweight');
} else if (yourBMI <=24.9) {
    console.log('Normal weight');
} else if(yourBMI <=29.9) {
    console.log('Over weight ');
} else {
    console.log('Obesity');
};

// Lab 2.2
/*const readline = require('readline-sync');
let inputNumber = readline.question('Number: ')
let result = inputNumber % 2
if(result==0) {
    console.log ("It's an even number");
} else {
    console.log("It's an odd number");
};
*/
