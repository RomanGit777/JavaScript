// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li)
// та виводить його через document.write

function foobar(arrayOfPrimitives) {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

foobar([222, 333, 444, 555, 777, 'sasasassa', true, false])