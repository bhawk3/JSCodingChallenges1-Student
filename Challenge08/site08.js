const numbers = [9, 1, 3, 27, 15, -5, 13, 7];

//driver function used for display and passing values.
function displayNumbers() {
    
    //implement the four functions to return sum, avg, max and min
    let sum = sumNumbers(numbers);
    let avg = avgNumber(numbers);
    let max = maxNumber(numbers);
    let min = minNumber(numbers);
    let sumRec = sumNumbersRecursive(numbers,index);

    //used for display not need to change unless you are doing only the sum function
    let msg = `Sum = ${sum}<br>Avg = ${avg.toFixed(2)}<br>Max = ${max}<br>Min = ${min}<br>Sum Recursion = ${sumRec}`;
    
    //display the message    
    document.getElementById("results").innerHTML = msg;
    document.getElementById("numberslist").innerHTML = numbers.toString();
}

//takes an array of numbers and returns the sum of all the numbers
function sumNumbers(numArry) {
    let totalSum = 0;

    for (let i = 0; i < numbers.length; i++ ) {
        totalSum += numbers[i]
    }

    return totalSum;
}

//takes an array of numbers and the current index in the array and returns the sum of all the numbers using recursion
//Recursion is the technique of the function calling itself. 
//NOTE * SEE CHALLENGE 11. 
function sumNumbersRecursive(numArry, index) {

    //Base case
    if ( index == 0) {
        
        return 1
    }

    return index + sumNumbersRecursive(index)



    //return sumNumbersRecursive();
}


//takes an array of numbers and returns the average of all the numbers
function avgNumber(numArry) {
    let average = 0;
    let totalSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        totalSum += numbers[i]
    }

   average = totalSum / numbers.length
    
   return average;
}

//takes an array of numbers and returns the max number
function maxNumber(numArry) {
    let maxNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers.sort((a,b) => a - b)
        maxNum = numbers[i]
    }

    return maxNum;
}

//takes an array of numbers and returns the min number
function minNumber(numArry) {
   let minNum = 0;

   for (let i = 0; i < numbers.length; i++) {
        numbers.sort((a,b)=> b-a) 
        minNum = numbers[i]
   }

    return minNum;
}

/*
Create a function that takes an array as a parameter
Declare and initialize a variable to hold the sum
Loop over the array and add each number to the sum variable
Return the sum variable
*/