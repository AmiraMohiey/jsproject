var main = {
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






    init: function(options) {
        main.btn2.addEventListener('click', main.clk2);
        main.ship = new Ship(main.shipsrc, main.shipWidth, main.shipHeight, main.shipX, main.shipY, 'ship');
        window.onmousemove = function(e) {
            if (e.clientX < 1210) {
                ship.style.left = e.clientX + 'px';
            }
            if (e.clientY < 590) {
                ship.style.top = e.clientY + 'px';
            }
            console.log(e.clientX, e.clientY)
        }
    }

    ,














    clk2: function() {


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