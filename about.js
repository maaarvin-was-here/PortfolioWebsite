

function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "about");
    }, 0.1);
}
