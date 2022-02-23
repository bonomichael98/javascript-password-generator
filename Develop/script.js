// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

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

let password1 = {
    passLen: 50
}

password1.passLen = prompt("How many characters would you like your password to be? (8 - 128 characters)")

if (password1.passLen <= 7) {
    alert("Invalid password length. Please enter a password length between 8 and 128 characters.")
    password1.passLen
}   else if (password1.passLen >= 128) {
    alert("Invalid password length. Please enter a password length between 8 and 128 characters.")
    password1.passLen
}   else {
    console.log(password1.passLen = prompt);
}

