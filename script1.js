let images = ["dice-01.svg", "dice-02.svg", "dice-03.svg", "dice-04.svg", "dice-05.svg", "dice-06.svg"];

function rollDice() {
  let dieOneValue = Math.floor(Math.random() * 6);
  let dieTwoValue = Math.floor(Math.random() * 6);
  let totalRoll = dieOneValue + 1 + dieTwoValue + 1; // Add 1 to get actual values (1-6)

  return {
    dieOneValue,
    dieTwoValue,
    totalRoll
  };
}

function predictRoll() {
  let userPrediction = parseInt(document.getElementById("userPrediction").value);

  if (isNaN(userPrediction)) {
    alert("Please enter a valid number between 2 and 12.");
    return;
  }

  if (userPrediction < 2 || userPrediction > 12) {
    alert("Prediction must be between 2 and 12.");
    return;
  }

  // During dice roll animation, add the "shake" class
  document.querySelector("#die-1").classList.add("shake");
  document.querySelector("#die-2").classList.add("shake");

  setTimeout(function() {
    // After animation, remove "shake" class and update dice images
    document.querySelector("#die-1").classList.remove("shake");
    document.querySelector("#die-2").classList.remove("shake");
    let rollResult = rollDice();
    document.querySelector("#die-1").setAttribute("src", images[rollResult.dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[rollResult.dieTwoValue]);

    let resultText = "";
    if (userPrediction === rollResult.totalRoll) {
      resultText = "Congratulations! Your prediction of " + userPrediction + " is correct.";
    } else {
      resultText = "The total roll is " + rollResult.totalRoll + ". Your prediction of " + userPrediction + " was incorrect.";
    }

    document.getElementById("result").innerHTML = resultText;
  }, 700); // Adjust timeout to match animation duration
}

// Call rollDice() initially to display dice images (
