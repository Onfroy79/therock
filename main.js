
let rps= ['rock','paper','scissors']

function getComputerChoice(){
      return  rps[Math.floor(Math.random()*rps.length)]
}
let computerScore=0;
let playerScore=0;
let tieScore=0;
function playround(pc,cc){
  if(pc==="scissors" && cc==='paper' ||
  pc==='paper' && cc==='rock' || pc==='rock' && cc==='scissors'){
    playerScore++
    displayScore.textContent= `you won ${playerScore}`
  }
  else if (cc==="scissors" && pc==='paper' ||
  cc==='paper' && pc==='rock' || cc==='rock' && pc==='scissors'){
    computerScore++
    displayComScore.textContent= `computer won ${computerScore}`
  }
  else if (pc===cc){
    tieScore++
    tie.textContent= `tie ${tieScore}`
  }
 
}


let pc;
let cc;
let pbutton= document.querySelector('.paper');
let rbutton= document.querySelector('.rock');
let sbutton= document.querySelector('.scissors');
const buttons=document.querySelectorAll('button');
let result;
let tie=document.querySelector('.tie')


pbutton.addEventListener('click', function(){
 console.log(playround(pc='paper',cc=getComputerChoice()))
})

rbutton.addEventListener('click', function(){
  console.log(playround(pc='rock',cc=getComputerChoice()))
})

sbutton.addEventListener('click', function(){
  console.log(playround(pc='scissors',cc=getComputerChoice()))
})



  

  
const win=document.querySelector('.win')
 buttons.forEach(function(button){
  button.addEventListener('click', function(){
    if(computerScore>4){
      playerScore=0
      computerScore=0
      tieScore=0
      win.textContent ='computer won the round'
      } else if (playerScore>4){
      computerScore=0
      playerScore=0
      tieScore=0
      win.textContent= 'player won the round'
    }
      
  })
  return result})
 

 let displayScore= document.querySelector('.player')
 let displayComScore=document.querySelector('.computer')

 


  
  






