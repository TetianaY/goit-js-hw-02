
let input;
const numbers = [];
let total = 0;
let message;

do {
    input = prompt("Введите число");

    if (input === null) {
        message = "Отмена пользователем"
        console.log(message);
    } else {

        input = Number(input);
        const notANumber = Number.isNaN(input);

        if (notANumber) {
            message = "Было введено не число, попробуйте еще раз"
            alert(message);
            continue;
        }

        numbers.push(input);
    }
}

while (input !== null);
console.log(numbers);


const countNumbers = function (numbers) {
    

    for (let number of numbers) {
        total += number;
    }
    message = `Общая сумма чисел равна ${total}`;
    return message;
    
}

console.log(countNumbers(numbers));


       
    