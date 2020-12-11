const findLongestWord = function (string) {
    const stringArr = string.split(' ');
    console.log(stringArr);    
    let lengthOfWord = stringArr[0].length;   
    let longestWord = stringArr[0];
    
    for (let i = 1; i < stringArr.length; i += 1) {              
        if (stringArr[i].length > lengthOfWord) {
            lengthOfWord = stringArr[i].length;
            longestWord = stringArr[i];                 
        }       
    }
    return longestWord;
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'