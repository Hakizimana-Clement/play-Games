var gamePattern = [];

var imageButton = ["amazi", "ikirere", "kunkombe"];

var userClikedPattern = [];

var keyForStartGame = false;

var level = 0;
////////////////////////////////////////////////
// 1.nextSequence of gamePattern
////////////////////////////////////////////////
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomImageName = imageButton[randomNumber];
  gamePattern.push(randomImageName);

  $("#" + randomImageName)
    .fadeIn(300)
    .fadeOut(300)
    .fadeIn(300);

  soundsEffect(randomImageName);
  buttonAnimation(randomImageName);

  //This is for text level to be increase by one every time nextSequence function called.
  level++;
  $("#heading-title").text("Umukino wa " + level);
}
////////////////////////////////////////////////
// 2.sound effect
////////////////////////////////////////////////

function soundsEffect(nameOfSounds) {
  new Audio(
    "../../../sounds/easy_level_sounds/" + nameOfSounds + ".mp3"
  ).play();
}

////////////////////////////////////////////////
// 3.button animated when it's clicked
////////////////////////////////////////////////

function buttonAnimation(pressedButton) {
  var pressedButton = $("#" + pressedButton);
  pressedButton.addClass("pressed_button");

  setTimeout(function () {
    pressedButton.removeClass("pressed_button");
  }, 1000);
}
////////////////////////////////////////////////
// 4.when user click image
////////////////////////////////////////////////

$(".btn").click(function () {
  var clickedImage = this.id;
  userClikedPattern.push(clickedImage);
  buttonAnimation(clickedImage);

  // this is for checking is the image show at first after to click button is equal to you button u press
  checkTheAnswer(userClikedPattern.length - 1);
});
////////////////////////////////////////////////
//5.when user press keyboard.
////////////////////////////////////////////////

$(document).keypress(function () {
  if (!keyForStartGame) {
    nextSequence();
    keyForStartGame = true;
    //This is for text to change to level 1
    $("#heading-title").text("Umukino wa " + level);
  }
});

////////////////////////////////////////////////
//6.check the Answer for user
////////////////////////////////////////////////

function checkTheAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClikedPattern[currentLevel]) {
    setTimeout(function () {
      nextSequence();
    }, 10);
  } else {
    //this is for changing heading title when user press wrong image.
    $("#heading-title").text("Umukino wa uraragiye kanda imbuto ukine");

    //this is for background to be red.
    var gameoverColor = $("body");
    gameoverColor.addClass("game-over");
    setTimeout(function () {
      gameoverColor.removeClass("game-over");
    }, 200);

    //This is for play wrong sound.
    soundsEffect("game_over");

    //This is for Restart Game from zero.
    Reset();
  }
}
////////////////////////////////////////////////
//7.Restart(Reset) the Game.
////////////////////////////////////////////////

function Reset() {
  level = 0;
  userClikedPattern = [];
  keyForStartGame = false;
  gamePattern = [];
}
