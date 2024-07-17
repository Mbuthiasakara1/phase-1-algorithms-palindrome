function isPalindrome(word) {
  let lowerstr = word.toLowerCase();
  let newstr = lowerstr.split("").reverse().join("");
  if (newstr === word) {
    return true;
  } else {
    return false;
  }
}

let str1 = isPalindrome("robot");
console.log(str1);

let str2 = isPalindrome("abba");
console.log(str2);

/* 
  function
  write the array methods for the string
  use return and if else statment
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mum"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
