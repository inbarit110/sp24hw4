function countVowel(str) {
  // Initializing vowels array for checking  vowels
  const vowels = ["a", "e", "i", "o", "u"]
  // initialize count
  let count = 0;

  // loop through string to test if each character is a vowel
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // return the number vowels
  return count
}

// function to check if string is palindrome
function checkPalindrome(string) {

  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return 'It is not a palindrome';
    }
  }
  return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);


