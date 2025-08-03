// user = undefined;
// user?.name

// let name = 'vasya';
// let age = 22;
// let user = {
//     name,
//     age,
//     foo(){console.log('foo')}
// }
// console.log(user);
// user.foo();

// let user = {
//     name : 'vasya',
//     age: 22
// }
// let {name, age} = user;
// console.log(name, age);

// let [a, , c] = [11,22,33];
// console.log(a,  c);

let users = [
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
    {name: '', age: 22, status: true},
];
let [{name,age}] = users
console.log(users)