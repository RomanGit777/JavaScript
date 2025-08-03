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

// let users = [
//     {name: 'qwe', age: 22, status: true},
//     {name: '', age: 22, status: true},
//     {name: '', age: 22, status: true},
//     {name: 'three', age: 22, status: true},
//     {name: '', age: 22, status: true},
//     {name: '', age: 22, status: true},
//     {name: '', age: 22, status: true},
//     {name: '', age: 22, status: true},
//     {name: 'last', age: 22, status: true},
// ];
// let [{name,age}] = users
// let [{name, age, status}] = users.slice(-1);
// let [{name, age, status}] = users.slice(3);
// console.log(name, age, status)

// let nums = [11,22,33];
// let nums2 = [...nums];
// console.log((nums === nums2));
// nums2.push(55,66,77)
// console.log(nums2);
// console.log(nums);

// let nums = [11,22,33];
// let nums2 = nums;
// console.log((nums2 === nums))
// console.log(nums)
// console.log(nums2)
// nums2.push(22,33,44)
// console.log(nums2)
// console.log(nums)

// const original = {
//     name: 'Olena',
//     address: {
//         city: 'Lviv',
//         street: 'Shevchenka'
//     }
// };
//
// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.address.city = 'Kyiv';
// deepCopy.address.street = 'Kyivvskay';
//
// console.log(original.address.city); // 'Lviv'
// console.log(original.address.street); // 'Shevchenka'
// console.log(deepCopy.address.street); // 'Kyivvskay'
// console.log(deepCopy.address.city);     // Kyiv
// console.log(deepCopy === original);
// console.log(deepCopy.address === original.address);

// let base = {
//     id: 1,
//     name: 'kokos'
// }
// let copy = Object.create(base);
// console.log(copy);

