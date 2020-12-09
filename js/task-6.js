let input;
const numbers = [];
let total = 0;
let message;

do {
    input = prompt("Введите число");

    if (input === null) {        
        
        if (numbers.length === 0) {            
            message = "Отмена пользователем."
            alert(message);
            continue;                       
        }

    } else {

        // if (input === '') {
        //     message = "Вы ничего не ввели, попробуйте еще раз."
        //     console.log(numbers.length);
        //     console.log(numbers);
        //     alert(message);
        //     continue;
        // }

        input = Number(input);
        const notANumber = Number.isNaN(input);

        if (notANumber) {
            message = "Было введено не число, попробуйте еще раз."           
            alert(message);
            continue;
        }

        numbers.push(input);

        console.log(numbers.length);
        console.log(numbers);

               
    }     
}
while (input !== null);


const countNumber = function (numbers) {
    for (let number of numbers) {
        total += number;
    }
    message = `Общая сумма чисел равна ${total}`; 
    return message;
}

if (numbers.length !== 0) {
    console.log(countNumber(numbers));
}





 

    
    





       
    