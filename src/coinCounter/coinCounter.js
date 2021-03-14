// Given any number of pennies, nickels, dimes, and quarters as an array 
// return the number of times each denomination occurs as an object 
// with the denomination as the key and number of occurences as the value.
// ex. input: [5, 5, 1, 25, 5, 10, 1, 10, 25] 
// output: {
//     1: 2,
//     5: 3,
//     10: 2,
//     25: 2
// }


// ** BONUS 1 **: return the result above with penny, nickel, dime, and quarter as the keys instead of the number value of the coin
// ex. output: {
//     penny: 2,
//     nickel: 3,
//     dime: 2,
//     quarter: 2
// }

// ** BONUS 2 ** The time complexity must be O(n) or better and you cannot use any if statements.

const input = [5, 5, 1, 25, 5, 10, 1, 10, 25];
const input2 = [1, 10, 25, 10, 1];

function coinCounter (coins) {
    // With For loop
    // const result = {}
    // for (let i = 0, len = change.length; i < len; i++) {
    //     const coin = change[i];

    //     result[coin] = result[coin] + 1 || 1;
    // }

    // return result;

    // With reduce
    return change.reduce((result, currentvalue) => {
        result[currentvalue] = result[currentvalue] + 1 || 1;
        return result;
    }, {});
}

changeCalculator(input);
// changeCalculator(input2);
