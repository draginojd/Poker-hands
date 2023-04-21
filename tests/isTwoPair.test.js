const CompareHands = require("../CompareHands");
const Hand = require("../Hand");
const suits = "♥♦♣♠";
const ranks= "23456789TJQKA";


describe('Is Two Pair', () => {
    test("Check that isTwoPair to be truthy if there is two pairs", () => {
        let hand = new Hand("♥2", "♦2", "♣6", "♥6", "♦Q");
        expect(CompareHands.isTwoPair(hand)).toBeTruthy();
    });
    
    test("Check that isTwoPair to be falsy if not two pairs", () => {
        let hand = new Hand("♥5", "♥5", "♠6", "♦7", "♣8");
        expect(CompareHands.isTwoPair(hand)).toBeFalsy();
    });
    
    test("Check that isTwoPair returns the highest score for the hand with the strongest Two pairs", () => {
        let hand1 = new Hand("♥5", "♥5", "♠6", "♦6", "♣8");
        let hand2 = new Hand("♥2", "♦2", "♣3", "♥3", "♦8");
        hand1Score = CompareHands.isTwoPair(hand1);
        hand2Score = CompareHands.isTwoPair(hand2);
        expect(hand1Score).toBeGreaterThan(hand2Score);
    });
    
    test("Check that isTwoPair returns the lowest score for the hand with the weakest Two pairs", () => {
        let hand1 = new Hand("♥2", "♦2", "♣3", "♥3", "♦8");
        let hand2 = new Hand("♥6", "♥6", "♠7", "♦7", "♣8");
        hand1Score = CompareHands.isTwoPair(hand1);
        hand2Score = CompareHands.isTwoPair(hand2);
        expect(hand1Score).toBeLessThan(hand2Score);
    }); 
});

