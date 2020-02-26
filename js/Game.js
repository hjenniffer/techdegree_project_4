/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /*Game.js to create a Game class methods for starting and ending the game, handling
interactions, getting a random phrase, checking for a win, and removing a life from the
scoreboard.
 */


const overlay = document.querySelector('#overlay');


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

overlay.style.display = "none";
this.activePhrase = this.getRandomPhrase();
this.activePhrase.addPhraseToDisplay();


};

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin() {
    const hiddenLetters = document.getElementsByClassName("hide letter"); //Total hidden litters which are set by Phrase class
    if (hiddenLetters.length > 0) {
        //if more than zero, not winning yet if 0 return true and player won
        return false;
    } else {
        return true;
    }
}

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    const lives = document.getElementsByClassName("tries"); //Total Lives
    const triesLeft = lives.length - this.missed; //Total tries left: length - missed

    //If we have more than 0 tries then change the pic and add to missed
    if (triesLeft > 0) {
        lives[this.missed].firstElementChild.src = "images/lostHeart.png"; //change heart image
        this.missed += 1; // add one to missed
    }

    //If missed count is 5, call gameOver
    if (this.missed == 5) {
        this.gameOver(false);
    }
}


/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon) {

if(gameWon){

document.getElementById('overlay').style.display= 'flex';
document.getElementById("game-over-message").textContent = 
`"Woot Woot ! Great Job you won with ${this.missed} live(s) lost"`;
document.getElementById('overlay').className = "win";

}else{ document.getElementById('overlay').style.display= 'flex';
document.getElementById("game-over-message")

.textContent = `Bummer, The phrase was "${this.activePhrase.phrase}".
    Better luck next time! Please try again`;
document.getElementById("overlay").className = "lose";
document.getElementById('overlay.lose').style.backgroundColor="blue"
}



}


handleInteraction(e) {
    // If the event is coming from physical keyboard and catching with 'keydown'
    if (e.type == "keydown") {
        const char = screenKeyboard.querySelectorAll("button"); //find all the buttons
        for (let i = 0; i < char.length; i++) {
            const button = char[i];
            const buttonText = button.innerText;
            if (e.key.toLowerCase() == buttonText) {
                // if the buttons has the text of the key pressed

                button.disabled = true; //disable the button

                if (this.activePhrase.checkLetter(buttonText)) {
                    body.style.backgroundColor = "blue"
                    //if active phrase has the button text
                    button.className = "chosen"; //change the class of button to chosen
                    this.activePhrase.showMatchedLetter(buttonText); //display the matched letter
                    if (this.checkForWin()) {
                        this.gameOver(true); //check if the user is won. then display gameOver
                    }
                } else {

                    if (button.className != "wrong") {
                        //if the button class is not already wrong
                        button.className = "wrong"; //set it to wrong
                        body.style.backgroundColor="green"
                        this.removeLife(); //remove life
                    }
                }
            }
        }
        //If the event is coming the mouse click
    } else if (e.type == "click") {
        e.disabled = true;
        const button = e.target;

        const buttonText = button.textContent;

        if (this.activePhrase.checkLetter(buttonText)) {
            //if active phrase has the button text
            button.className = "chosen"; //change the class of button to chosen
            this.activePhrase.showMatchedLetter(buttonText); //display the matched letter
            if (this.checkForWin()) {
                this.gameOver(true); //check if the user is won. then display gameOver
            }
        } else {
            if (button.className != "wrong") {
                //if the button class is not already wrong
                button.className = "wrong"; //set it to wrong
                this.removeLife(); //remove life
            }
        }
    }
}

resetGame(){
    document.querySelector('#phrase ul').innerHTML = '';
    document.querySelector('.main-container').classList.remove('onelife');
    document.querySelectorAll('#qwerty button').forEach(button => {
      button.className = 'key';
      button.disabled = false;
    })
    document.querySelectorAll('#scoreboard img').forEach(li => {
      li.src = "images/liveHeart.png";
    })
  }
}




;






