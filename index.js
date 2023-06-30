var randomNumber1=Math.floor(Math.random()*6)+1;
if (randomNumber1===1){
    randomimg="./images/dice1.png";
}else if(randomNumber1===2){
    randomimg="./images/dice2.png";

}else if (randomNumber1===3){
    randomimg="./images/dice3.png";
}else if(randomNumber1===4){
    randomimg="./images/dice4.png";
}else if (randomNumber1===5){
    randomimg="./images/dice5.png";
}else{
    randomimg="./images/dice6.png";
}
document.firstElementChild.lastElementChild.firstElementChild.querySelector("img").setAttribute("src",randomimg);
//now for second dice
var randomNumber2=Math.floor(Math.random()*6)+1;
if (randomNumber2===1){
    randomimg2="./images/dice1.png";
}else if(randomNumber2===2){
    randomimg2="./images/dice2.png";

}else if (randomNumber2===3){
    randomimg2="./images/dice3.png";
}else if(randomNumber2===4){
    randomimg2="./images/dice4.png";
}else if (randomNumber2===5){
    randomimg2="./images/dice5.png";
}else{
    randomimg2="./images/dice6.png";
}
document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.querySelector("img").setAttribute("src",randomimg2);
//h1 changing
if(randomNumber1>randomNumber2){
    h1change=" &#127937; Player 1 Wins!";
}else if(randomNumber1===randomNumber2){
    h1change="Draw!";
}else{
    h1change="Player 2 Wins! &#127937;";
}
document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").innerHTML=h1change;