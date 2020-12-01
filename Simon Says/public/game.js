
var buttonColors =["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level =0;

///////////////////////////////////////////////
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){

    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }

  }else{
    playSound("wrong");
  $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);

  }
}
////////////////////////////////////////////////

function nextSequence(){

  userClickedPattern=[];
  $("#level-title").text("Level "+level);
level++;

var randomNumber = Math.floor((Math.random()*4));
var randomChosenColor=buttonColors[randomNumber];

gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor)};

//////////////////////////////////////////////

$(".btn").click(function(){

  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log(checkAnswer(userClickedPattern.length-1));
});
///////////////////////////////////////////////
$(document).on("keydown",function(){
  if(start==false){
    nextSequence();
    start = true;
    $("#level-title").text("Level 0");
  }
});
///////////////////////////////////////////
function startOver(){
  gamePattern = [];
  userClickedPattern = [];
  start = false;
  level =0;

}




function playSound(input){
  var suara = new Audio("sounds/"+input+".mp3");
  suara.play();
}


function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass('pressed');
  },100);
}
