# Dynamic Circle Effect ✨

A small CSS demo that creates layered, animated circles with a 3D-tilt and hue-rotation effect.

## Preview

Open `index.html` in your browser to see a dynamic stack of glowing circles that pulse and change color.

## Features

- Pure CSS (no JavaScript required) 🔧
- 3D perspective with `rotateX` and `translateZ` transforms
- Hue-rotation for continuous color shift 🌈
- Simple and easy to customize

## Usage

1. Open `index.html` in your browser, or use a static server / Live Server in VS Code.
2. The demo uses multiple `.circle` elements; each has an inline `--i` value to control size/stagger.

## Customize

- Change the number of circles: add/remove `.circle` divs in `index.html` and set the `--i` values.
- Size formula: adjust `width: calc(var(--i) * 3vmin)` in `style.css` to change scaling.
- Colors: edit `border` and `box-shadow` values in `style.css` (currently green) to use other colors.
- Animation: tweak `@keyframes animate` (duration, translateY, hue-rotate) to change movement.

## Files

- `index.html` — demo markup
- `style.css` — styles and animation

