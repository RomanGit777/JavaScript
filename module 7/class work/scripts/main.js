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
