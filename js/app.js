/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Step 1: 
 * 
 * app.js to create a new instance of the Game class and add event listeners for the start
button and onscreen keyboard buttons.*/



const startGameButton = document.getElementById('btn__reset');
const screenKeyboard = document.getElementById('qwerty');


//add event Listner

let game;



startGameButton.addEventListener('click',() => {
    game = new Game();
    game.startGame();

   

});





//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);




/** test code const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
*/

/**step 5 test code
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    */

  // const game = new Game();
   //game.getRandomPhrase().addPhraseToDisplay();

   // test code for Step 7

  // const game = new Game();
//game.startGame();
//console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


