//          VALUES TO INITIALIZE        //

var stringOfLetters = "POTHAGR";

var scoringGuidelines = 
`Beginner (0)
Good Start (6)
Moving Up (14)
Good (22)
Solid (42)
Nice (69)
Great (111)
Amazing (139)
Genius (194) `;


//          GENERAL VARIABLES          //

// Elements
var wordDisplay = document.getElementById("wordDisplay");
var wordSubmission = document.getElementById("wordBank");
var notification = document.getElementById("notification");

var firstBox = document.getElementById("firstBox");
var secondBox = document.getElementById("secondBox");
var thirdBox = document.getElementById("thirdBox");
var fourthBox = document.getElementById("fourthBox");
var fifthBox = document.getElementById("fifthBox");
var sixthBox = document.getElementById("sixthBox");
var seventhBox = document.getElementById("seventhBox");


//Letters
var letterArray = stringOfLetters.split("");

//Word
var string = '';
var firstWord = 0;

// Checks
var requiredLetter = letterArray[6];
var possibleWords = [];
var checkPangram = false;

// Display
var foundWordsString = '';
var foundWords = [];

// Points
var points = 0;
var pointCounter = document.getElementById("pointCounter");
  



//              JAVASCRIPT                //



init();

//Adds a new letter to the current guess
function input(letter) {
    string += letter;
    console.log(wordDisplay);
    wordDisplay.innerHTML = string;
}

//Checks to see if submitted word contains more than 3 letters. 
//Notifies user if no word has been typed or if the word is less
//than four letters
function checkLength() {
    if (string.length == 0) {
        notification.innerHTML = "Type a word";
        setTimeout(function(){ notification.innerHTML = "";}, 1000);
    } else if (string.length < 4) {
        alert("Word is too short");
        string = '';
        wordDisplay.innerHTML = string;
    } else {
        checkRequiredLetter();        
    }
}

//Checks to see if submitted word includes the required letter. 
//Notifies user if word does not include required letter.
function checkRequiredLetter() {
    if (!string.includes(requiredLetter)) {
        notification.innerHTML = "Does not include center letter";
        string = '';
        wordDisplay.innerHTML = string;
        setTimeout(function(){ notification.innerHTML = "";}, 1000);
    } else {
        checkWord();
    }
}

//Checks if submitted word is legitimate, comparing it to dictionary
//passed in by user. Notifies user if word has already been found or
//if the word is not in the dictionary
function checkWord() {
    if (foundWords.includes(string)) {
        notification.innerHTML = "Already been found";
        string = '';
        wordDisplay.innerHTML = string;
        setTimeout(function(){ notification.innerHTML = "";}, 1000);
    } else if(possibleWords.includes(string)) {
        submitWord();
    } else {
        notification.innerHTML = "Not in word list";
        string = '';
        wordDisplay.innerHTML = string;
        setTimeout(function(){ notification.innerHTML = "";}, 1000);
    }  
}

//Calculates and adds score of a word, and adds word to found
//words bank
function submitWord() {
    if (firstWord != 0) {
        foundWordsString += ', ';
    }
    calculateScore();
    checkPangram = false;
    foundWords.push(string);
    foundWordsString += string;
    wordBank.innerHTML = foundWordsString;
    string = '';
    wordDisplay.innerHTML = string;
    firstWord++;
}

//Calculates a score for a submitted word
//      1 point if the word is 4 letters long
//      Points equal to word length if word is longer than 4 letters
//      Points equal to 7 plus word length if word is a pangram
function calculateScore() {
    isPangram();
    
    if (string.length == 4) {
        alert(`+1`);
        points += 1;
    } else if (checkPangram == true){
        alert(`Pangram! +${string.length + 7}`);
        points += string.length + 7;
    } else if (string.length > 4) {
        alert(`+${string.length}`);
        points += string.length; 
    }
    pointCounter.innerHTML = points.toString();
}

//Checks whether current word is a pangram
function isPangram() {
    if (letterArray.every(letter => string.includes(letter))) {
        checkPangram = true;
    } else {
        checkPangram = false;
    }
}

//Removes a letter from the end of the current string
function deleteLetter() {
    string = string.slice(0, -1);
    wordDisplay.innerHTML = string;
}

