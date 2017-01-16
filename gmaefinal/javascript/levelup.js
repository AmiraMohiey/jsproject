var LevelUp = function(img)
{
    console.log(main);
	Component.call(this, 500,10,300,img,'astroid');
    this.move=function(){
    	this.y+=5;
    	
    };
}
LevelUp.prototype = Object.create(Component.prototype);
LevelUp.prototype.constructor = LevelUp;