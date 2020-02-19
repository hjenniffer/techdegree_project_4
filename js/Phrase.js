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
*/
checkLetter(letter) {
return this.phrase.includes(letter);

};

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
 const phraseLetters = document.querySelectorAll('#phrase li')
 phraseLetters.forEach(li => { 
     if (li.innText === letter){
        li.classList.remove('hide');
        li.classList.add('show');

     }


 })

}


}


