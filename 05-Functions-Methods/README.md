# Chapter 5: Functions & Methods

Functions are the building blocks of JavaScript, allowing for code reusability, modularity, and cleaner logic.

## 🔑 Key Concepts

### 1. Function Types
* **Function Declaration:** Traditional way, hoisted to the top.
* **Arrow Functions (`=>`):** Modern ES6 syntax, concise, and does not have its own `this` context.
* **Anonymous Functions:** Functions without a name, often used as callbacks.

### 2. Parameters & Arguments
* **Parameters:** Variables listed in the function definition.
* **Default Parameters:** Setting a fallback value if no argument is passed (e.g., `(name = "Guest")`).
* **Arguments:** The actual values passed to the function when invoked.

### 3. The `return` Keyword
* Stops function execution and sends a value back to the caller.
* If no `return` is specified, the function returns `undefined` by default.

### 4. Methods 
* **Methods:** Functions that belong to an object or data type (e.g., `str.toUpperCase()`).

### 5. Scope
* **Global Scope:** Variables accessible everywhere.
* **Local/Block Scope:** Variables declared inside a function or `{}` are not accessible outside.

### 6. Advanced Array Methods (Higher-Order Functions)
* `.map()`: Creates a new array by performing a function on each element.
* `.filter()`: Creates a new array with elements that pass a test.
* `.reduce()`: Reduces the array to a single value (e.g., summing numbers).
* `.forEach()`: Executes a function for each array element (does not return a new array).