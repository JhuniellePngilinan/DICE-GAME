var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage;
image.setAttribute("src", randomImageSource);