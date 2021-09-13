var titleChangeLine = document.getElementById("title-changing-text");
var underscoreCursor = document.getElementById("underscore-cursor");


var cell = document.getElementsByClassName("projects-cell");

var titleName = document.getElementById("title-one-name");
var titlePronoun = document.getElementById("title-pronoun");
var projectTitle = document.getElementById("project-title-text");


var aboutToPortfolio = false;

var currentlyLine = "";


var textCarousel = [
    "am^an^engineer^of^many^areas",
    "am^a^software^developer",
    "love^solving^problems",
    "love^building^and^creating",
    "study^in^rainy^Seattle,^WA",
    "enjoy^a^good^game^of^chess"
];



changeWord(0);

/*
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
*/


function changeWord(x) {
    if (x < textCarousel.length){
        printWord(x, 0);
    } else {
        changeWord(0);
    }
}


function printWord(x, index){
    var targetWord = textCarousel[x];
    
    var extra = 0;
    for(i = 0; i < targetWord.length; i++){
        if(targetWord.charAt(i) == "^"){
            extra += 5;
        }
    }
    if(currentlyLine.length < targetWord.length + extra){
        setTimeout(() => {
            if(targetWord.charAt(index) == "^"){
                currentlyLine += "&nbsp;";
            } else {
                currentlyLine += targetWord.charAt(index);
            }

            index += 1;      
            titleChangeLine.innerHTML = currentlyLine;
            printWord(x, index);
        }, 70);
    } else {
        cursor_hide(x, 1);
    }
}

function cursor_hide(x, current){
    if(current > 0){
        setTimeout(()=>{
            underscoreCursor.style.opacity = current;
            cursor_hide(x, current - 0.05);
        }, 15);
    } else {
        cursor_show(x, 0);
    }
}

function cursor_show(x, current){
    if(current < 1){
        setTimeout(()=>{
            underscoreCursor.style.opacity = current;
            cursor_show(x, current + 0.05);
        }, 15);
    } else {
        deleteWord(x, currentlyLine.length - 1);
    }
}

function deleteWord(x, index){
    var targetWord = textCarousel[x];
    if(currentlyLine.length > 0){
        setTimeout(()=>{
            if(currentlyLine.charAt(index - 1) == ";"){
                currentlyLine = currentlyLine.substring(0, index - 6);
                index -= 6;
            } else {
                currentlyLine = currentlyLine.substring(0, index - 1);
                index -= 1;
            }
            
            titleChangeLine.innerHTML = currentlyLine;
            deleteWord(x, index);
        }, 70);
    } else {
        changeWord(x + 1);
    }
}

//width from 0 to 100
//wait, blink cursor
//width from 100 to 0
//change word, wait a sec











window.unload = function () {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0.1);
}


function scrollToPortfolio(){
    setTimeout(() => {
        history.pushState("", document.title, " ");
    }, 1);
}

function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, " ");
    }, 1);
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
            titleChangeLine.style.color = selectedColor;
            underscoreCursor.style.color = selectedColor;
            titleName.style.color = selectedColor;
            titlePronoun.style.color = selectedColor;
            projectTitle.style.color = selectedColor;
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
            titleChangeLine.style.color = selectedColor;
            underscoreCursor.style.color = selectedColor;
            titleName.style.color = selectedColor;
            titlePronoun.style.color = selectedColor;
            projectTitle.style.color = selectedColor;
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
            titleChangeLine.style.color = selectedColor;
            underscoreCursor.style.color = selectedColor;
            titleName.style.color = selectedColor;
            titlePronoun.style.color = selectedColor;
            projectTitle.style.color = selectedColor;
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
            titleChangeLine.style.color = selectedColor;
            underscoreCursor.style.color = selectedColor;
            titleName.style.color = selectedColor;
            titlePronoun.style.color = selectedColor;
            projectTitle.style.color = selectedColor;
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
            titleChangeLine.style.color = selectedColor;
            underscoreCursor.style.color = selectedColor;
            titleName.style.color = selectedColor;
            titlePronoun.style.color = selectedColor;
            projectTitle.style.color = selectedColor;
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
            titleChangeLine.style.color = selectedColor;
            underscoreCursor.style.color = selectedColor;
            titleName.style.color = selectedColor;
            titlePronoun.style.color = selectedColor;
            projectTitle.style.color = selectedColor;
            for(i = 0; i < cell.length; i++){
                cell[i].style.borderColor = selectedColor;
            }
            blueDown();
        }, 50);
    } else {
        greenUp();
    }
}
