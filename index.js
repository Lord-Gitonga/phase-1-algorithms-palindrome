function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase ();
  for(let i=0, j=word.length-1; i<j; i++, j--){
    if(word[i] != word[j]) {
      return false;
    } else { return true; }
  } 
}
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("mom"))
/* 
  Add your pseudocode here
  first put all words to lowercase
  add a for loop to my string to see if it matches my palindome expectations.
  console log it to see my solution.
*/

/*
  Add written explanation of your solution here
  I pass a for loop to loop my string from both ends to see if they match at any way.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

