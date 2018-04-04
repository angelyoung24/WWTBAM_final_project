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
            correctChoice: 2
    }, {
    question: "What soap opera features Erica Kane?",
        choice:{
            choice0: "All My Children",
            choice1: "The Bold and the Beautiful",
            choice2: "EastEnders",
            choice3: "Teen Mom OG",
    },
            correctChoice: 0
    }        
]



// selects random question from easy.js
var random = Math.floor(Math.random() * easy.length);

var currentQuestion = easy[random].question;
var currentChoice0 = easy[random].choice0;
var currentChoice1 = easy[random].choice1;
var currentChoice2 = easy[random].choice2;
var currentChoice3 = easy[random].choice3;
var showQuestion = document.getElementById("question");
var showChoice0 = document.getElementById("choice0");
var showChoice1 = document.getElementById("choice1");
var showChoice2 = document.getElementById("choice2");
var showChoice3 = document.getElementById("choice3");

// loop through an array to target a question
var question = []; 
    for (var i = 0; i < currentQuestion.length; i++) {
    question[i] = " ";
        console.log(question)
} 

showQuestion.innerText = question.join(" ");



