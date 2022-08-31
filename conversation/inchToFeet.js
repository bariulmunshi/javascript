// inch to feet conversations
var inches = 132;
var feet = 132 / 12;
// console.log(feet);

// Now inch to feet conversations by function call
function inchesToFeet(inches) {
  var feet = inches / 12;

  return feet;
}
var mySetInches = 154;
var feet = inchesToFeet(mySetInches);
console.log("My set Feet", feet);

var hisSetInches = 500;
var feet = inchesToFeet(hisSetInches);
console.log("His set Feet", feet);

var herSetInches = 1000;
var feet = inchesToFeet(herSetInches);
console.log("Her set Feet", feet);
