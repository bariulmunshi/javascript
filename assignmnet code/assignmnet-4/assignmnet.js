// Problem-1:

function anaToVori(ana) {
    const vori = ana / 16;
    return vori;
}
const givenVori = 16;
const getVori = anaToVori(givenVori);
console.log(getVori);

// Problem-2:
function pandaCost(singaraQuantity, somuchaQuantity, jelebiQuantity) {
    var singaraPrice = 7;
    var singaraCost = singaraPrice * singaraQuantity;
    var somuchaPrice = 10;
    var somuchaCost = somuchaPrice * somuchaQuantity;
    var jelebiPrice = 15;
    var jelebiCost = jelebiPrice * jelebiQuantity;

    const totalCost = singaraCost + somuchaCost + jelebiCost;
    return totalCost;
}
const singaraQuantity = 1;
const somuchaQuantity = 1;
const jelebiQuantity = 1;
var totalCostPanda = pandaCost(
    singaraQuantity,
    somuchaQuantity,
    jelebiQuantity
);
console.log(totalCostPanda);

// Problem-3:
function picnicBudget(persons) {
    const first100Person = 5000;
    const second100Person = 4000;
    const restPerson = 3000;
    if (persons <= 100) {
        const count = persons * first100Person;
        return count;
    } else if (persons <= 200) {
        const first100 = 100 * first100Person;
        const restpersons = persons - 100;
        const second100 = restpersons * second100Person;
        const totalCost = first100 + second100;
        return totalCost;
    } else {
        const first100 = 100 * first100Person;
        const second100 = 100 * second100Person;
        const restpersons = persons - 200;
        const thirdRest = restpersons * restPerson;
        const totalCost = first100 + second100 + thirdRest;
        return totalCost;
    }
}
const cost = picnicBudget(101);
console.log(cost);

// Problem-4:
const myFriends = [
    "Anik",
    "Hasibul",
    "Anik",
    "Monir",
    "Atika",
    "Mafiul",
    "Shakib",
];

function oddFriend(myFriends) {
    /* handling error if user input not string array  */
    for (const element of myFriends) {
        if (typeof element != "string") {
            return "invalid input";
        }
    }
    let oddFriend = [];

    for (const elements of myFriends) {
        if (elements.length % 2 != 0) {
            oddFriend.push(elements);
            break;
        }
    }
    return oddFriend[0];
}
/* call the function */
const getOddCharFriend = oddFriend(myFriends);
console.log(getOddCharFriend);