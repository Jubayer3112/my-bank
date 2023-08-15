const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "abc@gmail.com" && password === "secrate") {
    window.location.href = "bank.html";
  } else {
    warningAlert.style.display = "block";
  }
});
const warningAlert = document.getElementById("warning");
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", function () {
  warningAlert.style.display = "none";
});
