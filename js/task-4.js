const formatString = function (string) {
  console.log(`Ishodnaja stroka: ${string}`);
  console.log(string.length);
  let result = string;

  if (string.length > 40) {
    let stringArr = string.split(''); 
    console.log(stringArr);
    let restSymbol = stringArr.length - 40;
    console.log(restSymbol);
    const r1 = stringArr.splice(40, restSymbol, "...");
    console.log(stringArr);
    result = stringArr.join('');        
    console.log(result.length);      
  } 

  return result;    

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка