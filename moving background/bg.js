/*var canvas = document.getElementById('hcan');
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;

//draw Image
var velocity=100;
var bgImage = new Image();
bgImage.addEventListener('load',drawImage,false);
bgImage.src = "img.jpg";
function drawImage(time){          
        var framegap=time-lastRepaintTime;
		lastRepaintTime=time;
		var translateX=velocity*(framegap/1000);
		ctx.clearRect(0,0,canvas.width,canvas.height);
	 	var pattern=ctx.createPattern(bgImage,"repeat-x");
		ctx.fillStyle=pattern;
		ctx.rect(translateX,0,bgImage.width,bgImage.height);
	   ctx.fill();
        ctx.translate(-translateX,0);	
	requestAnimationFrame(drawImage);
}
var lastRepaintTime=window.performance.now();*/


var x = rocket.width/2;
var y = rocket.height/2;
var dx = 2;
var dy = -2;
var rocketHeight = 10;
var rocketWidth = 75;
var rocketX = (rocket.width-rocketWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}


function draw() {
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);

