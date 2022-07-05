// what data dose my app need to work?

// what sorts of actions need to complete?



function generatePassword() {
var numbers = ["0123456789"].split;

var upperCaseLetters= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].split("");

var lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"].split("");

var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","|",";",":","'","<",".",">","/","?"];

var useableCharacters = [];
    // prompt user for passwordLength and store it in a variable
var passwordLength;  
var useNumbers; 
var useUpperCase;
var useLowerCase;
var useSpecial;  

passwordLength = window.prompt("Choose number of characters from 8 to 128.");
    //validate the password length and make sure the its equal to 8 up to 128
    if (passwordLength >= 8 && passwordLength <= 128){
        return ;
    }
    useNumbers = confirm ("Do you want to use numbers?");
    useUpperCase = confirm ("Do you want to use capital letters?");
    useLowerCase = confirm ("Do you want to use lowercase leters?");
    useSpecial = confirm ("Do you want to use special characters?");
    //prompt the user for special character and store in a variable
    if (!useNumbers || !useUpperCase || !useLowerCase || !useSpecial){
        return "Select at least one type of characters.";
    };

    if (useNumbers) {
        useableCharacters = useableCharacters.concat(numbers);
    }
    if (useUpperCase) {
        useableCharacters = useableCharacters.concat(upperCaseLetters);
    }
    if (useLowerCase) {
        useableCharacters = useableCharacters.concat(lowercaseLetters);
    }
    if (useSpecial) {
        useableCharacters = useableCharacters.concat(specialCharacters);
    }

   
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



