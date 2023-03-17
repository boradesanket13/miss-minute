var dateInfo = new Date();
var hr =
    dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
  min = dateInfo.getMinutes(),
  sec = dateInfo.getSeconds(),
  millisec = dateInfo.getMilliseconds();

let digital = document.getElementById("digital"),
  hrText = document.getElementById("hr"),
  minText = document.getElementById("min"),
  secText = document.getElementById("sec"),
  meridiemText = document.getElementById("meridiem");

setInterval(() => {
  let dateInfo = new Date();
  let timeTextInfo = dateInfo.toLocaleTimeString();
  let [hr, min, sec] = timeTextInfo.split(":");
  let meridiem = "AM";
  if (hr >= 12) {
    meridiem = "PM";
    if (hr > 12) {
      hr = (hr - 12).toString().padStart(2, "0");
    }
  }
  if (hr === "00") {
    hr = "12";
  }
  hrText.textContent = hr;
  minText.textContent = min;
  secText.textContent = sec;
  meridiemText.textContent = meridiem;
}, 1000);

var hrAngle = hr * 30 + (min * 6) / 12,
  minAngle = min * 6 + (sec * 6) / 60,
  secAngle = sec * 6 + (millisec * 0.36) / 1000;

// set initial angles of the hand wrappers
function setAngle(wrapper, angle) {
  document.querySelectorAll("." + wrapper).forEach((element) => {
    element.style.transform = "rotate(" + angle + "deg)";
  });
}
setAngle("hr-hand", hrAngle);
setAngle("min-hand", minAngle);
setAngle("sec-hand", secAngle);

function themeChange() {
  let element = document.body;
  element.classList.toggle("darkmodecss");
  element.classList.toggle("cite");
  var x = document.querySelector(".heading");

  if (x.innerHTML === "Light") {
    x.innerHTML = "Dark";
    document.getElementById("icon").classList.add("bxs-moon");
    document.getElementById("icon").classList.remove("bxs-sun");
    document.getElementsByClassName("menu-open-button")[0].style.background =
      "white";
    document.getElementsByClassName("hamburger")[0].style.backgroundColor =
      "black";
  } else {
    x.innerHTML = "Light";
    document.getElementById("icon").classList.add("bxs-sun");
    document.getElementById("icon").classList.remove("bxs-moon");
    document.getElementsByClassName("menu-open-button")[0].style.background =
      "#a6f0f0";
    document.getElementsByClassName("hamburger")[0].style.backgroundColor =
      "black";
  }
}

// quotes
const quote = document.querySelector("q");
const cite = document.querySelector("cite");

// updateQuote();

// // API -> https://github.com/lukePeavey/quotable
// async function updateQuote() {
//   const response = await fetch("https://api.quotable.io/random");
//   const data = await response.json();
//   if (response.ok) {
//     // Update DOM elements
//     quote.innerText = data.content;
//     cite.textContent = "~ " + data.author + " ~";
//   } else {
//     quote.textContent = "An error occured";
//     console.log(data);
//   }
// }

updateJoke();
async function updateJoke() {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const data = await response.json();
  if (!data.error) {
    // Update DOM elements
    if (data.type == "single") {
      quote.innerText = data.joke;
    } else {
      quote.innerText = data.setup + "\n" + data.delivery;
    }
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

let clock_style = {
  Normal: {
    name: "Normal",
    id: "normal",
  },
  transparent: {
    name: "Transparent",
    id: "transparent",
  },
};

Object.values(clock_style).forEach((obj) => {
  let div = document.createElement("div");
  div.innerText = obj.name;
  div.addEventListener("click", () => {
    for (let element of document.getElementsByClassName("clk")) {
      if (element.dataset.name === obj.id) {
        element.classList.add("activeClk");
        element.classList.remove("hideClk");
      } else {
        element.classList.add("hideClk");
        element.classList.remove("activeClk");
      }
    }
    if (digital.dataset.name !== obj.id) {
      digital.classList.add(obj.id);
      digital.classList.remove(digital.dataset.name);
      digital.dataset.name = obj.id;
    }
  });
  let clocks = document.getElementById("clocks");

  clocks.appendChild(div);
});
