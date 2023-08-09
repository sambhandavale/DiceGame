function rollDice() {
    var randomNo1=Math.floor(Math.random() * 6) + 1;
    var randomNo2=Math.floor(Math.random() * 6) + 1;
    document.querySelector(".header a").classList.add("RollDice")
    var rollLink = document.querySelector(".RollDice p");
    if(randomNo1>randomNo2){
      rollLink.textContent = "Player 1 Won!!!!";
    }
    else if(randomNo1<randomNo2){
      rollLink.textContent = "Player 2 Won!!!!";
    }
    else{
      rollLink.textContent = "Tie!!!!";
    }
    var diceImg1 = document.querySelector(".diceImg .dice1");
    diceImg1.setAttribute("src", "./Img/Dice/dice" + randomNo1 + ".png");
    var diceImg2 = document.querySelector(".diceImg .dice2");
    diceImg2.setAttribute("src", "./Img/Dice/dice" + randomNo2 + ".png");
}

