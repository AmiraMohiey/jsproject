var LevelUp = function(img)
{
	Component.call(this, main.gameW/2,-10,100,img,'astroid');
    this.move=function(){
    	this.y+=4;
    	
    };
}
LevelUp.prototype = Object.create(Component.prototype);
LevelUp.prototype.constructor = LevelUp;