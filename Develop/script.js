// Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

 

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword(){
  let confirmCriteria = alert("Please confirm your password criteria.");

  let passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  while (passwordLength < 8){
    confirm("Your password must be at least 8 characters! Please enter a new password length")
    passwordLength
    prompt("How many characters would you like your password to be? (8-128)")
  }
  while (passwordLength > 128){
    confirm("Your password must be less than 128 characters! Please enter a new password length")
    delete passwordLength;
    prompt("How many characters would you like your password to be? (8-128)")
  }
  while (8 < passwordLength < 128)
  confirm("Your password will be " + passwordLength + " characters long")
  
    

   
  let lcase = confirm("Would you like your password to include Lowercase characters?");
  if (lcase){
    alert ("Your password will contain lowercase characters. ")
  }
  else
  alert("Your password will not contain lowercase characters.");
  
  let ucase = confirm("Would you like your password to include Uppercase characters?");
  if (ucase){
    alert ("Your password will contain uppercase characters. ")
  }
  else
  alert("Your password will not contain uppercase characters.");

  let numeric = confirm("Would you like your password to include Numeric characters?");
  if (numeric){
    alert ("Your password will contain numeric characters. ")
  }
  else
  alert("Your password will not contain numeric characters.");
  
  let specchar = confirm("Would you like your password to include Special characters?");
  if (specchar){
    alert ("Your password will contain special characters. ")
  }
  else
  alert("Your password will not contain special characters.")
}

