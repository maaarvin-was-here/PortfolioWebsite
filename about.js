

function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "about");
    }, 1);
}
