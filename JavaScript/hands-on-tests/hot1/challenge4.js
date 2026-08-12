const printOddsBtn = document.getElementById("printOddsBtn");
const oddNumbersOutput = document.getElementById("oddNumbersOutput");

printOddsBtn.addEventListener("click", function () {
	const oddNumbers = [];

	for (let number = 1; number < 100; number += 2) {
		oddNumbers.push(number);
	}

	oddNumbersOutput.textContent = oddNumbers.join(", ");
});
