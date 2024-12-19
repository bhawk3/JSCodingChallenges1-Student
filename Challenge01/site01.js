const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]

//driver function used for display and passing values.
function findHero() {

    //implement the function findLongestString that returns the longest word.
    let lword = findLongestString(marvelHeroes);

    //used for display. no need to change
    document.getElementById("results").innerHTML = lword;

    //extra credit display all of the heroes to the page

}

//takes an array of strings and returns the longest one. 
function findLongestString(namesArry) {
   let longestString = ""

   for (let i = 0; i < namesArry.length; i++ ) {
    if (namesArry[i].length > longestString.length){
        longestString = namesArry[i]

    }
   }
    return longestString;


}

//create function that takes an array as a parameter
//declare & initialize a variable to hold the longest string
//loop over the aray and check if the current string is larger than the longest string
//if current string is larger set it to the variable holding the longest string
//return the longest string