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
    shipsrc: "images/r33.png",
    FINISH: false,
    interval: 50,
    nlvl:{},
    lvlimg : "./images/earth.gif",
    lvlexst:false,
    lvll:1,
    armor:false,
    
    btnbackinstruction: document.getElementById("backinst"), // new
    instructionscreen: document.getElementById("instruction"), // new 
    characterScreen: document.getElementById("char"),
    firstScreen: document.getElementById("start"),
    gameScreen: document.getElementById("container"),
    gameOverScreen: document.getElementById("gameover"),

    btnStart: document.getElementById("letstart"),
    btnChooseCharachter: document.getElementById("back"),
    btnPlayAgain: document.getElementById("pa"),
    menuplaybtn: document.getElementById("menuplaybtn"),
    menusettingsbtn: document.getElementById("settings"),
    menuinstructionsbtn: document.getElementById("instructions"),
    badgge: document.getElementById("badges"),

    audCollision: new Audio("blast.mp3"),
    audstart: new Audio("Space Odyssey.mp3"),

    score: document.getElementById("score"),
    level: document.getElementById("level"),
    astroids: [],
    badges: [],
    astSizes: [50, 100, 150],
    lastGenerat: new Date().getTime(),
    lastGeneratbadge: new Date().getTime(),
    level_speed: parseInt(level.innerText),
    mainmenu: document.getElementById("mainmenu"),


    random: function(size) {

        return parseInt(Math.random() * size);
    },




    init: function() {
        main.btnStart.addEventListener('click', main.clkStart);
        main.audstart.currentTime = 10;
        main.audstart.play();

    },
    startGame: function() {
        main.audstart.pause();
        main.ship = new Ship(main.shipsrc, main.shipWidth, main.shipHeight, main.shipX, main.shipY, 'ship');
        window.onmousemove = function(e) {
            if(!main.FINISH){
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
        main.mvlvl();
        for (var i = 0; i < main.astroids.length; i++) {
            main.detectCollision(main.ship, main.astroids[i])
        }
        for (var i = 0; i < main.badges.length; i++) {
            main.detectCollision(main.ship, main.badges[i])
        }



        setTimeout(function() { main.loop(); }, 40);
    },
    addAst: function() {

        if (new Date().getTime() - main.lastGenerat > 1000) {

            main.lastGenerat = new Date().getTime();
            var astObj = new Astroid("./images/asteroid1.gif");

            main.astroids.push(astObj);

            main.astroids;

        }
        if (new Date().getTime() - main.lastGeneratbadge > 10000) {

            main.lastGeneratbadge = new Date().getTime();
            var badgeObj = new Badge("./images/badge.png");

            main.badges.push(badgeObj);
    
            

        }
    },
    updatePosition: function() {


        for (var i = 0; i < main.astroids.length; i++) {


            if (main.astroids[i].out) {

                main.astroids[i].kill();

                main.astroids.splice(i, 1);
            } else {

                main.astroids[i].move(main.level_speed);
            }
        }
        for (var i = 0; i < main.badges.length; i++) {

            
            if (main.badges[i].out) {

                main.badges[i].kill();

                main.badges.splice(i, 1);
            } 
            else 
            {
                
                main.badges[i].move();
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
            if(obj2.name=="astroid"){
                main.audCollision.play();
                if(!main.armor){
                    obj2.kill();
                    obj2=null;
                    main.endGame();
                    console.log("ops");
                }else{
                    main.armor=false;
                    obj2.kill();
                    obj2=null;
                    console.log("armorlost");
                    main.badgge.className = "hidden";
                }
            }
            else {
                main.armor=true;
                obj2.kill();
                obj2=null;
                console.log("armoryay");
                main.badgge.className = "badges";
            }
            
            console.log(obj2);            
           
        
        }

    },





    clkStart: function() {

        main.audstart.currentTime = 10;
        main.audstart.play();
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "hidden";
        main.characterScreen.className = "hidden";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "menu2";
        main.instructionscreen.className = "hidden"; //new
        main.menuplaybtn.addEventListener('click', main.gamePlay);
        main.menusettingsbtn.addEventListener('click', main.menusettings);
        main.menuinstructionsbtn.addEventListener('click', main.menuinstructions);

    },





    menusettings: function() {


        main.instructionscreen.className = "hidden"; //new
        main.characterScreen.className = "char";
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "hidden ";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "hidden";
        main.btnChooseCharachter.addEventListener('click', main.clkStart);


    },


    menuinstructions: function() {

        main.characterScreen.className = "hidden";
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "hidden ";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "hidden";
        main.instructionscreen.className = "instructions";
        main.btnbackinstruction.addEventListener('click', main.clkStart);




    },


    gamePlay: function() {
        main.FINISH = false;
        main.startGame();
        main.characterScreen.className = 'hidden';
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "nocursor ";
        main.gameOverScreen.className = "hidden";
        main.mainmenu.className = "hidden";
        main.instructionscreen.className = "hidden"; //new
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
        main.levelplus(main.nlvl);

    },

    endGame: function() {
        // console.log("endgame");
        main.firstScreen.className = "hidden";
        main.gameScreen.className = "hidden";
        main.instructionscreen.className = "hidden"; //new
        main.gameOverScreen.className = "gameover";
        main.characterScreen.className = "hidden";
        main.ship.kill();
        main.btnPlayAgain.addEventListener('click', main.clkStart);
        for (var i = 0; i < main.astroids.length; i++) {
            //  console.log(i, main.astroids[i]);
            main.astroids[i].kill();
            // console.log(main.astroids[i]);
            main.astroids.splice(i, 1);
            //  console.log(main.astroids[i]);

        }
        for (var i = 0; i < main.badges.length; i++) {
          
            main.badges[i].kill();
       
            main.badges.splice(i, 1);
          

        }
        main.FINISH = true;
        main.score.innerText = 0;
        main.level.innerText = 1;
        clearInterval(interval);
        if(main.lvlexst){
                main.nlvl.kill();
        }



    },

    levelplus : function(){
        switch(main.lvll){
            case 1:main.lvlimg="./images/1.gif";
                break;
            case 2:main.lvlimg="./images/2.gif";
                break;
            case 3:main.lvlimg="./images/3.gif";
                break;
            case 4:main.lvlimg="./images/4.gif";
                break;
            case 5:main.lvlimg="./images/5.gif";
                break;
            case 6:main.lvlimg="./images/6.gif";
                break;
        }
        if(main.lvll<6){
            main.lvll+=1;
        }else{
            main.lvll=1;
        }
        main.nlvl=new LevelUp(main.lvlimg);
        main.lvlexst=true;
        for (var i = 0; i < main.astroids.length; i++) {
            //  console.log(i, main.astroids[i]);
            main.astroids[i].kill();
            // console.log(main.astroids[i]);
            main.astroids.splice(i, 1);
            //  console.log(main.astroids[i]);

        }
        main.FINISH = true;
    },
    mvlvl : function(){
        if(main.lvlexst){
            if (main.nlvl.out) {
                main.nlvl.kill();
                    main.lvlexst=false;
                      main.FINISH = false;

            } 
            else {      
                main.nlvl.move();
            }
        }
    }




};



main.init();