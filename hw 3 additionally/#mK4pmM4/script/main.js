let arr = ['one', 'two', 'three', 'four', 'five', 6, 7, 8, true, false];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string'){
        console.log(arr[i])
    }
}