# Flash Cards Project — Claude Instructions

## Project Overview
A multi-subject developer flash card web app built with vanilla JavaScript.
Users flip through cards, filter by subject and category, track known cards,
shuffle the deck, and navigate with keyboard shortcuts.

**Live URL:** https://tanhoang0803.github.io/Fash-Cards-for-my-Life/
**Repo:** https://github.com/tanhoang0803/Fash-Cards-for-my-Life

## Tech Stack
- HTML5, CSS3, vanilla JavaScript (ES2022) — no framework, no build step
- Single-page app: `index.html`, `style.css`, `app.js`
- Deployed via GitHub Actions → GitHub Pages

---

## Page Structure (`index.html`)

```
Flash Cards Page
│
├── Header
│   ├── Title ("Dev Flash Cards")
│   ├── Stats Badge ("N known")
│   ├── Shuffle & Reset buttons
│   ├── Progress Bar
│   └── Progress Indicator ("X of Y")
│
├── Subject Menu (nav#subjectMenu)
│   └── One button per subject — active button gets subject color background
│
├── Category Filter (nav#categoryFilter)
│   └── "All" button + one button per category in active subject
│
└── Main — Flashcard Container
    └── .card (3D flip container)
        ├── .card-front
        │   ├── Category + Difficulty badges
        │   ├── "Got it" button
        │   ├── Face label "Question"
        │   ├── Question text  (#questionText)
        │   └── Nav buttons   (Prev | Show Answer | Next)
        │
        └── .card-back
            ├── Category + Difficulty badges
            ├── "Got it" button
            ├── Face label "Answer"
            ├── Answer text   (#answerText)
            ├── Tip/code block (#tipBlock — hidden if no tip)
            └── Nav buttons   (Prev | Hide Answer | Next)

└── Footer
    ├── Keyboard hints
    └── Author credit ("Created by @TanQHoang — 2026")
```

---

## All Subjects & Card Counts

| Subject | Cards | Categories |
|---|---|---|
| DSA | 40+ | Complexity, Data Structures, Algorithms, Patterns, Hashing, Recursion, Interview |
| Python | 22 | Core Python, OOP & Design, Ecosystem |
| C# | 18 | C# Basics, OOP & Patterns, LINQ & Async |
| SQL | 20 | SQL Basics, Joins & Aggregation, Advanced SQL |
| Database | 26+ | Relational DB, NoSQL, DB Design & Perf, PostgreSQL |
| JavaScript | 50 | JavaScript Core, Async JavaScript, DOM & Browser, CSS, Performance, Security |
| Internet | 20 | How Internet Works, HTTP & Web, DNS & Domains, Browsers |
| Linux | 25 | Linux Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| API | 30+ | JSON Basics, REST Fundamentals, REST Design, API in Practice, JWT, OAuth2 |
| Node.js | 25 | Node.js Basics, Modules & npm, Async & Error Handling, HTTP & Express, Performance & Production |
| React & SSR | 25 | React Basics, Hooks, Performance, SSR & Next.js |

---

## Architecture (`app.js`)

### Card Data Structure
Each subject has a `const SUBJECTNAME_CARDS = [...]` array.
Each card object:
```js
{
  category:   'Category Name',          // string — used for filter bar
  difficulty: 'Beginner',               // 'Beginner' | 'Intermediate' | 'Advanced'
  question:   'What is ...?',           // shown on card front
  answer:     'Answer text...',         // shown on card back
  tip:        `optional code block`,    // shown in tip-block on back (optional)
}
```

### Config Objects
```js
const SUBJECTS = {
  'SubjectName': SUBJECT_CARDS,   // controls menu order
  ...
};

const SUBJECT_COLORS = {
  'SubjectName': '#hexcolor',     // button background when active
  ...
};

const CATEGORY_COLORS = {
  'CategoryName': '#hexcolor',    // badge color
  ...
};

const DIFFICULTY_CONFIG = {
  'Beginner':     { bg: '#10b981' },
  'Intermediate': { bg: '#f59e0b' },
  'Advanced':     { bg: '#ef4444' },
};
```

### State
```js
const state = {
  activeSubject: 'DSA',      // currently selected subject
  activeFilter:  'All',      // currently selected category filter
  currentIndex:  0,          // index into state.deck[]
  isFlipped:     false,      // front or back face showing
  known:         new Set(),  // Set of cardId strings
  deck:          [],         // current filtered (+ possibly shuffled) card array
};
```

### Key Functions
| Function | Purpose |
|---|---|
| `cardId(card)` | Returns `"Subject\|originalIndex"` — stable ID even after shuffle |
| `buildSubjectMenu()` | Clears and rebuilds subject nav buttons |
| `buildFilterBar()` | Clears and rebuilds category filter for active subject |
| `buildDeck()` | Filters `SUBJECTS[activeSubject]` by `activeFilter` into `state.deck` |
| `render()` | Updates all DOM elements from current state |
| `formatText(text)` | Converts \`backtick\` spans → `<code>` elements |
| `navigate(dir)` | Move to previous/next card |
| `flip(show)` | Show or hide answer face |
| `toggleKnown()` | Add/remove current card from `state.known` |
| `shuffleDeck()` | Fisher-Yates shuffle of `state.deck` |
| `resetAll()` | Clear known set, rebuild deck from start |

---

## Coding Conventions

### Critical: Template Literal Rules
- **Never use backtick characters inside a tip template literal** — they terminate the string early
  - ❌ `` `closes over `count`` ` ``
  - ✅ `` `closes over 'count'` ``
- **Escape `${...}` in shell/bash tip blocks** — JS template engine will try to evaluate them
  - ❌ `${FILES[@]}`
  - ✅ `\${FILES[@]}`

### Other Conventions
- State lives in a single `state` object
- `known` Set uses `cardId()` — survives shuffle because it references original array index
- Subject color = active button background; category color = badge background
- Always run `node --check app.js` before committing

---

## Adding a New Subject — Checklist

1. Add `const NEWSUBJECT_CARDS = [...]` array in `app.js` (before the `SUBJECTS` object)
2. Add `'New Subject': NEWSUBJECT_CARDS` to `SUBJECTS`
3. Add `'New Subject': '#color'` to `SUBJECT_COLORS`
4. Add each category's color to `CATEGORY_COLORS`
5. Run `node --check app.js` — fix any syntax errors before continuing
6. `git add app.js && git commit && git push` → CI validates + deploys

---

## CI/CD Pipeline

File: `.github/workflows/CI_deployy.yml`
- **Triggers:** push to `master`, manual `workflow_dispatch`
- **Job 1 — validate:** checks all three files exist + `node --check app.js`
- **Job 2 — deploy:** uploads repo root to GitHub Pages (no build needed)
- **Permissions:** `pages: write`, `id-token: write`

---

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
