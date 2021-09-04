
function scrollToTop(){
    setTimeout(() => {
        history.pushState("", document.title, "procrastiwork.html");
    }, 1);
}
