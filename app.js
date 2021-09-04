var titleAdjective = document.getElementById("titleChangingDescriptor");
var titlePrefix = document.getElementById("titleChangingPrefix");
var titleLineOne = document.getElementById("titleLineOne");
var titlePhrase = document.getElementById("titlePhrasee");

var cell = document.getElementsByClassName("projectsCell");

var aboutToPortfolio = false;


var adjectives = [
    "Engineer",
    "Developer",
    "Visionary"
];

var prefixes = [
    "an&nbsp&nbsp;",
    "a&nbsp;&nbsp;",
    "a&nbsp;&nbsp;"
];

window.unload = function () {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 1);
}

changeWord(0);



function scrollToPortfolio(){
    setTimeout(() => {
        history.pushState("", document.title, "index.html");
    }, 1);
}

function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "index.html");
    }, 1);
}


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
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
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
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
            //cellTwo.style.borderColor = selectedColor;
            //cellThree.style.borderColor = selectedColor;
            //cellFour.style.borderColor = selectedColor;
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
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
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
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
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
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
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
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
            blueDown();
        }, 50);
    } else {
        greenUp();
    }
}
