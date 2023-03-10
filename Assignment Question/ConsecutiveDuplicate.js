// Q. Given a string S, The task is to remove all the consecutive duplicate characters of the string and return the resultant string. 
// Examples: 
// Input: S= “aaaaabbbbbb”
// Output: ab
// Input: S = “geeksforgeeks”
// Output: geksforgeks
// Input: S = “aabccba”
// Output: abcba

function removeConsecutiveDuplicates(s) {
  let result = '';
  let lastSeen = null;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== lastSeen) {
      result += s[i];
      lastSeen = s[i];
    }
  }
  return result;
}


console.log(removeConsecutiveDuplicates("aaaaabbbbbb")); // "ab"
console.log(removeConsecutiveDuplicates("geeksforgeeks")); // "geksforgeks"
console.log(removeConsecutiveDuplicates("aabccba")); // "abcba"
