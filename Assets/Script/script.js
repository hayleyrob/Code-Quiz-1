
let timer = 3
let isClick  = false
let isOver = false
let correct = false
let index = 0
let currentScore = 0
let highScore = 0
const button = ['Start','Play Again']
let date = Date().slice(0,33)

let genBut = () =>
{
    
for(let i = 0; i < button.length;i++)
{
    $('.myBtn').append($(`<button id="${button[i].replace(/\s/g, '')}" class = "btn btn-primary btn-lg btn-block">${button[i]}</button>`))
}
document.getElementById("PlayAgain").disabled = true
}

$(document).on('click', event =>
{   


    if(event.target.id === 'Start')
    {
        document.getElementById('currentScore').textContent = `${currentScore}`
        document.getElementById("Start").disabled = true
        timerStart()
    }

    if(event.target.id === 'PlayAgain')
    {
        document.getElementById("PlayAgain").disabled = true
        resetGame()
    }


    checkAnswer(questions[index].choices.indexOf(event.target.textContent))

})

let timerStart = () =>
{
   
   let time = setInterval(function(){ 
        if(timer > 0)
        {
        $('.second').text(timer--); 
        gameStart(index)
        }
        
        if(timer === 0 ||index === questions.length)
        {
        isOver = true
        document.getElementById("PlayAgain").disabled = false
        document.getElementById('aside1').innerHTML = "<h3>Time out!<h3>"
        console.log(timer)
        clearInterval(time)    
        }

    }, 1000)
    
}
 

let gameStart = (index) =>
{
    document.getElementById('btnAnswer1').innerHTML = questions[index].choices[0]
    document.getElementById('btnAnswer2').innerHTML = questions[index].choices[1]
    document.getElementById('btnAnswer3').innerHTML = questions[index].choices[2]
    document.getElementById('btnAnswer4').innerHTML = questions[index].choices[3]
    document.getElementById('question').innerHTML = questions[index].question
}

let resetGame = () =>
{
     timer = 3
     isClick  = false
     isOver = false
     correct = false
     index = 0
     currentScore = 0
     highScore = 0
    document.getElementById('aside1').innerHTML = `<h3 class="time"><u>Time:</u></h3> <span class="second"></span> second(s)`
    score()
    timerStart()
}

const score = () =>
{
    document.getElementById('currentScore').textContent = `${currentScore}`
    // $('.currentScore').text(scores)
}

let checkAnswer = (str) =>
{
if(str === questions[index].answer && !isOver)
    {
        ++index
        gameStart(index)
        console.log("here")
        console.log(index)
        correct = true
        currentScore++
        score()
    }
    else
    {
        correct = false    
    }
}


genBut()

$('.second').text(timer)


     setInterval(function(){ 
               
        document.getElementById("date").textContent = `${Date().slice(0,33)}`
        
     }, 1000)
     

