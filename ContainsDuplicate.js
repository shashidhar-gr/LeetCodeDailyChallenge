var containsNearbyDuplicate = function(nums, k) {
    let i = 0, j = 0, set =  new Set();
    
    while(j < nums.length) {
        if(Math.abs(i - j) > k) {
            set.delete(nums[i]);
            i++;
        }
        
        if(set.has(nums[j]))
            return true;
        
        set.add(nums[j]);
        j++;
    }
    return false;
};

const nums = [1,2,3,1,2,3], k = 2;
const res = containsNearbyDuplicate(nums, k);
console.log(res);