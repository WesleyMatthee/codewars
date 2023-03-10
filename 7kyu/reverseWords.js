// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}