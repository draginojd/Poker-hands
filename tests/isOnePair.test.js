const CompareHands = require("../CompareHands");
const Hand = require("../Hand");
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

describe('One Pair', () => {

    test('Check that isOnePair returns Truthy if One Pair', () => {
        let hand = new Hand("♥2", "♠2", "♣4", "♥5", "♣6");
        expect(CompareHands.isOnePair(hand)).toBeTruthy();
    }); 

    test('Check that isOnePair returns Falsy if not One Pair', () => {
        let hand = new Hand("♥8", "♠9", "♣4", "♥5", "♣A");
        expect(CompareHands.isOnePair(hand)).toBeFalsy();
    });
    
    test('Check that isOnePair returns the greatest score for the strongest hand of One Pair', () => {
        let hand1 = new Hand("♥A", "♠2", "♣4", "♥A", "♣6");
        let hand2 = new Hand("♥2", "♠2", "♣4", "♥5", "♣6");
        let hand1Score = CompareHands.isOnePair(hand1);
        let hand2Score = CompareHands.isOnePair(hand2);
        expect(hand1Score).toBeGreaterThan(hand2Score);
    });
    
    test('Check that isOnePair returns the lowest score for the weakest hand of One Pair', () => {
        let hand1 = new Hand("♥A", "♠2", "♣T", "♥T", "♣6");
        let hand2 = new Hand("♥A", "♠2", "♣4", "♥A", "♣6");
        let hand1Score = CompareHands.isOnePair(hand1);
        let hand2Score = CompareHands.isOnePair(hand2);
        expect(hand1Score).toBeLessThan(hand2Score);
    });
    

});
