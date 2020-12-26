var display = document.querySelector("#wordDisplay");

var hi = 'test';
console.log(hi);

var letterC = document.createTextNode("C");
var letterO = document.createTextNode("O");
var letterL = document.createTextNode("L");
var letterT = document.createTextNode("T");
var letterN = document.createTextNode("N");
var letterM = document.createTextNode("M");
var letterI = document.createTextNode("I");


function input (letter){
    display.textContent(letter);
}

input(c);