# Rock Paper Scissor 🎮

A simple, browser-based Rock Paper Scissor game built with plain HTML, CSS, and JavaScript. Click a weapon to play against the computer — scores are tracked and results are shown with color-coded feedback.

---

## 🚀 Features
- **Score tracking** for both Player and Computer ✅
- Visual result feedback (Win / Lose / Draw) with distinct colors 🔴🟢⚪
- Uses **Font Awesome** icons and **Google Fonts** for visuals ✨
- Lightweight and easy to customize 🔧

---

## 📂 Project Structure
- `index.html` — Game UI and resource links
- `style.css` — Layout and styling
- `script.js` — Game logic (random computer choice, scoring, result display)

---

## 💻 Run locally
1. Clone the repo or download the folder.
2. Open `index.html` in your browser, or use VS Code Live Server:
   - Right-click `index.html` → "Open with Live Server"

> Note: The game uses Font Awesome via CDN; ensure you have internet access to load the icons.

---

## ▶️ How to play
- Click one of the buttons (Rock, Paper, Scissor).
- The computer picks a random choice.
- Result appears in the details area and scores update automatically.

---

## 🛠️ Customize
- Update choices or rules inside `script.js` (look for the `choices_object` object) to modify win/lose logic.
- Change styles in `style.css` to customize look and animations.

Example (to change rules):
```js
// inside script.js
let choices_object = {
  'rock': { 'scissor': 'win', 'paper': 'lose', 'rock': 'draw' },
  // ...
};
```

---

