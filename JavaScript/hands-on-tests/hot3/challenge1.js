const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

function showMessage(text, isSuccess) {
	message.textContent = text;
	message.classList.remove("text-danger", "text-success");
	message.classList.add(isSuccess ? "text-success" : "text-danger");
}

loginForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const email = emailInput.value.trim();
	const password = passwordInput.value;

	if (!email || !password) {
		showMessage("You seem to have forgotten your username and password.", false);
		return;
	}

	if (email === "admin@example.com" && password === "password") {
		showMessage("Welcome back Admin!", true);
		return;
	}

	showMessage("That email and password doesn't seem to be right. Try again.", false);
});
