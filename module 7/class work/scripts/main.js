// function User(name,age,status){
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
// let user1 = new User('vasya',15,true);
// console.log(user1);
// let user2 = new User('kolya',18,false);
// console.log(user2);

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
// let user1 = new User('vasya', 22, true, {name: 'larisa', age: 20, status: true});
// console.log(user1);

// function User(name, age, status, wifeName, wifeAge, wifeStatus ) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge, status: wifeStatus};
// }
// let user1 = new User('vasya', 22, true, 'larisa',20,true);
// console.log(user1);

// let user = {name: 'vasya', age: 32, status: true};
// user.greeting = () =>  `hello ${this.name}`;
// console.log(user.greeting());

// function User(name,age,){
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('vasya', 31);
// user.greeting = function(){
//     console.log('hi!')
// };
// console.log(user);
// user.greeting();

// console.log(User);
// User.prototype.greeting = function () {
//     return `Hello my name is ${this.name}!`;
// };
// let user = new User('vasya',31);
// console.log(user.greeting());

// function User (name,age,status,wifeName,wifeAge,wifeStatus){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name : wifeName, age : wifeAge, status : status};
//     this.greeting = function(){
//         console.log(`hi ${this.name}!`);
//         console.log(`hi ${this.wife.name}!`);
//         console.log(`Your status is : ${this.status}!`);
//         console.log(`Your status is : ${this.wife.status}!`);
//     }
// }
// let user1 = new User('John', 22, true, 'Anna', 22, true);
// console.log(user1);
// user1.greeting();
// let user2 = new User('Ronaldo', 25, false, 'rob', 21, false);
// console.log(user2);
// user2.greeting();
// let user3 = new User('John', 19, true, 'olya', 20, true);
// console.log(user3);
// user3.greeting();

// function User (name,age){
//     this.name = name;
//     this.age = age;
// }
// User.prototype.greeting = function () {
//     return `Hi my name is : ${this.name}`;
// };
// let user1 = new User("John",22);
// console.log(user1);
// console.log(user1.greeting());
// let user2 = new User("Ojhn",23);
// console.log(user2);
// console.log(user2.greeting());
// let user3 = new User("Opre",21);
// console.log(user3);
// console.log(user3.greeting());

// function User (name,age){
//     this.name = name;
//     this.age = age;
// }
// let user = new User('Vasya',22);
// user.greeting = function (msg,msg2){
//     return `${msg} ${msg2}  name is ${this.name}`
// }
// console.log(user);
// console.log(user.greeting('Hello','my'));
//
// let user2 = new User('Vasya2',23);
// console.log(user2);
// console.log(user.greeting.apply(user2,['Hello','my']));
//
// let user3 = new User('Vasya3',24);
// console.log(user3);
// // console.log(user.greeting.apply(user3,['Hello','my']));
// console.log(user.greeting.call(user3,'Kran','my'));

// function User (name,age){
//     this.name = name;
//     this.age = age;
// }
//
// let user = new User('Vasya',22);
// user.greeting = function (msg){
//     return `${msg} my name is ${this.name}`
// }
// console.log(user);
// console.log(user.greeting('Hello'));
//
// let user2 = new User('Vasya2',23);
// console.log(user2);
// let greetingCopy = user.greeting.bind(user2);
// console.log(greetingCopy('Hello'));

// class User{
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // static greeting(){
//     //     return `hello my name is ${this.name}`;
//     // }
//      work(){
//         return `work in process`;
//     }
// }
// // let user = new User('vasya',31);
// // console.log(user);
// // console.log(user.greeting());
// // console.log(User.work());
//
// class Customer extends User{
//
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
//
//     work() {
//         return super.work();
//     }
// }
//
// let costumer = new Customer('vasya', 22, '111');
// console.log(costumer);
// console.log(costumer.work());

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function Costumer(name, age, password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
//
// let costumer = new Costumer('vasya', 31, '444');
// console.log(costumer);
// let user = new User('vasya', 31, '444');
// console.log(user);

// data
// let now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());
//
// // let date1 = new Date(1767205770119);
// // let date1 = new Date('June 10 1991 12:30:34');
// // let date1 = new Date(1987,0,30,12,30,50,0);
// // console.log(date1);
// console.log(now.setMonth(11));
//
// let user = {
//     id:1,
//     name: 'vasya',
//     bday: new Date(1767205770119)
// }
// console.log(user);

// set
// let set = new Set();
// set.add('asd');
// set.add('asd');
// set.add('qwe');
// set.add('xxx');
// console.log(set);
// console.log(set.has('xxx'));
// console.log(set.delete('xxx'));
// console.log(set);
// console.log(set.size);
// set.forEach(value => console.log(value));
// let arrayFromSet = Array.from(set);
// console.log(arrayFromSet);
//
// let set = new Set([11,22,33,44,44,55,66]);
// console.log(set);
// let numbers = Array.from(set);
// console.log(numbers);

// map
// let map = new Map();
// console.log(map);
// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');
// console.log(map);
// let map = new Map();
// console.log(map);
// map.set('bomj', {name:'oleg', surname: 'olegovich'});
// map.set('oligator', {name:'petr', surname: 'oligatorov'});
// console.log(map.get('bomj'));
let map = new Map();
console.log(map);
let Bomj = {id:'Bomj'};
let oligator = {id: 'oligator'};

map.set(Bomj, {name:'oleg', surname: 'olegovich'});
map.set(oligator, {name:'petr', surname: 'oligatorov'});

console.log(map.get(Bomj)); // here's an example how to find our map if our key is an object
console.log(map.get(oligator));

// map.delete(Bomj);
// console.log(map);
// map.clear();
// console.log(map);
console.log(map.size);
console.log(map.keys());
let from = Array.from(map.keys());
console.log(from);
console.log(map.values());
console.log(Array.from(map.values()));