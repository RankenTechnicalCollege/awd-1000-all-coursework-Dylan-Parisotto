const tasks = [
	"Review lecture notes",
	"Complete JavaScript practice",
	"Submit homework",
	"Read one chapter",
	"Prepare for quiz"
];

const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");

function renderTasks() {
	todoList.innerHTML = "";

	tasks.forEach((task, index) => {
		const item = document.createElement("li");
		item.className = "list-group-item d-flex justify-content-between align-items-center";

		const taskText = document.createElement("span");
		taskText.textContent = task;

		const removeButton = document.createElement("button");
		removeButton.type = "button";
		removeButton.className = "btn btn-sm btn-outline-danger";
		removeButton.textContent = "Remove";
		removeButton.addEventListener("click", () => {
			tasks.splice(index, 1);
			renderTasks();
		});

		item.appendChild(taskText);
		item.appendChild(removeButton);
		todoList.appendChild(item);
	});
}

todoForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const newTask = taskInput.value.trim();

	if (!newTask) {
		taskInput.classList.add("is-invalid");
		return;
	}

	taskInput.classList.remove("is-invalid");
	tasks.push(newTask);
	taskInput.value = "";
	taskInput.focus();
	renderTasks();
});

taskInput.addEventListener("input", () => {
	if (taskInput.value.trim()) {
		taskInput.classList.remove("is-invalid");
	}
});

renderTasks();
