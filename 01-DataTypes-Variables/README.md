# Chapter 1: Variables & Data Types

## 🔑 Key Concepts Covered

### 1. Variable Declaration
* `const`: For values that remain constant (Block-scoped).
* `let`: For values that need reassignment (Block-scoped).
* *Note: Avoid `var` due to hoisting issues and lack of block scope.*

### 2. The 7 Primitives
JavaScript has 7 primitive data types: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `BigInt`, and `Symbol`.Contain only one vlaue 
AND
Non-Primitive data-types: `Objects`, `Arrays`, `Functions`. Contain more then one values


* **The Null Bug:** `typeof null` returns `"object"`. This is a legacy bug from the first version of JavaScript.
* **NaN (Not a Number):** Technically has a `typeof` "number", but represents a failed mathematical operation (e.g., `10 / "apple"`).

### 3. Type Coercion
JavaScript automatically converts types in certain situations:
* **Addition (+):** Favors **Strings** (Concatenation). Example: `"5" + 2 = "52"`.
* **Subtraction/Multiplication (- , *):** Favors **Numbers**. Example: `"5" - 2 = 3`.

### 4. Template Literals
Used for easier string manipulation using backticks (`` ` ``) and `${}` syntax.