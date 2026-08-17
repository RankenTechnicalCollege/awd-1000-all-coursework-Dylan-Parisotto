"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseUser(json) {
    const result = JSON.parse(json);
    return result;
}
console.log(parseUser('{"id": 1, "name": "Ada"}'));
const roster = [
    { id: 1, name: "Ada" },
    { id: 2, name: "John" }
];
function getStudentName(id) {
    const student = roster.find(s => s.id === id);
    return student.name;
}
console.log(getStudentName(1));
