const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const DeckOfCards = require("../DeckOfCards")
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

test('check that isStraight returns truthy if straight', () => {
  for (let suit of suits) {
    for (let rank of 'A23456789T') {
      let ranksForHand = '';
      if (rank === 'A') { ranksForHand = 'A2345'; }
      else {
        let index = ranks.indexOf(rank);
        ranksForHand += ranks.slice(index, index + 5);
      }
      let hand = new Hand(...[...ranksForHand].map(x => suit + x));
      expect(CompareHands.isStraight(hand)).toBeTruthy();
    }
  }
});

test("check that isStraight returns falsy if not straight", () => {
  for (let suit of suits) {
    for (let rank of "234567") {
      let hand = new Hand(suit + rank, suit + rank, suit + rank, suit + rank, suit + rank);
      DeckOfCards.shuffle(hand.cards);
      expect(CompareHands.isStraight(hand)).toBeFalsy();
      console.log(hand);
    }
  }
});

