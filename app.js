var titleAdjective = document.getElementById("titleChangingDescriptor");
var titlePrefix = document.getElementById("titleChangingPrefix");
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
