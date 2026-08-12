const ageInput = document.getElementById("ageInput");
const verifyAgeBtn = document.getElementById("verifyAgeBtn");
const ageMessage = document.getElementById("ageMessage");

function displayMessage(message) {
	ageMessage.textContent = message;
}

verifyAgeBtn.addEventListener("click", function () {
	const ageText = ageInput.value.trim();

	if (!/^\d+$/.test(ageText)) {
		displayMessage("Please enter your age!");
		return;
	}

	const age = Number(ageText);

	if (age < 1 || age > 200) {
		displayMessage("Age out of range!");
		return;
	}

	if (age >= 21) {
		displayMessage("Welcome to the venue!");
		return;
	}

	displayMessage("You're not old enough!");
});
