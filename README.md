# Dev Flash Cards

A multi-subject developer flash card web app built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

**Live Demo:** https://tanhoang0803.github.io/Fash-Cards-for-my-Life/

**Project Spec:** https://roadmap.sh/projects/flash-cards

---

## Subjects & Cards

### Cheat Sheet
| Subject | Description |
|---|---|
| **Junior Dev Daily Essentials** | Interactive cheatsheet — JS, React+Redux, SQL, Linux, NestJS, TypeScript, DSA, Enterprise Infra Arch, FS Tooling, Docker, Next.js, CI/CD |

### Core
| Subject | Cards | Categories |
|---|---|---|
| **DSA_JavaScript** | 59+ | Overview, Fundamentals, Linked Lists, Stacks & Queues, Heaps, Sorting, Strategy Patterns, Advanced Topics, Ecosystem, Arrays, Strings, HashMap, Searching, Recursion, Trees, Graph, Dynamic Programming, Patterns |
| **Internet** | 20 | How Internet Works, HTTP & Web, DNS & Domains, Browsers |
| **Linux** | 25 | Linux Basics, Files & Permissions, Processes & System, Networking & SSH, Shell Scripting |
| **Tricked Memory** | 3+ | SQL (FJ WGH SOL — execution order mnemonic) |
| **Enterprise Infrastructure Architectures** | 38 | Overview, Core Infrastructure, AI Runtime Integration, Observability & Security, Third-party & SaaS, Data Layer, Frontend Layer, CI/CD & GitOps, Scaling & Multi-tenancy, Cloud & File Services |
| **Full-Stack Enterprise Tooling** | 17+ | FS Overview, Hosting & CDN, Databases & ORM, Auth & Identity, Payments & Billing, Communication, CMS & Content, Analytics & Observability, CRM & Automation, AI & RAG Tools, Forms & Validation, DevOps & CI/CD, Dev Experience |
| **Next.js** | 21 | Next.js Overview, Rendering Strategies, App Router, Server vs Client Components, Data Fetching, Server Actions, Streaming & Suspense, Performance, Middleware & API Routes, State Management, Next.js Ecosystem, Advanced Patterns, Best Practices, Next.js Interview |

### Language
| Subject | Cards | Categories |
|---|---|---|
| **Python** | 22 | Core Python, OOP & Design, Ecosystem |
| **C#** | 18+ | C# Basics, Core C#, OOP & Patterns, LINQ & Async, Modern C#, Useful Daily Tools, DSA in C#, Advanced Topics |
| **C++** | 30+ | Overview, Core C++, Modern C++, Daily Tools, DSA in C++, Advanced C++ |
| **TypeScript** | 31 | Type Fundamentals, Advanced Types, Generics, OOP & Classes, Functions & Async, Real-world Patterns, Modules & Tooling, Best Practices |
| **JavaScript** | 80+ | Overview, Fundamentals, Core JavaScript, ES6+, Async JavaScript, DOM & Browser, Data Structures, Advanced, Performance, Testing, Ecosystem, JS Functions, JS Patterns, Interview |

### Frontend
| Subject | Cards | Categories |
|---|---|---|
| **Html** | 20+ | Overview, Fundamentals, Advanced Features, Performance & Security |
| **CSS** | 20 | CSS Fundamentals, CSS Layouts, Tailwind CSS |
| **npm** | 15+ | Overview, Fundamentals, Advanced Features |
| **Git/Github** | 20+ | Overview, Fundamentals, Advanced Features |
| **Tailwind CSS** | 15+ | Overview, Fundamentals, Advanced Features |
| **React & SSR** | 31 | Overview, Fundamentals, Lifecycle, Hooks, Data Flow, Performance, Ecosystem, Advanced, Interview |
| **Redux** | 15+ | Overview, Fundamentals, Advanced Features |

### Backend
| Subject | Cards | Categories |
|---|---|---|
| **NestJS** | 35+ | Overview, Architecture & Bootstrap, Modules & DI, Request Pipeline, Guards & Interceptors, Advanced NestJS |
| **Node.js** | 25 | Node.js Basics, Async Patterns, HTTP & Express, Data & Storage, Performance & Production |
| **Express.js** | 15+ | Core Express, Async & Data |
| **SQL** | 60+ | Core, SQL Basics, DDL, DML, DQL, DCL, IF & CASE, Joins & Aggregation, Advanced SQL, GROUP BY Patterns, SQL Patterns |
| **Database** | 26+ | Relational DB, NoSQL, DB Design & Perf, PostgreSQL |
| **PostgreSQL** | 20+ | Overview, Fundamentals, Core Concepts, Daily Tools, Advanced Features, Performance & Security, Ecosystem |
| **API** | 30+ | JSON Basics, REST Fundamentals, REST Design, API in Practice, JWT, OAuth2 |
| **JWT authentication** | — | *(in progress)* |
| **Redis** | — | *(in progress)* |
| **Testing & Containers** | 20 | Testing, Docker, Kubernetes |
| **CI/CD** | 20 | CI/CD Overview, CI Fundamentals, GitHub Actions, Deployment Strategies, GitOps & IaC, DevSecOps, Observability & DORA, Monorepo CI/CD, CI/CD Interview |
| **AI-assist** | — | *(in progress)* |
| **Third-party generation** | — | *(in progress)* |

