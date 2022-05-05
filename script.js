/* create the 3 buttons */
const startButton = document.getElementById('start-btn')
const restartButton = document.getElementById('restart-btn')
const nextButton = document.getElementById('next-btn')

var testsong = new Audio('song1.mp3');


const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startGame)

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

restartButton.addEventListener('click', resetGame)
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    nextButton.addEventListener('click',
     testsong.pause(),
    audio.currentTime = 0,
    audio2.pause(),audio3.pause(),audio4.pause(),
    audio5.pause(),audio6.pause(),audio7.pause(),
    audio8.pause(),audio9.pause(),audio10.pause());

    currentQuestionIndex++
    setNextQuestion()

})

/* start game function- gets rid of start button, plays first song, 
and sets the question */
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random())
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    //songButton.classList.remove('hide')
    testsong.play();
    setNextQuestion()


    
}

/* restart button function */
function resetGame() {
    window.location.reload();

}

/* goes to the next question */
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

    

}


/* changes question and answer buttons */
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer,)

    answerButtonsElement.appendChild(button)
 })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      audio.pause();
}
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    //songButton.classList.add('hide')
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {


        restartButton.classList.remove('hide')
      
      
        
        
    }
}

/* correct/wrong functions */
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
/* long list of questions/answers/and whether its true/false */
const questions = [
    {
        question: 'What song is playing?',
        answers: [
            { text: 'Baby One More Time',correct: true },
            { text: 'Genie in a Bottle',correct: false },
            { text: 'Oops...I Did it Again!',correct: false },
            { text: 'No Scrubs',correct: false }
            
        ]
    },
    {
    question: 'What song is playing?',
        answers: [
            { text: 'Sk8er Boi',correct: false },
            { text: 'Complicated',correct: true },
            { text: 'So Yesterday',correct: false },
            { text: 'Pieces of Me',correct: false }
]
    },
    {
     question: 'What song is playing?',
            answers: [
                { text: 'Single Ladies',correct: false },
                { text: 'Circus',correct: false },
                { text: 'Tik Tok',correct: false },
                { text: 'Umbrella',correct: true }
]
    },
    {
     question: 'What song is playing?',
            answers: [
                { text: 'Want U Back',correct: false },
                { text: 'Part of Me',correct: false },
                { text: 'Call Me Maybe',correct: true },
                { text: 'We Found Love',correct: false }
            ]
        },
        {
     question: 'What song is playing?',
        answers: [
            { text: 'Halo',correct: false },
            { text: 'You Belong with Me',correct: false },
            { text: 'Love Story',correct: true },
            { text: 'Battlefield',correct: false }
            
        ]
    },
    {
    question: 'Who sings this song?',
        answers: [
            { text: 'Childish Gambino',correct: false },
            { text: 'Kid Cudi',correct: true },
            { text: 'Kanye West',correct: false },
            { text: 'Eminem',correct: false }
]
    },
    {
        question: 'Who sings this song?',
            answers: [
                { text: 'Avril Lavigne',correct: false },
                { text: 'Ashlee Simpson',correct: false },
                { text: 'Gwen Stefani',correct: false },
                { text: 'Hilary Duff',correct: true }
]
    },
    {
        question: 'Who sings this song?',
            answers: [
                { text: 'ZAYN',correct: true },
                { text: 'Ne-Yo',correct: false },
                { text: 'Justin Timberlake',correct: false },
                { text: 'Ed Sheeran',correct: false }
]
    },
    {
    question: 'Who sings this song?',
    answers: [
        { text: 'Big Time Rush',correct: false },
        { text: 'One Direction',correct: false },
        { text: '5 Seconds of Summer ',correct: true },
        { text: 'NSYNC',correct: false }
]
    },
{
question: 'Who sings this song?',
    answers: [
        { text: 'Jordin Sparks',correct: false },
        { text: 'Rihanna',correct: false },
        { text: 'Katy Perry',correct: false },
        { text: 'JoJo',correct: true }
]
        }
]


/* whenever you click next button it goes through a list of 
songs */
onload = init;
function init() {
    var onclick = clickUpdates();
    var song = document.getElementById("song");
    nextButton.addEventListener("click", onclick, false);
}

function clickUpdates(){
    var count = 0;
    var next = function () {
        switch(count) {
            case 0:
                // function click 1 here
               audio2.play();
            
                break;
                case 1:
                // function click 2 here
                audio3.play();
              
                break;
                case 2:
                // function click 3 here
                audio4.play();
                
                break;
                case 3:
                // function click 4 here
                audio5.play();
              
                break;
                case 4:
                // function click 5 here
                audio6.play();
                
                break;
                case 5:
                // function click 6 here
                audio7.play();

                break;
                case 6:
                // function click 7 here
                audio8.play();

                break;
                case 7:
                // function click 8 here
                audio9.play();

                break;
                case 8:
                // function click 9 here
                audio10.play();

             
                break;
                default:
                // function click 10 here
                break;
        }
        count = count<10?count+1:10;
    }
    return next;
}

{
}