const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

test('check that isStraight returns truthy if straight', () => {
  for (let rank of ranks) {
    let hand = new Hand('♥' + rank, '♦' + rank, '♣' + rank, '♥' + rank, '♦' + rank);
    expect(CompareHands.isStraight(hand)).toBeTruthy();
  }
});

test("check that isStraight returns falsy if not straight", () => {
  for (let rank of ranks) {
    let hand = new Hand("")
  }
})
