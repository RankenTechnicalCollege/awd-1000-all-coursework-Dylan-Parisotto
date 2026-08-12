const favoriteMovies = ["The Shawshank Redemption", "The Matrix", "Back to the Future"];

const movieInput = document.getElementById("movieInput");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieList = document.getElementById("movieList");

function renderMovies() {
	movieList.innerHTML = "";

	for (let i = 0; i < favoriteMovies.length; i++) {
		const listItem = document.createElement("li");
		listItem.textContent = favoriteMovies[i];
		movieList.appendChild(listItem);
	}
}

addMovieBtn.addEventListener("click", function () {
	const newMovie = movieInput.value.trim();

	if (newMovie !== "") {
		favoriteMovies.push(newMovie);
		movieInput.value = "";
		renderMovies();
	}
});

renderMovies();
