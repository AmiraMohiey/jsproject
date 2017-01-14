
var Astroid =function(x,y,w,img,id)
{
	

	Object.defineProperty(this, 'x', {
			get: function () {
				
				return x;
			},
			set: function (inx) 
			{
				//console.log("xset")
			
				x = inx;
				//if astroid gotout of boarder
				if(!this.fristTime)
				{	
					if ((x < this.w)||(x + (this.w/2) > gameW))
					{
						this.out=true;
						//this.kill();            
					  //  this.isGotOut = true;
					}
					else
					{ 
						
						this.ast.style.left = x + 'px';
					}
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
				if (!this.fristTime)
				{
					
					if ((y < 5) ||(y+this.w >main.gameH)) 
					{   
						console.log("yout");
						this.out=true;
						//this.kill();
					}

					else
					{             
						this.ast.style.top = y + 'px';
					}       
				}
			}

		});
	this.fristTime=true;
	this.out=false;
	this.img=img;
	this.id=id;
	this.w=w;
	this.x=x;
	this.y=y;
	this.creatAstroid();
	this.fristTime=false;
	
	console.log("created");

}
Astroid.prototype.creatAstroid=function()
{   
	this.ast = document.createElement('span');
	var astimg= document.createElement('img')
	astimg.src = this.img;
	astimg.style.width= this.w + "px" 
	this.ast.id = this.id
	

    // this.ast.style.height = this.h + "px";
	//this.astroid.classList.add(this.elementClass);
	this.ast.appendChild(astimg);
	var gamediv=document.getElementById("container")
	gamediv.appendChild(this.ast);
	this.ast.style.position= "absolute";
	this.ast.style.left = this.x + "px";
	this.ast.style.top = this.y + "px";
}



Astroid.prototype.kill= function()
{
	
	if (this.ast.parentNode)
	{
		
		this.ast.children[0].style.display = 'none';	
		this.ast.parentNode.removeChild(this.ast);
	}

}

