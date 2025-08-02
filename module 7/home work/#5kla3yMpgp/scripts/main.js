// #5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car{
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;

        this.drive = function(){
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
        };

        this.info = function(){
            for (const key in this) {
                console.log(key, this[key]);
            }
        };

        this.increaseMaxSpeed = function(speedToAdd){
            if(this.maxSpeed > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
        };

        this.changeYear = function(year){
            if(this.year > 1815) this.year = year;
        };

        this.driver = function(driver){
            if(driver) this.driver = driver;
        };
    };
}
let car = new Car('qwe','qwef',1999,130,120);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(70);
car.changeYear(2000);
car.driver({name: 'rttr', age: 22});
console.log(car);
