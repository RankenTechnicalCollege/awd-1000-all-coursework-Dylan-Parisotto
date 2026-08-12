const numberInput = document.getElementById("numberInput");
const showLyricBtn = document.getElementById("showLyricBtn");
const lyricMessage = document.getElementById("lyricMessage");

function displayMessage(message) {
	lyricMessage.textContent = message;
}

showLyricBtn.addEventListener("click", function () {
	const inputValue = numberInput.value.trim();

	if (inputValue === "") {
		displayMessage("You didn't enter a valid number.");
		return;
	}

	const numericValue = Number(inputValue);

	if (Number.isNaN(numericValue)) {
		displayMessage("Please enter a number, not a word.");
		return;
	}

	if (numericValue === 1) {
		displayMessage("One is the loneliest number that you'll ever do.");
		return;
	}

	if (numericValue === 2) {
		displayMessage("Two can be as bad as one. It's the loneliest number since the number one.");
		return;
	}

	if (numericValue === 3) {
		displayMessage("There is no three.");
		return;
	}

	displayMessage("You didn't enter a valid number.");
});
