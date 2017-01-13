var gamameW=1200;
var gameH=570;
var Astroid =function(x1,y1,w,img,id)
{
	this.img=img;
	this.id=id;
	this.w=w;
	this.x=x1;
	this.y=y1;
	this.creatAstroid();
	this.created=true;
	

	Object.defineProperty(this, 'x', {
			get: function () {
				
				return x;
			},
			set: function (inx) 
			{
				console.log("xset")
				x = inx;
				//if astroid gotout of boarder
				if ((x < this.w)||(x + this.w > gameW))
				{
					console.log("kill");
					this.kill();            
				  //  this.isGotOut = true;
				}
				else
				{ 
					console.log("move");	
					this.ast.style.left = x + 'px';
				}
			}
		});
	Object.defineProperty(this, 'y', {
			get: function ()
			{
				return y;
			},
			set: function (iny) {
				y = iny
				if ((y < this.w+5) ||(y > this.gameH)) 
				{   
					console.log("yout");
					this.kill();
				}

				else
				{
					console.log("move");             
					this.ast.style.top = y + 'px';
				}       
			}

		});

}
Astroid.prototype.creatAstroid=function()
{   console.log("creat");
	this.ast = document.createElement('span');
	var astimg= document.createElement('img')
	astimg.src = this.img;
	astimg.style.width= this.w + "px" 
	this.ast.id = this.id
	this.ast.style.position= "absolute";
	this.ast.style.left = this.x + "px";
	this.ast.style.top = this.y + "px";
   // this.ast.style.width = this.w + "px";
   // this.ast.style.height = this.h + "px";
	//this.astroid.classList.add(this.elementClass);
	this.ast.appendChild(astimg);
	var gamediv=document.getElementById("container")
	gamediv.appendChild(this.ast);
	
}
Astroid.prototype.setPosition = function (x, y) {
	if (x) {
		this.x = x;
	}
	if (y) {
		this.y = y;
	}
}


Astroid.prototype.kill= function()
{
	if (this.ast.parentNode)
	{
		this.ast.children[0].style.display = 'none';	
		this.ast.parentNode.removeChild(this.ast);
	}
}

