// Problem: https://leetcode.com/problems/sleep/
//description:Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
//Note that minor deviation from millis in the actual sleep duration is acceptable.
// Difficulty: Easy
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
