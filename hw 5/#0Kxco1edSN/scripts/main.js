const createList = (itemText, count) =>{
    const ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = itemText;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};
createList('Hello world!', 3)