let attempts = 0;
let score = 0;

function guess(userGuess) {
  // increasing attempts
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  // Generating a random number
  const random_number = Math.floor(Math.random() * 100) + 1;
  // determining the correct answer
  const correctAnswer = random_number % 2 == 0 ? "even" : "odd";
  // SFX Function
  function sfx(isCorrect) {
    let audio = document.getElementById("correct");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
  if (correctAnswer == userGuess) {
    // Update the display
    document.getElementById("display").innerHTML =
      "correct the number answer is " + random_number;
    // Increasing the player score
    score++;
    // Increasing the player score field
    document.getElementById("Score").innerHTML = score;

    // Playing the SFX
    sfx(true);
  } else {
    // Update the display
    document.getElementById("display").innerHTML =
      "wrong! the number is " + random_number;
    // Playing the SFX
    sfx(false);
  }
}
