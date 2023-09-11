const number1 = Number(prompt('Сумма проданного'));
const number2 = Number(prompt('Введите минуты'));



// task 5

// alert(`${number1} + ${number2} = ${number1 + number2}
// ${number1} - ${number2} = ${number1 - number2}
// ${number1} * ${number2} = ${number1 * number2}
// ${number1} / ${number2} = ${number1 / number2}`);

//task 6

// const result = -number2 / number1;
// alert(`${number1}x + ${number2} = 0
// x = ${result}`);

//task 7

let res = Number(1440 - (number1 * 60 + number2));
let hour = Math.floor(res / 60);
let min = res % 60;
alert(`Осталось ${hour} часов ${min} минут`)

//task 8

// let res = Math.floor(number1 /10);
// alert(`Вторая цифра чила ${number1} равна ${res % 10}`)

//task 9

// let res = String(Math.floor(number1 % 10));
// let numb = Math.floor(number1 / 10);
// alert(`Из чила ${number1} получилось ${res + numb}`)

//task 10 

// let res = 250 + number1 / 10;
// alert(`Зарплата равна = ${res}$`);
