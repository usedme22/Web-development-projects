const startButton = document.getElementById('start-btn')
const NextButton = document.getElementById('Next-btn')

const questionContainerElement = document.getElementById
   ('question-container')

   const questionElement = document.getElementById('question')
   const answerButtonsElement = document.getElementById('answer-buttons')

   let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click',startGame)

function startGame(){
   console.log('started')
   startButton.classList.add('hide')
   shuffledQuestions = question.sort(() =>Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide')
   setNextQuestion()
}

function setNextQuestion(){
   resetState()
   showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(questions){
   questionElement.innerText = question.question
   question.answer.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct){
         button.dataset.correct = answer.corrct
      }
      button.addEventListener('click',selectorAnswer)
      answerButtonsElement.appendChild(button)
   })
}

function resetState(){
         nextButton.classList.add('hide')
         while(answerButtonsElement.firstchild){
          answerButtonsElement.removeChild
          (answerButtonsElement.firstChild)
         }
      }
   function selectAnswer(e){

}

const questions = [
   {
      question: 'what is 2 + 2',
      answers: [
          { text: '4' ,correct: true },
          { text: '22',correct: false }
      ]
   }
]

 