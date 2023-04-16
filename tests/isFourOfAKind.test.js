const CompareHands = require("../CompareHands");
const Hand = require("../Hand");
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

test("Check that isFourOfAKind returns truthy",() =>{
    let hand = new Hand("♣9","♣9","♣9","♣9","♣6");
    expect(CompareHands.isFlush(hand)).toBeTruthy();
});

test('Check that isFourOfAKind returns a higher score for the stronger hand (if two hands but with four of a kind', () =>{
    let hand1 = new Hand("♥9", "♦9", "♣9", "♠9", "♠2");
    let hand2 = new Hand("♣4", "♠9", "♠9", "♠9", "♠9");
    let hand1Score = CompareHands.isFourOfAKind(hand1);
    let hand2Score = CompareHands.isFourOfAKind(hand2);
    
    let rank = CompareHands.rankToPoint(ranks);
    expect(CompareHands.isFourOfAKind(hand2Score)).toBeGreaterThan(CompareHands.isFourOfAKind(hand1Score));
});