### DevOps
| Subject | Cards | Categories |
|---|---|---|
| **Docker** | 37 | Overview, Core Architecture, Dockerfile Mastery, Essential Commands, Docker Compose, Networking, Volumes & Storage, Security & Hardening, Advanced Concepts, CI/CD & Registry, Interview Scenarios |

**Total: 700+ cards**

---

### Full-Stack Enterprise Tooling — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **FS Overview** | 2 | 12-pillar full roadmap (ASCII tree) · SaaS fast stack vs Enterprise heavy stack |
| **Hosting & CDN** | 1 | Vercel · Cloudflare · AWS EKS/ECS · Railway/Render — when to choose each |
| **Databases & ORM** | 3 | PostgreSQL+pgvector · Prisma vs Drizzle · Redis multi-purpose · S3/Cloudinary/UploadThing |
| **Auth & Identity** | 1 | Clerk · Auth.js · Supabase Auth · Auth0 — trade-offs |
| **Payments & Billing** | 1 | Stripe · Paddle / Lemon Squeezy |
| **Communication** | 1 | Resend · SendGrid/Postmark · Twilio · Pusher/Ably |
| **CMS & Content** | 1 | Payload CMS · Contentful · Sanity.io · Strapi |
| **Analytics & Observability** | 1 | PostHog · Sentry · Mixpanel/Amplitude |
| **CRM & Automation** | 1 | HubSpot · Zapier · Make.com · n8n |
| **AI & RAG Tools** | 2 | Vercel AI SDK · pgvector · Pinecone · LiteLLM · LangChain.js |
| **Forms & Validation** | 1 | React Hook Form + Zod · UploadThing |
| **DevOps & CI/CD** | 1 | GitHub Actions · Turborepo+pnpm · Docker+K8s+Terraform · Argo CD |
| **Dev Experience** | 1 | shadcn/ui + Tailwind · TanStack Query · Zod · Swagger/OpenAPI |

#### Recommended Stacks
```
SaaS Fast:    Next.js · NestJS+Prisma · Clerk+Stripe · Resend+PostHog · pgvector · Vercel+Railway
Enterprise:   Auth0 · Contentful/Sanity · HubSpot/Salesforce · AWS EKS · OTel+Prometheus+Grafana
```

---

### Enterprise Infrastructure Architectures — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Overview** | 1 | Full tree mindmap · 9 pillars · recommended stack · evolution path |
| **Core Infrastructure** | 4 | Turborepo+pnpm monorepo · Docker multi-stage+Node 22 · K8s+Helm+Terraform (EKS) · Secrets & config |
| **AI Runtime Integration** | 5 | Vercel AI SDK (streamText/tools/useChat) · RAG + pgvector · LiteLLM gateway · LangChain.js/LangGraph · AI feature patterns |
| **Observability & Security** | 4 | OpenTelemetry full stack · LangSmith/LangFuse AI obs · Resilience (circuit breaker/retry) · Security (prompt injection/mTLS/WAF) |
| **Third-party & SaaS** | 4 | Auth (Clerk/Auth.js/Auth0) · Stripe webhooks · Outbox pattern · PostHog + feature flags |
| **Data Layer** | 3 | Prisma vs Drizzle · Redis multi-purpose (BullMQ/pub-sub) · Kafka vs SQS vs Redis Streams |
| **Frontend Layer** | 3 | Next.js App Router + React 19 Server Components · shadcn/ui + Tailwind · Vercel AI streaming |
| **CI/CD & GitOps** | 4 | GitHub Actions + Turborepo · Argo CD GitOps · Blue-green/canary delivery · AI dev tools |
| **Scaling & Multi-tenancy** | 3 | Multi-tenancy + RLS · KEDA + GPU AI scaling · Serverless vs K8s |
| **Cloud & File Services** | 3 | S3 + presigned URLs · Cloud choice 2026 · NestJS + Fastify + API Gateway |

