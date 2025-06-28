/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};  // to store value:index pairs
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
};
