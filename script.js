function game() {
  var sides = ["Heads", "Tails"];
  console.log(input);
  var input = document.getElementById("list").value;
  if (input == "Choose") alert("Select an option!");
  else {
    var random = parseInt(Math.random() * 2);
    var output;

    document.getElementById("playButton").disabled = false;
    if (sides[random] == input) {
      output =
        "Computer chose " + "<b>" + sides[random] + "</b>" + ". So, you WON!";
    } else
      output =
        "Computer chose " + "<b>" + sides[random] + "</b>" + ". So, you LOST!";
    document.getElementsByClassName("result")[0].innerHTML = "";
    document.getElementsByClassName("result")[0].innerHTML = output;
    document.getElementsByClassName("result")[0].style.display = "block";
    document.getElementById("playAgain").style.display = "block";
    console.log(sides[random]);
  }
}
function gameAgain() {
  location.reload();
}
