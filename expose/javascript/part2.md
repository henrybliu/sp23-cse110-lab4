# Part 2 Solutions
1. Line 12 will print 3 because after iterating through the length of the array prices (3), `i` will assume the values 0, 1, and 2 before exiting the for-loop with a value of 3. `i` is also a `var` variable that has a function scope.

2. Line 13 will print 150. `discountedPrice` was last updated to be the discounted price of 300, which is 150. Since `discountedPrice` is a `var` variable, it also has function scope.

3. Line 14 will print `150`. `finalPrice` is a `var` variable that has function scope. `finalPrice` is 150*100/100 and then rounded to the nearest integer so its value is 150.

4. The function will return `[50,100,150]` because the `dicsounted` array is pushed with the newly calculated prices and is a `var` variable with function scope.

5. Line 12 will cause an error because `i` is a `let` variable with block scope. Line 12 calls on `i` outside of its scope.
6. Line 13 will cause an error because `discountedPrice` is a `let` variable with block scope and Line 13 calls on it outside of the scope of `discountedPrice`.

7. Line 14 will print `150` because `300` was the last price to have calculations performed on and its newly discounted price would be `150`. `finalPrice` is a `let` variable with block scope that retains its value and is able to be referenced at Line 14.

8. The function will return `[50, 100, 150]` becuase `discounted` is a `let` variable with block scope and there are no issues with variable scope in this function.

9. Line 11 will cause an error becuase `i` is a `let` variable and Line 11 references it outside of its scope.

10. Line 12 will return `3`. `length` is a `const` variable and has block scope. Line 12 references `length` within its scope.

11. The function will return `[50,100,150]`. Although constants' values cannot be reassigned, there are exceptions to objects and arrays. There are no errors because arrays can have items updated and removed.

12. [A] student.name

    [B] student["Grad Year"]

    [C] student.greeting()

    [D] student['Favorite Teacher'].name

    [E] student.courseLoad[0]

13. [A] **Answer: '32'.** The `+` operator can be used to add or concatentate. Because of one of the types (`'3'` and `2`) is a `string`, `2` will be converted to a `string` and concatenated to `'3'`.

    [B] **Answer: 1.** The `-` operator is only used for arithmetic. `'3'` will be converted to an number and 3-2 will be performed.

    [C] **Answer: 3.** `null` is evaluated as 0. When adding, the calculation performed will be 3+0.

    [D] **Answer: '3null'.** The `+` operator will be perform concatentation in this example. `null` will be converted to a string.

    [E] **Answer: 4.** `true` is evalued to 1. When adding, the calculation performed will be 1+3.

    [F] **Answer: 0.** `false` and `null` will both be converted to the value 0. The example then computes 0+0.

    [G] **Answer: '3undefined'.** The string `'3'` will cause the `+` operator to perform concatenation. `'undefined'` will be converted to a `string`.

    [H] **Answer: NaN.** The `-` operator is only used for subtraction. `undefined` cannot be converted to a number type so the output will be 'Not a Number'.

14. [A] **Answer: `true`.** In Javascript, the `'2'` is converted to a number since `'2'` and `1` are of different data types. The comparison then becomes 2 > 1.

    [B] **Answer: `false`.** The `'1'` in `'12'` is compared to the `'2'` in `'2'`. So `'12'` is less than `'2'`.

    [C] **Answer: `true`.** `==` in Javascript performs the comparison after a type conversion. In this problem, the comparison becomes `2==2`.

    [D] **Answer: `false`.** `===` in Javascript performs the comparison without type conversions. `2` and `'2'` are different data types and are not the same.

    [E] **Answer: `false`.** `true` will be converted to 1. The comparison then becomes `1==2`.

    [F] **Answer: `true`.** The 2 is type casted to a `boolean`. Since 2 is non-zero its type cast will be equal to `true`. The comparison then becomes `true`===`true`.

15. The `==` is called a loose equality operator and performs a comparison with type conversions if needed. The `===` is a strict equality operator and peroforms comparison without type conversion.

16. [part2-question16.js](part2-question16.js)

17. The function will return `[2,4,6]`. `doSomething` is a callback function in `modifyArray`. `doSomething` doubles the number that is passed in and is called on each element in `array`. `newArr` is then updated with the output values of `doSomething`.

18. [part2-question18.js](part2-question18.js)

19. The output of the code is in the order of `1`, `4`, `3`, and `2`. This is because `2` and `3` will be printed after the other lines of code are executed synchronously (`1` and then `4`). Then, `2` has a timeout of 1000 so `3` will be outputted first. 