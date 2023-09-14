

var pipeGap = document.querySelector(".pipeGap")
var pipe = document.querySelector(".pipe")
var bird = document.querySelector(".bird")
var score = document.querySelector(".score")
var Currentscore = 0;



setInterval(drop,10);

function drop(){
   var dropStyle =parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (dropStyle) + 1.2  + "px";   
  
  
  if(dropStyle > 500){
   alert("game over")
  }
   
  
   

   var CurrentPipeLeft =parseInt(window.getComputedStyle(pipe).getPropertyValue("left"))
   var PipeGapTop =parseInt(window.getComputedStyle(pipeGap).getPropertyValue("top"))
   var pipeGapBottom = PipeGapTop + 150
  
   if (CurrentPipeLeft <=40 && !((dropStyle  >= PipeGapTop && dropStyle <=pipeGapBottom))){
      alert("game over")
   }
   }
   


pipe.addEventListener("animationiteration",randomGap)
function randomGap(){
   Currentscore++;
   score.textContent = Currentscore
   

   var r =  Math.random()*350;
   pipeGap.style.top = r + "px";
  
    
}

function jump(){
   var dropStyle = window.getComputedStyle(bird).getPropertyValue("top")
   bird.style.top = (parseInt (dropStyle) - 50 ) + "px";
}



