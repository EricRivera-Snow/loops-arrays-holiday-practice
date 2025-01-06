// for (i = 5; i <=10; i++){
//     console.log(i);
// }

// for (let i = 10; i <= 40; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let loggedIn = false, i = 0; !loggedIn; i++) {
//   console.log("Incorrect login credentials");

//   if (i === 2) {
//     loggedIn = true;
//     console.log("Successfully logged in!");
//   }
// }

for (i = 1; i <= 100; i++) {
  if (i === 50) {
    console.log("Half way there!");
    continue;
  }

  if (i === 100) {
    console.log(`You made it!
All, done!`);
    continue;
  }

  if (i % 10 === 0) {
    console.log(`Checkpoint! ${i}`);
  }
}
