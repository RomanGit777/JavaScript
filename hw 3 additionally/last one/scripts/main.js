// a. заповнити його 50 парними числами за допомоги циклу.
let evenNumbers = [];
for (let i = 0; evenNumbers.length < 50; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}
// console.log('50 парних чисел:', evenNumbers);

// b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumbers = [];
for (let i = 0; oddNumbers.length < 50; i++) {
    if (i % 2 !== 0) {
        oddNumbers.push(i);
    }
}
// console.log('50 непарних чисел:', oddNumbers);

// c. Заповнити масив 20-ма рандомними числами.
let randomNumbers = [];
for (let i = 0; i < 20; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100))
}
console.log('20 випадкових чисел:', randomNumbers);

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732
let rangedRandom = [];
for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    rangedRandom.push(num);
}
// console.log('20 випадкових чисел від 8 до 732:', rangedRandom);

// 2. Вивести за допомогою console.log кожен третій елемент
// for (let i = 2; i < rangedRandom.length; i += 3){
//     console.log('Третій елемент:', rangedRandom[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < randomNumbers.length; i++) {
    if (i % 2 === 0) {
        console.log('Парний третій елемент:', randomNumbers[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий
// масив
let evenThirds = [];
for (i = 2; i < randomNumbers.length; i += 3) {
    if (randomNumbers[i] % 2 === 0) {
        evenThirds.push(randomNumbers[i]);
        console.log('Додано до масиву:', randomNumbers[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % 2 === 0) {
        console.log('Елемент перед парним сусідом:', arr[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній
// чек.
let purchases = [100, 250, 50, 168, 120, 345, 188];
let total = 0;
for (let i = 0; i < purchases.length; i++) {
    total += purchases[i];
}
let average = total / purchases.length;
console.log('Середній чек:', average.toFixed(2));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let numbers = [4, 11, 27, 8, 15, 3, 20, 6, 13, 9];
// let multiplied = [];
// for (let i = 0; i < numbers.length; i++) {
//     multiplied.push(numbers[i] * 5);
// }
// console.log('Вигадані числа:', numbers);
// console.log('Помножено на 5:', multiplied);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом,
// додати його в інший масив.
let mixed = ['asdasd', true, false, 222, 'tytyyt', 4444, 333, 'fffff', 222]
let numbers = []
for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === 'number') {
        numbers.push(mixed[i]);
    }
}
console.log(mixed);
console.log(numbers);

let usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];

let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];
let fullUsers = [];
for ( let user of usersWithId) {
for ( let city of citiesWithId){
    if (user.id === city.user_id){
        let mergedUser = {
            ...user,
            adress: {...city}
        };
        fullUsers.push(mergedUser);
        break;
    }
}
}
console.log(fullUsers);