const intersection = require('./intersection');
const instersectionSolution = require('./intersection.solution');
const randomNumberArray = require('../../utils/randomNumberArray');
const randomNumber = require('../../utils/randomNumber');

const NUMBER_OF_TESTS = 5;
const MIN_ARRAY_LENGTH = 10;
const MAX_ARRAY_LENGTH = 20;
const MIN_VALUE = 1;
const MAX_VALUE = 25;

describe('intersection', () => {
	test('should return an empty array if the input is anything other than an arrays', () => {
		const undefinedAlgorithmResult = intersection();
		const integerAlgorithmResult = intersection(1);
		const booleanAlgorithmResult = intersection(true);
		const stringAlgorithmResult = intersection('Any string');

		expect(undefinedAlgorithmResult).toEqual([]);
		expect(integerAlgorithmResult).toEqual([]);
		expect(booleanAlgorithmResult).toEqual([]);
		expect(stringAlgorithmResult).toEqual([]);
	})

	test('should return a new array containing the intersection of the two arrays', () => {
		for (i = 0; i < NUMBER_OF_TESTS; i++) {
			const len1 = randomNumber(MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH);
			const input1 = randomNumberArray(len1, MIN_VALUE, MAX_VALUE);

            const len2 = randomNumber(MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH);
            const input2 = randomNumberArray(len2, MIN_VALUE, MAX_VALUE);
            
			const solution = instersectionSolution(input1, input2).sort();
			const algorithmResultRaw = intersection(input1, input2).sort();
            const algorithmResult = [ ...new Set(algorithmResultRaw) ];
            console.log({
                solution,
                algorithmResult
            })
	
			expect(algorithmResult).toEqual(solution);
		}
	});
})