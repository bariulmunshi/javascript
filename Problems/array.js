const number = [23, 35, 332, 33, 21, 33];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
}
// console.log(sum);

function arrayTotal(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        sum = sum + element;
    }
    return sum;
}
const mynumber = [23, 35, 332, 33, 21, 33];
var total = arrayTotal(mynumber);
console.log("Total number sum is:", total);