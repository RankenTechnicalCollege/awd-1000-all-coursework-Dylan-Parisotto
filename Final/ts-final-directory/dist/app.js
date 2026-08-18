"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("student-form");
    const directory = document.getElementById("directory");
    const searchInput = document.getElementById("search");
    const filterProgramSelect = document.getElementById("filter-program");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const photoUrlInput = document.getElementById("photo-url");
    const gpaInput = document.getElementById("gpa");
    const skillsInput = document.getElementById("skills");
    const programSelect = document.getElementById("program");
    const classYearSelect = document.getElementById("class-year");
    const bioTextarea = document.getElementById("bio");
    const formError = document.getElementById("form-error");
    if (form === null ||
        directory === null ||
        searchInput === null ||
        filterProgramSelect === null ||
        firstNameInput === null ||
        lastNameInput === null ||
        emailInput === null ||
        photoUrlInput === null ||
        gpaInput === null ||
        skillsInput === null ||
        programSelect === null ||
        classYearSelect === null ||
        bioTextarea === null ||
        formError === null) {
        return;
    }
    const initialStudents = loadStudentsFromStorage(seedStudents);
    const repository = new StudentRepository(initialStudents);
    let nextId = repository.getAllStudents().reduce((maxId, student) => Math.max(maxId, student.id), 0) + 1;
    populateSelect(programSelect, PROGRAM_OPTIONS);
    populateSelect(classYearSelect, CLASS_YEAR_OPTIONS);
    populateFilterSelect(filterProgramSelect, PROGRAM_OPTIONS);
    renderSkillOptions(repository.getAllStudents());
    renderBioCount(bioTextarea.value.length, Number(bioTextarea.maxLength));
    refreshDirectory();
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const bio = bioTextarea.value.trim();
        const program = programSelect.value;
        const year = classYearSelect.value;
        const skills = skillsInput.value
            .split(",")
            .map((entry) => entry.trim())
            .filter((entry) => entry.length > 0);
        if (firstName === "" || lastName === "") {
            formError.textContent = "First and last name are required before saving.";
            return;
        }
        const gpa = parseGpaValue(gpaInput.value.trim());
        if (gpa === null) {
            formError.textContent = "GPA must be a number between 0.00 and 4.00.";
            return;
        }
        const student = {
            id: nextId,
            firstName,
            lastName,
            program,
            year,
            email,
            bio,
            skills,
            gpa,
            photoUrl: photoUrlInput.value.trim() || undefined
        };
        repository.addStudent(student);
        nextId += 1;
        saveStudentsToStorage(repository.getAllStudents());
        renderSkillOptions(repository.getAllStudents());
        refreshDirectory();
        form.reset();
        renderBioCount(0, Number(bioTextarea.maxLength));
        formError.textContent = "";
        firstNameInput.focus();
    });
    form.addEventListener("reset", () => {
        window.setTimeout(() => {
            formError.textContent = "";
            renderBioCount(0, Number(bioTextarea.maxLength));
        }, 0);
    });
    bioTextarea.addEventListener("input", () => {
        renderBioCount(bioTextarea.value.length, Number(bioTextarea.maxLength));
    });
    searchInput.addEventListener("input", () => {
        refreshDirectory();
    });
    filterProgramSelect.addEventListener("change", () => {
        refreshDirectory();
    });
    directory.addEventListener("click", (event) => {
        const target = event.target;
        const deleteButton = target.closest("button[data-delete-id]");
        if (deleteButton === null) {
            return;
        }
        const id = Number(deleteButton.dataset.deleteId);
        if (!Number.isInteger(id)) {
            return;
        }
        const shouldDelete = window.confirm("Delete this student from the directory?");
        if (!shouldDelete) {
            return;
        }
        const deleted = repository.removeStudent(id);
        if (!deleted) {
            return;
        }
        saveStudentsToStorage(repository.getAllStudents());
        renderSkillOptions(repository.getAllStudents());
        refreshDirectory();
    });
    function refreshDirectory() {
        const term = searchInput.value.trim().toLowerCase();
        const selectedProgram = filterProgramSelect.value;
        const allStudents = repository.getAllStudents();
        const filteredStudents = repository.findStudents((student) => {
            const name = `${student.firstName} ${student.lastName}`.toLowerCase();
            const bioMatch = student.bio.toLowerCase();
            const skillMatch = student.skills.join(" ").toLowerCase();
            const matchesTerm = term === "" || name.includes(term) || bioMatch.includes(term) || skillMatch.includes(term);
            const matchesProgram = selectedProgram === "all" || student.program === selectedProgram;
            return matchesTerm && matchesProgram;
        });
        renderDirectory(filteredStudents);
        renderResultsCount(filteredStudents.length, allStudents.length);
    }
});
function populateSelect(select, values) {
    select.innerHTML = "";
    values.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.append(option);
    });
}
function populateFilterSelect(select, values) {
    select.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Programs";
    select.append(allOption);
    values.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.append(option);
    });
}
function parseGpaValue(input) {
    if (input === "") {
        return undefined;
    }
    const parsed = Number(input);
    if (Number.isNaN(parsed) || parsed < 0 || parsed > 4) {
        return null;
    }
    return parsed;
}
