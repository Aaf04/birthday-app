
function checkPasscode() {
  const enteredCode = document.getElementById("passcode").value;
  const correctCode = "2005";  // Change this to your secret code

  if (enteredCode === correctCode) {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("app-screen").style.display = "block";
  } else {
    document.getElementById("error-message").innerText = "Wrong code! Try again.";
  }
}

function playSong() {
  const audio = document.getElementById("song");
  audio.play();
  alert("Enjoy your birthday vibes! 🎶🎂");
}
