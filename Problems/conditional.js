/* // Find max value from three numbers
let army = 200;
let minister = 299;
let businessmen = 1230;
if (army > minister) {
    console.log("here army is bigger");
} else {
    console.log("minister is bigger");
}
// more
if (army > minister && army > businessmen) {
    console.log("army is bigger");
} else if (minister > army && minister > businessmen) {
    console.log("minister is bigger");
} else {
    console.log("businessmen is bigger");
}
// alternative way
var max = Math.max(minister, businessmen, army);
console.log("largest is", max); */

/* Problem-1:Write foo, bar, foobar if divisible by 3 or 5 or both and
 if don't satisfy the condition then write the number*/
/* for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar");
    } else if (i % 3 == 0) {
        console.log("foo");
    } else if (i % 5 == 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
}
 */
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