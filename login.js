 //Query Selectors for Username, password, and login button

const loginForm = document.querySelector("#login-form");
const loginBtn = document.querySelector("#login");
const signupBtn = document.querySelector("#sign-up");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const messageDiv = document.querySelector("#message");
function showMessage(text) {
    messageDiv.textContent = text;
}
let currentAction = "login";

//Click event for log-in button 
loginBtn.addEventListener("click", function () {
  currentAction = "login";
});

signupBtn.addEventListener("click", function () {
  currentAction = "signup";
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (currentAction === "signup") {
    const foundUser = users.find(function (user) {
      return user.username === username;

    });

    if (foundUser) {
      showMessage("Username already exists.");
      return;
    }

    if (username.length < 3) {
      showMessage("Username must be at least 3 characters long.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
      showMessage("Password must have 8 characters, 1 capital letter, 1 number, and 1 symbol.");
      return;
    }

    users.push({
      username: username,
      password: password,
      entries: []
    });

    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
    console.log(JSON.parse(localStorage.getItem("users")));
    showMessage("Signup successful!");
    return;
  }

  if (currentAction === "login") {
    const foundUser = users.find(function (user) {
      return user.username === username;
    });

    if (!foundUser) {
      showMessage("User not found.");
      return;
    }

    if (foundUser.password === password) {
      showMessage("Login successful!");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
    } else {
      showMessage("Wrong password.");
    }
  }
});
