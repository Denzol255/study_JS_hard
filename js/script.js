"use strict";

const num = 266219;
const numberArray = num.toString().split("");

let total = numberArray.reduce(function (a, b) {
  return a * b;
});

console.log(total);

total = total ** 3;

console.log(total);

const totalArray = total.toString().split("");

alert(`Первое число ${totalArray[0]}, второе число ${totalArray[1]}!`);
