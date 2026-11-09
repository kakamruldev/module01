**Title:** Type Narrowing in TypeScript

**Introduction:** Type narrowing refers to refining the type of a variable within a conditional block based on runtime checks.

**Details:**
`Using typeof type:`
typeof type guards use typeof to distinguish between different primitive types. 

`For Example:`
function myFunction(value: string | number) {
if (typeof value === 'string') {
        console.log(value.toUpperCas());
    } 
    else {
        console.log(value.toFixed(2));
    }

}
myFunction("GeeksforGeeks");
myFunction(3.14159);


`Using in operator:`
in operator checks for the existence of a property in an object. 

`For Example:`
type User = { email: string };
type Admin = { role: string };

function check(value: User | Admin) {
    if ("email" in value) {
        return value.email;
    }
    return value.role;
}

`Using in operator:`
it's check whether an object belongs to a particular class.

`For Example:`
class Dog {
    bark() {
        return "Woof!";
    }
}

function sound(animal: Dog | Date) {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    return animal.toDateString();
}


**conclusion:** Mainly Type Narrowing reduces errors and improve safety.
