// 1.1. Cоздать функцию которая принимает число и считает факториал этого числа. 
function fuctorial(n) {
    return (n != 1) ? n * fuctorial(n - 1) : 1;
}
console.log(fuctorial(7));
//1.2. Создать функцию multiply, которая будет принимать любое количество чисел и 
// возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
//Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multyply(...arguments) {
    if (arguments.length == 0)
        return 0;
    let multyply = 1;
    for (let num of arguments) {
        multyply *= num;
    }
    return multyply;
}
const resOfMulty = multyply(1, 2, 3);
console.log(resOfMulty);
//1.3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: 
// reverseString(‘test’) // “tset”.
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('test'));
