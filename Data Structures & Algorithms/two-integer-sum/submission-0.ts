class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i <nums.length; i++){
            for (let a = i + 1; a < nums.length; a++){
                const sum = nums[i] + nums[a]
                if (sum === target){
                    return [i,a]
                }
            }
        }

        return []
    }
   
}
