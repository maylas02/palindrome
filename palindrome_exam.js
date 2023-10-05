function isPalindrome(string) {
  // check if the given value is a string
  if (typeof string === "string") {
    console.log("The given value is a string");
  } else {
    console.log(
      `The given value: ${string} is not a string! The expected data type of the value is string`
    );
  }
  // remove all special character inputted and lowercase it
  const removedSpecialCharacters = string
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();

  // this is the reversed value of the given string
  const reversedString = removedSpecialCharacters.split("").reverse().join("");

  // check if the given value is a palindrome or not
  if (removedSpecialCharacters === reversedString) {
    console.log(
      `The given string: ${string} is an example of a
      palindrome, the reversed value is: ${reversedString}`
    );
  } else {
    console.log(
      `The given string: ${string} is not an example of a palindrome`
    );
  }
}

isPalindrome("A man, a plan, a canal. Panama"); //sample of a palindrome
// isPalindrome("A ma121n, a plan, a c322ana@l. Panama"); //remove special characters and numbers
// isPalindrome(123); // does not accept this kind of data type unless it is string
