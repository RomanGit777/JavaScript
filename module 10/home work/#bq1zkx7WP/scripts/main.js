// #bq1zkx7WP
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const sum = +localStorage.getItem('number');
originalNumber = 100;
if (document.onload > 10) {
originalNumber += 10;
}
localStorage.setItem('number', originalNumber);


document.getElementById('target').innerText = originalNumber;


const sumElement = document.getElementById('sum');

// // 1. Get saved values or set defaults
// let sum = Number(localStorage.getItem('sum')) || 100;
// let lastUpdate = Number(localStorage.getItem('lastUpdate')) || 0;
//
// const now = Date.now();
//
// // 2. Check if more than 10 seconds have passed
// if (now - lastUpdate > 10000) {
//     sum += 10; // add 10
//     localStorage.setItem('sum', sum); // save new sum
//     localStorage.setItem('lastUpdate', now); // save new time
// }
//
// // 3. Update DOM
// sumElement.innerText = sum + 'грн';
