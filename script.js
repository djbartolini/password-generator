// Assignment Code
var generateBtn = document.querySelector("#generate");
var specials = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0987654321";

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

  var passwordOptions = {   // user inputs are stored as an object
    passLength: parseInt(passLength),
    isUpperCase: isUpperCase,
    isLowerCase: isLowerCase,
    isSpecial: isSpecial,
    isNumber: isNumber
  }
  return passwordOptions;
}


var generatePassword = function() {
  var options = getPasswordOptions();

  var passwordPool = ""; 
  var possibleCharacters = ""; // empty strings to concatenate onto as the conditionals below run
  var guaranteedCharacters = "";
  var noPassword = "No password generated. You must choose at least 1 character type! \nYou may retry if you like.";


  if (!options.isUpperCase && !options.isLowerCase && !options.isSpecial && !options.isNumber) 
  return noPassword; // if user made no selection, then the noPassword message displays. User can click generate password to try again.

  if (options.isUpperCase) {
    possibleCharacters = possibleCharacters.concat(letters.toUpperCase());
    guaranteedCharacters = guaranteedCharacters.concat(letters.toUpperCase()[Math.floor(Math.random() * letters.length)]);
  }

  if (options.isLowerCase) {
    possibleCharacters = possibleCharacters.concat(letters);
    guaranteedCharacters=  guaranteedCharacters.concat(letters[Math.floor(Math.random() * letters.length)]);
  }

  if (options.isSpecial) {
    possibleCharacters = possibleCharacters.concat(specials);
    guaranteedCharacters = guaranteedCharacters.concat(specials[Math.floor(Math.random() * specials.length)]);
  }

  if (options.isNumber) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters = guaranteedCharacters.concat(numbers[Math.floor(Math.random() * numbers.length)]);
  }
   
// possibleCharacters is now concatenated based on the user's inputs
// guaranteedCharacters will be substrung to passwordPool

  for (var i = 0; i < options.passLength; i++) {
  passwordPool = passwordPool.concat(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);
  }

  passwordPool = passwordPool.substring(guaranteedCharacters.length).concat(guaranteedCharacters);

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
