var main = {
    lastLoopRun: 0,
    timeInit: 0,
    shipX: document.innerWidth / 2,
    shipY: document.innerHeight / 2,
    shipWidth: 35,
    shipHeight: 60,
    iterations: 0,
    shipsrc: 'images/r3.png',
    FINISH: false,
    interval: 50,







    init: function(options) {

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

};







var btn2 = document.getElementById("play");
btn2.addEventListener('click', clk2);




function clk2() {


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
main.init();