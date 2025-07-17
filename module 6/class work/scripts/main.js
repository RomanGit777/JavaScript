// string function :
// let str = 'hello okten';
// console.log(str);
// console.log(str[6]);
// let s = new String('qweewqew');
// console.log(typeof s);
// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['e', 'r', 'y'];
// let b = arr1.concat(arr2);
// console.log(b);
// let s = str.concat('!!!') // функція яка дає нам асболютно новий об'єкт не міняючи при цьому перший
// console.log(s);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('hel'));
// console.log(str.endsWith('en'));
// console.log(str.substring(0,8));
// console.log(str.indexOf('o'));
// console.log(str.lastIndexOf('o'));
// console.log(str.indexOf('o',5));
// console.log(str.charAt(8));
// // console.log(str.replace('o','!!!'));
// console.log(str.replaceAll('o','!!'));
// let split = str.split(' ');
// console.log(split);

// array function :
let arr = [];
console.log(Array.isArray(arr)); // перевірка чи є цей масив масивом
arr.push(123);
arr.push(44);
arr.push(44);
arr.push(44);
console.log(arr);

console.log(arr.pop()); // вирізає останній елемент в масиві та показує його, якщо логнути
console.log(arr);

console.log(arr.unshift('!!')); // додає елемент на початок масиву та показує його якщо логнути
console.log(arr);

console.log(arr.shift()); //видаляє перший елемент з масиву та показує його якщо логнути
console.log(arr);

let join = arr.join(); // з'єдную кожен елемент масиву по дефолту комою
console.log(join);

let nums = [11,22,33]; //
let concat = arr.concat(nums); // викликаємо конкат та додаємо до масива новий масив
console.log(concat); // повертається з'єднаний новий масив
console.log(arr); // старий масив залишається незміненим

console.log(nums.reverse()); // перевертає масив

console.log(concat);
console.log(concat.slice(0,4)); // вирізає елементи масиву
console.log(concat); // оригінальній масив не змінюється

// let splice = concat.splice(0,2, '!!!','!!!','!!!',); //дозволяє видаляти елементи з масиву, 1 та другий аргумент =
// // звідки починати та до куди йти, 3 аргумент = що добавити замість видалених елементів.
// console.log(splice);
// console.log(concat);

console.log(concat);
console.log(concat.indexOf(11)); // дозволяє побачити під яким індексом стоїть названий елемент у аргументі
console.log(concat);
concat.splice(3,1) // дозволяє видалити елемент, 1 число = індекс з якого починати, 2 число = скільки елементів видалити
console.log(concat);

console.log(concat.includes(22)); // видає або тру або фолс відходячи від того чи є такий елемент у масиві
console.log(concat.includes(11)); //
