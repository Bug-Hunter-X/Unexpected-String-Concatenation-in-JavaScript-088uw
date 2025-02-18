# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript bug caused by loose typing. The `foo` function is intended to add two numbers. However, if one of the arguments is a string, JavaScript performs string concatenation instead of numerical addition.

## Bug
The `bug.js` file contains the problematic code.  The function `foo` concatenates the number 1 with the string '2', producing an unexpected result.

## Solution
The `bugSolution.js` file shows how to fix the bug by explicitly type-checking or converting the inputs to numbers before performing the addition.

This issue highlights the importance of careful type handling in JavaScript to avoid subtle errors and unexpected behavior.