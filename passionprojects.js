
function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "passionprojects");
    }, 1);
}