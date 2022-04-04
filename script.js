'use strict';
/*


console.log(document.querySelector(".message").textContent);


//When Number is Correct we display 👇🏽
document.querySelector(".message").textContent = "Correct Number! 🎉🎊";

//Number Class
document.querySelector(".number").textContent = 13;
//Score Class
document.querySelector(".score").textContent = 10;
//Guess Class : Here to get value from input field we use value property.
document.querySelector(".guess").value;
//Setting Value 
document.querySelector(".guess").value = 30;
*/

//Creating a Secret Number
//--> Creating Random Number for Secret Number, Once per game.
let secretNumber = Math.trunc(Math.random() * 20) +1;
// document.querySelector(".number").textContent = secretNumber;

// Creating Score
let score = 20;
let highScore = 0;


//Taking Input and Checking
//-- We get number from input after user clicks on the "Check" button.
document.querySelector(".check").addEventListener("click", function(){
    //User enters a guess value in input, Clicks the check button.
    let currentScore = score;
    console.log(score);
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    //->> Check if the Input is empty.
    if(!guess) { //If guess is false -- 0 Is a falsy value, and to make our scenario right we use negate.
        
        //->> Check if the Input is a valid number.
        document.querySelector(".message").textContent= "⛔ No Number!"
    }
    else if(guess === secretNumber){
        
        //->> Check if the Input is a same as Secret Number.
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent= "🎉 Correct Number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if(currentScore > highScore) {
            highScore = currentScore;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if(guess !== secretNumber){
        if(score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High!" : "📈 Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent= "☠ You lost the game!"
            document.querySelector(".score").textContent = 0;
        }
    }
    else if(guess > secretNumber) {
        
        //->> Check if the Input is a more than Secret Number.
        if(score > 1){
        document.querySelector(".message").textContent= "📈 Too High!";
        
        } else {
            document.querySelector(".message").textContent= "☠ You lost the game!"
            document.querySelector(".score").textContent = 0;
        }
    }
    else if(guess < secretNumber) {
        
        //->> Check if the Input is a less than Secret Number.
        if(score > 1){
            document.querySelector(".message").textContent= "📈 Too Low!";
            score--;
            document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "☠ You lost the game!"
                document.querySelector(".score").textContent = 0;
            }
    }
})


//Coding Challenge 1
//--> Select element again class and attach event handler
document.querySelector(".again").addEventListener("click", function(){
    //--> Restore Initial Values of the "scores" and "secretNumber" variables
    score = 20;
    secretNumber = Math.trunc(Math.random() *20) +1; 
    //--> Restore Initial Conditions of the message, number, score and guess input fields
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    //--> Restore orignal background color and width
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
})
