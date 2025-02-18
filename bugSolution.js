function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: Invalid input: Arguments must be numbers
console.log(foo(1, 2));   // Output: 3

//Alternative using Number()
function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(1,'2')); // Output: 3