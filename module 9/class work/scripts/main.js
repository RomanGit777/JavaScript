// console.log(document.children);
// console.log(document.body.innerText);
// console.log(document.head.innerText);
// let menuCollection = document.getElementsByClassName("menu");
// console.log(menuCollection);
// for (const menuCollectionElement of menuCollection) {
// console.log(menuCollectionElement);
// }
// console.log(document.getElementById('list-1'));
// // console.log(document.getElementsByClassName('menu'));
// console.log(document.getElementsByTagName('ul'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.querySelector('ul'));
// console.log(document.querySelectorAll('ul'));
// 1. Знаходимо елементи на сторінці

// const button = document.getElementById('btn');
// const result = document.getElementById('result');
//
// // 2. Додаємо обробник події (клік)
// button.addEventListener('click', () => {
//     // 3. Створюємо новий елемент
//     const message = document.createElement('p');
//     message.textContent = 'You clicked the button!';
//
//     // 4. Додаємо цей елемент на сторінку
//     result.appendChild(message);
// });

// console.log(document.forms)
// console.log(document.forms['f2'])
// console.log(document.forms['f2']['userEmail'])
// console.log(document.forms.f2.userEmail)

// let target = document.getElementById("target"); // знаходить елемент
// console.log(target);
// console.log(target.innerText); // виводить наш текст
// // target.innerText = 'okten'; // змінює наш текст
// target.style.background = 'silver' // змінює чи прописує інлайн стайл до елемента
// console.log(target.classList); // виводить усі класи
// target.classList.add('foo'); // додає клас
// target.classList.add('bar');
// console.log(target.classList.item(0)); // виводить айтем по індексу
// console.log(target.classList.item(1)); //виводить айтем по індексу
// console.log(target.classList.contains('foo')); // чи містить цей елемент (булеве значення)
// console.log(target.classList.toggle('asd')); //якщо елемента немає у класі, воно його добавить, якщо є = видалить

// console.log(target.getAttribute('xxx'));
// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));
// console.log(target.getAttribute('style'));
// target.setAttribute('id', 'bar');

// console.log(target.previousElementSibling);
// console.log(target.nextElementSibling);
// console.log(target.children);
// console.log(target.childNodes);
// // target.innerText = '<b>asdsad</b>';
// target.innerHTML = '<b>asdsad</b>';
// console.log(target.outerHTML); // показує усю хтмл обгортку
//
// let collectionOfDiv = document.getElementsByClassName("point");
// for (const divEl of collectionOfDiv) {
//     divEl.innerText = 'poooint';
//     divEl.classList.add = 'poooint';
//     divEl.toggle = 'poooint';
//     divEl.style.backgroundColor = 'red';
// }