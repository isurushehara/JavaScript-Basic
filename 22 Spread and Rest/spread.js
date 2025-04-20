// Spreading an array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Spreading an object
const person = { name: 'John', age: 25 };
const updatedPerson = { ...person, city: 'New York' };
console.log(updatedPerson); // Output: { name: 'John', age: 25, city: 'New York' }

// Spreading in function arguments
const sum = (a, b, c) => a + b + c;
const values = [10, 20, 30];
console.log(sum(...values)); // Output: 60