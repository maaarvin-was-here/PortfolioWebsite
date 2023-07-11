
var page = document.getElementById('resume');
var button = document.getElementById('invertButton');

var x = 0;

function invert() {
    console.log("inverting");
    if(x % 2 == 1) {
        page.style.color = 'grey';
        button.style.color = 'grey';
        page.style.backgroundColor = 'white';
        button.style.backgroundColor = 'white';
        x++;
    } else {
        page.style.color = '#F2EDE3';
        button.style.color = '#F2EDE3';
        page.style.backgroundColor = '#181818';
        button.style.backgroundColor = '#181818';
        x++;
    }
}



//#F2EDE3