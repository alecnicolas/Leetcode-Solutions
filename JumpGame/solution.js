var canJump = function(nums) {
    let index = 0
    
    for(let i=0; i<nums.length; i++){
        console.log(index, i, nums[i])
        if(index < i)
            return false;
        if(nums[i] + i > index){
            index = nums[i] + i
        }
            
    }
    
    return true;
};