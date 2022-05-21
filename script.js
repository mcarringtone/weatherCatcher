const btn = document.getElementById("button");

let dateGrab = new Date();

let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function weatherQuery() {
  let cityRefresh = document.getElementById("cityInput");
  let cityName = document.getElementById("cityName");
  cityName.innerHTML = cityRefresh.value;