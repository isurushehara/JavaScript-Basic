function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// Rest operator in object destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

const { name, ...rest } = person;
console.log(name); // Output: John
console.log(rest); // Output: { age: 30, city: 'New York', country: 'USA' }