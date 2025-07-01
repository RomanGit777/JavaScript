const showUsers = (userArray) => {
    for (let i = 0; i < userArray.length; i++) {
        const userBlock = document.createElement('div');
        userBlock.innerText =
            'ID: ' + userArray[i].id + '\n' +
            'Name: ' + userArray[i].name + '\n' +
            'Age: ' + userArray[i].age;
        userBlock.style.whiteSpace = 'pre-line';
        document.body.appendChild(userBlock);
    }
};
const users = [
    { id: 1, name: 'Ірина', age: 26 },
    { id: 2, name: 'Максим', age: 34 },
    { id: 3, name: 'Олександр', age: 19 }
];

showUsers(users);
