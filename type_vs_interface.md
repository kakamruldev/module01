**Title:** Type Aliases vs Interfaces Type

**Introduction:** Type aliases and interfaces are used to define custom types in TypeScript. While they share many similarities, they differ in features such as declaration merging, type composition, and supported use cases.

**Difference:**
`type Aliases:`
- Declared using the type keyword.
- Can define primitives, objects, unions and function types.
- Supports tuple types.
- Supports union types (|).

`Interfaces:`
- Declared using the interface keyword.
- Primarily defines the structure of objects.
- Supports declaration merging.
- Does not directly support union types.
- Does not directly support tuple types.


**Code Example:**

`Type Alias:`
type User = {
    name: string;
    age: number;
};

type Status = "success" | "failed";

`Interface:`
interface User {
    name: string;
    age: number;
}

interface Admin extends User {
    role: string;
}

**conclusion:** Both look like similar. But some point they are different. Like that,  type Aliases are suitable for union, tuples, primitive types, funtion types and object types. Interfaces are primarily designed for defining object shapes and support extension and declaration merging.