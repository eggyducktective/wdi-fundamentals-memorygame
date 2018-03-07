console.log('Up and running!');


var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
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
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].suit);
	
	checkForMatch();
};
//console.log(cards[cardID].cardImage);
//console.log(cards[cardID.suit]);

flipCard(0);
flipCard(2);


// if (numberOfCards === 2 && cardsInPlay[0] === cardsInPlay[3]) {
// 		alert('You found a match');
// 	} else {
// 		alert('Sorry, try again');
// }
//var numberOfCards = cardsInPlay.length;
//if (numberOfCards === 2) {