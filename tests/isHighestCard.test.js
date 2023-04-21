const Hand = require("../Hand");
const CompareHands = require("../CompareHands");
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

describe('Is Highest Card', () => {
test('Check that isHighestCard returns the highest score for the strongest hand of Highest Card', () => {
    let hand1 = new Hand("♥2", "♠2", "♣4", "♥5", "♣7");
    let hand2 = new Hand("♥2", "♠2", "♣4", "♥5", "♣9");
    let hand1Score = CompareHands.isHighestCard(hand1);
    let hand2Score = CompareHands.isHighestCard(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('Check that isHighestCard returns the lowest score for the weakest hand of Highest Card', () => {
    let hand1 = new Hand("♥2", "♠A", "♣4", "♥5", "♣2");
    let hand2 = new Hand("♥2", "♠9", "♣4", "♥5", "♣6");
   let hand1Score = CompareHands.isHighestCard(hand1);
   let hand2Score = CompareHands.isHighestCard(hand2);
   expect(hand2Score).toBeLessThan(hand1Score);
});


 //Denna under var klurig
/* test('Check that isHighestCard returns the lowest score for the weakest hand of Highest Card with One Pair', () => {
    let hand1 = new Hand("♥2", "♠T", "♣T", "♥5", "♣2");
    let hand2 = new Hand("♥2", "♠2", "♣4", "♥5", "♣A");
   let hand1Score = CompareHands.isHighestCard(hand1);
   let hand2Score = CompareHands.isHighestCard(hand2);
   expect(hand2Score).toBeLessThan(hand1Score);
}); */




});
