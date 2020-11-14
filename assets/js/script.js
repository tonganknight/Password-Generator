// Assignment code here
  
document.getElementById("generate").addEventListener("click",function password(){

  var lengthChoice =window.prompt("How Long would you like your password to be? Please enter number between 8-128 for your passwords length.")

  if(typeof lengthChoice === "string"){// go and add this through your choices 

    window.alert("that is a word not a number. Please try agin");

    password();
    return;
  }

  if(lengthChoice <= 7 || lengthChoice >= 129){

    window.alert("Your Password length must be between 8 and 128 Characters. Please try again");

    password();
    return;
  }

  if(lengthChoice >= 8 && lengthChoice <= 128) {

    var upCasecheck =window.prompt("Would you like to include uppercase letters? Y for Yes, N for No.")


    upCasecheck= upCasecheck.toLowerCase()

    if (upCasecheck ==="" || upCasecheck === null){

      window.alert("That is not a  valid option. Please start again")

      password()
      return;}

    if(upCasecheck === "y"){

      uppercase=true}

    if(upCasecheck === "n"){

      uppercase=false;}
      
    var lowerCasecheck= window.prompt("Would you like to include lowercase letters? Y for yes N for No.")

    lowerCasecheck= lowerCasecheck.toLowerCase()

    if (lowerCasecheck ==="" || lowerCasecheck === null){

      window.alert("That is not a  valid option. Please start again")
      
      password()
      return;}

    if(upCasecheck === "y"){

      lowercase=true}


    if(upCasecheck === "n"){

      uppercase=false;}

    
    var  numCheck=window.prompt("Would you like to password to include numbers? Y for Yes, N for No")

    numCheck= numCheck.toLowerCase()

    if(numCheck ==="" || numCheck ===null){

      window.alert("That is not a  valid option. Please start again")
      
      password()
      return;}


    if(numCheck === "y"){

      numbers=true;}

    if(numCheck === "n"){

      numbers=false;} 

    var symbolCheck =window.prompt("Would you like to include Symbols in your password? Y for Yes N for N")

      symbolCheck= symbolCheck.toLowerCase()

      if(symbolCheck === "" || symbolCheck === null){

      window.alert("That is not a  valid option. Please start again")
      
      password()
      return;}
      
    if(symbolCheck === "y"){

      symbol=true;}

    if(symbolCheck === "n"){

      symbol=false;}


    var truestring =[]

      truestring.push(lengthChoice +" Characters long")

      if(lowercase === true){

        truestring.push(" Lowercase")}

      if(uppercase === true){

        truestring.push(" Uppercase")
      }

      if(numbers === true){

        truestring.push(" Numbers")
      }

      if(symbol === true){

        truestring.push(" symbols")
      }

      var confirmChoice = truestring.toString()

    var Choice =window.confirm("Are you sure you would like to add the following to your customer password? " +truestring)

      if(choice === true){}
  }
    
});













/* old instructions
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

/// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
