function twoSum(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      if (nums[j] + currentElement === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

function twoSumHash(nums: number[], target: number) {
  const hash = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.has(complement)) {
      return [hash.get(complement), i];
    }
    hash.set(nums[i], i);
  }
  return [-1, -1];
}

const arr = [2, 11, 15, 7];
const target = 9;

console.log(twoSumHash(arr, target));
