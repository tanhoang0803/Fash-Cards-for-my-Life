# Flash Cards Project — Claude Instructions

## Project Overview
A multi-subject developer flash card web app built with vanilla JavaScript.
Users flip through cards, filter by subject and category, track known cards,
shuffle the deck, and navigate with keyboard shortcuts.

**Live URL:** https://tanhoang0803.github.io/Fash-Cards-for-my-Life/
**Repo:** https://github.com/tanhoang0803/Fash-Cards-for-my-Life
**Project Spec:** https://roadmap.sh/projects/flash-cards

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
├── Subject Menu (nav#subjectMenu) — 3 grouped bars
│   ├── [CORE]     DSA · Internet · Linux
│   ├── [BACKEND]  Python · C# · SQL · Database · API · Node.js · Testing & Containers
│   └── [FRONTEND] JavaScript · React & SSR · CSS & Tailwind
│
├── Category Filter (nav#categoryFilter)
│   └── "All" + one button per category in the active subject
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

### Core
| Subject | Cards | Categories |
|---|---|---|
| DSA | 40+ | Complexity, Data Structures, Algorithms, Patterns, Hashing, Recursion, Interview |
| Internet | 20 | How Internet Works, HTTP & Web, DNS & Domains, Browsers |
| Linux | 25 | Linux Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| Tricked Memory | 3+ | SQL (FJ WGH SOL — execution order mnemonic) |

### Backend
| Subject | Cards | Categories |
|---|---|---|
| Python | 22 | Core Python, OOP & Design, Ecosystem |
| C# | 18 | C# Basics, OOP & Patterns, LINQ & Async |
| SQL | 60+ | Core, SQL Basics, DDL, DML, DQL, DCL, IF & CASE, Joins & Aggregation, Advanced SQL, GROUP BY Patterns, SQL Patterns |
| Database | 26+ | Relational DB, NoSQL, DB Design & Perf, PostgreSQL |
| API | 30+ | JSON Basics, REST Fundamentals, REST Design, API in Practice, JWT, OAuth2 |
| Node.js | 25 | Node.js Basics, Modules & npm, Async & Error Handling, HTTP & Express, Performance & Production |
| Testing & Containers | 20 | Testing, Docker, Kubernetes |

### Frontend
| Subject | Cards | Categories |
|---|---|---|
| JavaScript | 50+ | Overview, Fundamentals, Core JavaScript, ES6+, Async JavaScript, DOM & Browser, Data Structures, Advanced, Performance, Testing, Ecosystem, JS Functions, Interview |
| React & SSR | 25 | React Basics, Hooks, Performance, SSR & Next.js |
| CSS & Tailwind | 20 | CSS Fundamentals, CSS Layouts, Tailwind CSS |

**Total: 400+ cards**

### JavaScript — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Overview** | 1 | Full mindmap · Frontend & Backend learning paths |
| **Fundamentals** | 5 | var/let/const · Data types · Operators · Control flow · Functions |
| **Core JavaScript** | 9 | Execution Context · Closures · Event Loop · Prototype · Async Programming · Memory · Scopes · Hoisting · this |
| **ES6+** | 4 | Destructuring & spread · Template literals · Classes · Modules (import/export) |
| **Async JavaScript** | 3 | Promises · async/await · Fetch API |
| **DOM & Browser** | 3 | DOM manipulation · Event bubbling & delegation · localStorage/sessionStorage |
| **Data Structures** | 2 | Array methods (map/filter/reduce) · Map & Set |
| **Advanced** | 4 | Execution context · Shallow vs deep copy · Debounce/throttle · Functional programming |
| **Performance** | 2 | Memoization · Lazy loading · Code splitting · Web Workers |
| **Testing** | 1 | Jest unit testing · Mocks · Async tests |
| **Ecosystem** | 2 | npm/package.json · Webpack / Vite / Babel |
| **JS Functions** | 9 | map/filter/reduce · find/some/every · Object.keys/values/entries · setTimeout/fetch · Promise/async-await · call/apply/bind · Spread/Rest · String methods · JSON.parse/stringify |
| **Interview** | 10 | var vs let vs const · Closure · Hoisting · this · Event loop · Promises · async/await · Destructuring · Spread · map/filter/reduce |

#### Learning Paths
```
Frontend Developer:   Core JS → ES6+ → DOM → Async JS → React → Performance
Backend Developer:    Fundamentals → ES6 → Async → Node.js → API → Database
```

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
// Controls menu order
const SUBJECTS = { 'SubjectName': SUBJECT_CARDS, ... };

// Subject menu grouped into labeled bars
const SUBJECT_GROUPS = {
  'Core':     ['DSA', 'Internet', 'Linux', 'Tricked Memory'],
  'Backend':  ['Python', 'C#', 'SQL', 'Database', 'API', 'Node.js', 'Testing & Containers'],
  'Frontend': ['JavaScript', 'React & SSR', 'CSS & Tailwind'],
};

// Group label pill colors
const GROUP_COLORS = {
  'Core':     '#f97316',
  'Backend':  '#6366f1',
  'Frontend': '#61dafb',
};

// Active subject button background color
const SUBJECT_COLORS = { 'SubjectName': '#hexcolor', ... };

// Category badge colors
const CATEGORY_COLORS = { 'CategoryName': '#hexcolor', ... };

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
| `buildSubjectMenu()` | Renders grouped subject nav (Core/Backend/Frontend bars) |
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
- **Escape `${...}` in shell/bash tip blocks** — JS template engine evaluates them
  - ❌ `${FILES[@]}`
  - ✅ `\${FILES[@]}`

### Other Conventions
- State lives in a single `state` object
- `known` Set uses `cardId()` — survives shuffle (references original array index)
- Subject color = active button background; category color = badge background
- Group label color comes from `GROUP_COLORS`, not `SUBJECT_COLORS`
- Always run `node --check app.js` before committing

---

## Adding a New Subject — Checklist

1. Add `const NEWSUBJECT_CARDS = [...]` array in `app.js` (before the `SUBJECTS` object)
2. Add `'New Subject': NEWSUBJECT_CARDS` to `SUBJECTS`
3. Add `'New Subject': '#color'` to `SUBJECT_COLORS`
4. Add each category color to `CATEGORY_COLORS`
5. Add `'New Subject'` to the correct group in `SUBJECT_GROUPS`
6. Run `node --check app.js` — fix any syntax errors before continuing
7. `git add app.js && git commit && git push` → CI validates + deploys

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
