// what data dose my app need to work?
// Assignment Code
var generateBtn = document.querySelectorAll("#generate");


 

// what sorts of actions need to complete?

//variables for all characters

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var upperCaseLetters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var specialCharacters = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","{","]","}",",","|",";",":","'","<",".",">","/","?"];

var useableCharacters = [] ;

function generatePassword() {
    



    // prompt user for passwordLength and store it in a variable
var passwordLength;  
var useNumbers; 
var useUpperCase;
var useLowerCase;
var useSpecial;  


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

    if (useNumbers == true) {
        useableCharacters = useableCharacters.concat(numbers);
        
    }
    if (useUpperCase == true) {
        useableCharacters = useableCharacters.concat(upperCaseLetters);
        
    }
    if (useLowerCase == true) {
        useableCharacters = useableCharacters.concat(lowercaseLetters);
        
    }
    if (useSpecial == true) {
        useableCharacters = useableCharacters.concat(specialCharacters);
        
    }
    
var finalPassword;

    for (var i = 0; i <= passwordLength; i++){
    useableCharacters [Math.floor (Math.random() * useableCharacters.password)];
        

   return password ;
   }

  
    //prompt the user for special character and store in a variable
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
}

function writePassword(){
    console.log("hello")
    var password = generatePassword();
    var passwordText= document.querySelector("#password");

    passwordText.value = password;

  }

  //add event listenter to generate button
generate.addEventListener("click", writePassword);
  



