var Badge = function(img)
{
	this.lastx= new Date().getTime();
	this.xmove=[-4,-6,0,4,6];
	
	var xm = this.xmove[main.random(this.xmove.length)];
	Component.call(this, main.random(main.gameW),-10,50,img,'astroid');
    this.move=function(){
		if (new Date().getTime() - this.lastx > 500)
		{
			 xm = this.xmove[main.random(this.xmove.length)];
			this.lastx= new Date().getTime();
		}
    	this.y+=8;
    	this.x+=xm*2;
    };
}
Badge.prototype = Object.create(Component.prototype);
Badge.prototype.constructor = Badge;