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
  const deck = new DeckOfCards();
  for (let suit of suits) {
    for (let rank of "23456789TJQA") {
      let hand = new Hand(suit + rank, suit + rank, suit + rank, suit + rank, suit + rank);
      deck.shuffle(hand.cards);
      expect(CompareHands.isStraight(hand)).toBeFalsy();
      console.log(hand);
    }
  }
});

test("check that isStraight returns the highest score for the hand with the strongest straight", () => {
  let hand1 = new Hand("♥2", "♠3", "♣4", "♥5", "♣6");
  let hand2 = new Hand("♣9", "♣T", "♥J", "♠Q", "♣K");
  hand1Score = CompareHands.isStraight(hand1);
  hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

test("check that isStraight returns the lowest score for the hand with the weakest straight", () => {
  let hand1 = new Hand("♥2", "♠3", "♣4", "♥5", "♣6");
  let hand2 = new Hand("♣9", "♣T", "♥J", "♠Q", "♣K");
  hand1Score = CompareHands.isStraight(hand1);
  hand2Score = CompareHands.isStraight(hand2);
  expect(hand1Score).toBeLessThan(hand2Score);
});

