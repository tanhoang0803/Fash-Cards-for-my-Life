# Dev Flash Cards

A multi-subject developer flash card web app built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**Live Demo:** https://tanhoang0803.github.io/Fash-Cards-for-my-Life/

**Project Spec:** https://roadmap.sh/projects/flash-cards

---

## Subjects & Cards

### Core
| Subject | Cards | Categories |
|---|---|---|
| **DSA** | 40+ | Complexity, Data Structures, Algorithms, Patterns, Hashing, Recursion, Interview |
| **Internet** | 20 | How Internet Works, HTTP & Web, DNS & Domains, Browsers |
| **Linux** | 25 | Linux Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| **Tricked Memory** | 3+ | SQL (FJ WGH SOL — execution order mnemonic) |

### Backend
| Subject | Cards | Categories |
|---|---|---|
| **Python** | 22 | Core Python, OOP & Design, Ecosystem |
| **C#** | 18 | C# Basics, OOP & Patterns, LINQ & Async |
| **SQL** | 60+ | Core, SQL Basics, DDL, DML, DQL, DCL, IF & CASE, Joins & Aggregation, Advanced SQL, GROUP BY Patterns, SQL Patterns |
| **Database** | 26+ | Relational DB, NoSQL, DB Design & Perf, PostgreSQL |
| **API** | 30+ | JSON Basics, REST Fundamentals, REST Design, API in Practice, JWT, OAuth2 |
| **Node.js** | 25 | Node.js Basics, Modules & npm, Async & Error Handling, HTTP & Express, Performance & Production |
| **Testing & Containers** | 20 | Testing, Docker, Kubernetes |

### Frontend
| Subject | Cards | Categories |
|---|---|---|
| **JavaScript** | 40+ | Overview, Fundamentals, Core JavaScript, ES6+, Async JavaScript, DOM & Browser, Data Structures, Advanced, Performance, Testing, Ecosystem, Interview |
| **React & SSR** | 25 | React Basics, Hooks, Performance, SSR & Next.js |
| **CSS & Tailwind** | 20 | CSS Fundamentals, CSS Layouts, Tailwind CSS |

**Total: 400+ cards**

---

## Features

- Multi-subject navigation grouped into **Core / Backend / Frontend** bars
- Category filter bar — drill into specific topics within a subject
- 3D card flip animation (CSS `transform-style: preserve-3d`)
- **"Got it"** button — track known cards, persists across shuffle
- Progress bar and **"X of Y"** indicator
- Shuffle deck (Fisher-Yates algorithm)
- Reset progress
- Keyboard shortcuts: `←` `→` navigate · `Space` flip · `K` mark known
- Difficulty badges: Beginner / Intermediate / Advanced
- Code tip blocks with syntax-highlighted snippets on answer cards

---

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript (ES2022) — zero dependencies
- GitHub Actions CI/CD → GitHub Pages deployment
- `node --check` syntax validation on every push to `master`

---

## Project Structure

```
Flash_cards/
├── index.html              # App shell and markup
├── style.css               # Dark theme, 3D flip animation
├── app.js                  # All card data, state management, DOM logic
├── README.md
├── CLAUDE.md               # Dev instructions for Claude
└── .github/
    └── workflows/
        └── CI_deployy.yml  # Validate + deploy to GitHub Pages
```

---

## Getting Started

Open `index.html` directly in a browser — no install or build step required.

```bash
# Or serve locally with any static server
npx serve .
```

---

## Author

@TanQHoang — 2026
