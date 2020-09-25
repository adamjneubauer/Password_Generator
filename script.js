// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add arrays for each prompt
var uppL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numL = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specL = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "<", "<", "+", "=", ";", ":", "?", "/", ",", ".", "[", "]"]


// Add empty arrays for possible characters and for a randomly chosen array of characters
var allA = []
var prepassword = []

// Variables used to define user requirments
var charCheck = prompt("How many characters would you like your password to be? (Between 8 and 128)");
var lowC = confirm("Would you like lowercase letters?")
var uppC = confirm("Would you like uppercase letters")
var numC = confirm("Would you like numbers?")
var specC = confirm("Would you like special characters?")

// Loops to randomly assign at least one character and add characters to possible pool of characters
if (lowC) {
  var firstChar = lowL[Math.floor(Math.random() * lowL.length)]
  prepassword.push(firstChar);
  for (var i = 0; i < lowL.length; i++) {
    allA.push(lowL[i]);
  }
}

if (uppC) {
  var secondChar = uppL[Math.floor(Math.random() * uppL.length)]
  prepassword.push(secondChar);

  for (var i = 0; i < uppL.length; i++) {
    allA.push(uppL[i]);
  }
}

if (numC) {
  var thirdChar = numL[Math.floor(Math.random() * numL.length)]
  prepassword.push(thirdChar);

  for (var i = 0; i < numL.length; i++) {
    allA.push(numL[i]);
  }
}

if (specC) {
  var fourthChar = specL[Math.floor(Math.random() * specL.length)]
  prepassword.push(fourthChar);
  for (var i = 0; i < specL.length; i++) {
    allA.push(specL[i]);
  }
}

// This completes the password to length specified by the user
for (var i = prepassword.length; i < charCheck; i++) {
  prepassword.push(allA[Math.floor(Math.random() * allA.length)])
}

// This makes the password a string with no spaces
var finalPassword = prepassword.join("")


// These make sure the password is within the 8-128 range
if (finalPassword.length < 8) {
  var passwordText = document.querySelector("#password");
  document.querySelector("#generate").addEventListener("click", function (event) {
    passwordText.value = "Your password has an invalid number of characters";
    event.preventDefault();
  }, false);
}

if (finalPassword.length > 128) {
  var passwordText = document.querySelector("#password");
  document.querySelector("#generate").addEventListener("click", function (event) {
    passwordText.value = "Your password has an invalid number of characters";
    event.preventDefault();
  }, false);
}

// This function displays the password in the box when the button is clicked
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

 