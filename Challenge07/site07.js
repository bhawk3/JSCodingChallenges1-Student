//driver function used for display and passing values.
function checkPalindrome() {
    
    //get values from the page. no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement the isPalindrome function
    let palindrome = isPalindrome(str);
    
    //used for display. no need to change.
    let msg = "";
   
    if (palindrome == true) {
        msg = "The word or phrase is a palindrome";
    }
    else{
        msg = "The word or phrase is NOT a palindrome";
    }

    document.getElementById("results").innerHTML = msg;
}

//takes an string to check if it is a palindrome.
//returns true or false. 
function isPalindrome(str) {

    str = str.replace(/[^a-z]/g, '');
    str.toLowerCase()
    let reversed = "";

    //reversing with decrementing loop
   /* for (let i = str.length - 1; i >= 0; i--) {
         reversed += str[i]
    console.log(reversed)

 }
   if (reversed == str) {
        return true;
    }
        return false;*/

   //reversing with built-in array functions

   reversed = str.split('').reverse().join('')

   if (str == reversed) {
    return true;
   } return false;
}


/*
Create a function that takes a string as a parameter
Remove special characters
convert the string to lower case
declare variable to hold reversed string
reverse the string using a decrementing loop or built-in array functions
compare the string to the reversed string
return true or false
display a message based on true or false

*/