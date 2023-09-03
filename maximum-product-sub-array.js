/*
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Swap maxProduct and minProduct if the current number is negative
        if (nums[i] < 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }
        
        // Update maxProduct and minProduct for the current element
        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);
        
        // Update the result with the maximum product so far
        result = Math.max(result, maxProduct);
    }
    
    return result;
};

console.log(maxProduct([-2,3,-4]))