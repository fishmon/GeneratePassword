var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
//global scope var
 var endPassword =  [""]
 var passPromptLength = 0;
 var userImputPass = [""];

// Function to prompt user for password options
function getPasswordOptions() {

 passPromptLength = prompt("Please include how many characters you would like your password to contain!");
 if (passPromptLength < 8 || passPromptLength > 120) {
    alert("You need to insert a number that is bigger than 8 and smaller than 120");
    return;
  
 }
 // check if imput is a number
    else if (isNaN(passPromptLength)) {
      confirm("Your input needs to be a valid number")
    } else  {
      alert("Your password will be " + passPromptLength + " Characters")
    }
    
      var lowerCase = confirm("Would you like lowercase letters?");
      if(lowerCase){
        userImputPass += lowerCasedCharacters.join("");
      }

    
     var specialChar = confirm("Would you like special characters?");
      if (specialChar){
        userImputPass += specialCharacters.join("");
      }

      var upperCase = confirm("Would you like uppercase letters?");
      if (upperCase){
        userImputPass += upperCasedCharacters.join("");
      }

      var numbers = confirm("would you like numbers?");
      if (numbers){
        userImputPass += numericCharacters.join("");
      }
// validate if at least one type of character is true
      if (specialCharacters === false && lowerCase === false && upperCase === false && numbers === false) {
      confirm("Please select at least one Character type!");
       return;

      }



    }

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  for (i = 0; i < passPromptLength; i++ ) {

    endPassword += getRandom(userImputPass)

  }

  return endPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

