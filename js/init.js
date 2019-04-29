$(document).ready(function() {

  // createElement('t');
  // createElement('a');
  // createElement('s');
  // createElement('t');
  // createElement('e');
  // createElement(' ');
  // createElement('t');
  // createElement('h');
  // createElement('e');
  // createElement(' ');
  // createElement('r');
  // createElement('a');
  // createElement('i');
  // createElement('n');
  // createElement('b');
  // createElement('o');
  // createElement('w');

  $("#cursor").hide();
  // $("#cursor").show("keypress", function(e){});
// });
  //our code goes here
var entryCount = 0;
var displayCount = 0;

$(document).on("keypress", function(e) {
	e.preventDefault();
	entryCount ++;
	displayCount ++;
	var char = String.fromCharCode(e.which);
	console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
  // if (displayCount < 50){
    createElement(char);
    // displayCount ++;
  // }
  $("#cursor").show("keypress", function(e){});
});

//capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
  		e.preventDefault();
  		entryCount ++;
  		displayCount --;

  		if (displayCount < 0) {
	      displayCount = 0;
	    }
    	console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
    	deleteElement();
    }
    if (e.which == 13){
      console.log("enter!!!!");
      var elem = $('#cursor');
      elem.before('<br>');
    } 
  });

});

function runScript(e) {
    if (e.keyCode == 13) {
        var tb = document.getElementById("scriptBox");
        eval(tb.value);
        return false;
    }
}

var indexA = 0;
var indexB = 0;
var indexC = 0;
var indexD = 0;
var indexE = 0;
var indexF = 0;
var indexG = 0;
var indexH = 0;
var indexI = 0;
var indexJ = 0;
var indexK = 0;
var indexL = 0;
var indexM = 0;
var indexN = 0;
var indexO = 0;
var indexP = 0;
var indexQ = 0;
var indexR = 0;
var indexS = 0;
var indexT = 0;
var indexU = 0;
var indexV = 0;
var indexW = 0;
var indexX = 0;
var indexY = 0;
var indexZ = 0;

