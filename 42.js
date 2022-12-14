//Define a card suit
//Вы получаете любую карту в качестве аргумента. Ваша задача вернуть масть этой карты (в нижнем регистре).

//Наша колода (предустановлена):

//('3♣') -> return 'clubs'
//('3♦') -> return 'diamonds'
//('3♥') -> return 'hearts'
//('3♠') -> return 'spades'

//Мое
function defineSuit(card) {
    const x =card.split('')
      if(x[0] === '♣') return 'clubs';
      if(x[0] === '♦') return 'diamonds';
      if(x[0] === '♥') return 'hearts';
      if(x[0] === '♠') return 'spades';
      if(x[1] === '♣') return 'clubs';
      if(x[1] === '♦') return 'diamonds';
      if(x[1] === '♥') return 'hearts';
      if(x[1] === '♠') return 'spades';
      if(x[2] === '♣') return 'clubs';
      if(x[2] === '♦') return 'diamonds';
      if(x[2] === '♥') return 'hearts';
      if(x[2] === '♠') return 'spades';
  }

  function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
    }

    function defineSuit(card) {
        const s = {
          "♣": "clubs",
          "♠": "spades",
          "♦": "diamonds",
          "♥": "hearts"
        }
        return s[card.charAt(card.length - 1)]
      }

      function defineSuit(card) {
        if (card.includes('♣')) {
          return "clubs";
        }
        else if (card.includes('♦')) {
          return "diamonds";
        }
        else if (card.includes('♥')) {
          return "hearts";
        }
        else if (card.includes('♠')) {
          return "spades";
        }
      };

      function defineSuit(card) {
        switch (card.slice(-1)){
          case '♣': return 'clubs';
          case '♦': return 'diamonds';
          case '♥': return 'hearts';
          case '♠': return 'spades';    
        }
          
      }   

  
  it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
  it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
  it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
  
