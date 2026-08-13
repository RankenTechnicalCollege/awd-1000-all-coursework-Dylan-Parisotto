// TypeScript - types catch the typo immediately
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return 'Hello, ' + user.name;
  //                     ^^^^
  // Error: Property 'naem' does not exist on type 'User'.
  // Did you mean 'name'?
}

const myUser: User = {
  name: "Alice",
  age: 28
};

console.log(greet(myUser));
