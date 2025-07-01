const createPrimitiveList = (arr) => {
    const ul = document.createElement('ul');

    arr.forEach(item => {
        const li = document.createElement('li');
        li.textContent = String(item); // Перетворюємо будь-який тип у рядок
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};

createPrimitiveList([33,44, true, false, 'sdsdsdds', 77])