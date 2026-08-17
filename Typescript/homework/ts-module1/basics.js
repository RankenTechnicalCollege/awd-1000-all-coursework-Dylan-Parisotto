"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1 - Type annotations
let studentName = "Dylan Parisotto";
let studentAge = 20;
let isFullTime = true;
let courseGrades = [88, 92, 79, 95];
let studentCoordinates = [4, 7];
console.log("Student:", studentName);
console.log("Age:", studentAge);
console.log("Full-time:", isFullTime);
console.log("Seat position:", studentCoordinates);
// Task 2 - Average in array
function averageGrade(grades) {
    let total = 0;
    for (const grade of grades) {
        total += grade;
    }
    return total / grades.length;
}
const classAverage = averageGrade(courseGrades);
console.log("Average grade:", classAverage);
// Task 3 - Fix bugs
// Fix: price was first inferred as a string, so assigning a number caused a type mismatch.
let price = 19.99;
price = 19.99;
// Fix: parameter n needed a number type annotation for strict mode.
function double(n) {
    return n * 2;
}
// Fix: scores is a number array, so "30" must be a number literal.
let scores = [10, 20, 30];
// Fix: tuple second value must be a number, not a string.
let userInfo = ["Sam", 22];
// Fix: null is only allowed when included in the union type under strict null checks.
let maybeName = null;
console.log("Price:", price);
console.log("Double 6:", double(6));
console.log("Scores:", scores);
console.log("User info:", userInfo);
console.log("Maybe name:", maybeName);
