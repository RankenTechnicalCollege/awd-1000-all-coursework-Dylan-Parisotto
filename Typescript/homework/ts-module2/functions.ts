function greetStudent(name: string, honorific?: string): string {
  const greeting = honorific ?? "Student";
  return `Hello, ${greeting} ${name}!`;
}
console.log(greetStudent("Dylan", "Professor"));
console.log(greetStudent("Dylan"));
function totalCredits(...credits: number[]): number {
  return credits.reduce((total, credit) => total + credit, 0);
}
console.log(totalCredits(3, 4, 5, 6));
type ScoreFormatter = (score: number) => string;
function formatScore(score: number): string {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  return "C";
}
function applyToScores(scores: number[], fn: ScoreFormatter): string[] {
  return scores.map(fn);
}
console.log(applyToScores([95, 87, 72], formatScore));