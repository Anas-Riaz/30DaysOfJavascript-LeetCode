/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    
    let val = init;
    if (nums.length === 0){
        return init;
    }
    for (let i =0; i< nums.length; i++){
        val = fn(val, nums[i]);
    }

    return val;
};