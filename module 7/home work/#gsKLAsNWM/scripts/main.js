// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let fruits = ['apple', 'pear', 'banana'];
fruits.myForEach((item, index) => console.log(item, index));
console.log('')
let vegetables = ['pepper', 'broccoli', 'potato'];
vegetables.myForEach((item,index)=>console.log(item, index));

Array.prototype.myFilter = function (callback){

}