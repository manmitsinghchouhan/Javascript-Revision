# Chapter 2: Operations & Conditionals

This section focuses on logic flow—how the program makes decisions using operators and conditional statements.

## 🔑 Key Concepts

### 1. Equality Operators
* `==` (Loose): Performs type coercion before comparing. (Avoid this!)
* `===` (Strict): Checks both value and type. (Use this!)

### 2. Logical Operators
* `&&` (AND): Both must be true.
* `||` (OR): At least one must be true.
* `!`: Negates a boolean.

### 3. Decision Making
* **If/Else:** Standard branching logic.
* **Ternary Operator:** `condition ? true : false`. Great for short logic.
* **Switch:** Cleaner way to handle multiple specific cases for a single variable.

### 4. Truthy & Falsy
Values that evaluate to `false` in a boolean context:
`false`, `0`, `""`, `null`, `undefined`, `NaN`.
*Everything else is Truthy!*