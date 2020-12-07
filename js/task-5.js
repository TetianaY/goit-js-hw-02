let costOfDelivery;
let userInput = prompt("Введите страну");
let message;
if(userInput === null) {
    message = "Отменено пользователем!";
} else {
    userInput = userInput.toLowerCase();
    console.log(userInput);
    switch(userInput) {
        case 'китай':
            costOfDelivery = 100;
            break;
        case 'чили':
            costOfDelivery = 250;
            break;
        case 'австралия':
            costOfDelivery = 170;
            break;
        case 'индия':
            costOfDelivery = 80;
            break;
        case 'ямайка':
            costOfDelivery = 120;
            break;
        default:            
            message = 'В вашей стране доставка не доступна';
    }
    if(costOfDelivery !== undefined) {
        message = `Доставка в ${userInput} будет стоить ${costOfDelivery} кредитов`;
    }
}
alert(message);










