const CompareHands = require("../CompareHands");
const Hand = require("../Hand");
const suits = "♥♦♣♠";
const ranks= "23456789TJQKA";

test("Check that isTwoPair to be truthy", () => {
let hand = ("2♥", "2♣", "6♣", "6♥", "Q♦");
expect(hand).toBeTruthy();
});