

function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "about.html");
    }, 1);
}
