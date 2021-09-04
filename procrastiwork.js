
function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "procrastiwork");
    }, 0.1);
}