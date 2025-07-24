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
// let arr = [];
// console.log(Array.isArray(arr)); // перевірка чи є цей масив масивом
// arr.push(123);
// arr.push(44);
// arr.push(44);
// arr.push(44);
// console.log(arr);
//
// console.log(arr.pop()); // вирізає останній елемент в масиві та показує його, якщо логнути
// console.log(arr);
//
// console.log(arr.unshift('!!')); // додає елемент на початок масиву та показує його якщо логнути
// console.log(arr);
//
// console.log(arr.shift()); //видаляє перший елемент з масиву та показує його якщо логнути
// console.log(arr);
//
// let join = arr.join(); // з'єдную кожен елемент масиву по дефолту комою
// console.log(join);
//
// let nums = [11,22,33]; //
// let concat = arr.concat(nums); // викликаємо конкат та додаємо до масива новий масив
// console.log(concat); // повертається з'єднаний новий масив
// console.log(arr); // старий масив залишається незміненим
//
// console.log(nums.reverse()); // перевертає масив
//
// console.log(concat);
// console.log(concat.slice(0,4)); // вирізає елементи масиву
// console.log(concat); // оригінальній масив не змінюється
//
// // let splice = concat.splice(0,2, '!!!','!!!','!!!',); //дозволяє видаляти елементи з масиву, 1 та другий аргумент =
// // // звідки починати та до куди йти, 3 аргумент = що добавити замість видалених елементів.
// // console.log(splice);
// // console.log(concat);
//
// console.log(concat);
// console.log(concat.indexOf(11)); // дозволяє побачити під яким індексом стоїть названий елемент у аргументі
// console.log(concat);
// concat.splice(3,1) // дозволяє видалити елемент, 1 число = індекс з якого починати, 2 число = скільки елементів
// видалити console.log(concat);  console.log(concat.includes(22)); // видає або тру або фолс відходячи від того чи є
// такий елемент у масиві console.log(concat.includes(11)); //

// array function callback

// let users = [{
//     id: 1, name: 'John', age: 33, status: true
// }, {
//     id: 2, name: 'John', age: 22, status: true
// }, {
//     id: 3, name: 'eeeee', age: 23, status: false
// }, {
//     id: 4, name: 'fffff', age: 33, status: true
// }, {
//     id: 5, name: 'aSaasSsasa', age: 41, status: false
// }, {
//     id: 6, name: 'aghghghasa', age: 22, status: false
// }, {
//     id: 7, name: 'adffdfdasa', age: 21, status: true
// }, {
//     id: 8, name: 'eweweewa', age: 25, status: true
// }, {
//     id: 9, name: 'asadfdffd', age: 35, status: true
// }, {
//     id: 10, name: 'gghghhghgasa', age: 37, status: true
// }, {
//     id: 11, name: 'afdfdfdasasa', age: 31, status: true
// }];

// // forEach function:
// users.forEach(value => console.log(value));

// users.forEach((value, index) => console.log(value,index));
//
// users.forEach((value, index,array) => console.log(value,index,array));
//
// users.forEach(function (value) {
//     console.log(value);
// })

// filter function
// let filteredUsers = users.filter(value => !value.status)
// console.log(filteredUsers);
//
// let filteredUsers = users.filter(function(value){
//     return value.age>19;
// });
// console.log(filteredUsers);

// let users = [{
//     name: 'John', age: 33, status: true
// }, {
//     name: 'Jowwwwhn', age: 22, status: true
// }, {
//     name: 'eeeee', age: 123, status: false
// }, {
//     name: 'fffff', age: 3333, status: true
// }, {
//     name: 'aSaasSsasa', age: 445, status: false
// }, {
//     name: 'aghghghasa', age: 445, status: false
// }, {
//     name: 'adffdfdasa', age: 445, status: true
// }, {
//     name: 'eweweewa', age: 445, status: true
// }, {
//     name: 'asadfdffd', age: 445, status: true
// }, {
//     name: 'gghghhghgasa', age: 445, status: true
// }, {
//     name: 'afdfdfdasasa', age: 445, status: true
// },
// ];

// map function
// let mappedUsers = users.map(function (value, index) {
//         return {
//             name: value.name, age: value.age, status: value.status,
//             id: index + 1
//         }
//     });
// console.log(mappedUsers);
//
// let mappedUsers = users.map(function (value, index) {
//         return {...value, id:index+1
//         }
//     });
// console.log(mappedUsers);
//
// let mappedUsers = users.map((value,index) => {
//     return {id:index + 1, name: value.name, age: value.age, status: value.status
//     }
// });
// console.log(mappedUsers);

// function find
// let find = users.find(value => value.name === 'John');
// console.log(find);

// console.log(users.every(value => value.status)); // якщо хоча б один юзер буде мати фолс, воно повернеть фолс
// console.log(users.some(value => value.status)); // якщо хоч один юзер з масиву буде мати статус тру, повернеться тру.

// let sort = users.sort((u1, u2) =>{
//     return u2.age - u1.age;  // порівняє вік юзерів та посортує від більшого к меншому, від меншого до більшого =
// u1-u2 }); console.log(sort);  console.log(users.sort((a,b)=>{ if(a.name>b.name){ // порівнює вагу кожного юзера,
// більш важкий юзер йде вниз, легший юзер йде до верху return 1; } if(a.name<b.name){ return -1; }
// if(b.name===b.name){ return 0; } }));

// console.log(users.reduce((accumulator, user) => {
//     if(user.status){
//         accumulator.statT.push(user)
//     }else {
//         accumulator.statF.push(user)
//     }
//     return accumulator;
// },{statT:[], statF:[]}))

// function calc(a,b,callback){
//     return callback(a,b)
// }
// console.log(calc(10, 20, (a, b) => {
// return a + b;
// }));
// console.log(calc(10, 20, (a, b) => a - b));
// console.log(calc(10, 20, (a, b) =>  a / b));

// function filter(arr, callback) { // define a function which will take 2 arguments: array and function
//     let mass = []; // our exit array
//     // debugger;
//     for (const item of arr) {  //iteration to every item from array we will get
//         if (callback(item)) {
//             mass.push(item);  // if function give you true, item will go to our exit array
//         }
//     }
//     return mass;  // return our exit array to see result
// }
//
// console.log(filter([11, 22, 33, 44, 55], item => item % 2 === 0)); // print and give arr, also call the function and
// // give task to it
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(filter(users, user => user.age > 30));