const CompareHands = require("../CompareHands");
const Hand = require("../Hand");
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

describe('Is Straight Flush', () => {   
test("Check that isStraightFlush returns Truthy if Straight Flush" , () => {
    let hand = new Hand("♥2","♥3","♥4","♥5","♥6");
    expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
    console.log(hand);
});

test("Check that isStraightFlush returns Falsy if not Straight Flush" , () => {
    let hand = new Hand("♥2","♥3","♥4","♥5","♦6");
    expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
    console.log(hand);
});


test("Check that isStraightFlush returns the highest score for the strongest hand of Straight flush", () => {
    let hand1 = new Hand("♥2","♥3","♥4","♥5","♦6");
    let hand2 = new Hand("♣7","♣8","♣9","♣T","♣J");
    let hand1Score = CompareHands.isStraightFlush(hand1);
    let hand2Score = CompareHands.isStraightFlush(hand2);
    expect(hand1Score).toBeLessThan(hand2Score);
})

test("Check that isStraightFlush returns the lowest score for the weakest hand of Straight flush", () => {
    let hand2 = new Hand("♥2","♥3","♥4","♥5","♦6");
    let hand1 = new Hand("♣7","♣8","♣9","♣T","♣J");
    let hand1Score = CompareHands.isStraightFlush(hand1);
    let hand2Score = CompareHands.isStraightFlush(hand2);
    expect(hand1Score).toBeGreaterThan(hand2Score);
})
});
