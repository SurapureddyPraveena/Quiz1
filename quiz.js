const username=document.getElementById("username");
const startquiz=document.getElementById("startquiz");
const error=document.getElementById("error");
const rules_submit=document.getElementById("rules_submit");
const rules=document.getElementById("rules");
const nextPage=document.getElementById("nextPage");
var lname;
nextPage.addEventListener("click", function(event){
        event.preventDefault();
        const namee=document.getElementById("Uname").value;
        lname=namee;
        if(namee==""){
            error.style.display="block";
            error.innerHTML="<h5>Please enter the username!</h5>";
            error.style.color="red";
        }
        else if (localStorage.getItem(namee))
        {   
            error.style.display="block";
            error.innerHTML="<h5>Username not available!</h5>";
            error.style.color="red";
        }
        else {
            rules.style.display="block";
            username.style.display="none";
            rules_submit.addEventListener("click", function(e){
                e.preventDefault();
                rules.style.display="none";
                startquiz.style.display="block";
                setInterval(countdown, 1000);
            })
        }
})





const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScrpit",
        a: "<js>",
        b: "<scripting>",
        c: "<javascript>",
        d: "<script>",
        correct: "d",
    },
    {
        question: "Where is the correct place to insert a JavaScript",
        a: "The <head> section",
        b: "The <body> section",
        c: "Neither a nor b",
        d: "Both a and b",
        correct: "d",
    },
    {
        question: "What is the correct syntax for referring to an external scrpit called xxx.js",
        a: '<scrpit href="xxx.js>"' ,
        b: '<scrpit name="xxx.js>"',
        c: '<scrpit src="xxx.js>"',
        d: '<scrpit id="xxx.js>"',
        correct: "c",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript",
        a: "interface",
        b: "throws",
        c: "program",
        d: "short",
        correct: "c",
    },
    {
        question: "The external JavaScrpit file must contain the <script> tag",
        a: "True",
        b: "False",
        c: "Maybe",
        d: "none of the above",
        correct: "b",
    },{
        question: "JavaScript is a _____-side programming language",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "none",
        correct: "c",
    },{
        question: "How do you find the minimum of x and y using JavaScript",
        a: "min(x, y)",
        b: "Math.min(x, y)",
        c: "Math.min(xy)",
        d: "min(xy)",
        correct: "b",
    },{
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        a: "catch",
        b: "lable",
        c: "try",
        d: "default",
        correct: "d",
    },{
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        a: "if(x 2)",
        b: "if(x=2)",
        c: "if(x==2)",
        d: "if(x!=2)",
        correct: "c",
    },{
        question: "What will the code return? /n Boolean(3 < 7)",
        a: "True",
        b: "False",
        c: "Nan",
        d: "Syntax error",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const table=document.getElementById("table");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    submitBtn.innerHTML="Continue";
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
submitBtn.addEventListener("click", () => {
    setInterval(countdown, 1000);
    const answer = getSelected();
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
        
    } else {
        quiz.innerHTML = `
            <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        quiz.style.display="block";
        localStorage.setItem(lname, score);
        table.style.display="block";
        for(let i=0; i<localStorage.length; i++){
            let key=localStorage.key(i);
            let value=localStorage.getItem(key);
            table.innerHTML+=`
            <tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>`;
        }
    }
});
const count=document.getElementById("count");
const min=document.getElementById("min");
var c=300;
function countdown(){
    if(c>=0){ 
        const mins = Math.floor(c / 60) % 60;
        const secs=Math.floor(c)%60;
        min.innerHTML= mins  
        count.innerHTML=secs;
        c=c-1;
    }
    else{
        quiz.innerHTML = `
            <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
        quiz.style.display="block";

        localStorage.setItem(lname, score);
        table.style.display="block";
        for(let i=0; i<localStorage.length; i++){
            let key=localStorage.key(i);
            let value=localStorage.getItem(key);
            table.innerHTML+=`
            <tr>
                <td>${key}</td>
                <td>${value}</td>
            </tr>`;
        }
    }
}