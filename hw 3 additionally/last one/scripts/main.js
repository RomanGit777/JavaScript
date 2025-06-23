// a. заповнити його 50 парними числами за допомоги циклу.
let evenNumbers = [];
for (let i = 0; evenNumbers.length < 50; i++){
    if (i % 2 === 0){
        evenNumbers.push(i);
    }
}
console.log('50 парних чисел:', evenNumbers);

// b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumbers = [];
for (let i = 0; oddNumbers.length < 50; i++){
    if (i % 2 !== 0){
        oddNumbers.push(i);
    }
}
console.log('50 непарних чисел:', oddNumbers);

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
console.log('20 випадкових чисел від 8 до 732:', rangedRandom);
