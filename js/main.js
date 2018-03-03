console.log('Up and running!');





var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log(cardOne);
alert('user flipped queen.');

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log(cardTwo);
alert('user flipped king.');

var numberOfCards = cardsInPlay.length;

if (numberOfCards === 2) {
	if (cardsInPlay[0] === cardsInPlay[3]) {
		alert('You found a match');
	} else {
		alert('Sorry, try again');
	}
}