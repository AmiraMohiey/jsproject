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
         chosedrocket.setAttribute('src', 'r3.png');

     } else if (rocket2) {
         chosedrocket.setAttribute('src', 'r33.png');

     } else {

         chosedrocket.setAttribute('src', 'r2.png');
     }


 }