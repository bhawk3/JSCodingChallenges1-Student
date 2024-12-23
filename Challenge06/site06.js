//driver function used for display and passing values.
function findVowels() {

    //getting values from the page no need to change.
    let str = document.getElementById("wordOne").value;

    if (str == "") {
        alert("Please enter a word or phrase");
        return;
    }

    //implement getVowelCount
    let vowelObj = getVowelCount(str);
    
    //used for display no need to change
    //check if the obj returned is empty
   /* if (Object.keys(vowelObj).length === 0){
        alert("Error: Vowel Object is Empty");
        return;
    }*/

    document.getElementById("results").innerHTML = `You entered <strong>"${str}"</strong> it has ${vowelObj} vowels.`;

}

//takes an string and returns the vowel count and the vowels found as an object.
function getVowelCount(str) {
    
    let vowelCount = 0;
    let vowelArray = ['a', 'e', 'i', 'o', 'u'];

    let inputString = str.toLowerCase()
    for (let i = 0; i < inputString.length; i++) {

       if (inputString.includes(vowelArray[i])) {
        vowelCount += 1
        //return vowelCount
       }            

    }
 return vowelCount;


}


/*
create a function that takes a string as a parameter
intialize and declare a variable to hold the vowel count
initialize and declare an array that holds the vowels
convert the string to lower case
loop over each character in the string. Check to see if the character exists in our vowel array
if yes, increment the vowel count
return the vowel count
*/