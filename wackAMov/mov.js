const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')

let result = 0 
let hitposition 
let currentTime = 60

let timerId = null 


function randomeSquare(){
   square.forEach(className => {
       className.classList.remove('mole')
   }) 
   let randomePosition = square[Math.floor(Math.random()*25)]
   randomePosition.classList.add("mole") 


   hitposition = randomePosition.id 
}

square.forEach(id => {
    
    id.addEventListener('mousedown',() => {
       
        if(id.id == hitposition){
           
            result = result+1 
            score.textContent = result
            hitposition = null
        }
    })
    
})

let countDownTimerId // = setInterval(countDown,1000) 

function moveMole(){
  timerId = setInterval(randomeSquare,1000)   
}
function startGame(){

    document.getElementById('startGame').disabled = true
    moveMole()
    countDownTimerId = setInterval(countDown,1000) 

}

function countDown(){

    currentTime-- 
    timeLeft.textContent = currentTime 

    if (currentTime===0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        // document.getElementById('startGame').disabled = false
    
        alert("GAME OVER ! Final score " + result)
        
        location = location 
    }
}

