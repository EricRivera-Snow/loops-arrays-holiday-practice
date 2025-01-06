// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// === the below starts with a false condition so nothing gets logged ===
// for (let i = 10; i < 10; i++) {
//   console.log(i);
// }

// === looping through arrays ===

// const names = ["James", "Dietrich", "Lalo", "Francios", "Giovanni", "Ivan"];

// console.log(`Hello, ${names[0]}`);
// console.log(`Hello, ${names[1]}`);
// console.log(`Hello, ${names[2]}`);

// for (let i = 0; i < names.length; i++) {
//   console.log(`Hello, ${names[i]}`);
// }

// for (let i = names.length - 1; i >= 0; i--) {
//   console.log(`Hello, ${names[i]}`);
// }

// const ericsStuff = [
//   "snowboards",
//   "skateboards",
//   "ice skates",
//   "squash racquets",
// ];

// for (let i = 0; i < ericsStuff.length; i++) {
//   console.log(ericsStuff[i]);
// }

// for (let i = ericsStuff.length - 1; i >= 0; i--) {
//   console.log(ericsStuff[i]);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i += 2) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (i % 2 === 1) {
//     console.log(numbers[i]);
//   }
// }

// === generate a 'random' integer between 1 and 10 ===
const numberToGuess = Math.floor(Math.random() * 10) + 1;
let userHasGuessed = false;
let numTries = 0;
let userQuit = false;
while (!userHasGuessed && numTries < 3) {
  console.log(numberToGuess);
  let usersGuess = prompt("I have a number in mind. Try to guess!");
  if (usersGuess === null) {
    alert("Why do you not want to play my fabulous game? O.o");
    userQuit = true;
    break;
  }
  usersGuess = parseInt(usersGuess);
  if (isNaN(usersGuess)) {
    alert("Please enter a valid integer");
    continue;
  }
  if (usersGuess === numberToGuess) {
    alert("Great, you got it!");
    userHasGuessed = true;
  } else {
    alert("Sorry, wrong guess");
    numTries++;
  }
}

if (!userHasGuessed && !userQuit) {
  alert("Sorry, better luck next time");
}

// while(/**some condition that evaluates to a boolean; this is a loop termination condition */){
// do something while the condition is true - you must change your loop termination condition at some point in here
//}

// let currentNumber = 1;

// while (currentNumber <= 10) {
//   console.log(currentNumber);
//   currentNumber++;
// }
