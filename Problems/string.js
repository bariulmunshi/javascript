const reverseString = "Hello, How are you?";

function getString(str) {
    let strReverse = "";
    for (const letter of str) {
        console.log(letter);
        strReverse = letter + strReverse;
    }
    return strReverse;
}
const reverseStrings = getString(reverseString);
console.log(reverseStrings);