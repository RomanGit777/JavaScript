let arr = [1, 2, 'three', true, 6, false, 'eight', 9, true]
for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] === 'boolean'){
       console.log(arr[i])
   }
}