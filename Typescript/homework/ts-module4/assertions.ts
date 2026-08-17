interface ParsedUser {
  id: number;
  name: string;
}

function parseUser(json: string): ParsedUser {
  const result = JSON.parse(json) as ParsedUser;
  return result;
}

console.log(parseUser('{"id": 1, "name": "Ada"}'));


type Student = {
  id: number;
  name: string;
};

const roster: Student[] = [
  { id: 1, name: "Ada" },
  { id: 2, name: "John" }
];

function getStudentName(id: number): string {
  const student = roster.find(s => s.id === id)!;
  return student.name;
}

console.log(getStudentName(1));
