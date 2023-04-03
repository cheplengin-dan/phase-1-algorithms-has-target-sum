function hasTargetSum(array, target) {
  // Write your algorithm here
  const complementMap = new Map();
  for (const num of array) {
    const complement = target - num;
    if (complementMap.has(num)) {
      return true;
    }
    complementMap.set(complement, true);
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
  the time complexity of the hasTargetSum function is 0(n),where n is the length of the 
  array.Since we iterate over the array only once and perform constant-time operations on the hash table
*/

/* 
  Add your pseudocode here
  use a method to check whether two numbers in the array equal the target 
*/

/*
  Add written explanation of your solution here
   It uses a hash table (implemented as a Map object) to store the complements of the numbers seen so far, and checks if the current number is already in the map.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
