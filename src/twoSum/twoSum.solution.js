function twoSum (nums, target) {
    const solutionMap = {};
    let result = [];

    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];

        if (num > target) continue;

        if (num in solutionMap) {
            result = [solutionMap[num], i];
            break;
        }

        solutionMap[target - num] = i;
    }

    return result;
}

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target));