function createElement(k) {
  var elem = $('#cursor');

  if (k == "a" || k == "A") { 
    var aArray = imageLibrary["a"];
    var aObject = aArray[indexA];
    indexA++;
    if (indexA >= imageLibrary["a"].length) {
      indexA = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    // console.log(indexA);
    // var aObject = aArray[ Math.floor(Math.random() * aArray.length) ];
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ai" + indexA + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
    playSound();
      // $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + "assets/ai0.png" + "'.png'>");
      // console.log(e);  // e.pageX 
      // $("#big-image").style.top = e.pageX
      // $("#big-image").style.left = "50px";
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    });
    playSound();
  }

  if (k == "b" || k == "B") { 
    var aArray = imageLibrary["b"];
    var aObject = aArray[indexB];
    indexB++;
    if (indexB >= imageLibrary["b"].length) {
      indexB = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/bi" + indexB + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "c" || k == "C") { 
    var aArray = imageLibrary["c"];
    var aObject = aArray[indexC];
    indexC++;
    if (indexC >= imageLibrary["c"].length) {
      indexC = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ci" + indexC + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "d" || k == "D") { 
    var aArray = imageLibrary["d"];
    var aObject = aArray[indexD];
    indexD++;
    if (indexD >= imageLibrary["d"].length) {
      indexD = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/di" + indexD + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }
  
  if (k == "e" || k == "E") { 
    var aArray = imageLibrary["e"];
    var aObject = aArray[indexE];
    indexE++;
    if (indexE >= imageLibrary["e"].length) {
      indexE = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ei" + indexE + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }
  
  if (k == "f" || k == "F") { 
    var aArray = imageLibrary["f"];
    var aObject = aArray[indexF];
    indexF++;
    if (indexF >= imageLibrary["f"].length) {
      indexF = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/fi" + indexF + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound();}
  
  if (k == "g" || k == "G") { 
    var aArray = imageLibrary["g"];
    var aObject = aArray[indexG];
    indexG++;
    if (indexG >= imageLibrary["g"].length) {
      indexG = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/gi" + indexG + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }
  
  if (k == "h" || k == "H") { 
    var aArray = imageLibrary["h"];
    var aObject = aArray[indexH];
    indexH++;
    if (indexH >= imageLibrary["h"].length) {
      indexH = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/hi" + indexH + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "i" || k == "I") { 
    var aArray = imageLibrary["i"];
    var aObject = aArray[indexI];
    indexI++;
    if (indexI >= imageLibrary["i"].length) {
      indexI = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ii" + indexI + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound();}
  
  if (k == "j" || k == "J") { 
    var aArray = imageLibrary["j"];
    var aObject = aArray[indexJ];
    indexJ++;
    if (indexJ >= imageLibrary["j"].length) {
      indexJ = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ji" + indexJ + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "k" || k == "K") { 
    var aArray = imageLibrary["k"];
    var aObject = aArray[indexK];
    indexK++;
    if (indexK >= imageLibrary["k"].length) {
      indexK = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ki" + indexK + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }
 
  if (k == "l" || k == "L") { 
    var aArray = imageLibrary["l"];
    var aObject = aArray[indexL];
    indexL++;
    if (indexL >= imageLibrary["l"].length) {
      indexL = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/li" + indexL + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "m" || k == "M") { 
    var aArray = imageLibrary["m"];
    var aObject = aArray[indexM];
    indexM++;
    if (indexM >= imageLibrary["m"].length) {
      indexM = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/mi" + indexM + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "n" || k == "N") { 
    var aArray = imageLibrary["n"];
    var aObject = aArray[indexN];
    indexN++;
    if (indexN >= imageLibrary["n"].length) {
      indexN = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ni" + indexN + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }
  
  if (k == "o" || k == "O") { var aArray = imageLibrary["o"];
    var aObject = aArray[indexO];
    indexO++;
    if (indexO >= imageLibrary["o"].length) {
      indexO = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/oi" + indexO + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound();}
  
  if (k == "p" || k == "P") { 
    var aArray = imageLibrary["p"];
    var aObject = aArray[indexP];
    indexP++;
    if (indexP >= imageLibrary["p"].length) {
      indexP = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/pi" + indexP + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "q" || k == "Q") { 
    var aArray = imageLibrary["q"];
    var aObject = aArray[indexQ];
    indexQ++;
    if (indexQ >= imageLibrary["q"].length) {
      indexQ = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/qi" + indexQ + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound(); }

  if (k == "r" || k == "R") { 
    var aArray = imageLibrary["r"];
    var aObject = aArray[indexR];
    indexR++;
    if (indexR >= imageLibrary["r"].length) {
      indexR = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ri" + indexR + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }
  
  if (k == "s" || k == "S") { 
    var aArray = imageLibrary["s"];
    var aObject = aArray[indexS];
    indexS++;
    if (indexS >= imageLibrary["s"].length) {
      indexS = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/si" + indexS + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  }

  if (k == "t" || k == "T") { 
    var aArray = imageLibrary["t"];
    var aObject = aArray[indexT];
    indexT++;
    if (indexT >= imageLibrary["t"].length) {
      indexT = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ti" + indexT + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "u" || k == "U") { 
    var aArray = imageLibrary["u"];
    var aObject = aArray[indexU];
    indexU++;
    if (indexU >= imageLibrary["u"].length) {
      indexU = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/ui" + indexU + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound();}
  if (k == "v" || k == "V") { var aArray = imageLibrary["v"];
    var aObject = aArray[indexV];
    indexV++;
    if (indexV >= imageLibrary["v"].length) {
      indexV = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/vi" + indexV + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound();}
  
  if (k == "w" || k == "W") { 
    var aArray = imageLibrary["w"];
    var aObject = aArray[indexW];
    indexW++;
    if (indexW >= imageLibrary["w"].length) {
      indexW = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/wi" + indexW + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
    playSound();
  }

  if (k == "x" || k == "X") { 
    var aArray = imageLibrary["x"];
    var aObject = aArray[indexX];
    indexX++;
    if (indexX >= imageLibrary["x"].length) {
      indexX = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/xi" + indexX + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound(); }

  if (k == "y" || k == "Y") { 
    var aArray = imageLibrary["y"];
    var aObject = aArray[indexY];
    indexY++;
    if (indexY >= imageLibrary["y"].length) {
      indexY = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/yi" + indexY + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound(); }

  if (k == "z" || k == "Z") { 
    var aArray = imageLibrary["z"];
    var aObject = aArray[indexZ];
    indexZ++;
    if (indexZ >= imageLibrary["z"].length) {
      indexZ = 0;
      window.scrollTo(0,document.body.scrollHeight);
    }
    var srcString = "assets/" + aObject;
    var imgSrcString = "assets/zi" + indexZ + ".png";
    console.log(imgSrcString);
    elem.before('<span class="inner" style="margin-right:10px;"><img src="' + srcString + '"></span>'); 
    $(".inner").last().click(function(e){
      $("#floatingContainer").html("<img class='bigger' id='big-image' src='" + imgSrcString + "'.png'>");
      playSound();
      $("#big-image").click(function(){
        console.log("OUT!!!")
      $("#floatingContainer").html("");
        reappear();
      });
      disappear();
    }); 
  playSound(); }

  if (k == " ") { elem.before('<span class="inner"> </span>');window.scrollTo(0,document.body.scrollHeight);
  playSound(); }

  if (k == ",") { elem.before('<span class="inner style="margin-right:-10px;"">,</span>');window.scrollTo(0,document.body.scrollHeight);
  playSound5(); }

  if (k == ".") { elem.before('<span class="inner">.</span>');window.scrollTo(0,document.body.scrollHeight);
  playSound2(); }
  if (k == "!") { elem.before('<span class="inner">!</span>');window.scrollTo(0,document.body.scrollHeight);
  playSound3(); }
  if (k == "?") { elem.before('<span class="inner">?</span>');window.scrollTo(0,document.body.scrollHeight);
  playSound4(); }


  var targets = document.getElementsByClassName("inner");
  var images = document.getElementsByClassName("bigger");
  // console.log(images);

  for (var i = 0; i < targets.length; i++) 
  {
    targets[i].addEventListener("click", function( event ){
      // event.images[i].style.display = "fixed";
    }, false)
  }

}

function playSound(){
  $('#sound')[0].play();
}
function playSound2(){
  $('#sound2')[0].play();
}
function playSound3(){
  $('#sound3')[0].play();
}
function playSound4(){
  $('#sound4')[0].play();
}
function playSound5(){
  $('#sound5')[0].play();
}
function deleteElement() {
  $(".inner").last().remove();
}



var imageLibrary = {

  "a" : ["a.png", "a2.png"],
  "b" : ["b.png", "b2.png"],
  "c" : ["c.png", "c2.png", "c3.png"],
  "d" : ["d.png", "d2.png"],
  "e" : ["e.png", "e2.png"],
  "f" : ["f.png"],
  "g" : ["g.png", "g2.png"],
  "h" : ["h.png", "h2.png", "h3.png", "h4.png"],
  "i" : ["i.png"],
  "j" : ["j.png", "j2.png"],
  "k" : ["k.png", "k2.png", "k3.png", "k4.png"],
  "l" : ["l.png", "l2.png", "l3.png"],
  "m" : ["m.png", "m2.png", "m3.png", "m4.png", "m5.png"],
  "n" : ["n.png", "n2.png"],
  "o" : ["o.png"],
  "p" : ["p.png", "p2.png", "p3.png", "p4.png"],
  "q" : ["q.png"],
  "r" : ["r.png", "r2.png"],
  "s" : ["s.png", "s2.png", "s3.png", "s4.png"],
  "t" : ["t.png", "t2.png", "t3.png"],
  "u" : ["u.png"],
  "v" : ["v.png"],
  "w" : ["w.png", "w2.png", "w3.png"],
  "x" : ["x.png"],
  "y" : ["y.png"],
  "z" : ["z.png"],
}

// window.setInterval(function() {
//   var elem = document.getElementById('data');
//   elem.scrollTop = elem.scrollHeight;
// }, 5000); 

// var aArray = imageLibrary["a"];
// var aObject = aArray[ Math.floor(Math.random() * 2) ];

// var aArray = imageLibrary["b"];
// var aObject = aArray[ Math.floor(Math.random() * 2) ];

// var aArray = imageLibrary["c"];
// var aObject = aArray[ Math.floor(Math.random() * 4) ];

// var aArray = imageLibrary["d"];
// var aObject = aArray[ Math.floor(Math.random() * 2) ];

// var aArray = imageLibrary["e"];
// var aObject = aArray[ Math.floor(Math.random() * 2) ];

// var aArray = imageLibrary["g"];
// var aObject = aArray[ Math.floor(Math.random() * 3) ];

// var aArray = imageLibrary["h"];
// var aObject = aArray[ Math.floor(Math.random() * 4) ];

// var aArray = imageLibrary["j"];
// var aObject = aArray[ Math.floor(Math.random() * 4) ];

// var aArray = imageLibrary["k"];
// var aObject = aArray[ Math.floor(Math.random() * 4) ];

// var aArray = imageLibrary["l"];
// var aObject = aArray[ Math.floor(Math.random() * 3) ];

// var aArray = imageLibrary["m"];
// var aObject = aArray[ Math.floor(Math.random() * 5) ];

// var aArray = imageLibrary["n"];
// var aObject = aArray[ Math.floor(Math.random() * 2) ];

// var aArray = imageLibrary["p"];
// var aObject = aArray[ Math.floor(Math.random() * 4) ];

// var aArray = imageLibrary["r"];
// var aObject = aArray[ Math.floor(Math.random() * 2) ];

// var aArray = imageLibrary["s"];
// var aObject = aArray[ Math.floor(Math.random() * 4) ];

// var aArray = imageLibrary["t"];
// var aObject = aArray[ Math.floor(Math.random() * 3) ];

// var aArray = imageLibrary["w"];
// var aObject = aArray[ Math.floor(Math.random() * 3) ];



function disappear(){
  $("#container").hide();
}

function reappear(){
  $("#container").show();
}



