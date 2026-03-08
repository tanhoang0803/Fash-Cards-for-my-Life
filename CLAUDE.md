# Flash Cards Project — Claude Instructions

## Project Overview
A vanilla JavaScript flash card app to practice state management and component-based architecture. Displays pre-defined JavaScript Q&A cards users can flip through.

## Tech Stack
- HTML5, CSS3, vanilla JavaScript (no framework required unless specified)
- Single-page app: `index.html`, `style.css`, `app.js`

## Page Structure (`index.html`)

```
Flash Cards Page
│
├── Header
│   ├── Title
│   ├── Progress Bar
│   └── Progress Indicator (e.g., "5 of 20")
│
├── Flashcard Container
│   ├── Question Card
│   │   ├── Question Text
│   │   └── Navigation Buttons
│   │       ├── Previous
│   │       ├── Show Answer
│   │       └── Next
│   │
│   └── Answer Card (toggled on Show Answer)
│       ├── Answer Explanation
│       └── Navigation Buttons
│           ├── Previous
│           ├── Hide Answer
│           └── Next
```

## Features Required
- Pre-defined flashcards with JavaScript questions and answers
- Progress bar reflecting current card index
- Progress indicator showing "X of Y"
- Flip/toggle between question and answer view
- Previous / Next navigation buttons

## Coding Conventions
- Keep state in a single JS object (currentIndex, isFlipped, cards[])
- Use `data-*` attributes for card identification if needed
- CSS transitions for card flip animation
- No external libraries unless explicitly requested

## File Layout
```
Flash_cards/
├── index.html
├── style.css
├── app.js
├── README.md
└── CLAUDE.md
```
