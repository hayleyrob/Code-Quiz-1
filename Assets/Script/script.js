
let timer = 3
let isClick  = false
let isOver = false
let currentScore = 0
let highScore = 0
const button = ['Start','Play Again']

$('.second').text(timer)

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

    console.log(questions)
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

})

let timerStart = () =>
{
   
   let time = setInterval(function(){ 
        if(timer > 0)
        {
        $('.second').text(timer--); 
        }
        else
        {
        isOver = true
        document.getElementById("PlayAgain").disabled = false
        document.getElementById('aside1').innerHTML = "<h3>Time out!<h3>"
        console.log(timer)
        clearInterval(time)
        score()
        }

    }, 1000)

    gameStart()
    
}
 

let gameStart = () =>
{
    console.log("1")
}

let resetGame = () =>
{
    timer = 3
    isClick  = false
    isOver = false
    document.getElementById('aside1').innerHTML = `<h3 class="time"><u>Time:</u></h3> <span class="second"></span> second(s)`
    timerStart()
}

const score = () =>
{
    document.getElementById('currentScore').textContent = `${currentScore}`
    // $('.currentScore').text(scores)
}

genBut()


document.getElementById("myFooter").innerHTML +=  
              `<p>Time: <span class="date">${Date().slice(0,33)}</span></p>`; 