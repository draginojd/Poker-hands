const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';
const ranks = "23456789TJQKA";

describe('Is Three Of A Kind', () => {
  test('Test that threeOfAKind returns truthy if three of a kind', () => {
    let prevRank;
    for(let rank in ranks){
      let hand = new Hand('♥' + rank, '♦' + rank, '♣' + rank, '♠9', '♠8');
      prevRank = rank;
      expect(hand).toBeTruthy();
      
    }
  });
  
  test('Test that threeOfAKind returns falsy if not three of a kind', () => {
    for(let rank in ranks){
      let hand = new Hand('♥' + rank, '♦' + rank, '♣' + rank, '♠' + rank, '♠8');
      expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
      console.log(hand);
    }
  });
  
  test('Test that threeOfAKind returns the higest score for the strongest hand with three of a kind', () => {
      let hand1 = new Hand('♥9', '♦9', '♣9', '♠8', '♠4');
      let hand2 = new Hand('♥8', '♦3', '♣3', '♠3', '♠9');
      hand1Score = CompareHands.isThreeOfAKind(hand1);
      hand2Score = CompareHands.isThreeOfAKind(hand2);
    expect(hand1Score).toBeGreaterThan(hand2Score);
  });
  
  test('Test that threeOfAKind returns the lowest score for the weakest hand with three of a kind', () => {
    let hand1 = new Hand('♥9', '♦9', '♣9', '♠8', '♠4');
    let hand2 = new Hand('♥8', '♦3', '♣3', '♠3', '♠9');
    hand1Score = CompareHands.isThreeOfAKind(hand1);
    hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeLessThan(hand1Score);
  });
  
});


