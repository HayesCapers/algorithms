const removeDuplicates = require('./removeDuplicates');
const removeDuplicatesSolution = require('./removeDuplicates.solution');
const randomNumberArray = require('../../utils/randomNumberArray');
const randomNumber = require('../../utils/randomNumber');

const NUMBER_OF_TESTS = 5;
const MIN_ARRAY_LENGTH = 10;
const MAX_ARRAY_LENGTH = 100;
const MIN_VALUE = 1;
const MAX_VALUE = 50

describe('removeDuplicates', () => {
	test('should return an empty array if the input is anything other than an array', () => {
		const undefinedAlgorithmResult = removeDuplicates();
		const integerAlgorithmResult = removeDuplicates(1);
		const booleanAlgorithmResult = removeDuplicates(true);
		const stringAlgorithmResult = removeDuplicates('Any string');

		expect(undefinedAlgorithmResult).toEqual([]);
		expect(integerAlgorithmResult).toEqual([]);
		expect(booleanAlgorithmResult).toEqual([]);
		expect(stringAlgorithmResult).toEqual([]);
	})

	test('should remove duplicates from an array', () => {
		for (i = 0; i < NUMBER_OF_TESTS; i++) {
			const len = randomNumber(MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH);
			const test = randomNumberArray(len, MIN_VALUE, MAX_VALUE);
			const solution = removeDuplicatesSolution(test).sort();
			const algorithmResult = removeDuplicates(test).sort();
	
			expect(algorithmResult).toEqual(solution);
		}
	});
})