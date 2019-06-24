var searchInsert = function(nums, target) {
    let min = 0,
        max = nums.length - 1,
        mid;
    if(target < nums[min]) {nums.splice(0,0,target); return 0;};
    if(target > nums[max]){nums.push(target);return max + 1};
    while(min <= max){
        // mid = (max + min)>>1;
        // mid = min + parseInt((max - min)/2);
        // mid = parseInt((max + min)/2)
        mid = min + (max - min)>>1;
        if(target > nums[mid]){
            min = mid + 1;
        } else if (target < nums[mid]){
            max = mid - 1;
        }else return mid;
    }
    nums.splice(min,0,target);
    return min;
};
nums = [1,5,6,9]
console.log(searchInsert(nums,9));
console.log(nums);