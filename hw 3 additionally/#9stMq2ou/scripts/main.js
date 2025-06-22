let arr = [1, 2, 3, 'four', 5, true, false, 8, 'nine', 10]
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number'){
        console.log(arr[i])
    }
}