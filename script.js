// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // Your code goes here
  var passwordPool = "";
  var isUpperCase = confirm("Would you like to use uppercase letters?");
  var isLowerCase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var passLength = prompt("How many characters would you like to use?");
  var specials = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0987654321";

  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Must be 8 to 128 characters");
  }


  if (isUpperCase) {
    var getUppercase = function() {
      return letters.toUpperCase()[Math.floor(Math.random() * letters.length)];
    }
    passwordPool = passwordPool.concat(letters);
    console.log(getUppercase());
    console.log(passwordPool);
  }
  
  
  if (isLowerCase) {
    var getLowercase = function() {
      return letters[Math.floor(Math.random() * letters.length)]; 
    }
    console.log(getLowercase());
  }

  if (isSpecial) {
    var getSpecial = function() {
      return specials[Math.floor(Math.random() * specials.length)];
    }
    console.log(getSpecial());
  }

  if (isNumber) {
    var getNumber = function() {
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
    console.log(getNumber());
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
