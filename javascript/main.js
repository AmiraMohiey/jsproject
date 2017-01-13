

var main = {
        lastLoopRun: 0,
        timeInit: 0,
        shipX:document.innerWidth/2,
        shipY:document.innerHeight/2,
        shipWidth: 35,
        shipHeight: 60,
        iterations: 0,
       
        FINISH: false,
        interval: 50,

     

      
        init: function (options) {

            main.ship = new Ship('images/r2.png', main.shipWidth , main.shipHeight , main.shipX , main.shipY ,'ship');
            window.onmousemove =  function (e){
                if(e.clientX<1210){
                    ship.style.left = e.clientX+'px';
                }
                if(e.clientY<590){
                    ship.style.top = e.clientY+'px';
                }
                console.log(e.clientX,e.clientY)
            }
        }
        
    };
main.init();
