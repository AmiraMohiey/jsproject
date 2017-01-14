var main = {
    gameW: 1200,
    gameH: 540,
    lastLoopRun: 0,
    timeInit: 0,
    shipX: document.innerWidth / 2,
    shipY: document.innerHeight / 2,
    shipWidth: 150,
    shipHeight: 150,
    iterations: 0,
    shipsrc: "images/r3.png",
    FINISH: false,
    interval: 50,
    btn2: document.getElementById("play"),
    score: document.getElementById("score"),
    level: document.getElementById("level"),
    level_speed: parseInt(level.innerText)*4,
     astroids: [],
    astSizes:[50,100,150],
    lastGenerat: new Date().getTime(),


    random : function(size) {

        return parseInt(Math.random() * size);
    },





    init: function() {
        main.btn2.addEventListener('click', main.clk2);
       
     
    },
    startGame: function(){

        main.ship = new Ship(main.shipsrc, main.shipWidth, main.shipHeight, main.shipX, main.shipY, 'ship');
        window.onmousemove = function(e) {
            if (e.clientX < 1210) {
                ship.style.left = e.clientX + 'px';
            }
            if (e.clientY < 590) {
                ship.style.top = e.clientY + 'px';
            }
            

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
            var astObj = new Astroid(main.random(main.gameW),-20,size,"./images/asteroid1.gif",Math.random() >= 0.5,main.lastGenerat);
            main.astroids.push(astObj);
            
            }
    },
    updatePosition: function(){

        console.log(main.level_speed);
        for (var i = 0; i < main.astroids.length; i++)
        {
            
           
            if(main.astroids[i].out)
                {
               
                main.astroids[i].kill();
                
                main.astroids.splice(i, 1);
                }            
            else{

                if(main.astroids[i].move)
                    main.astroids[i].x +=main.level_speed;
                main.astroids[i].y +=main.level_speed ;
            }
        
            
            
        }

    },
   













    clk2: function() {

        main.startGame();
        var characterScreen = document.getElementById("char");
        characterScreen.className = 'hidden';

        var firstScreen = document.getElementById("start");
        firstScreen.className = "hidden";

        var gameScreen = document.getElementById("container");
        gameScreen.className = "nocursor ";

        var rocket1 = document.getElementById("r1").checked;
        var rocket2 = document.getElementById("r2").checked;
        var rocket3 = document.getElementById("r3").checked;
        var chosedrocket = document.getElementById("rocket");
        if (rocket1) {

            main.ship.element.src = "images/r3.png";


        } else if (rocket2) {

            main.ship.element.src = "images/r33.png";




        } else {
            main.ship.element.src = "images/r.png";

        }
        
    },
    inc_score: function() {

        setInterval(function() {
            var value = parseInt(score.innerText) + 1;
            main.score.innerText = value;
            if (value % 30 == 0) {
                main.inc_level();
            }
        }, 1500)



    },



    inc_level: function() {

        var value2 = parseInt(level.innerText) + 1;
        level.innerText = value2;


    }





};



main.init();