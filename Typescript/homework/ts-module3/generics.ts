function getLastItem<T>(items: T[]): T | undefined {
    return items[items.length - 1];
}

const numbers = [10, 20, 30, 40, 50];
const words = ["apple", "banana", "orange"];

console.log(getLastItem(numbers));
console.log(getLastItem(words));


function describeCollection<T extends { length: number }>(collection: T): string {
    return `This collection has ${collection.length} items.`;
}

console.log(describeCollection("Hello"));
console.log(describeCollection([1, 2, 3, 4, 5]));

// describeCollection(42); This would not compile because a number does not have a length property.