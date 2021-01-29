"use strict";

let num = 266219;
let arr1 = num.toString().split("");

let total = arr1.reduce(function (a, b) {
  return a * b;
});

console.log(total);

total = total ** 3;

console.log(total);

let arr2 = total.toString().split("");

alert(`Первое число ${arr2[0]}, второе число ${arr2[1]}!`);
