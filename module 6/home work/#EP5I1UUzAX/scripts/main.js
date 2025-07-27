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
console.log(deck.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card)
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        acc.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card)
    }
    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: []}));