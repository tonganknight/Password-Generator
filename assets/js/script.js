// Assignment code here
  
document.getElementById("generate").addEventListener("click",function password(){

  var lengthChoice =window.prompt("How Long would you like your password to be? Please enter number between 8-128 for your passwords length.")

  //is a number check
  var wrongway =isNaN(lengthChoice)

  if(wrongway ===true){

    window.alert("That is not a number please try again")

    password()
    return;

  }

  //valid character length  check

  if(lengthChoice <= 7 || lengthChoice >= 129){

    window.alert("Your Password length must be between 8 and 128 Characters. Please try again");

    password();
    return;
  }


//asking for uppercase option

  if(lengthChoice >= 8 && lengthChoice <= 128) {

    var upCasecheck =window.prompt("Would you like to include uppercase letters? Y for Yes, N for No.")

    //check if its a letter
    var x =!isNaN(upCasecheck)

    if(x ===true){
  
      window.alert("That is not a valid choice. Please try again")
  
      password()
      return;
  
    }
  
  
    //check if its blank
    upCasecheck= upCasecheck.toLowerCase()

    if (upCasecheck ==="" || upCasecheck === null){

      window.alert("That is not a  valid option. Please start again")

      password()
      return;}

    if(upCasecheck === "y"){

      uppercase=true}

    if(upCasecheck === "n"){

      uppercase=false;}


  //asking for lower case option
      
    var lowerCasecheck= window.prompt("Would you like to include lowercase letters? Y for yes N for No.")

    //check if its a letter
    var x =!isNaN(lowerCasecheck)

    if(x ===true){
  
      window.alert("That is not a valid choice. Please try again")
  
      password()
      return;
  
    }

    lowerCasecheck= lowerCasecheck.toLowerCase()

    if (lowerCasecheck ==="" || lowerCasecheck === null){

      window.alert("That is not a  valid option. Please start again")
      
      password()
      return;}

    if(upCasecheck === "y"){

      lowercase=true}


    if(upCasecheck === "n"){

      uppercase=false;}


      //asking for number option
    
    var  numCheck=window.prompt("Would you like to password to include numbers? Y for Yes, N for No")

    //check if its a letter
    var x =!isNaN(numCheck)

    if(x ===true){
  
      window.alert("That is not a valid choice. Please try again")
  
      password()
      return;
  
    }

    numCheck= numCheck.toLowerCase()

    if(numCheck ==="" || numCheck ===null){

      window.alert("That is not a  valid option. Please start again")
      
      password()
      return;
    }


    if(numCheck === "y"){

      numbers=true;
    }

    if(numCheck === "n"){

      numbers=false;
    } 

    //asking for symbol options

    var symbolCheck =window.prompt("Would you like to include Symbols in your password? Y for Yes N for No")

    //check if its a letter
    var x =!isNaN(symbolCheck)

    if(x ===true){
  
      window.alert("That is not a valid choice. Please try again")
  
      password()
      return;
  
    }

      symbolCheck= symbolCheck.toLowerCase()

      if(symbolCheck === "" || symbolCheck === null){

      window.alert("That is not a  valid option. Please start again")
      
      password()
      return;
    }
      
    if(symbolCheck === "y"){

      symbol=true;
    }

    if(symbolCheck === "n"){

      symbol=false;
    }


    //validation for user request section

    var truestring =[]

      truestring.push(lengthChoice +"Characters long")

      if(lowercase === true){

        truestring.push("Lowercase")}

      if(uppercase === true){

        truestring.push("Uppercase")
      }

      if(numbers === true){

        truestring.push("Numbers")
      }

      if(symbol === true){

        truestring.push("symbols")
      }

      var confirmChoice = truestring.toString()

      var Choice = window.confirm("Are you sure you would like to add the following to your custom password? " +truestring)

      if(Choice === false){
        
        window.alert("Okay, lets start agin")

        password()

        return;}


    //password generate section

      if(Choice === true){

        var charfarm =[]

        if(lowercase === true){

          charfarm.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
        }

        if(uppercase === true){

          charfarm.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
        }
      
        if(numbers === true){

          charfarm.push(1,2,3,4,5,6,7,8,9,0)}

        if(symbol === true){

          charfarm.push("!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":","<","=",">","?","@","[","]","^","_","`","{","}","~")

        }

        //execution of password

        var product = []

        for(i=0; i< lengthChoice; i++){

          var getpassword =charfarm[Math.floor(Math.random() * charfarm.length)]

          product.push(getpassword);

         }

         document.getElementById("password").placeholder = product.join("")
 
         

          
   
      

      }}
      
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
