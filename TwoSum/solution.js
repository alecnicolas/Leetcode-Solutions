/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = []
    let compliment = {}

    for (let i = 0; i < nums.length; i++) {
        if (compliment[target - nums[i]] !== undefined) {
            res.push(compliment[target - nums[i]])
            res.push(i)
        }

        compliment[nums[i]] = i
    }

    return res
};