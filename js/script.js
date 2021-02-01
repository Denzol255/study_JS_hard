"use strict";

// const num = 266219;
// const numberArray = num.toString().split("");

// let total = numberArray.reduce(function (a, b) {
//   return a * b;
// });

// const totalArray = total.toString().split("");

// console.log(total);

// total = total ** 3;

// console.log(`Первое число ${totalArray[0]}, второе число ${totalArray[1]}!`);

let lang = prompt("Выберите язык (введите 'ru' или 'eng')");

// Решение через IF-----------------------------------------------------------------

if (lang === "ru") {
  console.log(
    "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье!"
  );
} else if (lang === "eng") {
  console.log(
    "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday!"
  );
} else {
  console.log("Вы не выбрали язык или выбрали его неправильно");
}

// Решение через switch--------------------------------------------------------------

switch (lang) {
  case "ru":
    console.log(
      "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье!"
    );
    break;
  case "eng":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday!"
    );
    break;
  default:
    console.log("Вы не выбрали язык или выбрали его неправильно");
}
