// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = startPrompt();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    reset();

}

generateBtn.addEventListener("click", writePassword);

//Variable Storage Start

let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
let upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialCharacters = '!@#$%^&*()';
let numCharacters = '0123456789';

let characters = '';

let password1 = {
    passLen: '',
    lower: '',
    upper: '',
    numeric: '',
    special: ''
    
}
//Variable Storage End


//Start of functions

let addLower = function(){
    characters=characters.concat(lowerCharacters);
};

let addUpper = function(){
    characters=characters.concat(upperCharacters);
};

let addSpecial = function(){
    characters=characters.concat(specialCharacters);
};

let addNum = function(){
    characters=characters.concat(numCharacters);
};

//Password generation function, takes in global variables
let makeid = function(length) {
    let result = '';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}

//Prompt/inputs function
let startPrompt = function(){

    password1.passLen = prompt("How many characters would you like your password to be? (8 - 128 characters)")
        
    if (password1.passLen <= 7) {
        alert("Invalid password length. Please enter a password length between 8 and 128 characters.")
    }   else if (password1.passLen >= 128) {
        alert("Invalid password length. Please enter a password length between 8 and 128 characters.")
    }   else {
        alert("Your password will have " + password1.passLen + " characters.")
    }
    
    
    password1.lower = prompt("Would you like lower case characters in your password? (yes/no)")
    
    if (password1.lower === 'yes') {
        alert("Lower case letters will be included in your password.")
        addLower();

    } else {
        alert("Lower case letters will not be included in your password.")
    }
    
    
    password1.upper = prompt("Would you like upper case characters in your password? (yes/no)")
    
    if (password1.upper === 'yes') {
        alert("Upper case letters will be included in your password.")
        addUpper();
        
    } else {
        alert("Upper case letters will not be included in your password.")
    }
    
    
    password1.numeric = prompt("Would you like numeric characters in your password? (yes/no)")
    
    if (password1.numeric === 'yes') {
        alert("Numeric characters will be included in your password.")
        addNum();
    
    } else {
        alert("Numeric characters will not be included in your password.")
    }
    
    
    password1.special = prompt("Would you like special characters in your password? (yes/no)")
    
    if (password1.special === 'yes') {
        alert("Special characters will be included in your password.")
        addSpecial();
    } else {
        alert("Special characters will not be included in your password.")
    }
    
    
    if (password1.lower == 'yes' || password1.upper == 'yes' ||  password1.numeric == 'yes' ||  password1.special == 'yes') {
        alert("Your password will be generated.")
    } 
    return makeid(password1.passLen);
}
//End of inputs

let reset = function() {
    characters = '';
}



// Add event listener to generate button

