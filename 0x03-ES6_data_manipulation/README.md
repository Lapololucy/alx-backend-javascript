# ES6 data manipulation

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220614183844/Best-known-ARRAY-methods.png)

An array is a special variable in all the languages that are used to store different elements. JavaScript array contains some built-in properties that every JavaScript developer should know how to use and when or where to use them. The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

## Description

In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

1.JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

## Learning Requiremnets

- All your files will be executed on `Ubuntu 18.04` LTS using `NodeJS 12.11.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A __README.md file__, at the root of the folder of the project, is mandatory
- Your code should use the `js extension`
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using `ESLint`
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions must be exported
