"use strict";

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < week.length; i++) {
  const p = document.createElement("p");
  let dayName = week[i],
    date = new Date(),
    today = date.getDay();

  if (i === 0 || i === 6) {
    dayName = dayName.italics();
  } else if (i === today) {
    dayName = dayName.bold();
  }
  p.innerHTML = dayName;
  p.className = `day-${i}`;
  document.body.append(p);
}
