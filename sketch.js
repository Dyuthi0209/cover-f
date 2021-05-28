var bg;
var multi, multiImg;
var single, singleImg;
var quiz, quizImg;

function preload(){
bg=loadImage("images/bg.jpg")
singleImg=loadImage("images/singleplayer.png")
multiImg=loadImage("images/multiplayer.png")
quizImg=loadImage("images/quiz.jpg")


}


function setup() {
  createCanvas(900,500);

}



function draw() {
  background(bg);  

textSize(50);
fill(50, 141, 168);
textFont('Georgia');
text("SEA POLLUTION GAME", 165,100)

textSize(25);
fill(50, 141, 168);
textFont('Georgia');
text("By Dyuthi Pamulaparthi", 300,140)

drawSprites();
}