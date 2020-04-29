/**Initialize game to default/begin state */
let time = 120
let index = 0
let currentScore = 0
let highScore = 0
let isOver = false
let gameStart = true
let interval
document.getElementById("reset").disabled = true

/** Add event listener */
$(document).on('click', event =>
{   

    // Check if "Start" button is clicked
    if(event.target.id === 'start')
    {
        timer()
        startGame()
        document.getElementById('currentScore').textContent = currentScore
    }

    // Check if "Play Again" button is clicked
    if(event.target.id === 'reset')
    {
        gameOver()
        timer()
        startGame()
        document.getElementById('currentScore').textContent = currentScore
    }

    // Check answer
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
    }

})

/** start the game */
let startGame = () =>
{
    document.getElementById("start").disabled = true
    document.getElementById("reset").disabled = true
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
            setHighScore()
            if(index < questions.length)
            {
            onScreenQA(index)
            }
        }
        else
        {
            console.log(isOver)
            console.log('it goes here instead')
            time -= 5
        }
    }

    // Check if all the questions are answered 
        let temp = questions.length
        if(index === temp)
        {
            document.getElementById('question').innerHTML = `Congratulation ! You made it through, press "Try Again" button to play again`
            isOver = true
            console.log(isOver)
            document.getElementById("reset").disabled = false
        }

        // Check if game is over and not answered all questions
        if(isOver && index < questions.length)
                {
                    if (index > 1)
                    {
                    document.getElementById('question').innerHTML = `Good job ! you made it through ${currentScore} question(s). 
                                                                        Wanna try again? Press the "Play Again" button above.`
                    }
                    else
                    {  
                        document.getElementById('question').innerHTML = `Uh oh... ! Please press the "Try Again" button above to play again`
                    }

                    // Set "Play Again" button to be click able again
                    document.getElementById("reset").disabled = false

                    // Set time to be default to 0 to prevent negative number
                    if (time < 0)
                    {
                        time = 0
                    }
                    $('.second').text(time)

                }
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
            clearInterval(interval)
            time = 120
            index = 0
            currentScore = 0
            isOver = false
            gameStart = true
            document.getElementById("reset").disabled = false    
            highScore = getHighScore()
}

/** Timer*/
let timer = () =>
{
    interval = setInterval(function(){ 
        if(time >= 0)
                {
                $('.second').text(time--)
                }     
                else
                {
                    isOver = true
                    results("")
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

// Date on footer
document.getElementById("date").textContent = `${Date().slice(0,33)}`
setInterval(function(){ 
               
            document.getElementById("date").textContent = `${Date().slice(0,33)}`
            
         }, 1000)