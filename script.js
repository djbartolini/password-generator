// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // Your code goes here
  var isUpperCase = confirm("Would you like to use uppercase letters?");
  var isLowerCase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var passLength = prompt("How many characters would you like to use?");

  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Must be 8 to 128 characters");
  }

  var possibleSpecial = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";


  if (isUpperCase) {
    //
  }

  if (isLowerCase) {
    //use lowercase
  }

  if (isSpecial) {
    //use special characters
  }

  if (isNumber) {
    //use numbers
  }
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
