"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GradeBook {
    studentName;
    scores;
    constructor(studentName, scores = []) {
        this.studentName = studentName;
        this.scores = scores;
    }
    addScore(score) {
        if (score < 0 || score > 100) {
            throw new Error("Score must be between 0 and 100.");
        }
        this.scores.push(score);
    }
    getAverage() {
        if (this.scores.length === 0) {
            return 0;
        }
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }
    getLetterGrade() {
        const average = this.getAverage();
        if (average >= 90) {
            return "A";
        }
        else if (average >= 80) {
            return "B";
        }
        else if (average >= 70) {
            return "C";
        }
        else if (average >= 60) {
            return "D";
        }
        else {
            return "F";
        }
    }
}
const myGradeBook = new GradeBook("Dylan");
myGradeBook.addScore(95);
myGradeBook.addScore(87);
myGradeBook.addScore(92);
console.log(myGradeBook.getAverage());
console.log(myGradeBook.getLetterGrade());
// console.log(myGradeBook.scores); This would not compile because scores is private.
