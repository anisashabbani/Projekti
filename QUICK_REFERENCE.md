# Quick Reference Guide

## HTML Cheat Sheet

### Basic Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <!-- Content -->
</body>
</html>
```

### Common Tags
```html
<h1>Heading 1</h1>          <!-- Biggest heading -->
<h2>Heading 2</h2>
<p>Paragraph text</p>
<a href="link.html">Link</a>
<img src="image.jpg" alt="Description">
<button>Click Me</button>
<div>Container</div>
<span>Inline container</span>
```

### Forms
```html
<form>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
    <input type="password" placeholder="Password">
    <input type="number" placeholder="Age">
    <input type="date">
    <input type="time">
    <textarea placeholder="Message"></textarea>
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <button type="submit">Submit</button>
</form>
```

### Semantic HTML
```html
<header>Header content</header>
<nav>Navigation</nav>
<main>Main content</main>
<section>Section</section>
<article>Article</article>
<footer>Footer</footer>
```

---

## CSS Cheat Sheet

### Selectors
```css
element { }           /* Tag name */
.class { }           /* Class */
#id { }              /* ID */
.class1.class2 { }   /* Multiple classes */
.parent .child { }   /* Descendant */
```

### Colors
```css
color: red;
color: #ff0000;      /* Hex */
color: rgb(255,0,0); /* RGB */
color: rgba(255,0,0,0.5); /* RGB with opacity */
```

### Typography
```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: underline;
line-height: 1.6;
```

### Box Model
```css
width: 100%;
height: 200px;
margin: 20px;        /* Outside */
padding: 15px;       /* Inside */
border: 2px solid black;
border-radius: 10px;
```

### Flexbox
```css
display: flex;
flex-direction: row;        /* or column */
justify-content: center;    /* Horizontal alignment */
align-items: center;       /* Vertical alignment */
gap: 20px;
```

### Grid
```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;
```

### Position
```css
position: relative;
position: absolute;
position: fixed;
top: 0;
left: 0;
```

### Responsive
```css
@media (max-width: 768px) {
    /* Mobile styles */
}
```

---

## JavaScript Cheat Sheet

### Variables
```javascript
let name = "John";        // Can change
const age = 25;           // Cannot change
var oldWay = "avoid";     // Old way, avoid
```

### Functions
```javascript
function myFunction() {
    // Code here
}

// Arrow function
const myFunction = () => {
    // Code here
}
```

### DOM Selection
```javascript
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('.class');
```

### Events
```javascript
element.addEventListener('click', function() {
    // Code here
});

// Common events:
// 'click', 'submit', 'scroll', 'load', 'change', 'input'
```

### Changing Content
```javascript
element.textContent = 'New text';
element.innerHTML = '<strong>HTML</strong>';
element.style.color = 'red';
element.classList.add('class');
element.classList.remove('class');
```

### Form Values
```javascript
const value = input.value;
const selected = select.value;
```

### Arrays
```javascript
const arr = [1, 2, 3];
arr.push(4);           // Add to end
arr.pop();             // Remove from end
arr.length;            // Get length
```

### Objects
```javascript
const person = {
    name: 'John',
    age: 25
};
person.name;           // Access property
```

### Conditionals
```javascript
if (condition) {
    // Code
} else if (condition) {
    // Code
} else {
    // Code
}
```

### Loops
```javascript
for (let i = 0; i < 10; i++) {
    // Code
}

array.forEach(item => {
    // Code
});
```

---

## Common Patterns

### Smooth Scroll
```javascript
element.scrollIntoView({ behavior: 'smooth' });
```

### Prevent Default
```javascript
event.preventDefault();
```

### Show/Hide Element
```javascript
element.style.display = 'block';   // Show
element.style.display = 'none';   // Hide
```

### Toggle Class
```javascript
element.classList.toggle('active');
```

### Get Form Data
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Use formData
});
```

---

## Debugging Tips

### Console
```javascript
console.log('Debug message');
console.error('Error message');
console.warn('Warning');
```

### Check if Element Exists
```javascript
if (element) {
    // Element exists
}
```

### Common Errors
- Forgot to close tags: Check HTML
- Wrong file path: Check href/src
- JavaScript not loading: Check console (F12)
- CSS not working: Check if linked correctly

---

## File Structure
```
project/
├── index.html
├── style.css
├── script.js
├── images/
│   └── logo.png
└── pages/
    └── about.html
```

---

## Best Practices

1. **Use semantic HTML**: `<header>`, `<nav>`, `<main>`, etc.
2. **Organize CSS**: Group related styles together
3. **Comment your code**: Explain what complex code does
4. **Test on mobile**: Always check responsive design
5. **Validate HTML**: Use validator.w3.org
6. **Minify code**: Remove extra spaces before deploying
7. **Use meaningful names**: `button-submit` not `btn1`
8. **Keep it simple**: Don't overcomplicate things

---

## Resources

- **MDN**: https://developer.mozilla.org/
- **Can I Use**: https://caniuse.com/ (Browser support)
- **CSS Tricks**: https://css-tricks.com/
- **JavaScript.info**: https://javascript.info/

