let light = "styles/light.css";
let dark = "styles/dark.css";

function clearScreen() {
  document.getElementById("result").value = "";
}

function backSpace() {
  let res = document.getElementById("result");
  if (res.value == "undefined") {
    res.value = "";
  }
  let str = res.value;
  str = str.substring(0, str.length - 1)
  res.value = str;
}

function toCalc(value) {
  let res = document.getElementById("result");
  if (res.value == "undefined") {
    res.value = "";
  }
  res.value += value;
}

function changeTheme() {
  let button = document.getElementById("change-theme");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == light) {
    theme.href = dark;
    button.innerHTML = "Switch to Light Mode";
  } else {
    theme.href = light;
    button.innerHTML = "Switch to Dark Mode";
  }
}
