// event listener
let button = document.getElementById("btn2");
button.addEventListener("click", eightBall);
document.getElementById("output2");
//  function
function eightBall() {
  let statement = document.getElementById("input1").value.toLowerCase();
  let randNum = Math.random();
  if (statement == "") {
    document.getElementById("output2").innerHTML = " ENTER SOMETHING!";
  } else if (statement == "is javascript awesome ") {
    document.getElementById("output2").innerHTML = " Of Course!";
  } else if (randNum < 0.2) {
    document.getElementById("output2").innerHTML = " Wthout a Doubt.";
  } else if (randNum < 0.4) {
    document.getElementById("output2").innerHTML = " As I see it yes.";
  } else if (randNum < 0.6) {
    document.getElementById("output2").innerHTML =
      " concentrate and ask again.";
  } else if (randNum < 0.8) {
    document.getElementById("output2").innerHTML = " Don't count on it.";
  } else {
    document.getElementById("output2").innerHTML = " Outlook not so good.";
  }
}
// output
