// Assignment code here
var generateBtn = document.querySelector("#generate");

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
'O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var specialCharacters =['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')',
'(','}','{',']','[','~','-','_','.',];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Choose a password length between 8 and 128");

  if (!passwordLength) {
    return "No Password";
  }

  passwordLength = parseInt(passwordLength);

  if (!passwordLength) {
    alert("Please enter a valid number.");
    return generatePassword();
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }

  var allCharacters = [];

  var includeNumbers = confirm("Include numbers");

  if (includeNumbers) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  var includeLowerCase = confirm("Include lowercase characters");

  if (includeLowerCase) {
    allCharacters = allCharacters.concat(lowerCaseCharacters);
  }

  var includeUpperCase = confirm("Include uppercase characters");

  if (includeUpperCase) {
    allCharacters = allCharacters.concat(upperCaseCharacters);
  }

  var includeSpecialCharacters = confirm("Include special characters");

  if (includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  if (allCharacters.length === 0) {
    alert("Please select at least one character set.");
    return generatePassword();
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}
