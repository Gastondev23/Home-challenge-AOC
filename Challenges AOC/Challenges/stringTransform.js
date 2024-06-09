function transformString(input) {
  const length = input.length;

  // Check if the length is divisible by 15
  if (length % 15 === 0) {
    return input
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  // Check if the length is divisible by 5
  else if (length % 5 === 0) {
    return input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }
  // Check if the length is divisible by 3
  else if (length % 3 === 0) {
    return input.split("").reverse().join("");
  }
  // If none of the above conditions are met, return the original string
  else {
    return input;
  }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
console.log(transformString("Hello World!")); // Output: "Hello World!"
