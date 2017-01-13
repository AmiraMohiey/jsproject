 var btn1 = document.getElementById("letstart");
 btn1.addEventListener('click', clk);




 function clk() {




     var div2 = document.getElementById("start");
     div2.className = "hidden";
     var div3 = document.getElementById("container");
     div3.className = "hidden";
     var div1 = document.getElementById("char");
     div1.className = "char";

 }


 var btn3 = document.getElementById("pa");
 btn3.addEventListener('click', clk3);




 function clk3() {




     var div2 = document.getElementById("start");
     div2.className = "hidden";
     var div3 = document.getElementById("container");
     div3.className = "hidden";
     var div4 = document.getElementById("gameover");
     div4.className = "hidden";
     var div1 = document.getElementById("char");
     div1.className = "char";

 }

 var score = document.getElementById("score");
 var level = document.getElementById("level");
 setInterval(inc_score, 1500);

 function inc_score() {

     var value = parseInt(score.innerText) + 1;
     score.innerText = value;
     if (value % 30 == 0) {
         inc_level();
     }

 }

 function inc_level() {

     var value2 = parseInt(level.innerText) + 1;
     level.innerText = value2;


 }