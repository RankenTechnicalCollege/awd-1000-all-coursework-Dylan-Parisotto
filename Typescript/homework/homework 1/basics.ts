// Task 1 - Type annotations
let studentName: string = "Dylan Parisotto";
let studentAge: number = 20;
let isFullTime: boolean = true;
let courseGrades: number[] = [88, 92, 79, 95];
let studentCoordinates: [number, number] = [4, 7];

console.log("Student:", studentName);
console.log("Age:", studentAge);
console.log("Full-time:", isFullTime);
console.log("Seat position:", studentCoordinates);

// Task 2 - Average in array
function averageGrade(grades: number[]): number {
  let total: number = 0;

  for (const grade of grades) {
    total += grade;
  }

  return total / grades.length;
}

const classAverage: number = averageGrade(courseGrades);
console.log("Average grade:", classAverage);

// Task 3 - Fix bugs
// Fix: price was first inferred as a string, so assigning a number caused a type mismatch.
let price: number = 19.99;
price = 19.99;

// Fix: parameter n needed a number type annotation for strict mode.
function double(n: number): number {
  return n * 2;
}

// Fix: scores is a number array, so "30" must be a number literal.
let scores: number[] = [10, 20, 30];

// Fix: tuple second value must be a number, not a string.
let userInfo: [string, number] = ["Sam", 22];

// Fix: null is only allowed when included in the union type under strict null checks.
let maybeName: string | null = null;

console.log("Price:", price);
console.log("Double 6:", double(6));
console.log("Scores:", scores);
console.log("User info:", userInfo);
console.log("Maybe name:", maybeName);
