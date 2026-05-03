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
│   ├── Quiz-Space button (links to interview-quiz-space.vercel.app)
│   ├── Shuffle & Reset buttons
│   ├── Progress Bar
│   └── Progress Indicator ("X of Y")
│
├── Subject Menu (nav#subjectMenu) — 6 grouped bars
│   ├── [CHEAT SHEET] Junior Dev Daily Essentials
│   ├── [CORE]        DSA_JavaScript · Internet · Linux · Tricked Memory · Enterprise Infrastructure Architectures · Full-Stack Enterprise Tooling · Next.js
│   ├── [LANGUAGE]    Python · C# · C++ · TypeScript · JavaScript
│   ├── [FRONTEND]    Html · CSS · npm · Git/Github · Tailwind CSS · React & SSR · Redux
│   ├── [BACKEND]     NestJS · Node.js · Express.js · SQL · Database · PostgreSQL · API · JWT authentication · Redis · Testing & Containers · CI/CD · AI-assist · Third-party generation
│   └── [DEVOPS]      Docker
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
        │   ├── Image         (#cardImage — shown instead of question when card.image set)
        │   ├── Question text (#questionText — hidden when card.image is set)
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
    └── Author credit ("Copyright © 2026 TanQHoang")
```

---

## All Subjects & Card Counts

### Cheat Sheet
| Subject | Description |
|---|---|
| Junior Dev Daily Essentials | Interactive cheatsheet — opens `cheatsheet.html` (JS, React+Redux, SQL, Linux, NestJS, TypeScript, DSA, Enterprise Infra Arch, FS Tooling, Docker, Next.js, CI/CD, Redis) |

### Core
| Subject | Cards | Categories |
|---|---|---|
| DSA_JavaScript | 59+ | Overview, Fundamentals, Linked Lists, Stacks & Queues, Heaps, Sorting, Strategy Patterns, Advanced Topics, Ecosystem, Arrays, Strings, HashMap, Searching, Recursion, Trees, Graph, Dynamic Programming, Patterns |
| Internet | 20 | How Internet Works, HTTP & Web, DNS & Domains, Browsers |
| Linux | 25 | Linux Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| Tricked Memory | 3+ | SQL (FJ WGH SOL — execution order mnemonic) |
| Enterprise Infrastructure Architectures | 38 | Overview, Core Infrastructure, AI Runtime Integration, Observability & Security, Third-party & SaaS, Data Layer, Frontend Layer, CI/CD & GitOps, Scaling & Multi-tenancy, Cloud & File Services |
| Full-Stack Enterprise Tooling | 17+ | FS Overview, Hosting & CDN, Databases & ORM, Auth & Identity, Payments & Billing, Communication, CMS & Content, Analytics & Observability, CRM & Automation, AI & RAG Tools, Forms & Validation, DevOps & CI/CD, Dev Experience |
| Next.js | 21 | Next.js Overview, Rendering Strategies, App Router, Server vs Client Components, Data Fetching, Server Actions, Streaming & Suspense, Performance, Middleware & API Routes, State Management, Next.js Ecosystem, Advanced Patterns, Best Practices, Next.js Interview |

### Language
| Subject | Cards | Categories |
|---|---|---|
| Python | 22 | Core Python, OOP & Design, Ecosystem |
| C# | 18+ | C# Basics, Core C#, OOP & Patterns, LINQ & Async, Modern C#, Useful Daily Tools, DSA in C#, Advanced Topics |
| C++ | 30+ | Overview, Core C++, Modern C++, Daily Tools, DSA in C++, Advanced C++ |
| TypeScript | 31 | Type Fundamentals, Advanced Types, Generics, OOP & Classes, Functions & Async, Real-world Patterns, Modules & Tooling, Best Practices |
| JavaScript | 80+ | Overview, Fundamentals, Core JavaScript, ES6+, Async JavaScript, DOM & Browser, Data Structures, Advanced, Performance, Testing, Ecosystem, JS Functions, JS Patterns, Interview |

### Frontend
| Subject | Cards | Categories |
|---|---|---|
| Html | 20+ | Overview, Fundamentals, Advanced Features, Performance & Security |
| CSS | 20 | CSS Fundamentals, CSS Layouts, Tailwind CSS |
| npm | 15+ | Overview, Fundamentals, Advanced Features |
| Git/Github | 20+ | Overview, Fundamentals, Advanced Features |
| Tailwind CSS | 15+ | Overview, Fundamentals, Advanced Features |
| React & SSR | 31 | Overview, Fundamentals, Lifecycle, Hooks, Data Flow, Performance, Ecosystem, Advanced, Interview |
| Redux | 15+ | Overview, Fundamentals, Advanced Features |

### Backend
| Subject | Cards | Categories |
|---|---|---|
| NestJS | 35+ | Overview, Architecture & Bootstrap, Modules & DI, Request Pipeline, Guards & Interceptors, Advanced NestJS |
| Node.js | 25 | Node.js Basics, Async Patterns, HTTP & Express, Data & Storage, Performance & Production |
| Express.js | 15+ | Core Express, Async & Data |
| SQL | 60+ | Core, SQL Basics, DDL, DML, DQL, DCL, IF & CASE, Joins & Aggregation, Advanced SQL, GROUP BY Patterns, SQL Patterns |
| Database | 26+ | Relational DB, NoSQL, DB Design & Perf, PostgreSQL |
| PostgreSQL | 20+ | Overview, Fundamentals, Core Concepts, Daily Tools, Advanced Features, Performance & Security, Ecosystem |
| API | 30+ | JSON Basics, REST Fundamentals, REST Design, API in Practice, JWT, OAuth2 |
| JWT authentication | — | *(in progress)* |
| Redis | 34 | Redis Overview, Redis Architecture, Redis Data Structures, Caching Patterns, Redis Use Cases, Scaling & HA, Transactions & Atomicity, Pub/Sub & Streams, Cache Problems, Redis Operations, Redis Interview |
| Testing & Containers | 20 | Testing, Docker, Kubernetes |
| CI/CD | 20 | CI/CD Overview, CI Fundamentals, GitHub Actions, Deployment Strategies, GitOps & IaC, DevSecOps, Observability & DORA, Monorepo CI/CD, CI/CD Interview |
| AI-assist | — | *(in progress)* |
| Third-party generation | — | *(in progress)* |

### DevOps
| Subject | Cards | Categories |
|---|---|---|
| Docker | 37 | Overview, Core Architecture, Dockerfile Mastery, Essential Commands, Docker Compose, Networking, Volumes & Storage, Security & Hardening, Advanced Concepts, CI/CD & Registry, Interview Scenarios |

**Total: 770+ cards**

### CI/CD — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **CI/CD Overview** | 1 | Full 8-pillar ASCII mindmap |
| **CI Fundamentals** | 5 | CI vs Delivery vs Deployment · pipeline stages · trunk-based vs GitFlow · testing pyramid · Docker image tagging |
| **GitHub Actions** | 2 | YAML anatomy, matrix, caching, secrets, environments · reusable workflows, composite actions, OIDC, self-hosted runners |
| **Deployment Strategies** | 4 | Blue-green · Canary (Argo Rollouts, Prometheus auto-rollback) · Rolling (maxSurge, readiness probes) · Feature flags |
| **GitOps & IaC** | 2 | Argo CD pull model · Terraform plan/apply, S3 state, AWS CDK |
| **DevSecOps** | 2 | SCA/SAST/DAST · Secrets (GitHub Secrets, Vault, BuildKit, TruffleHog) |
| **Observability & DORA** | 2 | DORA 4 metrics · health checks, Prometheus, Sentry, auto-rollback |
| **Monorepo CI/CD** | 1 | Turborepo affected builds, remote cache, Nx |
| **CI/CD Interview** | 1 | Top 8 senior interview questions |

### Redis — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Redis Overview** | 1 | Full 10-pillar ASCII mindmap |
| **Redis Architecture** | 3 | Single-threaded event loop + epoll · RDB vs AOF vs Hybrid persistence · TTL & key expiration (lazy + active) |
| **Redis Data Structures** | 4 | String + List · Set + Sorted Set · Hash + Stream · HyperLogLog + Bitmap + Geo |
| **Caching Patterns** | 4 | Cache-aside (lazy loading) · Write-through vs Write-back · Pipelining (10× throughput) · Cache invalidation strategies |
| **Redis Use Cases** | 4 | Rate limiting (fixed + sliding window) · Session store · Leaderboard (Sorted Set) · BullMQ job queue in NestJS |
| **Scaling & HA** | 4 | Replication (read scaling) · Sentinel (auto-failover, quorum) · Cluster (16,384 hash slots, write scaling) · Eviction policies |
| **Transactions & Atomicity** | 3 | MULTI/EXEC · WATCH (optimistic lock) + Redlock · Lua EVAL (atomic conditional logic) |
| **Pub/Sub & Streams** | 3 | Pub/Sub (fire-and-forget) · Streams (persistent + consumer groups + XACK) · BullMQ vs Streams vs Kafka |
| **Cache Problems** | 4 | Avalanche (random TTL jitter) · Penetration (Bloom Filter + null cache) · Breakdown (mutex lock + logical expiry) · Stale data consistency |
| **Redis Operations** | 2 | Security (ACL, TLS, requirepass, rename-command) · Monitoring (SLOWLOG, INFO, RedisInsight, bigkeys) |
| **Redis Interview** | 2 | Core senior Q&A (fast, zero loss, Sentinel vs Cluster, 3 cache problems) · Distributed sliding window rate limiter design |

### Docker — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Overview** | 1 | Full 10-pillar mindmap — architecture, Dockerfile, commands, Compose, networking, volumes, security, CI/CD |
| **Core Architecture** | 3+ | Client-server model · images & layers (UnionFS/overlay2) · namespaces & cgroups |
| **Dockerfile Mastery** | 5+ | Instruction set · CMD vs ENTRYPOINT · layer caching · multi-stage builds · ARG vs ENV |
| **Essential Commands** | 3+ | build/run/exec/inspect · image management · container lifecycle · prune & cleanup |
| **Docker Compose** | 4+ | Multi-container apps · override files · health checks · depends_on · env vars |
| **Networking** | 3+ | Bridge / host / overlay drivers · DNS service discovery · port mapping |
| **Volumes & Storage** | 3+ | Named volumes · bind mounts · tmpfs · data persistence patterns |
| **Security & Hardening** | 3+ | Non-root users · minimal base images · image scanning · resource limits |
| **Advanced Concepts** | 3+ | BuildKit · Swarm vs Kubernetes · sidecar pattern · Docker-in-Docker |
| **CI/CD & Registry** | 3+ | GitHub Actions pipeline · image tagging strategies · ECR / GHCR push |
| **Interview Scenarios** | 3+ | Giant image debugging · zombie processes · secrets management · production troubleshooting |

### Full-Stack Enterprise Tooling — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **FS Overview** | 2 | 12-pillar full roadmap · SaaS fast stack vs Enterprise heavy stack |
| **Hosting & CDN** | 1 | Vercel · Cloudflare · AWS EKS/ECS · Railway/Render |
| **Databases & ORM** | 3 | PostgreSQL+pgvector · Prisma vs Drizzle · Redis · S3/Cloudinary/UploadThing |
| **Auth & Identity** | 1 | Clerk · Auth.js · Supabase Auth · Auth0 |
| **Payments & Billing** | 1 | Stripe · Paddle / Lemon Squeezy |
| **Communication** | 1 | Resend · SendGrid/Postmark · Twilio · Pusher/Ably |
| **CMS & Content** | 1 | Payload CMS · Contentful · Sanity.io · Strapi |
| **Analytics & Observability** | 1 | PostHog · Sentry · Mixpanel/Amplitude |
| **CRM & Automation** | 1 | HubSpot · Zapier · Make.com · n8n |
| **AI & RAG Tools** | 2 | Vercel AI SDK · pgvector · Pinecone · LiteLLM · LangChain.js |
| **Forms & Validation** | 1 | React Hook Form + Zod · UploadThing |
| **DevOps & CI/CD** | 1 | GitHub Actions · Turborepo+pnpm · Docker+K8s+Terraform · Argo CD |
| **Dev Experience** | 1 | shadcn/ui + Tailwind · TanStack Query · Zod · Swagger/OpenAPI |

### Enterprise Infrastructure Architectures — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Overview** | 1 | Full tree mindmap · 9 pillars · recommended stack · evolution path |
| **Core Infrastructure** | 4 | Turborepo+pnpm monorepo · Docker multi-stage+Node 22 · K8s+Helm+Terraform · Secrets & config |
| **AI Runtime Integration** | 5 | Vercel AI SDK · RAG + pgvector · LiteLLM gateway · LangChain.js/LangGraph · AI feature patterns |
| **Observability & Security** | 4 | OpenTelemetry · LangSmith/LangFuse · Resilience patterns · Security (prompt injection/mTLS/WAF) |
| **Third-party & SaaS** | 4 | Auth (Clerk/Auth.js/Auth0) · Stripe webhooks · Outbox pattern · PostHog + feature flags |
| **Data Layer** | 3 | Prisma vs Drizzle · Redis multi-purpose (BullMQ/pub-sub) · Kafka vs SQS vs Redis Streams |
| **Frontend Layer** | 3 | Next.js App Router + React 19 Server Components · shadcn/ui + Tailwind · Vercel AI streaming |
| **CI/CD & GitOps** | 4 | GitHub Actions + Turborepo · Argo CD · Blue-green/canary · AI dev tools |
| **Scaling & Multi-tenancy** | 3 | Multi-tenancy + RLS · KEDA + GPU AI scaling · Serverless vs K8s |
| **Cloud & File Services** | 3 | S3 + presigned URLs · Cloud choice 2026 · NestJS + Fastify + API Gateway |

### DSA_JavaScript — Detailed Breakdown

| Section | Category | Cards | Topics |
|---|---|---|---|
| Overview | **Overview** | 2 | Mind map image (images/DSA.png) · 6-section roadmap |
| Fundamentals | **Fundamentals** | 2 | Complexity Analysis (Big-O/Theta/Omega) · Math Basics (log, pow, modular, bit ops) |
| Core DS | **Linked Lists** | 2 | Singly LL · Doubly LL + LRU Cache |
| Core DS | **Stacks & Queues** | 2 | Stack + Monotonic Stack · Queue + Monotonic Deque |
| Core DS | **Heaps** | 1 | MinHeap implementation · Top-K patterns |
| Algorithms | **Sorting** | 2 | Simple (Bubble/Insertion/Selection) · Efficient (Merge/Quick) |
| Algorithms | **Strategy Patterns** | 3 | Greedy · Backtracking · Divide & Conquer |
| Algorithms | **Graph** | 2 | DFS · BFS (shortest path, Rotting Oranges) |
| Patterns | **Patterns** | 1 | Fast & Slow Pointers (Floyd's Cycle Detection) |
| Advanced | **Advanced Topics** | 4 | Dijkstra's · Kruskal/Prim MST + Union-Find · KMP + Rabin-Karp · Number Theory |
| Ecosystem | **Ecosystem** | 1 | LeetCode strategy · Real-world apps · Interview framework |
| Legacy | Arrays, Strings, HashMap, Searching, Recursion, Trees, Dynamic Programming, Patterns | 38 | Original DSA cards |

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

### Next.js — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Next.js Overview** | 1 | Full 10-area ASCII mindmap |
| **Rendering Strategies** | 2 | SSR/SSG/ISR/CSR/PPR trade-offs · PPR deep dive (static shell + streaming dynamic holes) |
| **App Router** | 2 | File conventions (layout/page/loading/error/route) · dynamic, catch-all, route groups, parallel & intercepted routes |
| **Server vs Client Components** | 2 | Decision table · composition patterns · "use client" boundary semantics |
| **Data Fetching** | 2 | fetch() options · 4 caching layers (Request Memo → Data Cache → Full Route Cache → Router Cache) · revalidatePath/Tag |
| **Server Actions** | 1 | "use server", form actions, progressive enhancement, useActionState, useOptimistic |
| **Streaming & Suspense** | 1 | loading.tsx · granular Suspense · parallel streams · PPR |
| **Performance** | 2 | next/image · next/font · next/dynamic · Turbopack |
| **Middleware & API Routes** | 2 | Edge middleware · Route Handlers · Server Action vs Route Handler vs NestJS |
| **State Management** | 1 | TanStack Query · Zustand · URL state (nuqs) |
| **Next.js Ecosystem** | 1 | Clerk vs Auth.js · Vercel AI SDK · CMS + ISR · shadcn/ui · standalone Docker |
| **Advanced Patterns** | 1 | Multi-tenancy · taintObjectReference · standalone Docker · i18n · React Compiler 2026 |
| **Best Practices** | 1 | Rendering decision guide · anti-patterns |
| **Next.js Interview** | 1 | PPR · 4 cache layers · boundary semantics · React Compiler · decision matrix |

---

## Architecture (`app.js`)

### Card Data Structure
Each subject has a `const SUBJECTNAME_CARDS = [...]` array.
Each card object:
```js
{
  category:   'Category Name',          // string — used for filter bar
  difficulty: 'Beginner',               // 'Beginner' | 'Intermediate' | 'Advanced'
  question:   'What is ...?',           // shown on card front (hidden when image set)
  answer:     'Answer text...',         // shown on card back
  tip:        `optional code block`,    // shown in tip-block on back (optional)
  image:      'images/foo.png',         // optional — shows image on front, hides question
}
```

### Config Objects
```js
// Controls menu order
const SUBJECTS = { 'SubjectName': SUBJECT_CARDS, ... };

// Subject menu grouped into labeled bars
const SUBJECT_GROUPS = {
  'Cheat Sheet': ['Junior Dev Daily Essentials'],
  'Core':        ['DSA_JavaScript', 'Internet', 'Linux', 'Tricked Memory', 'Enterprise Infrastructure Architectures', 'Full-Stack Enterprise Tooling', 'Next.js'],
  'Language':    ['Python', 'C#', 'C++', 'TypeScript', 'JavaScript'],
  'Frontend':    ['Html', 'CSS', 'npm', 'Git/Github', 'Tailwind CSS', 'React & SSR', 'Redux'],
  'Backend':     ['NestJS', 'Node.js', 'Express.js', 'SQL', 'Database', 'PostgreSQL', 'API', 'JWT authentication', 'Redis', 'Testing & Containers', 'CI/CD', 'AI-assist', 'Third-party generation'],
  'DevOps':      ['Docker'],
};

// Subjects that open a separate page instead of loading flash cards
const LINK_SUBJECTS = {
  'Junior Dev Daily Essentials': 'cheatsheet.html',
};

// Group label pill colors
const GROUP_COLORS = {
  'Cheat Sheet': '#10b981',
  'Core':        '#f97316',
  'Language':    '#ec4899',
  'Frontend':    '#61dafb',
  'Backend':     '#6366f1',
  'DevOps':      '#f43f5e',
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
  activeSubject: 'DSA_JavaScript', // currently selected subject
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
| `buildSubjectMenu()` | Renders grouped subject nav (Cheat Sheet/Core/Language/Frontend/Backend/DevOps bars) |
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
6. If the subject opens a separate page instead of cards, add it to `LINK_SUBJECTS`
7. Run `node --check app.js` — fix any syntax errors before continuing
8. `git add app.js && git commit && git push` → CI validates + deploys

## Adding a Cheatsheet Section — Checklist

1. Add CSS variable pair to `:root` in `cheatsheet.html` (e.g. `--foo: #hex; --foo-dim: #hex22;`)
2. Add `.pill-foo`, `.card.foo-card`, `.big-label.foo`, `.card h3.foo`, `.tip.foo-tip` CSS classes
3. Add `<span class="pill pill-foo">Label</span>` to the header pills div
4. Update the `<p>` subtitle in the header
5. Add `<div class="big-label foo"><span class="num">N</span> Title</div>` before the section HTML
6. Add section HTML using `grid-2 / grid-3 / grid-4` layouts with `class="card foo-card"`
7. Update the footer text

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
├── cheatsheet.html          # Dense quick-reference cheatsheet (linked from menu)
├── images/
│   └── DSA.png              # Mind map image for DSA_JavaScript overview card
├── README.md
├── CLAUDE.md
└── .github/
    └── workflows/
        └── CI_deployy.yml
```
