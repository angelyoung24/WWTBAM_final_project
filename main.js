// timer is commented out because it will crash the browser

var final, secondHTML;
var seconds = document.getElementById('timer').innerHTML;
var final = document.getElementById('timer').innerHTML;

// timer counts down from 60
function timer() {
    var seconds = document.getElementById('timer').innerHTML;
    secondHTML = parseInt(seconds, 60);
// 
    if (seconds === 1) {
        final = "Game Over";
        secondHTML = parseInt(seconds, 60);
        return;
    }

    seconds--;
    final = document.getElementById('timer');
    final.innerHTML = seconds;
    countdown = setInterval(timer, 1000);
    clearInterval(countdown);
}
timer();

// choice0,1,2,3 are strings
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
         
    }, 
        {
        question: "Which american daytime talk show host is famous for paternal DNA tests?",
        choice: {
            choice0: "Jenny Jones",
            choice1: "Jeremy Kyle",
            choice2: "Steve Harvey",
            choice3: "Maury Povich",
        },
        correctChoice: this.choice3,

    }, {
        question: "Which HBO drama is based on the book A Song of Ice and Fire?",
        choice: {
            choice0: "Game of Thrones",
            choice1: "The Sopranos",
            choice2: "Insecure",
            choice3: "Girls",
        },
        correctChoice: this.choice0,

    }, 
     {
        question: "Who is not the name of a character on Breaking Bad?",
        choice: {
            choice0: "Walter White",
            choice1: "Oggi 'Coca-Cola' Danailov",
            choice2: "Krazy-8",
            choice3: "Gus Fring",
        },
        correctChoice: this.choice1,

    }        
]

var random, current, currentQuestion, currentChoice0, currentChoice1, currentChoice2, currentChoice3, currentCorrectChoice, showChoice0, showChoice1, showChoice2, showChoice3, showQuestion;

// when document loads it fires this function below then on correct answer it fires it again
function setQuestion(){
    // selects random question from var easy
    random = Math.floor(Math.random() * easy.length);
    current = easy[random]
    //question
    currentQuestion = current.question;
    // the 4 choices in order of their place in a for loop
    currentChoice0 = current.choice.choice0;
    currentChoice1 = current.choice.choice1;
    currentChoice2 = current.choice.choice2;
    currentChoice3 = current.choice.choice3;

    // the correct choice
    currentCorrectChoice = current.correctChoice;
    // id targets from html page
    showQuestion = document.getElementById("question");
    showChoice0 = document.getElementById("choice0");
    showChoice1 = document.getElementById("choice1");
    showChoice2 = document.getElementById("choice2");
    showChoice3 = document.getElementById("choice3");



    // shows current question
    showQuestion.innerText = currentQuestion


    // shows choice options which connect to the current question
    showChoice0.innerText = currentChoice0
    showChoice1.innerText = currentChoice1
    showChoice2.innerText = currentChoice2
    showChoice3.innerText = currentChoice3


}
setQuestion()



function checkCorrectAnswer(choice) {

    if(choice === current.correctChoice.innerText){
        setQuestion()
        console.log('win')
    } else {
        console.log('lose')
        final.innerHTML = "Game Over";
    }
}

function gameOver() {
    // 
}
// check strings to compare if answer is correct
// addEventListeners to all the buttons

showChoice0.addEventListener("click", function () {
    choice = showChoice0.innerText
    checkCorrectAnswer(choice)
});
showChoice1.addEventListener("click", function () {
    choice = showChoice1.innerText
    checkCorrectAnswer(choice)
});
showChoice2.addEventListener("click", function () {
    choice = showChoice2.innerText
    checkCorrectAnswer(choice)
});
showChoice3.addEventListener("click", function () {
    choice = showChoice3.innerText
    checkCorrectAnswer(choice)
});
