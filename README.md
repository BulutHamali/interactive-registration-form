# Interactive Registration Form

A client-side registration form built with **vanilla HTML, CSS, and JavaScript**.  
The project demonstrates **real-time form validation, password strength enforcement, and lightweight state persistence using the Web Storage API** — with **no frameworks or build tools**.

---

## Demo

Open `index.html` directly in a browser — **no server or dependencies required**.

---

## Features

- Real-time field validation triggered on each keystroke (`input` event)
- Per-field error messages displayed inline and cleared immediately once input becomes valid
- Password strength enforcement:
  - Minimum **8 characters**
  - At least **one uppercase letter**
  - At least **one lowercase letter**
  - At least **one digit**
- Password confirmation **match verification**
- Username persisted using **`localStorage`** and pre-filled on page reload
- **Layout shift prevention**: error message spans reserve vertical space using `min-height`
- Fully custom JavaScript validation — browser validation intentionally disabled using `novalidate`

---

## Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **Web Storage API (`localStorage`)**

---

## Project Structure

```
interactive-registration-form/
├── index.html      # Form markup
├── script.js       # Validation logic and event handling
├── styles.css      # Layout and styling
└── README.md
```

---

## How to Run

No installation or build step required.

```bash
git clone https://github.com/BulutHamali/interactive-registration-form.git
cd interactive-registration-form
open index.html     # macOS
# or:
start index.html    # Windows
# or:
xdg-open index.html # Linux
```

Or simply **double-click `index.html`** in your file explorer.

---

## Implementation Notes

### Why `event.preventDefault()`?

Prevents the browser's default form submission and page reload, allowing all validation logic to run before deciding whether the form should be accepted.

---

### Why `novalidate` on the form?

Disables browser-native validation popups in favor of **fully custom, consistently styled JavaScript validation**.

The **ValidityState API** (`validity.valueMissing`, `validity.typeMismatch`) is still used internally for reliable constraint checks.

---

### Why `localStorage` for the username?

Demonstrates **client-side state persistence across page reloads**.

⚠️ **Note:** `localStorage` is **not secure for sensitive data** — this is a UI/UX pattern demonstration, not a replacement for server-side session management.

---

### Real-time Validation Approach

Each form field has its **own dedicated validation function**.

Shared helper functions:

- `showError()`
- `clearError()`

These helpers manage DOM updates and keep per-field validation logic **clean and modular**.

---

## Roadmap

- Add **ARIA live regions** for better screen reader accessibility
- Replace `alert()` success message with **inline UI feedback**
- Add **password visibility toggle**
- Add **field-level success indicators** (green border or checkmark on valid input)

---

## License

MIT License

---

## Author

**Bulut Hamali**

For questions or feedback, open an issue on GitHub.

---

## Commit the README

After pasting this into `README.md`, commit and push:

```bash
git add README.md
git commit -m "Rewrite README as structured project documentation

Add project overview, features, tech stack, usage instructions,
implementation notes, and roadmap"
git push origin main
```
