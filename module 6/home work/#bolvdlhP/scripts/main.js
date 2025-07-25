// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
//     – знайти піковий туз
//  – всі шістки
//  – всі червоні карти
//  – всі буби
//  – всі трефи від 9 та більше
// Приклад моделі об'єкту карти:
// {
//     cardSuit: ”, // ‘spade', ‘diamond','heart', ‘clubs'
//     value: ”, // ‘6'-'10', ‘ace','jack','queen','king'
//     color:”, // ‘red','black'
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

 //     – знайти піковий туз
console.log(deck.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
//  – всі шістки
console.log(deck.filter(card => card.value === '6'));
//  – всі червоні карти
console.log(deck.filter(card => card.color === 'red'));
//  – всі буби
console.log(deck.filter(card => card.cardSuit === 'diamond'));
//  – всі трефи від 9 та більше
console.log(deck.filter(card => card.cardSuit === 'clubs' && ['9','10','jack','queen','king','ace'].includes(card.value)));