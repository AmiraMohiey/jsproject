var canvas = document.getElementById('hcan');
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
var lastRepaintTime=window.performance.now();

