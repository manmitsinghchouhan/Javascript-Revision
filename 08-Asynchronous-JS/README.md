# Chapter 08: Callbacks, Promises & Async/Await

This chapter covers the core of Asynchronous JavaScript, moving from the traditional callback-based approach to the modern Async/Await syntax.

## 🔑 Key Concepts

### 1. Callbacks (The Foundation)
A callback is a function passed as an argument to another function, which is then executed after some operation has been completed.
* **Callback Hell:** When multiple callbacks are nested within each other, making the code complex and hard to maintain (also known as the "Pyramid of Doom").

### 2. Promises (The Middle Ground)
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
* **States:** - `Pending`: Initial state, neither fulfilled nor rejected.
  - `Fulfilled`: The operation completed successfully (`.then()`).
  - `Rejected`: The operation failed (`.catch()`).

### 3. Async / Await (The Modern Standard)
Async/Await is a special syntax to work with promises in a more comfortable fashion.
* **`async`**: Makes a function return a promise.
* **`await`**: Makes JavaScript wait until that promise settles and returns its result. It can only be used inside an `async` function.
* **Error Handling:** Uses `try...catch` blocks to handle rejected promises cleanly.



### 4. IIFE in JavaScript


**IIFE (Immediately Invoked Function Expression)** is a function that runs immediately after it is defined — no need to call it separately.

## ⚙️ Syntax

```js
(function () {
  console.log("Runs instantly!");
})();
````
This is used for running Async Function direactly without calling ..!




