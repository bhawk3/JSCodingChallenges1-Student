//driver function used for display and passing values.
function checkAnagram() {

     //grab the two strings from the ui. no need to change
     //clear the results
     document.getElementById("results").innerHTML = "";

    stringA = document.getElementById("wordOne").value;
    stringB = document.getElementById("wordTwo").value;

    if (stringA == '' || stringB == '') {
        alert("Please enter two words or phrases.");
        return;
    }

   
    //implement the isAnagram function
    let anagram = isAnagram(stringA, stringB);

    
    //used for display no need to change.
    let msg = "";

    if (anagram == true) {
        msg = 'The two strings ARE anagrams';
    } else {
        msg = 'The two strings ARE NOT anagrams';
    }

    document.getElementById("results").innerHTML = msg
}

//takes in two strings and determines if the are anagarms
//returns true or false
function isAnagram(stringA, stringB) {

   let firstString = stringA.split("").join("")
    let secondString = stringB.split("").join("")

    if (firstString.length !== secondString.length) {
        return false;
    } else {
        firstString.toLowerCase()
        secondString.toLowerCase()

        firstString.split("").sort((a,b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } 
            return 0;
        })



        secondString.split("").sort((a,b) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } 
            return 0;

        })

        if (firstString = secondString) {
            return true;
        }
        return false;
    }        


}

/*
create a function that takes two strings as parameters
remove all the spaces from both strings
check if they are the same length. if not return false
convert strings to lower case
sort each string alphabetically
check to see if the sorted strings are equal
*/