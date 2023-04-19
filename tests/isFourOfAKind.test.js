const CompareHands = require("../CompareHands");
const Hand = require("../Hand");
const suits = "♥♦♣♠";
const ranks = "23456789TJQKA";

test("Check that isFourOfAKind returns truthy2", () => {
    let prevRank;
    for (let suit of suits) {
        for (let rank of ranks) {
            let hand = new Hand("♣" + rank, "♥" + rank, "♦" + rank, "♠" + rank, "♥" + (prevRank ? prevRank : "A"));
            prevRank = rank;
            expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
            console.log(hand);
        }
    }
});

test("Check that isFourOfAKind returns truthy", () => {
    let hand = new Hand("♣5", "♦9", "♣9", "♦9", "♣9");
    expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test("Check that isFourOfAKind returns falsy", () => {
    let hand = new Hand("♣5", "♦9", "♣9", "♦8", "♣6");
    expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
})

test("Check that isFourOfAKind returns falsy2", () => {
    let prevRank;
    for (let rank of ranks) {
        let hand = new Hand("♣" + rank, "♥" + rank, "♦" + rank, "♠" + (prevRank ? prevRank : "A"), "♥" + (prevRank ? prevRank : "A"));
        prevRank = rank;
        expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
    }
});

test('Check that isFourOfAKind returns a higher score(toBeGreaterThan) for the stronger hand (if two hands but with four of a kind', () => {

    let hand1 = new Hand("♥9", "♦9", "♣9", "♠9", "♠2");
    let hand2 = new Hand("♣4", "♠T", "♠T", "♠T", "♠T");

    let hand1Score = CompareHands.isFourOfAKind(hand1);
    let hand2Score = CompareHands.isFourOfAKind(hand2);
    expect(hand2Score).toBeGreaterThan(hand1Score);
});

test('Check that isFourOfAKind returns lower score(toBeLessThan) for the weakest hand (if two hands but with four of a kind', () => {
    let hand1 = new Hand("♥9", "♦9", "♣9", "♠9", "♠5");
    let hand2 = new Hand("♣4", "♠9", "♠9", "♠9", "♠9");

    let hand1Score = CompareHands.isFourOfAKind(hand1);
    let hand2Score = CompareHands.isFourOfAKind(hand2);
    expect(hand2Score).toBeLessThan(hand1Score);
});
