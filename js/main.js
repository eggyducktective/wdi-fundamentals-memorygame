console.log('Up and running!');


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	var numberOfCards = cardsInPlay.length;
	if (numberOfCards === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, try again");
	}
};


var flipCard = function (cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	checkForMatch();
};

flipCard(0);
flipCard(2);


// if (numberOfCards === 2 && cardsInPlay[0] === cardsInPlay[3]) {
// 		alert('You found a match');
// 	} else {
// 		alert('Sorry, try again');
// }
//var numberOfCards = cardsInPlay.length;
//if (numberOfCards === 2) {