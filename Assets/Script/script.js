let timer = 3
let isClick  = false
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
    console.log(event.target)
    if(event.target.id === 'Start')
    {
        timerStart()
    }

    if(event.target.id === 'PlayAgain')
    {
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
        $('.aside1').text("Time out!")
        clearInterval(time)
        score()
        document.getElementById("PlayAgain").disabled = false
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
    console.log("reset")
    timer = 3
    isClick  = false
    timerStart()
}

const score = () =>
{

}

genBut()


