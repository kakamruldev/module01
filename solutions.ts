// ============= Problem 01 ==========

function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
