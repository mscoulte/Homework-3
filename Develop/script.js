// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword(){
  let uppercaseYes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let lowercaseYes = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let numbersYes = ['0','1','2','3','4','5','6','7','8','9'];
  let scharsYes = ['!','@','#','$','%','^','&','*','=','+','~','/','?',':',';'];
  let randomBank = [];

   alert("Please confirm your password criteria.");
 
  
  
  

  while (true){
   
    let passwordLength = prompt("How many characters would you like your password to be? (8-128)");

   if (passwordLength < 8){
     alert("Your password must be at least 8 characters!")
     passwordLength = prompt("How many characters would you like your password to be? (8-128)");
     continue
   }
   else if (passwordLength > 128){
     alert("Your password must be less than 128 characters!")
     passwordLength = prompt("How many characters would you like your password to be? (8-128)");
     continue
   }
   else {
    confirm("Your password will be " + passwordLength + " characters.") 
    break
   }
  }
   while (true){
  
  let lCase = confirm("Would you like your password to include lowercase characters?");
  if (lCase){
    alert ("Your password WILL contain lowercase characters. ")
  }
  else
  alert("Your password will NOT contain lowercase characters.");
  
  let uCase = confirm("Would you like your password to include uppercase characters?");
  if (uCase){
    alert ("Your password WILL contain uppercase characters. ")
  }
  else
  alert("Your password will NOT contain uppercase characters.");

  let numeric = confirm("Would you like your password to include numeric characters?");
  if (numeric){
    alert ("Your password WILL contain numeric characters. ")
  }
  else
  alert("Your password will NOT contain numeric characters.");
  
  let specchar = confirm("Would you like your password to include special characters?");
  if (specchar){
    alert ("Your password WILL contain special characters. ")
  }
  else
  alert("Your password will NOT contain special characters.")
  
  if (lCase === false && uCase === false && numeric === false && specchar === false){
  alert("Please generate a new password.")
  
}
break
}

if (lCase){
  randomBank.push(lowercaseYes)
}
if (uCase){
  randomBank.push(uppercaseYes)
}
if (numeric){
  randomBank.push(numbersYes)
}
if (specchar){
  randomBank.push(scharsYes)
}
console.log(randomBank);





for (let i = 0; i < passwordLength; i++){
  let upperRandom = uppercaseYes[Math.floor(Math.random() * uppercaseYes.length)]
  alert(upperRandom)
  //let lowerRandom = lowercaseYes[Math.floor(Math.random() * lowercaseYes.length)]
 // let numberRandom = numbersYes[Math.floor(Math.random() * numbersYes.length)]
  //let scharsRandom = scharsYes[Math.floor(Math.random * scharsYes.length)
  
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;


 


}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
