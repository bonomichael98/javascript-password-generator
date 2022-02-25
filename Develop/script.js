// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
let upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialCharacters = '!@#$%^&*()';
let numCharacters = '0123456789';

let characters = ' ';

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

/*add prompts to add criteria (password length, characters types such as lowercase, uppercase, numeric, special characters)*/
/*
function generatePassword() {
    */
    /*length should be more than 8, less than 128*/
    /*
    window.prompt("input password length");
    let passLength = window.prompt("input password length");
    if (passLength <= 7 or passLength >= 129) {
    
    }
    console.log(passLength);


}

let password = 
*/
/*
let passLength = prompt("How many characters would you like your password to be?")
*/
/*
let len = prompt('...')

var obj = new prompt(console.log(len))
*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let makeid = function() {
    var result           = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}


let startPrompt = function(){

    let password1 = {
        passLen: '',
        lower: '',
        upper: '',
        numeric: '',
        special: ''
        
    }

    password1.passLen = prompt("How many characters would you like your password to be? (8 - 128 characters)")
    
    /*start of inputs*/
    
    if (password1.passLen <= 7) {
        alert("Invalid password length. Please enter a password length between 8 and 128 characters.")
    }   else if (password1.passLen >= 128) {
        alert("Invalid password length. Please enter a password length between 8 and 128 characters.")
    }   else {
        alert("Your password will have " + password1.passLen + " characters.")
        console.log(password1.passLen);
    }
    
    
    password1.lower = prompt("Would you like lower case characters in your password?")
    
    if (password1.lower === 'yes') {
        alert("Lower case letters will be included in your password.")
        console.log("lower=yes");
        console.log(password1.lower);
        addLower();
    } else {
        alert("Lower case letters will not be included in your password.")
        console.log("lower=no");
        console.log(password1.lower);
    }
    
    
    password1.upper = prompt("Would you like upper case characters in your password?")
    
    if (password1.upper === 'yes') {
        alert("Upper case letters will be included in your password.")
        console.log("upper=yes");
        console.log(password1.upper);
        addUpper();
        
    } else {
        alert("Upper case letters will not be included in your password.")
        console.log("upper=no");
        console.log(password1.upper);
    
    }
    
    
    password1.numeric = prompt("Would you like numeric characters in your password?")
    
    if (password1.numeric === 'yes') {
        alert("Numeric characters will be included in your password.")
        console.log("numeric=yes");
        console.log(password1.numeric);
        addNum();
    
    } else {
        alert("Numeric characters will not be included in your password.")
        console.log("numeric=no");
        console.log(password1.numeric);
    
    }
    
    
    password1.special = prompt("Would you like special characters in your password?")
    
    if (password1.special === 'yes') {
        alert("Special characters will be included in your password.")
        console.log("Special=yes");
        console.log(password1.special);
        addSpecial();
    
    } else {
        alert("Special characters will not be included in your password.")
        console.log("Special=no");
        console.log(password1.special);
    }
    
    /*end of inputs*/
    
    if (password1.lower == 'yes' || password1.upper == 'yes' ||  password1.numeric == 'yes' ||  password1.special == 'yes') {
        alert("Your password will be generated.")
    } 

return password1;
console.log(password1);
}



/*function to generate password*/



