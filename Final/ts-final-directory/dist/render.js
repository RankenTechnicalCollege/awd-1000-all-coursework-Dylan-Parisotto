"use strict";
function renderDirectory(students) {
    const directory = document.getElementById("directory");
    if (directory === null) {
        return;
    }
    directory.innerHTML = "";
    if (students.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "empty-state";
        emptyState.textContent = "No students match your filters yet.";
        directory.append(emptyState);
        return;
    }
    students.forEach((student) => {
        directory.append(createStudentCard(student));
    });
}
function renderSkillOptions(students) {
    const datalist = document.getElementById("skill-options");
    if (datalist === null) {
        return;
    }
    datalist.innerHTML = "";
    const uniqueSkills = [...new Set(students.flatMap((student) => student.skills))].sort((a, b) => a.localeCompare(b));
    uniqueSkills.forEach((skill) => {
        const option = document.createElement("option");
        option.value = skill;
        datalist.append(option);
    });
}
function renderResultsCount(visible, total) {
    const results = document.getElementById("results-count");
    if (results === null) {
        return;
    }
    results.value = `Showing ${visible} of ${total} students`;
    results.textContent = results.value;
}
function renderBioCount(length, maxLength) {
    const bioCount = document.getElementById("bio-count");
    if (bioCount === null) {
        return;
    }
    bioCount.value = `${length} / ${maxLength} characters`;
    bioCount.textContent = bioCount.value;
    bioCount.classList.toggle("warning", length > maxLength * 0.85);
}
function createStudentCard(student) {
    const article = document.createElement("article");
    article.className = "student-card";
    const photoWrap = document.createElement("div");
    photoWrap.className = "photo-wrap";
    if (student.photoUrl === undefined || student.photoUrl.trim() === "") {
        const fallback = document.createElement("div");
        fallback.className = "fallback-photo";
        fallback.setAttribute("aria-hidden", "true");
        fallback.textContent = getInitials(student);
        photoWrap.append(fallback);
    }
    else {
        const image = document.createElement("img");
        image.src = student.photoUrl;
        image.alt = `${student.firstName} ${student.lastName}`;
        image.loading = "lazy";
        image.addEventListener("error", () => {
            photoWrap.innerHTML = "";
            const fallback = document.createElement("div");
            fallback.className = "fallback-photo";
            fallback.setAttribute("aria-hidden", "true");
            fallback.textContent = getInitials(student);
            photoWrap.append(fallback);
        });
        photoWrap.append(image);
    }
    const body = document.createElement("div");
    body.className = "card-body";
    const heading = document.createElement("h3");
    heading.className = "student-name";
    heading.textContent = `${student.firstName} ${student.lastName}`;
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${student.program} | ${student.year}`;
    const email = document.createElement("p");
    email.className = "meta";
    email.textContent = student.email;
    const skills = document.createElement("p");
    skills.className = "skills-row";
    skills.textContent = `Skills: ${student.skills.join(", ") || "No skills listed"}`;
    const bio = document.createElement("p");
    bio.className = "bio";
    bio.textContent = student.bio;
    const gpa = document.createElement("p");
    gpa.className = "meta";
    gpa.textContent = student.gpa !== undefined ? `GPA: ${student.gpa.toFixed(2)}` : "GPA: N/A";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.dataset.deleteId = String(student.id);
    deleteButton.textContent = "Delete";
    body.append(heading, meta, email, skills, bio, gpa, deleteButton);
    article.append(photoWrap, body);
    return article;
}
function getInitials(student) {
    const firstInitial = student.firstName.charAt(0).toUpperCase();
    const lastInitial = student.lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
}
