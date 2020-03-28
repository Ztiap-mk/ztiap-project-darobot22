

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

var player = new Image();
var bf = new Image();
var bg = new Image();
var amcrate = new Image();




bg.src = "img/bck.png";
player.src = "img/player.png";
bf.src = "img/bf109.png";
amcrate.src = "img/ammocrate.png";

var playerX = 200;
var move = 3;
var left = true;

function draw(){
ctx.drawImage(bg, 0, 0, 500, 500);
ctx.drawImage(bf, 0, 20);
ctx.drawImage(amcrate, 130, 300);
ctx.drawImage(player, playerX, 300);
if(playerX > 400) left = false;
if(left) this.playerX += move;
if(playerX < 0) left = true;
if(!left) this.playerX -= move;
ctx.fillStyle = "red";
  ctx.font = "italic 20pt Arial";
  ctx.fillText("Galaxy", 0, 22);
requestAnimationFrame(draw);
}

amcrate.onload = draw;
