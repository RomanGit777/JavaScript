// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6','7','8','9','10','jack','queen','king','ace'];
const deck = [];
for (let suit of cardSuits) {
    for (let value of values) {
        let color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        deck.push({ cardSuit: suit, value: value, color: color })
    }}
console.log(deck);
// debugger;
// console.log(deck.reduce((acc, card) => { // acc is our new object
//     if (card.cardSuit === 'spade') {  // all if to check is card parameter match with that we wrote
//         acc.spades.push(card)
//     } else if(card.cardSuit === 'diamond') {
//         acc.diamonds.push(card)
//     } else if(card.cardSuit === 'heart') {
//         acc.hearts.push(card)
//     } else if(card.cardSuit === 'clubs') {
//         acc.clubs.push(card)
//     }
//     return acc; // return our new object "acc"
// }, {spades: [], diamonds: [], hearts: [], clubs: []})); //new object is fulled by matched items

console.log(deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));