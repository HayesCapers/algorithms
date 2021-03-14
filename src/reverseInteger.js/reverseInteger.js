// Given an integer x, return x with its digits reversed. 
 

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
 

// Constraints:
// -231 <= x <= 231 - 1

function reverseInteger (x) {
    // Code here
}

const inputs = [123, -123, 120, 0];
const outputs = [321, -321, 21, 0];

inputs.forEach((input, i) => {
    const expectedOutput = outputs[i];
    const actualOutput = reverseInteger(input);

    console.log({
        expected: expectedOutput,
        actual: actualOutput,
        passed: actualOutput === expectedOutput
    })
})