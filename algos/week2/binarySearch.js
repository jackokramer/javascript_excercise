/*Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.*/

const searchBoundaries = (nums, target, { left, right }) => {
  const middle = Math.floor((left + right) / 2);
  const middleNum = nums[middle];

  if (middleNum === target) {
    return middle;
  }

  if (middle === left || middle === right) {
    return -1;
  }

  if (middleNum > target) {
    return searchBoundaries(nums, target, { left, right: middle });
  }

  if (middleNum < target) {
    return searchBoundaries(nums, target, { left: middle, right });
  }

  throw new Error('Unexpected case');
}