/**Initialize game to default/begin state */
let time = 75
let index = 0
let currentScore = 0
let highScore = 0
let isOver = false
let gameStart = true
let interval


/** Add event listener */
$(document).on('click', event =>
{   

    if(event.target.id === 'start')
    {
        timer()
        startGame()
        document.getElementById('currentScore').textContent = currentScore
        // document.getElementById("start").disabled = true
    }

    if(event.target.id === 'reset')
    {
        // document.getElementById("reset").disabled = true
        gameOver()
        timer()
        startGame()
    }

    if(index < questions.length && !isOver)
    {
    if(event.target.id === 'btnAnswer1' && gameStart)
    {
       
       results(questions[index].choices.indexOf(event.target.textContent))
    }

    if(event.target.id === 'btnAnswer2' && gameStart)
    {
        
        results(questions[index].choices.indexOf(event.target.textContent))
    }

    if(event.target.id === 'btnAnswer3' && gameStart)
    { 
       
        results(questions[index].choices.indexOf(event.target.textContent))
    }

    if(event.target.id === 'btnAnswer4' && gameStart)
    {
      
        results(questions[index].choices.indexOf(event.target.textContent))
    }
    }
    else
    {
        isOver = true
        gameOver()
    }
    
    
})

/** start the game */
let startGame = () =>
{
    onScreenQA(index)
}
/** Question and choices show up*/
let onScreenQA = (i) =>
{
        document.getElementById('btnAnswer1').innerHTML = questions[i].choices[0]
        document.getElementById('btnAnswer2').innerHTML = questions[i].choices[1]
        document.getElementById('btnAnswer3').innerHTML = questions[i].choices[2]
        document.getElementById('btnAnswer4').innerHTML = questions[i].choices[3]
        document.getElementById('question').innerHTML = questions[i].question
}

/** Check Questions && update score and subtract time by 2 if wrong */
let results = (str) =>
{
    if(!isOver)
    {  
         if(str === questions[index].answer)
        {
            ++index
            currentScore++
            document.getElementById('currentScore').textContent = currentScore
            console.log("correct " + currentScore)
            setHighScore()
            if(index < questions.length)
            {
            onScreenQA(index)
            }
        }
        else
        {
            console.log('it goes here instead')
            time -= 2
        }
    }

        let temp = questions.length
        if(index === temp)
        {
            gameOver()
        }
}
/** Play again and reset game and  */
let playAgain = () =>
{

}
/** Store high score into client-side storage */
let setHighScore = () =>
{
    let score = localStorage.getItem("highScore")
    if(score === null || currentScore >= highScore)
    {
    localStorage.setItem("highScore", currentScore)
    document.getElementById('highScore').textContent = `${localStorage.getItem(`highScore`)}`
    }
}

/** Check and get high score from client-side storage */
const getHighScore = () =>
{
    if(localStorage.getItem('highScore') === null)
    {
        setHighScore()
        return 0
    }
    else
    {
        document.getElementById('highScore').textContent = `${localStorage.getItem(`highScore`)}`
        return localStorage.getItem('highScore')
    }
}
/** If game is over, set scene to display play again button*/
let gameOver = () =>
{
    //Initalize to default to start new game
    console.log("finish")
    clearInterval(interval)
     time = 75
     index = 0
     currentScore = 0
     isOver = false
     gameStart = true
     highScore = getHighScore()
}

/** Timer*/
let timer = () =>
{
    interval = setInterval(function(){ 
        if(time >= 0)
                {
                $('.second').text(time--); 
                }     
                else
                {
                    isOver = true
                    clearInterval(interval)
                }  
                if(index === questions.length)
                {
                    clearInterval(interval)
                }   
                }, 1000)
}

/** Get data from client-side storage and store it into highscore */
highScore = getHighScore()


// let timer = 3
// let isClick  = false
// let isOver = false
// let correct = false
// let index = 0
// let currentScore = 00
// let highScore = 0
// const button = ['Start','Play Again']
// let date = Date().slice(0,33)

// let genBut = () =>
// {
    
// for(let i = 0; i < button.length;i++)
// {
//     $('.myBtn').append($(`<button id="${button[i].replace(/\s/g, '')}" class = "btn btn-primary btn-lg btn-block">${button[i]}</button>`))
// }
// document.getElementById("PlayAgain").disabled = true
// }

// $(document).on('click', event =>
// {   


//     if(event.target.id === 'Start')
//     {
//         document.getElementById('currentScore').textContent = `${currentScore}`
//         document.getElementById("Start").disabled = true
//         timerStart()
//     }

//     if(event.target.id === 'PlayAgain')
//     {
//         document.getElementById("PlayAgain").disabled = true
//         resetGame()
//     }


//     checkAnswer(questions[index].choices.indexOf(event.target.textContent))

// })

// let timerStart = () =>
// {
   
//    let time = setInterval(function(){ 
//         if(timer > 0)
//         {
//         $('.second').text(timer--); 
//         gameStart(index)
//         }
        
//         if(timer === 0 ||index === questions.length)
//         {
//         isOver = true
//         document.getElementById("PlayAgain").disabled = false
//         document.getElementById('aside1').innerHTML = "<h3>Time out!<h3>"
//         console.log(timer)
//         clearInterval(time)    
//         }

//     }, 1000)
    
// }
 

// let gameStart = (index) =>
// {
//     document.getElementById('btnAnswer1').innerHTML = questions[index].choices[0]
//     document.getElementById('btnAnswer2').innerHTML = questions[index].choices[1]
//     document.getElementById('btnAnswer3').innerHTML = questions[index].choices[2]
//     document.getElementById('btnAnswer4').innerHTML = questions[index].choices[3]
//     document.getElementById('question').innerHTML = questions[index].question
// }

// let resetGame = () =>
// {
//      timer = 3
//      isClick  = false
//      isOver = false
//      correct = false
//      index = 0
//      currentScore = 0
//      highScore = 0
//     document.getElementById('aside1').innerHTML = `<h3 class="time"><u>Time:</u></h3> <span class="second"></span> second(s)`
//     score()
//     timerStart()
// }

// const score = () =>
// {
//     document.getElementById('currentScore').textContent = `${currentScore}`
//     // $('.currentScore').text(scores)
// }

// let checkAnswer = (str) =>
// {
// if(str === questions[index].answer && !isOver)
//     {
//         ++index
//         gameStart(index)
//         console.log("here")
//         console.log(index)
//         correct = true
//         currentScore++
//         score()
//     }
//     else
//     {
//         correct = false    
//     }
// }


// genBut()

// $('.second').text(timer)


//      setInterval(function(){ 
               
//         document.getElementById("date").textContent = `${Date().slice(0,33)}`
        
//      }, 1000)
     

