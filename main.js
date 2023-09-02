let rps= ['rock','paper','scissors']

function getComputerChoice(){
      return  rps[Math.floor(Math.random()*rps.length)]
}
let computerScore=1;
let playerScore=1;

function playround(pc,cc){
  if(pc==="scissors" && cc==='paper' ||
  pc==='paper' && cc==='rock' || pc==='rock' && cc==='scissors'){
    return `you won ${playerScore}`
  }
  else if (cc==="scissors" && pc==='paper' ||
  cc==='paper' && pc==='rock' || cc==='rock' && pc==='scissors'){
    return `computer won ${computerScore}`
  }
  else if (pc===cc){
    return 'tie'
  }
}
function playerchoice(){
 let validatedInput=false;
 while (validatedInput==false) {
  const choice = prompt("rock paper scissors");
  if(choice==null){
    continue;
  }
const choiceInLower = choice.toLocaleLowerCase();
if(rps.includes(choiceInLower)){
  validatedInput = true;
  return choiceInLower;
  }
 }
}


function game() {
  for(let i=0;i<5;i++){
    let pc=playerchoice()
    let cc=getComputerChoice()
    console.log(playround(pc,cc))
    if(playround(pc,cc)==`you won ${playerScore}`){
      playerScore++;
    } else if (playround(pc,cc)== `computer won ${computerScore}`){
      computerScore++;
    }
  }
  console.log('game over')
  if(playerScore>computerScore){
    console.log('player has won the game')
  } else if(computerScore>playerScore){
    console.log('comuter has won the game')
  } else {
    console.log('we have a tie')
  }
}

game()