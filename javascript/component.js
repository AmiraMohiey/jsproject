Component=function(x,y,w,img,classs)
{
	

	Object.defineProperty(this, 'x', {
			get: function () {
				
				return x;
			},
			set: function (inx) 
			{
				
			
				x = inx;
				//if astroid gotout of boarder
				
				if ((x < 0)||(x + (this.w) > main.gameW))
				{
					console.log("xout");
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
	
					
				if ((y < -150) ||(y >main.gameH)) 
				{   
					console.log("yout");
					this.out=true;
					
				}

				else
				{             
					this.ast.style.top = y + 'px';
				}       
				
			}

		});
	//this.move=move;
	this.astClass=classs;
	this.out=false;
	this.img=img;
	//this.id=id;
	this.w=w;
	this.creatComponent();
	this.x=x;
	this.y=y;
	
	

}
Component.prototype.creatComponent=function()
{   
	
	this.ast = document.createElement('span');
	var astimg= document.createElement('img')
	astimg.src = this.img;
	astimg.style.width= this.w + "px" 
	//this.ast.id = this.id
	this.ast.style.height = this.h + "px";
	this.ast.classList.add(this.astClass);
	this.ast.appendChild(astimg);
	var gamediv=document.getElementById("container");
	gamediv.appendChild(this.ast);
	
}
Component.prototype.move=function(){}



Component.prototype.kill= function()
{
	console.log("kill");
	if (this.ast.parentNode)
	{
		
		this.ast.children[0].style.display = 'none';	
		this.ast.parentNode.removeChild(this.ast);
	}

}

