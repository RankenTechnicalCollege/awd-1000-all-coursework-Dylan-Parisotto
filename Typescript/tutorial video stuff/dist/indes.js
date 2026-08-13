"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
    return 'Hello, ' + user.name;
    //                     ^^^^
    // Error: Property 'naem' does not exist on type 'User'.
    // Did you mean 'name'?
}
const myUser = {
    name: "Alice",
    age: 28
};
console.log(greet(myUser));
