var dimTarget = document.getElementById("dim-target");
var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

var menuToggle = false;

function showMenu(){
    console.log(menu.style.zIndex);
    if(menuToggle){
        menuToggle = false;
        menu.style.zIndex = "-1";
        menu.style.opacity = "1";
    } else {
        menu.style.opacity = "0.8"
        menuToggle = true;
        menu.style.zIndex = "10";
    }
    
}
