const btn = document.getElementById("button");

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
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Max").innerHTML =
          "Max: " +
          Number(data.list[i].main.temp_max - 273.15).toFixed(2) +
          "°";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
      console.log(data);
    })

    .catch((err) =>
      alert("Something Went Wrong: Try Checking Your Internet Coneciton")
    );
}

function DefaultScreen() {
  document.getElementById("cityInput").defaultValue = "Atlanta";
  weatherQuery();
}

function CheckDay(day) {
  if (day + dateGrab.getDay() > 6) {
    return day + dateGrab.getDay() - 7;
  } else {
    return day + dateGrab.getDay();
  }
}
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

for (i = 0; i < 5; i++) {
  document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}
