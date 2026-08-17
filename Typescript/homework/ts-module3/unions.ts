type Grade = "A" | "B" | "C" | "D" | "F";

function gradePoints(grade: Grade): number {
    switch (grade) {
        case "A":
            return 4;
        case "B":
            return 3;
        case "C":
            return 2;
        case "D":
            return 1;
        case "F":
            return 0;
    }
}

console.log(gradePoints("A"));


type MultipleChoice = {
    type: "multiple-choice";
    totalQuestions: number;
    correctAnswers: number;
};

type Essay = {
    type: "essay";
    wordCount: number;
    rubricScore: number; // out of 10
};

type Assignment = MultipleChoice | Essay;


function calculateScore(assignment: Assignment): number {
    switch (assignment.type) {
        case "multiple-choice":
            return Math.round(
                (assignment.correctAnswers / assignment.totalQuestions) * 100
            );

        case "essay":
            return assignment.rubricScore * 10;
    }
}


const multipleChoice: MultipleChoice = {
    type: "multiple-choice",
    totalQuestions: 20,
    correctAnswers: 18
};

const essay: Essay = {
    type: "essay",
    wordCount: 500,
    rubricScore: 8
};

console.log(calculateScore(multipleChoice));
console.log(calculateScore(essay));