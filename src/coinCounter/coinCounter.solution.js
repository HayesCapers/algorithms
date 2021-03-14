function coinCounter (coins) {
    const result = {}
    for (let i = 0, len = coins.length; i < len; i++) {
        const coin = coins[i];

        result[coin] = result[coin] + 1 || 1;
    }

    return result;
}

function coinCounterCondensed (coins) {
    return coins.reduce((result, currentvalue) => {
        result[currentvalue] = result[currentvalue] + 1 || 1;
        return result;
    }, {});
}

function coinCounterWithNames (coins) {
    const nameMap = {
        1: 'penny',
        5: 'nickel',
        10: 'dime',
        25: 'quarter'
    }

    return coins.reduce((result, coin) => {
        const name = nameMap[coin];
        
        if (name) {
            result[name] = result[name] + 1 || 1;
        }

        return result;
    }, {})
}

const input = [5, 5, 1, 25, 5, 10, 1, 10, 25];

console.log({
    expected: { '1': 2, '5': 3, '10': 2, '25': 2 },
    coinCounter: coinCounter(input),
    coinCounterCondensed: coinCounterCondensed(input),
    coinCounterWithNames: coinCounterWithNames(input)
})