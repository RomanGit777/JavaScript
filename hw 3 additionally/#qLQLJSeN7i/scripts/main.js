let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]


// 1. Цикл while
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// 2. Цикл for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// 3. while — непарні індекси
// let i = 0
// while (i < arr.length) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 4. for — непарні індекси
// for (let i = 1; i < arr.length; i += 2) {
//     console.log(arr[i])
// }

// 5. while — парні значення
// let i = 0
// while (i < arr.length) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
//     i++;
// }

// 6. for — парні значення
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// 7. Кратні 3 → "okten"
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0){
//         arr[i] = "okten";
//     }
// }
// console.log(arr);

// 8. У зворотньому порядку
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }

// 9. Завдання 1–7 у зворотному циклі
// 1. while назад
// i = arr.length -1;
// while (i >= 0){
//     console.log(arr[i]);
//     i--;
// }

// 2. for назад
// for (let i = arr.length -1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 3. while — непарні індекси (назад)
// i = arr.length -1;
// while (i >= 0){
//     if (i % 2 !== 0){
//         console.log(arr[i]);
//     }
//     i--;
// }

// 4. for — непарні індекси (назад)
// for (let i = arr.length -1; i >= 0; i--) {
//     if (i % 2 !== 0){
//         console.log(arr[i]);
//     }
// }

// 5. while — парні значення (назад)
// i = arr.length -1
// while (i >= 0){
//     if (typeof arr[i] === "number" && arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
//     i--;
// }

// 6. for — парні значення (назад)
// for (let i = arr.length -1; i >= 0; i--) {
//     if (typeof arr[i] === "number" && arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// 7. Кратні 3 → "okten" (назад)
for (let i = arr.length - 1; i >= 0; i--) {
    if (typeof arr[i] === "number" && arr[i] % 3 === 0) {
        arr[i] = "okten";
    }
}
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}