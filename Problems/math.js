// 4 math we need to know
// 1. asolute
const mynumber = -5;
const output = Math.abs(mynumber);
console.log(output);

// 2. ceiling and floor and round
const number = 49.44;
const myNumber = Math.ceil(number);
console.log(myNumber);

// and
const numb = 49.44;
const myNumb = Math.floor(number);
console.log(myNumb);
// and
const num = 49.44;
const myNum = Math.round(number);
console.log(myNum);

// // 3. random
// const myRandom = Math.random();
// console.log(myRandom);
// // and
// const myRandomRoundedwith10x = Math.random()*10;
// const rounded = Math.round(myRandomRoundedwith10x);
// console.log(myRandomRoundedwith10x);
// console.log(rounded);
// // use of random in loop
// for (let i = 0; i < 10; i++) {
//   const myRandomRoundedwith10x = Math.random() * 6;
//   const rounded = Math.round(myRandomRoundedwith10x);
//   console.log(myRandomRoundedwith10x);
//   console.log(rounded);
// }
// use of random with floor
const myRandomRoundedwith10x = Math.random() * 10;
const rounded = Math.floor(myRandomRoundedwith10x);
console.log(rounded);
// 4.Math.pow(base, exponent)