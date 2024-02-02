const data = [
    {
        id:1,
        question: 'Which of these fish is actually a fish?',
        answers: [
            { answer: 'swordfish', isCorrect: true},
            { answer: 'jellyfish', isCorrect: false},
            { answer: 'starfish', isCorrect: false},
            { answer: 'crayfish', isCorrect: false}
        ],
    },
    {
        id:2,
        question: 'A flutter is group of:?',
        answers: [
            { answer: 'bees', isCorrect: false},
            { answer: 'penguines', isCorrect: false},
            { answer: 'butterflies', isCorrect: true},
            { answer: 'camels', isCorrect: false}
        ],
    },
    {
        id:3,
        question: 'Agroup of whis animal is referred to as a waker?',
        answers: [
            { answer: 'bats', isCorrect: false},
            { answer: 'vulters', isCorrect: true},
            { answer: 'ants', isCorrect: false},
            { answer: 'tingtong', isCorrect: false}
        ],
    },
]

const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.results')
const question = document.querySelector('.question')
const answerContainer = document.querySelector('.answers')
const submit = document.querySelector('.button')
const play = document.querySelector('.play')

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectetdAnswer;

const playAgain = ()=>{
     qIndex = 0;
     correctCount = 0;
     wrongCount = 0;
     total = 0;
    showQuestion(qIndex)  
};

play.addEventListener('click',()=>{
    resultScreen.style.display = 'none'
    gameScreen.style.display = 'block' 
    playAgain()
})

const showResult = ()=> {
    resultScreen.style.display = 'block'
    gameScreen.style.display = 'none' 
    resultScreen.querySelector('.correct').textContent = 
    `Correct Answer: ${correctCount}`
    resultScreen.querySelector('.wrong').textContent = 
    `Wrong Answer: ${wrongCount}`
    resultScreen.querySelector('.score').textContent = 
    `Score: ${(correctCount - wrongCount) *10}`
}

const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult()
    selectetdAnswer = null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `<div class="answer">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
            <label for=${index}>${item.answer}</label>
        </div>
        `
    ).join('');

    selectAnswer()
};

const selectAnswer = () => {
    answerContainer.querySelectorAll('input').forEach(el=>{
        el.addEventListener('click', (e)=>{
            selectetdAnswer= e.target.value;
        })
    })
}

const submitAnswer = ()=>{
    submit.addEventListener('click',()=>{
        if(selectetdAnswer !== null){
            selectetdAnswer === 'true' ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex);
        } else alert('Select an answer')
        
    });
}

showQuestion(qIndex)
submitAnswer()


