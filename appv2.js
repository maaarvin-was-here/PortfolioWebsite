var titleAdjective = document.getElementById("titleChangingDescriptor");

var adjectives = [
    "Cool",
    "Awesome",
    "Perfection"
];


changeWord(0);

    

function changeWord(x) {
    if (x < adjectives.length){
        var string = adjectives[x];
    
        setTimeout(() => {
            titleAdjective.innerHTML = string;
            changeWord(x + 1);
        }, 1000);
    } else {
        changeWord(0);
    }
}