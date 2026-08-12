const printMultiplesBtn = document.getElementById("printMultiplesBtn");
const multiplesOutput = document.getElementById("multiplesOutput");

printMultiplesBtn.addEventListener("click", function () {
	const multiples = [];

	for (let number = 15; number < 100; number += 15) {
		multiples.push(number);
	}

	multiplesOutput.textContent = multiples.join(", ");
});
  