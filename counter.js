// Problem: https://leetcode.com/problems/counter/
// Difficulty: Easy
function createCounter(n) {
  let count = n;
  return function () {
    return count++;
  };
}
