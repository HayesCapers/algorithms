const randomNumber = require("./randomNumber");

function removeDuplicates(input) {
    if (!Array.isArray(input)) {
        return [];
    }

    const visited = {};

    return input.reduce((result, current) => {
        if (!visited[current]) {
            result.push(current);
        }

        visited[current] = true;

        return result;
    }, []);
}

module.exports = function (n = 10, tLimit = 100, nLimit = 1000) {
    const tests = [];

    for (let i = 0; i < n; i++) {
        const len = randomNumber(1, tLimit);
        const input = [];

        for (let j = 0; j < len; j++) {
            input.push(randomNumber(0, nLimit));
        }

        const expected = removeDuplicates(input);

        tests.push({ input, expected });
    }

    return tests;
};
