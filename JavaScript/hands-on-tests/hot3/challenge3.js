const upvoteButton = document.getElementById("upvoteButton");
const downvoteButton = document.getElementById("downvoteButton");
const upvoteCount = document.getElementById("upvoteCount");
const downvoteCount = document.getElementById("downvoteCount");
const scoreCount = document.getElementById("scoreCount");

let totalUpvotes = 0;
let totalDownvotes = 0;

function renderCounts() {
	upvoteCount.textContent = totalUpvotes;
	downvoteCount.textContent = totalDownvotes;
	scoreCount.textContent = totalUpvotes - totalDownvotes;
}

upvoteButton.addEventListener("click", () => {
	totalUpvotes += 1;
	renderCounts();
});

downvoteButton.addEventListener("click", () => {
	totalDownvotes += 1;
	renderCounts();
});

renderCounts();
