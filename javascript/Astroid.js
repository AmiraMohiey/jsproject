
var Astroid =function(x,y,w,img,move,id)
{
	

	Object.defineProperty(this, 'x', {
			get: function () {
				
				return x;
			},
			set: function (inx) 
			{
				
			
				x = inx;
				//if astroid gotout of boarder
				
				if ((x < this.w)||(x + (this.w/2) > main.gameW))
				{
					this.out=true;
					
				}
				else
				{ 
					
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
	
					
				if ((y < -50) ||(y+this.w >main.gameH)) 
				{   
					
					this.out=true;
					
				}

				else
				{             
					this.ast.style.top = y + 'px';
				}       
				
			}

		});
	this.move=move;
	this.out=false;
	this.img=img;
	this.id=id;
	this.w=w;
	this.creatAstroid();
	this.x=x;
	this.y=y;
	
	

}
Astroid.prototype.creatAstroid=function()
{   
	this.ast = document.createElement('span');
	var astimg= document.createElement('img')
	astimg.src = this.img;
	astimg.style.width= this.w + "px" 
	this.ast.id = this.id
	

    this.ast.style.height = this.h + "px";
	//this.astroid.classList.add(this.elementClass);
	this.ast.appendChild(astimg);
	var gamediv=document.getElementById("container");
	gamediv.appendChild(this.ast);
	this.ast.style.position= "absolute";
    this.ast.style.padding= 0;
    this.ast.style.margin= 0;
}



Astroid.prototype.kill= function()
{
	
	if (this.ast.parentNode)
	{
		
		this.ast.children[0].style.display = 'none';	
		this.ast.parentNode.removeChild(this.ast);
	}

}

