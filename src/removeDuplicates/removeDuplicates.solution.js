function removeDuplicates(input) {
    if (!Array.isArray(input)) {
        return [];
    }

    const visited = {};

    return input.reduce((result, current) => {
        if (!(current in visited)) {
            result.push(current);
            visited[current] = true;
        }

        return result;
    }, []);
};

module.exports = removeDuplicates;