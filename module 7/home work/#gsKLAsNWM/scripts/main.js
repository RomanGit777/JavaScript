// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter


Array.prototype.myForEach = function (callback) { //define a function which gonna..
    for (let i = 0; i < this.length; i++) { // use for to loop through arr we're going to give in
        callback(this[i], i, this) // we do a callback and loop through each current item, each index in the array
        // and whole array
    }
};

let fruits = ['apple', 'banana', 'cherry'];
let vegetables = ['potato', 'tomato', 'broccoli'];

fruits.myForEach((item, index) => console.log(`item at index ${index}: ${item}`));
// here we give to parameters, and then print them
console.log('');
vegetables.myForEach((item, index) => console.log(`item at index ${index}: ${item}`));