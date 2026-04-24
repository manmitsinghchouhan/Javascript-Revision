# Chapter 07: Classes & Objects

In JavaScript, objects are the primary way we store and manage data. Classes, introduced in ES6, provide a cleaner and more professional "blueprint" for creating these objects and implementing inheritance.

## 🔑 Key Concepts

### 1. Object Prototypes
Every JavaScript object has a another object called a Prototype. It acts as a template from which the object inherits methods and properties.
- `Prototype Chain`: If JS can't find a property on an object, it looks up to its prototype, then the prototype's prototype, until it finds it or hits null.

- `__proto__`:The syntax used to access or set an object's prototype manually.

###  2. Classes & Instances
Classes are "factories" for creating objects.Act as Blueprint to create a object 
- `class Keyword` -> Defines the blueprint.

- `constructor()` -> A special method that initializes new objects. It runs automatically when new is called.

- `this Keyword` ->Refers to object we are creating using class

- `New keyword` -> Used to create an instance of a class. (create new object )


### 3. Class Inheritance
Inheritance allows one class to derive features from another, promoting code reusability.

- `extends`: Used to create a child class (e.g., `class Developer extends Employee`).

- `super()`: A function used inside a child constructor to call the parent class's constructor. Must be called before using `this`

### 4. Method Overriding
If a child class defines a method with the same name as a method in the parent class, the child's method overrides the parent's version. This is useful for specific behavior (e.g., an Employee works, but a Developer specifically "codes").


