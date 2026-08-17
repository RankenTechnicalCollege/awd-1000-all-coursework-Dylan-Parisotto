interface Course {
  id: number;
  title: string;
  readonly courseCode: string;
  credits?: number;
}

const course1: Course = {
  id: 1,
  title: "TypeScript Module 2",
  courseCode: "TS-MOD2"
};


interface OnlineCourse extends Course {
  platformUrl: string;
}

const course2: OnlineCourse = {
  id: 2,
  title: "Advanced TypeScript",
  courseCode: "TS-ADV",
  credits: 4,
  platformUrl: "https://example.com/typescript"
};

console.log(course1);
console.log(course2);