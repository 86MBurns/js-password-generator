// what data dose my app need to work?

// what sorts of actions need to complete?



function generatePassword() {
    var numbers = "0123456789".split;

var upperCaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");

var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","|",";",":","'","<",".",">","/","?"];

var useableCharacters = [];
    // prompt user for passwordLength and store it in a variable
  
   

var passwordLength = prompt("Choose number of characters from 8 to 128.");
    //validate the password length and make sure the its equal to 8 up to 128
    if (passwordLength >= 8 && passwordLength <= 128){
        return "Please choose a number from 8 up to 128.";
    } else if (isNaN(passwordLength)) {
        passwordLength = prompt("Please us a valid number")
    }
    //prompt the user for special character and store in a variable
     
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
}

// Assignment Code
var generateBtn= document.querySelectorAll("#generate");

function writePassword(){
    var password = generatePassword();
    var passwordText= document.querySelector("#password");

    passwordText.value = password;

  }
  //add event listenter to generate button
  generateBtn.addEventListener("click", writePassword);
//variables for all characters



