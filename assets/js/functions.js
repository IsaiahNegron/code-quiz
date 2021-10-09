//variables for html elements
var timerEl = document.getElementById("timer");
var timerId;
var startButton = document.getElementById("start");
var optionsEl = document.getElementById("options");
var saveScoreBtn = document.getElementById("save");
var initialsEl = document.getElementById("initials");
var codeQuestions = document.getElementById("code-questions");
var beginScreen = document.getElementById("begin-screen");
let endQuizEl = document.getElementById("end-quiz");
var questionIndex = 0;
let feedback = document.getElementById("feedback");


//array of quiz questions
var questions = [
    {
        title: "What is NOT considered a semantic HTML element?",
        options: ["<div>", "alt=", "<section>","<h2>"],
        answer:"<div>"
    },
    {
        title:"What character is used to declare a class in CSS?",
        options: [",", "?", ".", "()"],
        answer: "."
    },
    {
        title:"what does the 'O' in DOM stand for?",
        options: ["obtuse", "orange", "original", "object"],
        answer: "object"
    },
    {
        title: "If 'flex' is the name of an ID in my HTML, How do I declare it in JS?",
        options:["$flex", "&flex", "#flex", ".flex"],
        answer: "#flex"
    },
    {
        title: "Boolean returns as ____.",
        options: ["true or false", "a sentence", "a number", "a variable"],
        answer: "true or false"
    }
];

var time = questions.length*16

var startQuiz = function(){
    //show quiz questions
    codeQuestions.classList.remove("hidden");
    beginScreen.classList.add("hidden");


    getQuestion();

    timerId = setInterval(function(){
        time--;
        timerEl.textContent = time;
        if (time <= 0){
            submitScore();
        }
    },1000);
}

function getQuestion(){
    //get question from array
    var currentQuestion = questions [questionIndex];

    //display a questions title
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    //clear options from old questions
    optionsEl.innerHTML = "";

    // question options
    for(var i =0; i<4; i++){
        var btn = document.createElement("button");
        btn.textContent = questions [questionIndex].options[i];
        btn.setAttribute ("id",questions[questionIndex].answer);
        console.log(btn.id);
        btn.addEventListener("click",answerClick);
        optionsEl.appendChild(btn);
    };
}

function endQuiz(){
    //to be done
    console.log("end quiz here");

     //show end-quiz screen
     codeQuestions.classList.add("hidden");
     endQuizEl.classList.remove("hidden");
 
};

function answerClick(){
    console.log("function has a click start");
    console.log (this.id);
    console.log("answer", questions[questionIndex].answer)
    if(this.textContent === questions[questionIndex].answer){
        feedback.innerHTML = "Perfect Job";
        
    } else{
        feedback.innerHTML = "Sorry, wrong choice!";
        time -=15
       
    }
    feedback.setAttribute("class","feedback-style");
    setTimeout(function(){
        feedback.setAttribute("class", "hidden feedback-style")
    }, 1000);
    questionIndex++;
    if (questionIndex === questions.length){
        endQuiz();
    }
    else{
        getQuestion();
    }
};
startButton.addEventListener("click", startQuiz)