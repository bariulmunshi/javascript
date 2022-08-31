// QUIZ-1
const number = 49.94;
const myNum = Math.floor(number);
console.log(myNum);

// QUIZ-2
var totn_string = "TechOnTheNet";

console.log(totn_string.length);
// QUIZ-3
function add(a, b) {
    return a + b;
}
console.log(add("adam" + "eve"));

// QUIZ-4
var result = 100 + Math.random() * 100;
console.log(result);

/* quiz-5
q: Q15: What code you have to write to know the number of “a” in a string */
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == "a") {
        count++;
    }
}
console.log(count);

// quiz-6: how to remove property from object javascript
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

delete person.age;