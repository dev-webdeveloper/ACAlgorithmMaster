/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var length = strs.length;
    var newStrt = "";

     // looping 0- shortest string length 
    for (let j = 0; j <; j++){
        for (let i = 0; i < length-1; i++){
            strs[j][i] 

        }
    }

    
};

var strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));