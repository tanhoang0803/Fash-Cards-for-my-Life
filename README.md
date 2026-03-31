# Dev Flash Cards

A multi-subject developer flash card web app built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**Live Demo:** https://tanhoang0803.github.io/Fash-Cards-for-my-Life/

**Project Spec:** https://roadmap.sh/projects/flash-cards

---

## Subjects & Cards

### Core
| Subject | Cards | Categories |
|---|---|---|
| **DSA_JavaScript** | 59+ | Overview, Fundamentals, Linked Lists, Stacks & Queues, Heaps, Sorting, Strategy Patterns, Advanced Topics, Ecosystem, Arrays, Strings, HashMap, Searching, Recursion, Trees, Graph, Dynamic Programming, Patterns |
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
| **JavaScript** | 80+ | Overview, Fundamentals, Core JavaScript, ES6+, Async JavaScript, DOM & Browser, Data Structures, Advanced, Performance, Testing, Ecosystem, JS Functions, JS Patterns, Interview |
| **React & SSR** | 31 | Overview, Fundamentals, Lifecycle, Hooks, Data Flow, Performance, Ecosystem, Advanced, Interview |
| **CSS & Tailwind** | 20 | CSS Fundamentals, CSS Layouts, Tailwind CSS |

**Total: 470+ cards**

---

### DSA_JavaScript — Detailed Breakdown

| Section | Category | Cards | Topics |
|---|---|---|---|
| Overview | **Overview** | 2 | Mind map image (images/DSA.png) · 6-section roadmap |
| Fundamentals | **Fundamentals** | 2 | Complexity Analysis (Big-O/Theta/Omega) · Math Basics (log, pow, modular, bit ops) |
| Core DS | **Linked Lists** | 2 | Singly LL (reverse, middle, merge) · Doubly LL + LRU Cache |
| Core DS | **Stacks & Queues** | 2 | Stack + Monotonic Stack · Queue + Monotonic Deque |
| Core DS | **Heaps** | 1 | Min-Heap implementation · Top-K patterns |
| Algorithms | **Sorting** | 2 | Simple (Bubble/Insertion/Selection) · Efficient (Merge/Quick) |
| Algorithms | **Strategy Patterns** | 3 | Greedy · Backtracking · Divide & Conquer |
| Algorithms | **Graph** | 2 | DFS · BFS (shortest path, Rotting Oranges) |
| Patterns | **Patterns** | 1 | Fast & Slow Pointers (Floyd's Cycle Detection) |
| Advanced | **Advanced Topics** | 4 | Dijkstra's · Kruskal/Prim MST + Union-Find · KMP + Rabin-Karp · Number Theory |
| Ecosystem | **Ecosystem** | 1 | LeetCode strategy · Real-world apps · Interview framework |
| Legacy | Arrays, Strings, HashMap, Searching, Recursion, Trees, Dynamic Programming | 38 | Original DSA cards |

#### DSA Learning Path
```
Fundamentals → Core DS (Arrays/Strings/LL/Stack/Queue/Heap) → Searching & Sorting
→ Tree/Graph Traversals → Coding Patterns (Sliding Window, Two Pointers, Fast&Slow, Prefix Sum)
→ Strategy Patterns (Greedy/Backtracking/DP) → Advanced Topics
```

---

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
| **JS Patterns** | 33 | Array Transformation · Functional Programming (compose/pipe/curry) · Performance (debounce/throttle/memoize) · Object/Data Handling · Async Patterns (retry+backoff) · Core Internals (closure/module/singleton/factory/prototype/event delegation) |
| **Interview** | 10 | var vs let vs const · Closure · Hoisting · this · Event loop · Promises · async/await · Destructuring · Spread · map/filter/reduce |

#### Learning Paths
```
Frontend Developer:   Core JS → ES6+ → DOM → Async JS → React → Performance
Backend Developer:    Fundamentals → ES6 → Async → Node.js → API → Database
```

---

### React & SSR — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Overview** | 1 | Full mindmap · 7 core areas · Core interview knowledge |
| **Fundamentals** | 4 | Functional vs Class · JSX · Props · State |
| **Lifecycle** | 3 | Mounting · Updating · Unmounting (useEffect patterns) |
| **Hooks** | 5 | useState · useEffect · useRef/useCallback/useMemo · useContext · useReducer |
| **Data Flow** | 3 | One-way binding · Lifting state up · Context API |
| **Performance** | 3 | Virtual DOM & reconciliation · React.memo/useMemo/useCallback · Code splitting & lazy loading |
| **Ecosystem** | 3 | React Router · Redux / Zustand / Context · Testing (Jest, RTL) |
| **Advanced** | 3 | SSR & Next.js (CSR/SSR/SSG/ISR) · Concurrent rendering · Suspense & Error Boundaries |
| **Interview** | 6 | Declarative · Component-based architecture · State vs Props · Hooks · Virtual DOM · One-way data flow |

---

## Features

- Multi-subject navigation grouped into **Core / Backend / Frontend** bars
- Category filter bar — drill into specific topics within a subject
- 3D card flip animation (CSS `transform-style: preserve-3d`)
- **Image cards** — mind map / overview cards display a full image on the front face
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
├── images/                 # Mind map and overview images
│   └── DSA.png
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

Copyright © 2026 TanQHoang
