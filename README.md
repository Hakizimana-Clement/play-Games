# play-Games
HTML + CSS + JS
# Games - Water and land and amazing Gallery.

This is small project about the idea i have after learning basic JavaScript.
The web page have two language option: - English and Kinyarwanda(my mother tongue) and it's also have easy level and hard level.

## Table of contents

- [Overview](#overview)
  - [Easy level](#easy-level)
  - [Hard level](#hard-level)
  - [Images links](#image-links)
- [My process](#my-process)
  - [Built with](#build-with)
  - [What I learned](#what-i-learned)
  - [The difference between easy level and hard level](#the-difference-between-easy-level-and-hard-level)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

The overview of game is to choose level to play between easy level and hard level.
on easy level: you have to press key to play "M" and you will hear (sky, water and land) and see the image to click on in order to continue to play. if you miss the image the game is over and you have chance to press any to restart and play again.

<!-- ### **Easy Level** -->

## Easy level

#### **Why I build the easy level and the story behind it.**

The reason i build this game is that when i was kid we used to play this game. In that day we gathering as kid and make the circle and we have the leader to give instructor or rules to follow.
so, when the leader says: “water". we move in circle and then we the leader say: “land". we move out the circle. and when leader say: “water" (in circle) but you move on land (outside of circle) your failed. after to failed you go and sit down and watch other play until all failed and start again. and the Remainer on or the last one stand is the champion of that Game 💪😎, it’s was so funny.

After i learn basic JavaScript, I ask myself why can't build that my favorite game when i was young using JavaScript, that how the idea to build start. so i record the sound effect for game myself and search the image to use, the image i used come from unplash website and photographed shooted by *Maarten van den Heuvel*. But before that i draw the project how user interface (UI) will going to be and then build the functionality (JavaScript),but i add new feature called: “sky" in order to make game more funny.

### **Hard level**

#### Why I build the hard level and the story behind it.

After to play simon game and think to play similar game like this but in gallery image. that the story behind it. i record the sound effect myself and use JavaScript skill (basic not much) and build this.
the image i used come from unplash website and shooted by *Icons8 Team*. I use photoshop to select each part of image in order to button in gallery card.

### **Image links**

- [sea image](https://images.unsplash.com/photo-1500304624028-5b2641868ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)
- [ kitchen ware](https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)

---

## My process

### Build with

- HTML5
- CSS
- BootStrap 4 framework - (https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- jQuery framework - (https://jquery.com/)

### **The difference between easy level and hard level**

#### **Easy level**

The easy level is about to click the image your asked to chosen or click like water and make sure you don't click wrong image like land.

#### **Hard level**

The hard level is about click the image your asked to clicked like onion and then user click on onion image(button) and then the game shows the next image (tomato), and you have to remember the first image you click is onion, tomato and so on...... is you click the wrong one game over.

In code userClikedPattern have empty array in function called:nextSequence() for make next level to be ready.

But the easy level don't have this
`js (userclikedPattern = [])`;

---

## What I Learned

I learned alot in this small project but i learned much more in JavaScript that I’m going to try to explain it 8 PARTS in more details how game works and what code means and do:

1. NextSequence of gamePattern
2. Effect for button
3. Sound effect
4. Button animated when it's clicked
5. When user click image
6. When user press keyboard.
7. Check the Answer for user
8. Restart(Reset) the Game.

---

#### PART 1. NextSequence of gamePattern

In This part is for make nextSequence function for game when it's going to run random.

I. First of all, i create the variable random number from 0-3, because we have three parts of image (sky, water and land). the variable called: "randonNumber".

```js
var randomNumber = Math.floor(Math.random() * 3);
```

II. And then, i create the variable outside nextSequence functireon, for image button using array in function called:nextSequence() to make next level to be ready. userClikedPattern which have items which are same as in id(look html file). the variable called: "imageButton".

```js
var imageButton = ["water", "sky", "land"];
```

III. And then, i create the variable inside nextSequence function for join imageButton with randomNumber we first or before. the variable called: "randomImageName".

```js
var randomImageName = imageButton[randomNumber];
```

This is like imagebutton[0] is water in imageButton but if we replace that zero with randomNumber. will the item in image button will change into number so it's can run random when we console.log();

IV. And then, i create the empty array game pattern outside of nextSequence function, and then i added in the randomImageName variable in nextSequence function.

```js
gamePattern.push(randomImageName);
```

V. And then, we create effect for button image to flash when nextSequence called. i target the all id and join with the randomImageName because randomImageName have name water, sky and land which we want to have that effect.

```js
$("#" + randomImageName)
  .fadeIn(300)
  .fadeOut(300)
  .fadeIn(300);
```

And about fadeIn(300).fadeOut(300).fadeIn(300): means image appear 300 millisecond and the disappear and appear after that 300 millsecond.

VI. And then, we add SoundEffects function and pass randomImageName. member that randonImageName have water, land and sky and that is how our sounds name is. this will be going to replace nameOfSound. FOR MORE DETAIL SEE. PART 2.Sound effect

```js
soundsEffect(randomImageName);
```

VII. And then, we add buttonAnimation function and put randonImageName to add effect of class called"pressedButton" from css(look css file).

```js
buttonAnimation(randomImageName);
```

VIII. And then, make the level on the heading to be change when the nextSequence call, so i increment by 1. every time it's called. (For more info look part 5)

```js
level++;
$("#heading-title").text("Level " + level);
```

---

#### PART 2. Sound effect

In this part i create the function call soundsEffect which have input called:"nameOfSounds" which will going to have all sound for games.

I. Use use new Audio().play(); to add audio, where the nameOfSounds input is going to be called or replace once the function used.

```js
new Audio("../../sounds/easy_level_sounds/" + nameOfSounds + ".mp3").play();
```

---

#### PART 3. Button animated when it's clicker (add event listener).

Here i create animate button function which have input called "pressedButton". it's going work when user clicked both nextSequence and user clicked.

I. I create the variable which take the id and join with input "pressedButton", and add the class called: "pressed_button". the varaible called:"buttonAnimation"

```js
var pressedButton = $("#" + pressedButton);
pressedButton.addClass("pressed_button");
```

II. And then, i set timeout for removing the pressed_button after 1000 millisecond.

```js
setTimeout(function () {
  pressedButton.removeClass("pressed_button");
}, 1000);
```

#### PART 4.when user click image

Here I add eventlistener when user click the button.

I. First we detect when the user click the "this", which tell what the html element are. but here we target "id". and then i create variable called:"clickedImage".

```js
var clickedImage = this.id;
```

II. And then, i create the empty array user clicked Pattern outside the addeventlistener click and put the clickedImage variable to the end of userClikedPattern.

This make the clickedImage variable to be in array userClikeredPattern when we console.log it 😊 in function called:nextSequence() to make next level to be ready.

```js
userClikedPattern.push(clickedImage);
```

III. And then, i add also the buttonAnimation function to take input of clikedImage, which is going to add effect on button when user clicked.

```js
buttonAnimation(clickedImage);
```

#### Part 5.when user press keyboard.

Here i add eventListener for keyboard to detect when the user press key on keyboard. but i need to react only once when user press key and stop(toggle manual method), and then call nextSequence function i create for the first time.

I. I create the variable called KeyForStartGame which is equal to false.

```js
var KeyForStartGame = false;
```

II. After, that i use if statement to detect if not keyForStartGame variable is false, call nextSequence. and then make keyForStartGame to be True (which is going to stop).

```js
if (!keyForStartGame) {
  nextSequence();
  keyForStartGame = true;
}
```

III. And then add change the title og heading after the key press. first of all, i create variable for level outside the keypress eventlistener which is equal zero.

```js
var level = 0;
```

And then, target that heading one (h1), to be level 1 when user click on press key.

```js
$("#heading-title").text("Level " + level);
```

#### PART 6.check the Answer for user

Here is where the magic happens even me i don't know very well how it's work but in my mind i do. but to explain, it's like to explain magic but i gonna try to explain my best to explain it.

I. First of all, i create the function called "CheckTheAnswer" which take one input called:"currentLevel". and then, i put in the addeventlistener of click. and put the userclikedpattern but i measure the length of it and minus one (1). which help us to check if is equal to the button user pressed.

```js
checkTheAnswer(userClikedPattern.length - 1);
```

II. I add if statement to check if the button pressed is equal to the user asked to pressed, if "gamePattern currentLevel" is equal to the "userClickedPatter currentLevel" is true console.log("ooooh whoah 😉"); but if not true console.log("oooh noooooooooo 🙄"); but i delete those console.log(); all code run smooth before i upload.

```js
function CheckTheAnswer(currentLevel) {
  if (gamePatter[currentLevel] === userClikedPatter[current]) {
    console.log("ooooh whoah 😉");
  } else {
    console.log("oooh noooooooooo 🙄");
  }
}
```

III. Inside the if statement, i call the nextSequence function and i set time to be called after 19 millsecond.

```js
setTimeout(function () {
  nextSequence();
}, 19);
```

IV. In the else side (when user press wrong image), i change the heading to say gameover press any key to start. i target heading one(h1). change when user is wrong.

```js
$("#heading-title").text("Game Over, Press Any key to Start");
```

V. I add class of red background for background to be red when user game is over. i create the variable called gameoverColor to target body and add class called:"game-over."

```js
var gameoverColor = $("body");
gameoverColor.addClass("game-over");
```

VI. I set timeout to remove that red background color after 200 millisecond.

```js
setTimeout(function () {
  gameoverColor.removeClass("game-over");
}, 200);
```

VII. I add soundeffect for wrong (gameover) by calling sound function and add wrong input.

````js
soundsEffect("game_over");
```

VIII. I add reset function for game to start again when user press any key.

#### PART 7. Restart (Reset) the Game.

Here is part for reset game to start again.
I. I create the function called reset and inside i reset these:level,userClickedPattern.keyForStartGame and gamePattern.

```js
level = 0;
userClikedPattern = [];
keyForStartGame = false;
gamePattern = [];
````

And then i call it in the chekTheAnswer function.

---

## Continued development

i still need to continue to learn well JavaScript and css on web responsive and all the best practice for writing code in a way i don't repeat myself (Don't repeat yourself) and rich README file.

That what i going to focus and learn depth. 🤗

---

## Useful resources

- [Customize hover effect](https://www.youtube.com/watch?v=ceNMP-aQkQ4&t=5s) - This helped me for understanding how to use customize hover using css only. I really liked this pattern and will use it going forward.

- [Bootstrap card columns](https://getbootstrap.com/docs/4.0/components/card/#card-columns) - This helped me for understanding how to use card columns in bootstrap for designing my gallery.

---

## Author

- Website - [Hakizimana Clement](https://github.com/Hakizimana-Clement)
- Twitter - [@HakizimanaClem5](https://twitter.com/HakizimanaClem5)

---

## Acknowledgments

- [Angela Yu](https://twitter.com/yu_angela?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)
- [Kevin Powell](https://twitter.com/KevinJPowell?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)
