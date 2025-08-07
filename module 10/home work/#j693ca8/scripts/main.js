// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const form = document.forms.f1;
form.onclick = function () {
    const inpt = document.getElementById('input');
    let result = inpt.value >= 18 || document.body.appendChild('you dont have access, your age is under 18');
    document.body.appendChild('result');
}