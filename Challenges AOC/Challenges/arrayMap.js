function hasSubarrayWithTargetSum(arr, target) {
  let start = 0;
  let current_sum = 0;

  for (let end = 0; end < arr.length; end++) {
    // Add the current element to the current sum
    current_sum += arr[end];

    // While current_sum is larger than the target, move the start pointer to the right
    while (current_sum > target && start <= end) {
      current_sum -= arr[start];
      start++;
    }

    // Check if the current sum equals the target
    if (current_sum === target) {
      return true;
    }
  }

  // If no subarray is found, return false
  return false;
}

// Example usage:
let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
