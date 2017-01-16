
var Astroid = function(img)
{
	var astSizes= [70, 90, 110];
	var xmove=[0,0,,0,0,0,-1,-2,0,1,2];
	var size = astSizes[main.random(astSizes.length)];
	var xm = xmove[main.random(xmove.length)];
	this.name="astroid";
	Component.call(this, main.random(main.gameW),-10,size,img,'astroid');
    this.move=function(level){
    	this.y+=4*level;
    	this.x+=xm*level*2;
    };
}
Astroid.prototype = Object.create(Component.prototype);
Astroid.prototype.constructor = Astroid;