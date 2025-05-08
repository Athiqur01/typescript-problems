1.What are some differences between interfaces and types in TypeScript?
Interface: In TypeScript, an interface is used to define the shape of an object, specifying what properties and methods it should have.

interface User {
name: string;
id: number
}
const user: User={
name: "Jafar",
id: 2345
}

Type: In TypeScript, a type is another way to define the shape of data, similar to an interface, but more flexible. It can represent:Object shapes, Union types, Intersections, Primitive aliases, Tuples.
Example: type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1245,
  name: "Amin"
};

Difference between Interface and Type
•	interface is best for objects and can be extended using extends.
•	type can represent primitives, unions, and more complex types but can't be reopened.

2. What is the use of the keyof keyword in TypeScript? Provide an example.
The keyof keyword in TypeScript is used to get a union of all the keys of a given type or interface. It’s often used in generic programming to create type-safe utilities.
Example:
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person
const key: PersonKeys = "name"