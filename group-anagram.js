/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*Brute Force*/
var groupAnagrams = function (strs) {

    const groupedAnagrams = [];

   
    for (let i = 0; i < strs.length; i++) {
        let isOnGroup = false;
        let element = strs[i];

        for (let j = 0; j < groupedAnagrams.length; j++) {
            
            if (groupedAnagrams[j][0].split('').sort().join('') === element.split('').sort().join('')) {
                groupedAnagrams[j].push(element);
                
                isOnGroup = true;
                continue;
            }
        };

        if (!isOnGroup) {
            groupedAnagrams.push([element]);
        }
    };

    return groupedAnagrams;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))