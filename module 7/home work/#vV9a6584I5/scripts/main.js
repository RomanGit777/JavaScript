// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об’єм двигуна.
// додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
// — increaseMaxSpeed(newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
// — changeYear(newValue) – змінює рік випуску на значення newValue
// — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`); // just log our speed
    };

    this.info = function () {
        for (const key in this) console.log(key, this[key]); // using for in to loop through all info and log
        // field name, value and all info inside our car constructor
    };

    this.increaseMaxSpeed = function (speedToAdd) {
        if (this.maxSpeed > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    }; // we can update our exist speed to higher value

    this.changeYear = function (year) {
        if (year > 1815) this.year = year;
    }; // we can update our year using this function

    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }; // we can add driver object to our info about a car
}

const car = new Car('qwe', 'qwef', 2012, 120, 4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2000);
car.addDriver({name: 'qwef', age: 22});
console.log(car);