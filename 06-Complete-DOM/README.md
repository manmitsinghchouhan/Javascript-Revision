# Chapter 6: The Document Object Model (DOM)

The DOM allows JavaScript to talk to HTML. This folder tracks my journey from basic manipulation to dynamic event handling.

## 📖 Theory & Syntax Reference

### 1. The Selectors
How we "grab" the elements from the page:
- `document.querySelector(".class")` -> Grabs the first match (Universal).
- `document.getElementById("id")` -> Grabs by unique ID.

### 2. Properties to Change Content
- `.innerText` -> Changes the text (ignores HTML tags).
- `.innerHTML` -> Changes content AND renders HTML tags (like `<b>`).
- `.style.propertyName` -> Changes CSS directly (e.g., `.style.color = "red"`).

### 3. Event Listeners (The "Interaction")
The syntax to make buttons work:
```javascript
element.addEventListener("click", () => {
    // Code to run when clicked
}); 
```

### 4. Dynamic Elements (Creating on the fly)
Syntax
```
const el = document.createElement("div"); // 1. Create

el.innerText = "Hi!";                     // 2. Edit

document.body.append(el);                 // 3. Place
```

### 5. ClassList (The Professional Way)
Instead of changing individual styles, we toggle CSS classes:
- `element.classList.add("name")`
- `element.classList.remove("name")`
- `element.classList.toggle("name")` // On/Off switch




