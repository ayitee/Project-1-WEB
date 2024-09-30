
let breadCount = Math.floor(Math.random() * 4);
let hamCount = Math.floor(Math.random() * 3);
let tunaCount = Math.floor(Math.random() * 3);

function displayThisText(str) {
  const outDiv = document.getElementById("out");
  if (outDiv.textContent !== '')
    outDiv.append("<br>");
  outDiv.append(str);
  }

if (breadCount >= 2 && hamCount >= 1 && tunaCount >= 1) {
  displayThisText("I can make a royal sandwich!");
} else if (breadCount >= 2 && hamCount >= 1) {
  displayThisText("I can make a ham sandwich!");
} else if (breadCount >= 2 && tunaCount >= 1) {
  displayThisText("I can make a tuna sandwich!");
} else {
  displayThisText("I'd rather be fasting tonight...");
}
