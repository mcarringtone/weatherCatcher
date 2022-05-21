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
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      cityRefresh.value +
      "&appid=e458f3719040b92db51cd836f40d7269"
  )   
   .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML =
          "Min: " +
          Number(data.list[i].main.temp_min - 273.15).toFixed(1) +
          "°";
      }