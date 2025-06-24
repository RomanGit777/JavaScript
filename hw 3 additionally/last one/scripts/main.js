// a. заповнити його 50 парними числами за допомоги циклу.
let evenNumbers = [];
for (let i = 0; evenNumbers.length < 50; i++){
    if (i % 2 === 0){
        evenNumbers.push(i);
    }
}
// console.log('50 парних чисел:', evenNumbers);

// b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumbers = [];
for (let i = 0; oddNumbers.length < 50; i++){
    if (i % 2 !== 0){
        oddNumbers.push(i);
    }
}
// console.log('50 непарних чисел:', oddNumbers);

// c. Заповнити масив 20-ма рандомними числами.
let randomNumbers = [];
for (let i = 0; i < 20; i++){
    randomNumbers.push(Math.floor(Math.random() * 100))
}
console.log('20 випадкових чисел:', randomNumbers);

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732
let rangedRandom = [];
for (let i = 0; i < 20; i++){
    let num = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    rangedRandom.push(num);
}
// console.log('20 випадкових чисел від 8 до 732:', rangedRandom);

// 2. Вивести за допомогою console.log кожен третій елемент
// for (let i = 2; i < rangedRandom.length; i += 3){
//     console.log('Третій елемент:', rangedRandom[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < randomNumbers.length; i++){
    if (i % 2 === 0){
        console.log('Парний третій елемент:', randomNumbers[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let evenThirds = [];
for (i = 2; i < randomNumbers.length; i += 3){
    if (randomNumbers[i] % 2 === 0){
        evenThirds.push(randomNumbers[i]);
        console.log('Додано до масиву:', randomNumbers[i]);
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < arr.length - 1; i++){
    if (arr[i + 1] % 2 === 0){
        console.log('Елемент перед парним сусідом:', arr[i]);
    }
}
