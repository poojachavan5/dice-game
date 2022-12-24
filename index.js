var randomNo1=Math.floor(Math.random()*6)+1;

var randomimg1="dice"+ randomNo1 +".png";

var randomSrc1="images/"+randomimg1;

document.querySelectorAll("img")[0].setAttribute("src", randomSrc1);


var randomNo2=Math.floor(Math.random()*6)+1;

var randomimg2="dice"+ randomNo2 +".png";

var randomSrc2="images/"+randomimg2;

document.querySelectorAll("img")[1].setAttribute("src", randomSrc2);

if(randomNo1>randomNo2){
  document.querySelector("h1").innerHTML="🙌Player 1 wins";
}
else if(randomNo1<randomNo2){
  document.querySelector("h1").innerHTML="Player 2 wins🙌";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
