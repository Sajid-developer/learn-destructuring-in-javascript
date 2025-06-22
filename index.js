============================================================
💡 Let's learn Destructuring in JavaScript
============================================================


What is Destructuring? 🤔

-> Destructuring means breaking down arrays or objects and extracting their values into variables, in a clean and short way.

It saves you from writing long and repetitive code like this: 👇🏼

let user = { name: "Sajid", age: 25 };
let name = user.name;
let age = user.age;


With destructuring: 👇🏼

let { name, age } = user;

_______________________________________________________


✨ 1. Array Destructuring


✅ Basic Syntax:

const arr = [value1, value2];
const [a, b] = arr;


🔹 Example 1: Simple use

const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30


🔹 Example 2: Skip Elements

const colors = ["red", "green", "blue"];

const [, , thirdColor] = colors;

console.log(thirdColor); // "blue"



🔹 Example 3: Default Values

const scores = [90];

const [math = 0, science = 0] = scores;

console.log(math);    // 90
console.log(science); // 0


🔹 Example 4: Swapping Variables

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5

___________________________________________________________


✨ 2. Object Destructuring

✅ Basic Syntax:

const obj = { key1: value1, key2: value2 };
const { key1, key2 } = obj;


🔹 Example 1: Simple use

const user = {
  name: "Sajid",
  age: 24
};

const { name, age } = user;

console.log(name); // "Sajid"
console.log(age);  // 24


🔹 Example 2: Rename variables

const person = {
  fullName: "Sajid Alam",
  location: "India"
};

const { fullName: name, location: country } = person;

console.log(name);    // "Sajid Alam"
console.log(country); // "India"


🔹 Example 3: Default values

const user = {
  name: "Sajid"
};

const { name, age = 18 } = user;

console.log(name); // "Sajid"
console.log(age);  // 18 (default)


🔹 Example 4: Nested object destructuring

const profile = {
  name: "Sajid",
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

const {address: { city, pin }} = profile;

console.log(city); // "Mumbai"
console.log(pin);  // 400001

______________________________________________________








