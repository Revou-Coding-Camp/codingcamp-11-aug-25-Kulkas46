welcomeSpeech();

/**
 * Prompts the user for their name and displays it in the greeting element.
 */
function welcomeSpeech() {
  let userName = prompt("May I know your name?");
  if (userName != "") {
    document.getElementById("user").textContent = " " + userName;
  }
}

// Timer
function updateTime() {
  document.getElementById("currentTime").textContent =
    new Date().toLocaleString();
}
// Timer Update
updateTime();
setInterval(updateTime, 1000);

// Data dari form ke messages
function sendMessage() {
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birth").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const msg = document.getElementById("message").value;

  document.getElementById("msgName").textContent = name;
  document.getElementById("msgBirth").textContent = birthdate;
  document.getElementById("msgGender").textContent = gender;
  document.getElementById("msgMessage").textContent = msg;

  var form = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);
}
