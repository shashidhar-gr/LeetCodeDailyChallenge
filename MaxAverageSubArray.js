/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxaverage = Number.MIN_VALUE;
    let i = 0, j = 0, sum = 0;
    
    while(j < k) {
        sum += nums[j];
        j++;
    }

    maxaverage = (sum / k);
    while(j < nums.length) {
        sum = sum - nums[i];
        sum = sum + nums[j];
        if((sum / k) > maxaverage)
            maxaverage = (sum / k);
        j++;
        i++;
    }

    return maxaverage;
};

const nums = [1,12,-5,-6,50,3], k = 4;
const res = findMaxAverage(nums, k);
console.log(res);