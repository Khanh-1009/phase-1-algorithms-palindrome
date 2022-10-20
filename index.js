function reverse(word){
  /*const splitWord = word.split('')
  const reverseIt = splitWord.reverse()
  const joinIt = reverseIt.join('')
  return joinIt*/
  // faster way
  //return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  //const reverseWord = reverse(word)
  //if the input is the same as the reversed input
  /*if (word === reverseWord){
    return true
  }//if not
 else {
    return false
  }*/
  // 2nd Method
  for (let i = 0; i < word.length/2; i++){
    const j = word.length - 1 - i
    const startChar = word[i]
    const endChar = word[j]
    if (startChar === endChar){
      return true
    } else{
      return false
    }
  }
}

/* 
1st Method
  Add your pseudocode here
  Return true if the word is the same as the word in reverse, and return false if it's not.
  if the input is the same as the reversed input
  return true
  if not
  return false
2nd Method
  if the 1st letter is the same as the last letter, 2nd letter is the same as the 2nd last letter,
  keep going till the central letter => true
  if not => false
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
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
