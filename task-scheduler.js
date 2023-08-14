/*
Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks.

 

Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
Example 2:

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
Example 3:

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const hashMap = {}; // Store occurence of n items
    let maxKey; // Keep track of max Key
    let max = 0; // Keep track of max Value
	
	// Find the most frequent occurence
    for (let i = 0; i < tasks.length; i++) {
        hashMap[tasks[i]] = !hashMap[tasks[i]] ? 1 : hashMap[tasks[i]] + 1;
        if (hashMap[tasks[i]] > max) {
            max = hashMap[tasks[i]];
            maxKey = tasks[i];
        }
    }
	
	// (n+1) because we include 1 more spot for each value of max
	// - n because the last interval doesnt have idle.
	// - max because we dont want to count the occurence of max
    let idle = max * (n+1) - n - max;
    for (let [key, value] of Object.entries(hashMap)) {
		// Skip if we loop through the max because this is where we start
        if (maxKey === key) {
            continue;
        }
        
		// + 1 because we don't count the last interval (we don't have idle there)
        if (value === max) {
            idle = idle - value + 1;
        } else {
            idle -= value;
        }
    }
    
	// Only add if we have idle.
    return tasks.length + (idle > 0 ? idle : 0);
};
