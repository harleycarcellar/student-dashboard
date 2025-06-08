import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { app } from "../../firebase/firebase-config.js";

const auth = getAuth(app);
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

// Spinner
const spinner = document.createElement("div");
spinner.classList.add("spinner");
form.appendChild(spinner);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMsg.textContent = "";
  emailInput.classList.remove("invalid");
  passwordInput.classList.remove("invalid");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    if (!email) emailInput.classList.add("invalid");
    if (!password) passwordInput.classList.add("invalid");
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  spinner.classList.add("show-spinner");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch((err) => {
      errorMsg.textContent = err.message;
      spinner.classList.remove("show-spinner");
    });
});
