// let total = 0;
// let userInput;

// while (userInput !== null) {
//   userInput = prompt("Введите число");

//     if (userInput === null) {
//         console.log("Отмена пользователем");
//         break;
//     }

//     userInput = Number(userInput);

//     const notANumber = Number.isNaN(userInput);

//     if (notANumber) {
//         console.log("Было введено не число, попробуйте еще раз");
//         continue;
//     }

//     total += userInput;
// }

// console.log(`Общая сумма чисел равна ${total}`)

let total = 0;
let userInput;

do {
    userInput = prompt("Введите число");

    if (userInput === null) {
        console.log("Отмена пользователем");        
    } else {

        userInput = Number(userInput);
        const notANumber = Number.isNaN(userInput);

        if (notANumber) {
            alert("Было введено не число, попробуйте еще раз");
            continue;
        }
       
    }

    total += userInput;
}

while (userInput !== null);   
    
alert(`Общая сумма чисел равна ${total}`);

