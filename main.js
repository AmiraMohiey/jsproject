
var gameW=1200;
var gameH=500;
var main = {
    lastLoopRun: 0,
    timeInit: 0,
    shipX: document.innerWidth / 2 ,
    shipY: document.innerHeight / 2,
    shipWidth: 35,
    shipHeight: 60,
    iterations: 0,
    shipsrc: 'images/r3.png',
    FINISH: false,
    interval: 50,
    astroids: [],
    astSizes:[50,100,150],
    lastGenerat: new Date().getTime(),


    random : function(size) {

        return parseInt(Math.random() * size);
    },




    init: function(options) {

        main.ship = new Ship(main.shipsrc, main.shipWidth, main.shipHeight, main.shipX, main.shipY, 'ship');
        window.onmousemove = function(e) {
            if (e.clientX < 1210) {
                ship.style.left = e.clientX + 'px';
            }
            if (e.clientY < 590) {
                ship.style.top = e.clientY + 'px';
            }
            //console.log(e.clientX, e.clientY)
        
        }
        
        main.loop();
    },
    loop: function() {

            
        main.addAst();
        main.updatePosition();
            
        
        setTimeout(function(){main.loop();},40 );
    },
    addAst: function() {
          
          if ( new Date().getTime()-main.lastGenerat>1000 ){   
            
            main.lastGenerat = new Date().getTime();
            var size = main.astSizes[main.random(main.astSizes.length)]
            var astObj = new Astroid(main.random(gameW),20,size,"./images/astroid.png",main.lastGenerat);
            main.astroids.push(astObj);
            
            }
    },
    updatePosition: function(){

       
        for (var i = 0; i < main.astroids.length; i++)
        {
            
           
            if(main.astroids[i].out)
                {
               
                main.astroids[i].kill();
                
                main.astroids.splice(i, 1);
                }            
            else
                main.astroids[i].y +=2 ;
            
            
        }

    }
   
};






var btn2 = document.getElementById("play");
btn2.addEventListener('click', clk2);




function clk2() {

    main.init();
    var div4 = document.getElementById("char");
    div4.className = 'hidden';

    var div5 = document.getElementById("start");
    div5.className = "hidden";

    var div6 = document.getElementById("container");
    div6.className = "nocursor ";

    var rocket1 = document.getElementById("r1").checked;
    var rocket2 = document.getElementById("r2").checked;
    var rocket3 = document.getElementById("r3").checked;
    var chosedrocket = document.getElementById("rocket");
    if (rocket1) {

        main.shipsrc = "images/r3.png";


    } else if (rocket2) {

        main.shipsrc = "images/r33.png";



    } else {
        this.shipsrc = "images/r2.png";

    }


}