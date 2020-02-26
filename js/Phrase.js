/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 
/*

● Phrase.js to create a Phrase class to handle the creation of phrases.
*/


class Phrase {

    constructor (phrase) {
        this.phrase = phrase.toLowerCase(); 

    }

    /**
* Display phrase on game board
*/

addPhraseToDisplay() {

const currentPhrase = this.phrase.split('');
const pharseUL = document.querySelector('#phrase ul');

currentPhrase.forEach(letter =>{
const li = document.createElement('li');
if ( letter ===" "){

li.className = 'space';
li.innerText = letter;

}else{
li.className = `hide letter ${letter} $`;
li.innerText = letter;

}

pharseUL.appendChild(li);


});

}

/**
* Checks if passed letter is in phrase

* @param (string) letter - Letter to check using the includes () method
`checkLetter()`: Checks to see if the letter selected by the player matches a letter
in the phrase. 
*/
checkLetter(letter) {
return this.phrase.includes(letter);

};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display

○ 
○ `showMatchedLetter()`: Reveals the letter(s) on the board that matches the
player's selection. To reveal the matching letter(s), select all of the letter DOM
elements that have a CSS class name that matches the selected letter and
replace each selected element's `hide` CSS class with the `show` CSS class.

*/
showMatchedLetter(letter) {
 const phraseLetters = document.querySelectorAll('#phrase li')
 phraseLetters.forEach(li => { 
     if (li.innerText === letter){
        li.classList.remove('hide');
        li.classList.add('show');

     }


 });

}


}


