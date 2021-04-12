var titleAdjective = document.getElementById("titleChangingDescriptor");
var titlePrefix = document.getElementById("titleChangingPrefix");

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
