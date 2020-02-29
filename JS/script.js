// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Defined basic variables using arrays.
  let uppercaseYes = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  let lowercaseYes = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let numbersYes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let scharsYes = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "=",
    "+",
    "~",
    "/",
    "?",
    ":",
    ";"
  ];
  let randomArr = [];

  confirmDetails = alert("Please confirm your password criteria.");

  //Prompting user for Length of password between 8 and 128
  while (true) {
    passwordLength = prompt(
      "How many characters would you like your password to be? (8-128)"
    );
    console.log(passwordLength);

    if (passwordLength == null) {
      return;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length! Must be between 8-128 characters.");
    } else {
      confirm("Your password will be " + passwordLength + " characters.");
      break;
    }
    console.log(passwordLength);
  }

  //Alert user to confirm character types
  while (true) {
    lCase = confirm(
      "Would you like your password to include lowercase characters?"
    );
    if (lCase) {
      alert("Your password WILL contain lowercase characters. ");
    } else alert("Your password will NOT contain lowercase characters.");

    uCase = confirm(
      "Would you like your password to include uppercase characters?"
    );
    if (uCase) {
      alert("Your password WILL contain uppercase characters. ");
    } else {
      alert("Your password will NOT contain uppercase characters.");
    }

    numeric = confirm(
      "Would you like your password to include numeric characters?"
    );
    if (numeric) {
      alert("Your password WILL contain numeric characters. ");
    } else alert("Your password will NOT contain numeric characters.");

    specchar = confirm(
      "Would you like your password to include special characters?"
    );
    if (specchar) {
      alert("Your password WILL contain special characters. ");
    } else alert("Your password will NOT contain special characters.");

    if (
      lCase === false &&
      uCase === false &&
      numeric === false &&
      specchar === false
    ) {
      alert(
        "We require at least 1 character type. Please generate a new password."
      );
    } else {
      break;
    }
  }

  //Pushing contents of all selected character arrays into a single array which we can randomly select from
  if (lCase) {
    randomArr.push(...lowercaseYes);
  }
  if (uCase) {
    randomArr.push(...uppercaseYes);
  }
  if (numeric) {
    randomArr.push(...numbersYes);
  }
  if (specchar) {
    randomArr.push(...scharsYes);
  }
  console.log(randomArr);

  //Loop until selected user prefernces are met
  while (true) {
    let acceptableCriteria = true;
    let usesLower = false;
    let usesCaps = false;
    let usesNumbers = false;
    let usesSchars = false;
    let password = "";

    //Generate random paswords
    for (let i = 0; i < passwordLength; i++) {
      password += randomArr[Math.floor(Math.random() * randomArr.length)];
    }

    console.log(password);

    //Make sure each password contains proper characters based on uer choices
    if (lCase) {
      for (i = 0; i < lowercaseYes.length; i++) {
        usesLower = password.includes(lowercaseYes[i]);
        console.log("Lowercase Character? " + usesLower);
        if (usesLower) {
          break;
        }
      }
    }
    if (uCase) {
      for (i = 0; i < uppercaseYes.length; i++) {
        usesCaps = password.includes(uppercaseYes[i]);
        console.log("Uppercase Character? " + usesCaps);
        if (usesCaps) {
          break;
        }
      }
    }
    if (numeric) {
      for (i = 0; i < numbersYes.length; i++) {
        usesNumbers = password.includes(numbersYes[i]);
        console.log("Numbers?" + usesNumbers);
        if (usesNumbers) {
          break;
        }
      }
    }
    if (specchar) {
      for (i = 0; i < scharsYes.length; i++) {
        usesSchars = password.includes(scharsYes[i]);
        console.log("Special Characters?" + usesSchars);
        if (usesSchars) {
          break;
        }
      }
    }

    //If password does not meet criteria, password will not be accepted and loop will begin again
    if (
      (lCase && !usesLower) ||
      (uCase && !usesCaps) ||
      (numeric && !usesNumbers) ||
      (specchar && !usesSchars)
    ) {
      acceptableCriteria = false;
    }
    console.log("Acceptable Criteria? " + acceptableCriteria);

    //If password meets criteria, display the password
    if (acceptableCriteria) {
      return password;
    }
  }
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
