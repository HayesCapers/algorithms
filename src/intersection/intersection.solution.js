
// Brute Force Method
function bruteForceIntersection (array1, array2) {
    const result = [];

    for (let i = 0, len1 = array1.length; i < len1; i++) {
        let value1 = array1[i];

        for (let j = 0, len2 = array2.length; j < len2; j++) {
            let value2 = array2[j];

            if (value1 === value2) {
                result.push(value1);
            }
        }
    }

    return result;
}

// Map Method
function mapIntersection (array1, array2) {
    const result = [];
    const visited = {};

    for (let i = 0, len = array1.length; i < len; i++) {
        const value = array1[i];

        if (!visited[value]) {
            visited[value] = true;
        }
    }

    for (let i = 0, len = array2.length; i < len; i++) {
        const value = array2[i];

        if (visited[value]) {
            result.push(value);
            visited[value] = false;
        }
    }
    
    return result;
}

const input1 = [1, 2, 3, 4, 5];
const input2 = [2, 1, 2, 7, 8];

console.log({
    bruteForceExpected: [1, 2, 2],
    bruteForceOutput: bruteForceIntersection(input1, input2),
    mapExpected: [2, 1],
    mapOutput: mapIntersection(input1, input2)
})