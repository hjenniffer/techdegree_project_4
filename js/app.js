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



startGameButton.addEventListener('click',(event) => {

   

});


//const phrase = new Phrase('Life is like a box of chocolates');
//console.log(`Phrase - phrase: ${phrase.phrase}`);




const game = new Game();
game.phrases.forEach((phrase, index) => {
console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});



