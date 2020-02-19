/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /*Game.js to create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard.
 */

class Game {
    constructor(){

        this.missed = 0;
        this.phrases = this.createPhrases();
     this.activePhrase = null;
        
    }
    




    


    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

createPhrases(){

  const gamePhrases =[ 
  new Phrase ( "Jaws of Life"),
  new Phrase("Raining Cats and Dogs"),
    new Phrase("Fight Fire with Fire"),
    new Phrase ("Down to Earth"),
   new Phrase ("Down and Out")]

    return gamePhrases;

    }

    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
getRandomPhrase() {

const number = Math.floor(Math.random() * this.phrases.length);

const phrase = this.phrases[number];

return phrase;


};

/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {

document.getElementById("overlay").style.display = 'none';//Hide start screen overlay
this.activePhrase = new Phrase (this.getRandomPhrase());
this.activePhrase.addPhraseToDisplay();


};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {};

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {};

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {};




}