var generateBtn= document.querySelectorAll("generate");

function writePassword(){
  var password = generatePassword();
  var passwordText= document.querySelector("password");
  passwordText.value = password;
}

// soring all needed characters and variables
var capitalLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","|",";",":","'","<",".",">","/","?"];

// what sorts of action need to comlepet.

//generat password
function generatePassword() {

  var passwordlength;
  var useCapital;
  var useLowerCase;
  var useNunbers;
  var useSpecialCharaters;
  //promt the user for their passwordlength
  passwordlength = window.prompt("Request password length");
  //validate password length for number of characters is 8 to 128
  
  //If passwordLength is > than or equal to 8 and passwordLength less that or equal to 128

  //If passwordLength < less that 8 OR it greater than 128
if( length >= 8 && length <= 128 ) {

  useLowerCase = window.confirm( "Do you want to use lower case letters?");

  useCapital = window.confirm( "Do you want to use capital letters?");

  useNunbers = window.confirm("Do you want to use numbers?");

  useSpecialCharaters = window.confirm("Do you want to use special characters?");

  if(useLowerCase || useCapital || useNunbers || useSpecialCharaters) {

    if (useLowerCase){
      
    }
  }
  //end fuction early
  return;
}

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


