// 1.1. Cоздать функцию которая принимает число и считает факториал этого числа. 
function fuctorial(n: number): number {
    return (n != 1) ? n * fuctorial(n - 1) : 1;
}
console.log(fuctorial(7));

//1.2. Создать функцию multiply, которая будет принимать любое количество чисел и 
// возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multyply(...arguments: number[]): number {
    if(arguments.length == 0) return 0;
       let multyply = 1;
       for (let num of arguments) {
           multyply *= num;
       }
       return multyply;
   }
   const resOfMulty: number = multyply(1, 2, 3);
   console.log(resOfMulty);
//1.3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: 
// reverseString(‘test’) // “tset”.
function reverse(str: string): string {
    return str.split('').reverse().join('');
}
console.log(reverse('test'));

//1.4. Создать интерфейс Админа. 
interface Admin {
    name: string;
    email: string;
    password: string;
    type?: string;
}
//2.1. Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка)
// а также с двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).

abstract class Car {
    protected _mileage: number;
   protected _fuel: number;

    constructor(mileage: number, fuel: number) {
        this._mileage = mileage;
        this._fuel = fuel;
    }
    public abstract drive(km: number): void;
    public abstract refuel(gas: number): void;
}

//2.2. Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive
// (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять
// свойство mileage и уменьшать значение свойства fuel если бензин закончился то нужно вернуть
// сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel.
// Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть protected.

class NewCar extends Car{
    constructor(_mileage: number, _fuel: number) {
        super (_mileage, _fuel);
    }
    public drive(km: number): void {
        if (km <= this._fuel) {
            this._mileage += km;
            this._fuel -= km;
        }
    }
    public refuel(gas: number): void{
        if (gas <= 0){
            console.log('error');
        }
        if (gas > 0) {
            this._fuel += gas;
        }
    }
public get fuel(): number{
    return this._fuel;
}
public get mileage(): number{
    return this._mileage;
}
}

//2.3.Создать публичный get для получения свойств fuel и mileage.
