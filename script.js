// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0987654321";
//var passwordPool = "";

function getPasswordOptions () {
  // Your code goes here
  var isUpperCase = confirm("Would you like to use uppercase letters?");
  var isLowerCase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");
  var passLength = prompt("How many characters would you like to use?");

  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Must be 8 to 128 characters");
  }
  var passwordOptions = {
    passLength: passLength,
    isUpperCase: isUpperCase,
    isLowerCase: isLowerCase,
    isSpecial: isSpecial,
    isNumber: isNumber
  }
  return passwordOptions;

  //console.log(passwordOptions);

  // if (isUpperCase) {
  //   var getUppercase = function() {
  //     return letters.toUpperCase()[Math.floor(Math.random() * letters.length)];
  //   }
  //   // passwordPool = passwordPool.concat(letters);
  //   passwordPool = passwordPool.toUpperCase();
  //   // console.log(getUppercase());
  //   // console.log(passwordPool);
  // }
  
  // if (isLowerCase) {
  //   var getLowercase = function() {
  //     return letters[Math.floor(Math.random() * letters.length)]; 
  //   }
  //   // passwordPool = passwordPool.concat(letters);
  //   // console.log(getLowercase());
  //   // console.log(passwordPool);
  // }

  // if (isSpecial) {
  //   var getSpecial = function() {
  //     return specials[Math.floor(Math.random() * specials.length)];
  //   }
  //   // passwordPool = passwordPool.concat(specials);
  //   // console.log(getSpecial());
  //   // console.log(passwordPool);
  // }

  // if (isNumber) {
  //   var getNumber = function() {
  //     return numbers[Math.floor(Math.random() * numbers.length)];
  //   }
  //   // passwordPool = passwordPool.concat(numbers);
  //   // console.log(getNumber());
  //   // console.log(passwordPool);
  // }
}

var generatePassword = function() {
  var options = getPasswordOptions();
  var passwordPool = "";

  var possibleCharacters = "";

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.isUpperCase) {
    possibleCharacters = possibleCharacters.concat(letters.toUpperCase());
    //guaranteedCharacters.push(letters.toUpperCase());
  }

  if (options.isLowerCase) {
    possibleCharacters = possibleCharacters.concat(letters);
    // guaranteedCharacters.push(letters);
  }

  if (options.isSpecial) {
    possibleCharacters = possibleCharacters.concat(specials);
    // guaranteedCharacters.push(specials);
  }

  if (options.isNumber) {
    possibleCharacters = possibleCharacters.concat(numbers);
    // guaranteedCharacters.push(numbers);
  }

  for (var i = 0; i < options.passLength; i++) {
  passwordPool = passwordPool.concat(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
  }
  return passwordPool;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