#### Recommended Enterprise Stack 2026
```
Turborepo+pnpm → Next.js+shadcn/ui → NestJS+Prisma+Zod → PostgreSQL+pgvector+Redis
→ Vercel AI SDK+LiteLLM → Clerk+Stripe+Resend → Docker+K8s+Argo CD
```

#### Evolution Path
```
MVP: Docker + Vercel → Add RAG + Clerk + Stripe → Mature: K8s + GitOps → Enterprise: multi-LLM + OpenTelemetry
```

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

### Next.js — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **Next.js Overview** | 1 | Full 10-area ASCII mindmap — rendering, routing, data fetching, performance, ecosystem |
| **Rendering Strategies** | 2 | SSR/SSG/ISR/CSR/PPR trade-offs · PPR deep dive (static shell + streaming dynamic holes) |
| **App Router** | 2 | File conventions (layout/page/loading/error/route) · dynamic, catch-all, route groups, parallel & intercepted routes |
| **Server vs Client Components** | 2 | Decision table · composition patterns · "use client" boundary semantics · "use server" = Server Actions only |
| **Data Fetching** | 2 | fetch() options (no-store/revalidate/tags) · 4 caching layers · revalidatePath vs revalidateTag |
| **Server Actions** | 1 | "use server", form actions, progressive enhancement, useActionState, useOptimistic |
| **Streaming & Suspense** | 1 | loading.tsx · granular Suspense · parallel streams · PPR pattern |
| **Performance** | 2 | next/image (WebP/CLS=0) · next/font (zero layout shift) · next/dynamic · Turbopack (`next dev --turbo`) |
| **Middleware & API Routes** | 2 | Edge middleware (auth/geo/A/B) · Route Handlers · Server Action vs Route Handler vs NestJS decision |
| **State Management** | 1 | TanStack Query · Zustand · URL state with nuqs |
| **Next.js Ecosystem** | 1 | Clerk vs Auth.js · Vercel AI SDK · CMS + ISR webhooks · shadcn/ui · standalone Docker |
| **Advanced Patterns** | 1 | Multi-tenancy · taintObjectReference (React 19) · standalone Docker output · i18n · React Compiler 2026 |
| **Best Practices** | 1 | Rendering decision guide · Server Component by default · anti-patterns |
| **Next.js Interview** | 1 | 10 deep-dive topics: PPR, 4 cache layers, boundary semantics, React Compiler, decision matrix |

#### Next.js Learning Path
```
App Router basics → Server vs Client Components → Data Fetching & Caching
→ Server Actions → Streaming & Suspense → Performance → Middleware → Ecosystem
```

---

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

---

### CI/CD — Detailed Breakdown

| Category | Cards | Topics |
|---|---|---|
| **CI/CD Overview** | 1 | Full 8-pillar ASCII mindmap |
| **CI Fundamentals** | 5 | CI vs Delivery vs Deployment · pipeline stages · trunk-based vs GitFlow · testing pyramid · Docker image tagging |
| **GitHub Actions** | 2 | YAML anatomy, matrix, caching, secrets, environments · reusable workflows, composite actions, OIDC, self-hosted runners |
| **Deployment Strategies** | 4 | Blue-green (zero downtime) · Canary (Argo Rollouts, Prometheus auto-rollback) · Rolling (maxSurge, readiness probes) · Feature flags (LaunchDarkly/PostHog) |
| **GitOps & IaC** | 2 | Argo CD pull model, Git as source of truth · Terraform plan/apply, S3 state, AWS CDK |
| **DevSecOps** | 2 | SCA/SAST/DAST comparison and pipeline placement · Secrets (GitHub Secrets, Vault, BuildKit, TruffleHog) |
| **Observability & DORA** | 2 | DORA 4 metrics with elite benchmarks · health checks, Prometheus, Sentry, auto-rollback |
| **Monorepo CI/CD** | 1 | Turborepo affected builds, remote cache, Nx, advantages |
| **CI/CD Interview** | 1 | Top 8 senior interview questions with precise answers |

---

## Features

- Multi-subject navigation grouped into **Cheat Sheet / Core / Language / Frontend / Backend / DevOps** bars
- **Quiz-Space** button in header — opens `interview-quiz-space.vercel.app` for live interview practice
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
- **Cheatsheet page** (`cheatsheet.html`) — dense printable reference for JS, React+Redux, SQL, Linux, NestJS, TypeScript, DSA, Enterprise Infra Arch, FS Tooling, Docker, Next.js, and CI/CD

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
├── cheatsheet.html         # Dense quick-reference cheatsheet page
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
