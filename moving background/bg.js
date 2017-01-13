
var elmnt = document.getElementById("image1");
window.onmousemove = function (e) {
    console.log(e.clientX);
    if(e.clientX<1200 &&  e.clientY<600 ){
        elmnt.style.left = e.clientX+'px';
        elmnt.style.top = e.clientY+'px';
    }
}

/*function leftArrowPressed() {
     
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
}*/