//Creates an alert that shows the scoring threshholds 
function showScoringGuidelines() {
    alert(scoringGuidelines);
}



function init(){
      var arrayNumber = 0;
      var letters = letterArray;

      firstBox.innerHTML = letters[arrayNumber];

      firstBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          firstBox.style.backgroundColor = "gold";
      }


      arrayNumber++;
      secondBox.innerHTML = letters[arrayNumber];

      secondBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          secondBox.style.backgroundColor = "gold";
      }



      arrayNumber++;
      thirdBox.innerHTML = letters[arrayNumber];

      thirdBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          thirdBox.style.backgroundColor = "gold";
      }



      arrayNumber++;
      fourthBox.innerHTML = letters[arrayNumber];

      fourthBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          fourthBox.style.backgroundColor = "gold";
      }



      arrayNumber++;
      fifthBox.innerHTML = letters[arrayNumber];

      fifthBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          fifthBox.style.backgroundColor = "gold";
      }



      arrayNumber++;
      sixthBox.innerHTML = letters[arrayNumber];

      sixthBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          sixthBox.style.backgroundColor = "gold";
      }



      arrayNumber++;
      seventhBox.innerHTML = letters[arrayNumber];

      seventhBox.style.backgroundColor = 'white';
      if (letters[arrayNumber] == requiredLetter) {
          seventhBox.style.backgroundColor = "gold";
      }

}


function shuffle() {
    var arrayNumber = 0;
    var letters = letterArray.slice();

    arrayNumber = Math.floor(Math.random() * (letters.length));
    firstBox.innerHTML = letters[arrayNumber];

    firstBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        firstBox.style.backgroundColor = "gold";
    }
    letters.splice(arrayNumber, 1);


    arrayNumber = Math.floor(Math.random() * (letters.length));
    secondBox.innerHTML = letters[arrayNumber];

    secondBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        secondBox.style.backgroundColor = "gold";
    }

    letters.splice(arrayNumber, 1);


    arrayNumber = Math.floor(Math.random() * (letters.length));
    thirdBox.innerHTML = letters[arrayNumber];

    thirdBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        thirdBox.style.backgroundColor = "gold";
    }
    letters.splice(arrayNumber, 1);


    arrayNumber = Math.floor(Math.random() * (letters.length));
    fourthBox.innerHTML = letters[arrayNumber];

    fourthBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        fourthBox.style.backgroundColor = "gold";
    }
    letters.splice(arrayNumber, 1);


    arrayNumber = Math.floor(Math.random() * (letters.length));
    fifthBox.innerHTML = letters[arrayNumber];

    fifthBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        fifthBox.style.backgroundColor = "gold";
    }
    letters.splice(arrayNumber, 1);


    arrayNumber = Math.floor(Math.random() * (letters.length));
    sixthBox.innerHTML = letters[arrayNumber];

    sixthBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        sixthBox.style.backgroundColor = "gold";
    }
    letters.splice(arrayNumber, 1);


    arrayNumber = Math.floor(Math.random() * (letters.length));
    seventhBox.innerHTML = letters[arrayNumber];

    seventhBox.style.backgroundColor = 'white';
    if (letters[arrayNumber] == requiredLetter) {
        seventhBox.style.backgroundColor = "gold";
    }

    letters.splice(arrayNumber, 1);
}

//Takes dictionary file and prunes it to smaller dictionary with only
//words possible with the letter combination
document.getElementById("file").onchange = function(){
    var file = this.files[0];
    var letters = letterArray;
    
    var reader = new FileReader();
    reader.onload = function(progressEvent){
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            var temp = lines[line].toUpperCase();
            for(var letterCount = 0; letterCount < temp.length; letterCount++) {
                if(temp.charAt(letterCount) != letters[0] &&
                   temp.charAt(letterCount) != letters[1] &&
                   temp.charAt(letterCount) != letters[2] &&
                   temp.charAt(letterCount) != letters[3] &&
                   temp.charAt(letterCount) != letters[4] &&
                   temp.charAt(letterCount) != letters[5] &&
                   temp.charAt(letterCount) != letters[6]
                  ) {
                    letterCount = 99;
                } else if (letterCount == temp.length - 2) {
                    possibleWords.push(temp.slice(0, temp.length - 1));
                }
            }
        }
    };
    reader.readAsText(file);
};