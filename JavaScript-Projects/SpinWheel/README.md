# Spin Wheel App

A fun and interactive spinning wheel application built with HTML, CSS, and JavaScript. The wheel uses Chart.js to render a beautiful pie chart that users can spin to randomly select a value from 1 to 6.

## Features

- **Interactive Wheel**: Click the "Spin" button to start spinning
- **Smooth Animation**: The wheel gradually slows down for a natural spinning effect
- **Random Selection**: Each spin lands on a random value between 1 and 6
- **Visual Feedback**: The selected value is displayed below the wheel
- **Responsive Design**: Works on both desktop and mobile devices
- **Beautiful UI**: Modern gradient background with colorful wheel sections

## How to Use

1. Open `index.html` in your web browser
2. Click the **"Spin"** button to start the wheel spinning
3. Wait for the wheel to stop rotating
4. The selected value will be displayed at the bottom

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with gradients, animations, and responsive design
- **JavaScript**: Wheel logic, rotation calculation, and event handling
- **Chart.js**: Pie chart rendering
- **chartjs-plugin-datalabels**: Data labels on chart segments

## Project Structure

```
SpinWheel/
├── index.html       # Main HTML file with canvas and button
├── script.js        # JavaScript logic for wheel rotation and value generation
├── style.css        # CSS styling for all elements
└── README.md        # Project documentation
```

## How It Works

1. The wheel is rendered as a pie chart with 6 equal segments
2. When the spin button is clicked:
   - A random degree between 0-360 is generated
   - The wheel rotates continuously while decreasing speed
   - After 15+ full rotations, it lands on the target degree
   - The value at that degree is displayed

## Customization

### Change Wheel Values
Modify the `rotationValues` array in `script.js` to change the degree-to-value mapping.

### Change Colors
Edit the `pieColors` array in `script.js` to customize the wheel segment colors:
```javascript
var pieColors = [
    "#8b35bc",
    "#b163da",
    "#8b35bc",
    "#b163da",
    "#8b35bc",
    "#b163da",
];
```

### Change Background
Update the `body` style in `style.css` to change the gradient background.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Issues Fixed

- ✅ Removed corrupted code character
- ✅ Fixed infinite rotation issue by using proximity detection
- ✅ Replaced external arrow image with CSS-drawn arrow for reliability
- ✅ Added proper arrow styling with shadow effect

## License

Free to use and modify for personal and commercial projects.
