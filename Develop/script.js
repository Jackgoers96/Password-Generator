// Assignment Code
var generateBtn = document.querySelector("#generate");
//confirms 8-128 characters//
var characterLength;
//confirms upperCase
var upperCase;
//displays uppercase
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//confirm lowercase
var lowerCase;
//lowercase array 
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//confirms number
var numbers;
//numbers array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//confirms symbols
var symbols;
//symbol array
var symbolArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~" ];
//alerts 
//parseInt
function choices() {
  var characterLength = parseInt(prompt("Your password must be between 8 and 128 characters. Please enter a whole number to set the length of your password."));
// adding returns
   if (isNaN(characterLength) === true) {
     alert("Please choose a valid number.");
     return 
   }
   if (characterLength < 8) {
     alert("Please enter a number greater than 8.");
     return
   }
   if (characterLength > 128) {
     alert("Please enter a number less than 128.");
     return
   }
  // Once characterlength is confirmed, user can add choices
  // making a confirm as a var will hold the response
     upperCase = confirm("Do you wish to include Uppercase letters? Click OK to confirm.");
     lowerCase = confirm("Do you wish to include Lowercase letters? Click OK to confirm.");
     numbers = confirm("Do you wish to include Numbers? Click OK to confirm.");
     symbols = confirm("Do you wish to include Special Characters? Click OK to confirm.");
  //  If the person selects nothing for criteria
  if (!upperCase && !lowerCase && !numbers && !symbols) {
    alert("You must select at least one criteria option. For the highest security, select all four options.");
    return
    }
// Object for criteria options
    var userCriteria = {
      characterLength:characterLength,
      upperCase:upperCase,
      lowerCase:lowerCase,
      numbers:numbers,
      symbols:symbols,
    }
    return userCriteria;
  }  
  function randomChar(array) {
    var index = Math.floor(Math.random() * array.length);
    var element = array[index];
    return element;
  }
  // 3 arrays 1- for password 2- for chosen char 3- characters to include
  function generatePassword() {
    var userCriteria = choices();
    var password = [];
    var chosenChar = [];
    var charsInc = [];
  // use . to get to an objects properties
  // make an if statement for each character option
    if (userCriteria.symbols) {
      charsInc = charsInc.concat(symbolArray);
      chosenChar.push(randomChar(symbolArray));
    }
    if (userCriteria.numbers) {
      charsInc = charsInc.concat(numberArray);
      chosenChar.push(randomChar(numberArray));
    }
    if (userCriteria.upperCase) {
      charsInc = charsInc.concat(upperCaseArray);
      chosenChar.push(randomChar(upperCaseArray));
    }
    if (userCriteria.lowerCase) {
      charsInc = charsInc.concat(lowerCaseArray);
      chosenChar.push(randomChar(lowerCaseArray));
    }
    for(var i=0; i < userCriteria.characterLength; i++) {
      var possibleChar = randomChar(charsInc);
      password.push(possibleChar);
    }
    for(var i=0; i < chosenChar.length; i++) {
      password[i] = chosenChar[i];
    }
    return password.join(" ");
  }
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  generateBtn.addEventListener("click", writePassword);