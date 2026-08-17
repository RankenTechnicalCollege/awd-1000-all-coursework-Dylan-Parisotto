"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetStudent(name, honorific) {
    const greeting = honorific ?? "Student";
    return `Hello, ${greeting} ${name}!`;
}
console.log(greetStudent("Dylan", "Professor"));
console.log(greetStudent("Dylan"));
function totalCredits(...credits) {
    return credits.reduce((total, credit) => total + credit, 0);
}
console.log(totalCredits(3, 4, 5, 6));
function formatScore(score) {
    if (score >= 90) {
        return "A";
    }
    if (score >= 80) {
        return "B";
    }
    return "C";
}
function applyToScores(scores, fn) {
    return scores.map(fn);
}
console.log(applyToScores([95, 87, 72], formatScore));
