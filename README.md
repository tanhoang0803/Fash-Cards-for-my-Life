# Flash Cards

A simple flash card web app built with vanilla JavaScript to help users study and test their JavaScript knowledge.

## Features

- Pre-defined JavaScript questions and answers
- Flip cards to reveal answers
- Previous / Next navigation to cycle through cards
- Progress bar and indicator (e.g., "5 of 20")
- Smooth card-flip animation

## Structure

```
Flash_cards/
├── index.html   # App shell and markup
├── style.css    # Styles and flip animation
├── app.js       # State management and logic
├── README.md
└── CLAUDE.md    # Dev instructions for Claude
```

## Page Layout

```
Flash Cards Page
│
├── Header
│   ├── Title
│   ├── Progress Bar
│   └── Progress Indicator (5 of 20)
│
├── Flashcard Container
│   ├── Question Card
│   │   ├── Question Text
│   │   └── Navigation Buttons (Previous | Show Answer | Next)
│   │
│   └── Answer Card
│       ├── Answer Explanation
│       └── Navigation Buttons (Previous | Hide Answer | Next)
```

## Getting Started

Open `index.html` directly in a browser — no build step required.

## Author

@TanQHoang — 2026
