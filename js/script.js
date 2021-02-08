"use strict";

let arr = ["485206", "4697", "265035", "704650", "7180", "629003", "470762"];

arr.forEach((num) => {
  if (num.startsWith("2") || num.startsWith("4")) {
    console.log(num);
  }
});

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i + ` Делители этого числа: 1 и ${i}`);
    }
  }
}

getPrimes(100);
