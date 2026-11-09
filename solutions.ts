// ============= Problem 01 ==========

function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));



// ============= Problem 02 ==========

function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } 
    
    if (typeof value === "number") {
        return value * 10;
    } 
    
    if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }

    return value;
}


console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));



