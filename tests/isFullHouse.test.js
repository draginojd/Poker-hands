const Hand = require("../Hand");
const CompareHands = require("../CompareHands");
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

describe('isFullHouse', () => {
    
test("Check that isFullHouse returns Truthy if Full House", () => {
    let hand = new Hand("♥A","♣A","♥A","♦K","♦K");
    expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test("Check that isFullHouse returns Falsy if Full House", () => {
    let hand = new Hand("♥A","♣A","♥Q","♦K","♦K");
    expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test("Check that isFullHouse returns the highest score for the strongest hand of Full house", () => {
    let hand1 = new Hand("♥A","♣A","♥A","♦K","♦K");
    let hand2 = new Hand("♥9","♣9","♥9","♦K","♦K");
    let hand1Score = CompareHands.isFullHouse(hand1);
    let hand2Score = CompareHands.isFullHouse(hand2);
    expect(hand1Score).toBeGreaterThan(hand2Score);
})

test("Check that isFullHouse returns the lowest score for the weakest hand of Full house", () => {
    let hand1 = new Hand("♥2","♣2","♥2","♦K","♦K");
    let hand2 = new Hand("♥9","♣9","♥9","♦K","♦K");
    let hand1Score = CompareHands.isFullHouse(hand1);
    let hand2Score = CompareHands.isFullHouse(hand2);
    expect(hand1Score).toBeLessThan(hand2Score);
})
});