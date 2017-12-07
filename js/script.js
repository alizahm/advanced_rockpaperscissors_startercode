/*global $*/
//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
// DOCUMENT READY FUNCTION
$(document).ready(function(){
   // code must be inside this function!

//GLOBAL VARIABLES



//FUNCTIONS

$("#user-button").click(function(){    

    var computerChoice = ["rock", "paper", "scissors"];
    var computerAnswer = Math.floor(Math.random()*computerChoice.length);
    console.log(computerChoice[computerAnswer]);
    var userChoice = $("#user-choice").val();
    var computerResult = computerChoice[computerAnswer];
    
    var winnerText = "not sure yet";
  
    if((userChoice === "rock" && computerResult === "rock") || 
       (userChoice === "paper" && computerResult === "paper") || 
       (userChoice === "scissors" && computerResult === "scissors")){
        winnerText = "It's a tie!";
    } else if
       ((userChoice === "paper" && computerResult === "rock") ||
       (userChoice === "scissors" && computerResult === "paper") ||
       (userChoice === "rock" && computerResult === "scissors")) {
        winnerText = "You Win!";
    } else if
      ((userChoice === "paper" && computerResult === "scissors") ||
       (userChoice === "scissors" && computerResult === "rock") ||
       (userChoice === "rock" && computerResult === "paper")) {
        winnerText = "Computer Wins!";
    }
    
    $("#winner").text(winnerText);
  });




});