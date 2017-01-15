var main = {
    gameW: 1200,
    gameH: 500,
    lastLoopRun: 0,
    timeInit: 0,
    shipX: document.innerWidth / 2,
    shipY: document.innerHeight / 2,
    shipWidth: 50,
    shipHeight: 100,
    iterations: 0,
    shipsrc: "images/r3.png",
    FINISH: false,
    interval: 50,

    characterScreen: document.getElementById("char"),
    firstScreen: document.getElementById("start"),
    gameScreen: document.getElementById("container"),
    gameOverScreen: document.getElementById("gameover"),

    btnStart: document.getElementById("letstart"),
    btnChooseCharachter: document.getElementById("play"),
    btnPlayAgain: document.getElementById("pa"),

    score: document.getElementById("score"),
    level: document.getElementById("level"),
    astroids: [],
    astSizes: [50, 100, 150],
    lastGenerat: new Date().getTime(),
    level_speed: parseInt(level.innerText) * 4,
    mainmenu: document.getElementById("mainmenu"),

    random: function(size) {

        return parseInt(Math.random() * size);
    },

    menuplaybtn: document.getElementById("menuplaybtn"),



    init: function() {
        main.btnStart.addEventListener('click', main.clkStart);
        main.menuplaybtn.addEventListener('click', main.menuplay);
    },
    startGame: function() {

        main.ship = new Ship(main.shipsrc, main.shipWidth, main.shipHeight, main.shipX, main.shipY, 'ship');
        window.onmousemove = function(e) {
            if (!main.FINISH) {
                if (e.clientX < 1210) {
                    ship.style.left = e.clientX + 'px';
                }
                if (e.clientY < 590) {
                    ship.style.top = e.clientY + 'px';
                }
            }


        }
        main.inc_score();
        main.loop();
    },

    loop: function() {

        if (!main.FINISH) { main.addAst(); }
        main.updatePosition();
        for (var i = 0; i < main.astroids.length; i++) {
            main.detectCollision(main.ship, main.astroids[i])
        }
        main.level_speed = parseInt(level.innerText) * 2;
        setTimeout(function() { main.loop(); }, 40);
    },
    addAst: function() {

        if (new Date().getTime() - main.lastGenerat > 1000) {

            main.lastGenerat = new Date().getTime();
            var size = main.astSizes[main.random(main.astSizes.length)]
            var astObj = new Astroid(main.random(main.gameW), 20, size, "./images/asteroid1.gif", Math.random() >= 0.5, main.lastGenerat);
            main.astroids.push(astObj);

        }
    },
    updatePosition: function() {


        for (var i = 0; i < main.astroids.length; i++) {
            if (main.astroids[i].out) {

                main.astroids[i].kill();

                main.astroids.splice(i, 1);
            } else {
                if (main.astroids[i].move)
                    main.astroids[i].x += main.level_speed;
                main.astroids[i].y += main.level_speed;
            }
        }

    },
    detectCollision: function(obj1, obj2) {

        var obj1x = parseInt(obj1.element.style.left);
        var obj1y = parseInt(obj1.element.style.top);
        var obj1w = parseInt(obj1.element.style.width);
        var obj1h = parseInt(obj1.element.style.height);
        var obj2x = parseInt(obj2.x);
        var obj2y = parseInt(obj2.y);
        var obj2w = parseInt(obj2.w);
        var obj2h = parseInt(obj2.w);
        if (obj1x < obj2x + obj2w &&
            obj1x + obj1w > obj2x &&
            obj1y < obj2y + obj2h &&
            obj1h + obj1y > obj2y) {
            main.endGame();
        }

    },





    clkStart: function() {
        main.btnChooseCharachter.addEventListener('click', main.chooseCharacter);
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "hidden";
        main.characterScreen.className = "hidden";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "menu2";

    },


    menuplay: function() {


        main.startGame();
        main.characterScreen.className = 'hidden';
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "nocursor ";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "hidden";
        main.ship.element.src = "images/r33.png";


    },


    chooseCharacter: function() {

        main.startGame();
        main.characterScreen.className = 'hidden';
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "nocursor ";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "hidden";
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

        interval = setInterval(function() {
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


    },

    endGame: function() {
        console.log("endgame");
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "hidden";
        main.gameOverScreen.className = "gameover";
        main.characterScreen.className = "hidden";
        main.ship.kill();
        main.btnPlayAgain.addEventListener('click', main.clkStart);
        for (var i = 0; i < main.astroids.length; i++) {
            console.log(i, main.astroids[i]);
            main.astroids[i].kill();
            console.log(main.astroids[i]);
            main.astroids.splice(i, 1);
            console.log(main.astroids[i]);

        }
        main.FINISH = true;
        main.score.innerText = 0;
        main.level.innerText = 1;
        clearInterval(interval);




    }




};



main.init();