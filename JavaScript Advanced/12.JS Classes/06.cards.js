let result = (function () {
    let Suits = {
        DIAMONDS: '♦',
        CLUBS: '♣',
        SPADES: '♠',
        HEARTS: '♥'};
    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        get face() {return this._face;}
        set face(face) {
            if(!Faces.includes(face)) {
                throw new Error('Invalid card face: ' + face);
            }
            this._face = face;
        }
        get suit() {return this._suit;}
        set suit(suit) {
            if(!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error('Invalid card suit: ' + suit);
            }
            this._suit = suit;
        }
        toString() {
            return this.face +this.suit;
        }
    }
    return {
        Suits, Card
    }
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('3', 'hearts');
console.log(card);