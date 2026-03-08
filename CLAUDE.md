# Flash Cards Project — Claude Instructions

## Project Overview
A multi-subject developer flash card web app built with vanilla JavaScript.
Users can flip through cards, filter by subject and category, track known cards,
shuffle the deck, and navigate with keyboard shortcuts.

## Tech Stack
- HTML5, CSS3, vanilla JavaScript (no framework)
- Single-page app: `index.html`, `style.css`, `app.js`
- Deployed via GitHub Actions → GitHub Pages

## Page Structure (`index.html`)

```
Flash Cards Page
│
├── Header
│   ├── Title ("Dev Flash Cards")
│   ├── Stats Badge (N known)
│   ├── Shuffle & Reset buttons
│   ├── Progress Bar
│   └── Progress Indicator ("X of Y")
│
├── Subject Menu (nav#subjectMenu)
│   └── One button per subject, highlights active with subject color
│
├── Category Filter (nav#categoryFilter)
│   └── "All" + one button per category in active subject
│
└── Main — Flashcard Container
    └── .card (3D flip container)
        ├── .card-front
        │   ├── Category + Difficulty badges
        │   ├── "Got it" button
        │   ├── Face label "Question"
        │   ├── Question text (#questionText)
        │   └── Nav buttons (Prev | Show Answer | Next)
        │
        └── .card-back
            ├── Category + Difficulty badges
            ├── "Got it" button
            ├── Face label "Answer"
            ├── Answer text (#answerText)
            ├── Tip/code block (#tipBlock — hidden if no tip)
            └── Nav buttons (Prev | Hide Answer | Next)
```

## Subjects & Card Counts

| Subject    | Cards | Categories |
|------------|-------|------------|
| DSA        | 28+   | Complexity, Data Structures, Algorithms, Patterns, Hashing, Recursion, Interview |
| Python     | 22    | Core Python, OOP & Design, Ecosystem |
| C#         | 18    | C# Basics, OOP & Patterns, LINQ & Async |
| SQL        | 20    | SQL Basics, Joins & Aggregation, Advanced SQL |
| Database   | 26+   | Relational DB, NoSQL, DB Design & Perf, PostgreSQL |
| JavaScript | 50    | JavaScript Core, Async JavaScript, DOM & Browser, CSS, Performance, Security |
| Internet   | 20    | How Internet Works, HTTP & Web, DNS & Domains, Browsers |
| Linux      | 25    | Linux Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| API        | 20    | JSON Basics, REST Fundamentals, REST Design, API in Practice |
| Node.js    | 25    | Node.js Basics, Modules & npm, Async & Error Handling, HTTP & Express, Performance & Production |

## Architecture (`app.js`)

### Data
- Each subject has a `const SUBJECT_CARDS = [...]` array
- Each card: `{ category, difficulty, question, answer, tip? }`
- `difficulty`: `'Beginner'` | `'Intermediate'` | `'Advanced'`

### Config objects
- `SUBJECTS` — `{ 'SubjectName': SUBJECT_CARDS, ... }` — controls menu order
- `SUBJECT_COLORS` — `{ 'SubjectName': '#hexcolor' }`
- `CATEGORY_COLORS` — `{ 'CategoryName': '#hexcolor' }`
- `DIFFICULTY_CONFIG` — `{ 'Beginner': { bg: '#hex' }, ... }`

### State
```js
const state = {
  activeSubject: 'DSA',
  activeFilter:  'All',
  currentIndex:  0,
  isFlipped:     false,
  known:         new Set(),  // stores cardId strings
  deck:          [],         // current filtered + possibly shuffled array
};
```

### Key functions
- `cardId(card)` — `"Subject|originalIndex"` — stable ID even after shuffle
- `buildSubjectMenu()` — renders subject nav buttons
- `buildFilterBar()` — renders category filter for active subject
- `buildDeck()` — filters `SUBJECTS[activeSubject]` by `activeFilter`
- `render()` — updates all DOM from state
- `formatText(text)` — converts backtick spans to `<code>` elements
- `navigate(dir)`, `flip(show)`, `toggleKnown()`, `shuffleDeck()`, `resetAll()`

## Coding Conventions
- **No nested backticks in template literals** — use single quotes inside tip strings
  - Wrong: `` `closes over `count`` ` ``
  - Right: `` `closes over 'count'` ``
- **Escape `${...}` in bash/shell tip blocks** — use `\${VAR}` to prevent JS template substitution
- Subject color used for active button background; category color used for badges
- `known` Set uses `cardId()` as key — survives shuffle
- Always `node --check app.js` before committing

## Adding a New Subject — Checklist
1. Add `const NEWSUBJECT_CARDS = [...]` array in `app.js`
2. Add `'NewSubject': NEWSUBJECT_CARDS` to `SUBJECTS`
3. Add `'NewSubject': '#color'` to `SUBJECT_COLORS`
4. Add category color entries to `CATEGORY_COLORS`
5. Run `node --check app.js` — fix any syntax errors
6. Commit and push → CI validates then deploys

## File Layout
```
Flash_cards/
├── index.html
├── style.css
├── app.js
├── README.md
├── CLAUDE.md
└── .github/
    └── workflows/
        └── CI_deployy.yml
```

## CI/CD
- GitHub Actions workflow: `.github/workflows/CI_deployy.yml`
- Triggers on push to `master`
- Job 1 `validate`: checks files exist + `node --check app.js`
- Job 2 `deploy`: uploads repo root to GitHub Pages (no build step)
- Live URL: https://tanhoang0803.github.io/Fash-Cards-for-my-Life/
