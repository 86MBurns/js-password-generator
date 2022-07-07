// what data dose my app need to work?



 

// what sorts of actions need to complete?

//variables for all characters





function generatePassword() {
    
var numbers = "1234567890".split("");
var upperCaseLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var specialCharacters = "!@#$%^&*()".split("");
var useableCharacters = [] ;

    // prompt user for passwordLength and store it in a variable
var passwordLength;  
var useNumbers; 
var useUpperCase;
var useLowerCase;
var useSpecial;
var password123 = "";  


passwordLength = window.prompt("Choose number of characters from 8 to 128.");
    //validate the password length and make sure the its equal to 8 up to 128
    if (passwordLength >= 8 && passwordLength <= 128 ){
     
    } 
        
    useNumbers = confirm ("Do you want to use numbers?");
    if (useNumbers){
        alert("your password will use numbers.");
    }
    useUpperCase = confirm ("Do you want to use capital letters?");
    if (useUpperCase){
        alert("your password will use uppercase letter.");
    }
    useLowerCase = confirm ("Do you want to use lowercase leters?");
    if (useLowerCase){
        alert("your password will use lowercase leters.");
    }
    useSpecial = confirm ("Do you want to use special characters?");
    if (useSpecial){
        alert("your password will use special characters.");
    }
    if (useNumbers || useUpperCase || useLowerCase || useSpecial){
      
    };

    if (useNumbers === true) {
        useableCharacters = useableCharacters.concat(numbers);
        
    }
    if (useUpperCase === true) {
        useableCharacters = useableCharacters.concat(upperCaseLetters);
        
    }
    if (useLowerCase === true) {
        useableCharacters = useableCharacters.concat(lowerCaseLetters);
        
    }
    if (useSpecial === true) {
        useableCharacters = useableCharacters.concat(specialCharacters);
        
    }
    
    for (var i = 0; i <= passwordLength; i++){
    password123 += useableCharacters [Math.floor (Math.random() * useableCharacters.length)];
        
    }
   return password123 ;
   }

  
    //prompt the user for special character and store in a variable
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat



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



