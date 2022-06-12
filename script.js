// // const hey = document.querySelector('p');

// // hey.addEventListener('click', updateName);

// // function updateName() {
// //   const name = prompt('Enter a new name');
// //   hey.textContent = `Player 1: ${name}`;
// // }

// // document.addEventListener('DOMContentLoaded', () => {
// //     function createParagraph() {
// //       const para = document.createElement('p');
// //       para.textContent = 'You clicked the button!';
// //       document.body.appendChild(para);
// //     }

// //     const buttons = document.querySelectorAll('button');

// //     for (const button of buttons) {
// //       button.addEventListener('click', createParagraph);
// //     }
// //   });

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector(".guesses");
// const lastResult = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");

// const guessSubmit = document.querySelector(".guessSubmit");
// const guessField = document.querySelector(".guessField");

// let guessCount = 1;
// let resetButton;

// function checkGuess() {
//   const userGuess = Number(guessField.value);
//   if (guessCount === 1) {
//     guesses.textContent = "Previous guesses: ";
//   }
//   guesses.textContent += userGuess + " ";

//   if (userGuess === randomNumber) {
//     lastResult.textContent = "Congratulations! You got it right!";
//     lastResult.style.backgroundColor = "green";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = "!!!GAME OVER!!!";
//     lowOrHi.textContent = "";
//     setGameOver();
//   } else {
//     lastResult.textContent = "Wrong!";
//     lastResult.style.backgroundColor = "red";
//     if (userGuess < randomNumber) {
//       lowOrHi.textContent = "Last guess was too low!";
//     } else if (userGuess > randomNumber) {
//       lowOrHi.textContent = "Last guess was too high!";
//     }
//   }

//   guessCount++;
//   guessField.value = "";
//   guessField.focus();
// }

// guessSubmit.addEventListener("click", checkGuess);

let firstName = 'Emmanuel';
let lastName ='Lyimo';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(fullName[3]);


let email = "ally@gmail.com";
// let result = email.indexOf('@');
// let result = email.slice(0,3);
// let result = email.substr(0,3);
let result = email.replace('a' ,'k');
// let result = email.indexOf('@');
console.log(result);
  

let likes = 10;
 likes+=100;
 likes++
 console.log(likes);


 const title = 'Best Novels for 2017';
 const author = 'Emmanuel';
 const comments = 30;

//  concatenation way
// const results = 'The blog called the ' + title + ' written by ' + author + ' has ' + comments + ' comments'

// template string way/ template literals
const results = `The blog called the ${title} written by ${author} has ${comments} comments`
console.log(results);


let cars = ['toyota','tesla','VW']

// let carsResult = cars.join('-');
let carsResult = cars.length
console.log(carsResult);
// creatign html template


// if statement 

let password = "Kilimanjaro12";

if(password.length<=10) {
  console.log("The passoword is not long enough")
}else if(password.length>=10) {
  console.log("The passoword is long enough")
}


// BREAK & CONTINUE
let scores = [20,50,0,10,0,0,90,100,29,49];
for (let i=0; i<scores.length; i++) {
  if(scores[i] === 0){
    continue;
  }
  console.log("gameScore",scores[i]);

  if(scores[i] === 100){
    console.log("congrats you gat the top game score");
    break;
  }
}


// SWITCH STATEMENT
let grade = "D"

switch(grade){
  case "A":
  console.log("you got an awesome grade A");
  break;
  case "B":
  console.log("you got an awesome grade B");
  break;
  case "C":
  console.log("you got an awesome grade C");
  break;
  case "D":
  console.log("you got an awesome grade D");
  break;
  default:
  console.log("you got an bad grade");
}


const speak = function(subject,A){
  console.log(`grade ${A},${subject}`);
}

speak('A','Physics');