# Dev Flash Cards

A multi-subject developer flash card web app built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**Live Demo:** https://tanhoang0803.github.io/Fash-Cards-for-my-Life/

**Project Spec:** https://roadmap.sh/projects/flash-cards

---

## Subjects

| Subject | Cards | Topics Covered |
|---|---|---|
| DSA | 28+ | Big O, Arrays, Stacks, Queues, Hash Tables, Trees, Graphs, Sorting, Hashing patterns, Recursion, Interview problems |
| Python | 22 | Basics, OOP & Design patterns, Ecosystem (pip, venv, type hints) |
| C# | 18 | Basics, OOP & Design patterns, LINQ & Async/Await |
| SQL | 20 | Basics, Joins & Aggregation, Advanced SQL (indexes, CTEs, window functions) |
| Database | 26+ | Relational DB, NoSQL, DB Design & Performance, PostgreSQL (MVCC, JSONB, indexes, EXPLAIN) |
| JavaScript | 50 | Core JS, Async, DOM & Browser, CSS, Performance, Security |
| Internet | 20 | How the Internet works, HTTP & HTTPS, DNS & Domains, Browsers |
| Linux | 25 | Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| API | 20 | JSON, REST Fundamentals, REST Design best practices, API in Practice |
| Node.js | 25 | Basics & Event Loop, Modules & npm, Async & Error Handling, Express.js, Performance & Production |

---

## Features

- Multi-subject navigation bar with per-subject color themes
- Category filter bar — drill into specific topics within a subject
- 3D card flip animation (CSS `transform-style: preserve-3d`)
- "Got it" button to mark cards as known — tracked across shuffle
- Progress bar and "X of Y" indicator
- Shuffle deck (Fisher-Yates)
- Reset progress
- Keyboard shortcuts: `←` `→` navigate, `Space` flip, `K` mark known
- Difficulty badges: Beginner / Intermediate / Advanced
- Code tip blocks on answer cards

---

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES2022) — zero dependencies
- GitHub Actions CI/CD → GitHub Pages deployment
- `node --check` syntax validation on every push

---

## Project Structure

```
Flash_cards/
├── index.html          # App shell and markup
├── style.css           # Dark theme, 3D flip animation
├── app.js              # All card data, state management, DOM logic
├── README.md
├── CLAUDE.md           # Dev instructions for Claude
└── .github/
    └── workflows/
        └── CI_deployy.yml  # Validate + deploy to GitHub Pages
```

---

## Getting Started

Open `index.html` directly in a browser — no install or build step required.

```bash
# Or serve locally
npx serve .
```

---

## Author

@TanQHoang — 2026
