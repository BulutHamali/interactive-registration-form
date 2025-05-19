## Reflection Questions

### 1. How did `event.preventDefault()` help in handling form submission?

It prevented the browser’s default behavior of submitting the form and reloading the page. This allowed me to run custom validation logic using JavaScript before deciding whether to allow form submission or not.

---

### 2. HTML5 validation vs JavaScript validation – why use both?

HTML5 provides quick built-in validation (like `required`, `type="email"`, `pattern`) and enhances accessibility. JavaScript allows for custom messages, advanced logic (like password match), and real-time feedback. Using both provides a more robust and user-friendly experience.

---

### 3. How did you use `localStorage` for the username? What are the limitations?

I used `localStorage.setItem()` to save the username after successful registration and `localStorage.getItem()` to pre-fill it when the page loads. A limitation of `localStorage` is that it’s accessible from the browser and not secure for storing sensitive information like passwords.

---

### 4. Real-time validation challenge and solution

A challenge was making sure errors updated immediately as the user typed, especially for matching passwords. I solved it by using the `input` event and writing modular validation functions for each field.

---

### 5. How did you ensure user-friendly error messages?

I used concise, plain-language messages tailored to each validation rule and displayed them near the input fields using `<span>` elements. I also cleared the messages as soon as the input became valid to avoid confusing the user.
