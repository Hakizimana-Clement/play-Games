var kitchenMaterailName = [
  "fryingPan",
  "vegetable",
  "onion",
  "tomato",
  "salt",
  "beans",
  "kettle",
];

var gamePattern = [];

var userClickedPattern = [];

var startedKey = false;

var level = 0;
// 1.nextSequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 7);
  var randomKitchenMaterailName = kitchenMaterailName[randomNumber];
  gamePattern.push(randomKitchenMaterailName);

  // fade in & fade out effect
  $("#" + randomKitchenMaterailName)
    .fadeOut(200)
    .fadeIn(200);

  //sound effect
  soundEffects(randomKitchenMaterailName);

  //animation effect
  buttonEffect(randomKitchenMaterailName);

  //level
  level++;
  $("h1").text("Umukino wa " + level);

  //repeted
  userClickedPattern = [];
}

//2.sound effects
function soundEffects(soundName) {
  var sound = new Audio("../../sounds/hard_level_sounds/" + soundName + ".mp3");
  sound.play();
}

//3.button effects
function buttonEffect(button) {
  var buttonEffect = $("#" + button);
  buttonEffect.addClass("button-pressed");

  setTimeout(function () {
    buttonEffect.removeClass("button-pressed");
  }, 1000);
}

// 4.Detect user click
$(".btn").click(function () {
  var buttonClicked = this.id;
  userClickedPattern.push(buttonClicked);
  checkAnswer(userClickedPattern.length - 1);

  //sound effect
  soundEffects(buttonClicked);
  //button effect
  buttonEffect(buttonClicked);
});

// 5.Detect user press keyboard
$(document).keypress(function () {
  if (!startedKey) {
    nextSequence();
    startedKey = true;
  }
  $("h1").text("Umikino wa " + level);
});

// 6.Checking the answer.
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 200);
    }
  } else {
    // Text change
    $("h1").text("Umukino wa uraragiye kanda imbuto ukine");

    // background change
    var gameOver = $("body");
    gameOver.addClass("game-over");
    setTimeout(function () {
      gameOver.removeClass("game-over");
    }, 300);

    //sound effect
    soundEffects("game_over");

    //Game reset
    reset();
  }
}

//7.Game reset
function reset() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  startedKey = false;
}
