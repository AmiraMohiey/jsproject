
/*

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

*/
var keys = [];
var elmnt = document.getElementById("image1");

function leftArrowPressed() {
     
            elmnt.style.left = parseInt(elmnt.style.left) - 10 + 'px';
}

function rightArrowPressed() {
    
            elmnt.style.left = parseInt(elmnt.style.left) + 10 + 'px';
    
}

window.addEventListener('keydown', keysPressed, false);
window.addEventListener('keyup', keysReleased, false);
 

 
function keysPressed(e) {
    keys[e.keyCode] = true;
     
    if (keys[37]) {
        leftArrowPressed();
    }
     
    if (keys[39]) {
     
       rightArrowPressed(); 
    }
}
 
function keysReleased(e) {
    keys[e.keyCode] = false;
      if (keys[37]) {
        leftArrowPressed();
    }
     
    if (keys[39]) {
     
       rightArrowPressed(); 
    }
}
