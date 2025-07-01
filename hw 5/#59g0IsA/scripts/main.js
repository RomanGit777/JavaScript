// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = (text) => {
const p = document.createElement('p');
p.textContent = text;
document.body.appendChild(p);
}
createParagraph('Hello, World!');