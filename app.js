var titleAdjective = document.getElementById("titleChangingDescriptor");
var titlePrefix = document.getElementById("titleChangingPrefix");
var titleLineOne = document.getElementById("titleLineOne");
var titlePhrase = document.getElementById("titlePhrasee");

var dimTarget = document.getElementById("dim-target");
var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");


var adjectives = [
    "Engineer",
    "Designer",
    "Creator    "
];

var prefixes = [
    "an&nbsp&nbsp;",
    "a&nbsp;&nbsp;",
    "a&nbsp;&nbsp;"
];


changeWord(0);

    

function changeWord(x) {
    if (x < adjectives.length){
        var prefix = prefixes[x];
        var string = adjectives[x];
    
        setTimeout(() => {
            titleAdjective.innerHTML = string;
            titlePrefix.innerHTML = prefix;
            changeWord(x + 1);
        }, 2000);
    } else {
        changeWord(0);
    }
}

var red = 222;
var green = 170;
var blue = 170;

var selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

greenUp();

function greenUp(){
    if (green < 222){
        setTimeout(() => {
            green += 2;
            selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            titleAdjective.style.color = selectedColor;
            titleLineOne.style.color = selectedColor;
            titlePhrase.style.color = selectedColor;
            greenUp();
        }, 50);
    } else {
        redDown();
    }
}

function redDown(){
    if (red >170){
        setTimeout(() => {
            red -= 2;
            selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            titleAdjective.style.color = selectedColor;
            titleLineOne.style.color = selectedColor;
            titlePhrase.style.color = selectedColor;
            redDown();
        }, 50);
    } else {
        blueUp();
    }
}

function blueUp(){
    if (blue < 222){
        setTimeout(() => {
            blue += 2;
            selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            titleAdjective.style.color = selectedColor;
            titleLineOne.style.color = selectedColor;
            titlePhrase.style.color = selectedColor;
            blueUp();
        }, 50);
    } else {
        greenDown();
    }
}

function greenDown(){
    if (green >170){
        setTimeout(() => {
            green -= 2;
            selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            titleAdjective.style.color = selectedColor;
            titleLineOne.style.color = selectedColor;
            titlePhrase.style.color = selectedColor;
            greenDown();
        }, 50);
    } else {
        redUp();
    }
}

function redUp(){
    if (red < 222){
        setTimeout(() => {
            red += 2;
            selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            titleAdjective.style.color = selectedColor;
            titleLineOne.style.color = selectedColor;
            titlePhrase.style.color = selectedColor;
            redUp();
        }, 50);
    } else {
        blueDown();
    }
}

function blueDown(){
    if (blue >170){
        setTimeout(() => {
            blue -= 2;
            selectedColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            titleAdjective.style.color = selectedColor;
            titleLineOne.style.color = selectedColor;
            titlePhrase.style.color = selectedColor;
            blueDown();
        }, 50);
    } else {
        greenUp();
    }
}





/*var textBar = document.getElementById("titleExtra");
window.onmousewheel = function () {
    if (textBar.style.width < 100) {
        textBar.style.width += 2;
    }
    console.log("scrolled");
} */

var menuToggle = false;

function showMenu(){
    console.log(menu.style.zIndex);
    if(menuToggle){
        //dimTarget.style.opacity = "1";
        menuToggle = false;
        menu.style.zIndex = "-1";
        menu.style.opacity = "1";
    } else {
        //dimTarget.style.opacity = "0.1"; 
        menu.style.opacity = "0.8"
        menuToggle = true;
        menu.style.zIndex = "10";
    }
    
}
