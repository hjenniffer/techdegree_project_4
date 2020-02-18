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
    "Jaws of Life",
    "Raining Cats and Dogs",
    "Fight Fire with Fire",
    "Down to Earth",
    "Down and Out"];

    return gamePhrases;

    }
}