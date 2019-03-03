class Solution {
    public boolean checkPossibility(int[] nums) {
        int strike = 0;                                              
        for(int i = 1; i < nums.length && strike<=1 ; i++){
            if(nums[i-1] > nums[i]){
                strike+=1;
                if(i-2>=0 && nums[i-2] > nums[i]) nums[i] = nums[i-1];
            }
        }
        return strike<=1;
    }
}