// // Max value find out
// function findLargest(first, second) {
//     if (first > second) {
//         return first;
//     }
//     return second;
// }
// var myFirst = 239;
// var mySecond = 382;
// var findBigestNumber = findLargest(myFirst, mySecond);
// console.log(findBigestNumber);
// // Task - 1: create a function that takes three number as input parameter and return big number of three numbers.
// function findMaxValue(firstNumber, secondNumber, thirdNumber) {
//     if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//         return firstNumber;
//     } else if (firstNumber < secondNumber && secondNumber > thirdNumber) {
//         return secondNumber;
//     } else {
//         return thirdNumber;
//     }
// }

// var myFirstNumber = 122;
// var mySecondNumber = 1233;
// var myThirdNumber = 23;
// var myBigestOneNumber = findMaxValue(
//     myFirstNumber,
//     mySecondNumber,
//     myThirdNumber
// );
// console.log("Bigest Number I took:", myBigestOneNumber);

// // Task - 2: Write a function to find the smallest number of three numbers
// function findMaxValue(firstNumber, secondNumber, thirdNumber) {
//     if (firstNumber < secondNumber && firstNumber < thirdNumber) {
//         return firstNumber;
//     } else if (firstNumber > secondNumber && secondNumber < thirdNumber) {
//         return secondNumber;
//     } else {
//         return thirdNumber;
//     }
// }

// var myFirstNumber = 122;
// var mySecondNumber = 1233;
// var myThirdNumber = 23;
// var myBigestOneNumber = findMaxValue(
//     myFirstNumber,
//     mySecondNumber,
//     myThirdNumber
// );
// // console.log("smallest Number I took:", myBigestOneNumber);

// function arrayTotal(number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         const element = number[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// const mynumber = [23, 35, 332, 33, 21, 33];
// var total = arrayTotal(mynumber);
// console.log("Total number sum is:", total);

/* // Find the largest element of an array
function largestElement(array) {
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const mynumbers = [23, 35, 332, 33, 21, 33];
var oldestNumber = largestElement(mynumbers);
console.log("oldest number of this array is:", oldestNumber); */

/* // Task-1 find the smallest element in this array
function smallestelement(arrays) {
    let smallest = arrays[0];
    for (var i = 0; i < arrays.length; i++) {
        let elements = arrays[i];
        if (elements < smallest) {
            smallest = elements;
        }
    }
    return smallest;
}
var myArrays = [233, 33, 3, 3, 3332, 2, 2221, 23, 3];
var smallestArray = smallestelement(myArrays);
console.log("Smallest elements of this array:", smallestArray); */

/* // fibonacci
function fibonacciSeries(num) {
    if (typeof num != "number") {
        return "Please give a number";
    }
    if (num < 2) {
        return "Please return a positive  number greater than one";
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
} 
var fiboNum = 3;
var fiboNumber = fibonacciSeries(fiboNum);
console.log(fiboNumber);*/
/* // function addition.
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const firstTotal = add(44, 66);
console.log("Summation of Two Num:", firstTotal); */
/* 
function add(num1, num2) {
    const multiply = num1 * num2;
    return multiply;
}
const firstTotal = add(44 * 66);
console.log("Multiplication of Two Num:", firstTotal); */

/* 
chairWood=3 cft per chair 
tableWood= 10 cft per table
bedWood = 50cft per bed
 */
/* function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // woodCalculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const totalWoods = woodCalculator(1, 1, 1);
console.log(totalWoods); */

/* Problem-1:Traveling in a Jungle and counting wild animals */
function animalsCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    } else if (miles <= 20) {
        const first10 = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const second10 = restMiles * animalDensitySecond10Miles;
        const totalAnimals = first10 + second10;
        return totalAnimals;
    } else {
        const first10 = 10 * animalDensityFirst10Miles;
        const second10 = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const thirdRest = restMiles * animalDensityRestMiles;
        const totalAnimals = first10 + second10 + thirdRest;
        return totalAnimals;
    }
}
const animals = animalsCount(21);
console.log(animals);