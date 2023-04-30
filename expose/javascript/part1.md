# Part 1 Solutions
1. Line 9 will print "values added: 20"

2. Line 13 will print "final result: 20"

3. Line 9 will print "values added: 20"

4. Line 13 will cause an error because `result` is a `let` variable that has a limited block scope and `result` is referenced again outside of its scope.

5. Line 9 will cause an error because `result` is a `const` variable type that cannot be reassigned. However, in line 7, `result` an attempt to update its value is made, which will throw an error.

6. Line 13 will throw an error because a `result` is a `const` type and has a block scope. An error will be thrown since it is referenced again on line 13, which is outside of its scope.