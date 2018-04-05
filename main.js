// 

var seconds;
var final; 

// timer counts down from 60
function timer() {
    var seconds = document.getElementById('timer').innerHTML;
    var secondHTML = parseInt(seconds, 60);
    
    if (seconds == 1) {
        var final = document.getElementById('timer').innerHTML = "Game Over";;
        return;
    }

    seconds--;
    final = document.getElementById('timer');
    final.innerHTML = seconds;
    countdown = setTimeout(timer, 1000);
}
timer();


var easy = [
    {
    question: "What american childrens tv series features a character named Big Bird?",
        choice:{
            choice0: "Caillou",
            choice1: "The Fresh Beat Band",
            choice2: "Sesame Street",
            choice3: "ABC Afterschool Special",
        },
        correctChoice: this.choice2,
        
    }, {
    question: "What soap opera features Erica Kane?",
        choice:{
            choice0: "All My Children",
            choice1: "The Bold and the Beautiful",
            choice2: "EastEnders",
            choice3: "Teen Mom OG",
        },
        correctChoice: this.choice0,
         
    }        
]



// selects random question from var easy
var random = Math.floor(Math.random() * easy.length);
var current = easy[random]
var currentQuestion = current.question; //question
// the 4 choices in order of their place in a for loop
var currentChoice0 = current.choice.choice0;
var currentChoice1 = current.choice.choice1;
var currentChoice2 = current.choice.choice2;
var currentChoice3 = current.choice.choice3;

// the correct choice
var currentCorrectChoice = current.correctChoice;
// id targets from html page
var showQuestion = document.getElementById("question");
var showChoice0 = document.getElementById("choice0");
var showChoice1 = document.getElementById("choice1");
var showChoice2 = document.getElementById("choice2");
var showChoice3 = document.getElementById("choice3");

// loop through an array to target a question
var question = []; 
    for (var i = 0; i < currentQuestion.length; i++) {
    question[i] = " ";
        // console.log(question)
} 
// shows current question
showQuestion.innerText = currentQuestion

// loop through an array to target a choice
var choice = [];
for (var i = 0; i < currentChoice0.length; i++) {
    choice[i] = " ";
} console.log(choice);

var choice = [];
for (var i = 0; i < currentChoice1.length; i++) {
    choice[i] = " ";
} console.log(choice);

var choice = [];
for (var i = 0; i < currentChoice2.length; i++) {
    choice[i] = " ";
} console.log(choice);

var choice = [];
for (var i = 0; i < currentChoice3.length; i++) {
    choice[i] = " ";
} console.log(choice);

// shows choice options which connect to the current question
showChoice0.innerText = currentChoice0
showChoice1.innerText = currentChoice1
showChoice2.innerText = currentChoice2
showChoice3.innerText = currentChoice3

// target the correct answer to match correct choice
var correctChoice = [];
for (var i = 0; i < currentCorrectChoice.length; i++) {
    correctChoice[i] = " ";
} console.log(correctChoice);

// probably pulling inner.html rather than the value



