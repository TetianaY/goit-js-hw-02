const findLongestWord = function (string) {
    let stringArr = string.split(' ');
    console.log(stringArr);
    for (let item of stringArr) {
        console.log(item.length);
        const 
    }
    

    // let longestWord = item.length[0];
    
    // // for (let item = 1; i < stringArr.length; i += 1) {


    // //     console.log(item);
    // //     console.log(item.length);
    // //    const longestWord = item.length > longestWord? ;
    // //     if ) {
    // //         longestWord = item[i];
    // //     }
    // // }
    // // return result;    
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'