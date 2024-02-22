let readWord = prompt('Enter a word');

// create an empty array words until "stop"
words = []

console.log("Enter words one by one (Enter \"stop\" to exit the input):");

// read the first word
word = readWord.question("");


while (word.toLowerCase() != "stop") {

  words.push(word); // insert the read word at the end of words array
  word = readWord.question(""); // read the next word
}

if (words.length > 0)
  console.log("You entered the following words: " + words.join(" "));
else
  console.log("No words to display, Stop was the first word entered.");