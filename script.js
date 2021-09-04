const inputRange = document.querySelectorAll("input[type=range]");
const inputText = document.querySelector("input[type=text]");
const box = document.querySelector(".box");
const radiusvalues = {
  topleftx: 30,
  toprightx: 70,
  bottomrightx: 13,
  bottomleftx: 87,
  toplefty: 30,
  toprighty: 30,
  bottomrighty: 70,
  bottomlefty: 70,
};

updatebox();

function updatebox() {
  let radius =
    "border-radius: " +
    radiusvalues.topleftx +
    "% " +
    radiusvalues.toprightx +
    "% " +
    radiusvalues.bottomrightx +
    "% " +
    radiusvalues.bottomleftx +
    "% / " +
    radiusvalues.toplefty +
    "% " +
    radiusvalues.toprighty +
    "% " +
    radiusvalues.bottomrighty +
    "% " +
    radiusvalues.bottomlefty +
    "%;";

  inputText.value = radius;
  box.setAttribute("style", radius);
}

inputRange.forEach((range) => {
  range.addEventListener("input", function () {
    if (range.name === "all") {
      Object.keys(radiusvalues).forEach(function (key) {
        radiusvalues[key] = range.value > 50 ? 50 : range.value;
      });
      console.log(radiusvalues);
    } else {
      radiusvalues[range.name] = range.value;
    }
    updatebox();
  });
});

function copyToClipboard() {
  navigator.clipboard.writeText(inputText.value);
}
