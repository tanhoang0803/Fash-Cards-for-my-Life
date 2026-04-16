/* ═══════════════════════════════════════════════════════════
   DSA_JavaScript — Data Structures & Algorithms (JavaScript)
═══════════════════════════════════════════════════════════ */
const DSA_JAVASCRIPT_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════

  // 0.1 Mind Map Image
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'DSA (JavaScript) — Full Mind Map',
    answer: 'DSA in JavaScript covers 6 areas: 🔴 Fundamentals (Big-O, Recursion, Math) · 🟡 Core Data Structures (Linear: Arrays / Strings / Linked Lists / Stacks / Queues · Hashing: Map & Set · Nonlinear: Trees / Heaps / Graphs) · 🔵 Algorithms (Searching, Sorting, DFS/BFS Traversals, Greedy, Backtracking, DP, Divide & Conquer) · 🟢 Coding Patterns ⭐ (Sliding Window, Two Pointers, Fast & Slow, Prefix Sum, Recursion + DP) · 🟣 Advanced Topics (Graph Algorithms, String Algorithms, Number Theory) · 🚀 Ecosystem (LeetCode / HackerRank, Real-world Applications, Clean Code).',
    image: 'images/DSA.png',
  },

  // 0.2 Overview — 6 Sections Roadmap
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'DSA (JavaScript) — Full Roadmap: 6 sections, all topics at a glance',
    answer: '6 sections: 🔴 Fundamentals & Analysis · 🟡 Core Data Structures · 🔵 Algorithms · 🟢 Coding Patterns ⭐ · 🟣 Advanced Topics · 🚀 Ecosystem & Applications',
    tip: `DSA (JavaScript)
│
├─ 🔴 1. Fundamentals & Analysis
│   ├─ Complexity Analysis
│   │   └─ Big-O · Big-Theta · Big-Omega · Time vs Space Tradeoffs
│   ├─ Recursion & Iteration
│   │   ├─ Base case · Call stack · Lessons (Factorial, Fibonacci in JS)
│   │   └─ Loop structures (for · while · for...of · forEach)
│   └─ Math Basics
│       └─ Math.log · Math.pow · Modular arithmetic · Bit manipulation
│
├─ 🟡 2. Core Data Structures (Storage)
│   ├─ Linear Structures
│   │   ├─ Arrays: push · pop · map · filter · reduce · slice · splice
│   │   ├─ Strings: split · includes · substring · charCodeAt
│   │   ├─ Linked Lists
│   │   │   ├─ Singly: class Node { val, next }
│   │   │   └─ Doubly: class Node { val, next, prev }
│   │   ├─ Stacks: LIFO · push · pop (arr.push/pop)
│   │   └─ Queues: FIFO · enqueue · dequeue (arr.push/shift)
│   ├─ Hashing
│   │   └─ Map vs Object in JS · Set · Hashing logic (index = hash % size)
│   └─ Nonlinear Structures
│       ├─ Trees
│       │   ├─ Binary Trees: class TreeNode { val, left, right }
│       │   └─ Binary Search Trees (BST): insert · search · delete logic
│       ├─ Heaps
│       │   └─ Min-Heap · Max-Heap (parent/child index math)
│       └─ Graphs
│           └─ Adjacency List (Map) vs Adjacency Matrix (2D Array)
│
├─ 🔵 3. Algorithms (Processing)
│   ├─ Searching
│   │   └─ Linear Search · Binary Search (O(log n) template)
│   ├─ Sorting
│   │   ├─ Simple: Bubble · Insertion · Selection
│   │   └─ Efficient: Merge Sort (Divide & Conquer) · Quicksort (Partitioning)
│   ├─ Traversals (The "Explorer" logic)
│   │   ├─ Trees: DFS (In/Pre/Post-order) · BFS (Level-order)
│   │   └─ Graphs: DFS (Recursion/Stack) · BFS (Queue)
│   ├─ Strategy Patterns
│   │   ├─ Greedy: Activity selection · Coin change
│   │   ├─ Backtracking: N-Queens · Permutations · Subsets
│   │   └─ Dynamic Programming: Memoization · Tabulation · Knapsack · LIS
│   └─ Divide & Conquer
│       └─ Logic: Split → Solve → Combine (Merge/Quick sort)
│
├─ 🟢 4. Coding Patterns (Problem Solving ⭐)
│   ├─ Sliding Window: max subarray · substring problems
│   ├─ Two Pointers: sorted arrays · reverse string · linked list middle
│   ├─ Fast & Slow Ptrs: Cycle detection (Floyd's) · Find middle
│   ├─ Prefix Sum: Range sum queries · Subarray sum equals K
│   └─ Recursion + DP: Optimal substructure · Overlapping subproblems
│
├─ 🟣 5. Advanced Topics (System Scale)
│   ├─ Graph Algorithms
│   │   └─ Dijkstra's (Shortest path) · Kruskal/Prim (MST)
│   ├─ String Algorithms
│   │   └─ KMP · Rabin-Karp · Z-algorithm
│   └─ Number Theory
│       └─ GCD · Sieve of Eratosthenes · Modular exponentiation
│
└─ 🚀 6. Ecosystem & Applications
    ├─ Competitive Prog: LeetCode · HackerRank · Technical Interview Skills
    ├─ Real-world: Databases (B-Trees) · Networking (Graphs) · AI/ML (DP)
    └─ Clean Code: Naming · Edge cases · Readability in Technical Interviews

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Arrays & Strings → Linked Lists → Stacks & Queues → Hash Maps
Intermediate: Trees → BST → Heaps → Graphs → Searching & Sorting
Advanced:     Dynamic Programming → Backtracking → Greedy → Divide & Conquer
              → String Algorithms → Graph Algorithms
Integration:  Practice problems → Competitive programming → Real-world applications

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Complexity:        Big-O notation · time vs space tradeoffs
Recursion:         base case · call stack · converting recursion <-> iteration
Data Structures:   arrays · linked lists · stacks · queues · hash maps · trees · graphs
Algorithms:        binary search · merge sort · quicksort · BFS/DFS · DP (knapsack, LIS)
Patterns:          sliding window · two pointers · fast/slow pointers · prefix sum · backtracking
Advanced Topics:   Dijkstra · Kruskal · Prim · KMP · Rabin-Karp · sieve of Eratosthenes
Applications:      databases (B-trees) · networking (graphs) · AI/ML (DP) · optimization`,
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 1: FUNDAMENTALS & ANALYSIS
  // ══════════════════════════════════════════════════════════

  // F.1 Complexity Analysis
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'F.1 Complexity Analysis — Big-O vs Big-Theta vs Big-Omega, complexity classes, and Time vs Space tradeoffs?',
    answer: '**Big-O (O)** — worst-case upper bound (most commonly used). **Big-Omega (Ω)** — best-case lower bound. **Big-Theta (Θ)** — tight bound when upper and lower are equal. **Common classes (fast → slow)**: O(1) constant · O(log n) logarithmic · O(n) linear · O(n log n) linearithmic · O(n²) quadratic · O(2ⁿ) exponential · O(n!) factorial. **Rules**: drop constants (O(3n) = O(n)); drop non-dominants (O(n² + n) = O(n²)); sequences add, loops multiply. **Time vs Space tradeoff**: memoization trades O(n) space for O(n) time savings. **Space complexity** counts: variables + call stack + data structures allocated.',
    tip: `// Complexity cheat-sheet
// O(1)       hash lookup, array[i], push/pop
// O(log n)   binary search, balanced BST
// O(n)       linear scan, single loop
// O(n log n) merge sort, heap sort, JS Array.sort()
// O(n^2)     nested loops, bubble/insertion sort worst
// O(2^n)     recursive branching (Fibonacci naive, power set)
// O(n!)      permutations (all orderings of n items)

// Calculating:
function example(arr) {
  const map = new Map();          // O(n) space
  for (const x of arr) {         // O(n)
    if (map.has(x)) return true; // O(1) lookup
    map.set(x, true);
  }
  return false;
}  // Time: O(n)  Space: O(n)

// Nested loops — multiply:
for (let i = 0; i < n; i++)
  for (let j = i; j < n; j++) {} // O(n^2) even though j starts at i

// Sequences — add (drop the smaller):
// O(n) + O(n log n) = O(n log n)`,
  },

  // F.2 Math Basics for DSA
  {
    category: 'Fundamentals', difficulty: 'Intermediate',
    question: 'F.2 Math Basics for DSA — Math.log, Math.pow, modular arithmetic, and bit manipulation in JS?',
    answer: '**Math.log2(n)** — tree height ≈ log₂(n); binary search halves n each step. **2**k** — powers of 2 appear everywhere: perfect binary tree with h levels has 2^h - 1 nodes. **Modular arithmetic**: keeps numbers bounded — `index = hash % size`; `(a + b) % m = ((a%m)+(b%m))%m`. **Bit manipulation** (all O(1)): `n & 1` check odd; `n >> 1` floor-divide by 2; `n << 1` multiply by 2; `n & (n-1)` clears lowest set bit (count set bits, check power of 2); `a ^ a = 0` (XOR cancels — find single/missing number). GCD via Euclidean: `gcd(a, b) = gcd(b, a % b)` recursively until b=0.',
    tip: `// Math
Math.log2(8)    // 3
Math.log2(n)    // height of BST with n nodes ~ log2(n)
2 ** k          // 2^k (ES2016+)
Math.ceil(n/2)  // used for mid-point
Math.floor((l + r) / 2)  // safe mid-point

// Modular arithmetic
const MOD = 1e9 + 7;
result = ((a % MOD) + (b % MOD)) % MOD;

// Bit manipulation
n & 1           // 1 = odd, 0 = even
n >> 1          // Math.floor(n / 2)
n << 1          // n * 2
n & (n - 1)     // removes lowest set bit
a ^ b           // XOR: bits that differ
arr.reduce((acc, x) => acc ^ x, 0) // find the single number

// Check power of 2
function isPow2(n) { return n > 0 && (n & (n - 1)) === 0; }

// Count set bits (Hamming weight)
function countBits(n) {
  let c = 0;
  while (n) { n &= n - 1; c++; }
  return c;
}

// GCD (Euclidean)
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return a / gcd(a, b) * b; }`,
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 2: CORE DATA STRUCTURES (new additions)
  // ══════════════════════════════════════════════════════════

  // DS.1 Singly Linked List
  {
    category: 'Linked Lists', difficulty: 'Beginner',
    question: 'DS.1 Singly Linked List — structure, JS implementation, core operations, vs arrays?',
    answer: '**Singly Linked List**: each node holds `val` and a `next` pointer; last node\'s `next` is `null`. **No random access** — traversal is always O(n). **Insert/Delete at head**: O(1) — just update pointers. **Insert/Delete at tail**: O(n) (must traverse), O(1) with tail pointer. **vs Arrays**: LL has O(1) insert/delete at a known node (no shifting), but O(n) search; arrays have O(1) random access by index. **Common problems**: Reverse LL, Find Middle (fast/slow), Merge Two Sorted Lists, Detect Cycle, Remove Nth from End.',
    tip: `// Node definition
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; this.next = next;
  }
}

// Build: 1 -> 2 -> 3
const head = new ListNode(1, new ListNode(2, new ListNode(3)));

// Traverse — O(n)
let curr = head;
while (curr) { console.log(curr.val); curr = curr.next; }

// Reverse — O(n) time, O(1) space
function reverse(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next  = prev;
    prev       = curr;
    curr       = next;
  }
  return prev; // new head
}

// Find middle (fast/slow)
function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Merge two sorted lists
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) { cur.next = l1; l1 = l1.next; }
    else                  { cur.next = l2; l2 = l2.next; }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}`,
  },

  // DS.2 Doubly Linked List
  {
    category: 'Linked Lists', difficulty: 'Intermediate',
    question: 'DS.2 Doubly Linked List — structure, advantages over singly, and LRU Cache implementation?',
    answer: '**Doubly Linked List**: each node has `val`, `next`, and `prev` pointers. **O(1) delete** given a node reference (no need to find the previous node). **Bidirectional traversal** — forward and backward. **vs Singly LL**: extra space per node (one more pointer); enables O(1) deletion at tail and LRU Cache. **LRU Cache** uses DLL + HashMap: the map provides O(1) lookup by key; the DLL maintains access order (most-recent at head, least-recent at tail). Both `get` and `put` are O(1). **Real-world**: browser history (back/forward), undo/redo, OS memory managers.',
    tip: `// Doubly LL Node
class DListNode {
  constructor(key = 0, val = 0) {
    this.key = key; this.val = val;
    this.prev = null; this.next = null;
  }
}

// LRU Cache — O(1) get and put
class LRUCache {
  constructor(capacity) {
    this.cap  = capacity;
    this.map  = new Map();
    this.head = new DListNode(); // dummy head (most recent side)
    this.tail = new DListNode(); // dummy tail (least recent side)
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  _insertFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node); this._insertFront(node);
    return node.val;
  }
  put(key, val) {
    if (this.map.has(key)) this._remove(this.map.get(key));
    const node = new DListNode(key, val);
    this._insertFront(node); this.map.set(key, node);
    if (this.map.size > this.cap) {
      const lru = this.tail.prev;
      this._remove(lru); this.map.delete(lru.key);
    }
  }
}`,
  },

  // DS.3 Stacks
  {
    category: 'Stacks & Queues', difficulty: 'Beginner',
    question: 'DS.3 Stacks — LIFO principle, JS implementation, and monotonic stack pattern?',
    answer: '**Stack**: Last-In-First-Out (LIFO). The last element pushed is the first popped. **JS implementation**: use an array — `push()` adds to top, `pop()` removes from top, both O(1). **peek**: `arr[arr.length - 1]` — O(1), no removal. **isEmpty**: `arr.length === 0`. **When to use**: undo/redo, function call simulation, expression evaluation, DFS iterative, balanced brackets. **Monotonic Stack**: maintain elements in sorted (ascending or descending) order by popping before pushing — O(n) total. Used for: Next Greater Element, Largest Rectangle in Histogram, Daily Temperatures.',
    tip: `// Stack using array
const stack = [];
stack.push(1);               // [1]
stack.push(2);               // [1, 2]
const top = stack.pop();     // top=2, stack=[1]
const peek = stack[stack.length - 1]; // 1, no removal

// Valid Parentheses — O(n)
function isValid(s) {
  const stack = [], map = { ')':'(', ']':'[', '}':'{' };
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}

// Monotonic Stack — Next Greater Element
function nextGreaterElement(nums) {
  const res = new Array(nums.length).fill(-1);
  const stack = []; // stores indices
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      res[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return res;
}
// [2,1,2,4,3] -> [4,2,4,-1,-1]

// Daily Temperatures
function dailyTemperatures(temps) {
  const res = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}`,
  },

  // DS.4 Queues
  {
    category: 'Stacks & Queues', difficulty: 'Beginner',
    question: 'DS.4 Queues — FIFO principle, JS implementations, and monotonic deque for sliding window max?',
    answer: '**Queue**: First-In-First-Out (FIFO). First enqueued is first dequeued. **JS array**: `push()` = enqueue (back), `shift()` = dequeue (front). `shift()` is O(n) — acceptable in interviews; real systems use a linked-list or circular buffer for O(1). **O(1) Queue with two stacks**: use inbox + outbox stacks, transfer when outbox empty. **BFS always uses a queue** — guarantees shortest path on unweighted graphs. **Monotonic Deque**: maintain window elements in sorted order; elements outside window are removed from front, smaller elements removed from back — O(n) for sliding window maximum.',
    tip: `// Queue with array
const q = [];
q.push('a');   // enqueue
q.push('b');
q.shift();     // dequeue -> 'a'

// O(1) Queue with two stacks
class MyQueue {
  constructor() { this.inbox = []; this.outbox = []; }
  enqueue(val) { this.inbox.push(val); }
  _transfer() {
    if (!this.outbox.length)
      while (this.inbox.length) this.outbox.push(this.inbox.pop());
  }
  dequeue() { this._transfer(); return this.outbox.pop(); }
  peek()    { this._transfer(); return this.outbox[this.outbox.length - 1]; }
  isEmpty() { return !this.inbox.length && !this.outbox.length; }
}

// Sliding Window Maximum — Monotonic Deque — O(n)
function maxSlidingWindow(nums, k) {
  const dq = [], res = [];       // dq stores indices
  for (let i = 0; i < nums.length; i++) {
    // Remove out-of-window indices from front
    if (dq.length && dq[0] < i - k + 1) dq.shift();
    // Remove smaller elements from back
    while (dq.length && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
    dq.push(i);
    if (i >= k - 1) res.push(nums[dq[0]]); // front is max
  }
  return res;
}`,
  },

  // DS.5 Heaps
  {
    category: 'Heaps', difficulty: 'Intermediate',
    question: 'DS.5 Heaps — Min/Max-Heap, parent/child index math, and Top-K patterns in JS?',
    answer: '**Heap** is a complete binary tree stored as an array. **Min-Heap**: parent ≤ children — root is always the minimum. **Max-Heap**: parent ≥ children — root is always the maximum. **Index math** (0-indexed): parent of i = `Math.floor((i-1)/2)`; left child = `2i+1`; right child = `2i+2`. **Insert**: add to end, bubble-up (sift-up) — O(log n). **Extract-min/max**: swap root with last, remove last, bubble-down (sift-down) — O(log n). **Build heap from array**: O(n) bottom-up heapify. **JS has no built-in heap** — implement manually. **Top-K Largest**: maintain a Min-Heap of size K; if heap size > K, pop the smallest — remaining K elements are the largest.',
    tip: `// Min-Heap implementation
class MinHeap {
  constructor() { this.h = []; }
  size() { return this.h.length; }
  peek() { return this.h[0]; }
  push(val) { this.h.push(val); this._up(this.h.length - 1); }
  pop() {
    const min = this.h[0], last = this.h.pop();
    if (this.h.length) { this.h[0] = last; this._down(0); }
    return min;
  }
  _up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.h[p] <= this.h[i]) break;
      [this.h[p], this.h[i]] = [this.h[i], this.h[p]]; i = p;
    }
  }
  _down(i) {
    const n = this.h.length;
    while (true) {
      let min = i, l = 2*i+1, r = 2*i+2;
      if (l < n && this.h[l] < this.h[min]) min = l;
      if (r < n && this.h[r] < this.h[min]) min = r;
      if (min === i) break;
      [this.h[min], this.h[i]] = [this.h[i], this.h[min]]; i = min;
    }
  }
}

// Top-K Largest elements — O(n log k)
function topKLargest(nums, k) {
  const heap = new MinHeap();
  for (const n of nums) {
    heap.push(n);
    if (heap.size() > k) heap.pop(); // evict smallest
  }
  return heap.h; // k largest elements
}

// Kth Largest Element
function findKthLargest(nums, k) {
  const h = new MinHeap();
  for (const n of nums) { h.push(n); if (h.size() > k) h.pop(); }
  return h.peek();
}`,
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 3: ALGORITHMS (new additions)
  // ══════════════════════════════════════════════════════════

  // A.1 Sorting — Simple
  {
    category: 'Sorting', difficulty: 'Beginner',
    question: 'A.1 Simple Sorting — Bubble, Insertion, and Selection Sort: how they work and complexity?',
    answer: '**Bubble Sort**: repeatedly swap adjacent elements if out of order — largest bubbles to end each pass. O(n²) time, O(1) space. **Insertion Sort**: build sorted portion left-to-right — take each element, shift sorted elements right until correct position found, insert. O(n²) worst, **O(n) best** (nearly sorted). Stable. Most practical of the three. **Selection Sort**: find minimum in unsorted portion, swap to front. O(n²) time, O(1) space. Not stable. **When to use**: Insertion Sort for small or nearly-sorted arrays — used inside Timsort (JS built-in) for runs under 64 elements.',
    tip: `// Bubble Sort — O(n^2)
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
  return arr;
}

// Insertion Sort — O(n^2) worst, O(n) best
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) { arr[j+1] = arr[j]; j--; }
    arr[j+1] = key;
  }
  return arr;
}

// Selection Sort — O(n^2), not stable
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[minIdx]) minIdx = j;
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`,
  },

  // A.2 Sorting — Efficient
  {
    category: 'Sorting', difficulty: 'Intermediate',
    question: 'A.2 Efficient Sorting — Merge Sort (Divide & Conquer) and Quicksort (Partitioning)?',
    answer: '**Merge Sort**: Divide array in half → recursively sort each half → merge the two sorted halves. O(n log n) — always. Stable. O(n) extra space. **Quicksort**: pick a pivot → partition so elements < pivot go left and > pivot go right → recursively sort each side. O(n log n) average, O(n²) worst (bad pivot). In-place, O(log n) stack. **Quicksort vs Merge Sort**: Quicksort is cache-friendly and faster in practice but unstable and has O(n²) worst case; Merge Sort is stable and guaranteed O(n log n). **JS `Array.sort()`** uses Timsort (Merge + Insertion hybrid) — O(n log n) guaranteed, stable.',
    tip: `// Merge Sort — O(n log n), O(n) space, stable
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
function merge(left, right) {
  const res = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length)
    res.push(left[i] <= right[j] ? left[i++] : right[j++]);
  return res.concat(left.slice(i), right.slice(j));
}

// Quicksort — O(n log n) avg, O(n^2) worst, in-place
function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo < hi) {
    const p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
  }
  return arr;
}
function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) { [arr[i], arr[j]] = [arr[j], arr[i]]; i++; }
  }
  [arr[i], arr[hi]] = [arr[hi], arr[i]];
  return i;
}

// JS built-in (Timsort, stable, O(n log n))
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending`,
  },

  // A.3 Graph BFS
  {
    category: 'Graph', difficulty: 'Intermediate',
    question: '7.2 Graph BFS — queue-based traversal, shortest path on unweighted graphs, and key problems?',
    answer: '**Graph BFS** uses a queue to visit nodes level by level from the source — guaranteed to find the shortest path (fewest edges) in an unweighted graph. Algorithm: enqueue source + mark visited → loop: dequeue node, process, enqueue all unvisited neighbours. **Time**: O(V + E). **Space**: O(V). **Key advantage over DFS**: BFS finds shortest path; DFS does not. **Problems**: Shortest Path in Unweighted Graph, Word Ladder, Rotting Oranges, 01 Matrix (multi-source BFS), Bipartite Check (2-coloring), Minimum Knight Moves, Clone Graph.',
    tip: `// Graph BFS — shortest distances from source
function bfs(graph, start) {
  // graph: Map<node, neighbor[]>
  const visited = new Set([start]);
  const queue   = [start];
  const dist    = new Map([[start, 0]]);

  while (queue.length) {
    const node = queue.shift();
    for (const neighbor of (graph.get(node) || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        dist.set(neighbor, dist.get(node) + 1);
        queue.push(neighbor);
      }
    }
  }
  return dist;
}

// Rotting Oranges — multi-source BFS
function orangesRotting(grid) {
  const rows = grid.length, cols = grid[0].length;
  const queue = [];
  let fresh = 0;
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c, 0]); // rotten + time
      if (grid[r][c] === 1) fresh++;
    }
  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
  let time = 0;
  while (queue.length) {
    const [r, c, t] = queue.shift();
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr>=0 && nr<rows && nc>=0 && nc<cols && grid[nr][nc]===1) {
        grid[nr][nc] = 2; fresh--; time = t+1;
        queue.push([nr, nc, t+1]);
      }
    }
  }
  return fresh === 0 ? time : -1;
}`,
  },

  // A.4 Greedy
  {
    category: 'Strategy Patterns', difficulty: 'Intermediate',
    question: 'A.4 Greedy Algorithms — when does greedy work, activity selection, Jump Game, and why greedy fails for coin change?',
    answer: '**Greedy** makes the locally optimal choice at each step hoping to reach the global optimum. Works when the problem has **Greedy Choice Property** (a local optimal choice leads to a global optimum) AND **Optimal Substructure**. **Key insight**: greedy is faster than DP but only applies to specific problems. **Works for**: Activity Selection (max non-overlapping intervals — sort by end time), Jump Game, Assign Cookies, Gas Station, Huffman Coding, Dijkstra\'s/Prim\'s MST. **Fails for**: Coin Change with arbitrary denominations (e.g., coins [1,3,4], target 6: greedy picks 4+1+1=3 coins, DP finds 3+3=2 coins). **Proof technique**: exchange argument — show you can\'t do better by swapping the greedy choice.',
    tip: `// Activity Selection — max non-overlapping intervals
// Sort by end time — greedy: always pick the earliest-ending
function activitySelection(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 1, end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) { count++; end = intervals[i][1]; }
  }
  return count;
}

// Jump Game I — can you reach the end?
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}

// Jump Game II — minimum jumps
function jump(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) { jumps++; curEnd = farthest; }
  }
  return jumps;
}

// Greedy fails for coins [1,3,4], target=6:
// Greedy: 4+1+1 = 3 coins  ← WRONG
// DP:     3+3   = 2 coins  ← CORRECT`,
  },

  // A.5 Backtracking
  {
    category: 'Strategy Patterns', difficulty: 'Advanced',
    question: 'A.5 Backtracking — template, permutations, subsets, and combination sum?',
    answer: '**Backtracking** is a DFS-based exhaustive search that explores all choices and **undoes (backtracks)** choices that lead to invalid states. Template: `choose → explore → unchoose`. **Complexity**: O(n!) or O(2ⁿ) — exhaustive, but pruning cuts branches early. **vs plain DFS**: backtracking always undoes the choice after returning from recursion; DFS does not. **Classic problems**: Permutations, Subsets (power set), Combination Sum, N-Queens (one queen per row/col/diagonal), Sudoku Solver, Word Search, Palindrome Partitioning. **Key pruning**: sort + break early when candidates exceed target.',
    tip: `// Template
function backtrack(state, choices) {
  if (isSolution(state)) { record(state); return; }
  for (const choice of choices) {
    if (!isValid(state, choice)) continue; // prune
    state.push(choice);                    // choose
    backtrack(state, nextChoices(choice)); // explore
    state.pop();                           // unchoose
  }
}

// Permutations — O(n! * n)
function permute(nums) {
  const res = [];
  function bt(curr, rem) {
    if (!rem.length) { res.push([...curr]); return; }
    for (let i = 0; i < rem.length; i++) {
      curr.push(rem[i]);
      bt(curr, [...rem.slice(0,i), ...rem.slice(i+1)]);
      curr.pop();
    }
  }
  bt([], nums); return res;
}

// Subsets (Power Set) — O(2^n)
function subsets(nums) {
  const res = [];
  function bt(start, curr) {
    res.push([...curr]);
    for (let i = start; i < nums.length; i++) {
      curr.push(nums[i]); bt(i + 1, curr); curr.pop();
    }
  }
  bt(0, []); return res;
}

// Combination Sum (elements reusable)
function combinationSum(candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  function bt(start, curr, remain) {
    if (remain === 0) { res.push([...curr]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remain) break; // prune
      curr.push(candidates[i]);
      bt(i, curr, remain - candidates[i]); // i not i+1: reuse allowed
      curr.pop();
    }
  }
  bt(0, [], target); return res;
}`,
  },

  // A.6 Divide & Conquer
  {
    category: 'Strategy Patterns', difficulty: 'Intermediate',
    question: 'A.6 Divide & Conquer — 3-step pattern, relation to DP, and classic examples?',
    answer: '**Divide & Conquer**: 1. **Divide** — split the problem into smaller independent subproblems (usually halves). 2. **Conquer** — solve each subproblem recursively (base case when trivially small). 3. **Combine** — merge the solutions. **vs Dynamic Programming**: D&C subproblems are **independent** — no overlap, no caching needed. DP subproblems **overlap** — cache results to avoid recomputation. **Time analysis** via Master Theorem: T(n) = aT(n/b) + f(n). **Classic examples**: Merge Sort (split → sort halves → merge), Quicksort (partition → sort sides), Binary Search (split → search ONE half), Maximum Subarray D&C (O(n log n) — Kadane\'s O(n) is simpler), Closest Pair of Points.',
    tip: `// D&C pattern: Split — Solve recursively — Combine
// Merge Sort is the canonical example

// Binary Search — D&C (search ONE half)
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

// Maximum Subarray — D&C approach O(n log n)
function maxSubarrayDC(arr, lo = 0, hi = arr.length - 1) {
  if (lo === hi) return arr[lo];
  const mid = Math.floor((lo + hi) / 2);
  const leftMax  = maxSubarrayDC(arr, lo, mid);
  const rightMax = maxSubarrayDC(arr, mid + 1, hi);
  // Cross: must span mid and mid+1
  let lSum = -Infinity, sum = 0;
  for (let i = mid; i >= lo; i--) { sum += arr[i]; lSum = Math.max(lSum, sum); }
  let rSum = -Infinity; sum = 0;
  for (let i = mid + 1; i <= hi; i++) { sum += arr[i]; rSum = Math.max(rSum, sum); }
  return Math.max(leftMax, rightMax, lSum + rSum);
}
// Note: Kadane's O(n) is simpler — D&C is a teaching example
// Kadane's: dp[i] = Math.max(arr[i], dp[i-1] + arr[i])`,
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 4: CODING PATTERNS (new addition)
  // ══════════════════════════════════════════════════════════

  // P.1 Fast & Slow Pointers (Floyd's Cycle Detection)
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'P.1 Fast & Slow Pointers — Floyd\'s Cycle Detection, find cycle start, middle node, and Nth from end?',
    answer: '**Fast & Slow (Floyd\'s Tortoise and Hare)**: two pointers at different speeds — slow moves +1, fast moves +2. **Cycle detection**: if there\'s a cycle, fast will eventually lap slow and they meet inside the cycle. If fast reaches `null`, no cycle. **Find cycle start (phase 2)**: after meeting, reset slow to head — advance both one step at a time — they meet exactly at cycle start (mathematical property). **Find middle**: when fast reaches end, slow is at the middle. **Nth from end**: advance fast N steps ahead, then advance both — when fast hits null, slow is at Nth from end. All: O(n) time, O(1) space.',
    tip: `// Cycle Detection — O(n) time, O(1) space
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next; fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

// Find Cycle Start (Floyd's Phase 2)
function detectCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next; fast = fast.next.next;
    if (slow === fast) {
      slow = head; // reset slow to head
      while (slow !== fast) { slow = slow.next; fast = fast.next; }
      return slow; // cycle start node
    }
  }
  return null;
}

// Find Middle of Linked List
function middleNode(head) {
  let slow = head, fast = head;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  return slow; // middle (second middle for even length)
}

// Remove Nth Node From End — one pass O(n)
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i <= n; i++) fast = fast.next; // n+1 steps ahead
  while (fast) { slow = slow.next; fast = fast.next; }
  slow.next = slow.next.next; // skip the target
  return dummy.next;
}`,
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 5: ADVANCED TOPICS
  // ══════════════════════════════════════════════════════════

  // ADV.1 Dijkstra's Algorithm
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'ADV.1 Dijkstra\'s Algorithm — shortest path with non-negative weights, min-heap implementation?',
    answer: '**Dijkstra\'s** finds the shortest path from a source to all other nodes in a graph with **non-negative edge weights**. Algorithm: init dist[src]=0, dist[others]=Infinity → use min-heap (priority queue) ordered by dist → greedily extract node with smallest known dist → relax all edges (if dist[u]+w < dist[v], update and enqueue v) → repeat until heap empty. **Time**: O((V+E) log V) with binary heap. **Space**: O(V+E). **Fails** on negative weights — use Bellman-Ford. **Real-world**: GPS navigation, network routing (OSPF), game pathfinding (A* adds a heuristic).',
    tip: `// Dijkstra's — O((V+E) log V)
function dijkstra(graph, src) {
  // graph: Map<node, [[neighbor, weight], ...]>
  const dist = new Map();
  for (const node of graph.keys()) dist.set(node, Infinity);
  dist.set(src, 0);

  // Min-heap: [cost, node] — use MinHeap class from Heaps card
  const heap = [[0, src]]; // [dist, node]

  while (heap.length) {
    heap.sort((a, b) => a[0] - b[0]); // simplified (use real MinHeap in prod)
    const [d, u] = heap.shift();
    if (d > dist.get(u)) continue;    // stale entry — skip

    for (const [v, w] of (graph.get(u) || [])) {
      const newDist = dist.get(u) + w;
      if (newDist < dist.get(v)) {
        dist.set(v, newDist);
        heap.push([newDist, v]);
      }
    }
  }
  return dist; // Map<node, shortestDistance>
}

// Build weighted undirected graph from edge list
// edges = [[u, v, weight], ...]
function buildWeightedGraph(n, edges) {
  const g = new Map();
  for (let i = 0; i < n; i++) g.set(i, []);
  for (const [u, v, w] of edges) {
    g.get(u).push([v, w]);
    g.get(v).push([u, w]);
  }
  return g;
}

// Network Delay Time (LeetCode 743)
// Find max of all shortest paths from source k`,
  },

  // ADV.2 Minimum Spanning Tree
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'ADV.2 Minimum Spanning Tree — Kruskal\'s (Union-Find) vs Prim\'s (greedy heap), when to use each?',
    answer: '**MST** connects all V vertices with exactly V-1 edges and minimum total weight. **Kruskal\'s**: sort all edges by weight → greedily add the cheapest edge that does NOT form a cycle (detect with Union-Find) → stop at V-1 edges. O(E log E). Best for **sparse** graphs. **Prim\'s**: start from any vertex → greedily add the cheapest edge connecting the growing MST to a new vertex (min-heap). O(E log V). Best for **dense** graphs. **Union-Find (DSU)**: `find(x)` returns root (with path compression), `union(a,b)` merges sets (by rank). Nearly O(1) amortised per op. **Use MST for**: network cable design, clustering, approximation for TSP.',
    tip: `// Union-Find — path compression + union by rank
class UnionFind {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank   = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x)
      this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }
  union(a, b) {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false; // already connected = cycle!
    if (this.rank[ra] < this.rank[rb]) this.parent[ra] = rb;
    else if (this.rank[ra] > this.rank[rb]) this.parent[rb] = ra;
    else { this.parent[rb] = ra; this.rank[ra]++; }
    return true;
  }
}

// Kruskal's MST — O(E log E)
function kruskalMST(n, edges) {
  edges.sort((a, b) => a[2] - b[2]); // sort by weight
  const uf = new UnionFind(n);
  let totalWeight = 0, edgeCount = 0;
  for (const [u, v, w] of edges) {
    if (uf.union(u, v)) {
      totalWeight += w;
      edgeCount++;
      if (edgeCount === n - 1) break; // MST complete
    }
  }
  return edgeCount === n - 1 ? totalWeight : -1; // -1 if not connected
}

// Number of Connected Components (Union-Find)
function countComponents(n, edges) {
  const uf = new UnionFind(n);
  let components = n;
  for (const [u, v] of edges)
    if (uf.union(u, v)) components--;
  return components;
}`,
  },

  // ADV.3 String Algorithms
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'ADV.3 String Search Algorithms — KMP, Rabin-Karp, and Z-algorithm: when and how to use?',
    answer: '**KMP (Knuth-Morris-Pratt)**: precompute a **failure function** (LPS array — Longest Proper Prefix which is also Suffix). On mismatch, jump using LPS instead of restarting from 0. O(n+m) time, O(m) space. **Rabin-Karp**: use **rolling hash** — compute hash of current window, compare with pattern hash. O(n+m) average, O(nm) worst (collisions). Best for multi-pattern search. **Z-algorithm**: Z[i] = length of longest substring starting at i that matches a prefix of the string. O(n+m). Concatenate `pattern + "$" + text`, find positions where Z[i] = pattern.length. **All three** are O(n+m) vs O(nm) for naive brute-force.',
    tip: `// KMP — O(n + m)
function kmpSearch(text, pattern) {
  const lps = buildLPS(pattern);
  const result = [];
  let j = 0; // pattern index
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) j = lps[j - 1]; // jump
    if (text[i] === pattern[j]) j++;
    if (j === pattern.length) {
      result.push(i - j + 1); // match found at index
      j = lps[j - 1];
    }
  }
  return result;
}

// LPS (failure function) — O(m)
function buildLPS(pat) {
  const lps = new Array(pat.length).fill(0);
  let len = 0, i = 1;
  while (i < pat.length) {
    if (pat[i] === pat[len]) { lps[i++] = ++len; }
    else if (len)            { len = lps[len - 1]; }
    else                     { lps[i++] = 0; }
  }
  return lps;
}
// kmpSearch("aabaabaabaab", "aab") -> [0, 3, 6, 9]

// Rabin-Karp — rolling hash O(n + m) avg
function rabinKarp(text, pattern) {
  const BASE = 31, MOD = 1e9 + 7;
  const m = pattern.length, n = text.length;
  if (m > n) return [];
  let ph = 0, wh = 0, power = 1;
  for (let i = 0; i < m; i++) {
    ph = (ph * BASE + pattern.charCodeAt(i)) % MOD;
    wh = (wh * BASE + text.charCodeAt(i)) % MOD;
    if (i < m - 1) power = power * BASE % MOD;
  }
  const res = [];
  for (let i = 0; i <= n - m; i++) {
    if (wh === ph && text.slice(i, i+m) === pattern) res.push(i);
    if (i < n - m)
      wh = ((wh - text.charCodeAt(i) * power) * BASE + text.charCodeAt(i+m)) % MOD;
    if (wh < 0) wh += MOD;
  }
  return res;
}`,
  },

  // ADV.4 Number Theory
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'ADV.4 Number Theory for DSA — GCD (Euclidean), Sieve of Eratosthenes, and modular exponentiation?',
    answer: '**GCD (Euclidean)**: `gcd(a, b) = gcd(b, a%b)` until b=0. O(log min(a,b)). **LCM**: `a*b / gcd(a,b)`. **Sieve of Eratosthenes**: find all primes ≤ n in O(n log log n) — mark all multiples of each prime starting from p². **Modular Exponentiation**: compute `a^b % m` in O(log b) via repeated squaring — `a^8 = ((a²)²)²`. Essential for large exponents. **Prime factorisation**: trial division up to √n — O(√n). **Applications**: cryptography (RSA uses modular exp), hashing (mod prime size), combinatorics (nCr % p via Fermat\'s little theorem), fraction simplification (GCD).',
    tip: `// GCD — O(log min(a,b))
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return a / gcd(a, b) * b; }

// Check prime — O(sqrt(n))
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

// Sieve of Eratosthenes — O(n log log n)
function sieve(n) {
  const p = new Array(n + 1).fill(true);
  p[0] = p[1] = false;
  for (let i = 2; i * i <= n; i++)
    if (p[i]) for (let j = i*i; j <= n; j += i) p[j] = false;
  return p.reduce((primes, val, i) => (val ? [...primes, i] : primes), []);
}
// sieve(20) -> [2, 3, 5, 7, 11, 13, 17, 19]

// Modular Exponentiation — O(log b)
function modPow(base, exp, mod) {
  let result = 1n;
  base = BigInt(base) % BigInt(mod);
  exp  = BigInt(exp);
  mod  = BigInt(mod);
  while (exp > 0n) {
    if (exp & 1n) result = result * base % mod;
    base = base * base % mod;
    exp >>= 1n;
  }
  return Number(result);
}
// modPow(2, 10, 1000) -> 24  (1024 % 1000)

// Euler's totient: count integers 1..n coprime with n
// Fermat's little theorem: a^(p-1) % p = 1 (p is prime)
// -> Modular inverse: a^(p-2) % p`,
  },

  // ══════════════════════════════════════════════════════════
  // SECTION 6: ECOSYSTEM & APPLICATIONS
  // ══════════════════════════════════════════════════════════

  // ECO.1 Competitive Programming & Real-World
  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'ECO.1 DSA Ecosystem — LeetCode strategy, real-world applications, and clean code in technical interviews?',
    answer: '**Competitive Programming**: LeetCode — pattern-based (NeetCode Blind 75 roadmap); HackerRank — foundational algorithms; Codeforces — competitive speed. Focus on recognising patterns, not memorising solutions. **Real-world applications**: Databases (B-Trees for indexes, hashing for lookups) · Networking (Dijkstra\'s for routing, graphs for topology) · AI/ML (DP for reinforcement learning, graphs for neural nets) · Compression (Huffman = Greedy + Trees) · OS (priority queues for CPU scheduling, stacks for function calls). **Clean Code in interviews**: name variables clearly; handle edge cases first; state time/space complexity; talk through your approach before coding; validate with examples after coding.',
    tip: `// Interview Problem-Solving Framework

// 1. CLARIFY — ask about constraints and edge cases
//    "What if the array is empty? Can values be negative?"

// 2. THINK ALOUD — state your approach
//    "I'll use a sliding window since we need a contiguous subarray"

// 3. BRUTE FORCE FIRST — mention it, then optimise
//    "Naive O(n^2): check all pairs. Let me use a hash map for O(n)..."

// 4. RECOGNISE THE PATTERN
//    Sorted array / two values   -> Binary Search / Two Pointers
//    Subarray / substring        -> Sliding Window / Prefix Sum
//    Tree / Graph                -> DFS (recursion) / BFS (queue)
//    Optimal choices             -> DP / Greedy
//    Linked list cycle / middle  -> Fast & Slow Pointers
//    Frequency / duplicates      -> Hash Map / Set

// 5. CODE — clean, handle edges, modular helper functions

// 6. TEST — trace through example, then edge cases:
//    empty input, single element, all same, negative numbers

// After coding, always state:
// "This is O(n) time — single pass using hash map"
// "Space is O(n) — map stores at most n entries"`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. ARRAYS
  // ══════════════════════════════════════════════════════════

  // 1.1 Two Pointers
  {
    category: 'Arrays', difficulty: 'Intermediate',
    question: '1.1 Two Pointers — how does the pattern work and what problems does it solve?',
    answer: '**Two Pointers** uses two index variables to traverse an array, replacing the O(n²) brute-force nested loop with O(n). Two main forms: **Opposite ends** — `left=0, right=n-1`, converge toward the center (used when array is sorted). **Same direction (slow/fast)** — both start at left, fast moves ahead by a condition. When to use: sorted arrays, palindrome check, remove duplicates, pair/triplet sum problems. **Key insight**: at each step, you always move the pointer that helps you approach the target condition.',
    tip: `// --- Two Sum II (sorted array) ---
function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum < target) left++;
    else right--;
  }
}
// O(n) time, O(1) space

// --- Remove Duplicates from Sorted Array ---
function removeDuplicates(nums) {
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1; // new length
}

// --- Valid Palindrome ---
function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++; r--;
  }
  return true;
}`
  },

  // 1.2 Sliding Window
  {
    category: 'Arrays', difficulty: 'Intermediate',
    question: '1.2 Sliding Window — fixed vs variable window, when to use and how to implement?',
    answer: '**Sliding Window** maintains a contiguous subarray/substring range `[left, right]` to find an optimal segment without re-scanning. **Fixed window**: size `k` stays constant — slide both ends together. Use for: max/min/sum of exactly k elements. **Variable window**: expand `right` to include elements; shrink `left` when window is invalid. Use for: longest/shortest window satisfying a condition. **Time**: O(n) — every element enters and exits the window exactly once. **Key insight**: never restart from scratch — slide the window.',
    tip: `// --- Max Sum Subarray of Size K (Fixed Window) ---
function maxSumFixed(nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // add new, remove old
    max = Math.max(max, sum);
  }
  return max;
}
// O(n) — classic fixed window

// --- Longest Substring Without Repeating Chars (Variable) ---
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    if (seen.has(s[right]) && seen.get(s[right]) >= left) {
      left = seen.get(s[right]) + 1; // shrink: jump past duplicate
    }
    seen.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
// O(n) time, O(min(n,alphabet)) space

// Template (variable window):
// right expands → check condition → while invalid: left shrinks`
  },

  // 1.3 Prefix Sum
  {
    category: 'Arrays', difficulty: 'Intermediate',
    question: '1.3 Prefix Sum — what is it, how to build it, and what problems does it solve?',
    answer: '**Prefix Sum** precomputes `prefix[i] = sum of nums[0..i-1]` so any range sum `[l, r]` can be answered in **O(1)** with `prefix[r+1] - prefix[l]`. Trade-off: O(n) one-time build + O(1) per query vs O(n) per query without it. **2D Prefix Sum** works the same for grids. **Hash + Prefix Sum**: storing `prefix[i]` in a hashmap lets you find subarrays with a target sum in O(n) — the key insight for "Subarray Sum Equals K".',
    tip: `// Build prefix sum array (length n+1)
function buildPrefix(nums) {
  const prefix = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  return prefix;
}
// Range sum [l, r] in O(1):
// sum = prefix[r + 1] - prefix[l]

// --- Subarray Sum Equals K ---
function subarraySum(nums, k) {
  const prefixCount = new Map([[0, 1]]); // prefix 0 seen once
  let prefix = 0, count = 0;
  for (const n of nums) {
    prefix += n;
    count += prefixCount.get(prefix - k) || 0; // how many times (prefix-k) seen
    prefixCount.set(prefix, (prefixCount.get(prefix) || 0) + 1);
  }
  return count;
}
// O(n) — classic prefix + HashMap combo
// Key: if prefix[j] - prefix[i] == k, then subarray [i+1..j] sums to k`
  },

  // 1.4 Sorting
  {
    category: 'Arrays', difficulty: 'Beginner',
    question: '1.4 Sorting — when to sort first as a strategy, and what algorithms must you know?',
    answer: '**Sort first** to unlock faster algorithms: two pointers on sorted array, binary search, greedy comparisons, merge-style operations. JS `Array.sort()` is O(n log n) — uses Timsort internally. Custom comparator: `arr.sort((a, b) => a - b)` ascending. **Key algorithms**: Merge Sort — O(n log n) stable, good for linked lists; Quick Sort — O(n log n) avg, O(n²) worst, in-place; Counting Sort — O(n+k) for small integer ranges. **Common patterns**: sort + two pointers (3Sum), sort by interval start (Merge Intervals), sort by frequency (Top K).',
    tip: `// JS sort — ascending
[3,1,4,1,5].sort((a, b) => a - b); // [1,1,3,4,5]

// Sort objects by property
users.sort((a, b) => a.age - b.age);

// --- Merge Intervals ---
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (const [start, end] of intervals.slice(1)) {
    const last = result[result.length - 1];
    if (start <= last[1]) last[1] = Math.max(last[1], end); // overlap
    else result.push([start, end]);
  }
  return result;
}

// --- 3Sum (sort + two pointers) ---
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue; // skip duplicates
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) { result.push([nums[i], nums[l], nums[r]]); l++; r--; }
      else if (sum < 0) l++;
      else r--;
    }
  }
  return result;
}`
  },

  // 1.5 Kadane's Algorithm
  {
    category: 'Arrays', difficulty: 'Intermediate',
    question: "1.5 Kadane's Algorithm — how does it find the maximum subarray sum in O(n)?",
    answer: "**Kadane's Algorithm** solves Maximum Subarray Sum in O(n) time, O(1) space using dynamic programming. The key insight: at each position, either **extend the current subarray** (add current element to running sum) or **start fresh** (if running sum is negative, it can only hurt — discard and start from current element). Track `currentSum = max(num, currentSum + num)` and `maxSum = max(maxSum, currentSum)` at each step. Works because a negative prefix always makes the sum worse.",
    tip: `// Kadane's — Maximum Subarray (LeetCode #53)
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum     = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either start fresh or extend current subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum     = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
// nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6  ([4,-1,2,1])

// --- With subarray indices ---
function maxSubArrayWithIndices(nums) {
  let maxSum = nums[0], curSum = nums[0];
  let start = 0, end = 0, tempStart = 0;
  for (let i = 1; i < nums.length; i++) {
    if (curSum + nums[i] < nums[i]) {
      curSum = nums[i]; tempStart = i; // fresh start
    } else { curSum += nums[i]; }
    if (curSum > maxSum) {
      maxSum = curSum; start = tempStart; end = i;
    }
  }
  return { maxSum, subarray: nums.slice(start, end + 1) };
}

// Variation: Maximum Circular Subarray
// max(Kadane normal, totalSum - Kadane on negated array)`
  },

  // ══════════════════════════════════════════════════════════
  // 2. STRINGS
  // ══════════════════════════════════════════════════════════

  // 2.1 Palindrome
  {
    category: 'Strings', difficulty: 'Beginner',
    question: '2.1 Palindrome — detection, longest palindrome, and expand-from-center technique?',
    answer: '**Palindrome**: reads the same forwards and backwards. **Check**: two pointers from both ends, compare `s[l]` and `s[r]`, converge — O(n). **Longest Palindromic Substring**: brute force O(n³); expand-from-center O(n²) — for each index, expand outward while chars match (handle odd and even length separately); Manacher\'s O(n) for optimal. **Key insight for expand-from-center**: single char is always a palindrome (base case). Expand left-- and right++ while in bounds and chars equal.',
    tip: `// Check if string is palindrome
function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++; r--;
  }
  return true;
}

// Longest Palindromic Substring (expand from center)
function longestPalindrome(s) {
  let start = 0, maxLen = 0;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > maxLen) { maxLen = r - l + 1; start = l; }
      l--; r++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i);     // odd length palindromes
    expand(i, i + 1); // even length palindromes
  }
  return s.slice(start, start + maxLen);
}
// 'babad' -> 'bab'  |  'cbbd' -> 'bb'

// Valid Palindrome II (allow one deletion)
function validPalindrome(s) {
  const ok = (l, r) => {
    while (l < r) { if (s[l] !== s[r]) return false; l++; r--; }
    return true;
  };
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return ok(l+1, r) || ok(l, r-1); // skip one
    l++; r--;
  }
  return true;
}`
  },

  // 2.2 Anagram
  {
    category: 'Strings', difficulty: 'Beginner',
    question: '2.2 Anagram — detection approaches and the frequency counter trick?',
    answer: '**Anagram**: two strings with identical character frequencies (same chars, different order). **Approach 1 — Sort**: sort both strings, compare — O(n log n). **Approach 2 — Frequency Map**: count chars in s, decrement for t, check all zeros — O(n). **Approach 3 — Fixed Array**: for lowercase letters only, use `int[26]` — O(n), minimal overhead. **Group Anagrams**: use sorted word as HashMap key → group all anagrams together. **Sliding Window Anagram**: find all anagram substrings in a text — use frequency window.',
    tip: `// Check if two strings are anagrams — O(n)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (const c of s) count[c] = (count[c] || 0) + 1;
  for (const c of t) {
    if (!count[c]) return false;
    count[c]--;
  }
  return true;
}

// Group Anagrams — sort as key
function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
}
// ['eat','tea','tan','ate','nat','bat']
// -> [['eat','tea','ate'],['tan','nat'],['bat']]

// Find All Anagrams in a String (sliding window)
function findAnagrams(s, p) {
  if (s.length < p.length) return [];
  const pCount = new Array(26).fill(0);
  const wCount = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < p.length; i++) { pCount[p.charCodeAt(i)-a]++; wCount[s.charCodeAt(i)-a]++; }
  const result = [];
  if (pCount.toString() === wCount.toString()) result.push(0);
  for (let i = p.length; i < s.length; i++) {
    wCount[s.charCodeAt(i)-a]++;
    wCount[s.charCodeAt(i-p.length)-a]--;
    if (pCount.toString() === wCount.toString()) result.push(i - p.length + 1);
  }
  return result;
}`
  },

  // 2.3 Substring Search
  {
    category: 'Strings', difficulty: 'Intermediate',
    question: '2.3 Substring Search — built-in vs KMP vs Rabin-Karp, when to use each?',
    answer: '**Built-in**: `s.indexOf(t)` / `s.includes(t)` — O(n*m) worst case, fine for most interview problems. **KMP (Knuth-Morris-Pratt)**: O(n+m) — builds a failure function (partial match table) that avoids rechecking already matched characters. Optimal for large texts. **Rabin-Karp**: O(n+m) average — uses rolling hash to match pattern fingerprint; worst case O(n*m) on hash collisions. **For interviews**: master built-in + understand KMP conceptually. KMP is the go-to when asked for O(n+m) string matching.',
    tip: `// Built-in search
'hello world'.indexOf('world'); // 6
'hello world'.includes('world'); // true

// KMP — O(n+m) substring search
function kmpSearch(text, pattern) {
  const n = text.length, m = pattern.length;

  // Build failure function: longest proper prefix = suffix
  const fail = new Array(m).fill(0);
  let k = 0;
  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[k] !== pattern[i]) k = fail[k - 1];
    if (pattern[k] === pattern[i]) k++;
    fail[i] = k;
  }

  // Search
  const matches = [];
  k = 0;
  for (let i = 0; i < n; i++) {
    while (k > 0 && pattern[k] !== text[i]) k = fail[k - 1];
    if (pattern[k] === text[i]) k++;
    if (k === m) { matches.push(i - m + 1); k = fail[k - 1]; }
  }
  return matches;
}

// Rabin-Karp — rolling hash (concept)
// hash(s[i..i+m]) = (hash(s[i-1..i+m-1]) - s[i-1]*base^(m-1)) * base + s[i+m]
// Recompute hash in O(1) per slide`
  },

  // 2.4 Pattern Matching
  {
    category: 'Strings', difficulty: 'Advanced',
    question: '2.4 Pattern Matching — Trie, Wildcard DP, and Z-algorithm: when to use each?',
    answer: '**Trie (Prefix Tree)**: insert/search words in O(L) where L = word length. Use for: autocomplete, word dictionary, prefix search, Word Search II. **Wildcard Matching DP** (`?` matches one char, `*` matches any sequence): 2D DP table — dp[i][j] = does pattern[0..i-1] match text[0..j-1]. **Z-algorithm**: O(n+m) — builds Z-array where Z[i] = length of longest substring starting at i that matches a prefix of the string. Use for: linear pattern matching. **Regex DP**: similar to wildcard but `.` matches single, `*` matches zero or more of previous.',
    tip: `// Trie — insert + search + startsWith
class TrieNode { constructor() { this.children = {}; this.isEnd = false; } }
class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (const c of word) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return node.isEnd;
  }
  startsWith(prefix) {
    let node = this.root;
    for (const c of prefix) {
      if (!node.children[c]) return false;
      node = node.children[c];
    }
    return true;
  }
}

// Wildcard Matching — DP
function isMatch(s, p) {
  const m = s.length, n = p.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) if (p[j-1] === '*') dp[0][j] = dp[0][j-1];
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++) {
      if (p[j-1] === '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
      else if (p[j-1] === '?' || p[j-1] === s[i-1]) dp[i][j] = dp[i-1][j-1];
    }
  return dp[m][n];
}`
  },

  // ══════════════════════════════════════════════════════════
  // 3. HASHMAP / HASHSET
  // ══════════════════════════════════════════════════════════

  // 3.1 Frequency Counter
  {
    category: 'HashMap', difficulty: 'Beginner',
    question: '3.1 Frequency Counter — what is the pattern and what problems does it replace O(n²) with O(n)?',
    answer: '**Frequency Counter** uses a HashMap to count occurrences, replacing a slow nested loop with two fast passes. Build a count map in O(n), then answer queries in O(1). **Rule of thumb**: if you see a problem asking about frequencies, occurrences, or existence of elements — HashMap first. **Common problems**: Valid Anagram, Top K Frequent Elements, First Unique Character, Task Scheduler, Verifying an Alien Dictionary. The pattern works for both arrays (number freq) and strings (char freq).',
    tip: `// Character frequency counter
function charFreq(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  return freq;
}

// First Unique Character in a String
function firstUniqChar(s) {
  const freq = charFreq(s);
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}
// 'leetcode' -> 0 (l)  |  'loveleetcode' -> 2 (v)

// Top K Frequent Elements
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  // Bucket sort — O(n) alternative to heap
  const buckets = Array.from({length: nums.length + 1}, () => []);
  for (const [num, count] of freq) buckets[count].push(num);

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }
  return result.slice(0, k);
}
// [1,1,1,2,2,3], k=2 -> [1,2]  — O(n) time`
  },

  // 3.2 Duplicate Detection
  {
    category: 'HashMap', difficulty: 'Beginner',
    question: '3.2 Duplicate Detection with HashSet — why is it O(n) and what patterns use it?',
    answer: '**HashSet** gives O(1) average insert and lookup — perfect for "have I seen this before?" checks. For each element, `if set.has(x): found duplicate` — no need to scan the whole array. **Common patterns**: Contains Duplicate (direct set check), Longest Consecutive Sequence (check neighbors in set), Happy Number (cycle detection with set), Intersection of Arrays. **Two Sum with set**: store complement, check if current number is in set. **Floyd\'s cycle detection** is an alternative for O(1) space but O(n) time in linked list cycles.',
    tip: `// Contains Duplicate
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}

// Longest Consecutive Sequence — O(n) using Set
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLen = 0;
  for (const n of numSet) {
    if (!numSet.has(n - 1)) { // only start counting from sequence start
      let cur = n, len = 1;
      while (numSet.has(cur + 1)) { cur++; len++; }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}
// [100,4,200,1,3,2] -> 4  (sequence 1,2,3,4)

// Happy Number (cycle detection with Set)
function isHappy(n) {
  const seen = new Set();
  while (n !== 1) {
    n = String(n).split('').reduce((acc, d) => acc + d * d, 0);
    if (seen.has(n)) return false; // cycle detected
    seen.add(n);
  }
  return true;
}
// 19 -> true  |  2 -> false`
  },

  // 3.3 Fast Lookup O(1)
  {
    category: 'HashMap', difficulty: 'Intermediate',
    question: '3.3 HashMap for O(1) Lookup — the Two Sum pattern and its variants?',
    answer: '**The core trick**: store what you\'ve seen (value → index) in a HashMap. For each new element, check if its complement is already stored — O(1) lookup replaces O(n) scan. **Two Sum pattern**: `complement = target - nums[i]`, check map, else store `map[nums[i]] = i`. **Extensions**: 4Sum uses HashMap to reduce O(n³) to O(n²); Subarray Sum Equals K uses prefix sum + HashMap; Intersection uses map for set operations. This pattern is the single most useful HashMap pattern in coding interviews.',
    tip: `// Two Sum — classic O(n) with HashMap
function twoSum(nums, target) {
  const map = new Map(); // value -> index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}
// [2,7,11,15], target=9 -> [0,1]

// Two Sum II variants
// - 4Sum: fix two, use hash for third+fourth
// - 3Sum with no duplicates: sort + two pointers (better than hash)

// LRU Cache — HashMap + Doubly Linked List
class LRUCache {
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map(); // key -> node (ordered by insertion in JS Map)
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key); // move to end (most recently used)
    this.map.set(key, val);
    return val;
  }
  put(key, value) {
    this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.cap) {
      this.map.delete(this.map.keys().next().value); // evict LRU (first key)
    }
  }
}`
  },

  // 3.4 Grouping Problems
  {
    category: 'HashMap', difficulty: 'Intermediate',
    question: '3.4 Grouping with HashMap — what is the canonical key-grouping pattern?',
    answer: '**Grouping pattern**: find a canonical key that all "equivalent" items share, then map key → list of items. The key can be: sorted string (anagrams), character count tuple, first letter, modular value, or any normalized representation. **Think**: "what property do these items share that I can express as a string/number key?" **Common problems**: Group Anagrams (sorted string as key), Isomorphic Strings (character mapping pattern), Find Duplicate File in System, Word Pattern. This pattern converts O(n²) comparison into O(n) hashing.',
    tip: `// Group Anagrams — sorted word as canonical key
function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = [...s].sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
}

// Isomorphic Strings — map characters in both directions
function isIsomorphic(s, t) {
  const sToT = {}, tToS = {};
  for (let i = 0; i < s.length; i++) {
    if (sToT[s[i]] && sToT[s[i]] !== t[i]) return false;
    if (tToS[t[i]] && tToS[t[i]] !== s[i]) return false;
    sToT[s[i]] = t[i];
    tToS[t[i]] = s[i];
  }
  return true;
}
// 'egg', 'add' -> true   'foo', 'bar' -> false

// Word Pattern
function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  const pToW = {}, wToP = {};
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i], w = words[i];
    if (pToW[p] && pToW[p] !== w) return false;
    if (wToP[w] && wToP[w] !== p) return false;
    pToW[p] = w; wToP[w] = p;
  }
  return true;
}`
  },

  // ══════════════════════════════════════════════════════════
  // 4. SEARCHING
  // ══════════════════════════════════════════════════════════

  // 4.1 Binary Search
  {
    category: 'Searching', difficulty: 'Intermediate',
    question: '4.1 Binary Search — how does it work, what are the gotchas, and the universal template?',
    answer: '**Binary Search** eliminates half the search space each iteration — O(log n) on sorted data. **Template**: `left=0, right=n-1`, `mid = left + Math.floor((right-left)/2)` (prevents integer overflow). If `nums[mid] === target`: found. If `nums[mid] < target`: `left = mid+1`. Else: `right = mid-1`. **Gotchas**: off-by-one errors; infinite loop when `left === right`; choosing `mid+1` vs `mid` when shrinking. **Key insight**: binary search works on ANY monotone function, not just arrays — "search on answer" technique.',
    tip: `// Classic Binary Search
function binarySearch(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // avoid overflow
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // not found
}

// Search Insert Position (lower bound)
function searchInsert(nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid; // could be answer, keep narrowing left
  }
  return left; // first position where nums[i] >= target
}

// Binary Search on Answer — Minimum in Rotated Sorted Array
function findMin(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) left = mid + 1; // min is in right half
    else right = mid;                             // mid could be the min
  }
  return nums[left];
}
// [3,4,5,1,2] -> 1`
  },

  // 4.2 Rotated Array Search
  {
    category: 'Searching', difficulty: 'Advanced',
    question: '4.2 Rotated Array Search — how to binary search in a rotated sorted array in O(log n)?',
    answer: '**Key insight**: in a rotated sorted array, when you pick `mid`, **one half is always sorted**. Determine which half is sorted by comparing `nums[left]` with `nums[mid]`. If left half sorted (`nums[left] <= nums[mid]`): check if target falls in `[nums[left], nums[mid]]` → narrow to left, else narrow to right. Else right half is sorted: check if target falls in `[nums[mid], nums[right]]`. This guarantees you always eliminate half. Works even with duplicates (with slight modification to handle `nums[left] === nums[mid]`).',
    tip: `// Search in Rotated Sorted Array — O(log n)
function search(nums, target) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // target in left half
      } else {
        left = mid + 1;  // target in right half
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;  // target in right half
      } else {
        right = mid - 1; // target in left half
      }
    }
  }
  return -1;
}
// [4,5,6,7,0,1,2], target=0 -> 4
// [4,5,6,7,0,1,2], target=3 -> -1

// Find Minimum in Rotated Array
function findMin(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l]; // pivot = minimum
}`
  },

  // 4.3 Lower Bound / Upper Bound
  {
    category: 'Searching', difficulty: 'Intermediate',
    question: '4.3 Lower Bound & Upper Bound — what are they and how to implement with binary search?',
    answer: '**Lower Bound**: first index where `arr[i] >= target` (leftmost valid position). **Upper Bound**: first index where `arr[i] > target`. These let you find the range of a target value, count occurrences, and handle "find first/last position" problems. **Template**: when `nums[mid]` satisfies the condition, don\'t return — store it and narrow further (`right = mid`). When it doesn\'t, move `left = mid+1`. This is also called the "bisect_left / bisect_right" pattern from Python.',
    tip: `// Lower Bound — first index where arr[i] >= target
function lowerBound(nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid; // could be answer, keep going
  }
  return left; // insertion point for target
}

// Upper Bound — first index where arr[i] > target
function upperBound(nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left;
}

// Find First and Last Position of Element
function searchRange(nums, target) {
  const first = lowerBound(nums, target);
  if (first === nums.length || nums[first] !== target) return [-1, -1];
  const last = upperBound(nums, target) - 1;
  return [first, last];
}
// [5,7,7,8,8,10], target=8 -> [3,4]
// Count of target = upperBound - lowerBound`
  },

  // ══════════════════════════════════════════════════════════
  // 5. RECURSION
  // ══════════════════════════════════════════════════════════

  // 5.1 Base Case
  {
    category: 'Recursion', difficulty: 'Beginner',
    question: '5.1 Recursion & Base Case — what makes a correct recursive function?',
    answer: 'Recursion solves a problem by breaking it into a **smaller version of the same problem**. Three requirements: 1) **Base case** — the simplest input that can be answered directly (stops the recursion). 2) **Recursive case** — reduce the problem toward the base case. 3) **Progress** — each call must get strictly closer to the base case. Without a proper base case: **stack overflow**. **The Recursive Leap of Faith**: trust that the recursive call correctly solves the smaller problem — don\'t try to trace every level. Time: usually O(branches^depth). Space: O(depth) call stack.',
    tip: `// Factorial — O(n) time, O(n) space (call stack)
function factorial(n) {
  if (n <= 1) return 1;          // base case
  return n * factorial(n - 1);  // recursive case — progresses toward 0
}
// factorial(5) = 5 * factorial(4) = 5 * 4 * 3 * 2 * 1 = 120

// Sum of array elements recursively
function sum(arr, i = 0) {
  if (i === arr.length) return 0;  // base case: past end
  return arr[i] + sum(arr, i + 1); // add current + rest
}

// Power — O(log n) with divide & conquer
function power(base, exp) {
  if (exp === 0) return 1;                  // base case
  if (exp % 2 === 0) {
    const half = power(base, exp / 2);
    return half * half;                    // even: (b^(n/2))^2
  }
  return base * power(base, exp - 1);      // odd: b * b^(n-1)
}

// Common base cases:
// Array: i === arr.length | i === 0
// String: s.length === 0
// Tree: node === null
// Number: n === 0 | n === 1
// Linked List: node === null | node.next === null`
  },

  // 5.2 Divide and Conquer
  {
    category: 'Recursion', difficulty: 'Intermediate',
    question: '5.2 Divide and Conquer — pattern, Master Theorem, and key algorithms?',
    answer: '**Divide and Conquer** splits a problem into smaller subproblems, solves recursively, then merges results. Steps: 1) **Divide** — split into subproblems (usually 2 halves). 2) **Conquer** — recursively solve each. 3) **Combine** — merge results. **Master Theorem**: T(n) = aT(n/b) + f(n). If work per level dominates: O(f(n)). If split dominates: O(n^log_b(a)). **Key algorithms**: Merge Sort O(n log n), Quick Sort O(n log n) avg, Binary Search O(log n), Maximum Subarray, Closest Pair of Points. D&C trades repeated work for a logarithmic factor.',
    tip: `// Merge Sort — O(n log n) stable sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;          // base case

  const mid = Math.floor(arr.length / 2);
  const left  = mergeSort(arr.slice(0, mid)); // conquer left
  const right = mergeSort(arr.slice(mid));    // conquer right
  return merge(left, right);                  // combine
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Quick Sort — O(n log n) avg, O(n^2) worst
function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return;
  const pivot = partition(arr, lo, hi);
  quickSort(arr, lo, pivot - 1);
  quickSort(arr, pivot + 1, hi);
}
function partition(arr, lo, hi) {
  const pivot = arr[hi];
  let i = lo - 1;
  for (let j = lo; j < hi; j++) {
    if (arr[j] <= pivot) { i++; [arr[i], arr[j]] = [arr[j], arr[i]]; }
  }
  [arr[i+1], arr[hi]] = [arr[hi], arr[i+1]];
  return i + 1;
}
// Divide: split at pivot  |  Conquer: sort each half  |  Combine: in-place`
  },

  // 5.3 Backtracking
  {
    category: 'Recursion', difficulty: 'Advanced',
    question: '5.3 Backtracking — choose-explore-unchoose pattern, pruning, and key problems?',
    answer: '**Backtracking** explores all possibilities by making choices and undoing them (backtracking) when a path is invalid. Template: **Choose** (add to path), **Explore** (recurse), **Unchoose** (remove from path). **Pruning**: skip invalid choices early to drastically cut the search space. **Complexity**: typically O(2^n) for subsets, O(n!) for permutations — but pruning makes it practical. **Key problems**: Subsets (include/exclude), Permutations (swap), Combinations (pick k of n), N-Queens (constraint check), Word Search (grid DFS), Sudoku Solver.',
    tip: `// Subsets — include/exclude each element
function subsets(nums) {
  const result = [];
  function bt(start, path) {
    result.push([...path]);      // every path is a valid subset
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);        // CHOOSE
      bt(i + 1, path);           // EXPLORE
      path.pop();                // UNCHOOSE (backtrack)
    }
  }
  bt(0, []);
  return result;
}
// [1,2,3] -> [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

// Permutations
function permute(nums) {
  const result = [];
  function bt(path, used) {
    if (path.length === nums.length) { result.push([...path]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;       // PRUNE: already used
      used[i] = true;
      path.push(nums[i]);          // CHOOSE
      bt(path, used);              // EXPLORE
      path.pop();                  // UNCHOOSE
      used[i] = false;
    }
  }
  bt([], new Array(nums.length).fill(false));
  return result;
}

// Combination Sum (elements can repeat)
function combinationSum(candidates, target) {
  const result = [];
  function bt(start, path, rem) {
    if (rem === 0) { result.push([...path]); return; }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > rem) break; // PRUNE (sorted candidates)
      path.push(candidates[i]);
      bt(i, path, rem - candidates[i]); // i (not i+1) — can reuse
      path.pop();
    }
  }
  candidates.sort((a, b) => a - b);
  bt(0, [], target);
  return result;
}`
  },

  // ══════════════════════════════════════════════════════════
  // 6. TREES
  // ══════════════════════════════════════════════════════════

  // 6.1 Binary Tree
  {
    category: 'Trees', difficulty: 'Beginner',
    question: '6.1 Binary Tree — structure, key properties, and common interview measurements?',
    answer: '**Binary Tree**: each node has at most two children (left, right). No ordering constraint (unlike BST). **Types**: Full (each node has 0 or 2 children), Complete (all levels full except possibly last, filled left to right), Perfect (all levels completely filled), Balanced (height = O(log n)). **Key measurements**: Height/Depth = longest path from root to leaf. Diameter = longest path between any two nodes (may not pass through root). Node count of perfect tree with height h: 2^(h+1) - 1. **Most tree problems**: use recursion — think "what should this function return given left subtree result and right subtree result?"',
    tip: `// TreeNode definition
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}

// Height of tree — O(n)
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}

// Count nodes
function countNodes(root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
}

// Diameter of Binary Tree (longest path between two nodes)
function diameterOfBinaryTree(root) {
  let maxDiam = 0;
  function depth(node) {
    if (!node) return 0;
    const left  = depth(node.left);
    const right = depth(node.right);
    maxDiam = Math.max(maxDiam, left + right); // path through this node
    return 1 + Math.max(left, right);          // depth returned to parent
  }
  depth(root);
  return maxDiam;
}

// Symmetric Tree
function isSymmetric(root) {
  function mirror(l, r) {
    if (!l && !r) return true;
    if (!l || !r || l.val !== r.val) return false;
    return mirror(l.left, r.right) && mirror(l.right, r.left);
  }
  return mirror(root, root);
}`
  },

  // 6.2 Binary Search Tree
  {
    category: 'Trees', difficulty: 'Intermediate',
    question: '6.2 Binary Search Tree (BST) — invariant, operations, when it degrades, and validation?',
    answer: '**BST invariant**: for every node, ALL values in left subtree < node.val < ALL values in right subtree. **Operations**: search, insert, delete — O(log n) average, O(n) worst (degenerate tree from sorted input). **Inorder traversal = sorted array** — the single most useful BST property. **Balanced BSTs** (AVL, Red-Black trees) guarantee O(log n) worst case. **Validation**: track valid range `(min, max)` for each node — not just parent comparison. **Common problems**: Kth Smallest, Validate BST, LCA in BST, Convert BST to Greater Tree, Delete Node.',
    tip: `// Validate BST — track min/max bounds
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left,  min, root.val) &&
         isValidBST(root.right, root.val, max);
}

// Inorder traversal of BST = sorted array
function inorder(root, result = []) {
  if (!root) return result;
  inorder(root.left, result);
  result.push(root.val);       // visit root
  inorder(root.right, result);
  return result;
}
// Kth Smallest: take kth element from inorder result

// BST Insert
function insert(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left  = insert(root.left, val);
  else                root.right = insert(root.right, val);
  return root;
}

// LCA in BST (Lowest Common Ancestor)
function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
  return root; // split point = LCA
}`
  },

  // 6.3 DFS Traversal
  {
    category: 'Trees', difficulty: 'Intermediate',
    question: '6.3 Tree DFS Traversal — preorder, inorder, postorder: what each visits and when to use each?',
    answer: '**Three DFS orders** (Root = current node, L = left subtree, R = right subtree): **Preorder (Root→L→R)**: visit node before children — use for: copy/serialize tree, prefix notation, process parent before children. **Inorder (L→Root→R)**: left subtree first — use for: BST sorted output, validate BST, expression tree. **Postorder (L→R→Root)**: visit node after children — use for: delete tree, calculate subtree results (directory sizes), postfix notation. All O(n) time, O(h) space. **Iterative** versions use an explicit stack.',
    tip: `// Recursive DFS traversals
function preorder(root, res = []) {
  if (!root) return res;
  res.push(root.val);             // Root first
  preorder(root.left, res);
  preorder(root.right, res);
  return res;
}

function inorder(root, res = []) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val);             // Root in middle
  inorder(root.right, res);
  return res;
}

function postorder(root, res = []) {
  if (!root) return res;
  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val);             // Root last
  return res;
}

// Iterative Inorder (using explicit stack)
function inorderIterative(root) {
  const res = [], stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) { stack.push(cur); cur = cur.left; } // go left
    cur = stack.pop();
    res.push(cur.val);            // visit
    cur = cur.right;              // go right
  }
  return res;
}

// Maximum Path Sum (postorder: use children results)
function maxPathSum(root) {
  let max = -Infinity;
  function dfs(node) {
    if (!node) return 0;
    const l = Math.max(0, dfs(node.left));  // discard negative
    const r = Math.max(0, dfs(node.right));
    max = Math.max(max, node.val + l + r);  // path through node
    return node.val + Math.max(l, r);       // best single branch
  }
  dfs(root);
  return max;
}`
  },

  // 6.4 BFS Traversal
  {
    category: 'Trees', difficulty: 'Intermediate',
    question: '6.4 Tree BFS — how it works, level-by-level collection, and important variations?',
    answer: '**BFS (Breadth-First Search)** uses a **queue** to visit nodes level by level, left to right. Algorithm: enqueue root → loop: dequeue node, process, enqueue children. **Time**: O(n). **Space**: O(w) where w = max width (worst case O(n) for the last level of a full tree). **Key insight**: to capture nodes by level, check queue size at the start of each iteration — that\'s how many nodes are in the current level. **Use BFS over DFS for**: shortest path, level-order problems, anything that needs "minimum depth" or layer-by-layer processing.',
    tip: `// Level Order Traversal — group by level
function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const levelSize = queue.length;  // nodes in current level
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}
// Output: [[3],[9,20],[15,7]]

// Minimum Depth (BFS finds it faster than DFS)
function minDepth(root) {
  if (!root) return 0;
  const queue = [[root, 1]];
  while (queue.length) {
    const [node, depth] = queue.shift();
    if (!node.left && !node.right) return depth; // first leaf = min depth
    if (node.left)  queue.push([node.left,  depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
}

// Right Side View (last node of each level)
function rightSideView(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (i === size - 1) result.push(node.val); // last = rightmost
      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}`
  },

  // 6.5 Level Order Patterns
  {
    category: 'Trees', difficulty: 'Intermediate',
    question: '6.5 Level Order Patterns — Zigzag, Max Width, and Connect Next Pointers?',
    answer: '**Level Order** (BFS-based) is the foundation for a family of interview problems. **Zigzag**: alternate left-to-right and right-to-left per level — use a flag + reverse alternate levels. **Max Width**: maximum number of nodes at any level — also useful with position indexing to handle sparse trees. **Connect Next Pointers**: link each node to its right neighbor — can be done with BFS (queue) or O(1) space using the already-linked previous level. **Binary Tree Cameras**: postorder DP with 3 states. These all share the same BFS skeleton; the variation is in what you do with each level.',
    tip: `// Zigzag Level Order
function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  let leftToRight = true;
  while (queue.length) {
    const size = queue.length;
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (leftToRight) level.push(node.val);
      else level.unshift(node.val);            // prepend for reverse
      if (node.left)  queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
    leftToRight = !leftToRight;
  }
  return result;
}

// Max Width of Binary Tree (using position indices)
function widthOfBinaryTree(root) {
  if (!root) return 0;
  let maxWidth = 0;
  const queue = [[root, 0]]; // [node, position]
  while (queue.length) {
    const size = queue.length;
    const leftPos = queue[0][1];  // leftmost position
    let rightPos;
    for (let i = 0; i < size; i++) {
      const [node, pos] = queue.shift();
      const normalized = pos - leftPos; // prevent BigInt overflow
      rightPos = normalized;
      if (node.left)  queue.push([node.left,  normalized * 2]);
      if (node.right) queue.push([node.right, normalized * 2 + 1]);
    }
    maxWidth = Math.max(maxWidth, rightPos + 1);
  }
  return maxWidth;
}`
  },

  // ══════════════════════════════════════════════════════════
  // 7. GRAPH
  // ══════════════════════════════════════════════════════════

  // 7.1 Graph DFS
  {
    category: 'Graph', difficulty: 'Intermediate',
    question: '7.1 Graph DFS — recursive and iterative implementations, visited set, and key problems?',
    answer: '**Graph DFS** visits a node, marks it visited, then recursively visits all unvisited neighbors. Unlike tree DFS, graphs can have cycles — **always use a `visited` set**. **Recursive** is cleaner but risks stack overflow for large graphs. **Iterative** uses an explicit stack. **Adjacency list** is the standard representation for interview graphs. **Key problems**: Number of Islands (flood fill), Connected Components, Cycle Detection (directed: white/grey/black; undirected: parent tracking), Clone Graph, Pacific Atlantic Water Flow, Course Schedule.',
    tip: `// Build adjacency list from edge list
function buildGraph(n, edges) {
  const graph = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { graph[u].push(v); graph[v].push(u); }
  return graph;
}

// DFS — recursive (count connected components)
function numComponents(n, edges) {
  const graph = buildGraph(n, edges);
  const visited = new Set();
  let count = 0;
  function dfs(node) {
    visited.add(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) { dfs(i); count++; }
  }
  return count;
}

// DFS — iterative (using explicit stack)
function dfsIterative(graph, start) {
  const visited = new Set([start]);
  const stack = [start];
  while (stack.length) {
    const node = stack.pop();
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
      }
    }
  }
}

// Number of Islands (2D grid DFS)
function numIslands(grid) {
  let count = 0;
  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === '1') { dfsGrid(grid, r, c); count++; }
  return count;
}
function dfsGrid(grid, r, c) {
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== '1') return;
  grid[r][c] = '0'; // mark visited by sinking the island
  [[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc]) => dfsGrid(grid, r+dr, c+dc));
}`
  },

  // 7.2 Graph BFS
  {
    category: 'Graph', difficulty: 'Intermediate',
    question: '7.2 Graph BFS — why it guarantees shortest path in unweighted graphs, and key patterns?',
    answer: '**Graph BFS** explores all neighbors at distance 1, then distance 2, etc. — naturally finds the **shortest path (fewest edges)** in unweighted graphs. Use a **queue + visited set**. Mark nodes visited when **enqueuing** (not dequeuing) to avoid adding duplicates to the queue. **Key insight**: BFS distance from source = level in the BFS tree. **Problems**: Shortest Path (unweighted), Word Ladder (BFS on implicit graph), 01 Matrix (multi-source BFS), Bipartite Check (2-color with BFS), Walls and Gates, Rotten Oranges (multi-source).',
    tip: `// BFS — shortest path between two nodes
function shortestPath(graph, start, end) {
  const visited = new Set([start]);
  const queue = [[start, 0]]; // [node, distance]
  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);       // mark on enqueue
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1; // not reachable
}

// Word Ladder — BFS on implicit word graph
function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, steps] = queue.shift();
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) { // a-z
        const next = word.slice(0,i) + String.fromCharCode(c) + word.slice(i+1);
        if (next === endWord) return steps + 1;
        if (wordSet.has(next)) { wordSet.delete(next); queue.push([next, steps+1]); }
      }
    }
  }
  return 0;
}

// Multi-source BFS (Rotten Oranges)
// Start BFS from ALL rotten oranges simultaneously
// Each step = 1 minute — find minimum time to rot all`
  },

  // 7.3 Topological Sort
  {
    category: 'Graph', difficulty: 'Advanced',
    question: '7.3 Topological Sort — DAG ordering, Kahn\'s algorithm vs DFS-based, and cycle detection?',
    answer: '**Topological Sort**: linear ordering of vertices in a **DAG** (Directed Acyclic Graph) where for every edge u→v, u appears before v. Only possible if no cycles. **Kahn\'s Algorithm (BFS-based)**: 1) Compute in-degree for all nodes. 2) Enqueue all nodes with in-degree 0. 3) Dequeue node, add to result, decrement neighbors\' in-degree, enqueue newly zeroed neighbors. 4) If result length < n: cycle detected. **DFS-based**: run DFS, push node to stack AFTER visiting all neighbors (post-order), reverse stack. **Use cases**: course prerequisites, build systems, task scheduling.',
    tip: `// Kahn's Algorithm — BFS Topological Sort
function topoSort(numCourses, prerequisites) {
  const graph = Array.from({length: numCourses}, () => []);
  const inDegree = new Array(numCourses).fill(0);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);   // b must come before a
    inDegree[a]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i); // start nodes
  }

  const order = [];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of graph[node]) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  // If not all nodes visited: cycle exists (impossible to complete)
  return order.length === numCourses ? order : [];
}
// Course Schedule: return order.length === numCourses

// DFS-based Topological Sort
function topoSortDFS(n, graph) {
  const visited = new Set(), stack = [];
  function dfs(node) {
    visited.add(node);
    for (const nb of graph[node]) if (!visited.has(nb)) dfs(nb);
    stack.push(node); // push AFTER all neighbors processed
  }
  for (let i = 0; i < n; i++) if (!visited.has(i)) dfs(i);
  return stack.reverse(); // reverse = topological order
}`
  },

  // 7.4 Shortest Path
  {
    category: 'Graph', difficulty: 'Advanced',
    question: '7.4 Shortest Path — BFS vs Dijkstra vs Bellman-Ford: when to use each?',
    answer: '**Unweighted graph**: BFS — O(V+E), guarantees shortest hop count. **Weighted, non-negative**: Dijkstra\'s — O((V+E) log V) with min-heap; greedily picks the closest unvisited node. **Weighted, with negative edges**: Bellman-Ford — O(V·E), relaxes all edges V-1 times; detects negative cycles. **All pairs**: Floyd-Warshall — O(V³). **Interview focus**: BFS for unweighted/grid problems, Dijkstra for weighted positive (Network Delay Time, Cheapest Flights). **Key insight for Dijkstra**: once a node is popped from min-heap, its shortest distance is final.',
    tip: `// Dijkstra's Algorithm — O((V+E) log V) with min-heap
function dijkstra(n, edges, src) {
  const graph = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) graph[u].push([v, w]);

  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  // Min-heap: [distance, node]
  const heap = [[0, src]];

  while (heap.length) {
    // Simple simulation (in interviews, use a real priority queue)
    heap.sort((a, b) => a[0] - b[0]);
    const [d, u] = heap.shift();
    if (d > dist[u]) continue;  // stale entry — skip

    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        heap.push([dist[v], v]);
      }
    }
  }
  return dist; // dist[i] = shortest from src to i
}
// Network Delay Time: return Math.max(...dist) if all reachable

// Bellman-Ford — handles negative weights
function bellmanFord(n, edges, src) {
  const dist = new Array(n).fill(Infinity);
  dist[src] = 0;
  for (let i = 0; i < n - 1; i++) {         // relax n-1 times
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }
  // Check for negative cycles: if any relaxation still improves
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) return null; // neg cycle
  }
  return dist;
}`
  },

  // ══════════════════════════════════════════════════════════
  // 8. DYNAMIC PROGRAMMING
  // ══════════════════════════════════════════════════════════

  // 8.1 Memoization (Top-Down)
  {
    category: 'Dynamic Programming', difficulty: 'Intermediate',
    question: '8.1 Memoization (Top-Down DP) — how to convert recursion to DP and identify overlapping subproblems?',
    answer: '**Memoization** = recursion + caching. Write the recursive solution naturally, then add a cache (Map or array). Before computing: check if result is cached. After computing: store in cache before returning. **Converts exponential to polynomial**: O(2^n) Fibonacci → O(n) with memo. **When to use**: problem has **overlapping subproblems** (same inputs computed multiple times) and **optimal substructure** (optimal solution built from optimal solutions to subproblems). **Identify DP**: "count ways", "minimum/maximum", "is it possible" with repeated choices — likely DP. **Parameters of the recursive function = dimensions of the DP table**.',
    tip: `// Fibonacci — naive O(2^n) -> memoized O(n)
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];          // cache hit
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

// Climbing Stairs (1 or 2 steps at a time)
function climbStairs(n, memo = {}) {
  if (n <= 1) return 1;
  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
  return memo[n];
}
// Same as Fibonacci! dp[n] = dp[n-1] + dp[n-2]

// Coin Change (minimum coins) — Top-Down
function coinChange(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (amount < 0)  return Infinity;
  if (memo[amount] !== undefined) return memo[amount];
  let min = Infinity;
  for (const coin of coins) {
    const res = coinChange(coins, amount - coin, memo);
    min = Math.min(min, res + 1);
  }
  memo[amount] = min === Infinity ? -1 : min;
  return memo[amount];
}

// Word Break
function wordBreak(s, wordDict, memo = {}) {
  if (s in memo) return memo[s];
  if (s.length === 0) return true;
  for (const word of wordDict) {
    if (s.startsWith(word) && wordBreak(s.slice(word.length), wordDict, memo)) {
      memo[s] = true; return true;
    }
  }
  memo[s] = false; return false;
}`
  },

  // 8.2 Tabulation (Bottom-Up)
  {
    category: 'Dynamic Programming', difficulty: 'Intermediate',
    question: '8.2 Tabulation (Bottom-Up DP) — how to build the DP table and optimize space?',
    answer: '**Tabulation** fills a DP table from base cases up to the target — no recursion, no call stack. Steps: 1) **Define** `dp[i]` (or dp[i][j]): what does this cell represent? 2) **Base case**: fill base values. 3) **Recurrence**: how does dp[i] depend on smaller cells? 4) **Order**: fill so dependencies are ready. 5) **Answer**: usually `dp[n]` or `dp[m][n]`. **Space optimization**: if dp[i] only depends on dp[i-1] (and dp[i-2]), you can reduce O(n) space to O(1) by keeping only the last two values. Bottom-up is generally faster in practice (no function call overhead, better cache locality).',
    tip: `// Climbing Stairs — Bottom-Up O(n) time, O(1) space
function climbStairs(n) {
  if (n <= 1) return 1;
  let prev2 = 1, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    [prev2, prev1] = [prev1, prev1 + prev2]; // space-optimized
  }
  return prev1;
}

// Coin Change — Bottom-Up
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // base case: 0 coins to make amount 0
  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a) dp[a] = Math.min(dp[a], dp[a - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
// amount=11, coins=[1,5,6,9] -> 2 (coins 5+6)

// Longest Common Subsequence — 2D DP
function longestCS(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
      else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
  return dp[m][n];
}
// 'abcde', 'ace' -> 3  ('ace')`
  },

  // 8.3 Knapsack
  {
    category: 'Dynamic Programming', difficulty: 'Advanced',
    question: '8.3 Knapsack Problem — 0/1 knapsack DP solution and space optimization?',
    answer: '**0/1 Knapsack**: given n items each with `weight[i]` and `value[i]`, maximize total value with capacity W. Each item either taken (1) or not (0). **Recurrence**: `dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]])` if `weight[i] <= w`. **Time**: O(n·W). **Space**: O(n·W) → optimize to O(W) by using 1D array and iterating W backwards (prevents using same item twice). **Variations**: Unbounded Knapsack (items can be reused — iterate W forward), Subset Sum (value = weight, can we hit exactly W?), Partition Equal Subset Sum.',
    tip: `// 0/1 Knapsack — 2D DP
function knapsack(weights, values, W) {
  const n = weights.length;
  const dp = Array.from({length: n+1}, () => new Array(W+1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      dp[i][w] = dp[i-1][w]; // don't take item i
      if (weights[i-1] <= w) {
        dp[i][w] = Math.max(dp[i][w], values[i-1] + dp[i-1][w - weights[i-1]]);
      }
    }
  }
  return dp[n][W];
}

// Space-optimized 0/1 Knapsack — O(W) space
function knapsack1D(weights, values, W) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < weights.length; i++) {
    for (let w = W; w >= weights[i]; w--) {  // iterate BACKWARDS
      dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
    }
  }
  return dp[W];
}

// Partition Equal Subset Sum (knapsack variant)
function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let w = target; w >= num; w--) {
      dp[w] = dp[w] || dp[w - num];
    }
  }
  return dp[target];
}
// [1,5,11,5] -> true (partition into [1,5,5] and [11])`
  },

  // 8.4 Fibonacci Pattern
  {
    category: 'Dynamic Programming', difficulty: 'Intermediate',
    question: '8.4 Fibonacci DP Pattern — what problems follow this pattern and how to optimize to O(1) space?',
    answer: '**Fibonacci Pattern**: `dp[i] = f(dp[i-1], dp[i-2])` — current state depends only on the previous 1-2 states. The full DP table is O(n) space but can always be reduced to O(1) by keeping only the last two values. **Problems in this family**: Fibonacci, Climbing Stairs, House Robber (can\'t rob adjacent), Min Cost Climbing Stairs, Decode Ways, Tribonacci, Jump Game II. **Recognition**: "count ways to reach position i" or "min/max cost at position i" where only nearby previous positions affect the current. The recurrence is the key — find it and code falls into place.',
    tip: `// House Robber — can't rob adjacent houses
function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (const num of nums) {
    const cur = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}
// dp[i] = max(dp[i-1], dp[i-2] + nums[i])
// [2,7,9,3,1] -> 12 (rob houses 1,3,5: 2+9+1)

// House Robber II (circular — two passes)
function rob2(nums) {
  function robRange(start, end) {
    let p2 = 0, p1 = 0;
    for (let i = start; i <= end; i++) {
      [p2, p1] = [p1, Math.max(p1, p2 + nums[i])];
    }
    return p1;
  }
  const n = nums.length;
  return Math.max(nums[0], robRange(0, n-2), robRange(1, n-1));
}

// Decode Ways (Fibonacci-like with conditions)
function numDecodings(s) {
  const n = s.length;
  let prev2 = 1, prev1 = s[0] !== '0' ? 1 : 0;
  for (let i = 1; i < n; i++) {
    let cur = 0;
    if (s[i] !== '0') cur += prev1;            // single digit decode
    const two = parseInt(s.slice(i-1, i+1));
    if (two >= 10 && two <= 26) cur += prev2;  // two digit decode
    prev2 = prev1; prev1 = cur;
  }
  return prev1;
}
// '12' -> 2 (1+2 or 12)  |  '226' -> 3  |  '06' -> 0`
  },

  // ══════════════════════════════════════════════════════════
  // IMPORTANT PATTERNS
  // ══════════════════════════════════════════════════════════

  // Pattern: Two Pointers
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'Pattern: Two Pointers — 3 example problems and their solutions?',
    answer: '**Two Pointers** in action across 3 classic problems: 1) **Container With Most Water** — maximize area by moving the shorter wall inward. 2) **3Sum** — sort + fix one element + two pointers for the other two. 3) **Trapping Rain Water** — track left/right max walls, water level at each cell is `min(leftMax, rightMax) - height[i]`. All are O(n) or O(n log n). The pattern is always: two indices, smart movement condition.',
    tip: `// 1. Container With Most Water
function maxArea(height) {
  let l = 0, r = height.length - 1, max = 0;
  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) l++; // move shorter wall to try for better
    else r--;
  }
  return max;
}

// 2. 3Sum — sort + two pointers
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue; // skip duplicate
    let l = i+1, r = nums.length-1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l+1]) l++; // skip duplicates
        while (nums[r] === nums[r-1]) r--;
        l++; r--;
      } else if (s < 0) l++;
      else r--;
    }
  }
  return res;
}

// 3. Trapping Rain Water — O(n) time, O(1) space
function trap(height) {
  let l = 0, r = height.length-1, lMax = 0, rMax = 0, water = 0;
  while (l < r) {
    if (height[l] <= height[r]) {
      lMax = Math.max(lMax, height[l]);
      water += lMax - height[l]; l++;
    } else {
      rMax = Math.max(rMax, height[r]);
      water += rMax - height[r]; r--;
    }
  }
  return water;
}`
  },

  // Pattern: Sliding Window
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'Pattern: Sliding Window — 3 example problems from fixed to advanced variable window?',
    answer: '**Sliding Window** in action: 1) **Maximum Average Subarray** — fixed window of size k. 2) **Minimum Window Substring** — variable window; expand right, contract left when valid. 3) **Longest Repeating Character Replacement** — window where replacements = windowSize - maxFreq of any char. All O(n). **Recognition signs**: "subarray/substring", "contiguous", "at most k", "longest/shortest with condition" → likely sliding window.',
    tip: `// 1. Maximum Average Subarray (Fixed Window)
function findMaxAverage(nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b);
  let max = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    max = Math.max(max, sum);
  }
  return max / k;
}

// 2. Minimum Window Substring (Variable Window)
function minWindow(s, t) {
  const need = {}, have = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;
  let formed = 0, required = Object.keys(need).length;
  let l = 0, minLen = Infinity, minL = 0;
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    have[c] = (have[c] || 0) + 1;
    if (need[c] && have[c] === need[c]) formed++;
    while (formed === required) { // window is valid — shrink
      if (r - l + 1 < minLen) { minLen = r - l + 1; minL = l; }
      have[s[l]]--;
      if (need[s[l]] && have[s[l]] < need[s[l]]) formed--;
      l++;
    }
  }
  return minLen === Infinity ? '' : s.slice(minL, minL + minLen);
}

// 3. Longest Repeating Character Replacement
function characterReplacement(s, k) {
  const count = {};
  let l = 0, maxFreq = 0, maxLen = 0;
  for (let r = 0; r < s.length; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1;
    maxFreq = Math.max(maxFreq, count[s[r]]);
    // window size - maxFreq = replacements needed
    while ((r - l + 1) - maxFreq > k) { count[s[l]]--; l++; }
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
}`
  },

  // Pattern: HashMap
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'Pattern: HashMap — 3 essential problems that showcase O(n) HashMap solutions?',
    answer: '**HashMap patterns** in practice: 1) **Two Sum** — complement lookup. 2) **Subarray Sum Equals K** — prefix sum + hashmap. 3) **Longest Substring with At Most K Distinct Characters** — sliding window + freq map. Each demonstrates a core HashMap trick: fast lookup, prefix hashing, frequency counting in a window. These three together cover 80% of HashMap interview patterns.',
    tip: `// 1. Two Sum — complement HashMap
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
}

// 2. Subarray Sum Equals K
function subarraySum(nums, k) {
  const prefixCount = new Map([[0, 1]]);
  let prefix = 0, count = 0;
  for (const n of nums) {
    prefix += n;
    count += (prefixCount.get(prefix - k) || 0);
    prefixCount.set(prefix, (prefixCount.get(prefix) || 0) + 1);
  }
  return count;
}
// [1,1,1], k=2 -> 2   [1,2,3], k=3 -> 2

// 3. Longest Substring with At Most K Distinct Characters
function lengthOfLongestSubstringKDistinct(s, k) {
  const freq = new Map();
  let l = 0, maxLen = 0;
  for (let r = 0; r < s.length; r++) {
    freq.set(s[r], (freq.get(s[r]) || 0) + 1);
    while (freq.size > k) {              // too many distinct chars
      freq.set(s[l], freq.get(s[l]) - 1);
      if (freq.get(s[l]) === 0) freq.delete(s[l]);
      l++;
    }
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
}
// 'eceba', k=2 -> 3 ('ece')`
  },

  // Pattern: Binary Search
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'Pattern: Binary Search — 3 problems using "binary search on answer" beyond plain arrays?',
    answer: '**Binary Search on Answer**: apply binary search on the answer space (not the array index). The key insight: "is it possible to achieve result X?" is a monotone function — once true, all larger values are also true (or vice versa). Binary search finds the boundary. **Problems**: Koko Eating Bananas (min eating speed), Find Peak Element, Capacity to Ship Packages. This extends binary search far beyond sorted arrays.',
    tip: `// 1. Koko Eating Bananas — Binary Search on Answer
function minEatingSpeed(piles, h) {
  let lo = 1, hi = Math.max(...piles);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    const hours = piles.reduce((acc, p) => acc + Math.ceil(p / mid), 0);
    if (hours <= h) hi = mid;   // mid is feasible, try slower
    else lo = mid + 1;          // too slow, need faster
  }
  return lo;
}
// Binary search: what's the minimum speed?

// 2. Find Peak Element
function findPeakElement(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] > nums[m+1]) r = m;   // peak is on left side (or m itself)
    else l = m + 1;                   // peak is on right side
  }
  return l;
}

// 3. Capacity to Ship Packages
function shipWithinDays(weights, days) {
  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b);
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    let daysNeeded = 1, cur = 0;
    for (const w of weights) {
      if (cur + w > mid) { daysNeeded++; cur = 0; }
      cur += w;
    }
    if (daysNeeded <= days) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`
  },

  // Pattern: DFS/BFS
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'Pattern: DFS/BFS — 3 problems showing when to choose DFS vs BFS?',
    answer: '**DFS vs BFS decision**: Use **DFS** when: exploring all paths, backtracking, finding any path, exhaustive search (permutations, subsets). Use **BFS** when: shortest path (unweighted), level-by-level processing, minimum steps. **Problems**: Clone Graph (DFS — deep copy), Number of Islands (DFS — flood fill faster), Shortest Path in Binary Matrix (BFS — need minimum steps). Both are O(V+E) time but BFS uses more memory (wide graphs).',
    tip: `// 1. Clone Graph — DFS with HashMap (node -> clone)
function cloneGraph(node, visited = new Map()) {
  if (!node) return null;
  if (visited.has(node)) return visited.get(node);
  const clone = { val: node.val, neighbors: [] };
  visited.set(node, clone);
  for (const nb of node.neighbors) {
    clone.neighbors.push(cloneGraph(nb, visited));
  }
  return clone;
}

// 2. Number of Islands — DFS flood fill
function numIslands(grid) {
  let count = 0;
  function sink(r, c) {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== '1') return;
    grid[r][c] = '0';
    sink(r+1,c); sink(r-1,c); sink(r,c+1); sink(r,c-1);
  }
  for (let r = 0; r < grid.length; r++)
    for (let c = 0; c < grid[0].length; c++)
      if (grid[r][c] === '1') { sink(r, c); count++; }
  return count;
}

// 3. Shortest Path in Binary Matrix — BFS (need minimum steps)
function shortestPathBinaryMatrix(grid) {
  const n = grid.length;
  if (grid[0][0] || grid[n-1][n-1]) return -1;
  const queue = [[0, 0, 1]]; // [row, col, steps]
  grid[0][0] = 1; // mark visited
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  while (queue.length) {
    const [r, c, steps] = queue.shift();
    if (r === n-1 && c === n-1) return steps;
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr >= 0 && nc >= 0 && nr < n && nc < n && !grid[nr][nc]) {
        grid[nr][nc] = 1;
        queue.push([nr, nc, steps+1]);
      }
    }
  }
  return -1;
}`
  },

  // Pattern: Dynamic Programming
  {
    category: 'Patterns', difficulty: 'Advanced',
    question: 'Pattern: Dynamic Programming — 3 classic examples across 1D, 2D, and interval DP?',
    answer: '**DP pattern recognition**: if a problem asks for min/max/count of something with overlapping choices that can\'t be greedily resolved, try DP. **1D DP**: state is a single index (Climbing Stairs, House Robber). **2D DP**: state is two indices, often two strings or a grid (LCS, Edit Distance, Knapsack). **Interval DP**: state is a range [i,j] (Burst Balloons, Palindromic Substrings). **Key**: always define what dp[i] (or dp[i][j]) represents, write the recurrence, identify base case.',
    tip: `// 1. Edit Distance — 2D DP (classic)
function minDistance(word1, word2) {
  const m = word1.length, n = word2.length;
  const dp = Array.from({length: m+1}, (_, i) => {
    const row = new Array(n+1).fill(0);
    row[0] = i; return row;
  });
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++) {
      if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1];
      else dp[i][j] = 1 + Math.min(
        dp[i-1][j],   // delete
        dp[i][j-1],   // insert
        dp[i-1][j-1]  // replace
      );
    }
  return dp[m][n];
}
// 'horse','ros' -> 3

// 2. Unique Paths — 2D grid DP
function uniquePaths(m, n) {
  const dp = Array.from({length: m}, () => new Array(n).fill(1));
  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      dp[i][j] = dp[i-1][j] + dp[i][j-1]; // from top or left
  return dp[m-1][n-1];
}

// 3. Longest Palindromic Subsequence — Interval DP
function longestPalindromeSubseq(s) {
  const n = s.length;
  const dp = Array.from({length: n}, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) dp[i][i] = 1; // single char = palindrome
  for (let len = 2; len <= n; len++)
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j]) dp[i][j] = dp[i+1][j-1] + 2;
      else dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
    }
  return dp[0][n-1];
}`
  },

];

;

/* ═══════════════════════════════════════════════════════════
   PYTHON — 14 cards across 3 categories
═══════════════════════════════════════════════════════════ */
const PYTHON_CARDS = [
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'What are Python\'s basic data types?',
    answer: 'Python has 5 built-in primitive types: `int` (whole numbers), `float` (decimals), `str` (text, immutable), `bool` (`True`/`False`, subclass of int), and `NoneType` (`None` — absence of value). Everything in Python is an object. Use `type()` to check a value\'s type and `isinstance()` to check inheritance.',
    tip: `x   = 42          # int
y   = 3.14        # float
s   = 'hello'     # str
b   = True        # bool (True == 1, False == 0)
n   = None        # NoneType — represents "no value"

type(x)           # <class 'int'>
isinstance(b, int)# True  (bool is subclass of int)

# Dynamic typing — variable can change type
x = 'now a string'`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'How do f-strings work in Python?',
    answer: 'f-strings (formatted string literals, Python 3.6+) let you embed expressions directly inside strings by prefixing with `f` and wrapping expressions in `{}`. They are faster than `.format()` and `%` formatting. You can run any valid Python expression inside the braces, including method calls, arithmetic, and conditionals.',
    tip: `name  = 'Alice'
age   = 30
score = 95.678

print(f'Name: {name}, Age: {age}')         # Name: Alice, Age: 30
print(f'Score: {score:.2f}')               # Score: 95.68
print(f'Next year: {age + 1}')             # Next year: 31
print(f'{name.upper()!r}')                 # 'ALICE'

# Debug shorthand (Python 3.8+)
print(f'{age = }')                         # age = 30`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'How do `if`, `elif`, and `else` work in Python?',
    answer: 'Python uses indentation (4 spaces) instead of braces for code blocks. `if` evaluates a condition; `elif` checks additional conditions; `else` is the fallback. Conditions can use comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) and logical operators (`and`, `or`, `not`). Python also supports a one-line ternary: `value if condition else other`.',
    tip: `score = 75

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
else:
    grade = 'F'

# Ternary (one-liner)
status = 'pass' if score >= 60 else 'fail'

# Truthy / falsy — these are all falsy:
# None, 0, 0.0, '', [], {}, set()`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'How do `for` and `while` loops work in Python?',
    answer: '`for` iterates over any iterable (list, string, range, dict, file…). `while` loops as long as a condition is `True`. `break` exits the loop early; `continue` skips to the next iteration; `else` on a loop runs if the loop finished without a `break`. Use `enumerate()` to get index+value, `zip()` to pair iterables.',
    tip: `# for — iterate over any iterable
fruits = ['apple', 'banana', 'cherry']
for i, fruit in enumerate(fruits):
    print(i, fruit)        # 0 apple, 1 banana ...

# range
for n in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(n)

# while
count = 0
while count < 5:
    count += 1

# zip — pair two lists
for name, score in zip(names, scores):
    print(f'{name}: {score}')`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'How do you define and call functions in Python?',
    answer: 'Use `def` to define a function. Parameters can have default values, making them optional. Functions always return `None` if there is no `return` statement. Python supports positional args, keyword args, default args, and variable args (`*args`, `**kwargs`). Lambda creates a small anonymous function for simple expressions.',
    tip: `# Basic function with default argument
def greet(name, greeting='Hello'):
    return f'{greeting}, {name}!'

greet('Alice')              # 'Hello, Alice!'
greet('Bob', 'Hi')          # 'Hi, Bob!'
greet(greeting='Hey', name='Carol')  # keyword args

# Multiple return values (returns a tuple)
def min_max(nums):
    return min(nums), max(nums)

lo, hi = min_max([3, 1, 4, 1, 5])   # lo=1, hi=5

# Lambda
square = lambda x: x ** 2
square(4)  # 16`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'What are the most useful Python string methods?',
    answer: 'Strings in Python are immutable sequences of characters. They come with a rich set of built-in methods. Common ones: `.strip()` trims whitespace, `.split()` splits into a list, `.join()` joins a list into a string, `.replace()` substitutes substrings, `.upper()`/`.lower()` changes case, `.startswith()`/`.endswith()` checks prefix/suffix, `.find()` returns index or -1.',
    tip: `s = '  Hello, World!  '

s.strip()                  # 'Hello, World!'
s.lower()                  # '  hello, world!  '
s.upper()                  # '  HELLO, WORLD!  '
s.replace('World', 'Python') # '  Hello, Python!  '
s.strip().split(', ')      # ['Hello', 'World!']

# Join — opposite of split
words = ['Python', 'is', 'great']
' '.join(words)            # 'Python is great'

s.strip().startswith('Hello')  # True
s.strip().find('World')        # 7`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'How do you handle errors in Python with try/except?',
    answer: 'Python uses `try/except` for exception handling. `try` contains code that might raise. `except ExceptionType` catches specific exceptions — always catch specific types, not bare `except`. `else` runs if no exception occurred. `finally` always runs (cleanup). Raise your own with `raise`. Custom exceptions extend `Exception`.',
    tip: `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print('Cannot divide by zero')
        return None
    except TypeError as e:
        print(f'Wrong type: {e}')
        return None
    else:
        print('Success!')   # runs only if no exception
        return result
    finally:
        print('Done')        # always runs

# Custom exception
class InsufficientFundsError(Exception):
    def __init__(self, amount):
        super().__init__(f'Need {amount} more')
        self.amount = amount`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'What are Python\'s comparison and logical operators?',
    answer: 'Comparison operators return `True` or `False`: `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=`. Logical operators: `and` (both true), `or` (either true), `not` (inverts). Identity: `is` checks if two variables point to the same object in memory (use for `None` checks). Membership: `in` / `not in` checks if a value exists in an iterable.',
    tip: `# Chained comparisons (Pythonic — unique to Python)
x = 5
1 < x < 10          # True — equivalent to 1<x and x<10

# Identity vs equality
a = [1, 2, 3]
b = [1, 2, 3]
a == b              # True  (same value)
a is b              # False (different objects)

# Always use 'is' for None checks
if result is None:
    ...

# 'in' membership test
'py' in 'python'    # True
3 in [1, 2, 3]      # True
'key' in {'key': 1} # True (checks dict keys)`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'What are the differences between List, Tuple, Set, and Dict?',
    answer: 'List `[1,2,3]`: ordered, mutable, allows duplicates. Tuple `(1,2,3)`: ordered, immutable, allows duplicates — faster and hashable, usable as dict keys. Set `{1,2,3}`: unordered, mutable, no duplicates, O(1) membership test. Dict `{"k":v}`: ordered (Python 3.7+), mutable, unique keys, O(1) lookup. Pick the right structure: tuples for fixed data, sets for uniqueness/membership, dicts for mappings.',
    tip: `# List — ordered, mutable
nums = [1, 2, 2, 3]
nums.append(4)

# Tuple — immutable, hashable, slightly faster
point = (10, 20)
coords = {point: 'origin'}  # valid dict key

# Set — O(1) lookup, no duplicates
unique = {1, 2, 3}
print(2 in unique)  # True

# Dict — key-value mapping
user = {'name': 'Alice', 'age': 30}
user.get('email', 'N/A')  # safe default`
  },
  {
    category: 'Core Python', difficulty: 'Beginner',
    question: 'What are list comprehensions and generator expressions?',
    answer: 'List comprehensions `[expr for x in iter if cond]` build a full list in memory — faster than a for-loop because optimised at the C level. Generator expressions `(expr for x in iter if cond)` are lazy — they produce values one at a time without storing the full result. Use generators for large or infinite sequences to save memory.',
    tip: `# List comprehension — builds full list in memory
squares = [x**2 for x in range(10) if x % 2 == 0]

# Generator expression — lazy, memory-efficient
big = (x**2 for x in range(10**8))
next(big)  # 0 — computed on demand

# Dict & set comprehensions
lengths  = {w: len(w) for w in ['hi', 'hello']}
uniq_chr = {c.lower() for c in 'Hello World' if c.isalpha()}`
  },
  {
    category: 'Core Python', difficulty: 'Intermediate',
    question: 'What are *args and **kwargs?',
    answer: '`*args` collects extra positional arguments into a tuple. `**kwargs` collects extra keyword arguments into a dict. On the calling side, `*iterable` unpacks an iterable as positional args and `**mapping` unpacks a dict as keyword args. They enable flexible, variadic function signatures.',
    tip: `def log(level, *args, **kwargs):
    print(f'[{level}]', *args, **kwargs)

log('INFO', 'Server', 'started', sep='-', end='\\n')
# [INFO] Server-started

# Unpacking on the call side
def add(a, b, c): return a + b + c
add(*[1, 2, 3])                  # positional unpack
add(**{'a': 1, 'b': 2, 'c': 3}) # keyword unpack`
  },
  {
    category: 'Core Python', difficulty: 'Intermediate',
    question: 'What is a Python decorator and how does it work?',
    answer: 'A decorator is a higher-order function that wraps another function to extend its behaviour without modifying it. `@decorator` is syntactic sugar for `fn = decorator(fn)`. Always use `@functools.wraps(fn)` inside the wrapper to preserve the original function\'s name, docstring, and metadata. Common uses: caching (`@lru_cache`), logging, timing, authentication, retry logic.',
    tip: `import functools

def retry(times=3):
    def decorator(fn):
        @functools.wraps(fn)
        def wrapper(*args, **kwargs):
            for attempt in range(times):
                try:
                    return fn(*args, **kwargs)
                except Exception:
                    if attempt == times - 1: raise
        return wrapper
    return decorator

@retry(times=3)
def call_api(): ...`
  },
  {
    category: 'Core Python', difficulty: 'Intermediate',
    question: 'What are generators and how does `yield` work?',
    answer: 'A generator function uses `yield` to produce values lazily, pausing execution between calls. Calling the function returns a generator object (an iterator) — it does not run the body. Each `next()` resumes until the next `yield`. Benefits: memory-efficient (no full list stored), natural for pipelines, can represent infinite sequences.',
    tip: `def chunked(iterable, size):
    chunk = []
    for item in iterable:
        chunk.append(item)
        if len(chunk) == size:
            yield chunk
            chunk = []
    if chunk:
        yield chunk  # final partial chunk

# Process a huge file in 100-line batches
for batch in chunked(open('big.log'), 100):
    process(batch)`
  },
  {
    category: 'Core Python', difficulty: 'Intermediate',
    question: 'What is a context manager and what does `with` do?',
    answer: 'A context manager guarantees setup and teardown code runs — even if an exception occurs. `with obj as x:` calls `__enter__()` on entry and `__exit__()` on exit. Standard uses: file I/O (auto-close), DB connections (auto-commit/rollback), threading locks (auto-release). Build custom ones with `@contextlib.contextmanager`.',
    tip: `from contextlib import contextmanager
import sqlite3

@contextmanager
def get_db(path):
    conn = sqlite3.connect(path)
    try:
        yield conn
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        conn.close()

with get_db('app.db') as conn:
    conn.execute('INSERT INTO users VALUES (?)', ('Alice',))`
  },
  {
    category: 'Core Python', difficulty: 'Intermediate',
    question: 'What are type hints and why use them?',
    answer: 'Type hints (PEP 484+) annotate variables and function signatures with expected types. Python does NOT enforce them at runtime — use `mypy` or `pyright` for static analysis. Benefits: better IDE autocomplete, catch type errors before runtime, self-documenting code. Python 3.10+ supports `X | Y` union syntax.',
    tip: `from typing import Optional

def get_user(user_id: int) -> Optional[dict]:
    ...

# Python 3.10+ union shorthand
def parse(val: str | int | None) -> float:
    if val is None: return 0.0
    return float(val)

# Typed collections
def process(items: list[str]) -> dict[str, int]:
    return {item: len(item) for item in items}

# TypedDict for structured dicts
from typing import TypedDict
class User(TypedDict):
    name: str
    age: int`
  },
  {
    category: 'Core Python', difficulty: 'Advanced',
    question: 'What is the GIL (Global Interpreter Lock)?',
    answer: 'The GIL is a mutex in CPython that allows only one thread to execute Python bytecode at a time. It simplifies memory management but prevents true CPU-parallelism with threads. I/O-bound tasks (HTTP, file, DB) are not affected — the GIL is released during I/O. For CPU-bound work, use `multiprocessing` or `ProcessPoolExecutor`. Python 3.13+ allows disabling the GIL (free-threaded build, experimental).',
    tip: `# I/O-bound → threads or asyncio work fine (GIL released during I/O)
from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor(max_workers=10) as ex:
    results = list(ex.map(fetch_url, urls))

# CPU-bound → use separate processes (each has own GIL)
from concurrent.futures import ProcessPoolExecutor
def heavy(n): return sum(range(n))
with ProcessPoolExecutor() as ex:
    results = list(ex.map(heavy, [10**7] * 4))`
  },
  {
    category: 'OOP & Design', difficulty: 'Intermediate',
    question: 'What are Python dunder (magic) methods?',
    answer: 'Dunder methods (double-underscore) define how objects integrate with Python\'s syntax and built-ins. Key ones: `__init__` (constructor), `__repr__`/`__str__` (string representation), `__eq__`/`__lt__` (comparisons), `__len__` (`len()`), `__add__` (`+`), `__iter__`/`__next__` (iteration), `__getitem__` (`obj[key]`), `__enter__`/`__exit__` (context manager), `__call__` (call instance as function).',
    tip: `class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):
        return f'Vector({self.x}, {self.y})'
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __len__(self):
        return 2
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    def __iter__(self):
        yield self.x; yield self.y`
  },
  {
    category: 'OOP & Design', difficulty: 'Intermediate',
    question: 'What is the difference between `@classmethod`, `@staticmethod`, and instance methods?',
    answer: 'Instance method: first arg is `self` (the instance) — accesses and modifies instance state. `@classmethod`: first arg is `cls` (the class itself) — used for factory/alternative constructors and class-level state. `@staticmethod`: no implicit first arg — a plain utility function namespaced inside the class, no access to class or instance.',
    tip: `class Date:
    def __init__(self, y, m, d):
        self.y, self.m, self.d = y, m, d

    def display(self):            # instance method
        return f'{self.y}-{self.m:02d}-{self.d:02d}'

    @classmethod
    def from_iso(cls, s):         # factory — alternative constructor
        y, m, d = map(int, s.split('-'))
        return cls(y, m, d)

    @staticmethod
    def is_leap(year):            # utility — no cls/self needed
        return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

Date.from_iso('2026-03-08').display()  # '2026-03-08'
Date.is_leap(2024)                     # True`
  },
  {
    category: 'OOP & Design', difficulty: 'Intermediate',
    question: 'What is a Python dataclass?',
    answer: '`@dataclass` (Python 3.7+) auto-generates `__init__`, `__repr__`, and `__eq__` from annotated fields — eliminating boilerplate for data-holding classes. Options: `frozen=True` makes it immutable and hashable; `order=True` adds `<`, `>` comparison methods; `slots=True` (Python 3.10+) reduces memory per instance. Prefer dataclasses over plain dicts for structured data.',
    tip: `from dataclasses import dataclass, field

@dataclass(frozen=True)   # immutable + hashable
class Point:
    x: float
    y: float
    label: str = 'origin'
    tags: list = field(default_factory=list)

    @property
    def distance(self) -> float:
        return (self.x**2 + self.y**2) ** 0.5

p1 = Point(3.0, 4.0)
p2 = Point(3.0, 4.0)
print(p1 == p2)      # True (value equality)
print(p1.distance)   # 5.0
print(p1)            # Point(x=3.0, y=4.0, label='origin', tags=[])`
  },
  {
    category: 'OOP & Design', difficulty: 'Intermediate',
    question: 'How does Python inheritance and `super()` work?',
    answer: 'Python supports single and multiple inheritance. `super()` calls the next class in the Method Resolution Order (MRO) — not necessarily the direct parent. MRO is determined by the C3 linearisation algorithm. Always call `super().__init__()` when extending a parent to ensure proper initialisation across the chain.',
    tip: `class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self): return '...'

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)   # calls Animal.__init__
        self.breed = breed
    def speak(self): return 'Woof'

class GuideDog(Dog):
    pass

# MRO
GuideDog.__mro__
# (GuideDog, Dog, Animal, object)

d = Dog('Rex', 'Labrador')
print(d.speak())  # 'Woof'`
  },
  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'What is a virtual environment and why use one?',
    answer: 'A virtual environment is an isolated Python installation with its own packages, separate from the system Python and other projects. This prevents version conflicts between projects. `venv` is built into Python 3.3+. Modern tools like `uv` (ultra-fast, Rust-based) and `poetry` handle both environments and dependency resolution.',
    tip: `# Built-in venv
python -m venv .venv
source .venv/bin/activate        # Linux / Mac
.venv\\Scripts\\activate           # Windows

pip install fastapi uvicorn
pip freeze > requirements.txt    # pin versions
pip install -r requirements.txt  # restore

# Modern: uv (recommended for speed)
uv init my-project
uv add fastapi                   # installs + updates pyproject.toml
uv run python main.py`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'What is asyncio in Python and when should you use it?',
    answer: 'asyncio provides cooperative concurrency on a single thread using an event loop. `async def` defines a coroutine. `await` suspends the coroutine and yields control to the event loop until the awaitable completes. Use for I/O-bound work (HTTP, DB queries, file I/O) — handles thousands of concurrent connections with minimal overhead. For CPU-bound work, use `multiprocessing` instead.',
    tip: `import asyncio, aiohttp

async def fetch(session, url):
    async with session.get(url) as r:
        return await r.json()

async def main():
    urls = ['https://api.example.com/1',
            'https://api.example.com/2',
            'https://api.example.com/3']
    async with aiohttp.ClientSession() as session:
        # Fetch all concurrently — not sequentially
        results = await asyncio.gather(
            *[fetch(session, u) for u in urls]
        )
    return results

asyncio.run(main())`
  },
];

/* ═══════════════════════════════════════════════════════════
   C++ — 45 cards across 9 categories
═══════════════════════════════════════════════════════════ */
const CPP_CARDS = [

  /* ── Overview ── */
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'C++ Learning Mindmap — what are the 7 core areas and key learning paths?',
    answer: '7 core areas: 1) Fundamentals — syntax, types, operators, control flow, functions, scope. 2) Core C++ — OOP, memory/pointers, STL, iterators, templates. 3) Modern C++ (C++11–23) — smart pointers, lambdas, auto, move semantics, concepts. 4) Useful Daily Tools — file I/O, exceptions, multithreading, build systems, debugging. 5) Data Structures & Algorithms. 6) Advanced Topics — concurrency, systems programming, performance, HPC/AI. 7) Ecosystem — game dev (Unreal), embedded, finance, cross-platform.',
    tip: `C++
│
├─ 1. Fundamentals
│   ├─ Syntax & Types   int · double · char · bool · string
│   ├─ Operators        + - * / % · == != < > · && || !
│   ├─ Control Flow     if/else · switch · for · while · do-while
│   ├─ Functions        return types · parameters · overloading
│   └─ Scope            local vs global · namespaces
│
├─ 2. Core C++
│   ├─ OOP              class · object · inheritance · polymorphism · encapsulation
│   ├─ Memory           pointers · references · new/delete · RAII
│   ├─ STL              vector · list · map · set · stack · queue
│   ├─ Iterators        begin/end · traversal · algorithms
│   └─ Templates        generic functions · classes
│
├─ 3. Modern C++ (C++11/14/17/20/23)
│   ├─ Smart Pointers   unique_ptr · shared_ptr · weak_ptr
│   ├─ Lambdas          [](){ ... } · captures
│   ├─ auto & decltype  type inference
│   ├─ Range-based for  for (auto x : container)
│   ├─ Move Semantics   rvalue refs · std::move
│   └─ New Features     concepts · coroutines · modules
│
├─ 4. Useful Daily Tools
│   ├─ File I/O         ifstream · ofstream · fstream
│   ├─ Exceptions       try · catch · throw · std::exception
│   ├─ Multithreading   thread · mutex · lock_guard · future · async
│   ├─ Build Systems    GCC · Clang · MSVC · CMake · Make
│   └─ Debugging        gdb · Valgrind · sanitizers
│
├─ 5. Data Structures & Algorithms
│   ├─ Arrays & Strings
│   ├─ Linked List · Stack · Queue
│   ├─ Trees · Graphs
│   ├─ Sorting          quicksort · mergesort · heapsort
│   └─ Searching        binary search · hash tables
│
├─ 6. Advanced Topics
│   ├─ Concurrency      async · thread pools · atomics
│   ├─ Systems Prog.    OS APIs · sockets · embedded
│   ├─ Performance      profiling · cache optimization · RAII
│   └─ HPC & AI         OpenMP · MPI · CUDA · OpenCV
│
└─ 7. Ecosystem & Applications
    ├─ Game Dev         Unreal Engine · OpenGL · DirectX
    ├─ Embedded         Arduino · STM32 · robotics
    ├─ Finance/Trading  low-latency systems
    └─ Cross-platform   Qt · Boost · CMake

LEARNING PATHS
Beginner → Intermediate: Fundamentals → Core C++ → STL → Templates
Intermediate → Advanced:  Modern C++ → Multithreading → Performance → Systems

Game Dev:     Core C++ → STL → Modern C++ → Graphics APIs → Unreal Engine
Embedded/IoT: Fundamentals → Memory → STL → Systems → Microcontrollers
HPC/AI:       Core C++ → Concurrency → Performance → CUDA/OpenMP

INTERVIEW CORE
Stack vs heap · OOP pillars · STL mastery · Smart pointers
Move semantics · Concurrency · RAII · Cache optimization`
  },

  /* ── Fundamentals ── */
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the basic data types in C++ and how does C++ handle strings?',
    answer: 'Fundamental types: `int` (32-bit integer), `long`/`long long` (64-bit), `double` (64-bit float), `float` (32-bit float), `char` (single character), `bool` (true/false). `std::string` is the standard string class (use it instead of C-style `char*`). `sizeof()` returns the byte size of any type. In C++11+, use `auto` for type inference. `unsigned` variants only hold non-negative values.',
    tip: `#include <iostream>
#include <string>
using namespace std;

int    age    = 30;
double price  = 9.99;
float  tax    = 0.08f;   // 'f' suffix for float literal
long long big = 9000000000LL;
char   grade  = 'A';
bool   active = true;
string name   = "Alice";

// auto — type inferred by compiler (C++11)
auto count = 42;           // int
auto ratio = 3.14;         // double
auto msg   = string("Hi"); // string

// sizeof — check type sizes
cout << sizeof(int)    << "\n";  // 4
cout << sizeof(double) << "\n";  // 8
cout << sizeof(bool)   << "\n";  // 1

// Unsigned — non-negative only
unsigned int u = 42;
size_t len = name.size();   // size_t is unsigned, used for sizes`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What operators does C++ support?',
    answer: 'Arithmetic: `+` `-` `*` `/` `%`. Comparison: `==` `!=` `<` `>` `<=` `>=`. Logical: `&&` (AND), `||` (OR), `!` (NOT). Bitwise: `&` `|` `^` `~` `<<` `>>`. Compound assignment: `+=` `-=` `*=` `/=`. Increment/decrement: `++` `--` (prefix vs postfix differ in when the increment happens). Ternary: `condition ? a : b`. C++ also has `->` (member via pointer) and `::` (scope resolution).',
    tip: `int a = 10, b = 3;
cout << a % b;      // 1  (remainder)
cout << a / b;      // 3  (integer division)
cout << (double)a / b; // 3.333...

// Prefix vs postfix increment
int x = 5;
cout << ++x;   // 6  (increment first, then use)
cout << x++;   // 6  (use first, then increment)
cout << x;     // 7

// Bitwise
int flags = 0b1010;
flags |= 0b0001;    // set bit
flags &= ~0b0010;   // clear bit
bool isSet = flags & 0b0001; // test bit

// Ternary
string label = (a > b) ? "bigger" : "smaller";

// Scope resolution :: and member access ->
// MyClass::staticMethod();
// ptr->member;`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do control flow statements work in C++? (if/else, switch, loops)',
    answer: '`if/else if/else` for branching. `switch` for multi-way branching on integer/enum/char — always add `break` or it falls through to the next case. Loops: `for` (classic with index), range-based `for` (C++11, cleanest for containers), `while` (condition first), `do-while` (runs at least once). `break` exits loop, `continue` skips to next iteration.',
    tip: `int score = 85;

// if / else if / else
if      (score >= 90) cout << "A\n";
else if (score >= 80) cout << "B\n";
else                  cout << "C\n";

// switch — add break or falls through!
switch (score / 10) {
    case 10: case 9: cout << "A"; break;
    case 8:          cout << "B"; break;
    default:         cout << "C"; break;
}

// Classic for
for (int i = 0; i < 5; i++) cout << i << " ";

// Range-based for (C++11) — cleanest for containers
vector<string> fruits = {"apple", "banana", "cherry"};
for (const auto& f : fruits) cout << f << "\n";

// while / do-while
int n = 0;
while (n < 3) n++;
do { cout << "runs at least once\n"; } while (false);`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do functions work in C++? (return types, parameters, overloading)',
    answer: 'Functions declare a return type, name, and parameters. `void` means no return. Parameters can be passed by value (copy), by reference (`&` — no copy, can modify), or by const reference (`const&` — no copy, read-only). Function overloading = same name, different parameter signature. Default parameter values must be at the end of the parameter list.',
    tip: `// Pass by value — copy
int square(int x) { return x * x; }

// Pass by reference — no copy, modifies original
void increment(int& x) { x++; }

// Pass by const reference — no copy, read-only (preferred for large objects)
void print(const string& s) { cout << s << "\n"; }

// Default parameters — must be at the end
string greet(const string& name, const string& prefix = "Hello") {
    return prefix + ", " + name + "!";
}
greet("Alice");          // "Hello, Alice!"
greet("Bob", "Hi");      // "Hi, Bob!"

// Overloading — same name, different signature
int    add(int a, int b)       { return a + b; }
double add(double a, double b) { return a + b; }

// Inline — hint to compiler to expand in-place
inline int max2(int a, int b) { return a > b ? a : b; }`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do scope and namespaces work in C++?',
    answer: 'Scope determines where a variable is accessible. Local variables exist only in their `{}` block. Global variables exist for the entire program (avoid when possible). Namespaces group names to prevent collisions — `std::` is the standard library namespace. `using namespace std;` imports all of `std` (convenient but pollutes the global namespace in large projects). Use `::` for scope resolution.',
    tip: `#include <iostream>
#include <string>

// Avoid "using namespace std;" in headers — causes name collisions
// Prefer: use std:: explicitly, or using declarations

using std::cout;   // import only what you need
using std::string;

// Custom namespace
namespace MyApp {
    int version = 1;
    void log(const string& msg) { cout << "[MyApp] " << msg << "\n"; }
}

MyApp::log("Hello");
cout << MyApp::version << "\n";

// Nested namespace (C++17)
namespace MyApp::Utils {
    void helper() { cout << "helper\n"; }
}

// Anonymous namespace — file-local (replaces static in C)
namespace {
    int fileLocalVar = 42;
}

// Variable scope
int global = 10;        // global scope
void fn() {
    int local = 20;     // local scope — dies when fn() returns
    {
        int block = 30; // block scope — dies at }
    }
    // block is inaccessible here
}`
  },

  /* ── Core C++ ── */
  {
    category: 'Core C++', difficulty: 'Beginner',
    question: 'What are the four pillars of OOP in C++ — class, inheritance, polymorphism, encapsulation?',
    answer: '**Encapsulation**: `private`/`public`/`protected` hide internals. **Inheritance**: `: public Base` extends a class; supports multiple inheritance. **Polymorphism**: `virtual` + `override` — correct method called at runtime via vtable. **Abstraction**: pure virtual functions (`= 0`) define interfaces. `struct` defaults to `public`, `class` defaults to `private`.',
    tip: `// Encapsulation
class BankAccount {
private:
    double _balance = 0;
public:
    void deposit(double n) { if (n > 0) _balance += n; }
    double balance() const { return _balance; }
};

// Inheritance + Polymorphism
class Animal {
public:
    virtual string sound() const { return "..."; }
    virtual ~Animal() {}          // ALWAYS virtual destructor in base!
};
class Dog : public Animal {
public:
    string sound() const override { return "Woof"; }
};

// Runtime polymorphism via pointer/reference
Animal* pet = new Dog();
cout << pet->sound();  // "Woof"
delete pet;

// Abstraction — pure virtual = interface
class Shape {
public:
    virtual double area() const = 0;   // must implement
    virtual ~Shape() {}
};
class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
};`
  },
  {
    category: 'Core C++', difficulty: 'Intermediate',
    question: 'How does memory management work in C++? (pointers, references, new/delete, RAII)',
    answer: 'C++ gives full memory control. **Stack**: automatic, fast, limited size — local variables. **Heap**: manual with `new`/`delete` — flexible but must be freed or you leak. A **reference** (`&`) is an alias — no null, no reassignment. A **pointer** (`*`) holds an address — can be null, can be reassigned. **RAII** (Resource Acquisition Is Initialization): tie resource lifetime to object scope so cleanup is automatic.',
    tip: `// Stack — automatic cleanup
int x = 42;         // lives until end of scope

// Heap — manual management
int* p = new int(42);   // allocate
*p = 100;               // dereference
delete p;               // free — MUST do this
p = nullptr;            // avoid dangling pointer

// Array on heap
int* arr = new int[5]{1,2,3,4,5};
delete[] arr;           // note: delete[] for arrays

// References — alias, cannot be null
int a = 10;
int& ref = a;
ref = 20;
cout << a;  // 20

// RAII — resource tied to object lifetime
class FileHandle {
    FILE* f;
public:
    FileHandle(const char* path) { f = fopen(path, "r"); }
    ~FileHandle() { if (f) fclose(f); }  // auto cleanup on exit
};
{
    FileHandle fh("data.txt");
    // use fh...
}  // destructor called here — file closed automatically`
  },
  {
    category: 'Core C++', difficulty: 'Intermediate',
    question: 'What is the STL (Standard Template Library) and its key containers?',
    answer: 'The STL provides generic containers, algorithms, and iterators. Key containers: `vector` (dynamic array, O(1) random access), `list` (doubly linked, O(1) insert/remove), `map` (sorted key-value, O(log n)), `unordered_map` (hash map, O(1) average), `set` (sorted unique values), `stack`, `queue`, `priority_queue`. Use `#include <algorithm>` for `sort`, `find`, `count`, `transform`, etc.',
    tip: `#include <vector>
#include <map>
#include <set>
#include <algorithm>

// vector — dynamic array
vector<int> v = {5, 3, 1, 4, 2};
v.push_back(6);
v.pop_back();
v[0] = 10;
sort(v.begin(), v.end());           // [1,3,4,5,10]

// map — sorted key-value (O(log n))
map<string, int> scores;
scores["Alice"] = 95;
scores["Bob"]   = 87;
if (scores.count("Alice")) cout << scores["Alice"];

// unordered_map — O(1) average
unordered_map<string, int> freq;
freq["hello"]++;

// set — sorted unique values
set<int> s = {3, 1, 4, 1, 5};   // {1, 3, 4, 5}
s.insert(2);
s.count(3);  // 1 if present

// Algorithms
auto it = find(v.begin(), v.end(), 3);
int cnt = count(v.begin(), v.end(), 4);
reverse(v.begin(), v.end());`
  },
  {
    category: 'Core C++', difficulty: 'Intermediate',
    question: 'How do iterators work in C++?',
    answer: 'Iterators are generalized pointers that let algorithms work on any container uniformly. Every container exposes `begin()` (first element) and `end()` (one past last). Iterator types: input, output, forward, bidirectional, random-access. `auto` makes iterator code cleaner. Algorithms like `sort`, `find`, `copy`, `transform` all take iterator pairs. Range-based `for` uses iterators internally.',
    tip: `#include <vector>
#include <list>
#include <algorithm>

vector<int> v = {1, 2, 3, 4, 5};

// Classic iterator loop
for (vector<int>::iterator it = v.begin(); it != v.end(); ++it)
    cout << *it << " ";

// Modern — auto is cleaner
for (auto it = v.begin(); it != v.end(); ++it)
    cout << *it << " ";

// Range-based for — uses iterators internally
for (auto x : v) cout << x << " ";

// Reverse iterators
for (auto it = v.rbegin(); it != v.rend(); ++it)
    cout << *it << " ";   // 5 4 3 2 1

// Algorithms use iterator pairs
sort(v.begin(), v.end());
auto pos = find(v.begin(), v.end(), 3);  // returns iterator
if (pos != v.end()) cout << *pos;

// Transform — apply function to each element
transform(v.begin(), v.end(), v.begin(), [](int x){ return x * 2; });`
  },
  {
    category: 'Core C++', difficulty: 'Intermediate',
    question: 'What are templates in C++ and how do you write generic functions and classes?',
    answer: 'Templates let you write type-safe generic code — the compiler generates a specialization for each type used. `template<typename T>` before a function or class. Template specialization overrides the generic version for a specific type. `auto` return type (C++14) can infer template return types. STL containers are all templates.',
    tip: `// Generic function
template<typename T>
T max_val(T a, T b) { return a > b ? a : b; }

max_val(3, 7);           // int version — returns 7
max_val(3.14, 2.71);     // double version — returns 3.14
max_val(string("abc"), string("xyz")); // "xyz"

// Generic class
template<typename T>
class Stack {
    vector<T> data;
public:
    void push(T val) { data.push_back(val); }
    T    pop()  { T v = data.back(); data.pop_back(); return v; }
    T    top()  const { return data.back(); }
    bool empty() const { return data.empty(); }
};

Stack<int>    si;  si.push(1); si.push(2);
Stack<string> ss;  ss.push("hello");

// Multiple type parameters
template<typename K, typename V>
pair<V, K> swap_pair(pair<K, V> p) { return {p.second, p.first}; }

// Template specialization
template<>
string max_val<string>(string a, string b) {
    return a.length() > b.length() ? a : b;  // by length
}`
  },

  /* ── Modern C++ ── */
  {
    category: 'Modern C++', difficulty: 'Intermediate',
    question: 'What are smart pointers in C++? (unique_ptr, shared_ptr, weak_ptr)',
    answer: 'Smart pointers manage heap memory automatically via RAII — no manual `delete`. `unique_ptr`: sole owner, non-copyable, zero overhead. `shared_ptr`: shared ownership via reference count — deleted when count reaches 0. `weak_ptr`: non-owning reference to a `shared_ptr` — avoids circular reference cycles. Use `make_unique` and `make_shared` (safer, more efficient than `new`).',
    tip: `#include <memory>

// unique_ptr — sole ownership, auto-deleted
auto p = make_unique<int>(42);
cout << *p;       // 42
// delete not needed — p destructor cleans up

// Transfer ownership (cannot copy)
auto p2 = move(p);  // p is now null
cout << (p == nullptr);  // true

// shared_ptr — shared ownership
auto sp1 = make_shared<string>("hello");
auto sp2 = sp1;         // both own it
cout << sp1.use_count(); // 2
sp1.reset();            // sp1 releases — count drops to 1
// string deleted when sp2 also goes out of scope

// weak_ptr — observe without owning (no ref count increment)
weak_ptr<string> wp = sp2;
if (auto locked = wp.lock()) {  // lock() returns shared_ptr or null
    cout << *locked;            // safe to use
}

// Use make_unique/make_shared (not new)
// auto bad  = unique_ptr<int>(new int(5));  // avoid
auto good = make_unique<int>(5);             // prefer`
  },
  {
    category: 'Modern C++', difficulty: 'Intermediate',
    question: 'What are lambdas in C++ and how do captures work?',
    answer: 'A lambda is an anonymous function defined inline. Syntax: `[captures](params) { body }`. Captures bring outer variables into the lambda: `[=]` capture all by value, `[&]` capture all by reference, `[x, &y]` mix. Lambdas are used with STL algorithms, callbacks, and `std::function`. Return type is inferred but can be specified with `-> type`.',
    tip: `#include <algorithm>
#include <functional>

// Basic lambda
auto greet = []() { cout << "Hello!\n"; };
greet();

// With parameters and return type
auto add = [](int a, int b) -> int { return a + b; };
cout << add(3, 4);  // 7

// Capture by value [=]
int factor = 3;
auto triple = [factor](int x) { return x * factor; };
cout << triple(5);  // 15

// Capture by reference [&]
int total = 0;
vector<int> nums = {1, 2, 3, 4, 5};
for_each(nums.begin(), nums.end(), [&total](int x) { total += x; });
cout << total;  // 15

// Sort with lambda
sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });

// std::function — store any callable
function<int(int, int)> op = [](int a, int b) { return a + b; };
cout << op(2, 3);  // 5

// Generic lambda (C++14)
auto print = [](auto x) { cout << x << "\n"; };
print(42); print("hello");`
  },
  {
    category: 'Modern C++', difficulty: 'Intermediate',
    question: 'What are auto, decltype, and range-based for in modern C++?',
    answer: '`auto` deduces the variable type from its initializer at compile time — still strongly typed. Especially useful for complex types (iterators, lambdas). `decltype(expr)` gives the type of an expression without evaluating it — useful in templates. Range-based `for` (C++11) iterates any container cleanly. Always use `const auto&` for read-only iteration to avoid copies.',
    tip: `// auto — type inferred at compile time
auto i     = 42;               // int
auto d     = 3.14;             // double
auto v     = vector<int>{1,2}; // vector<int>

// auto with iterators — avoids verbose type names
auto it = myMap.find("key");   // map<string,int>::iterator

// auto function return (C++14)
auto multiply(int a, int b) { return a * b; }

// decltype — type of an expression
int x = 5;
decltype(x) y = 10;            // y is int
decltype(x + 3.14) z = 1.5;   // z is double

// Template use case
template<typename A, typename B>
auto add(A a, B b) -> decltype(a + b) { return a + b; }

// Range-based for — C++11
vector<int> nums = {1, 2, 3, 4, 5};

for (auto x : nums)        cout << x;  // copy — OK for small types
for (const auto& x : nums) cout << x;  // ref — preferred for objects
for (auto& x : nums)       x *= 2;     // modify in-place`
  },
  {
    category: 'Modern C++', difficulty: 'Advanced',
    question: 'What is move semantics in C++? (rvalue references, std::move)',
    answer: 'Move semantics (C++11) avoid expensive copies by transferring ownership of resources. An **rvalue reference** (`T&&`) binds to temporaries. The **move constructor** and **move assignment** steal the internals of an rvalue — leaving it in a valid but empty state. `std::move` casts an lvalue to an rvalue, enabling the move. This is critical for performance with containers, strings, and smart pointers.',
    tip: `// Without move — expensive copy
vector<int> big(1000000, 1);
vector<int> copy = big;   // copies 1M elements

// With move — O(1) ownership transfer
vector<int> moved = std::move(big);  // big is now empty
cout << big.size();   // 0
cout << moved.size(); // 1000000

// Move constructor
class Buffer {
    int* data;
    size_t size;
public:
    Buffer(size_t n) : data(new int[n]), size(n) {}

    // Move constructor — steal the resource
    Buffer(Buffer&& other) noexcept
        : data(other.data), size(other.size) {
        other.data = nullptr;   // leave source in valid state
        other.size = 0;
    }
    ~Buffer() { delete[] data; }
};

// Return value optimization (RVO) — compiler already avoids copy
vector<int> make_vec() {
    vector<int> v = {1, 2, 3};
    return v;  // compiler moves or elides copy
}

// Rule of Five: if you define any of destructor, copy ctor,
// copy assign, move ctor, move assign — define all five.`
  },
  {
    category: 'Modern C++', difficulty: 'Advanced',
    question: 'What are the notable new features in C++20/23? (concepts, coroutines, modules)',
    answer: '**Concepts** (C++20): constrain template types with readable requirements — clearer error messages. **Ranges** (C++20): `std::ranges::sort`, pipe syntax (`|`), lazy range adaptors. **Coroutines** (C++20): `co_await`, `co_yield`, `co_return` — async/generator patterns. **Modules** (C++20): replace header files for faster compile times. **std::format** (C++20): type-safe formatting like Python f-strings.',
    tip: `// Concepts (C++20) — constrain template types
#include <concepts>

template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<Numeric T>
T add(T a, T b) { return a + b; }

// add("a", "b");  // compile error with clear message

// Ranges (C++20) — composable, lazy
#include <ranges>
vector<int> v = {5, 3, 1, 4, 2};
auto result = v | views::filter([](int x){ return x > 2; })
                | views::transform([](int x){ return x * 2; });
for (auto x : result) cout << x << " ";  // 10 6 8

// std::format (C++20) — like Python f-strings
#include <format>
string msg = format("Hello {}, you are {} years old", "Alice", 30);

// Coroutine generator (simplified)
// generator<int> range(int n) {
//     for (int i = 0; i < n; i++) co_yield i;
// }

// Modules (C++20) — replace #include
// export module mymodule;
// export int add(int a, int b) { return a + b; }`
  },
  {
    category: 'Modern C++', difficulty: 'Intermediate',
    question: 'What other key C++11/14/17 features should every developer know?',
    answer: '**Initializer lists**: `{1,2,3}` syntax everywhere. **nullptr**: replaces `NULL` (type-safe). **constexpr**: evaluated at compile time. **structured bindings** (C++17): `auto [key, val] = pair`. **std::optional** (C++17): nullable return without pointers. **if/switch with init** (C++17): declare variables inside condition. **std::variant** (C++17): type-safe union.',
    tip: `// nullptr — type-safe null (replaces NULL/0)
int* p = nullptr;
if (p == nullptr) cout << "null\n";

// constexpr — compile-time evaluation
constexpr int factorial(int n) { return n <= 1 ? 1 : n * factorial(n-1); }
constexpr int f5 = factorial(5);  // computed at compile time: 120

// Uniform initialization — {} everywhere
vector<int> v = {1, 2, 3};
int arr[] = {4, 5, 6};

// Structured bindings (C++17)
map<string, int> scores = {{"Alice", 95}, {"Bob", 87}};
for (const auto& [name, score] : scores)
    cout << name << ": " << score << "\n";

// std::optional (C++17) — maybe-a-value
#include <optional>
optional<int> divide(int a, int b) {
    if (b == 0) return nullopt;
    return a / b;
}
if (auto result = divide(10, 2)) cout << *result;  // 5

// if with initializer (C++17)
if (auto it = myMap.find("key"); it != myMap.end())
    cout << it->second;`
  },

  /* ── Useful Daily Tools ── */
  {
    category: 'Daily Tools', difficulty: 'Beginner',
    question: 'How do you read and write files in C++? (ifstream, ofstream, fstream)',
    answer: '`ifstream` (input), `ofstream` (output), `fstream` (both). Always check if file opened successfully. `getline()` reads a full line. `>>` reads word-by-word. Always close files (or let RAII do it via destructor). Use `ios::app` to append, `ios::binary` for binary files.',
    tip: `#include <fstream>
#include <string>

// Write
ofstream outFile("output.txt");
if (!outFile.is_open()) { cerr << "Cannot open\n"; return 1; }
outFile << "Hello, World!\n";
outFile << 42 << "\n";
outFile.close();  // RAII closes automatically on destruction too

// Read — line by line
ifstream inFile("data.txt");
string line;
while (getline(inFile, line)) {
    cout << line << "\n";
}

// Read — word by word
ifstream f2("data.txt");
string word;
while (f2 >> word) cout << word << " ";

// fstream — read and write
fstream fs("data.txt", ios::in | ios::out | ios::app);
fs << "appended line\n";

// Binary file
ofstream bin("data.bin", ios::binary);
int n = 42;
bin.write(reinterpret_cast<char*>(&n), sizeof(n));

// Check existence
ifstream check("file.txt");
bool exists = check.good();`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How does exception handling work in C++? (try/catch/throw, std::exception)',
    answer: 'C++ exceptions: `throw` throws any type (prefer `std::exception` subclasses). `try` wraps risky code. `catch(ExceptionType& e)` handles it — catch by reference. Catch `...` catches anything. `noexcept` marks a function that must not throw. Unlike Java/C#, C++ does not require catching exceptions — uncaught exceptions call `std::terminate()`.',
    tip: `#include <stdexcept>
#include <iostream>

// Standard exception hierarchy
// std::exception
//   std::runtime_error, std::logic_error
//   std::out_of_range, std::invalid_argument

try {
    vector<int> v = {1, 2, 3};
    cout << v.at(10);           // throws std::out_of_range
}
catch (const out_of_range& e) {
    cout << "Out of range: " << e.what() << "\n";
}
catch (const exception& e) {   // catch-all for std exceptions
    cout << "Error: " << e.what() << "\n";
}
catch (...) {                   // catch absolutely everything
    cout << "Unknown error\n";
}

// Throw custom exception
class FileNotFoundException : public runtime_error {
public:
    explicit FileNotFoundException(const string& file)
        : runtime_error("File not found: " + file) {}
};

void openFile(const string& path) {
    throw FileNotFoundException(path);
}

// noexcept — promise not to throw (enables optimizations)
int square(int x) noexcept { return x * x; }`
  },
  {
    category: 'Daily Tools', difficulty: 'Advanced',
    question: 'How does multithreading work in C++? (thread, mutex, lock_guard, future, async)',
    answer: '`std::thread` runs a function on a new thread. `std::mutex` protects shared data — always use `lock_guard` or `unique_lock` (RAII) instead of manual lock/unlock. `std::async` runs work asynchronously and returns a `std::future` for the result. `std::atomic<T>` for lock-free atomic operations on simple types.',
    tip: `#include <thread>
#include <mutex>
#include <future>
#include <atomic>

// Basic thread
thread t([]{ cout << "Running on thread\n"; });
t.join();  // wait for completion (or t.detach() to fire-and-forget)

// Mutex — protect shared data
mutex mtx;
int shared = 0;
auto task = [&]() {
    lock_guard<mutex> lock(mtx);  // RAII — unlocks on exit
    shared++;
};
thread t1(task), t2(task);
t1.join(); t2.join();
cout << shared;  // 2

// async + future — run and retrieve result
future<int> f = async(launch::async, [](){
    this_thread::sleep_for(chrono::milliseconds(100));
    return 42;
});
cout << f.get();  // blocks until result ready: 42

// atomic — lock-free for simple types
atomic<int> counter{0};
thread t3([&]{ for (int i=0; i<1000; i++) counter++; });
thread t4([&]{ for (int i=0; i<1000; i++) counter++; });
t3.join(); t4.join();
cout << counter;  // always 2000`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'What build systems does C++ use? (GCC, Clang, MSVC, CMake, Make)',
    answer: '**Compilers**: GCC (`g++`), Clang (`clang++`), MSVC (`cl`). **Make**: simple build tool using `Makefile`. **CMake**: cross-platform build system generator — creates Makefiles, Visual Studio projects, etc. CMake is the industry standard. **Ninja**: fast build system often paired with CMake. Use `-O2`/`-O3` for optimized release builds, `-g` for debug info.',
    tip: `// Compile with GCC/Clang
// g++ -std=c++17 -O2 -Wall -o myapp main.cpp
// clang++ -std=c++20 -O2 -o myapp main.cpp

// Minimal CMakeLists.txt
// cmake_minimum_required(VERSION 3.15)
// project(MyApp)
// set(CMAKE_CXX_STANDARD 17)
// add_executable(myapp main.cpp utils.cpp)
// target_include_directories(myapp PRIVATE include/)
// target_link_libraries(myapp PRIVATE pthread)

// CMake build workflow
// mkdir build && cd build
// cmake ..          # generate build files
// cmake --build .   # compile
// ./myapp           # run

// Useful compiler flags
// -std=c++17    C++ standard
// -O2 / -O3     optimize (release)
// -g            debug symbols
// -Wall -Wextra enable warnings
// -fsanitize=address  AddressSanitizer (memory errors)
// -fsanitize=thread   ThreadSanitizer  (data races)

// Makefile (simple)
// all: main.o utils.o
//     g++ -o myapp main.o utils.o
// main.o: main.cpp
//     g++ -c main.cpp`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you debug C++ code? (gdb, Valgrind, sanitizers)',
    answer: '**gdb**: GNU debugger — set breakpoints, inspect variables, step through code. **Valgrind**: detects memory leaks and invalid memory access. **AddressSanitizer** (`-fsanitize=address`): fast memory error detector built into GCC/Clang. **ThreadSanitizer** (`-fsanitize=thread`): detects data races. **UBSanitizer** (`-fsanitize=undefined`): catches undefined behavior.',
    tip: `// Compile with debug info
// g++ -g -O0 main.cpp -o myapp

// gdb commands
// gdb ./myapp          start debugger
// (gdb) run            run program
// (gdb) break main     set breakpoint at main
// (gdb) break 42       set breakpoint at line 42
// (gdb) next / n       step over
// (gdb) step / s       step into
// (gdb) print x        print variable x
// (gdb) backtrace / bt print call stack
// (gdb) continue / c   continue to next breakpoint
// (gdb) quit           exit

// Valgrind — memory leak detection
// valgrind --leak-check=full ./myapp

// AddressSanitizer — compile-time instrumentation
// g++ -fsanitize=address -g main.cpp -o myapp
// ./myapp  (ASAN reports errors with line numbers)

// Common issues ASAN catches:
// - Use after free (dangling pointer)
// - Buffer overflow / underflow
// - Stack overflow
// - Double free

// Quick print debugging
#define DEBUG(x) cerr << #x " = " << (x) << "\n"
DEBUG(myVariable);  // prints: myVariable = 42`
  },

  /* ── DSA in C++ ── */
  {
    category: 'DSA in C++', difficulty: 'Intermediate',
    question: 'How do arrays and strings work in C++?',
    answer: 'C-style arrays (`int arr[5]`) are fixed-size, stack-allocated. Prefer `std::array<T,N>` (fixed, safe) or `std::vector<T>` (dynamic). `std::string` is the standard string — rich API, owns its memory. `std::string_view` (C++17) is a non-owning read-only view — use for function parameters to avoid copies. `substr()`, `find()`, `replace()`, `+` operator are key string operations.',
    tip: `#include <array>
#include <string>
#include <string_view>

// std::array — fixed size, stack, safe
array<int, 5> arr = {5, 3, 1, 4, 2};
sort(arr.begin(), arr.end());   // [1,2,3,4,5]
arr.size();                     // 5

// vector — dynamic array (preferred for most cases)
vector<int> v = {5, 3, 1};
v.push_back(4);
sort(v.begin(), v.end());

// string operations
string s = "Hello, World!";
s.size();                    // 13
s.substr(7, 5);              // "World"
s.find("World");             // 7
s.replace(7, 5, "C++");      // "Hello, C++!"
s += " Rocks";               // append
string upper = s;
transform(upper.begin(), upper.end(), upper.begin(), ::toupper);

// string_view — non-owning, no copy (C++17)
void print(string_view sv) { cout << sv << "\n"; }
print("hello");    // no allocation
print(s.substr(0, 5));  // still efficient

// Split by delimiter (no built-in, use stringstream)
#include <sstream>
stringstream ss("a,b,c");
string token;
while (getline(ss, token, ',')) cout << token << "\n";`
  },
  {
    category: 'DSA in C++', difficulty: 'Intermediate',
    question: 'How do linked list, stack, and queue work in C++?',
    answer: '`std::list` is a doubly linked list — O(1) insert/remove at any iterator. `std::stack` adapts a container (default `deque`) for LIFO — `push`/`pop`/`top`. `std::queue` for FIFO — `push`/`pop`/`front`. `std::deque` is a double-ended queue with O(1) push/pop at both ends. `std::priority_queue` is a max-heap by default.',
    tip: `#include <list>
#include <stack>
#include <queue>

// std::list — doubly linked
list<int> l = {1, 3, 5};
l.push_front(0);   // [0,1,3,5]
l.push_back(7);    // [0,1,3,5,7]
auto it = l.begin(); advance(it, 2);
l.insert(it, 2);   // insert before pos 2: [0,1,2,3,5,7]
l.remove(5);       // remove all 5s

// std::stack — LIFO (adapts vector or deque)
stack<int> st;
st.push(1); st.push(2); st.push(3);
st.top();    // 3 (no remove)
st.pop();    // removes 3
st.size();   // 2

// std::queue — FIFO
queue<int> q;
q.push(1); q.push(2); q.push(3);
q.front();  // 1
q.pop();    // removes 1

// std::priority_queue — max-heap by default
priority_queue<int> pq;
pq.push(3); pq.push(1); pq.push(4);
pq.top();   // 4 (max)
pq.pop();

// Min-heap
priority_queue<int, vector<int>, greater<int>> minPQ;
minPQ.push(3); minPQ.push(1);
minPQ.top();   // 1 (min)`
  },
  {
    category: 'DSA in C++', difficulty: 'Intermediate',
    question: 'How do trees and graphs work in C++?',
    answer: 'No built-in tree/graph in STL — implement with structs/classes. Binary tree node: struct with `val`, `left`, `right`. Traversals: in-order (L-N-R), pre-order (N-L-R), BFS with `queue`. Graphs: adjacency list with `vector<vector<int>>` or `unordered_map<int, vector<int>>`. BFS uses `queue`, DFS uses recursion or `stack`.',
    tip: `// Binary Tree
struct TreeNode {
    int val;
    TreeNode* left = nullptr;
    TreeNode* right = nullptr;
    TreeNode(int v) : val(v) {}
};

// In-order traversal (recursive)
void inOrder(TreeNode* node) {
    if (!node) return;
    inOrder(node->left);
    cout << node->val << " ";
    inOrder(node->right);
}

// BFS — level-by-level
void bfs(TreeNode* root) {
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        auto node = q.front(); q.pop();
        cout << node->val << " ";
        if (node->left)  q.push(node->left);
        if (node->right) q.push(node->right);
    }
}

// Graph — adjacency list
int n = 5;
vector<vector<int>> adj(n);
adj[0].push_back(1);
adj[0].push_back(2);
adj[1].push_back(3);

// DFS
void dfs(int node, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " ";
    for (int nb : adj[node])
        if (!visited[nb]) dfs(nb, visited);
}`
  },
  {
    category: 'DSA in C++', difficulty: 'Intermediate',
    question: 'How do sorting and searching work in C++?',
    answer: '`std::sort` uses introsort — O(n log n), in-place. Provide a custom comparator lambda. `std::stable_sort` preserves relative order. `std::binary_search` checks membership in a sorted range. `std::lower_bound`/`std::upper_bound` find insertion positions. `std::find` is O(n) linear search. Hash-based lookup is O(1) with `unordered_map`/`unordered_set`.',
    tip: `#include <algorithm>

vector<int> v = {5, 3, 1, 4, 2};

// std::sort — O(n log n), in-place
sort(v.begin(), v.end());             // ascending
sort(v.begin(), v.end(), greater<int>()); // descending

// Custom comparator
vector<pair<string,int>> people = {{"Alice",30},{"Bob",25}};
sort(people.begin(), people.end(),
     [](const auto& a, const auto& b){ return a.second < b.second; });

// Binary search (on sorted range)
sort(v.begin(), v.end());
bool found = binary_search(v.begin(), v.end(), 3);  // true

// lower_bound — first position >= value
auto lb = lower_bound(v.begin(), v.end(), 3);
cout << (lb - v.begin());  // index

// Manual binary search
int binarySearch(vector<int>& a, int target) {
    int lo = 0, hi = (int)a.size() - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if      (a[mid] == target) return mid;
        else if (a[mid] <  target) lo = mid + 1;
        else                       hi = mid - 1;
    }
    return -1;
}`
  },
  {
    category: 'DSA in C++', difficulty: 'Advanced',
    question: 'What are the key DSA interview patterns in C++?',
    answer: '**Two Pointers** (sorted arrays, palindrome). **Sliding Window** (subarray problems). **BFS** (shortest path). **DFS + backtracking** (permutations, subsets). **Dynamic Programming** — memoization with `unordered_map`, tabulation with `vector`. **Heap** for Top-K problems with `priority_queue`. **Union-Find** (connected components). **Monotonic Stack** (next greater element).',
    tip: `// Two Pointers — pair sum in sorted array
vector<int> twoSum(vector<int>& arr, int target) {
    int lo = 0, hi = (int)arr.size() - 1;
    while (lo < hi) {
        int sum = arr[lo] + arr[hi];
        if      (sum == target) return {lo, hi};
        else if (sum < target)  lo++;
        else                    hi--;
    }
    return {};
}

// Sliding Window — max sum subarray length k
int maxSumSubarray(vector<int>& a, int k) {
    int win = 0;
    for (int i = 0; i < k; i++) win += a[i];
    int maxSum = win;
    for (int i = k; i < (int)a.size(); i++) {
        win += a[i] - a[i-k];
        maxSum = max(maxSum, win);
    }
    return maxSum;
}

// Memoization with unordered_map
unordered_map<int,long long> memo;
long long fib(int n) {
    if (n <= 1) return n;
    if (memo.count(n)) return memo[n];
    return memo[n] = fib(n-1) + fib(n-2);
}

// Top-K with min-heap
priority_queue<int,vector<int>,greater<int>> minHeap;
for (int x : nums) {
    minHeap.push(x);
    if ((int)minHeap.size() > k) minHeap.pop();
}`
  },

  /* ── Advanced Topics ── */
  {
    category: 'Advanced C++', difficulty: 'Advanced',
    question: 'How does concurrency work in C++? (async, thread pools, atomics)',
    answer: '`std::async` with `launch::async` runs work on a thread pool (implementation-defined). `std::atomic<T>` for lock-free operations on primitive types. `std::condition_variable` for thread signaling. C++20 adds `std::jthread` (joins automatically on destruction) and `std::latch`/`std::barrier` for synchronization. Avoid shared mutable state — prefer message passing or immutable data.',
    tip: `#include <future>
#include <atomic>
#include <condition_variable>

// async — simple parallel work
auto f1 = async(launch::async, []{ return heavyCompute1(); });
auto f2 = async(launch::async, []{ return heavyCompute2(); });
auto r1 = f1.get();
auto r2 = f2.get();

// atomic — lock-free counter
atomic<int> count{0};
thread t1([&]{ for(int i=0;i<1000;i++) count.fetch_add(1); });
thread t2([&]{ for(int i=0;i<1000;i++) count.fetch_add(1); });
t1.join(); t2.join();
cout << count;  // always 2000

// condition_variable — producer/consumer
mutex mtx;
condition_variable cv;
queue<int> workQueue;

// Producer
{
    lock_guard<mutex> lock(mtx);
    workQueue.push(42);
}
cv.notify_one();

// Consumer
{
    unique_lock<mutex> lock(mtx);
    cv.wait(lock, []{ return !workQueue.empty(); });
    int item = workQueue.front(); workQueue.pop();
}

// std::jthread (C++20) — auto joins on destruction
// jthread t([]{ doWork(); });  // no t.join() needed`
  },
  {
    category: 'Advanced C++', difficulty: 'Advanced',
    question: 'How does C++ enable systems programming? (OS APIs, sockets, embedded)',
    answer: 'C++ can call C POSIX APIs directly — file descriptors, `mmap`, `fork`/`exec`, signals. BSD sockets (`socket`, `bind`, `connect`, `send`, `recv`) for network programming. For cross-platform, use Boost.Asio or ASIO standalone. Embedded: bare-metal C++ with no STL, custom allocators, volatile registers. `extern "C"` links C libraries from C++.',
    tip: `// POSIX socket (TCP client)
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

int sock = socket(AF_INET, SOCK_STREAM, 0);
sockaddr_in addr{};
addr.sin_family = AF_INET;
addr.sin_port   = htons(8080);
inet_pton(AF_INET, "127.0.0.1", &addr.sin_addr);
connect(sock, (sockaddr*)&addr, sizeof(addr));
send(sock, "GET / HTTP/1.0\r\n\r\n", 18, 0);
close(sock);

// Memory-mapped file
#include <sys/mman.h>
#include <fcntl.h>
int fd = open("data.bin", O_RDONLY);
size_t size = 1024 * 1024;
void* mem = mmap(nullptr, size, PROT_READ, MAP_PRIVATE, fd, 0);
// access mem as array...
munmap(mem, size); close(fd);

// Volatile register (embedded)
volatile uint32_t* const GPIO = (uint32_t*)0x40020C00;
*GPIO |= (1 << 5);  // set pin

// extern "C" — link with C libraries
extern "C" {
    int c_function(int x);
}`
  },
  {
    category: 'Advanced C++', difficulty: 'Advanced',
    question: 'How do you optimize C++ performance? (profiling, cache optimization, RAII)',
    answer: 'Profile first — never optimize blind. Use `perf`, `gprof`, `Valgrind --callgrind`, or `Intel VTune`. Cache optimization: access data sequentially (cache lines are 64 bytes), use `std::vector` over `std::list` (cache-friendly). Avoid allocations in hot paths — use memory pools or stack allocation. `inline`, `constexpr`, branch prediction hints, and SIMD for micro-optimizations.',
    tip: `// Profile first
// g++ -pg -O2 main.cpp -o myapp && ./myapp && gprof myapp gmon.out
// perf stat ./myapp
// valgrind --callgrind ./myapp

// Cache-friendly — sequential access
// BAD: linked list — random memory access
// GOOD: vector — contiguous memory

// Avoid false sharing in multithreading — pad to cache line
struct alignas(64) PaddedCounter { atomic<int> val; };

// Pre-reserve vector capacity to avoid reallocations
vector<int> v;
v.reserve(10000);
for (int i = 0; i < 10000; i++) v.push_back(i);

// Stack allocation instead of heap
int arr[100];           // stack — fast
// int* arr = new int[100]; // heap — avoid in hot path

// constexpr — move computation to compile time
constexpr int lookup[] = {0,1,4,9,16,25};

// Move semantics — avoid copies
vector<BigObject> process(vector<BigObject> items) {
    // ... transform items ...
    return items;   // NRVO/move — no copy
}

// __builtin_expect — branch prediction hint (GCC/Clang)
if (__builtin_expect(error_condition, 0))  // rarely true
    handleError();`
  },
  {
    category: 'Advanced C++', difficulty: 'Advanced',
    question: 'How is C++ used in HPC and AI? (OpenMP, MPI, CUDA, OpenCV)',
    answer: '**OpenMP**: shared-memory parallelism with `#pragma omp parallel` — easy CPU multi-threading. **MPI**: message-passing for distributed computing across many machines. **CUDA**: GPU programming — write kernel functions that run on thousands of GPU threads. **OpenCV**: computer vision library. **TensorRT**: NVIDIA\'s deep learning inference engine. C++ dominates HPC and AI inference for its zero-overhead abstractions.',
    tip: `// OpenMP — shared-memory parallelism
#include <omp.h>
// g++ -fopenmp main.cpp -o myapp

#pragma omp parallel for
for (int i = 0; i < N; i++) {
    result[i] = heavyCompute(data[i]);
}

// Reduction
double sum = 0;
#pragma omp parallel for reduction(+:sum)
for (int i = 0; i < N; i++) sum += arr[i];

// CUDA kernel (compiled with nvcc)
// __global__ void vectorAdd(float* A, float* B, float* C, int n) {
//     int i = blockDim.x * blockIdx.x + threadIdx.x;
//     if (i < n) C[i] = A[i] + B[i];
// }
// int blocks = (n + 255) / 256;
// vectorAdd<<<blocks, 256>>>(dA, dB, dC, n);

// OpenCV — computer vision
// #include <opencv2/opencv.hpp>
// cv::Mat img = cv::imread("photo.jpg");
// cv::cvtColor(img, img, cv::COLOR_BGR2GRAY);
// cv::GaussianBlur(img, img, {5,5}, 0);
// cv::imshow("result", img);

// MPI (cluster computing)
// MPI_Init(&argc, &argv);
// MPI_Comm_rank(MPI_COMM_WORLD, &rank);
// MPI_Send(&data, count, MPI_INT, dest, tag, MPI_COMM_WORLD);`
  },

  /* ── Ecosystem ── */
  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'What is the C++ build and toolchain ecosystem? (GCC, Clang, CMake, vcpkg)',
    answer: '**Compilers**: GCC (`g++`), Clang (`clang++`), MSVC (Windows). **CMake**: cross-platform build system generator — the industry standard. **Ninja**: fast parallel build backend for CMake. **vcpkg**: Microsoft\'s C++ package manager. **Conan**: another popular package manager. **pkg-config**: finds installed libraries on Linux. Compile with `-std=c++17` or `-std=c++20` to enable modern features.',
    tip: `// Full CMake project structure
// MyProject/
//   CMakeLists.txt
//   src/main.cpp
//   include/mylib.hpp
//   tests/test_main.cpp

// CMakeLists.txt
// cmake_minimum_required(VERSION 3.20)
// project(MyProject VERSION 1.0 LANGUAGES CXX)
// set(CMAKE_CXX_STANDARD 20)
// set(CMAKE_CXX_STANDARD_REQUIRED ON)
//
// add_executable(myapp src/main.cpp)
// target_include_directories(myapp PRIVATE include)
//
// # Test
// enable_testing()
// add_executable(tests tests/test_main.cpp)
// add_test(NAME unit_tests COMMAND tests)

// Build commands
// cmake -B build -DCMAKE_BUILD_TYPE=Release
// cmake --build build --parallel
// ctest --test-dir build

// vcpkg — package manager
// vcpkg install boost nlohmann-json fmt
// cmake -DCMAKE_TOOLCHAIN_FILE=vcpkg/scripts/buildsystems/vcpkg.cmake ..`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How is C++ used in game development? (Unreal Engine, OpenGL, DirectX)',
    answer: 'Unreal Engine uses C++ for gameplay code alongside Blueprints (visual scripting). **OpenGL**: cross-platform graphics API. **DirectX**: Windows-only Microsoft graphics API. **Vulkan**: modern low-level cross-platform GPU API (highest performance). Key patterns: game loop, entity-component system, event systems. The game engine manages memory, physics, rendering — your C++ code hooks in via classes and interfaces.',
    tip: `// Unreal Engine — gameplay class
// UCLASS()
// class MYGAME_API APlayerCharacter : public ACharacter {
//     GENERATED_BODY()
// public:
//     virtual void BeginPlay() override;
//     virtual void Tick(float DeltaTime) override;
//     virtual void SetupPlayerInputComponent(
//         UInputComponent* Input) override;
//
//     UPROPERTY(EditAnywhere, BlueprintReadWrite)
//     float MoveSpeed = 600.f;
// };

// Game loop pattern (SDL2 + OpenGL)
// bool running = true;
// while (running) {
//     // Process input
//     SDL_Event e;
//     while (SDL_PollEvent(&e))
//         if (e.type == SDL_QUIT) running = false;
//
//     // Update game state
//     player.update(deltaTime);
//     physics.simulate(deltaTime);
//
//     // Render
//     glClear(GL_COLOR_BUFFER_BIT);
//     renderer.draw(scene);
//     SDL_GL_SwapWindow(window);
// }

// Key C++ game dev libraries
// SDL2    — windowing, input, audio
// SFML    — 2D graphics
// OpenGL  — 3D graphics
// Bullet  — physics`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How is C++ used in embedded systems? (Arduino, STM32, robotics)',
    answer: 'Embedded C++ avoids dynamic memory (`new`/`delete`) and STL containers that use the heap. Use `std::array` (fixed size on stack), avoid exceptions (no runtime support). `volatile` for hardware registers. Interrupts via ISR (Interrupt Service Routines). **Arduino** is the simplest entry point. **STM32** with HAL (Hardware Abstraction Layer) for production embedded. **ROS2** uses C++ for robotics.',
    tip: `// Arduino — simplest embedded C++
// void setup() {
//     pinMode(LED_BUILTIN, OUTPUT);
//     Serial.begin(9600);
// }
// void loop() {
//     digitalWrite(LED_BUILTIN, HIGH);
//     delay(1000);
//     digitalWrite(LED_BUILTIN, LOW);
//     delay(1000);
// }

// Bare-metal C++ — access hardware registers directly
volatile uint32_t* const RCC_AHB1ENR = (uint32_t*)0x40023830;
volatile uint32_t* const GPIOA_MODER = (uint32_t*)0x40020000;
volatile uint32_t* const GPIOA_ODR   = (uint32_t*)0x40020014;

*RCC_AHB1ENR |= (1 << 0);    // Enable GPIOA clock
*GPIOA_MODER |= (1 << 10);   // PA5 = output
*GPIOA_ODR   |= (1 << 5);    // PA5 HIGH

// Embedded best practices:
// - No dynamic allocation (heap fragmentation)
// - Use constexpr instead of #define for constants
// - Keep ISRs short — set flags, handle in main loop
// - Use RAII for peripheral initialization
// - Fixed-size types: uint8_t, uint16_t, uint32_t`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'What cross-platform C++ libraries should every developer know? (Qt, Boost)',
    answer: '**Qt**: full cross-platform framework — GUI (widgets + QML), networking, threading, databases, signals/slots. Industry standard for desktop apps. **Boost**: collection of high-quality libraries that often become C++ standard features (e.g., `boost::optional` → `std::optional`). **POCO**: networking and app framework. **{fmt}**: fast string formatting. **spdlog**: fast logging. **Catch2**/**Google Test**: unit testing.',
    tip: `// Qt — signal/slot (event system)
// class Button : public QObject {
//     Q_OBJECT
// public slots:
//     void onClick() { qDebug() << "Clicked!"; }
// signals:
//     void pressed();
// };
// connect(btn, &Button::pressed, btn, &Button::onClick);

// Qt Quick File dialog
// FileDialog {
//     id: fileDialog
//     title: "Open File"
//     onAccepted: processFile(fileDialog.fileUrl)
// }

// {fmt} — fast formatting (C++20 std::format is based on it)
// #include <fmt/core.h>
// fmt::print("Hello, {}! You are {} years old.\n", "Alice", 30);

// spdlog — fast logging
// #include <spdlog/spdlog.h>
// spdlog::info("Server started on port {}", 8080);
// spdlog::warn("Low memory: {} MB left", freeMem);

// Google Test
// #include <gtest/gtest.h>
// TEST(MyTest, AddWorks) {
//     EXPECT_EQ(add(2, 3), 5);
//     ASSERT_TRUE(add(0, 0) == 0);
// }
// int main(int argc, char** argv) {
//     testing::InitGoogleTest(&argc, argv);
//     return RUN_ALL_TESTS();
// }`
  },

  /* ── Interview ── */
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C++ Interview — Stack vs heap allocation.',
    answer: '**Stack**: automatic, fast, limited (~1-8 MB), LIFO — local variables, function frames. **Heap**: manual (`new`/`delete`) or smart pointers, large size, flexible — but slower allocation and fragmentation risk. Smart pointers (`unique_ptr`, `shared_ptr`) automate heap cleanup. Use stack by default; heap only when you need: dynamic size, lifetime beyond scope, or large objects.',
    tip: `// Stack allocation — fast, automatic
void fn() {
    int x = 42;           // stack
    array<int, 100> arr;  // 400 bytes on stack
}  // x and arr destroyed here automatically

// Heap allocation — manual
int* p = new int(42);
// ... use p ...
delete p;  // MUST free

// Better — smart pointer (RAII)
{
    auto p = make_unique<int>(42);
    cout << *p;
}  // automatically freed

// Stack overflow risk
void bad() {
    int huge[10000000];  // stack overflow!
}

// When to heap:
// - Size unknown at compile time: vector, string
// - Lifetime beyond current scope
// - Objects > few KB (stack is limited)
// - Polymorphism (need pointer/reference to base)

// Interview: What is a dangling pointer?
int* dp;
{
    int local = 5;
    dp = &local;
}  // local destroyed — dp is now dangling (UB to dereference)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C++ Interview — What are the four pillars of OOP in C++?',
    answer: '**Encapsulation**: `private`/`public`/`protected` — hide internals. **Abstraction**: pure virtual functions (`= 0`) define an interface. **Inheritance**: `: public Base` — reuse and extend. Multiple inheritance is allowed. **Polymorphism**: `virtual`/`override` + pointer/reference — vtable dispatch at runtime. Always declare a virtual destructor in base classes.',
    tip: `// Encapsulation
class Account {
    double _bal = 0;
public:
    void deposit(double n) { if (n>0) _bal += n; }
    double balance() const { return _bal; }
};

// Abstraction (pure virtual = interface)
class IShape {
public:
    virtual double area() const = 0;
    virtual ~IShape() {}
};

// Inheritance + Polymorphism
class Animal {
public:
    virtual string sound() const { return "..."; }
    virtual ~Animal() {}  // CRITICAL: virtual destructor
};
class Dog : public Animal {
public:
    string sound() const override { return "Woof"; }
};

Animal* a = new Dog();
cout << a->sound();  // "Woof" — virtual dispatch
delete a;            // calls Dog::~Dog then Animal::~Animal

// Common interview pitfall:
// Forgetting virtual destructor causes memory leak
// when deleting through base pointer`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C++ Interview — Explain STL mastery: vector, map, set, and algorithms.',
    answer: '`vector`: dynamic array, O(1) access, O(n) insert middle. `map`: red-black tree, O(log n) ops, sorted. `unordered_map`: hash map, O(1) average. `set`/`unordered_set`: unique values. `sort`, `find`, `lower_bound`, `transform`, `count_if` are essential algorithms. Know when to use which container based on access patterns.',
    tip: `// vector — cache-friendly, random access O(1)
vector<int> v = {3,1,4,1,5};
sort(v.begin(), v.end());   // [1,1,3,4,5]
v.erase(unique(v.begin(), v.end()), v.end()); // deduplicate

// map vs unordered_map
map<string,int>           m;   // sorted, O(log n), ordered iteration
unordered_map<string,int> um;  // O(1) avg, no order guarantee

// Frequency count
unordered_map<char,int> freq;
for (char c : "hello") freq[c]++;

// set operations
set<int> s1 = {1,2,3,4};
set<int> s2 = {3,4,5,6};
vector<int> intersection;
set_intersection(s1.begin(),s1.end(),s2.begin(),s2.end(),
                 back_inserter(intersection));  // {3,4}

// Algorithms
auto it = find_if(v.begin(), v.end(), [](int x){ return x > 3; });
int cnt = count_if(v.begin(), v.end(), [](int x){ return x%2==0; });
transform(v.begin(), v.end(), v.begin(), [](int x){ return x*2; });

// Interview: vector push_back amortized O(1)
// capacity doubles when exceeded — total insertions O(n)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C++ Interview — Explain smart pointers and move semantics.',
    answer: '`unique_ptr`: sole owner, zero overhead, non-copyable. `shared_ptr`: shared ownership, reference-counted. `weak_ptr`: breaks cycles. Move semantics (C++11): transfers resources instead of copying — `std::move` casts to rvalue. Rule of Five: if you define any of destructor/copy ctor/copy assign/move ctor/move assign — define all five.',
    tip: `// unique_ptr — sole ownership
auto p = make_unique<string>("hello");
cout << *p;
auto p2 = move(p);   // p is null, p2 owns it

// shared_ptr — reference counted
auto sp1 = make_shared<int>(42);
auto sp2 = sp1;           // count = 2
sp1.reset();              // count = 1
cout << sp2.use_count();  // 1

// weak_ptr — no ownership, prevents cycles
weak_ptr<int> wp = sp2;
if (auto locked = wp.lock())   // nullptr if object freed
    cout << *locked;

// Move semantics
vector<int> big(1000000);
auto moved = std::move(big);   // O(1) — transfers pointer
cout << big.size();    // 0

// Rule of Five
class Buffer {
    int* data;
public:
    Buffer(int n) : data(new int[n]) {}
    ~Buffer()                          { delete[] data; }
    Buffer(const Buffer& o)            { /* deep copy */ }
    Buffer& operator=(const Buffer& o) { /* deep copy */ return *this; }
    Buffer(Buffer&& o) noexcept        { data = o.data; o.data = nullptr; }
    Buffer& operator=(Buffer&& o) noexcept { /* move assign */ return *this; }
};

// Interview: when to use each?
// unique_ptr — default for owned heap objects
// shared_ptr — shared ownership, caches, shared resources
// weak_ptr   — break circular references (parent-child trees)`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'C++ Interview — Explain concurrency: threads, mutex, and memory model.',
    answer: 'Use `std::thread` for parallelism. Protect shared data with `std::mutex` + `lock_guard` (RAII). A **data race** (two threads access same memory, at least one writes, no synchronization) is undefined behavior. `std::atomic<T>` for lock-free simple ops. The C++ memory model defines ordering guarantees — `memory_order_seq_cst` is the default (safest). Use `async`/`future` for task-based concurrency.',
    tip: `// Data race — undefined behavior!
int counter = 0;
thread t1([&]{ for(int i=0;i<1000;i++) counter++; });  // RACE!
thread t2([&]{ for(int i=0;i<1000;i++) counter++; });
t1.join(); t2.join();
// counter may be < 2000

// Fix 1: mutex + lock_guard
mutex mtx;
int safe = 0;
auto task = [&]() {
    for (int i=0; i<1000; i++) {
        lock_guard<mutex> lock(mtx);
        safe++;
    }
};

// Fix 2: atomic — lock-free
atomic<int> atomicCounter{0};
auto atomicTask = [&]() {
    for (int i=0; i<1000; i++) atomicCounter++;
};

// RAII locking — unique_lock for more control
unique_lock<mutex> lock(mtx);
lock.unlock();    // can unlock early
lock.lock();      // re-lock

// Deadlock prevention — always lock in same order
// Use std::lock() to lock multiple mutexes safely
lock(mtx1, mtx2);
lock_guard<mutex> lg1(mtx1, adopt_lock);
lock_guard<mutex> lg2(mtx2, adopt_lock);`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'C++ Interview — Explain RAII and performance optimization.',
    answer: '**RAII** (Resource Acquisition Is Initialization): acquire resources in constructor, release in destructor. Guarantees cleanup even on exceptions. Smart pointers, `lock_guard`, `fstream` all use RAII. Performance: avoid copies (use `const&`, move semantics), use cache-friendly data structures (`vector` over `list`), pre-allocate with `reserve()`, minimize heap allocations in hot paths.',
    tip: `// RAII — resource tied to object lifetime
class DatabaseConnection {
    Connection* conn;
public:
    DatabaseConnection(const string& url) {
        conn = db_connect(url);   // acquire
    }
    ~DatabaseConnection() {
        db_disconnect(conn);       // release — guaranteed
    }
    // Non-copyable (or implement deep copy)
    DatabaseConnection(const DatabaseConnection&) = delete;
    DatabaseConnection& operator=(const DatabaseConnection&) = delete;
};

{
    DatabaseConnection db("localhost/mydb");
    db.query("SELECT ...");
}  // disconnected here — even if exception thrown

// Performance patterns
vector<int> v;
v.reserve(10000);          // avoid reallocations
for (int i=0;i<10000;i++) v.push_back(i);

// Pass large objects by const ref — no copy
void process(const vector<BigObj>& data) { /* ... */ }

// Return by value — compiler applies NRVO
vector<int> makeData() {
    vector<int> v(1000);
    // ... fill v ...
    return v;   // moved, not copied
}

// Avoid unnecessary allocations
string result;
result.reserve(100);   // pre-allocate
result += "hello";
result += " world";`
  },
];


/* ═══════════════════════════════════════════════════════════
   C# — 46 cards across 9 categories
═══════════════════════════════════════════════════════════ */
const CSHARP_CARDS = [

  /* ── Overview ── */
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'C# Learning Mindmap — what are the 7 core areas and key learning paths?',
    answer: '7 core areas: 1) Fundamentals — syntax, types, operators, control flow, methods. 2) Core C# — OOP, properties, interfaces, structs/enums, collections, exceptions. 3) Modern C# — LINQ, async/await, pattern matching, records, nullable types. 4) Useful Daily Tools — file I/O, generics, delegates, events, attributes, testing. 5) Data Structures & Algorithms. 6) Advanced Topics — concurrency, memory, reflection, unsafe code, performance. 7) Ecosystem — .NET runtime, ASP.NET Core, Unity, Azure.',
    tip: `C#
│
├─ 1. Fundamentals
│   ├─ Syntax & Types   int · double · string · bool · var · dynamic
│   ├─ Operators        + - * / % · == != < > · && || !
│   ├─ Control Flow     if/else · switch · for · foreach · while · do-while
│   ├─ Methods          return types · parameters · overloading · default params
│   └─ Namespaces       using · namespace · assemblies
│
├─ 2. Core C#
│   ├─ OOP              class · object · inheritance · polymorphism · encapsulation
│   ├─ Properties       get/set · auto-properties · init-only
│   ├─ Interfaces       interface · implementation · multiple inheritance
│   ├─ Structs & Enums  value types · enum constants
│   ├─ Collections      List<T> · Dictionary<K,V> · Queue · Stack
│   └─ Exception        try · catch · finally · throw
│
├─ 3. Modern C# (C# 7-12)
│   ├─ LINQ             from...select · where · group · join
│   ├─ Async/Await      Task<T> · async methods · await keyword
│   ├─ Pattern Matching switch expressions · type patterns
│   ├─ Records          immutable data classes
│   ├─ Nullable Types   int? · null-coalescing (??) · ?. operator
│   └─ New Features     tuples · local functions · ranges
│
├─ 4. Useful Daily Tools
│   ├─ File I/O         StreamReader · StreamWriter · File.ReadAllText()
│   ├─ Generics         List<T> · generic methods · constraints
│   ├─ Delegates        Func<> · Action<> · Predicate<>
│   ├─ Events           event keyword · publisher/subscriber
│   ├─ Attributes       [Serializable] · [Obsolete] · custom attributes
│   └─ Unit Testing     NUnit · xUnit · MSTest
│
├─ 5. Data Structures & Algorithms
│   ├─ Arrays & Strings
│   ├─ Linked List · Stack · Queue
│   ├─ Trees · Graphs
│   ├─ Sorting          quicksort · mergesort · Array.Sort()
│   └─ Searching        binary search · LINQ queries
│
├─ 6. Advanced Topics
│   ├─ Concurrency      Parallel.For · PLINQ · async streams
│   ├─ Memory           garbage collection · IDisposable · using blocks
│   ├─ Reflection       System.Reflection · dynamic type loading
│   ├─ Unsafe Code      pointers · stackalloc · fixed
│   └─ Performance      Span<T> · ValueTask · benchmarking
│
└─ 7. Ecosystem & Applications
    ├─ .NET Runtime     CLR · JIT · assemblies · NuGet packages
    ├─ Web Dev          ASP.NET Core · MVC · Razor Pages · Blazor
    ├─ Desktop          WPF · WinForms · MAUI
    ├─ Mobile           Xamarin · .NET MAUI
    ├─ Cloud            Azure SDK · microservices · gRPC
    └─ Game Dev         Unity Engine (C# scripting)

LEARNING PATHS
Backend Dev:    Fundamentals → Core C# → LINQ → Async/Await → ASP.NET Core → Azure
Desktop/Mobile: Fundamentals → OOP → Collections → WPF/WinForms → Xamarin/MAUI
Game Dev:       Fundamentals → Core C# → Events/Delegates → Unity → Performance

INTERVIEW CORE
OOP pillars · LINQ · Async/Await · Delegates & Events · Memory management · Ecosystem`
  },

  /* ── Fundamentals ── */
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the basic data types in C#, and what is the difference between `var` and `dynamic`?',
    answer: 'Core types: `int` (32-bit integer), `long` (64-bit), `double` (64-bit float), `decimal` (high-precision money), `bool` (true/false), `char` (single character), `string` (immutable text). `var` — compiler infers the type at compile time, still strongly typed. `dynamic` — type checking deferred to runtime, bypasses type safety. Value types (`int`, `struct`) copy on assignment; reference types (`class`, `string`) copy the reference.',
    tip: `int    age    = 30;
double price  = 9.99;
decimal tax   = 0.08m;   // 'm' suffix required
bool   active = true;
char   grade  = 'A';
string name   = "Alice";

// var — inferred at compile time, still strongly typed
var count = 42;            // int
var items = new List<string>();

// dynamic — resolved at runtime (no IntelliSense, no type safety)
dynamic obj = "hello";
obj = 42;                  // valid at compile time
Console.WriteLine(obj.GetType());  // System.Int32

// Value type — copy on assign
int a = 5, b = a;
b = 10;
Console.WriteLine(a); // 5 (unchanged)

// Reference type — both point to same object
var list1 = new List<int> { 1, 2 };
var list2 = list1;
list2.Add(3);
Console.WriteLine(list1.Count); // 3`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What operators does C# support?',
    answer: 'Arithmetic: `+` `-` `*` `/` `%`. Comparison: `==` `!=` `<` `>` `<=` `>=`. Logical: `&&` (AND), `||` (OR), `!` (NOT). Compound assignment: `+=` `-=` `*=` `/=`. Ternary: `condition ? a : b`. Null-handling: `??` (null-coalescing), `?.` (null-conditional), `??=` (null-coalescing assignment). Integer division truncates — cast to double for decimal result.',
    tip: `int a = 10, b = 3;
Console.WriteLine(a % b);        // 1 (remainder)
Console.WriteLine(a / b);        // 3 (integer division)
Console.WriteLine((double)a / b); // 3.333...

// Compound assignment
a += 5;    // a = a + 5
a *= 2;    // a = a * 2

// Ternary
string label = a > b ? "bigger" : "smaller";

// Logical short-circuit
bool safe = (b != 0) && (a / b > 2);  // checks b != 0 first

// Null-handling operators
string? s = null;
string display = s ?? "Guest";   // "Guest" when s is null
int?   len     = s?.Length;      // null (no NullReferenceException)
s ??= "Default";                 // assign only if null`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do control flow statements work in C#? (if/else, switch, loops)',
    answer: 'Branching: `if/else if/else`. Switch expressions (C# 8+) return a value and use `_` as default. Loops: `for` (index-based), `foreach` (any IEnumerable — cleanest for collections), `while` (condition first), `do-while` (runs at least once). `break` exits a loop, `continue` skips to next iteration.',
    tip: `int score = 85;

// Classic if/else
if      (score >= 90) Console.WriteLine("A");
else if (score >= 80) Console.WriteLine("B");
else                  Console.WriteLine("C");

// Switch expression (C# 8+) — returns a value
string grade = score switch {
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    _     => "F"    // _ = default
};

// for — index-based
for (int i = 0; i < 5; i++) Console.WriteLine(i);

// foreach — cleanest for collections
var fruits = new List<string> { "apple", "banana" };
foreach (var fruit in fruits) Console.WriteLine(fruit);

// while / do-while
int n = 0;
while (n < 3) n++;
do { Console.WriteLine("runs at least once"); } while (false);`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do methods work in C#? (return types, parameters, overloading, default params)',
    answer: 'Methods have an access modifier, return type, name, and parameters. `void` = no return value. Default parameters make arguments optional. `params` accepts variable-length argument lists. `ref`/`out` pass by reference. Overloading = same name, different signature. Expression body (`=>`) is concise for single-expression methods.',
    tip: `// Expression body
public int Add(int a, int b) => a + b;

// Default parameters
public string Greet(string name, string prefix = "Hello")
    => prefix + ", " + name + "!";

Greet("Alice");          // "Hello, Alice!"
Greet("Bob", "Hi");      // "Hi, Bob!"

// params — variable argument count
public int Sum(params int[] nums) => nums.Sum();
Sum(1, 2, 3, 4, 5);     // 15

// out — return multiple values
public bool TryParseAge(string s, out int age)
    => int.TryParse(s, out age);

if (TryParseAge("30", out int a)) Console.WriteLine(a); // 30

// Overloading — same name, different signature
public double Add(double a, double b) => a + b;`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do namespaces and assemblies work in C#?',
    answer: 'A namespace groups related types to avoid naming conflicts. `using` imports a namespace. An assembly (.dll/.exe) is the compiled unit of deployment. NuGet distributes assemblies as packages. C# 10+ adds `global using` (project-wide) and file-scoped namespaces (no extra nesting).',
    tip: `// Traditional namespace
namespace MyApp.Services
{
    public class UserService { }
}

// File-scoped namespace (C# 10+) — no extra braces
namespace MyApp.Models;
public class Product { }

// Importing
using System.Collections.Generic;
using MyApp.Services;

// Global using (C# 10+) — put in GlobalUsings.cs
global using System.Text.Json;

// NuGet
// dotnet add package Newtonsoft.Json

// .csproj — project file
// <TargetFramework>net9.0</TargetFramework>
// <PackageReference Include="Serilog" Version="4.0.0" />

// dotnet CLI
// dotnet build  →  dotnet run  →  dotnet test  →  dotnet publish`
  },

  /* ── Core C# ── */
  {
    category: 'Core C#', difficulty: 'Beginner',
    question: 'What are the four pillars of OOP and how does C# implement them?',
    answer: '**Encapsulation**: access modifiers (`private`, `public`, `protected`, `internal`) hide internal state. **Abstraction**: `interface` or `abstract class` defines a contract without revealing implementation. **Inheritance**: `: BaseClass` — single inheritance; `sealed` prevents further subclassing. **Polymorphism**: `virtual`/`override` — correct method called at runtime based on actual object type.',
    tip: `// Encapsulation
public class BankAccount {
    private decimal _balance;
    public decimal Balance => _balance;
    public void Deposit(decimal n) { if (n > 0) _balance += n; }
}

// Inheritance
public class Animal { public virtual  string Sound() => "..."; }
public class Dog   : Animal { public override string Sound() => "Woof"; }
public class Cat   : Animal { public override string Sound() => "Meow"; }

// Polymorphism — runtime dispatch
Animal pet = new Dog();
Console.WriteLine(pet.Sound()); // "Woof"

// Abstraction
public abstract class Shape {
    public abstract double Area();
    public void Print() => Console.WriteLine(Area());
}
public class Circle : Shape {
    public double Radius { get; init; }
    public override double Area() => Math.PI * Radius * Radius;
}

// sealed — no further subclassing
public sealed class Config { }`
  },
  {
    category: 'Core C#', difficulty: 'Beginner',
    question: 'How do properties work in C#? (get/set, auto-properties, init-only)',
    answer: 'A property wraps a backing field with `get`/`set` accessors — enabling validation and change notification. Auto-properties generate the backing field automatically. `private set` restricts modification to the class. `init` (C# 9+) allows setting only during construction. Computed properties have `get` only and no backing field.',
    tip: `public class Person {
    // Auto-property
    public string Name { get; set; } = "";

    // Init-only — set in constructor or object initializer only
    public string Id { get; init; } = "";

    // Private setter — only this class can change it
    public int Age { get; private set; }

    // Computed — no backing field
    public bool IsAdult => Age >= 18;

    // Full property with validation
    private decimal _salary;
    public decimal Salary {
        get => _salary;
        set => _salary = value >= 0 ? value
            : throw new ArgumentOutOfRangeException(nameof(value));
    }
}

// Object initializer
var p = new Person { Name = "Alice", Id = "A01" };
// p.Id = "X";  // ERROR — init-only after construction`
  },
  {
    category: 'Core C#', difficulty: 'Intermediate',
    question: 'What are interfaces in C# and how do they enable multiple inheritance?',
    answer: 'An interface defines a contract — method/property signatures with no instance state. A class can implement multiple interfaces (unlike single class inheritance). C# 8+ allows default implementations. Use interfaces for capabilities (`IDisposable`, `ILogger`, `IEnumerable`). Difference from abstract class: interfaces have no constructors or instance fields.',
    tip: `public interface ILogger {
    void Log(string message);
    // Default implementation (C# 8+)
    void LogError(string m) => Log("[ERROR] " + m);
}

public interface ISaveable { void Save(); }

// Multiple interfaces — solves single-inheritance limit
public class FileLogger : ILogger, ISaveable {
    public void Log(string msg)  => Console.WriteLine(msg);
    public void Save()           => File.WriteAllText("log.txt", "saved");
}

// Interface as type — polymorphism
ILogger logger = new FileLogger();
logger.Log("Started");

// Common .NET interfaces
// IEnumerable<T>  — foreach support
// IDisposable     — using statement support
// IComparable<T>  — sorting support
// INotifyPropertyChanged — WPF/MAUI data binding`
  },
  {
    category: 'Core C#', difficulty: 'Beginner',
    question: 'What are structs and enums in C#?',
    answer: 'A `struct` is a value type — stack-allocated, copied on assignment. Best for small immutable data. An `enum` defines named integer constants (more readable than magic numbers). Enum values default to `int` starting at 0. `[Flags]` enables bitwise combination. `Enum.TryParse` converts strings to enum values safely.',
    tip: `// Struct — value type
public struct Point {
    public int X { get; init; }
    public int Y { get; init; }
    public double Distance => Math.Sqrt(X*X + Y*Y);
}
var p1 = new Point { X = 3, Y = 4 };
var p2 = p1;   // full copy — independent

// Enum — named constants
public enum Status { Pending, Active, Inactive, Deleted }
Status s = Status.Active;
Console.WriteLine((int)s);  // 1

// Flags — combine values with |
[Flags]
public enum Permission { None=0, Read=1, Write=2, Execute=4 }
var access = Permission.Read | Permission.Write;  // 3
access.HasFlag(Permission.Read);                  // true

// Parse from string
if (Enum.TryParse<Status>("Active", out var parsed))
    Console.WriteLine(parsed);`
  },
  {
    category: 'Core C#', difficulty: 'Beginner',
    question: 'What collection types does C# offer? (List, Dictionary, Queue, Stack)',
    answer: '`List<T>`: dynamic array, O(1) access. `Dictionary<K,V>`: O(1) key lookup. `Queue<T>`: FIFO — `Enqueue`/`Dequeue`. `Stack<T>`: LIFO — `Push`/`Pop`. `HashSet<T>`: unique values, O(1) lookup. `LinkedList<T>`: O(1) insert/remove at any known node. Prefer interface types (`IEnumerable<T>`, `IList<T>`) in method parameters for flexibility.',
    tip: `// List<T> — dynamic array
var list = new List<string> { "a", "b", "c" };
list.Add("d");  list.Remove("a");
list.Contains("b");  // true
list.Sort();
list.Find(x => x == "b"); // "b"

// Dictionary<K,V>
var scores = new Dictionary<string, int> { ["Alice"] = 95 };
scores["Bob"] = 87;
scores.TryGetValue("Alice", out int s); // safe get

// Queue<T> — FIFO
var queue = new Queue<int>();
queue.Enqueue(1); queue.Enqueue(2);
queue.Dequeue();  // 1 (remove)
queue.Peek();     // 2 (no remove)

// Stack<T> — LIFO
var stack = new Stack<int>();
stack.Push(1); stack.Push(2); stack.Push(3);
stack.Pop();   // 3
stack.Peek();  // 2

// HashSet<T> — unique values
var set = new HashSet<string> { "a", "b", "a" };  // {"a","b"}`
  },
  {
    category: 'Core C#', difficulty: 'Beginner',
    question: 'How does exception handling work in C#? (try/catch/finally/throw)',
    answer: '`try` wraps risky code. `catch(Type ex)` handles specific exceptions — most specific first. `finally` always runs (cleanup). `throw` re-throws preserving the stack trace. `when` adds a filter condition. `using` auto-disposes `IDisposable` resources even if an exception occurs.',
    tip: `try {
    var text = File.ReadAllText(path);
    var data = JsonSerializer.Deserialize<Config>(text);
}
catch (FileNotFoundException ex) {
    Console.WriteLine("Missing: " + ex.FileName);
}
catch (JsonException ex) when (ex.Message.Contains("token")) {
    throw new InvalidOperationException("Bad config JSON", ex);
}
finally {
    Console.WriteLine("Always runs — cleanup here");
}

// using — guaranteed Dispose even on exception
using var reader = new StreamReader("file.txt");
string content = reader.ReadToEnd();

// Custom exception
public class NotFoundException : Exception {
    public NotFoundException(string id)
        : base("Item not found: " + id) { }
}

throw new NotFoundException("USER-42");`
  },

  /* ── Modern C# ── */
  {
    category: 'Modern C#', difficulty: 'Intermediate',
    question: 'What is LINQ and how do you use it? (from/select, where, group, join)',
    answer: 'LINQ (Language Integrated Query) gives a unified syntax to query any `IEnumerable<T>`, database (EF Core), or XML. Queries are lazy — they execute only when iterated. Method syntax (lambda chains) is preferred. Query syntax is SQL-like. Core methods: `Where`, `Select`, `OrderBy`, `GroupBy`, `Join`, `FirstOrDefault`, `Any`/`All`, `Count`/`Sum`/`Max`.',
    tip: `var people = new List<Person> { /* ... */ };

// Method syntax (preferred)
var adults = people
    .Where(p => p.Age >= 18)
    .OrderBy(p => p.Name)
    .Select(p => new { p.Name, p.Age })
    .ToList();

// Query syntax — SQL-like
var result = from p in people
             where p.Age >= 18
             orderby p.Name
             select new { p.Name, p.Age };

// GroupBy
var byDept = people
    .GroupBy(p => p.Department)
    .Select(g => new { Dept = g.Key, Count = g.Count() });

// Join
var joined = from e in employees
             join d in departments on e.DeptId equals d.Id
             select new { e.Name, d.DeptName };

// Aggregates
people.Any(p => p.Age > 65);     // bool
people.Max(p => p.Salary);       // decimal
people.Count(p => p.IsActive);   // int`
  },
  {
    category: 'Modern C#', difficulty: 'Intermediate',
    question: 'How does async/await work in C#? (Task<T>, async methods, await keyword)',
    answer: '`async` marks a method asynchronous — returns `Task` or `Task<T>`. `await` suspends execution and releases the thread back to the pool until the task completes. Avoid `.Result`/`.Wait()` — they block and can deadlock. Use `Task.WhenAll` for parallel tasks, `CancellationToken` for cancellation.',
    tip: `public async Task<string> GetDataAsync(string url)
{
    using var client = new HttpClient();
    var response = await client.GetAsync(url);      // thread freed here
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}

// Parallel — run both at same time
var t1 = GetDataAsync(url1);
var t2 = GetDataAsync(url2);
var results = await Task.WhenAll(t1, t2);

// Cancellation
public async Task LongTaskAsync(CancellationToken ct) {
    for (int i = 0; i < 100; i++) {
        ct.ThrowIfCancellationRequested();
        await Task.Delay(100, ct);
    }
}

// Async stream (C# 8+)
public async IAsyncEnumerable<int> GetItemsAsync() {
    for (int i = 0; i < 10; i++) {
        await Task.Delay(50);
        yield return i;
    }
}
await foreach (var item in GetItemsAsync())
    Console.WriteLine(item);

// PITFALLS
// .Result / .Wait()  — blocks thread, can deadlock
// async void         — exceptions crash the process`
  },
  {
    category: 'Modern C#', difficulty: 'Intermediate',
    question: 'What is pattern matching in C# and how do switch expressions work?',
    answer: 'Pattern matching (C# 7+) tests a value\'s type/shape and extracts data in one step. `switch` expressions (C# 8+) return a value, are exhaustive, and use `_` as default. Supports type patterns, property patterns, relational patterns, and `when` guards.',
    tip: `// Type pattern
object obj = "hello";
if (obj is string s && s.Length > 3)
    Console.WriteLine(s.ToUpper());

// switch expression — returns a value
string Classify(object o) => o switch {
    int i when i < 0  => "negative",
    int i             => "positive: " + i,
    string s          => "string len " + s.Length,
    null              => "null",
    _                 => "other"
};

// Property pattern
string msg = order switch {
    { Status: "paid", Total: > 100 } => "VIP order",
    { Status: "paid"               } => "Paid order",
    { Status: "pending"            } => "Awaiting payment",
    _                                => "Unknown"
};

// Relational + logical patterns (C# 9+)
string Grade(int score) => score switch {
    >= 90           => "A",
    >= 80 and < 90  => "B",
    >= 70 and < 80  => "C",
    _               => "F"
};`
  },
  {
    category: 'Modern C#', difficulty: 'Intermediate',
    question: 'What are records in C# and when should you use them?',
    answer: 'Records (C# 9+) auto-generate value-based equality (`==` compares all properties), `ToString()`, and `GetHashCode()`. `with` expressions create modified copies non-destructively. `record struct` (C# 10+) is a value-type record. Use records for DTOs, API models, value objects — anywhere immutability and equality by value matter.',
    tip: `// Positional record — concise
public record Point(double X, double Y);

var p1 = new Point(1, 2);
var p2 = p1 with { Y = 5 };    // non-destructive copy

Console.WriteLine(p1 == new Point(1, 2));  // true — value equality!
Console.WriteLine(p2);                     // Point { X = 1, Y = 5 }

// Record with extra members
public record Person(string Name, int Age) {
    public bool IsAdult => Age >= 18;
}

// record struct (C# 10+) — value type
public record struct Color(byte R, byte G, byte B);

// Common use cases
public record CreateUserRequest(string Email, string Password);
public record UserDto(int Id, string Name, string Email);

// Deconstruction
var (name, age) = new Person("Alice", 30);
Console.WriteLine(name); // Alice`
  },
  {
    category: 'Modern C#', difficulty: 'Intermediate',
    question: 'How do nullable types and null-handling operators work in C#?',
    answer: '`T?` makes value types nullable (`int?`, `bool?`). Null operators: `??` (null-coalescing — return right if left is null), `?.` (null-conditional — short-circuit to null), `??=` (assign if null). In C# 8+ with nullable reference types enabled, the compiler warns about potential null dereferences.',
    tip: `// Nullable value type
int? age = null;
age.HasValue      // false
age ?? 0          // 0 (fallback)
age?.ToString()   // null (no exception)

// Null-coalescing chain
int? x = null, y = 5;
int result = x ?? y ?? 0;   // 5

// Null-coalescing assignment
string? name = null;
name ??= "Default";          // now "Default"

// Null-conditional — safe chaining
var upper = name?.ToUpper()?.Trim();
var len   = name?.Length;    // int?

// Nullable reference types (C# 8+)
// Enable in .csproj: <Nullable>enable</Nullable>
string? maybeNull = GetName();
string  safe      = maybeNull ?? throw new InvalidOperationException();

// Null-forgiving operator — suppress warning
string forced = maybeNull!;

// Pattern null check
if (maybeNull is { } value)   // matches only non-null
    Console.WriteLine(value.Length);`
  },
  {
    category: 'Modern C#', difficulty: 'Intermediate',
    question: 'What are the notable new features in modern C#? (tuples, local functions, ranges, default interface methods)',
    answer: '**Tuples** (C# 7+): lightweight multi-value return. **Local functions** (C# 7+): methods inside methods. **Ranges & Indices** (C# 8+): `^1` = last element, `1..4` = slice. **Default interface methods** (C# 8+): add methods without breaking implementations. **Top-level statements** (C# 9+): no class/Main boilerplate. **Global using** / **File-scoped namespaces** (C# 10+).',
    tip: `// Tuples — named elements
(string Name, int Age) GetUser() => ("Alice", 30);
var (name, age) = GetUser();   // deconstruct
Console.WriteLine(name);       // Alice

// Local function — defined inside a method
int Fibonacci(int n) {
    return Calc(n);
    int Calc(int x) => x <= 1 ? x : Calc(x-1) + Calc(x-2);
}

// Ranges & Indices (C# 8+)
var arr = new[] { 0, 1, 2, 3, 4, 5 };
var last  = arr[^1];    // 5
var slice = arr[1..4];  // [1,2,3]
var tail  = arr[3..];   // [3,4,5]

// Default interface methods (C# 8+)
public interface IShape {
    double Area();
    string Describe() => "Area: " + Area().ToString("F2");
}

// Top-level statements (C# 9+)
// Console.WriteLine("Hello!"); // no class/Main needed`
  },

  /* ── Useful Daily Tools ── */
  {
    category: 'Useful Daily Tools', difficulty: 'Beginner',
    question: 'How do you read and write files in C#? (StreamReader, StreamWriter, File class)',
    answer: '`File` class: one-liners for small files (`ReadAllText`, `WriteAllText`, `ReadAllLines`, `AppendAllText`). For large files use `StreamReader`/`StreamWriter` to process line by line. Always wrap in `using`. Use async variants in async contexts.',
    tip: `// File class — one-liners
string content = File.ReadAllText("data.txt");
string[] lines = File.ReadAllLines("data.txt");
File.WriteAllText("out.txt", "Hello!");
File.AppendAllText("log.txt", "entry\n");
bool exists = File.Exists("data.txt");

// StreamReader — large files, line by line
using var reader = new StreamReader("large.csv");
while (!reader.EndOfStream) {
    string? line = reader.ReadLine();
    Console.WriteLine(line);
}

// StreamWriter
using var writer = new StreamWriter("output.txt", append: true);
writer.WriteLine("Line 1");

// Async (preferred in async methods)
string text = await File.ReadAllTextAsync("data.txt");
await File.WriteAllTextAsync("out.txt", "async write");

// Path utilities
string path = Path.Combine("data", "2024", "log.txt");
string name = Path.GetFileNameWithoutExtension(path);`
  },
  {
    category: 'Useful Daily Tools', difficulty: 'Intermediate',
    question: 'What are generics in C# and how do you write generic methods with constraints?',
    answer: 'Generics write type-safe reusable code parameterized by a type — no casting, no boxing overhead. Generic methods infer type from arguments. Constraints (`where T : class`, `where T : IComparable<T>`, `where T : new()`) restrict valid types and unlock type-specific operations.',
    tip: `// Generic class
public class Repository<T> where T : class {
    private readonly List<T> _items = new();
    public void Add(T item) => _items.Add(item);
    public T?   Find(Func<T, bool> pred) => _items.FirstOrDefault(pred);
}

// Generic method — type inferred from arguments
public T Max<T>(T a, T b) where T : IComparable<T>
    => a.CompareTo(b) >= 0 ? a : b;

Max(3, 7);               // 7
Max("apple", "banana");  // "banana"

// Multiple constraints
public void Process<T>(T item)
    where T : class, IDisposable, new()
{
    using var obj = new T();  // T must have parameterless ctor
}

var userRepo = new Repository<User>();
userRepo.Add(new User { Name = "Alice" });
var alice = userRepo.Find(u => u.Name == "Alice");`
  },
  {
    category: 'Useful Daily Tools', difficulty: 'Intermediate',
    question: 'What are delegates in C#? What are Func<>, Action<>, and Predicate<>?',
    answer: 'A delegate is a type-safe function pointer holding one or more methods with a matching signature. `Func<T, TResult>` — has return value. `Action<T>` — void return. `Predicate<T>` — returns bool. Lambdas (`=>`) create delegate instances. Delegates power LINQ, callbacks, and the strategy pattern.',
    tip: `// Func — has return value (last type = return)
Func<int, int, int>  add    = (a, b) => a + b;
Func<string, bool>   isLong = s => s.Length > 5;
add(3, 4);       // 7

// Action — void return
Action<string> log   = Console.WriteLine;
Action         greet = () => Console.WriteLine("Hello!");

// Predicate — returns bool (used by List.Find)
Predicate<int>  isEven = n => n % 2 == 0;
var list = new List<int> { 1, 2, 3, 4, 5 };
int  first = list.Find(isEven);           // 2
List<int> evens = list.FindAll(isEven);   // [2,4]

// Higher-order function
public List<T> Filter<T>(List<T> items, Func<T, bool> pred)
    => items.Where(pred).ToList();

var adults = Filter(people, p => p.Age >= 18);

// Multicast — chain multiple methods
Action notify = SendEmail;
notify += SendSMS;
notify();   // both called`
  },
  {
    category: 'Useful Daily Tools', difficulty: 'Intermediate',
    question: 'How do events work in C# — publisher/subscriber pattern?',
    answer: 'An `event` wraps a multicast delegate with restricted access — only the declaring class can invoke it; external code can only `+=`/`-=`. `EventHandler<TEventArgs>` is the standard type. Always invoke with `?.Invoke(...)` for null safety. Events implement the Observer pattern.',
    tip: `// Publisher
public class OrderService {
    public event EventHandler<string>? OrderPlaced;

    public void PlaceOrder(string orderId) {
        // business logic...
        OrderPlaced?.Invoke(this, orderId);  // null-safe raise
    }
}

// Subscribers
var svc = new OrderService();

svc.OrderPlaced += (sender, id) =>
    Console.WriteLine("Email for: " + id);

svc.OrderPlaced += OnOrderPlaced;
svc.OrderPlaced -= OnOrderPlaced;   // unsubscribe

svc.PlaceOrder("ORD-001");

void OnOrderPlaced(object? sender, string id)
    => Console.WriteLine("SMS for: " + id);

// Custom EventArgs
public class OrderEventArgs : EventArgs {
    public string OrderId { get; init; } = "";
    public decimal Total  { get; init; }
}

public event EventHandler<OrderEventArgs>? OrderPlaced;`
  },
  {
    category: 'Useful Daily Tools', difficulty: 'Intermediate',
    question: 'What are attributes in C# and how do you create custom ones?',
    answer: 'Attributes add declarative metadata to types/methods/properties — readable at runtime via reflection. Built-in: `[Obsolete]`, `[Serializable]`, ASP.NET `[Required]`/`[HttpGet]`/`[Authorize]`. Custom attributes inherit from `Attribute`. `AttributeTargets` restricts where they apply.',
    tip: `// Built-in
[Obsolete("Use NewMethod() instead.")]
public void OldMethod() { }

// Custom attribute
[AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
public class AuthorAttribute : Attribute {
    public string Name { get; }
    public int    Year { get; }
    public AuthorAttribute(string name, int year) {
        Name = name; Year = year;
    }
}

[Author("Alice", 2024)]
public class UserService { }

// Read at runtime
var attr = typeof(UserService).GetCustomAttribute<AuthorAttribute>();
Console.WriteLine(attr?.Name);  // Alice

// Common framework attributes
// ASP.NET Core: [ApiController] [Route] [HttpGet] [Authorize] [FromBody]
// EF Core:      [Key] [Required] [MaxLength(100)] [NotMapped]
// xUnit:        [Fact] [Theory] [InlineData]`
  },
  {
    category: 'Useful Daily Tools', difficulty: 'Intermediate',
    question: 'How do you unit test C# code? (NUnit, xUnit, MSTest)',
    answer: 'Three main frameworks: **xUnit** (modern default), **NUnit** (rich assertions), **MSTest** (Microsoft built-in). All follow Arrange-Act-Assert (AAA). Use `Moq` or `NSubstitute` for mocking. Run with `dotnet test`. Design classes with constructor injection so dependencies can be mocked.',
    tip: `// xUnit
using Xunit;

public class CalculatorTests {
    [Fact]
    public void Add_Returns_Sum() {
        var calc = new Calculator();        // Arrange
        int result = calc.Add(2, 3);        // Act
        Assert.Equal(5, result);            // Assert
    }

    // Data-driven test
    [Theory]
    [InlineData(2, 3, 5)]
    [InlineData(-1, 1, 0)]
    public void Add_Various(int a, int b, int expected)
        => Assert.Equal(expected, new Calculator().Add(a, b));
}

// Mocking with Moq
var mockRepo = new Mock<IUserRepository>();
mockRepo.Setup(r => r.GetById(1))
        .ReturnsAsync(new User { Id = 1, Name = "Alice" });

var service = new UserService(mockRepo.Object);
var user    = await service.GetUserAsync(1);
Assert.Equal("Alice", user.Name);

// dotnet test --filter "Category=Unit"`
  },

  /* ── DSA in C# ── */
  {
    category: 'DSA in C#', difficulty: 'Intermediate',
    question: 'How do arrays and strings work in C# — key operations and patterns?',
    answer: 'Arrays are fixed-size, zero-indexed. `Array.Sort()`, `Array.Reverse()`, `Array.IndexOf()`. Strings are immutable — each operation creates a new string. Use `StringBuilder` for heavy concatenation (O(n) vs O(n²)). `Span<T>` / `ReadOnlySpan<char>` enable zero-copy slicing with no heap allocation.',
    tip: `// Array
int[] arr = { 5, 3, 1, 4, 2 };
Array.Sort(arr);                     // [1,2,3,4,5] in-place
Array.Reverse(arr);                  // [5,4,3,2,1]
int idx = Array.IndexOf(arr, 3);

// 2D array
int[,] matrix = new int[3, 3];
matrix[0, 0] = 1;

// String — immutable
string s = "Hello, World!";
s.Split(", ")               // ["Hello","World!"]
s.Contains("World")         // true
s.Replace("World", "C#")    // "Hello, C#!"
s.Substring(7, 5)           // "World"
string.Join("-", new[]{"a","b","c"}) // "a-b-c"

// StringBuilder — O(n) concat
var sb = new StringBuilder();
for (int i = 0; i < 1000; i++) sb.Append(i);
string result = sb.ToString();

// Span<char> — zero-copy slice, no allocation
ReadOnlySpan<char> span = s.AsSpan(7, 5);  // "World"`
  },
  {
    category: 'DSA in C#', difficulty: 'Intermediate',
    question: 'How do LinkedList, Stack, and Queue work in C#?',
    answer: '`LinkedList<T>`: doubly linked, O(1) insert/remove at known node, O(n) search. `Stack<T>`: LIFO — `Push`/`Pop`/`Peek`. `Queue<T>`: FIFO — `Enqueue`/`Dequeue`/`Peek`. `PriorityQueue<T,P>` (C# 10+): dequeues by priority (lowest number first).',
    tip: `// LinkedList<T>
var ll = new LinkedList<int>();
ll.AddFirst(1); ll.AddLast(2); ll.AddLast(3);  // [1,2,3]
ll.Remove(2);                                   // [1,3]

// Stack<T> — LIFO
var stack = new Stack<int>();
stack.Push(1); stack.Push(2); stack.Push(3);
stack.Pop();   // 3
stack.Peek();  // 2 (no remove)

// Queue<T> — FIFO
var queue = new Queue<int>();
queue.Enqueue(1); queue.Enqueue(2); queue.Enqueue(3);
queue.Dequeue(); // 1
queue.Peek();    // 2

// PriorityQueue — C# 10+
var pq = new PriorityQueue<string, int>();
pq.Enqueue("low",  3);
pq.Enqueue("high", 1);
pq.Enqueue("mid",  2);
pq.Dequeue();  // "high" (priority 1 = highest)`
  },
  {
    category: 'DSA in C#', difficulty: 'Intermediate',
    question: 'How do trees and graphs work in C#?',
    answer: 'Trees and graphs are not built into .NET — implement with classes. Binary tree node: `Value`, `Left`, `Right`. Traversals: in-order (L-N-R), pre-order (N-L-R), BFS (Queue-based). Graphs: adjacency list with `Dictionary<T, List<T>>`. BFS for shortest path, DFS with Stack or recursion.',
    tip: `// Binary Tree
public class TreeNode<T> {
    public T Value;
    public TreeNode<T>? Left, Right;
    public TreeNode(T val) { Value = val; }
}

// In-order traversal
void InOrder(TreeNode<int>? n) {
    if (n == null) return;
    InOrder(n.Left);
    Console.Write(n.Value + " ");
    InOrder(n.Right);
}

// BFS — level-by-level
void BFS(TreeNode<int> root) {
    var q = new Queue<TreeNode<int>>();
    q.Enqueue(root);
    while (q.Count > 0) {
        var node = q.Dequeue();
        Console.Write(node.Value + " ");
        if (node.Left  != null) q.Enqueue(node.Left);
        if (node.Right != null) q.Enqueue(node.Right);
    }
}

// Graph — adjacency list
var graph = new Dictionary<int, List<int>> {
    [1] = new() { 2, 3 },
    [2] = new() { 4 },
    [3] = new() { 4, 5 },
};

// DFS with Stack
void DFS(int start) {
    var visited = new HashSet<int>();
    var stack   = new Stack<int>();
    stack.Push(start);
    while (stack.Count > 0) {
        int n = stack.Pop();
        if (visited.Add(n)) graph[n].ForEach(stack.Push);
    }
}`
  },
  {
    category: 'DSA in C#', difficulty: 'Intermediate',
    question: 'How do sorting and searching work in C#? (Array.Sort, binary search, LINQ)',
    answer: '`Array.Sort()` uses introsort — O(n log n). Provide a `Comparison<T>` delegate for custom order. LINQ `.OrderBy()` returns a new sorted sequence (non-mutating, lazy). `Array.BinarySearch()` is O(log n) on a sorted array. For interviews, implement quicksort/binary search yourself; use built-ins in production.',
    tip: `// Built-in sort — in-place
int[] arr = { 5, 3, 1, 4, 2 };
Array.Sort(arr);                             // [1,2,3,4,5]
Array.Sort(arr, (a, b) => b.CompareTo(a));  // [5,4,3,2,1] desc

// Sort objects
people.Sort((a, b) => a.Name.CompareTo(b.Name));
var sorted = people.OrderBy(p => p.Age).ThenBy(p => p.Name); // LINQ

// Binary search — O(log n), array must be sorted
Array.Sort(arr);
int idx = Array.BinarySearch(arr, 3); // index of 3

// Manual binary search
int BinarySearch(int[] a, int target) {
    int lo = 0, hi = a.Length - 1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if      (a[mid] == target) return mid;
        else if (a[mid] <  target) lo = mid + 1;
        else                       hi = mid - 1;
    }
    return -1;
}

// Quicksort skeleton
void QuickSort(int[] a, int lo, int hi) {
    if (lo >= hi) return;
    int p = Partition(a, lo, hi);
    QuickSort(a, lo, p - 1);
    QuickSort(a, p + 1, hi);
}`
  },
  {
    category: 'DSA in C#', difficulty: 'Advanced',
    question: 'What are the key DSA interview patterns in C#?',
    answer: 'Core patterns: **Two Pointers** (sorted arrays). **Sliding Window** (subarrays). **Binary Search on answer**. **BFS for shortest path**. **DFS + backtracking** (permutations). **Dynamic Programming** — memoization with `Dictionary`, tabulation with arrays. **PriorityQueue** for Top-K problems.',
    tip: `// Two Pointers — pair sum in sorted array
int[] TwoSum(int[] arr, int target) {
    int lo = 0, hi = arr.Length - 1;
    while (lo < hi) {
        int sum = arr[lo] + arr[hi];
        if      (sum == target) return new[] { lo, hi };
        else if (sum <  target) lo++;
        else                    hi--;
    }
    return Array.Empty<int>();
}

// Sliding Window — max subarray sum of length k
int MaxSumSubarray(int[] arr, int k) {
    int win = arr.Take(k).Sum(), max = win;
    for (int i = k; i < arr.Length; i++) {
        win += arr[i] - arr[i - k];
        max  = Math.Max(max, win);
    }
    return max;
}

// Memoization with Dictionary
var memo = new Dictionary<int, long>();
long Fib(int n) {
    if (n <= 1) return n;
    if (memo.TryGetValue(n, out long v)) return v;
    return memo[n] = Fib(n-1) + Fib(n-2);
}

// Top-K with min-heap
var pq = new PriorityQueue<int, int>();
foreach (var num in nums) {
    pq.Enqueue(num, num);
    if (pq.Count > k) pq.Dequeue();
}`
  },

  /* ── Advanced Topics ── */
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'How does concurrency work in C#? (Parallel.For, PLINQ, async streams)',
    answer: '`async`/`await` for I/O-bound (threads not blocked). `Parallel.For`/`ForEach` for CPU-bound work. PLINQ adds `.AsParallel()`. Async streams (`IAsyncEnumerable<T>`) stream data over time. `SemaphoreSlim` throttles concurrency. Thread-safe collections: `ConcurrentDictionary`, `ConcurrentQueue`.',
    tip: `// Parallel.For — CPU-bound on thread pool
Parallel.For(0, 1000, i => ProcessItem(i));
Parallel.ForEach(items,
    new ParallelOptions { MaxDegreeOfParallelism = 4 },
    item => Process(item));

// PLINQ
var results = largeList
    .AsParallel()
    .WithDegreeOfParallelism(4)
    .Where(x => x.IsExpensive)
    .ToList();

// Async stream
public async IAsyncEnumerable<int> StreamAsync() {
    for (int i = 0; i < 10; i++) {
        await Task.Delay(100);
        yield return i;
    }
}
await foreach (var n in StreamAsync())
    Console.WriteLine(n);

// SemaphoreSlim — limit concurrent operations
var sem = new SemaphoreSlim(5);
await sem.WaitAsync();
try   { await DoRequestAsync(); }
finally { sem.Release(); }

// Thread-safe collections
var dict = new ConcurrentDictionary<string, int>();
dict.TryAdd("key", 1);
dict.AddOrUpdate("key", 1, (k, v) => v + 1);`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'How does memory management work in C#? (garbage collection, IDisposable, using blocks)',
    answer: 'The .NET GC uses a generational model: Gen 0 (short-lived, fast), Gen 1, Gen 2 (long-lived, rare). For unmanaged resources implement `IDisposable` and use `using`. Avoid finalizers — they delay collection. Reduce GC pressure with `ArrayPool`, `Span<T>`, `ValueTask`.',
    tip: `// Generational GC
// new object → Gen 0 (collected often, fast)
// survives   → Gen 1 → Gen 2 (collected rarely)
// Objects > 85KB → LOH (Large Object Heap, rarely compacted)

// IDisposable — correct pattern
public class Connection : IDisposable {
    private SqlConnection _conn;
    private bool _disposed;

    public Connection(string cs) => _conn = new SqlConnection(cs);

    public void Dispose() {
        if (_disposed) return;
        _conn.Dispose();
        _disposed = true;
        GC.SuppressFinalize(this);
    }
}

// using — guaranteed cleanup
using var conn = new Connection(connectionString);

// Reduce GC pressure
byte[] buf = ArrayPool<byte>.Shared.Rent(4096);
try   { Process(buf); }
finally { ArrayPool<byte>.Shared.Return(buf); }

// WeakReference — cached, GC can collect
var weak = new WeakReference<BigObject>(new BigObject());
if (weak.TryGetTarget(out var obj)) obj.Process();`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'What is reflection in C# and how do you use System.Reflection?',
    answer: 'Reflection inspects and invokes types, methods, and properties at runtime. `Type` is the entry point. Used by DI containers, serializers, ORMs, and test frameworks. Reflection is powerful but slow — cache `MethodInfo`/`PropertyInfo` in hot paths, or use source generators (C# 10+) for compile-time alternatives.',
    tip: `// Get Type
Type t = typeof(Person);
Type t2 = person.GetType();

// List properties
foreach (var p in t.GetProperties())
    Console.WriteLine(p.Name + ": " + p.PropertyType.Name);

// Create instance + invoke method
var obj    = Activator.CreateInstance(t);
var method = t.GetMethod("Greet");
method?.Invoke(obj, new object[] { "World" });

// Set property dynamically
t.GetProperty("Name")?.SetValue(obj, "Alice");

// Read custom attribute
var attr = t.GetCustomAttribute<AuthorAttribute>();
Console.WriteLine(attr?.Name);

// Load assembly dynamically
var asm    = Assembly.LoadFrom("Plugin.dll");
var type   = asm.GetType("Plugin.Core")!;
var plugin = Activator.CreateInstance(type);

// Cache reflection for performance
private static readonly MethodInfo _process =
    typeof(MyService).GetMethod("Process")!;`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'What is unsafe code in C# — pointers, stackalloc, and fixed?',
    answer: 'Unsafe code bypasses GC and type safety, allowing C-style pointer manipulation. Requires `unsafe` keyword and `<AllowUnsafeBlocks>true</AllowUnsafeBlocks>` in the project. `stackalloc` allocates on the stack (no GC). `fixed` pins a managed object so GC cannot move it. `Span<T>` is the modern safe alternative — prefer it.',
    tip: `// Enable: <AllowUnsafeBlocks>true</AllowUnsafeBlocks>

unsafe {
    int x   = 42;
    int* ptr = &x;           // pointer to x
    Console.WriteLine(*ptr); // dereference: 42
    *ptr = 100;
    Console.WriteLine(x);    // 100
}

// stackalloc — stack allocation, no GC
unsafe {
    int* buf = stackalloc int[10];
    for (int i = 0; i < 10; i++) buf[i] = i * i;
}

// Span<T> — SAFE alternative (no unsafe keyword needed)
Span<int> span = stackalloc int[10];
span.Fill(0);
span[5] = 99;

// fixed — pin managed array
byte[] managed = new byte[1024];
unsafe {
    fixed (byte* p = managed) {
        p[0] = 0xFF;  // p stable during this block
    }
}

// When to use: P/Invoke, high-perf parsing, interop
// Prefer: Span<T>, Memory<T>, MemoryMarshal for most cases`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'How do you optimize C# performance? (Span<T>, ValueTask, ArrayPool, benchmarking)',
    answer: '`Span<T>` and `Memory<T>` enable zero-copy slicing — no heap allocation. `ValueTask<T>` avoids allocation for async methods that often complete synchronously. `ArrayPool<T>` rents reusable buffers. `BenchmarkDotNet` with `[MemoryDiagnoser]` measures allocations and throughput. Rule: profile first.',
    tip: `// Span<T> — zero-copy, no allocation
string s = "Hello, World!";
ReadOnlySpan<char> span = s.AsSpan(7, 5);  // "World" — no new string

// ArrayPool — reuse buffers
byte[] buf = ArrayPool<byte>.Shared.Rent(4096);
try {
    // use buf
} finally {
    ArrayPool<byte>.Shared.Return(buf, clearArray: true);
}

// ValueTask — sync path has no allocation
public ValueTask<int> GetCachedAsync(string key) {
    if (_cache.TryGetValue(key, out int val))
        return ValueTask.FromResult(val);        // no heap alloc
    return new ValueTask<int>(FetchAsync(key));  // async path
}

// BenchmarkDotNet
[MemoryDiagnoser]
public class Bench {
    [Benchmark(Baseline = true)]
    public string StringConcat() => "a" + "b" + "c";

    [Benchmark]
    public string UseSpan() {
        Span<char> buf = stackalloc char[3];
        buf[0]='a'; buf[1]='b'; buf[2]='c';
        return new string(buf);
    }
}

// Other tips:
// sealed classes — JIT can devirtualize calls
// Prefer struct for small value objects
// Avoid LINQ in tight loops — use for loops`
  },

  /* ── Ecosystem ── */
  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'How does the .NET runtime work? (CLR, JIT, assemblies, NuGet)',
    answer: 'C# compiles to **IL** (Intermediate Language). The **CLR** runs IL using **JIT** — compiled to native on first call, then cached. An assembly (.dll/.exe) is the unit of deployment. **NuGet** is the package manager. `dotnet` CLI manages everything.',
    tip: `// Pipeline:
// C# source → (Roslyn) → IL (.dll) → (CLR + JIT) → native code

// dotnet CLI
// dotnet new console -n MyApp
// dotnet build
// dotnet run
// dotnet test
// dotnet publish -c Release

// NuGet
// dotnet add package Serilog
// dotnet add package Newtonsoft.Json

// .csproj
// <Project Sdk="Microsoft.NET.Sdk">
//   <PropertyGroup>
//     <OutputType>Exe</OutputType>
//     <TargetFramework>net9.0</TargetFramework>
//     <Nullable>enable</Nullable>
//     <ImplicitUsings>enable</ImplicitUsings>
//   </PropertyGroup>
//   <ItemGroup>
//     <PackageReference Include="Serilog" Version="4.0.0" />
//   </ItemGroup>
// </Project>

// .NET versions
// .NET 8 (LTS)  .NET 9  .NET 10 (upcoming LTS)
// .NET Framework (Windows only, legacy)`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How do you build web apps in C#? (ASP.NET Core, MVC, Razor Pages, Blazor)',
    answer: '**Minimal API** (C# 10+): concise routes, great for microservices. **MVC**: controllers handle requests, return views or JSON. **Razor Pages**: page-centric CRUD. **Blazor Server**: C# on server, UI via SignalR. **Blazor WASM**: C# in the browser via WebAssembly.',
    tip: `// Minimal API
var app = WebApplication.Create(args);
app.MapGet("/users/{id:int}", async (int id, IUserService svc)
    => await svc.GetByIdAsync(id) is { } u ? Results.Ok(u) : Results.NotFound());
app.Run();

// MVC Controller
[ApiController, Route("api/[controller]")]
public class UsersController : ControllerBase {
    [HttpGet("{id}")]
    public async Task<ActionResult<UserDto>> Get(int id)
        => await _svc.GetByIdAsync(id) is { } u ? Ok(u) : NotFound();

    [HttpPost]
    public async Task<ActionResult<UserDto>> Create(CreateUserRequest req) {
        var user = await _svc.CreateAsync(req);
        return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
    }
}

// Blazor component
@page "/counter"
<h1>Count: @_count</h1>
<button @onclick="() => _count++">Click</button>
@code { int _count; }

// Program.cs
builder.Services.AddControllers();
builder.Services.AddScoped<IUserService, UserService>();`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'What are the desktop development options in C#? (WPF, WinForms, .NET MAUI)',
    answer: '**WinForms**: drag-and-drop UI, Windows only, rapid prototyping. **WPF**: XAML data binding, MVVM pattern, Windows only, rich graphics. **.NET MAUI**: cross-platform (Windows/macOS/iOS/Android) from one codebase, replaces Xamarin.Forms.',
    tip: `// WPF — MVVM pattern
public class MainViewModel : INotifyPropertyChanged {
    private string _name = "";
    public string UserName {
        get => _name;
        set { _name = value; PropertyChanged?.Invoke(this, new(nameof(UserName))); }
    }
    public ICommand SaveCommand => new RelayCommand(Save);
    public event PropertyChangedEventHandler? PropertyChanged;
    private void Save() { /* ... */ }
}

// WPF XAML binding
// <TextBox Text="{Binding UserName}" />
// <Button Command="{Binding SaveCommand}" Content="Save" />

// .NET MAUI — cross-platform
// <Label Text="{Binding Greeting}" />
// <Button Text="Go" Command="{Binding GoCommand}" />

// dotnet new maui -n MyApp
// Targets: Windows, macOS, iOS, Android

// Choose:
// WinForms  — quick internal Windows tools / legacy
// WPF       — rich Windows desktop + MVVM
// .NET MAUI — cross-platform mobile + desktop`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How do you use C# for cloud and mobile? (Azure SDK, microservices, gRPC, .NET MAUI)',
    answer: '**Mobile**: .NET MAUI (replaces Xamarin — iOS + Android). **Cloud**: Azure SDK for Blob, Service Bus, Cosmos DB. **Microservices**: ASP.NET Core + Docker + Kubernetes. **gRPC**: high-performance binary RPC with Protocol Buffers — ideal for service-to-service.',
    tip: `// Azure Blob Storage
using Azure.Storage.Blobs;
var container = new BlobServiceClient(cs).GetBlobContainerClient("photos");
await container.UploadBlobAsync("img.jpg", stream);

// gRPC proto
// service OrderService {
//   rpc GetOrder (GetOrderRequest) returns (OrderReply);
// }

// gRPC server
public class OrderGrpc : OrderService.OrderServiceBase {
    public override async Task<OrderReply> GetOrder(
        GetOrderRequest req, ServerCallContext ctx) {
        var o = await _repo.FindAsync(req.Id);
        return new OrderReply { Id = o.Id, Total = (double)o.Total };
    }
}

// .NET MAUI
// dotnet new maui -n MyMobile
// Targets: Android · iOS (requires Xcode on Mac)

// Microservices reference stack:
// ASP.NET Core Minimal API  — HTTP layer
// MassTransit + RabbitMQ   — messaging
// EF Core + PostgreSQL      — data
// OpenTelemetry + Serilog   — observability
// Docker + Kubernetes        — orchestration`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How do you use C# for game development with Unity?',
    answer: 'Unity uses C# via `MonoBehaviour`. Key lifecycle: `Awake()` (once, early), `Start()` (before first frame), `Update()` (every frame), `FixedUpdate()` (physics), `OnCollisionEnter()`. Coroutines handle time-based logic. Events, delegates, and ScriptableObjects are core patterns.',
    tip: `using UnityEngine;

public class PlayerController : MonoBehaviour {
    public float speed = 5f;
    private Rigidbody _rb;

    void Awake()  { _rb = GetComponent<Rigidbody>(); }

    void Update() {
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");
        _rb.velocity = new Vector3(h, 0, v) * speed;
    }

    void OnCollisionEnter(Collision col) {
        if (col.gameObject.CompareTag("Enemy")) TakeDamage(10);
    }
}

// Coroutine — timed logic without blocking Update
IEnumerator SpawnLoop() {
    while (true) {
        Instantiate(enemyPrefab, spawnPoint.position, Quaternion.identity);
        yield return new WaitForSeconds(3f);
    }
}
void Start() => StartCoroutine(SpawnLoop());

// Key C# concepts for Unity:
// Events & delegates  — UI callbacks, game events
// Coroutines          — cutscenes, timed effects
// Interfaces          — IInteractable, IDamageable
// ScriptableObjects   — data-driven design`
  },

  /* ── Interview ── */
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C# Interview — What are the four pillars of OOP?',
    answer: '**Encapsulation**: hide internal state with access modifiers. **Abstraction**: `interface`/`abstract class` defines contract without exposing implementation. **Inheritance**: `: BaseClass` — single; `sealed` prevents subclassing. **Polymorphism**: `virtual`/`override` — correct method called at runtime based on actual type.',
    tip: `// Encapsulation
public class Account {
    private decimal _balance;
    public decimal Balance => _balance;
    public void Deposit(decimal n) { if (n > 0) _balance += n; }
}

// Polymorphism
public class Animal  { public virtual  string Sound() => "..."; }
public class Dog : Animal { public override string Sound() => "Woof"; }

Animal pet = new Dog();
pet.Sound();  // "Woof" — runtime dispatch

// Abstraction
public interface IPaymentGateway {
    Task<bool> ChargeAsync(decimal amount, string card);
}
// StripeGateway and PayPalGateway both implement it

// sealed
public sealed class LoggingService { }

// Real-world analogies:
// Encapsulation  → TV remote (buttons exposed, internals hidden)
// Abstraction    → Car pedals (interface exposed, engine hidden)
// Inheritance    → Manager is-a Employee
// Polymorphism   → Draw() works differently per Shape`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C# Interview — Explain LINQ and its most important methods.',
    answer: 'LINQ queries any `IEnumerable<T>`. Queries are **lazy** — `ToList()`/`ToArray()` materializes. Key methods: `Where`, `Select`, `OrderBy`/`ThenBy`, `GroupBy`, `Join`, `FirstOrDefault`, `Any`/`All`, `Count`/`Sum`/`Max`. Same syntax works on in-memory collections AND translates to SQL via EF Core.',
    tip: `var orders = new List<Order> { /* ... */ };

// Filter + sort + paginate + project
var page = orders
    .Where(o => o.Status == "paid")
    .OrderByDescending(o => o.Total)
    .Skip(20).Take(10)
    .Select(o => new { o.Id, o.Total })
    .ToList();                  // executes query here

// Aggregates
decimal revenue = orders.Sum(o => o.Total);
bool hasLarge   = orders.Any(o => o.Total > 1000);
bool allPaid    = orders.All(o => o.Status == "paid");

// GroupBy
var byStatus = orders
    .GroupBy(o => o.Status)
    .Select(g => new { Status = g.Key, Count = g.Count() });

// Safe single item
var order = orders.FirstOrDefault(o => o.Id == 42);

// Interview points:
// 1. Lazy — ToList() triggers execution
// 2. Method == query syntax (same IL)
// 3. EF Core translates LINQ to SQL
// 4. Avoid ToList() inside loops — N+1 problem`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C# Interview — Explain async/await and the Task-based model.',
    answer: '`async` + `Task<T>` for non-blocking code. `await` suspends method, releases thread. Pitfalls: `.Result`/`.Wait()` block and can deadlock; `async void` hides exceptions; forgetting `await` loses errors. Use `Task.WhenAll` for parallelism, `CancellationToken` for cancellation.',
    tip: `// Pattern — async all the way up
public async Task<User> GetUserAsync(int id, CancellationToken ct) {
    var user = await _db.Users.FindAsync(id, ct);
    return user ?? throw new NotFoundException(id.ToString());
}

// Parallel tasks
var t1 = GetUserAsync(1, ct);
var t2 = GetUserAsync(2, ct);
await Task.WhenAll(t1, t2);

// Library code — don't capture sync context
await Task.Delay(100).ConfigureAwait(false);

// ValueTask — no allocation on cached/sync path
public ValueTask<Config> GetConfigAsync() =>
    _cached is { } c
        ? ValueTask.FromResult(c)
        : new ValueTask<Config>(FetchAsync());

// PITFALLS:
// async void   — exceptions crash process
// .Result      — can deadlock in ASP.NET
// no await     — fire-and-forget, errors lost
// Missing CancellationToken — can't cancel`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C# Interview — Explain delegates and events.',
    answer: 'A **delegate** is a type-safe function pointer. `Func<T>` (returns value), `Action<T>` (void), `Predicate<T>` (bool). An **event** restricts a delegate: only the declaring class can raise it; subscribers can only `+=`/`-=`. Delegates power LINQ, callbacks, strategy pattern. Events power the Observer pattern.',
    tip: `// Delegates
Func<int, int, int>  add   = (a, b) => a + b;
Action<string>       log   = Console.WriteLine;
Predicate<int>       isEven = n => n % 2 == 0;

// Higher-order function
public List<T> Filter<T>(List<T> items, Func<T, bool> pred)
    => items.Where(pred).ToList();

// Event — Observer pattern
public class StockMarket {
    public event EventHandler<decimal>? PriceChanged;
    public void UpdatePrice(decimal p)
        => PriceChanged?.Invoke(this, p);
}

var market = new StockMarket();
market.PriceChanged += (_, p) => Console.WriteLine("Price: " + p);
market.UpdatePrice(42.5m);

// Multicast
Action greet = () => Console.Write("Hello ");
greet += () => Console.Write("World!");
greet();  // "Hello World!"

// Points:
// Event can ONLY be raised by declaring class
// Func/Action/Predicate are built-in delegate types
// Closures capture variables — beware loop variable capture`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'C# Interview — Explain memory management and garbage collection.',
    answer: 'GC is generational: Gen 0 (short-lived, fast), Gen 1, Gen 2 (long-lived, rare). For unmanaged resources implement `IDisposable` and use `using`. Avoid finalizers. Reduce GC pressure: `ArrayPool`, `Span<T>`, `ValueTask`. Objects > 85KB go to LOH (Large Object Heap, rarely compacted).',
    tip: `// IDisposable pattern
public class Connection : IDisposable {
    private SqlConnection _conn;
    private bool _disposed;

    public Connection(string cs) => _conn = new SqlConnection(cs);

    public void Dispose() {
        if (_disposed) return;
        _conn.Dispose();
        _disposed = true;
        GC.SuppressFinalize(this);
    }
}

using var conn = new Connection(cs); // auto-disposed

// Generational GC
// Gen 0 — new objects, collected very often
// Gen 1 — buffer zone
// Gen 2 — statics, caches, long-lived
// LOH   — objects > 85KB, rarely collected

// Reduce GC pressure
byte[] buf = ArrayPool<byte>.Shared.Rent(4096);
try   { Process(buf); }
finally { ArrayPool<byte>.Shared.Return(buf); }

// Memory leaks in C#:
// Event handlers not unsubscribed (+=, never -=)
// Static collections growing unbounded
// Unclosed streams / connections`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'C# Interview — What is the C# ecosystem and when to choose which technology?',
    answer: 'C# covers the full stack. **Web**: ASP.NET Core. **Desktop**: WPF (Windows), WinForms, .NET MAUI (cross-platform). **Mobile**: .NET MAUI. **Cloud**: Azure SDK, microservices, gRPC. **Games**: Unity. **Data**: EF Core, Dapper. **Testing**: xUnit, NUnit, Moq.',
    tip: `// Decision tree

// REST API / microservice?
//   → Minimal API (simple) or MVC (large structured API)

// Web UI?
//   → Razor Pages (server-rendered CRUD)
//   → Blazor Server (interactive, real-time)
//   → Blazor WASM (offline, browser-native)

// Windows desktop?
//   → WPF (MVVM, data binding, rich UI)
//   → WinForms (legacy or quick tools)

// Cross-platform desktop + mobile?
//   → .NET MAUI (Windows + macOS + iOS + Android)

// Game development?
//   → Unity (C# scripts)

// Cloud?
//   → Azure SDK, Docker, Kubernetes, gRPC

// Database?
//   → EF Core (LINQ queries + migrations)
//   → Dapper (fast, write SQL yourself)

// LEARNING PATHS
// Backend:  Fundamentals → Core C# → LINQ → Async → ASP.NET Core → EF Core → Azure
// Games:    Fundamentals → OOP → Events/Delegates → Unity → Performance`
  },
];


/* ═══════════════════════════════════════════════════════════
   SQL — 20 cards  |  Basics → Intermediate → Advanced
═══════════════════════════════════════════════════════════ */
const SQL_CARDS = [

  /* ── Core ── */
  {
    category: 'Core', difficulty: 'Beginner',
    question: 'SQL Interview Mindmap — what are the 6 core areas every SQL interview covers?',
    answer: '6 areas that cover ~90% of SQL interviews: 1) Core Query Structure (clause order + execution model). 2) JOIN Patterns (matching, unmatched, self-join, multi-table). 3) GROUP BY Patterns (duplicates, top category, multi-column). 4) Subquery Patterns (IN, NOT IN, EXISTS, scalar). 5) Window Functions (ranking, running totals, PARTITION BY). 6) Common Interview Tasks (Top-N per group, find duplicates, swap values, classify rows).',
    tip: `SQL INTERVIEW MINDMAP
│
├── 1. CORE QUERY STRUCTURE
│   ├── FROM    — table / subquery / derived table
│   ├── JOIN    — INNER  LEFT  RIGHT  FULL  CROSS
│   ├── WHERE   — AND/OR/NOT  BETWEEN  IN  LIKE  IS NULL
│   ├── GROUP BY — COUNT() SUM() AVG() MIN() MAX()
│   ├── HAVING  — filter aggregated results
│   ├── SELECT  — columns  expressions  AS  CASE WHEN
│   ├── ORDER BY — ASC / DESC
│   └── LIMIT   — top N rows
│
├── 2. JOIN PATTERNS
│   ├── Unmatched rows   : LEFT JOIN + WHERE right IS NULL
│   ├── Matching rows    : INNER JOIN
│   ├── Count related    : LEFT JOIN + GROUP BY
│   ├── Self join        : table t1 JOIN table t2
│   └── Multi-table      : t1 JOIN t2 JOIN t3
│
├── 3. GROUP BY PATTERNS
│   ├── Count occurrences : GROUP BY col + HAVING COUNT(*) > N
│   ├── Find duplicates   : HAVING COUNT(*) > 1
│   ├── Find unique       : HAVING COUNT(*) = 1
│   ├── Top category      : GROUP BY + ORDER BY COUNT(*) DESC
│   └── Multi-column      : GROUP BY col1, col2
│
├── 4. SUBQUERY PATTERNS
│   ├── IN           : column IN (SELECT ...)
│   ├── NOT IN       : column NOT IN (SELECT ...)
│   ├── EXISTS       : WHERE EXISTS (SELECT ...)
│   └── Scalar       : column = (SELECT single_value ...)
│
├── 5. WINDOW FUNCTIONS
│   ├── OVER()  +  PARTITION BY  +  ORDER BY inside window
│   ├── Ranking        : ROW_NUMBER()  RANK()  DENSE_RANK()
│   ├── Running totals : SUM() OVER()
│   └── Moving avg     : AVG() OVER()
│
└── 6. COMMON INTERVIEW TASKS
    ├── Top N per group    : ROW_NUMBER() + PARTITION BY
    ├── Find duplicates    : GROUP BY + HAVING COUNT(*) > 1
    ├── Find missing rows  : LEFT JOIN + WHERE right IS NULL
    ├── Swap values        : CASE WHEN col = A THEN B ELSE A END
    └── Classify rows      : CASE WHEN condition THEN label END`
  },

  /* ── SQL Basics ── */
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'What is SQL and what is it used for?',
    answer: 'SQL (Structured Query Language) is the standard language for managing and querying relational databases. It is used to: create and modify table structures (DDL), insert/update/delete data (DML), query data (DQL), and control access (DCL). Popular databases using SQL: PostgreSQL, MySQL, SQLite, SQL Server, Oracle.',
    tip: `-- Four main categories of SQL commands:
-- DDL  (Data Definition)   — CREATE, ALTER, DROP, TRUNCATE
-- DML  (Data Manipulation) — INSERT, UPDATE, DELETE
-- DQL  (Data Query)        — SELECT
-- DCL  (Data Control)      — GRANT, REVOKE

-- Example: create a table and insert a row
CREATE TABLE users (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com');`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'How does SELECT work? What are WHERE, AND, OR, and LIKE?',
    answer: '`SELECT` retrieves columns from a table. `WHERE` filters rows by a condition. `AND`/`OR` combine conditions. `LIKE` matches text patterns: `%` means any sequence of characters, `_` means exactly one character. `BETWEEN` checks a range (inclusive). `IN` checks membership in a list. Always use `=` for equality in SQL, not `==`.',
    tip: `-- Basic SELECT
SELECT name, email FROM users;
SELECT * FROM users;                    -- all columns

-- Filtering rows
SELECT * FROM users
WHERE age > 18 AND city = 'Hanoi';

-- Pattern matching
SELECT * FROM products
WHERE name LIKE 'Apple%';              -- starts with Apple
WHERE name LIKE '%phone%';             -- contains phone

-- Range and list
WHERE price BETWEEN 10 AND 50;
WHERE status IN ('active', 'pending');`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'How do INSERT, UPDATE, and DELETE work?',
    answer: '`INSERT INTO` adds new rows. `UPDATE ... SET` modifies existing rows — always include `WHERE` or you will update every row. `DELETE FROM` removes rows — always include `WHERE` or you delete everything. `TRUNCATE` removes all rows much faster than DELETE (no row-by-row logging) but cannot be rolled back in some databases.',
    tip: `-- INSERT — specify columns explicitly
INSERT INTO users (name, email, age)
VALUES ('Bob', 'bob@mail.com', 25);

-- INSERT multiple rows at once
INSERT INTO products (name, price)
VALUES ('Phone', 999), ('Tablet', 499);

-- UPDATE — always add WHERE!
UPDATE users
SET email = 'new@mail.com', age = 26
WHERE id = 1;

-- DELETE — always add WHERE!
DELETE FROM users WHERE id = 1;

-- TRUNCATE — remove all rows fast
TRUNCATE TABLE logs;`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'How does NULL work in SQL?',
    answer: 'NULL represents an unknown or missing value — it is NOT the same as zero or an empty string. Comparisons with NULL using `=` always return UNKNOWN (not TRUE or FALSE) — so `WHERE col = NULL` never matches anything. Always use `IS NULL` or `IS NOT NULL`. `COALESCE(a, b, c)` returns the first non-NULL value — the most useful NULL-handling function.',
    tip: `-- WRONG — never matches
SELECT * FROM users WHERE phone = NULL;

-- CORRECT
SELECT * FROM users WHERE phone IS NULL;
SELECT * FROM users WHERE phone IS NOT NULL;

-- COALESCE — return first non-NULL
SELECT name, COALESCE(phone, email, 'no contact') AS contact
FROM users;

-- NULLIF — returns NULL if two values are equal
SELECT NULLIF(score, 0) FROM results; -- prevents divide-by-zero

-- NULL in math/concat always produces NULL
SELECT NULL + 5;        -- NULL
SELECT 'hi' || NULL;    -- NULL`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'How do ORDER BY, LIMIT, and OFFSET work?',
    answer: '`ORDER BY col` sorts results ascending (A→Z, 1→9). `ORDER BY col DESC` sorts descending. You can sort by multiple columns. `LIMIT n` returns only the first n rows. `OFFSET n` skips the first n rows. Together `LIMIT` + `OFFSET` implement pagination. The ORDER BY clause is the ONLY way to guarantee row order in SQL.',
    tip: `-- Sort by one column
SELECT * FROM products ORDER BY price DESC;

-- Sort by multiple columns
SELECT * FROM orders
ORDER BY status ASC, created_at DESC;

-- Pagination — page 3, 10 items per page
SELECT * FROM products
ORDER BY id
LIMIT 10 OFFSET 20;   -- skip first 20, get next 10

-- Top 5 most expensive
SELECT name, price FROM products
ORDER BY price DESC
LIMIT 5;`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'What are Primary Keys and Foreign Keys?',
    answer: 'A Primary Key (PK) uniquely identifies each row in a table — it must be unique and NOT NULL. A Foreign Key (FK) is a column that references the PK of another table, enforcing referential integrity. If you try to insert a FK value that does not exist in the parent table, the database rejects it. `ON DELETE CASCADE` automatically deletes child rows when the parent is deleted.',
    tip: `CREATE TABLE departments (
  id   SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100) NOT NULL,
  department_id INT REFERENCES departments(id)
                ON DELETE SET NULL,     -- or CASCADE / RESTRICT
  email         VARCHAR(255) UNIQUE NOT NULL,
  salary        NUMERIC(10,2) DEFAULT 0
);

-- Composite primary key
CREATE TABLE order_items (
  order_id   INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity   INT NOT NULL,
  PRIMARY KEY (order_id, product_id)    -- composite PK
);`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'What are the most common SQL data types?',
    answer: 'Choosing the right data type improves storage and query performance. Key types: `INT`/`BIGINT` for whole numbers; `NUMERIC`/`DECIMAL` for exact decimals (money); `FLOAT`/`REAL` for approximate decimals (avoid for money); `VARCHAR(n)` for variable-length text; `TEXT` for unlimited text; `BOOLEAN` for true/false; `DATE`, `TIME`, `TIMESTAMP` for dates/times; `UUID` for globally unique IDs; `JSONB` (PostgreSQL) for semi-structured data.',
    tip: `CREATE TABLE products (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  description  TEXT,
  price        NUMERIC(10, 2) NOT NULL,   -- exact: 99999999.99
  in_stock     BOOLEAN DEFAULT true,
  created_at   TIMESTAMP DEFAULT NOW(),
  tags         TEXT[],                    -- array (PostgreSQL)
  metadata     JSONB                      -- JSON column (PostgreSQL)
);

-- PostgreSQL: SERIAL vs BIGSERIAL vs GENERATED
id SERIAL PRIMARY KEY          -- auto-increment int
id BIGSERIAL PRIMARY KEY       -- auto-increment bigint
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY  -- SQL standard`
  },

  /* ── IF & CASE ── */
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'What is the CASE expression in SQL and what are its two forms?',
    answer: 'CASE is SQL\'s if-else. It returns a value — use it anywhere an expression is valid (SELECT, WHERE, ORDER BY, GROUP BY). Two forms: **Simple CASE** compares one column to fixed values (`CASE col WHEN val THEN ... END`). **Searched CASE** evaluates arbitrary boolean conditions (`CASE WHEN condition THEN ... END`). Always end with `END`; add `ELSE` for a default — without ELSE, unmatched rows return NULL.',
    tip: `-- Simple CASE (compare one column)
SELECT name,
  CASE status
    WHEN 'A' THEN 'Active'
    WHEN 'I' THEN 'Inactive'
    WHEN 'B' THEN 'Banned'
    ELSE 'Unknown'
  END AS status_label
FROM users;

-- Searched CASE (arbitrary conditions)
SELECT name, score,
  CASE
    WHEN score >= 90 THEN 'A'
    WHEN score >= 80 THEN 'B'
    WHEN score >= 70 THEN 'C'
    ELSE 'F'
  END AS grade
FROM students;`
  },
  {
    category: 'SQL Basics', difficulty: 'Beginner',
    question: 'How do you use CASE in ORDER BY and GROUP BY?',
    answer: 'CASE inside ORDER BY lets you define a custom sort order that can\'t be expressed with simple ASC/DESC. CASE inside GROUP BY groups rows by a computed bucket rather than a raw column value. Both are powerful for ad-hoc reporting without changing the schema.',
    tip: `-- Custom sort order: show VIP first, then active, then rest
SELECT name, tier
FROM users
ORDER BY
  CASE tier
    WHEN 'VIP'    THEN 1
    WHEN 'active' THEN 2
    ELSE               3
  END;

-- Group by computed bucket (price range)
SELECT
  CASE
    WHEN price < 10   THEN 'Budget'
    WHEN price < 50   THEN 'Mid-range'
    ELSE                   'Premium'
  END AS price_tier,
  COUNT(*)  AS product_count,
  AVG(price) AS avg_price
FROM products
GROUP BY
  CASE
    WHEN price < 10   THEN 'Budget'
    WHEN price < 50   THEN 'Mid-range'
    ELSE                   'Premium'
  END;`
  },
  {
    category: 'SQL Basics', difficulty: 'Intermediate',
    question: 'How do you use CASE for conditional aggregation (pivot pattern)?',
    answer: 'Wrap a CASE inside SUM or COUNT to aggregate only rows matching a condition — effectively pivoting rows into columns. `SUM(CASE WHEN condition THEN 1 ELSE 0 END)` counts matching rows. `SUM(CASE WHEN condition THEN amount ELSE 0 END)` sums a value conditionally. PostgreSQL also supports the cleaner `COUNT(*) FILTER (WHERE condition)` syntax.',
    tip: `-- Count orders by status in one row per user
SELECT
  user_id,
  COUNT(*)                                        AS total,
  SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed,
  SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled,
  SUM(CASE WHEN status = 'pending'   THEN 1 ELSE 0 END) AS pending
FROM orders
GROUP BY user_id;

-- PostgreSQL FILTER syntax (same result, cleaner)
SELECT
  user_id,
  COUNT(*)                                         AS total,
  COUNT(*) FILTER (WHERE status = 'completed')     AS completed,
  COUNT(*) FILTER (WHERE status = 'cancelled')     AS cancelled,
  SUM(amount) FILTER (WHERE status = 'completed')  AS revenue
FROM orders
GROUP BY user_id;`
  },
  {
    category: 'SQL Basics', difficulty: 'Intermediate',
    question: 'What is CASE with NULL handling? How does it interact with COALESCE and NULLIF?',
    answer: 'NULL comparisons in CASE use `IS NULL` / `IS NOT NULL` — not `= NULL` (always false). `COALESCE(a, b, c)` returns the first non-NULL argument — shorthand for `CASE WHEN a IS NOT NULL THEN a WHEN b IS NOT NULL THEN b ... END`. `NULLIF(a, b)` returns NULL when a = b, otherwise returns a — useful to avoid division-by-zero: `val / NULLIF(divisor, 0)`.',
    tip: `-- CASE with NULL check
SELECT name,
  CASE
    WHEN email IS NULL THEN 'No email'
    WHEN email LIKE '%@company.com' THEN 'Internal'
    ELSE 'External'
  END AS email_type
FROM users;

-- COALESCE — return first non-NULL
SELECT COALESCE(phone, mobile, 'N/A') AS contact
FROM users;

-- NULLIF — avoid division by zero
SELECT
  product_id,
  total_revenue / NULLIF(units_sold, 0) AS avg_revenue_per_unit
FROM sales;

-- Combine: replace NULL result of NULLIF
SELECT COALESCE(total / NULLIF(count, 0), 0) AS safe_avg
FROM stats;`
  },
  {
    category: 'SQL Basics', difficulty: 'Intermediate',
    question: 'How do you use CASE inside WHERE to build dynamic filters?',
    answer: 'CASE inside WHERE evaluates conditions per row — useful for applying different filter logic based on a parameter or another column\'s value. For example: skip a filter when a parameter is NULL (pass-all), apply strict rules for one group and loose rules for another. Avoid overusing this — it can prevent index use; consider splitting into separate queries or using OR conditions for better performance.',
    tip: `-- Skip filter when param is NULL (pass-all pattern)
-- \$1 = NULL means "show all statuses"
SELECT * FROM orders
WHERE status = CASE WHEN \$1 IS NOT NULL THEN \$1 ELSE status END;

-- Simpler equivalent:
SELECT * FROM orders
WHERE \$1 IS NULL OR status = \$1;

-- Different logic per user tier
SELECT * FROM products
WHERE
  CASE
    WHEN (SELECT tier FROM users WHERE id = \$1) = 'VIP'
      THEN price <= 10000        -- VIPs see all prices
    ELSE price <= 100            -- others see only budget items
  END;`
  },
  {
    category: 'SQL Basics', difficulty: 'Intermediate',
    question: 'Does SQL have IF? How do IIF and IF differ from CASE?',
    answer: '`CASE` is ANSI SQL — works in all databases. Database-specific shortcuts: **MySQL/MariaDB**: `IF(condition, true_val, false_val)` — inline if expression. **SQL Server**: `IIF(condition, true_val, false_val)` — same idea, cleaner syntax. **PostgreSQL**: no IF expression — use CASE. Note: these are *expressions* (return a value). Procedural IF statements (in stored procedures / PL/pgSQL) are different — they control flow, not return values.',
    tip: `-- MySQL IF expression
SELECT name,
  IF(score >= 60, 'Pass', 'Fail') AS result
FROM students;

-- SQL Server IIF (identical semantics)
SELECT name,
  IIF(score >= 60, 'Pass', 'Fail') AS result
FROM students;

-- PostgreSQL — use CASE (no IF expression)
SELECT name,
  CASE WHEN score >= 60 THEN 'Pass' ELSE 'Fail' END AS result
FROM students;

-- PL/pgSQL procedural IF (inside a function)
-- IF score >= 60 THEN
--   RETURN 'Pass';
-- ELSE
--   RETURN 'Fail';
-- END IF;`
  },
  {
    category: 'SQL Basics', difficulty: 'Advanced',
    question: 'What are advanced CASE patterns: nested CASE, CASE in subqueries, and CASE with window functions?',
    answer: 'CASE can be nested (CASE inside CASE) but this hurts readability — flatten with searched CASE instead. CASE inside a subquery\'s SELECT lets you tag rows before an outer query aggregates them. CASE inside window functions (like `SUM(CASE ... ) OVER (...)`) combines conditional logic with running totals or rankings — powerful for cohort analysis and complex reporting.',
    tip: `-- Nested CASE → better written as searched CASE
SELECT name,
  CASE
    WHEN age < 13                    THEN 'Child'
    WHEN age < 18                    THEN 'Teen'
    WHEN age < 65                    THEN 'Adult'
    ELSE                                  'Senior'
  END AS age_group
FROM people;

-- CASE inside a window function (running conditional total)
SELECT
  order_date,
  amount,
  SUM(CASE WHEN type = 'sale'   THEN  amount ELSE 0 END)
    OVER (ORDER BY order_date) AS running_sales,
  SUM(CASE WHEN type = 'refund' THEN  amount ELSE 0 END)
    OVER (ORDER BY order_date) AS running_refunds
FROM transactions;

-- CASE to label rows, then aggregate in outer query
SELECT category, COUNT(*) AS high_value_orders
FROM (
  SELECT *,
    CASE WHEN amount > 500 THEN 'high' ELSE 'low' END AS value_tier
  FROM orders
) t
WHERE value_tier = 'high'
GROUP BY category;`
  },

  /* ── DDL — Data Definition Language ── */
  {
    category: 'DDL', difficulty: 'Beginner',
    question: 'What is DDL and what are its core commands (CREATE, ALTER, DROP, TRUNCATE)?',
    answer: 'DDL (Data Definition Language) defines and modifies database structure — it operates on schema objects, not data. CREATE builds new objects (tables, indexes, views). ALTER modifies existing ones (add/drop/rename columns). DROP permanently removes an object and all its data. TRUNCATE removes all rows from a table instantly without logging each row — much faster than DELETE for full clears. DDL is auto-committed in most databases.',
    tip: `-- CREATE TABLE with common constraints
CREATE TABLE users (
  id         BIGSERIAL    PRIMARY KEY,
  email      VARCHAR(255) NOT NULL UNIQUE,
  username   VARCHAR(50)  NOT NULL,
  role       VARCHAR(20)  NOT NULL DEFAULT 'user',
  is_active  BOOLEAN      NOT NULL DEFAULT true,
  created_at TIMESTAMP    NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- ALTER TABLE — modify structure
ALTER TABLE users ADD COLUMN  phone VARCHAR(20);          -- add column
ALTER TABLE users DROP COLUMN phone;                      -- remove column
ALTER TABLE users ALTER COLUMN username TYPE TEXT;         -- change type
ALTER TABLE users RENAME COLUMN username TO display_name; -- rename
ALTER TABLE users RENAME TO members;                      -- rename table

-- DROP vs TRUNCATE
DROP TABLE users;              -- delete table + all data (irreversible!)
DROP TABLE IF EXISTS users;    -- safe (no error if missing)
TRUNCATE TABLE users;          -- delete ALL rows instantly (faster than DELETE)
TRUNCATE TABLE users RESTART IDENTITY; -- also reset auto-increment sequence`
  },
  {
    category: 'DDL', difficulty: 'Intermediate',
    question: 'How do you design constraints and indexes with DDL?',
    answer: 'Constraints enforce data integrity at the database level — they catch bad data before it is stored. PRIMARY KEY ensures uniqueness + NOT NULL. FOREIGN KEY enforces referential integrity between tables. UNIQUE, NOT NULL, CHECK, DEFAULT are column-level guardrails. Indexes speed up reads but slow down writes — add them on columns used in WHERE, JOIN, and ORDER BY clauses. Always index foreign keys.',
    tip: `-- Constraints
CREATE TABLE orders (
  id          BIGSERIAL PRIMARY KEY,
  user_id     BIGINT    NOT NULL,
  status      VARCHAR   NOT NULL DEFAULT 'pending',
  total       NUMERIC(10,2) NOT NULL CHECK (total >= 0),
  coupon_code VARCHAR(20)   UNIQUE,

  -- Foreign key constraint
  CONSTRAINT fk_orders_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE,     -- delete orders when user deleted
    ON UPDATE CASCADE      -- propagate user_id changes
);

-- Named constraint (easier to drop later)
ALTER TABLE orders
  ADD CONSTRAINT chk_status
  CHECK (status IN ('pending','paid','shipped','cancelled'));

-- Indexes
CREATE INDEX idx_orders_user_id ON orders (user_id);       -- FK index (always!)
CREATE INDEX idx_orders_status  ON orders (status);
CREATE INDEX idx_orders_created ON orders (created_at DESC);
CREATE UNIQUE INDEX idx_users_email ON users (LOWER(email)); -- expression index
CREATE INDEX idx_orders_compound ON orders (user_id, status);-- compound index

-- Drop constraint / index
ALTER TABLE orders DROP CONSTRAINT chk_status;
DROP INDEX idx_orders_status;`
  },
  {
    category: 'DDL', difficulty: 'Intermediate',
    question: 'What are VIEWs and how do they simplify complex queries?',
    answer: 'A VIEW is a named, saved SELECT query stored in the database. It behaves like a virtual table — you SELECT from it without rewriting the query. Views simplify complex joins, enforce column-level security (expose only safe columns), and centralise business logic in the DB. A Materialized View (PostgreSQL) stores the result physically and is refreshed on demand — great for expensive reporting queries.',
    tip: `-- Simple view — hide sensitive columns
CREATE VIEW public_users AS
  SELECT id, username, created_at
  FROM users
  WHERE is_active = true;
  -- password, email hidden from this view

SELECT * FROM public_users;   -- safe, no sensitive data

-- Complex view — pre-joined, reusable
CREATE VIEW order_summary AS
  SELECT
    o.id,
    o.created_at,
    o.total,
    o.status,
    u.email    AS customer_email,
    u.username AS customer_name,
    COUNT(oi.id)    AS item_count
  FROM orders o
  JOIN users       u  ON u.id = o.user_id
  JOIN order_items oi ON oi.order_id = o.id
  GROUP BY o.id, u.email, u.username;

SELECT * FROM order_summary WHERE status = 'pending';

-- Materialized view (PostgreSQL) — cached result
CREATE MATERIALIZED VIEW monthly_revenue AS
  SELECT DATE_TRUNC('month', created_at) AS month,
         SUM(total) AS revenue
  FROM orders WHERE status = 'paid'
  GROUP BY 1;

REFRESH MATERIALIZED VIEW monthly_revenue;  -- update data

-- Drop view
DROP VIEW public_users;
DROP MATERIALIZED VIEW monthly_revenue;`
  },

  /* ── DML — Data Manipulation Language ── */
  {
    category: 'DML', difficulty: 'Beginner',
    question: 'What is DML and how do INSERT, UPDATE, and DELETE work?',
    answer: 'DML (Data Manipulation Language) modifies the data inside tables — not the structure. INSERT adds new rows. UPDATE modifies existing rows (always use WHERE or you update everything). DELETE removes rows (always use WHERE). Unlike DDL, DML is transactional — changes can be rolled back before committing. A missing WHERE in UPDATE or DELETE is one of the most common and costly SQL mistakes.',
    tip: `-- INSERT — single row
INSERT INTO users (email, username, role)
VALUES ('alice@example.com', 'alice', 'admin');

-- INSERT — multiple rows at once (faster than separate inserts)
INSERT INTO products (name, price, stock)
VALUES
  ('Laptop',  999.99, 50),
  ('Monitor', 349.50, 120),
  ('Keyboard', 79.99, 200);

-- INSERT from SELECT — copy/transform data
INSERT INTO archive_orders (order_id, user_id, total)
  SELECT id, user_id, total
  FROM orders
  WHERE created_at < NOW() - INTERVAL '1 year';

-- UPDATE — always verify with SELECT first!
UPDATE users
SET role = 'moderator', updated_at = NOW()
WHERE id = 42;

-- UPDATE multiple columns with calculation
UPDATE products
SET price = price * 1.10,   -- 10% price increase
    updated_at = NOW()
WHERE category = 'electronics';

-- DELETE — targeted
DELETE FROM sessions WHERE expires_at < NOW();
DELETE FROM users WHERE id = 42;

-- ⚠️ DANGER — no WHERE = affects ALL rows
-- UPDATE users SET role = 'admin';   -- everyone becomes admin!
-- DELETE FROM users;                 -- table emptied!`
  },
  {
    category: 'DML', difficulty: 'Intermediate',
    question: 'What is UPSERT (INSERT ... ON CONFLICT) and RETURNING?',
    answer: 'UPSERT handles "insert or update if exists" atomically — no race condition. In PostgreSQL: INSERT ... ON CONFLICT DO UPDATE. In MySQL: INSERT ... ON DUPLICATE KEY UPDATE. RETURNING (PostgreSQL) returns data from the affected rows without a separate SELECT — useful for getting the generated ID after insert, or the updated values after an update.',
    tip: `-- UPSERT — insert or update on conflict (PostgreSQL)
INSERT INTO user_settings (user_id, theme, notifications)
VALUES (42, 'dark', true)
ON CONFLICT (user_id)            -- conflict on unique/PK column
DO UPDATE SET
  theme         = EXCLUDED.theme,       -- EXCLUDED = the row we tried to insert
  notifications = EXCLUDED.notifications,
  updated_at    = NOW();

-- ON CONFLICT DO NOTHING — ignore duplicates silently
INSERT INTO event_log (event_id, user_id)
VALUES (101, 42)
ON CONFLICT DO NOTHING;

-- RETURNING — get inserted/updated data back
INSERT INTO users (email, username)
VALUES ('bob@example.com', 'bob')
RETURNING id, created_at;          -- returns new row's id and timestamp

-- RETURNING after UPDATE
UPDATE orders
SET status = 'shipped', shipped_at = NOW()
WHERE id = 99
RETURNING id, status, shipped_at, user_id;

-- Useful pattern: insert + immediately use the ID
WITH new_user AS (
  INSERT INTO users (email) VALUES ('carol@example.com')
  RETURNING id
)
INSERT INTO profiles (user_id, bio)
SELECT id, 'New user' FROM new_user;`
  },
  {
    category: 'DML', difficulty: 'Intermediate',
    question: 'How do transactions work in SQL (BEGIN, COMMIT, ROLLBACK, SAVEPOINT)?',
    answer: 'A transaction groups multiple SQL statements into an all-or-nothing unit. If any step fails, ROLLBACK undoes everything back to the start (or a SAVEPOINT). COMMIT makes changes permanent. Transactions guarantee ACID properties. Always wrap multi-step operations (money transfers, order creation) in a transaction to prevent partial updates from corrupting data.',
    tip: `-- Bank transfer — must succeed or fail together
BEGIN;

  -- Step 1: deduct from sender
  UPDATE accounts
  SET balance = balance - 500
  WHERE id = 1 AND balance >= 500;  -- check sufficient funds

  -- Check rows affected (app-level)
  -- if affected = 0 → insufficient funds → ROLLBACK

  -- Step 2: add to receiver
  UPDATE accounts
  SET balance = balance + 500
  WHERE id = 2;

COMMIT;   -- both updates permanent

-- If anything fails:
ROLLBACK; -- both updates undone, data stays consistent

-- SAVEPOINT — partial rollback within a transaction
BEGIN;
  INSERT INTO orders (user_id, total) VALUES (42, 150);

  SAVEPOINT after_order;

  INSERT INTO payments (order_id, amount) VALUES (99, 150);
  -- payment fails...

  ROLLBACK TO SAVEPOINT after_order;  -- undo only payment, keep order

  -- try alternative payment method...

COMMIT;

-- Auto-commit: each statement is its own transaction by default
-- Explicit BEGIN..COMMIT required for multi-statement transactions`
  },

  /* ── DQL — Data Query Language ── */
  {
    category: 'DQL', difficulty: 'Beginner',
    question: 'What is DQL and how does the SELECT statement execution order work?',
    answer: 'DQL (Data Query Language) is the SELECT statement — the most used SQL command. Understanding execution order is key to writing correct queries: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT. This means you cannot use a SELECT alias in WHERE (WHERE runs before SELECT). HAVING filters after GROUP BY; WHERE filters before.',
    tip: `-- SELECT execution order (not the written order!):
--  1. FROM + JOIN      → which tables, build dataset
--  2. WHERE            → filter rows (before grouping)
--  3. GROUP BY         → group remaining rows
--  4. HAVING           → filter groups (after grouping)
--  5. SELECT           → choose columns, compute expressions
--  6. DISTINCT         → remove duplicate rows
--  7. ORDER BY         → sort (can use aliases from SELECT)
--  8. LIMIT / OFFSET   → paginate

-- Example demonstrating the order:
SELECT
  u.username,                          -- 5: selected
  COUNT(o.id)    AS order_count,       -- 5: computed
  SUM(o.total)   AS total_spent        -- 5: computed
FROM users u                           -- 1: base table
LEFT JOIN orders o ON o.user_id = u.id -- 1: join
WHERE u.is_active = true               -- 2: filter rows (before group)
GROUP BY u.id, u.username              -- 3: group per user
HAVING COUNT(o.id) > 0                 -- 4: only users with orders
ORDER BY total_spent DESC              -- 7: sort (alias OK here)
LIMIT 10;                              -- 8: top 10 only

-- ❌ Cannot use alias in WHERE:
-- WHERE order_count > 5  → error! order_count computed in step 5
-- ✅ Use alias in ORDER BY and HAVING:`
  },
  {
    category: 'DQL', difficulty: 'Intermediate',
    question: 'How do subqueries, CTEs, and EXISTS work in SELECT?',
    answer: 'Subqueries embed a SELECT inside another query — in WHERE (scalar/correlated), FROM (derived table), or SELECT (scalar). CTEs (WITH clause) name a subquery and make complex queries readable and reusable within the same statement. EXISTS checks if a subquery returns any rows — more efficient than IN for large datasets because it short-circuits on the first match.',
    tip: `-- Scalar subquery — returns one value
SELECT name,
       price,
       price - (SELECT AVG(price) FROM products) AS diff_from_avg
FROM products;

-- Subquery in WHERE
SELECT * FROM users
WHERE id IN (
  SELECT DISTINCT user_id FROM orders WHERE total > 1000
);

-- EXISTS — short-circuits, faster than IN for large sets
SELECT * FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o          -- SELECT 1: we only care if rows exist
  WHERE o.user_id = u.id          -- correlated: references outer query
    AND o.status = 'paid'
);

-- CTE (WITH) — readable, reusable named result sets
WITH high_value_orders AS (
  SELECT user_id, SUM(total) AS lifetime_value
  FROM orders
  WHERE status = 'paid'
  GROUP BY user_id
  HAVING SUM(total) > 5000
),
vip_users AS (
  SELECT u.*, hvo.lifetime_value
  FROM users u
  JOIN high_value_orders hvo ON hvo.user_id = u.id
)
SELECT * FROM vip_users ORDER BY lifetime_value DESC;

-- Recursive CTE — traverse hierarchies (org chart, categories)
WITH RECURSIVE category_tree AS (
  SELECT id, name, parent_id, 0 AS depth
  FROM categories WHERE parent_id IS NULL
  UNION ALL
  SELECT c.id, c.name, c.parent_id, ct.depth + 1
  FROM categories c
  JOIN category_tree ct ON ct.id = c.parent_id
)
SELECT * FROM category_tree;`
  },

  /* ── DCL — Data Control Language ── */
  {
    category: 'DCL', difficulty: 'Intermediate',
    question: 'What is DCL and how do GRANT and REVOKE control database access?',
    answer: 'DCL (Data Control Language) controls who can do what in the database. GRANT gives privileges to users or roles. REVOKE takes them away. Privileges can be on databases, schemas, tables, columns, sequences, or functions. Best practice: create roles (groups of privileges), assign users to roles — never grant directly to individual users. Principle of least privilege: grant only what is needed.',
    tip: `-- Create roles (groups of privileges)
CREATE ROLE readonly;
CREATE ROLE app_user;
CREATE ROLE admin_user;

-- Grant privileges to roles
GRANT CONNECT ON DATABASE mydb TO readonly;
GRANT USAGE   ON SCHEMA public TO readonly;
GRANT SELECT  ON ALL TABLES IN SCHEMA public TO readonly;

-- app_user — CRUD but no schema changes
GRANT CONNECT ON DATABASE mydb TO app_user;
GRANT USAGE   ON SCHEMA public TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO app_user;  -- for SERIAL

-- admin_user — full control
GRANT ALL PRIVILEGES ON DATABASE mydb TO admin_user;

-- Assign users to roles
CREATE USER alice WITH PASSWORD 'securepassword';
GRANT readonly  TO alice;

CREATE USER api_service WITH PASSWORD 'servicepassword';
GRANT app_user TO api_service;

-- Revoke privileges
REVOKE DELETE ON ALL TABLES IN SCHEMA public FROM app_user;
REVOKE readonly FROM alice;

-- Column-level privilege (restrict sensitive columns)
GRANT SELECT (id, username, created_at) ON users TO readonly;
-- readonly role cannot see email, password columns

-- Apply to future tables automatically (PostgreSQL)
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  GRANT SELECT ON TABLES TO readonly;`
  },
  {
    category: 'DCL', difficulty: 'Intermediate',
    question: 'What are Row-Level Security (RLS) and best practices for DB access control?',
    answer: 'Row-Level Security (RLS) — supported in PostgreSQL — adds WHERE conditions automatically to queries based on the current user. Users can only see their own rows without any app-side filtering. Essential for multi-tenant SaaS where one database stores data for many organisations. Policies define which rows each user can SELECT, INSERT, UPDATE, or DELETE.',
    tip: `-- Row-Level Security (PostgreSQL)

-- 1. Enable RLS on the table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- 2. Create policies
-- Users can only see their own orders
CREATE POLICY orders_user_isolation ON orders
  FOR ALL
  USING (user_id = current_setting('app.user_id')::BIGINT);

-- Admins bypass RLS
CREATE POLICY orders_admin_all ON orders
  FOR ALL
  TO admin_user
  USING (true);   -- no restriction

-- Set the current user context (from your app):
SET LOCAL app.user_id = '42';
SELECT * FROM orders;   -- automatically filtered to user 42's orders

-- ✅ DB Access Control Best Practices:
-- 1. Never connect as superuser/root from your application
-- 2. One DB user per service (api_service, jobs_service)
-- 3. Grant only SELECT unless writes are needed
-- 4. Revoke PUBLIC schema privileges in production
-- 5. Use RLS for multi-tenant data isolation
-- 6. Rotate passwords regularly, use secrets manager
-- 7. Log all DDL changes and privilege grants
-- 8. Never hardcode credentials — use environment variables`
  },

  /* ── Joins & Aggregation ── */
  {
    category: 'Joins & Aggregation', difficulty: 'Intermediate',
    question: 'What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?',
    answer: '`INNER JOIN`: returns only rows where the condition matches in BOTH tables. `LEFT JOIN`: returns all rows from the left table + matched rows from the right (NULL if no match). `RIGHT JOIN`: opposite of LEFT JOIN. `FULL OUTER JOIN`: returns all rows from both tables (NULL where no match). LEFT JOIN is by far the most commonly used after INNER JOIN.',
    tip: `-- INNER JOIN — only matching rows
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN — all users, even those with no orders
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- o.total is NULL for users with no orders

-- Find users with NO orders (anti-join pattern)
SELECT u.name FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;

-- FULL OUTER JOIN
SELECT u.name, o.total FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;`
  },
  {
    category: 'Joins & Aggregation', difficulty: 'Intermediate',
    question: 'How do aggregate functions work? COUNT, SUM, AVG, MIN, MAX',
    answer: 'Aggregate functions collapse many rows into a single value. `COUNT(*)` counts all rows; `COUNT(col)` skips NULLs. `SUM`, `AVG`, `MIN`, `MAX` work on numeric columns. They are used with `GROUP BY` to compute per-group statistics. `DISTINCT` inside an aggregate ignores duplicates: `COUNT(DISTINCT email)`. NULL values are ignored by all aggregates except `COUNT(*)`.',
    tip: `SELECT
  COUNT(*)                  AS total_orders,
  COUNT(DISTINCT user_id)   AS unique_customers,
  SUM(total)                AS revenue,
  AVG(total)                AS avg_order_value,
  MIN(total)                AS smallest_order,
  MAX(total)                AS largest_order,
  ROUND(AVG(total), 2)      AS avg_rounded
FROM orders
WHERE created_at >= '2026-01-01';

-- Per-category statistics
SELECT
  category,
  COUNT(*)        AS product_count,
  AVG(price)      AS avg_price,
  MAX(price)      AS max_price
FROM products
GROUP BY category
ORDER BY avg_price DESC;`
  },
  {
    category: 'Joins & Aggregation', difficulty: 'Intermediate',
    question: 'What is GROUP BY and how does HAVING differ from WHERE?',
    answer: '`GROUP BY` groups rows sharing the same column values so aggregates are computed per group. `WHERE` filters rows BEFORE grouping — cannot reference aggregate functions. `HAVING` filters groups AFTER aggregation — can reference aggregates like `COUNT(*)` or `SUM()`. Rule: if you need to filter on an aggregate result, use `HAVING`.',
    tip: `-- Sales per city — only cities with > 100 orders
SELECT
  city,
  COUNT(*)      AS order_count,
  SUM(total)    AS revenue
FROM orders
JOIN users ON orders.user_id = users.id
WHERE orders.status = 'completed'      -- filter rows BEFORE grouping
GROUP BY city
HAVING COUNT(*) > 100                  -- filter groups AFTER aggregation
ORDER BY revenue DESC;

-- Tip: ORDER OF CLAUSES matters:
-- SELECT → FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT`
  },
  {
    category: 'Joins & Aggregation', difficulty: 'Intermediate',
    question: 'What is the difference between UNION and UNION ALL?',
    answer: '`UNION` combines result sets from two queries and removes duplicate rows — requires a sort/dedup pass which is slower. `UNION ALL` combines result sets and keeps ALL rows including duplicates — faster. Both require the same number of columns with compatible types. Use `UNION ALL` by default unless you specifically need deduplication.',
    tip: `-- UNION — removes duplicates (slower)
SELECT email FROM customers
UNION
SELECT email FROM suppliers;

-- UNION ALL — keeps duplicates (faster)
SELECT email FROM customers
UNION ALL
SELECT email FROM suppliers;

-- Real use case: combine this month's and last month's sales
SELECT 'current' AS period, SUM(total) FROM orders
WHERE created_at >= date_trunc('month', NOW())
UNION ALL
SELECT 'previous', SUM(total) FROM orders
WHERE created_at >= date_trunc('month', NOW()) - INTERVAL '1 month'
  AND created_at <  date_trunc('month', NOW());`
  },
  {
    category: 'Joins & Aggregation', difficulty: 'Intermediate',
    question: 'What are subqueries and when do you use them?',
    answer: 'A subquery is a SELECT nested inside another query. Types: Scalar (returns one value), Row (returns one row), Column (returns one column used with `IN`/`ANY`), Table (returns a result set used in `FROM`). Correlated subqueries reference the outer query and run once per row — often slow. JOINs are usually faster than subqueries for large datasets.',
    tip: `-- Scalar subquery — single value
SELECT name, salary,
       (SELECT AVG(salary) FROM employees) AS company_avg
FROM employees;

-- IN subquery — column of values
SELECT * FROM orders
WHERE user_id IN (
  SELECT id FROM users WHERE city = 'Hanoi'
);

-- Subquery in FROM (derived table)
SELECT dept, avg_sal FROM (
  SELECT department AS dept, AVG(salary) AS avg_sal
  FROM employees
  GROUP BY department
) AS dept_avg
WHERE avg_sal > 50000;

-- Correlated — runs per row (use with care)
SELECT name FROM employees e
WHERE salary > (SELECT AVG(salary) FROM employees
                WHERE department = e.department);`
  },
  {
    category: 'Joins & Aggregation', difficulty: 'Intermediate',
    question: 'How do aliases (AS) and calculated columns work?',
    answer: 'Aliases rename columns or tables in the output using `AS` (the keyword is optional). Table aliases make long queries readable, especially with JOINs. Column aliases can be used in `ORDER BY` but NOT in `WHERE` or `HAVING` (because those are evaluated before SELECT). Calculated columns let you derive new values directly in the query.',
    tip: `-- Column aliases
SELECT
  first_name || ' ' || last_name  AS full_name,
  salary * 12                      AS annual_salary,
  salary * 12 * 0.1                AS yearly_bonus,
  UPPER(email)                     AS email_upper,
  DATE_PART('year', AGE(birth_date)) AS age
FROM employees;

-- Table aliases — essential with JOINs
SELECT u.name, o.total, p.name AS product
FROM users u
JOIN orders o     ON o.user_id  = u.id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p   ON p.id = oi.product_id;

-- Alias in ORDER BY (valid)
SELECT salary * 12 AS annual FROM employees
ORDER BY annual DESC;`
  },

  /* ── Advanced SQL ── */
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'What are Window Functions and how do they work?',
    answer: 'Window functions compute a value across a "window" of rows related to the current row WITHOUT collapsing rows like GROUP BY does. `OVER (PARTITION BY ... ORDER BY ...)` defines the window. Common functions: `ROW_NUMBER()` (unique sequential number), `RANK()` (same rank for ties, gaps after), `DENSE_RANK()` (no gaps), `LAG()`/`LEAD()` (access previous/next row), `SUM() OVER ()` (running total).',
    tip: `-- Rank employees by salary within each department
SELECT
  name,
  department,
  salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,
  RANK()       OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;

-- Running total of revenue
SELECT
  order_date,
  total,
  SUM(total) OVER (ORDER BY order_date)           AS running_total,
  LAG(total)  OVER (ORDER BY order_date)           AS prev_day,
  total - LAG(total) OVER (ORDER BY order_date)    AS day_over_day
FROM daily_sales;`
  },
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'What are CTEs (Common Table Expressions) and why use them?',
    answer: 'A CTE (`WITH name AS (SELECT ...)`) is a named temporary result set you can reference within the same query. CTEs make complex queries readable by breaking them into named steps. Multiple CTEs can be chained. `RECURSIVE` CTEs can reference themselves — useful for hierarchical/tree data (org charts, category trees, BFS).',
    tip: `-- Multiple CTEs — each builds on the previous
WITH
  monthly_sales AS (
    SELECT
      DATE_TRUNC('month', created_at) AS month,
      SUM(total) AS revenue
    FROM orders WHERE status = 'completed'
    GROUP BY 1
  ),
  ranked AS (
    SELECT month, revenue,
           RANK() OVER (ORDER BY revenue DESC) AS rank
    FROM monthly_sales
  )
SELECT * FROM ranked WHERE rank <= 3;   -- top 3 months

-- Recursive CTE — traverse an org chart
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 0 AS depth
  FROM employees WHERE manager_id IS NULL   -- CEO
  UNION ALL
  SELECT e.id, e.name, e.manager_id, o.depth + 1
  FROM employees e
  JOIN org o ON e.manager_id = o.id
)
SELECT * FROM org ORDER BY depth;`
  },
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'What are indexes and how do they improve performance?',
    answer: 'An index is a separate data structure (usually a B-tree) that lets the database find rows without scanning the whole table. A full table scan is O(n); a B-tree index lookup is O(log n). Create indexes on columns used in `WHERE`, `JOIN`, `ORDER BY`. Downsides: indexes slow down `INSERT`/`UPDATE`/`DELETE` (the index must be updated too) and consume disk space. A partial index only indexes a subset of rows.',
    tip: `-- Single column index
CREATE INDEX idx_users_email ON users(email);

-- Composite index — column ORDER matters
-- Useful for WHERE city = ? AND age > ?
CREATE INDEX idx_emp_city_age ON employees(city, age);

-- Partial index — only index active users (smaller, faster)
CREATE INDEX idx_active_users ON users(email)
WHERE status = 'active';

-- Check if your query uses an index
EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'alice@example.com';
-- Look for "Index Scan" (good) vs "Seq Scan" (full table scan)

-- List all indexes on a table (PostgreSQL)
SELECT indexname, indexdef FROM pg_indexes
WHERE tablename = 'users';`
  },
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'What are ACID properties and how do transactions work?',
    answer: 'ACID guarantees that database transactions are reliable: **Atomicity** — all operations succeed or all are rolled back (no partial updates). **Consistency** — the DB moves from one valid state to another. **Isolation** — concurrent transactions do not interfere with each other. **Durability** — committed data survives crashes. Use `BEGIN`/`COMMIT`/`ROLLBACK` to control transaction boundaries.',
    tip: `-- Transfer money safely using a transaction
BEGIN;

UPDATE accounts SET balance = balance - 500
WHERE id = 1;

UPDATE accounts SET balance = balance + 500
WHERE id = 2;

-- If either UPDATE fails, ROLLBACK undoes both
COMMIT;   -- or ROLLBACK on error

-- Savepoints — partial rollback
BEGIN;
  INSERT INTO orders (...) VALUES (...);
  SAVEPOINT after_order;
  INSERT INTO payments (...) VALUES (...);
  -- something went wrong with payment only
  ROLLBACK TO SAVEPOINT after_order;
  -- order still saved, payment rolled back
COMMIT;`
  },
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'What is database normalization (1NF, 2NF, 3NF)?',
    answer: 'Normalization organises tables to reduce redundancy and update anomalies. **1NF**: each cell has one atomic value; no repeating groups; rows are unique. **2NF**: 1NF + every non-key column depends on the ENTIRE primary key (eliminates partial dependency — only relevant when PK is composite). **3NF**: 2NF + no non-key column depends on another non-key column (eliminates transitive dependency). Most production schemas aim for 3NF; sometimes intentionally denormalise for read performance.',
    tip: `-- VIOLATES 1NF — multiple values in one cell
-- user_id | name  | phones
-- 1       | Alice | 09x, 08x   ← NOT atomic

-- 1NF fix — one value per cell
-- user_phones(user_id, phone)

-- VIOLATES 2NF (composite PK: order_id + product_id)
-- order_id | product_id | qty | product_name ← depends only on product_id
-- Fix: move product_name to products table

-- VIOLATES 3NF
-- emp_id | emp_name | dept_id | dept_name  ← dept_name depends on dept_id
-- Fix: move dept_name to departments table

-- Result of 3NF:
-- employees(id, name, dept_id FK)
-- departments(id, name)`
  },
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'What is the difference between a Stored Procedure and a Function in SQL?',
    answer: 'A **Function** returns a value (scalar, table, or set), can be used inside a SELECT statement, and should have no side effects. A **Stored Procedure** is called with `CALL`/`EXEC`, can return multiple result sets and output parameters, and can modify data and manage transactions. In PostgreSQL, functions are more commonly used. In SQL Server, both are heavily used.',
    tip: `-- PostgreSQL Function — returns a value, usable in SELECT
CREATE OR REPLACE FUNCTION get_discount(price NUMERIC, pct NUMERIC)
RETURNS NUMERIC AS $$
  SELECT ROUND(price * (1 - pct / 100), 2);
$$ LANGUAGE sql IMMUTABLE;

-- Use in query
SELECT name, price, get_discount(price, 10) AS sale_price
FROM products;

-- PostgreSQL Procedure — for complex logic / transactions
CREATE OR REPLACE PROCEDURE transfer(from_id INT, to_id INT, amt NUMERIC)
LANGUAGE plpgsql AS $$
BEGIN
  UPDATE accounts SET balance = balance - amt WHERE id = from_id;
  UPDATE accounts SET balance = balance + amt WHERE id = to_id;
END;
$$;

CALL transfer(1, 2, 500.00);`
  },
  {
    category: 'Advanced SQL', difficulty: 'Advanced',
    question: 'How do you read and use EXPLAIN / EXPLAIN ANALYZE?',
    answer: '`EXPLAIN` shows the query execution plan the database optimizer chose — without running the query. `EXPLAIN ANALYZE` actually runs the query and shows real timing and row counts. Key things to look for: **Seq Scan** (full table scan — slow on large tables), **Index Scan** (good — using an index), **Nested Loop** vs **Hash Join** vs **Merge Join** (join strategies), and high **cost** estimates. Use this to diagnose slow queries.',
    tip: `-- See the plan without running
EXPLAIN
SELECT * FROM orders WHERE user_id = 42;

-- Run it and see actual vs estimated rows + timing
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.name, COUNT(o.id)
FROM users u
JOIN orders o ON o.user_id = u.id
GROUP BY u.name
ORDER BY COUNT(o.id) DESC;

-- What to look for:
-- "Seq Scan on orders" + large rows → add an index
-- "rows=1000 actual rows=50000" → stale statistics → ANALYZE table
-- "Hash Join" → fine for large tables
-- "cost=0.00..99999" → high cost = slow

-- Update statistics so planner makes better choices
ANALYZE orders;`
  },

  /* ── GROUP BY Patterns ── */
  {
    category: 'GROUP BY Patterns', difficulty: 'Intermediate',
    question: 'What are the core GROUP BY counting patterns in SQL?',
    answer: '`COUNT(*)` counts all rows per group. `COUNT(col)` ignores NULLs. `COUNT(DISTINCT col)` counts unique values. Combine with `GROUP BY` to answer "how many X per Y" questions. Common patterns: count orders per customer, count users per country, count events per day. Always group by the non-aggregated columns in your SELECT.',
    tip: `-- Count orders per customer
SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id
ORDER BY total_orders DESC;

-- Count unique products per category
SELECT category, COUNT(DISTINCT product_id) AS unique_products
FROM order_items oi
JOIN products p ON p.id = oi.product_id
GROUP BY category;

-- Count signups per day
SELECT DATE(created_at) AS day, COUNT(*) AS signups
FROM users
GROUP BY DATE(created_at)
ORDER BY day;`
  },
  {
    category: 'GROUP BY Patterns', difficulty: 'Intermediate',
    question: 'How do you filter groups with HAVING? What are common HAVING patterns?',
    answer: '`HAVING` filters groups after aggregation — it is the WHERE clause for GROUP BY results. Use it to: find customers with more than N orders, categories with total revenue above a threshold, users who logged in on more than X days. You cannot use a SELECT alias in HAVING (in most databases) — repeat the aggregate expression. Use WHERE to pre-filter rows before grouping (cheaper), HAVING to post-filter groups.',
    tip: `-- Customers with more than 5 orders
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 5;

-- Categories with total revenue > 10,000
SELECT category, SUM(price * quantity) AS revenue
FROM order_items oi
JOIN products p ON p.id = oi.product_id
GROUP BY category
HAVING SUM(price * quantity) > 10000
ORDER BY revenue DESC;

-- Users active on at least 3 different days
SELECT user_id, COUNT(DISTINCT DATE(created_at)) AS active_days
FROM events
GROUP BY user_id
HAVING COUNT(DISTINCT DATE(created_at)) >= 3;`
  },
  {
    category: 'GROUP BY Patterns', difficulty: 'Intermediate',
    question: 'What are the key aggregation patterns with GROUP BY (SUM, AVG, MIN, MAX)?',
    answer: 'Aggregation patterns: SUM for totals (revenue, quantities), AVG for averages (rating, spend per user), MIN/MAX for ranges (earliest/latest date, cheapest/most expensive item). Combine multiple aggregates in one query for dashboards. Use `FILTER (WHERE ...)` (PostgreSQL) or CASE inside aggregate for conditional aggregation — counting or summing only rows matching a condition.',
    tip: `-- Sales summary per product
SELECT
  product_id,
  COUNT(*)                          AS total_sales,
  SUM(quantity)                     AS units_sold,
  ROUND(AVG(unit_price), 2)         AS avg_price,
  MIN(created_at)                   AS first_sale,
  MAX(created_at)                   AS last_sale
FROM order_items
GROUP BY product_id;

-- Conditional aggregation (pivot-style)
SELECT
  user_id,
  COUNT(*) FILTER (WHERE status = 'completed') AS completed,
  COUNT(*) FILTER (WHERE status = 'cancelled') AS cancelled,
  SUM(amount) FILTER (WHERE status = 'completed') AS total_revenue
FROM orders
GROUP BY user_id;`
  },

  /* ── SQL Patterns ── */
  {
    category: 'SQL Patterns', difficulty: 'Beginner',
    question: 'SQL by Role — what are the 3 SQL usage patterns across Backend, Data Engineering, and Data Analytics?',
    answer: 'SQL is used differently depending on the role. Backend engineers write CRUD queries and transactions to power APIs. Data engineers write transformation, aggregation, and pipeline queries to move and process data. Data analysts write metric queries (DAU, retention, funnels) to answer product questions. All three rely on the same SQL foundation — but with different goals, data shapes, and query complexity.',
    tip: `SQL BY ROLE
│
├── 1️⃣  Backend (Application Queries)
│   ├── CRUD Operations
│   │   ├─ Create → INSERT INTO
│   │   ├─ Read   → SELECT ... WHERE id
│   │   ├─ Update → UPDATE ... SET
│   │   └─ Delete → DELETE ... WHERE
│   ├── API Data Fetch
│   │   ├─ JOIN    → fetch relational data
│   │   ├─ WHERE   → filter resource
│   │   └─ SELECT  → specific columns
│   ├── Pagination
│   │   └─ ORDER BY created_at  LIMIT n OFFSET m
│   ├── Validation
│   │   └─ EXISTS / SELECT 1
│   └── Transactions
│       ├─ BEGIN
│       ├─ COMMIT
│       └─ ROLLBACK
│
├── 2️⃣  Data Engineer (Data Processing)
│   ├── Data Transformation
│   │   ├─ SELECT
│   │   ├─ CASE WHEN
│   │   └─ CAST / DATE functions
│   ├── Data Aggregation
│   │   ├─ GROUP BY
│   │   ├─ SUM()  AVG()  COUNT()
│   ├── Data Pipeline Join
│   │   ├─ INNER JOIN
│   │   ├─ LEFT JOIN
│   │   └─ JOIN multiple tables
│   ├── Window Functions
│   │   ├─ ROW_NUMBER()  RANK()
│   │   └─ OVER(PARTITION BY)
│   └── Deduplication
│       └─ ROW_NUMBER() + PARTITION
│
└── 3️⃣  Data Analyst (Product Analytics)
    ├── DAU
    │   └─ COUNT(DISTINCT user_id)  GROUP BY date
    ├── Retention
    │   └─ self JOIN  date + 1 day
    ├── Funnel Analysis
    │   └─ COUNT(CASE WHEN event THEN user_id)
    ├── Top Users
    │   └─ GROUP BY user  ORDER BY COUNT DESC
    └── Sessions
        └─ COUNT(DISTINCT session_id)`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'SQL Pattern 1 — Backend (Application Queries): what SQL do backend engineers write daily?',
    answer: 'Backend engineers write SQL that powers API endpoints. The core operations map to CRUD: `INSERT` (Create), `SELECT` (Read), `UPDATE`, `DELETE`. Beyond CRUD: use `JOIN` to fetch relational data in one round-trip, `WHERE id = $1` to fetch a single resource, `EXISTS`/`SELECT 1` for fast validation checks, `LIMIT`/`OFFSET` for pagination, and `BEGIN`/`COMMIT`/`ROLLBACK` to wrap multi-step writes in a transaction so they succeed or fail atomically.',
    tip: `1️⃣  BACKEND — Plain Text Overview
│
├── CRUD Operations
│   ├─ Create → INSERT INTO
│   ├─ Read   → SELECT ... WHERE id
│   ├─ Update → UPDATE ... SET
│   └─ Delete → DELETE ... WHERE
├── API Data Fetch
│   ├─ JOIN   → fetch relational data
│   ├─ WHERE  → filter resource
│   └─ SELECT → specific columns
├── Pagination   → ORDER BY created_at  LIMIT n OFFSET m
├── Validation   → EXISTS / SELECT 1
└── Transactions → BEGIN / COMMIT / ROLLBACK

─────────────────────────────────────────
BACKEND QUERY PATTERNS
│
├── CRUD Operations
│   ├─ Create  → INSERT INTO users (name, email) VALUES (\$1, \$2)
│   ├─ Read    → SELECT * FROM users WHERE id = \$1
│   ├─ Update  → UPDATE users SET name = \$1 WHERE id = \$2
│   └─ Delete  → DELETE FROM users WHERE id = \$1
│
├── API Data Fetch (relational data in one trip)
│   SELECT u.name, p.title, p.created_at
│   FROM   posts p
│   JOIN   users u ON u.id = p.user_id
│   WHERE  p.id = \$1
│
├── Pagination
│   SELECT * FROM posts
│   WHERE  user_id = \$1
│   ORDER BY created_at DESC
│   LIMIT  10 OFFSET 20
│
├── Validation (check existence before insert)
│   SELECT EXISTS (
│     SELECT 1 FROM users WHERE email = \$1
│   ) AS email_taken
│
└── Transactions (multi-step writes)
    BEGIN;
      UPDATE accounts SET balance = balance - 100 WHERE id = \$1;
      UPDATE accounts SET balance = balance + 100 WHERE id = \$2;
    COMMIT;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'SQL Pattern 2 — Data Engineer (Data Processing): what SQL do data engineers write?',
    answer: 'Data engineers build pipelines that transform, aggregate, and move data. Key patterns: `CASE WHEN` + `CAST` + date functions for data transformation, `GROUP BY` with `SUM/AVG/COUNT` for aggregation, multi-table `JOIN` for pipeline enrichment, window functions (`ROW_NUMBER`, `RANK`, `OVER PARTITION BY`) for ranking and analytics, and `ROW_NUMBER() OVER (PARTITION BY key)` for deduplication before loading into a data warehouse.',
    tip: `2️⃣  DATA ENGINEER — Plain Text Overview
│
├── Data Transformation  → SELECT + CASE WHEN + CAST / DATE functions
├── Data Aggregation     → GROUP BY + SUM() AVG() COUNT()
├── Data Pipeline Join   → INNER JOIN / LEFT JOIN / multi-table JOIN
├── Window Functions     → ROW_NUMBER() / RANK() OVER(PARTITION BY)
└── Deduplication        → ROW_NUMBER() + PARTITION BY key

─────────────────────────────────────────
DATA ENGINEER QUERY PATTERNS
│
├── Data Transformation
│   SELECT
│     user_id,
│     CASE WHEN age < 18 THEN 'minor' ELSE 'adult' END AS segment,
│     CAST(revenue AS NUMERIC(10,2))                    AS revenue,
│     DATE_TRUNC('month', created_at)                   AS month
│   FROM raw_events
│
├── Data Aggregation
│   SELECT region, DATE_TRUNC('day', created_at) AS day,
│     COUNT(*)       AS events,
│     SUM(revenue)   AS total_revenue,
│     AVG(duration)  AS avg_duration
│   FROM events
│   GROUP BY region, DATE_TRUNC('day', created_at)
│
├── Pipeline Join (enrich facts with dimension tables)
│   SELECT e.*, u.country, p.category
│   FROM   events e
│   JOIN   users    u ON u.id = e.user_id
│   LEFT JOIN products p ON p.id = e.product_id
│
├── Window Functions
│   SELECT *,
│     ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn,
│     RANK()       OVER (PARTITION BY region  ORDER BY revenue DESC)    AS rnk
│   FROM orders
│
└── Deduplication (keep latest row per key)
    WITH deduped AS (
      SELECT *, ROW_NUMBER() OVER (
        PARTITION BY user_id ORDER BY updated_at DESC
      ) AS rn
      FROM users_raw
    )
    SELECT * FROM deduped WHERE rn = 1`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'SQL Pattern 3 — Data Analyst (Product Analytics): what SQL do analysts write?',
    answer: 'Data analysts answer product questions with SQL. Core metrics: DAU with `COUNT(DISTINCT user_id) GROUP BY date`, Day-1 retention via a self-join matching signup-day users to the next day, funnel analysis using `COUNT(CASE WHEN event = X THEN user_id END)` per step, top users with `GROUP BY user ORDER BY COUNT DESC`, and sessions via `COUNT(DISTINCT session_id)`. The common thread: aggregate and filter event data to answer "how many users did X?"',
    tip: `3️⃣  DATA ANALYST — Plain Text Overview
│
├── DAU           → COUNT(DISTINCT user_id)  GROUP BY date
├── Retention     → self JOIN  date + 1 day
├── Funnel        → COUNT(CASE WHEN event THEN user_id)
├── Top Users     → GROUP BY user  ORDER BY COUNT DESC
└── Sessions      → COUNT(DISTINCT session_id)

─────────────────────────────────────────
DATA ANALYST QUERY PATTERNS
│
├── DAU (Daily Active Users)
│   SELECT DATE(created_at) AS day,
│     COUNT(DISTINCT user_id) AS dau
│   FROM events
│   GROUP BY DATE(created_at)
│   ORDER BY day
│
├── Retention (Day-1 retention rate)
│   SELECT
│     COUNT(DISTINCT d0.user_id)                    AS cohort,
│     COUNT(DISTINCT d1.user_id)                    AS retained,
│     ROUND(COUNT(DISTINCT d1.user_id) * 100.0
│           / COUNT(DISTINCT d0.user_id), 1)        AS retention_pct
│   FROM   events d0
│   LEFT JOIN events d1
│     ON  d1.user_id = d0.user_id
│     AND DATE(d1.created_at) = DATE(d0.created_at) + 1
│   WHERE d0.event = 'signup'
│
├── Funnel Analysis
│   SELECT
│     COUNT(CASE WHEN event = 'page_view'   THEN user_id END) AS step1_view,
│     COUNT(CASE WHEN event = 'add_to_cart' THEN user_id END) AS step2_cart,
│     COUNT(CASE WHEN event = 'purchase'    THEN user_id END) AS step3_buy
│   FROM events
│
├── Top Users
│   SELECT user_id, COUNT(*) AS actions
│   FROM events
│   GROUP BY user_id
│   ORDER BY actions DESC
│   LIMIT 10
│
└── Sessions per Day
    SELECT DATE(created_at) AS day,
      COUNT(DISTINCT session_id) AS sessions,
      COUNT(DISTINCT user_id)    AS unique_users
    FROM events
    GROUP BY DATE(created_at)`
  },
];

/* ═══════════════════════════════════════════════════════════
   DATABASE — 42 cards across 9 categories
═══════════════════════════════════════════════════════════ */
const DATABASE_CARDS = [

  /* ── Overview ── */
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'Database Learning Mindmap — what are the 7 core areas and key learning paths?',
    answer: '7 core areas: 1) Fundamentals — data models, SQL basics, normalization, keys, indexes. 2) Core Concepts — joins, aggregation, transactions (ACID), views, stored procedures. 3) Daily Tools — CRUD ops, constraints, indexing, query plans, security, backup. 4) Advanced Topics — optimization, concurrency, partitioning, replication, CAP theorem. 5) Database Types — relational, document, key-value, columnar, graph, time-series, realtime. 6) Building for Scale — observability (instrumentation, monitoring, telemetry) and mitigation strategies. 7) Ecosystem — cloud DBs, big data, analytics, DevOps, real-world use.',
    tip: `DATABASES
│
├─ 1. Fundamentals
│   ├─ Data Models     relational · document · key-value · graph · time-series
│   ├─ SQL Basics      SELECT · FROM · WHERE · ORDER BY · LIMIT
│   ├─ Normalization   1NF · 2NF · 3NF · BCNF
│   ├─ Keys            primary · foreign · unique · composite
│   └─ Indexes         clustered · non-clustered · composite
│
├─ 2. Core Concepts
│   ├─ Joins           INNER · LEFT · RIGHT · FULL · CROSS
│   ├─ Aggregation     COUNT · SUM · AVG · MIN · MAX · GROUP BY · HAVING
│   ├─ Transactions    ACID properties · COMMIT · ROLLBACK
│   ├─ Views           virtual tables · security · abstraction
│   └─ Stored Procs    procedures · triggers · functions
│
├─ 3. Daily Tools
│   ├─ CRUD Ops        INSERT · SELECT · UPDATE · DELETE
│   ├─ Constraints     NOT NULL · CHECK · DEFAULT
│   ├─ Indexing        performance tuning · covering indexes
│   ├─ Query Plans     EXPLAIN · optimizer · cost-based planning
│   ├─ Security        roles · privileges · GRANT/REVOKE
│   └─ Backup/Restore  dump · replication · snapshots
│
├─ 4. Advanced Topics
│   ├─ Optimization    query tuning · denormalization · caching
│   ├─ Concurrency     isolation levels · locks · deadlocks
│   ├─ Partitioning    horizontal · vertical · sharding
│   ├─ Replication     master-slave · multi-master · eventual consistency
│   └─ CAP Theorem     consistency · availability · partition tolerance
│
├─ 5. Database Types
│   ├─ Relational      MySQL · PostgreSQL · Oracle · SQL Server
│   ├─ Document        MongoDB · CouchDB
│   ├─ Key-Value       Redis · DynamoDB
│   ├─ Columnar        Cassandra · ClickHouse · ScyllaDB
│   ├─ Graph           Neo4j · AWS Neptune · DGraph
│   ├─ Time-series     InfluxDB · TimescaleDB
│   └─ Realtime        Firebase · RethinkDB
│
├─ 6. Building for Scale
│   ├─ Observability   instrumentation · monitoring · telemetry
│   └─ Mitigation      graceful degradation · throttling · backpressure
│                      loadshifting · circuit breaker
│
└─ 7. Ecosystem
    ├─ Cloud DBs       AWS RDS · Aurora · Google Cloud Spanner · Azure SQL
    ├─ Big Data        Hadoop · Spark SQL · Hive
    ├─ Analytics       OLAP cubes · data warehouses · ETL pipelines
    ├─ DevOps          migrations · schema versioning · CI/CD integration
    └─ Real-world      e-commerce · banking · social networks · IoT

LEARNING PATHS
SQL/Relational:    Fundamentals → Core Concepts → CRUD → Transactions → Optimization → Security
NoSQL Focus:       Fundamentals → Data Models → Document/KV/Graph → Partitioning → Replication → CAP
Scale/Reliability: Core DBs → Observability → Mitigation → Cloud DBs → Big Data → CI/CD

INTERVIEW CORE
Normalization vs Denormalization: trade-offs between reducing redundancy and optimizing queries
Indexes:           how they improve read performance, when they hurt (write-heavy workloads)
Transactions:      ACID properties and isolation levels
Joins:             patterns for combining data across tables
NoSQL trade-offs:  flexibility vs consistency, CAP theorem
Scaling:           observability (monitoring, telemetry) and mitigation (throttling, circuit breakers)`
  },

  /* ── Fundamentals ── */
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the main database data models and when to use each?',
    answer: '**Relational**: structured data in tables with relationships — best for complex queries, transactions, consistency (MySQL, PostgreSQL). **Document**: JSON-like nested documents — best for flexible, hierarchical data (MongoDB, CouchDB). **Key-Value**: simple key → value lookups — best for caching, sessions (Redis, DynamoDB). **Graph**: nodes and edges — best for social networks, recommendations (Neo4j). **Time-series**: optimized for time-stamped data — best for metrics, IoT (InfluxDB). Choose based on data shape, query patterns, and consistency needs.',
    tip: `// Data model comparison

// Relational — structured, relationships enforced
// users table:  id | name  | email
// orders table: id | user_id | total | created_at
// JOIN to query across tables

// Document — flexible, nested
// { id: 1, name: 'Alice', orders: [{ total: 50 }, { total: 30 }] }
// Good when data is read/written together

// Key-Value — ultra fast, simple
// SET session:abc123  '{"userId":1,"role":"admin"}'
// GET session:abc123
// Use for: cache · sessions · feature flags

// Graph — relationships are first-class
// (Alice)-[:FOLLOWS]->(Bob)-[:FOLLOWS]->(Carol)
// Traverse: find all mutual friends in 2 hops

// Time-series — append-only, time index
// cpu_usage,host=web01 value=72.3 1700000000
// Optimized for: range queries by time, downsampling

// Choice guide:
// Complex queries + joins    → Relational (PostgreSQL)
// Flexible / hierarchical    → Document (MongoDB)
// Cache / fast lookup        → Key-Value (Redis)
// Connected data             → Graph (Neo4j)
// Metrics / IoT              → Time-series (InfluxDB)`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the core SQL query clauses? (SELECT, WHERE, ORDER BY, LIMIT)',
    answer: 'SQL query structure: `SELECT` (which columns) → `FROM` (which table) → `WHERE` (filter rows) → `GROUP BY` (aggregate) → `HAVING` (filter groups) → `ORDER BY` (sort) → `LIMIT` (max rows). This is the **written order**. The **execution order** is different: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Always filter with WHERE before aggregating with GROUP BY.',
    tip: `-- Basic query anatomy
SELECT name, email, age          -- 2. pick columns
FROM   users                     -- 1. pick table
WHERE  age > 18                  -- 3. filter rows
  AND  status = 'active'
ORDER BY name ASC                -- 4. sort
LIMIT  10 OFFSET 20;             -- 5. paginate (page 3)

-- Execution order (different from written order!)
-- FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT

-- Filtering with conditions
SELECT * FROM products
WHERE  price BETWEEN 10 AND 100
  AND  category IN ('books', 'electronics')
  AND  name LIKE '%pro%';        -- % = wildcard

-- Aliases
SELECT u.name AS customer, o.total AS order_total
FROM   users u
JOIN   orders o ON u.id = o.user_id;

-- Distinct values
SELECT DISTINCT country FROM customers;

-- NULL handling
SELECT * FROM users WHERE phone IS NULL;
SELECT COALESCE(phone, 'N/A') FROM users;`
  },
  {
    category: 'Fundamentals', difficulty: 'Intermediate',
    question: 'What is database normalization? (1NF, 2NF, 3NF, BCNF)',
    answer: '**Normalization** removes data redundancy and prevents anomalies (update, insert, delete). **1NF**: atomic values, no repeating groups — each column holds one value. **2NF**: no partial dependencies — non-key columns depend on the whole primary key (applies to composite keys). **3NF**: no transitive dependencies — non-key columns depend only on the primary key, not on other non-key columns. **BCNF**: stricter 3NF — every determinant must be a candidate key. Trade-off: higher normal forms = less redundancy but more JOINs.',
    tip: `-- Violation of 1NF: repeating groups
-- BAD: order_id | items = 'book,pen,ruler'  (comma-separated)
-- GOOD: separate order_items table
-- order_id | item_name | quantity

-- Violation of 2NF (composite PK: student_id + course_id):
-- BAD: student_id | course_id | student_name | grade
--      student_name depends only on student_id (partial dependency)
-- GOOD: students(student_id, student_name)
--        enrollments(student_id, course_id, grade)

-- Violation of 3NF:
-- BAD: order_id | customer_id | customer_city
--      customer_city depends on customer_id, not order_id (transitive)
-- GOOD: orders(order_id, customer_id)
--        customers(customer_id, customer_city)

-- BCNF example:
-- Course(student, subject, teacher)
-- If teacher determines subject, teacher is a determinant
-- but not a candidate key → BCNF violation
-- Fix: Teacher(teacher_id, subject) + Enrollment(student, teacher_id)

-- Rule of thumb
-- 1NF: no repeating groups
-- 2NF: + no partial dependencies
-- 3NF: + no transitive dependencies
-- BCNF: + every determinant is a candidate key`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the different types of database keys?',
    answer: '**Primary Key**: uniquely identifies each row — no NULL, no duplicates. One per table. **Foreign Key**: references a primary key in another table — enforces referential integrity. **Unique Key**: like PK but allows one NULL, can have multiple per table. **Composite Key**: primary key made of two or more columns. **Candidate Key**: any column(s) that could be the PK. **Surrogate Key**: system-generated ID (auto-increment, UUID) — no business meaning. **Natural Key**: real-world value used as PK (email, SSN) — avoid in practice.',
    tip: `CREATE TABLE users (
    user_id   INT          PRIMARY KEY,   -- surrogate PK (auto)
    email     VARCHAR(255) UNIQUE,        -- unique key (one NULL allowed)
    ssn       CHAR(11)     UNIQUE,        -- another unique key
    name      VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id   INT PRIMARY KEY,
    user_id    INT NOT NULL,
    product_id INT NOT NULL,
    quantity   INT,

    -- Foreign key — referential integrity
    FOREIGN KEY (user_id) REFERENCES users(user_id)
        ON DELETE CASCADE,               -- delete orders when user deleted
    FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE RESTRICT,              -- prevent deletion if orders exist

    -- Composite unique constraint
    UNIQUE (user_id, product_id)         -- one order per user per product
);

-- Composite primary key
CREATE TABLE enrollment (
    student_id INT,
    course_id  INT,
    grade      CHAR(1),
    PRIMARY KEY (student_id, course_id)  -- composite PK
);`
  },
  {
    category: 'Fundamentals', difficulty: 'Intermediate',
    question: 'How do database indexes work? (clustered, non-clustered, composite)',
    answer: 'An index is a **separate data structure** (usually B-Tree) that stores sorted column values with pointers to row locations — like a book index. **Clustered index**: data rows physically stored in index order — one per table, usually the PK. **Non-clustered index**: separate structure pointing to rows — multiple allowed. **Composite index**: covers multiple columns — follows left-prefix rule. Indexes speed up reads but slow down writes (every INSERT/UPDATE/DELETE must update all indexes). Over-indexing is a common mistake.',
    tip: `-- Create indexes
CREATE INDEX idx_users_email    ON users(email);           -- non-clustered
CREATE INDEX idx_orders_date    ON orders(created_at);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);  -- composite

-- Left-prefix rule for composite index (user_id, created_at)
SELECT * FROM orders WHERE user_id = 5;               -- USES index
SELECT * FROM orders WHERE user_id = 5 AND created_at > '2024-01-01';  -- USES index
SELECT * FROM orders WHERE created_at > '2024-01-01'; -- SKIPS index (no user_id)

-- Covering index — index contains all needed columns (no table lookup)
CREATE INDEX idx_cover ON orders(user_id, status, total);
SELECT status, total FROM orders WHERE user_id = 5;   -- index-only scan

-- When indexes help
-- ✓ Columns in WHERE, JOIN ON, ORDER BY
-- ✓ High-cardinality columns (many distinct values)
-- ✓ Read-heavy tables

-- When indexes hurt
-- ✗ Columns with few distinct values (gender, boolean)
-- ✗ Write-heavy tables (every write updates indexes)
-- ✗ Small tables (full scan is faster)

-- Check if index is used
EXPLAIN SELECT * FROM orders WHERE user_id = 5;`
  },

  /* ── Core Concepts ── */
  {
    category: 'Core Concepts', difficulty: 'Beginner',
    question: 'What are SQL JOIN types and when to use each?',
    answer: '**INNER JOIN**: only rows with matching values in both tables. **LEFT JOIN**: all rows from left + matching right (NULL where no match). **RIGHT JOIN**: all rows from right + matching left. **FULL OUTER JOIN**: all rows from both sides, NULLs where no match. **CROSS JOIN**: cartesian product — every row from A × every row from B. **SELF JOIN**: join a table to itself (hierarchy, manager relationships). Most common in practice: INNER and LEFT.',
    tip: `-- Sample data
-- users: (1,Alice), (2,Bob), (3,Carol)
-- orders: (1,1,$50), (2,1,$30), (3,4,$20)  -- user_id 4 doesn't exist

-- INNER JOIN — only matched rows
SELECT u.name, o.total
FROM users u INNER JOIN orders o ON u.id = o.user_id;
-- Alice $50 · Alice $30   (Bob, Carol excluded; order with user_id=4 excluded)

-- LEFT JOIN — all users, even without orders
SELECT u.name, o.total
FROM users u LEFT JOIN orders o ON u.id = o.user_id;
-- Alice $50 · Alice $30 · Bob NULL · Carol NULL

-- Find users with NO orders
SELECT u.name FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;            -- Bob · Carol

-- FULL OUTER JOIN (PostgreSQL/SQL Server)
SELECT u.name, o.total
FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id;
-- Includes orphan orders (user_id=4 → NULL name)

-- SELF JOIN — employee/manager hierarchy
SELECT e.name AS employee, m.name AS manager
FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;`
  },
  {
    category: 'Core Concepts', difficulty: 'Beginner',
    question: 'How do SQL aggregation functions and GROUP BY work?',
    answer: '**Aggregate functions** calculate a single value from a set of rows: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. **GROUP BY** groups rows sharing the same value into a single summary row — aggregation applies to each group. **HAVING** filters groups (like WHERE but after aggregation). Rule: every column in SELECT must either be in GROUP BY or wrapped in an aggregate function.',
    tip: `-- Basic aggregates
SELECT COUNT(*)       FROM orders;          -- total orders
SELECT COUNT(DISTINCT user_id) FROM orders; -- unique customers
SELECT SUM(total)     FROM orders;          -- revenue
SELECT AVG(total)     FROM orders;          -- avg order value
SELECT MIN(created_at) FROM orders;         -- first order date

-- GROUP BY — aggregate per group
SELECT user_id,
       COUNT(*)   AS order_count,
       SUM(total) AS total_spent
FROM   orders
GROUP BY user_id
ORDER BY total_spent DESC;

-- HAVING — filter groups (WHERE filters rows, HAVING filters groups)
SELECT user_id, COUNT(*) AS cnt, SUM(total) AS spent
FROM   orders
GROUP BY user_id
HAVING SUM(total) > 100    -- only high-value customers
ORDER BY spent DESC;

-- Combining WHERE + GROUP BY + HAVING
SELECT category, AVG(price) AS avg_price
FROM   products
WHERE  status = 'active'   -- filter rows first
GROUP BY category
HAVING AVG(price) > 50     -- then filter groups
ORDER BY avg_price DESC;`
  },
  {
    category: 'Core Concepts', difficulty: 'Intermediate',
    question: 'What are database transactions and ACID properties?',
    answer: '**Transaction**: a group of operations treated as a single unit — all succeed or all fail. **ACID**: **A**tomicity (all or nothing), **C**onsistency (data stays valid), **I**solation (concurrent transactions don\'t interfere), **D**urability (committed data survives crashes). Use `BEGIN`/`START TRANSACTION`, `COMMIT` (save), `ROLLBACK` (undo). Transactions are essential for financial operations, inventory updates, or any multi-step data change.',
    tip: `-- Bank transfer — must be atomic (both or neither)
BEGIN;

UPDATE accounts SET balance = balance - 500
WHERE  account_id = 1;         -- debit sender

UPDATE accounts SET balance = balance + 500
WHERE  account_id = 2;         -- credit receiver

-- If anything fails between BEGIN and COMMIT:
ROLLBACK;                       -- undo both changes

COMMIT;                         -- both changes saved permanently

-- ACID breakdown:
-- Atomicity:   if UPDATE 2 fails, UPDATE 1 is rolled back
-- Consistency: balance can never go negative (CHECK constraint)
-- Isolation:   concurrent transfer doesn't see partial state
-- Durability:  after COMMIT, survives a server crash

-- Savepoints — partial rollback
BEGIN;
INSERT INTO orders VALUES (1, 100);
SAVEPOINT after_order;
INSERT INTO payments VALUES (1, 100);  -- this fails
ROLLBACK TO after_order;               -- only undo payment
COMMIT;                                -- order still saved`
  },
  {
    category: 'Core Concepts', difficulty: 'Intermediate',
    question: 'What are database views and stored procedures?',
    answer: '**View**: a named SQL query stored in the DB — acts like a virtual table. Benefits: simplify complex queries, enforce security (hide sensitive columns), provide abstraction (change underlying table without changing queries). **Materialized view**: stores query results physically — faster but must be refreshed. **Stored Procedure**: SQL code saved in the DB and executed by name — reduces network round trips, centralizes business logic. **Trigger**: automatic stored procedure that fires on INSERT/UPDATE/DELETE.',
    tip: `-- View — virtual table
CREATE VIEW active_customers AS
SELECT id, name, email, total_orders
FROM   users u
JOIN   (SELECT user_id, COUNT(*) AS total_orders FROM orders GROUP BY user_id) o
       ON u.id = o.user_id
WHERE  u.status = 'active';

SELECT * FROM active_customers WHERE total_orders > 5;  -- use like a table
DROP VIEW active_customers;

-- Security: expose only non-sensitive columns
CREATE VIEW public_users AS
SELECT id, name, created_at FROM users;  -- hides email, password_hash

-- Stored procedure (MySQL syntax)
DELIMITER //
CREATE PROCEDURE TransferFunds(
    IN from_id INT, IN to_id INT, IN amount DECIMAL(10,2)
)
BEGIN
    START TRANSACTION;
    UPDATE accounts SET balance = balance - amount WHERE id = from_id;
    UPDATE accounts SET balance = balance + amount WHERE id = to_id;
    COMMIT;
END //
DELIMITER ;

CALL TransferFunds(1, 2, 500.00);

-- Trigger — auto-run on change
CREATE TRIGGER log_price_change
AFTER UPDATE ON products
FOR EACH ROW
    INSERT INTO audit_log(product_id, old_price, new_price, changed_at)
    VALUES (NEW.id, OLD.price, NEW.price, NOW());`
  },

  /* ── Daily Tools ── */
  {
    category: 'Daily Tools', difficulty: 'Beginner',
    question: 'How do you perform CRUD operations in SQL?',
    answer: '**CRUD** = Create, Read, Update, Delete. **INSERT**: add new rows. **SELECT**: query rows (can filter, sort, join). **UPDATE**: modify existing rows — always use WHERE or you update every row. **DELETE**: remove rows — always use WHERE or you delete everything. Use transactions for multi-step operations. In production: soft delete (set `deleted_at`) instead of hard DELETE to preserve history.',
    tip: `-- CREATE (INSERT)
INSERT INTO users (name, email, age) VALUES ('Alice', 'alice@example.com', 30);

-- Multiple rows at once
INSERT INTO products (name, price, category) VALUES
    ('Laptop',  999.99, 'electronics'),
    ('Mouse',    29.99, 'electronics'),
    ('Notebook',  4.99, 'stationery');

-- READ (SELECT)
SELECT id, name, email FROM users WHERE age > 18 ORDER BY name LIMIT 10;

-- UPDATE — ALWAYS use WHERE
UPDATE users SET email = 'new@example.com', updated_at = NOW()
WHERE  id = 42;

-- UPDATE multiple rows
UPDATE products SET price = price * 0.9   -- 10% discount
WHERE  category = 'electronics';

-- DELETE — ALWAYS use WHERE
DELETE FROM users WHERE id = 42;

-- Soft delete (preferred in production)
ALTER TABLE users ADD COLUMN deleted_at TIMESTAMP NULL;
UPDATE users SET deleted_at = NOW() WHERE id = 42;
SELECT * FROM users WHERE deleted_at IS NULL;   -- active users only

-- Upsert (insert or update if exists)
INSERT INTO settings (user_id, theme) VALUES (1, 'dark')
ON DUPLICATE KEY UPDATE theme = 'dark';         -- MySQL
-- ON CONFLICT (user_id) DO UPDATE SET theme = 'dark';  -- PostgreSQL`
  },
  {
    category: 'Daily Tools', difficulty: 'Beginner',
    question: 'What are SQL constraints and how do they enforce data integrity?',
    answer: 'Constraints are rules the DB enforces on column values, preventing invalid data from being inserted. **NOT NULL**: column must have a value. **UNIQUE**: no duplicate values (one NULL allowed). **PRIMARY KEY**: NOT NULL + UNIQUE, identifies each row. **FOREIGN KEY**: value must exist in referenced table. **CHECK**: custom rule (age > 0). **DEFAULT**: value used when not provided. Define at column level or table level. Constraints fail fast at the DB layer — better than catching in application code.',
    tip: `CREATE TABLE employees (
    id         INT           PRIMARY KEY,               -- NOT NULL + UNIQUE
    name       VARCHAR(100)  NOT NULL,                  -- required
    email      VARCHAR(255)  UNIQUE NOT NULL,           -- unique + required
    age        INT           CHECK (age >= 18 AND age <= 100),
    salary     DECIMAL(10,2) CHECK (salary > 0),
    status     VARCHAR(20)   DEFAULT 'active',          -- default value
    role       VARCHAR(20)   DEFAULT 'employee'
                             CHECK (role IN ('employee','manager','admin')),
    dept_id    INT,
    manager_id INT,

    FOREIGN KEY (dept_id)    REFERENCES departments(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id),  -- self-reference
    CONSTRAINT chk_salary_range CHECK (salary BETWEEN 1000 AND 500000)
);

-- Adding constraints after table creation
ALTER TABLE users ADD CONSTRAINT chk_age CHECK (age >= 0);
ALTER TABLE orders ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);

-- Remove constraint
ALTER TABLE users DROP CONSTRAINT chk_age;

-- Disable temporarily (use with care!)
SET FOREIGN_KEY_CHECKS = 0;  -- MySQL
ALTER TABLE orders DISABLE TRIGGER ALL;  -- PostgreSQL`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you read and use query execution plans? (EXPLAIN)',
    answer: '`EXPLAIN` shows how the database executes a query — what indexes it uses, how many rows it scans, and the join order. **Key columns**: `type` (access method — ALL is worst/full scan, ref/range are better, const is best), `rows` (estimated rows scanned), `key` (index used), `Extra` (Using filesort, Using temporary = slow). Use `EXPLAIN ANALYZE` in PostgreSQL for actual execution stats. Always check slow queries with EXPLAIN before adding indexes.',
    tip: `-- MySQL EXPLAIN
EXPLAIN SELECT * FROM orders WHERE user_id = 5;
-- type:  ref     (good — using index)
-- key:   idx_orders_user_id
-- rows:  12      (estimated rows scanned)
-- Extra: Using index condition

-- Full table scan — BAD
EXPLAIN SELECT * FROM orders WHERE YEAR(created_at) = 2024;
-- type:  ALL     (bad — no index used, function wraps column)
-- rows:  500000  (scanning all rows)
-- Fix: WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01'

-- PostgreSQL EXPLAIN ANALYZE (actual runtime)
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) AS orders
FROM   users u LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;
-- Shows: actual time, rows, loops, memory usage

-- Common problem patterns
-- 'Using filesort'     → add index on ORDER BY column
-- 'Using temporary'    → complex GROUP BY/DISTINCT — may need index
-- 'Full table scan'    → missing index or index not used
-- 'Using index'        → covering index — very fast

-- Force index (last resort)
SELECT * FROM orders USE INDEX (idx_user_date)
WHERE user_id = 5 AND created_at > '2024-01-01';`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you manage database security? (roles, privileges, GRANT/REVOKE)',
    answer: 'Apply **principle of least privilege** — grant only what each user or app needs. Create **roles** (groups of privileges) and assign users to roles. Use separate DB users for: read-only reports, app (read+write), admin (DDL). **GRANT** gives permissions, **REVOKE** removes them. Privileges: SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALL PRIVILEGES. Never use the root/superuser account for application connections.',
    tip: `-- Create users
CREATE USER 'app_user'@'%'     IDENTIFIED BY 'strongpassword';  -- MySQL
CREATE USER 'report_user'@'%'  IDENTIFIED BY 'strongpassword';

-- Grant specific privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON mydb.* TO 'app_user'@'%';
GRANT SELECT ON mydb.* TO 'report_user'@'%';  -- read-only

-- Grant on specific table only
GRANT SELECT ON mydb.products TO 'report_user'@'%';

-- PostgreSQL — roles
CREATE ROLE readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly;
CREATE USER report_user WITH PASSWORD 'pass';
GRANT readonly TO report_user;

-- Revoke permissions
REVOKE DELETE ON mydb.orders FROM 'app_user'@'%';
REVOKE ALL PRIVILEGES ON mydb.* FROM 'old_user'@'%';

-- View grants
SHOW GRANTS FOR 'app_user'@'%';              -- MySQL
SELECT * FROM information_schema.role_table_grants WHERE grantee = 'app_user';

-- Row-level security (PostgreSQL)
CREATE POLICY user_isolation ON orders
    USING (user_id = current_setting('app.user_id')::INT);
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you back up and restore a database?',
    answer: '**Logical backup**: export SQL statements with `mysqldump` / `pg_dump` — portable but slow for large DBs. **Physical backup**: copy data files directly — faster, size-efficient. **Point-in-time recovery (PITR)**: combine full backup + binary/WAL logs to restore to any moment. **Replication**: real-time copy to a replica — for HA, not a backup (replica reflects all errors too). Backup strategy: full backup weekly + incremental daily + test restores quarterly.',
    tip: `# MySQL — logical backup
mysqldump -u root -p mydb > backup.sql           # full DB
mysqldump -u root -p mydb users orders > partial.sql  # specific tables
mysqldump --all-databases > all_dbs.sql

# Restore
mysql -u root -p mydb < backup.sql

# PostgreSQL — logical backup
pg_dump -U postgres mydb > backup.sql
pg_dump -U postgres -Fc mydb > backup.dump      # custom format (compressed)

# Restore PostgreSQL
psql -U postgres mydb < backup.sql
pg_restore -U postgres -d mydb backup.dump

# Automated backup script (cron)
# 0 2 * * * mysqldump -u root -pPASS mydb | gzip > /backups/db_\$(date +%F).sql.gz
# Find and delete backups older than 30 days:
# find /backups -name '*.sql.gz' -mtime +30 -delete

# Physical backup with xtrabackup (MySQL)
# xtrabackup --backup --target-dir=/backups/full

# Test restore regularly!
# A backup you haven't tested is not a backup.`
  },

  /* ── Advanced Topics ── */
  {
    category: 'Advanced Topics', difficulty: 'Intermediate',
    question: 'How do you optimize slow database queries?',
    answer: '**Step 1**: Identify slow queries — `SHOW SLOW QUERY LOG` (MySQL) or `pg_stat_statements` (PostgreSQL). **Step 2**: `EXPLAIN` the query to see the plan. **Step 3**: Add missing indexes on WHERE/JOIN/ORDER BY columns. **Step 4**: Rewrite — avoid `SELECT *`, avoid functions on indexed columns, avoid subqueries in WHERE. **Step 5**: Denormalize if joins are too expensive (duplicate data for read performance). **Step 6**: Cache results in Redis. **Step 7**: Partition large tables.',
    tip: `-- Common slow query patterns and fixes

-- BAD: function on indexed column disables index
SELECT * FROM orders WHERE YEAR(created_at) = 2024;
-- GOOD: use range instead
SELECT * FROM orders WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01';

-- BAD: wildcard at start disables index
SELECT * FROM users WHERE name LIKE '%alice%';
-- GOOD: use full-text search or prefix match
SELECT * FROM users WHERE name LIKE 'alice%';

-- BAD: SELECT * fetches unnecessary columns
SELECT * FROM orders WHERE user_id = 5;
-- GOOD: select only needed columns
SELECT id, total, status FROM orders WHERE user_id = 5;

-- BAD: N+1 problem — one query per row
-- users.forEach(u => db.query('SELECT * FROM orders WHERE user_id = ?', u.id))
-- GOOD: single JOIN or IN clause
SELECT u.id, u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;

-- Slow log analysis (MySQL)
SET GLOBAL slow_query_log = ON;
SET GLOBAL long_query_time = 1;  -- log queries > 1 second
-- Then: mysqldumpslow -s t /var/log/mysql/slow.log`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'What are transaction isolation levels and how do they handle concurrency?',
    answer: 'Isolation levels control what concurrent transactions can see. **Read Uncommitted**: see uncommitted changes (dirty reads). **Read Committed** (default in PostgreSQL): only see committed data — prevents dirty reads. **Repeatable Read** (default in MySQL): same rows every read within transaction — prevents phantom reads in MySQL. **Serializable**: transactions run as if sequential — maximum isolation, lowest concurrency. Problems: **dirty read**, **non-repeatable read**, **phantom read**, **lost update**.',
    tip: `-- Concurrency problems demonstrated

-- 1. Dirty read (Read Uncommitted only)
-- T1: UPDATE balance = 900 (not yet committed)
-- T2: SELECT balance → reads 900 (dirty!)
-- T1: ROLLBACK → balance is still 1000

-- 2. Non-repeatable read
-- T1: SELECT balance → 1000
-- T2: UPDATE balance = 900; COMMIT
-- T1: SELECT balance again → 900 (changed!)

-- 3. Phantom read
-- T1: SELECT COUNT(*) FROM orders WHERE user_id=1 → 5
-- T2: INSERT new order for user 1; COMMIT
-- T1: SELECT COUNT(*) → 6 (phantom row appeared!)

-- 4. Lost update
-- T1: read balance=1000, T2: read balance=1000
-- T1: write 900, T2: write 800 → T1's update is lost

-- Set isolation level
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN;
SELECT * FROM accounts WHERE id = 1;
-- ... other operations ...
COMMIT;

-- Levels and what they prevent:
-- READ UNCOMMITTED: nothing
-- READ COMMITTED:   dirty reads
-- REPEATABLE READ:  dirty + non-repeatable reads
-- SERIALIZABLE:     all above + phantom reads`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'What are database partitioning and sharding strategies?',
    answer: '**Partitioning**: split a large table into smaller pieces within one DB server. **Horizontal (row) partitioning**: divide by rows — range (by date), list (by region), hash (by ID). **Vertical partitioning**: split columns into separate tables. **Sharding**: distribute data across multiple servers — each shard holds a subset. Shard key choice is critical — bad key causes hot spots. Sharding adds complexity: cross-shard queries, transactions, and joins become hard.',
    tip: `-- Range partitioning (PostgreSQL) — by date
CREATE TABLE orders (
    id         INT,
    user_id    INT,
    created_at DATE NOT NULL
) PARTITION BY RANGE (created_at);

CREATE TABLE orders_2023 PARTITION OF orders
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');
CREATE TABLE orders_2024 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- MySQL list partitioning — by region
CREATE TABLE sales (id INT, region VARCHAR(20), amount DECIMAL)
PARTITION BY LIST COLUMNS(region) (
    PARTITION p_us   VALUES IN ('US', 'CA'),
    PARTITION p_eu   VALUES IN ('UK', 'DE', 'FR'),
    PARTITION p_asia VALUES IN ('JP', 'CN', 'IN')
);

-- Hash partitioning — even distribution
CREATE TABLE users (id INT, name VARCHAR(100))
PARTITION BY HASH(id) PARTITIONS 4;

-- Sharding (application-level) — conceptual
-- Shard key: user_id % 4 → routes to shard 0,1,2, or 3
-- Shard 0: user_ids 0,4,8,12,...
-- Shard 1: user_ids 1,5,9,13,...
-- Problem: moving data if you add shards (consistent hashing)`
  },
  {
    category: 'Advanced Topics', difficulty: 'Advanced',
    question: 'What is database replication and the CAP theorem?',
    answer: '**Replication**: copy data from a primary to replicas. **Master-slave**: reads from replicas, writes to master — scales reads but master is single write point. **Multi-master**: multiple write nodes — concurrent writes cause conflicts. **Eventual consistency**: replicas catch up asynchronously — briefly stale. **CAP theorem**: a distributed DB can guarantee only 2 of 3: **C**onsistency (every read gets latest write), **A**vailability (every request gets a response), **P**artition tolerance (works despite network failures). Since network failures always happen, choose CP or AP.',
    tip: `-- Replication lag example (MySQL)
SHOW SLAVE STATUS;  -- check Seconds_Behind_Master
-- If lag is high: reads from replica may return stale data

-- MySQL master-slave setup (my.cnf on master)
-- [mysqld]
-- server-id = 1
-- log_bin   = /var/log/mysql/mysql-bin.log

-- On slave:
-- CHANGE MASTER TO MASTER_HOST='primary-host', ...;
-- START SLAVE;

-- CAP theorem in practice:
--
-- CP systems (Consistency + Partition tolerance):
--   HBase, Zookeeper, CockroachDB
--   → Returns error if can't guarantee consistent data
--   → Best for: banking, inventory (correctness over availability)
--
-- AP systems (Availability + Partition tolerance):
--   Cassandra, DynamoDB, CouchDB
--   → Always responds, may return stale data
--   → Best for: social feeds, shopping carts (availability over consistency)
--
-- CA (Consistency + Availability) only works on single node:
--   Traditional RDBMS (MySQL, PostgreSQL) — not distributed

-- Conflict resolution in multi-master:
-- Last-write-wins (LWW) · vector clocks · CRDTs`
  },

  /* ── Database Types ── */
  {
    category: 'Database Types', difficulty: 'Beginner',
    question: 'When to use relational databases? (MySQL, PostgreSQL, Oracle, SQL Server)',
    answer: '**Relational DBs** store structured data in tables with defined schemas and enforce relationships via foreign keys. Best for: complex queries with JOINs, multi-table transactions (banking, e-commerce), strong consistency requirements, reporting. **PostgreSQL**: open source, feature-rich, JSON support, great for complex queries. **MySQL**: most popular web DB, excellent community, fast reads. **Oracle/SQL Server**: enterprise, licensing cost, advanced features. Default choice for 80% of applications.',
    tip: `-- PostgreSQL strengths — JSON, arrays, window functions
-- Store JSON alongside relational data
ALTER TABLE products ADD COLUMN metadata JSONB;
UPDATE products SET metadata = '{"color":"red","weight":1.5}' WHERE id = 1;
SELECT * FROM products WHERE metadata->>'color' = 'red';
SELECT * FROM products WHERE metadata @> '{"color":"red"}';

-- Array columns
CREATE TABLE tags_demo (id INT, tags TEXT[]);
INSERT INTO tags_demo VALUES (1, ARRAY['nodejs','javascript','backend']);
SELECT * FROM tags_demo WHERE 'nodejs' = ANY(tags);

-- Window functions (PostgreSQL/MySQL 8+)
SELECT name, salary,
       RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rank_in_dept,
       AVG(salary) OVER (PARTITION BY dept_id) AS dept_avg
FROM   employees;

-- Full-text search
SELECT * FROM articles
WHERE  to_tsvector('english', content) @@ to_tsquery('database & optimization');

-- When to choose:
-- PostgreSQL: complex queries, JSON, geospatial (PostGIS), analytics
-- MySQL:      web apps, read-heavy, large community
-- Oracle:     enterprise, legacy systems, huge scale
-- SQL Server: Windows/.NET ecosystem, BI tools`
  },
  {
    category: 'Database Types', difficulty: 'Intermediate',
    question: 'When to use document databases? (MongoDB, CouchDB)',
    answer: '**Document DBs** store data as JSON/BSON documents — no fixed schema. Each document can have different fields. Best for: hierarchical/nested data that is read/written together, flexible schemas that evolve rapidly, catalogs, CMS, user profiles. **MongoDB**: most popular, rich query language, aggregation pipeline, supports transactions. **CouchDB**: HTTP API, offline sync, eventual consistency. Avoid when: you need complex multi-collection JOINs — that signals relational data.',
    tip: `// MongoDB — document structure
{
    _id:    ObjectId('...'),
    name:   'Alice',
    email:  'alice@example.com',
    address: {                         // nested document
        street: '123 Main St',
        city:   'New York',
        zip:    '10001'
    },
    orders: [                          // embedded array
        { product: 'Laptop', total: 999 },
        { product: 'Mouse',  total:  29 }
    ],
    tags: ['premium', 'verified']
}

// CRUD operations
db.users.insertOne({ name: 'Bob', email: 'bob@example.com' });
db.users.find({ 'address.city': 'New York' });
db.users.find({ tags: 'premium' });
db.users.updateOne({ _id: id }, { $set: { name: 'Robert' }, $push: { tags: 'vip' } });
db.users.deleteOne({ _id: id });

// Aggregation pipeline
db.orders.aggregate([
    { $match:  { status: 'completed' } },
    { $group:  { _id: '$user_id', total: { $sum: '$amount' } } },
    { $sort:   { total: -1 } },
    { $limit:  10 }
]);

// Index
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ 'address.city': 1, createdAt: -1 });`
  },
  {
    category: 'Database Types', difficulty: 'Intermediate',
    question: 'When to use key-value databases? (Redis, DynamoDB)',
    answer: '**Key-value DBs** store and retrieve values by a single key — the simplest and fastest data model. Best for: caching, sessions, rate limiting, feature flags, pub/sub messaging. **Redis**: in-memory, microsecond latency, supports strings/hashes/lists/sets/sorted sets, pub/sub, expiry (TTL). **DynamoDB**: AWS managed, serverless scale, single-digit millisecond latency, great for massive scale. Key-value is not queryable — you can only look up by exact key.',
    tip: `// Redis — common patterns

// 1. Caching with TTL
await redis.set('user:42', JSON.stringify(user), 'EX', 3600);  // expire in 1h
const cached = await redis.get('user:42');

// 2. Session storage
await redis.hset('session:abc123', { userId: 42, role: 'admin' });
await redis.expire('session:abc123', 86400);    // 24h TTL

// 3. Rate limiting (sliding window)
const key    = 'ratelimit:' + ip;
const count  = await redis.incr(key);
if (count === 1) await redis.expire(key, 60);   // first request sets 60s window
if (count > 100) return res.status(429).send('Too many requests');

// 4. Pub/Sub
// Publisher
await redis.publish('notifications', JSON.stringify({ userId: 1, msg: 'Hello' }));
// Subscriber
redis.subscribe('notifications', (msg) => console.log(JSON.parse(msg)));

// 5. Sorted sets — leaderboard
await redis.zadd('leaderboard', 1500, 'alice');
await redis.zadd('leaderboard', 2300, 'bob');
const top10 = await redis.zrevrange('leaderboard', 0, 9, 'WITHSCORES');

// DynamoDB — single-table design
// PK: USER#42     SK: PROFILE     → user record
// PK: USER#42     SK: ORDER#001   → user's order`
  },
  {
    category: 'Database Types', difficulty: 'Intermediate',
    question: 'When to use columnar, graph, and time-series databases?',
    answer: '**Columnar** (Cassandra, ClickHouse): store data by column not row — fast aggregations and analytics over millions of rows, write-optimized. Best for: IoT data, analytics, event logs. **Graph** (Neo4j): data stored as nodes + edges — fast traversal of relationships. Best for: social networks, recommendation engines, fraud detection, knowledge graphs. **Time-series** (InfluxDB, TimescaleDB): optimized for sequential time-stamped data — fast range queries, automatic rollup/retention. Best for: metrics, monitoring, IoT sensors.',
    tip: `// --- COLUMNAR: Cassandra ---
// Data model — designed for write speed, no JOINs
// CREATE TABLE sensor_readings (
//   device_id UUID,
//   reading_time TIMESTAMP,
//   temperature FLOAT,
//   humidity FLOAT,
//   PRIMARY KEY (device_id, reading_time)
// ) WITH CLUSTERING ORDER BY (reading_time DESC);
// SELECT * FROM sensor_readings WHERE device_id=? AND reading_time > ?;

// ClickHouse — analytical queries (billions of rows in seconds)
// SELECT date, AVG(revenue), COUNT(*)
// FROM sales WHERE date >= '2024-01-01'
// GROUP BY date ORDER BY date;

// --- GRAPH: Neo4j (Cypher query language) ---
// Create nodes and relationships
// CREATE (alice:User {name:'Alice'})-[:FOLLOWS]->(bob:User {name:'Bob'})
// Find friends of friends
// MATCH (u:User {name:'Alice'})-[:FOLLOWS]->()-[:FOLLOWS]->(fof)
// RETURN fof.name

// --- TIME-SERIES: InfluxDB ---
// Write
// cpu,host=web01,region=us value=72.3 1700000000000000000
// Query (Flux language)
// from(bucket: 'metrics')
//   |> range(start: -1h)
//   |> filter(fn: (r) => r.host == 'web01')
//   |> mean()

// TimescaleDB — PostgreSQL extension
// SELECT time_bucket('5 minutes', time) AS bucket, AVG(value)
// FROM cpu_metrics WHERE time > NOW() - INTERVAL '1 hour'
// GROUP BY bucket ORDER BY bucket;`
  },

  /* ── Building for Scale ── */
  {
    category: 'Building for Scale', difficulty: 'Advanced',
    question: 'How do you implement database observability? (instrumentation, monitoring, telemetry)',
    answer: '**Observability** = knowing what\'s happening inside your DB without guessing. Three pillars: **Instrumentation** (add measurement points — slow query logs, query counters, connection pool stats). **Monitoring** (dashboards + alerts — watch query latency, connections, CPU, disk, replication lag). **Telemetry** (structured metrics + traces — correlate slow DB queries to specific API calls using tracing). Key metrics: p99 query latency, active connections, cache hit rate, replication lag, deadlocks/second.',
    tip: `// Instrumentation — measure at DB level

// MySQL slow query log
SET GLOBAL slow_query_log = ON;
SET GLOBAL long_query_time = 0.5;     // log queries > 500ms
// SHOW VARIABLES LIKE 'slow_query_log_file';

// PostgreSQL — pg_stat_statements extension
CREATE EXTENSION pg_stat_statements;
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;                              // top 10 slowest queries

// Connection pool monitoring
// Max connections used, queue depth, idle connections

// Application-level instrumentation (Node.js + Prisma)
// prisma.$use(async (params, next) => {
//   const start  = Date.now();
//   const result = await next(params);
//   const ms     = Date.now() - start;
//   if (ms > 500) logger.warn('Slow query', { model: params.model, action: params.action, ms });
//   metrics.histogram('db_query_duration_ms', ms, { model: params.model });
//   return result;
// });

// Key metrics to monitor:
// - Query latency (p50, p95, p99)
// - Active connections vs max_connections
// - Buffer/cache hit rate (should be >99%)
// - Replication lag (seconds behind primary)
// - Lock wait time / deadlocks per minute
// - Disk IOPS and throughput`
  },
  {
    category: 'Building for Scale', difficulty: 'Advanced',
    question: 'What are database mitigation strategies for high-scale systems?',
    answer: '**Graceful Degradation**: serve cached/stale data when DB is slow — better than an error page. **Throttling**: limit query rate per client — protect DB from overload. **Backpressure**: slow down producers when consumers (DB) can\'t keep up — use a queue. **Load Shifting**: move heavy reports/analytics queries to off-peak hours or a read replica. **Circuit Breaker**: if DB error rate exceeds threshold, stop trying — return cached response immediately and retry after a cooldown.',
    tip: `// 1. Graceful degradation — serve stale cache on DB timeout
async function getProducts() {
    try {
        const products = await db.query('SELECT * FROM products', { timeout: 2000 });
        await redis.set('products_cache', JSON.stringify(products), 'EX', 300);
        return products;
    } catch (err) {
        logger.warn('DB slow, serving stale cache');
        const cached = await redis.get('products_cache');
        return cached ? JSON.parse(cached) : [];   // fallback to empty
    }
}

// 2. Throttling — rate limit DB writes per user
async function recordEvent(userId, event) {
    const key   = 'throttle:' + userId;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, 60);
    if (count > 50) throw new Error('Rate limit exceeded');
    await db.insert('events', { userId, event });
}

// 3. Backpressure — queue writes, drain at safe rate
// const queue = new Queue('db-writes', { redis });
// queue.process(5, async (job) => db.insert('events', job.data)); // 5 concurrent

// 4. Load shifting — send analytics to replica
const primaryDB  = createConnection(process.env.DB_PRIMARY);
const replicaDB  = createConnection(process.env.DB_REPLICA);
// Reports/analytics → replicaDB (read replica, may be slightly stale)
// Writes + critical reads → primaryDB

// 5. Circuit breaker (opossum library)
// const breaker = new CircuitBreaker(dbQuery, { timeout: 3000, errorThresholdPercentage: 50 });
// breaker.fallback(() => getCachedResponse());`
  },

  /* ── Ecosystem ── */
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'What are the main cloud database services and when to choose each?',
    answer: '**AWS RDS**: managed MySQL/PostgreSQL/Oracle/SQL Server — automated backups, patches, multi-AZ failover. **Aurora**: AWS-native, 5x faster than MySQL, serverless option, auto-scales storage. **Google Cloud Spanner**: globally distributed relational DB — horizontal scale with strong consistency. Rare but powerful. **Azure SQL**: managed SQL Server — best for Microsoft/.NET stack. **DynamoDB**: AWS serverless NoSQL — infinite scale, pay per request. Choose cloud DBs for: no DBA overhead, built-in HA, automatic backups.',
    tip: `// AWS RDS — Terraform example
// resource "aws_db_instance" "main" {
//   engine               = "postgres"
//   engine_version       = "15.3"
//   instance_class       = "db.t3.medium"
//   allocated_storage    = 100
//   storage_encrypted    = true
//   multi_az             = true          // auto-failover
//   backup_retention_period = 7          // 7 days backup
//   deletion_protection  = true
// }

// Aurora Serverless v2 — scales automatically
// resource "aws_rds_cluster" "aurora" {
//   engine      = "aurora-postgresql"
//   engine_mode = "provisioned"
//   serverlessv2_scaling_configuration {
//     min_capacity = 0.5     // 0.5 ACU minimum
//     max_capacity = 128     // scale up to 128 ACU
//   }
// }

// Connection pooling (mandatory for serverless)
// Use PgBouncer or RDS Proxy — Lambda opens too many connections otherwise

// Cost comparison guide (rough estimates)
// RDS t3.medium PostgreSQL: ~$50/month
// Aurora Serverless:        ~$0.06/ACU-hour + storage
// DynamoDB:                 ~$0.25/million reads + $1.25/million writes
// Cloud Spanner:            ~$0.90/node-hour (expensive, for global scale)

// Backups in cloud DBs:
// RDS: automated daily backups + transaction log PITR
// DynamoDB: on-demand or continuous backups`
  },
  {
    category: 'Ecosystem', difficulty: 'Advanced',
    question: 'What is the big data ecosystem and how does it integrate with databases?',
    answer: '**Big Data** is data too large or complex for traditional RDBMS — petabytes, unstructured. **Hadoop**: distributed storage (HDFS) + processing (MapReduce). **Spark SQL**: in-memory distributed processing — 100x faster than MapReduce. **Hive**: SQL interface on top of Hadoop — query data in HDFS. **ETL pipelines**: Extract (from source DB/APIs), Transform (clean, join, aggregate), Load (into warehouse). **Data warehouse**: optimized for analytics, not transactions — Snowflake, BigQuery, Redshift. OLAP (analytics) vs OLTP (transactions).',
    tip: `// ETL pipeline — conceptual flow
//
// [Source DBs]  →  [Extract]  →  [Transform]  →  [Load]  →  [Warehouse]
// MySQL/Postgres    pg_dump       dbt / Spark       COPY       BigQuery
// REST APIs         Airbyte       SQL transforms    INSERT     Snowflake
// Event streams     Kafka         Python/PySpark    S3 → load  Redshift

// Spark SQL — process billions of rows
// val df = spark.read.jdbc(url, "orders", connectionProperties)
// df.filter("created_at > '2024-01-01'")
//   .groupBy("category")
//   .agg(sum("total").as("revenue"))
//   .orderBy(desc("revenue"))
//   .write.parquet("s3://data-lake/revenue-by-category/")

// dbt (data build tool) — SQL-based transforms
// -- models/monthly_revenue.sql
-- SELECT
--   DATE_TRUNC('month', created_at) AS month,
--   SUM(total) AS revenue,
--   COUNT(DISTINCT user_id) AS customers
-- FROM {{ ref('orders') }}
-- WHERE status = 'completed'
-- GROUP BY 1

// OLTP vs OLAP
// OLTP: many small read/write transactions — normalized schema
// OLAP: few large analytical queries — denormalized star/snowflake schema
//   Fact table:      orders (measures: amount, quantity)
//   Dimension tables: date, customer, product, region`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How do you manage database migrations and schema versioning?',
    answer: '**Migrations**: versioned, ordered scripts that change the DB schema. Each migration has an **up** (apply) and **down** (rollback). Tools: **Flyway** (Java), **Liquibase** (XML/SQL), **Alembic** (Python), **Prisma Migrate**, **Knex.js** migrations. Key practices: never edit old migrations, always test rollback, run in CI before deploy, use a migration lock table to prevent concurrent runs. Schema changes that break running code (drop column, rename) need **expand-contract pattern** (two-phase deployment).',
    tip: `// Knex.js migrations (Node.js)
// knex migrate:make create_users_table

// migrations/001_create_users.js
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('name',    100).notNullable();
        table.string('email',   255).unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};

// knex migrate:latest    — run all pending migrations
// knex migrate:rollback  — undo last batch
// knex migrate:status    — see migration history

// Expand-contract pattern (zero-downtime rename):
// Phase 1: ADD new column, write to both old+new (old code still works)
// ALTER TABLE users ADD COLUMN full_name VARCHAR(100);
// UPDATE users SET full_name = name;

// Phase 2: deploy new code that reads new column
// Phase 3: DROP old column (old code no longer running)
// ALTER TABLE users DROP COLUMN name;

// CI/CD integration
// - Run migrations in pipeline before deploying app
// - Use --dry-run to preview changes
// - Lock table prevents concurrent migration runs`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How are databases used in real-world applications?',
    answer: '**E-commerce**: relational DB (products, orders, inventory) + Redis (cart, sessions) + Elasticsearch (product search). **Banking**: strict RDBMS for ACID transactions, partitioned by account range, encrypted at rest. **Social networks**: graph DB for connections + document DB for posts + Redis for feeds. **IoT/Monitoring**: time-series DB for sensor data + data warehouse for historical analysis. **Content platforms**: document DB for flexible content + CDN caching + search engine. Each system typically uses 2–3 DB types for different concerns.',
    tip: `// E-commerce stack example
//
// PostgreSQL:   products · orders · inventory · users (structured, ACID)
// Redis:        shopping cart · sessions · rate limiting · flash sale counters
// Elasticsearch: product search · autocomplete · faceted filtering
// S3:           product images · order receipts (object storage)
//
// Order flow:
// 1. User adds item → Redis INCR cart:userId:productId
// 2. Checkout → BEGIN transaction in PostgreSQL
//    - Check stock: SELECT FOR UPDATE
//    - Decrement inventory
//    - Insert order
//    - COMMIT
// 3. Publish event → Kafka/RabbitMQ → email service, analytics

// Social network stack:
// Neo4j:     friend/follow graph, recommendations (2nd-degree connections)
// MongoDB:   posts, comments, profiles (flexible schema)
// Redis:     news feed cache (pre-computed per user), likes counter
// Cassandra: activity logs, notifications (write-heavy, time-ordered)

// Monitoring / IoT:
// InfluxDB:  raw sensor readings (high write rate, TTL auto-expiry)
// TimescaleDB: downsampled hourly/daily aggregates
// Grafana:   dashboards reading from both
// BigQuery:  long-term analytical queries on archived data`
  },

  /* ── Interview ── */
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: Normalization vs Denormalization — when to use each?',
    answer: '**Normalization** removes redundancy by splitting data into related tables. Pros: no update anomalies, consistent data, smaller storage. Cons: JOINs for every query — slower reads. **Denormalization** duplicates data to avoid JOINs. Pros: faster reads, simpler queries. Cons: data can go out of sync, more storage, complex updates. Use normalization as the default (3NF). Denormalize selectively when: EXPLAIN shows expensive JOINs on hot queries, read volume >> write volume, caching is not enough.',
    tip: `-- Normalized (3NF) — no redundancy, needs JOINs
-- users:    id | name | email
-- products: id | name | price | category_id
-- orders:   id | user_id | product_id | quantity | created_at
-- categories: id | name

SELECT u.name, p.name, o.quantity
FROM orders o
JOIN users u    ON o.user_id    = u.id
JOIN products p ON o.product_id = p.id;   -- 2 JOINs

-- Denormalized — duplicate data, no JOINs
-- orders: id | user_name | user_email | product_name | product_price | quantity
-- Problem: if user changes email → must update ALL their orders
-- But: read query is just SELECT * FROM orders WHERE user_id = 5

-- Decision framework:
-- Write-heavy / data must be consistent → Normalize
-- Read-heavy / query performance critical → Denormalize (specific tables)
-- Always: index first, then denormalize if still slow
-- Cache (Redis) is often a better alternative to denormalization

-- Hybrid: store normalized in PostgreSQL, denormalized view in Redis/Elasticsearch
-- Normalize in DB, denormalize at the cache/search layer`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: How do indexes work and when do they hurt performance?',
    answer: 'An index is a **B-Tree** (or Hash) data structure built on one or more columns — stores sorted values with pointers to rows. Speeds up: WHERE lookups, JOINs, ORDER BY, GROUP BY. **When they hurt**: every INSERT/UPDATE/DELETE must also update all indexes — write-heavy tables slow down significantly. Also hurt when: column has low cardinality (boolean, gender), query returns >20% of rows (full scan is faster), table is tiny. Rule of thumb: index foreign keys always, index WHERE/ORDER BY columns, avoid over-indexing.',
    tip: `-- Index internals (B-Tree)
-- CREATE INDEX idx_users_email ON users(email);
-- Sorted structure: 'alice@..' → row 42, 'bob@..' → row 7, ...
-- Binary search: O(log n) instead of O(n) full scan

-- Indexes that HELP
CREATE INDEX ON orders(user_id);          -- FK lookup
CREATE INDEX ON orders(created_at);       -- date range queries
CREATE INDEX ON products(category, price); -- composite: filter + sort
CREATE INDEX ON users(email) WHERE active = true;  -- partial index

-- Indexes that HURT or DON'T HELP
-- Low cardinality (only 2 values — DB ignores index and scans anyway)
CREATE INDEX ON users(gender);            -- useless

-- Function on indexed column — index not used!
SELECT * FROM users WHERE LOWER(email) = 'alice@example.com';  -- no index
-- Fix: use expression index
CREATE INDEX ON users(LOWER(email));

-- Write-heavy table — index cost > benefit
-- Logging/events table: millions of inserts/second
-- Each insert updates 5 indexes → 5x write overhead

-- Interview answer formula:
-- Indexes use B-Tree, stored separately from table
-- Speed up reads via binary search (O log n vs O n)
-- Each index = extra write on INSERT/UPDATE/DELETE
-- Sweet spot: read >> write, high cardinality, selective queries`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: Explain ACID properties and isolation levels.',
    answer: '**Atomicity**: transaction is all-or-nothing — if any step fails, everything rolls back. **Consistency**: DB moves from one valid state to another — constraints never violated. **Isolation**: concurrent transactions don\'t see each other\'s intermediate state. **Durability**: once committed, data survives crashes (written to disk/WAL). Isolation levels trade off between concurrency and correctness: Read Committed (default) prevents dirty reads. Repeatable Read prevents non-repeatable reads. Serializable prevents all anomalies but lowest concurrency.',
    tip: `-- ACID example: bank transfer
BEGIN;

-- Atomicity: both updates or neither
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

-- Consistency: CHECK constraint prevents negative balance
-- If balance - 500 < 0 → constraint violation → ROLLBACK

-- Isolation: another transaction reading account 1
--            during this transaction sees old balance (READ COMMITTED)

COMMIT;
-- Durability: committed to WAL (Write-Ahead Log) before returning OK

-- Isolation levels — what each prevents
-- READ UNCOMMITTED: nothing (dirty reads allowed)
-- READ COMMITTED:   dirty reads               ← PostgreSQL default
-- REPEATABLE READ:  dirty + non-repeatable    ← MySQL default
-- SERIALIZABLE:     all anomalies             ← strictest

-- Common interview scenario: which level for a bank?
-- At least REPEATABLE READ to prevent double-spend
-- Better: SERIALIZABLE with SELECT ... FOR UPDATE

BEGIN;
SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;  -- lock row
-- now no other transaction can modify this row
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
COMMIT;`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: When to use SQL vs NoSQL? What are the trade-offs?',
    answer: '**SQL** (relational): fixed schema, strong ACID, complex queries/JOINs, vertical scaling. Best for: financial systems, e-commerce, anything requiring data integrity and complex queries. **NoSQL**: flexible schema, horizontal scaling, eventual consistency (usually), optimized for specific access patterns. Best for: large-scale reads/writes, flexible/evolving data, specific patterns (cache, graph, time-series). The "SQL vs NoSQL" debate is outdated — modern apps use both. PostgreSQL now supports JSON, arrays, and full-text search.',
    tip: `// Decision matrix

// Choose SQL (PostgreSQL/MySQL) when:
// ✓ Data has clear structure and relationships
// ✓ You need ACID transactions (banking, inventory)
// ✓ Complex queries with multiple JOINs
// ✓ Schema is stable and well-defined
// ✓ Team knows SQL well

// Choose MongoDB (Document) when:
// ✓ Data is hierarchical / nested (read/written together)
// ✓ Schema changes frequently (MVP, agile development)
// ✓ Each record can have different fields
// ✓ Content management, catalogs, user profiles

// Choose Redis (Key-Value) when:
// ✓ You need microsecond reads
// ✓ Use case: cache · sessions · rate limiting · pub/sub
// ✓ Data fits in RAM

// Choose Cassandra (Columnar) when:
// ✓ Massive write throughput (IoT, logs, events)
// ✓ Linear horizontal scale across data centers
// ✓ Queries always include partition key (no ad-hoc queries)

// Real answer in interview:
// 'I'd use PostgreSQL as the primary store for structured transactional
//  data, Redis for caching and sessions, and Elasticsearch for full-text
//  search — choosing each tool for its strengths.'`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'Interview: How do you scale a database that is becoming a bottleneck?',
    answer: '**Step 1 — Measure first**: use EXPLAIN, slow query logs, pg_stat_statements. **Step 2 — Query optimization**: add indexes, rewrite slow queries. **Step 3 — Caching**: add Redis in front — cache frequent reads. **Step 4 — Read replicas**: route reads to replicas, writes to primary. **Step 5 — Connection pooling**: PgBouncer/RDS Proxy — DB can\'t handle thousands of connections. **Step 6 — Partitioning**: split large tables by date/region. **Step 7 — Sharding**: distribute data across multiple DB instances. **Last resort — switch DB type**: if relational fundamentally doesn\'t fit.',
    tip: `// Scaling ladder — try in order

// 1. EXPLAIN + indexes (free, immediate)
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 5;
CREATE INDEX CONCURRENTLY ON orders(user_id);  // no table lock

// 2. Query cache with Redis
const cached = await redis.get('user:5:orders');
if (cached) return JSON.parse(cached);
const orders = await db.query('SELECT * FROM orders WHERE user_id = 5');
await redis.setEx('user:5:orders', 300, JSON.stringify(orders));

// 3. Read replica (in app router)
const primaryDB = createPool(process.env.DB_PRIMARY);
const replicaDB = createPool(process.env.DB_REPLICA);
// Writes → primaryDB, reads → replicaDB

// 4. Connection pooling (PgBouncer config)
// pool_mode = transaction    (most efficient)
// max_client_conn = 10000    (clients can connect)
// default_pool_size = 20     (actual DB connections)

// 5. Partitioning (PostgreSQL)
// CREATE TABLE orders_2024 PARTITION OF orders
// FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

// 6. Application-level sharding
// const shard = userId % 4;  // route to shard 0-3
// const db = shards[shard];

// Interview formula:
// 'I'd first profile with EXPLAIN, then add indexes,
//  then add Redis caching, then read replicas.
//  Sharding is a last resort due to operational complexity.'`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'Interview: Explain CAP theorem and its practical implications.',
    answer: '**CAP theorem**: a distributed database can only guarantee 2 of 3 — **Consistency** (every read returns the latest write), **Availability** (every request gets a response), **Partition tolerance** (system works despite network failures). Since network partitions always happen in distributed systems, you must choose between **CP** (sacrifice availability during partition — return error) or **AP** (sacrifice consistency during partition — return stale data). Most modern systems are tunable: configure your consistency level per query.',
    tip: `// CAP in practice — real systems

// CP — Consistency + Partition tolerance
// Returns error/timeout if can't guarantee consistency
// Systems: HBase, Zookeeper, etcd, CockroachDB, Google Spanner
// Use when: banking, inventory, booking (correctness critical)

// Example: book last hotel room
// CP system: locks the row across all nodes before confirming
// → possible timeout, but never double-booked

// AP — Availability + Partition tolerance
// Always responds, may return stale data
// Systems: Cassandra, DynamoDB, CouchDB, Riak
// Use when: social feeds, shopping cart, DNS (availability critical)

// Example: social media like count
// AP system: each node has its own count, sync later
// → always responds, count may be off by a few seconds

// Cassandra tunable consistency
// CONSISTENCY ONE;     // fastest, least consistent (AP)
// CONSISTENCY QUORUM;  // majority of nodes agree (balanced)
// CONSISTENCY ALL;     // all nodes must agree (CP, slowest)

// DynamoDB consistency
// Eventual consistency read: cheaper, may return stale
// Strongly consistent read:  2x cost, always latest

// Interview summary:
// 'CAP says you can't have all three in a distributed system.
//  Since partitions are unavoidable, real choice is CP vs AP.
//  I'd use CP for financial data, AP for social/content features,
//  and tools like DynamoDB that let you tune per-query.'`
  },

];


/* ═══════════════════════════════════════════════════════════
   INTERNET — 20 cards  |  Beginner → Intermediate → Advanced
   How Internet Works · HTTP & Web · DNS & Domains · Browsers
═══════════════════════════════════════════════════════════ */
const INTERNET_CARDS = [

  /* ── How Internet Works ── */
  {
    category: 'How Internet Works', difficulty: 'Beginner',
    question: 'How does the Internet actually work?',
    answer: 'The Internet is a global network of computers connected by physical cables (fibre optic, copper, coaxial) and wireless links. Data travels as small packets routed through routers across the network. Each device has a unique IP address used for addressing. The Internet is not owned by anyone — it is a network of networks (ISPs, universities, companies) following shared standards called protocols (TCP/IP, HTTP, DNS).',
    tip: `-- Journey of a request: typing google.com in your browser
1. Browser checks local DNS cache
2. OS asks DNS resolver (your ISP or 8.8.8.8) → gets IP address
3. Browser opens TCP connection to that IP (3-way handshake)
4. TLS handshake (if HTTPS) — negotiate encryption
5. Browser sends HTTP GET request
6. Server processes → sends HTTP response (HTML)
7. Browser parses HTML → requests CSS, JS, images
8. Browser renders the page

-- Physical path of a packet:
Your PC → Router → ISP → Internet backbone
→ Google's ISP → Google's data centre → server`
  },
  {
    category: 'How Internet Works', difficulty: 'Beginner',
    question: 'What is TCP/IP and what is the difference between TCP and UDP?',
    answer: 'TCP/IP is the foundational protocol suite of the Internet. **IP** (Internet Protocol) handles addressing and routing packets. **TCP** (Transmission Control Protocol) adds reliability on top: ordered delivery, error checking, retransmission of lost packets, flow control — at the cost of latency. **UDP** (User Datagram Protocol) is faster but unreliable: no retransmission, no ordering. Use TCP for web, email, file transfer. Use UDP for live video, gaming, DNS, VoIP.',
    tip: `-- TCP 3-way handshake (connection setup)
Client → Server : SYN
Server → Client : SYN-ACK
Client → Server : ACK
-- Connection established — data can flow

-- TCP guarantees:
✅ All packets arrive (retransmit if lost)
✅ Arrive in correct order
✅ No duplicates
❌ Adds latency (RTT per connection)

-- UDP — fire and forget
✅ Very low latency
✅ No connection overhead
❌ Packets may be lost or arrive out of order
-- Used by: DNS, video streaming (YouTube), gaming, VoIP

-- TCP Layer 4 (Transport)
-- IP  Layer 3 (Network)
-- HTTP Layer 7 (Application)`
  },
  {
    category: 'How Internet Works', difficulty: 'Beginner',
    question: 'What is an IP address? What is the difference between IPv4 and IPv6?',
    answer: 'An IP address is a unique numerical label assigned to every device on a network. **IPv4**: 32-bit, written as 4 octets (e.g. `192.168.1.1`), ~4.3 billion addresses — nearly exhausted. **IPv6**: 128-bit, written in hex groups (e.g. `2001:0db8::1`), ~340 undecillion addresses. **Public IP**: globally routable, assigned by ISP. **Private IP**: used inside local networks (192.168.x.x, 10.x.x.x). NAT (Network Address Translation) lets many private IPs share one public IP.',
    tip: `-- IPv4 address classes (simplified)
192.168.x.x   — private (home/office LAN)
10.x.x.x      — private (large organisations)
172.16-31.x.x — private (mid-size)
127.0.0.1     — loopback (localhost — your own machine)
8.8.8.8       — Google's public DNS
1.1.1.1       — Cloudflare's public DNS

-- IPv6 example
2001:0db8:85a3:0000:0000:8a2e:0370:7334
-- Can be shortened:
2001:db8:85a3::8a2e:370:7334  (:: = consecutive zeros)

-- Check your IP
curl ifconfig.me           -- public IP
ipconfig / ip addr show    -- local IP`
  },
  {
    category: 'How Internet Works', difficulty: 'Beginner',
    question: 'What is a port number and why does it matter?',
    answer: 'A port is a 16-bit number (0–65535) that identifies a specific service/process on a host. IP gets the packet to the right machine; the port gets it to the right application. Ports 0–1023 are well-known (reserved for system services). A server "listens" on a port; a client connects from a random ephemeral port. Firewalls filter traffic by port number.',
    tip: `-- Well-known port numbers to memorise:
20, 21  — FTP (file transfer)
22      — SSH (secure shell / remote login)
25      — SMTP (send email)
53      — DNS (domain name resolution)
80      — HTTP (unencrypted web)
110     — POP3 (receive email)
143     — IMAP (receive email)
443     — HTTPS (encrypted web)
3000    — common Node.js dev server
3306    — MySQL
5432    — PostgreSQL
6379    — Redis
27017   — MongoDB

-- Full address = IP + Port
192.168.1.10:5432  — PostgreSQL on local machine
8.8.8.8:53         — Google DNS`
  },
  {
    category: 'How Internet Works', difficulty: 'Intermediate',
    question: 'What is a CDN (Content Delivery Network) and how does it work?',
    answer: 'A CDN is a globally distributed network of servers (edge nodes/PoPs) that cache and serve content from locations close to users. Instead of all traffic hitting your origin server in one data centre, users get files from the nearest edge node — reducing latency, load on origin, and improving availability. CDNs are essential for static assets (images, JS, CSS), video streaming, and DDoS protection. Popular CDNs: Cloudflare, AWS CloudFront, Fastly, Akamai.',
    tip: `-- Without CDN:
User in Hanoi → server in USA → 250ms latency

-- With CDN:
User in Hanoi → Cloudflare edge in Singapore → 20ms

-- What CDN caches:
✅ Static files: .js, .css, .jpg, .png, fonts
✅ HTML pages (with short TTL)
✅ API responses (carefully — avoid caching user data)
❌ Dynamic, user-specific data (usually bypassed)

-- Cache-Control header controls CDN behaviour:
Cache-Control: public, max-age=31536000   -- cache 1 year
Cache-Control: no-store                   -- never cache
Cache-Control: s-maxage=3600             -- CDN caches 1hr

-- Cache busting — change filename when content changes
app.abc123.js  -- hash in filename forces fresh fetch`
  },

  /* ── HTTP & Web ── */
  {
    category: 'HTTP & Web', difficulty: 'Beginner',
    question: 'What is HTTP and what is the difference between HTTP and HTTPS?',
    answer: 'HTTP (HyperText Transfer Protocol) is the application-layer protocol used to transfer data on the web — it defines how browsers and servers communicate. It is stateless (each request is independent). HTTPS = HTTP + TLS encryption. TLS provides: **Confidentiality** (data is encrypted, not readable by third parties), **Integrity** (data cannot be tampered with in transit), **Authentication** (certificate proves the server is who it claims to be). HTTPS is required for passwords, payments, and any sensitive data.',
    tip: `-- TLS Handshake (simplified)
1. Client → Server: "ClientHello" (supported TLS versions, cipher suites)
2. Server → Client: "ServerHello" + Certificate (public key + identity)
3. Client verifies cert against trusted Certificate Authorities (CAs)
4. Both derive session keys using asymmetric crypto
5. All further communication encrypted with session key

-- HTTP/1.1 → HTTP/2 → HTTP/3 evolution
-- HTTP/1.1: one request per TCP connection (slow, head-of-line blocking)
-- HTTP/2:   multiplexing — many requests on one connection, header compression
-- HTTP/3:   runs on QUIC (UDP-based), faster connection setup, no HOL blocking

-- Check certificate in browser: click 🔒 in address bar
-- Let's Encrypt: free, automated TLS certificates`
  },
  {
    category: 'HTTP & Web', difficulty: 'Beginner',
    question: 'What are HTTP methods and when do you use each one?',
    answer: '**GET**: retrieve data, no body, should be safe and idempotent. **POST**: create a resource, has a body, not idempotent. **PUT**: replace an entire resource. **PATCH**: partially update a resource. **DELETE**: remove a resource. **HEAD**: like GET but response has no body — useful for checking if a resource exists. **OPTIONS**: asks what methods are allowed (used in CORS preflight). Idempotent = same result no matter how many times you call it.',
    tip: `-- RESTful API convention:
GET    /users          -- list all users
GET    /users/1        -- get user with id=1
POST   /users          -- create a new user (body: {name, email})
PUT    /users/1        -- replace user 1 entirely
PATCH  /users/1        -- update only provided fields of user 1
DELETE /users/1        -- delete user 1

-- Idempotent?
GET    ✅  (safe + idempotent)
POST   ❌  (creates new resource each call)
PUT    ✅  (same result if called multiple times)
PATCH  ⚠️  (usually idempotent, depends on operation)
DELETE ✅  (deleting already-deleted = same end state)

-- Safe = no side effects (GET, HEAD, OPTIONS)`
  },
  {
    category: 'HTTP & Web', difficulty: 'Beginner',
    question: 'What do HTTP status codes mean?',
    answer: 'HTTP status codes are 3-digit numbers grouped by category. **1xx** Informational. **2xx** Success. **3xx** Redirection. **4xx** Client error (you did something wrong). **5xx** Server error (server failed). Knowing the common ones is essential for debugging APIs.',
    tip: `-- 2xx Success
200 OK              -- standard success
201 Created         -- resource created (after POST)
204 No Content      -- success, no body (after DELETE)

-- 3xx Redirection
301 Moved Permanently  -- URL changed forever (update bookmarks)
302 Found              -- temporary redirect
304 Not Modified       -- cached version is still valid

-- 4xx Client Errors
400 Bad Request     -- malformed request / invalid input
401 Unauthorized    -- not authenticated (no/bad token)
403 Forbidden       -- authenticated but not permitted
404 Not Found       -- resource doesn't exist
409 Conflict        -- e.g. duplicate email on register
422 Unprocessable   -- validation failed
429 Too Many Req.   -- rate limited

-- 5xx Server Errors
500 Internal Server Error -- unhandled exception
502 Bad Gateway           -- upstream server error
503 Service Unavailable   -- server overloaded / down`
  },
  {
    category: 'HTTP & Web', difficulty: 'Intermediate',
    question: 'What are HTTP headers and which ones should you know?',
    answer: 'HTTP headers are key-value pairs sent in request and response to pass metadata: content type, auth tokens, caching rules, CORS permissions, cookies. **Request headers**: what the client sends. **Response headers**: what the server sends back. Headers control caching, security, content negotiation, and authentication.',
    tip: `-- Important Request Headers
Accept:          application/json       -- what format I want back
Content-Type:    application/json       -- format of my request body
Authorization:   Bearer eyJhbGci...     -- JWT or API key
Cookie:          session=abc123         -- browser cookies
User-Agent:      Mozilla/5.0 ...        -- browser/client identity
Origin:          https://myapp.com      -- for CORS

-- Important Response Headers
Content-Type:    application/json; charset=utf-8
Cache-Control:   public, max-age=3600   -- caching rules
Set-Cookie:      session=abc; HttpOnly; Secure; SameSite=Strict
X-Rate-Limit-Remaining: 95             -- API quota
Access-Control-Allow-Origin: *         -- CORS permission
Strict-Transport-Security: max-age=31536000  -- force HTTPS
Content-Security-Policy: default-src 'self'  -- XSS protection`
  },
  {
    category: 'HTTP & Web', difficulty: 'Intermediate',
    question: 'What is the difference between REST and GraphQL?',
    answer: '**REST** (Representational State Transfer): multiple endpoints, each returns a fixed data shape. Simple, widely understood, HTTP-native caching works naturally. **GraphQL**: single endpoint (`/graphql`), client specifies exactly what data it needs in the query — no over-fetching or under-fetching. Better for complex UIs with varying data needs. Downsides of GraphQL: harder to cache (POST requests), N+1 risk, more complex setup. REST is the default choice; use GraphQL when clients have very different data needs.',
    tip: `-- REST — multiple endpoints, fixed response shape
GET /users/1              -- always returns full user object
GET /users/1/posts        -- separate request for posts
GET /users/1/followers    -- another request

-- GraphQL — one endpoint, client defines shape
POST /graphql
{
  "query": "{ user(id: 1) { name posts { title } followers { name } } }"
}
-- Gets user + posts + followers in ONE request
-- Only the fields you asked for

-- REST pros: simple, cacheable, widely understood
-- GraphQL pros: no over/under-fetching, great for mobile
-- GraphQL cons: complex caching, N+1 problem, learning curve`
  },
  {
    category: 'HTTP & Web', difficulty: 'Intermediate',
    question: 'What are WebSockets and how do they differ from HTTP?',
    answer: 'HTTP is a request-response protocol — the client must initiate every interaction. WebSockets provide a persistent, full-duplex (bidirectional) communication channel over a single TCP connection. After an HTTP upgrade handshake, both client and server can push messages at any time. Essential for: real-time chat, live notifications, collaborative editing, live dashboards, online gaming.',
    tip: `-- HTTP: client always initiates
Client → "GET /messages" → Server → response → connection closes
Client → "GET /messages" → Server → (polling every 2 seconds)

-- WebSocket: persistent bidirectional channel
Client → "GET /chat" + "Upgrade: websocket" → Server
Server → "101 Switching Protocols"
-- Now both sides can send messages freely:
Server → Client: "User Bob joined"
Client → Server: "Hello everyone!"
Server → Client: "Alice: Hello everyone!"

// Browser WebSocket API
const ws = new WebSocket('wss://chat.example.com');
ws.onopen    = () => ws.send(JSON.stringify({ text: 'hi' }));
ws.onmessage = e => console.log(JSON.parse(e.data));
ws.onclose   = () => console.log('disconnected');
ws.onerror   = e => console.error(e);`
  },

  /* ── DNS & Domains ── */
  {
    category: 'DNS & Domains', difficulty: 'Beginner',
    question: 'What is DNS and how does domain resolution work step by step?',
    answer: 'DNS (Domain Name System) is the Internet\'s phonebook — it translates human-readable domain names (google.com) into IP addresses (142.250.80.46) that routers understand. DNS is a hierarchical, distributed database. Resolution order: local cache → OS cache → Recursive Resolver (your ISP or 1.1.1.1) → Root Nameserver → TLD Nameserver → Authoritative Nameserver → final IP. Responses are cached at each level with a TTL.',
    tip: `-- DNS resolution step by step for "github.com"

1. Browser cache        → not found
2. OS hosts file        → /etc/hosts, not found
3. Recursive resolver   → (your ISP / 1.1.1.1 / 8.8.8.8)
4. Resolver asks Root nameserver (.)
   → "I don't know, ask .com TLD server"
5. Resolver asks .com TLD server
   → "I don't know, ask GitHub's nameserver: ns1.github.com"
6. Resolver asks ns1.github.com (Authoritative)
   → Returns: github.com → 140.82.121.4  TTL=60s
7. Resolver caches + returns IP to browser
8. Browser connects to 140.82.121.4

-- Total time: ~10-50ms first time, instant from cache
-- Diagnose DNS: dig github.com  /  nslookup github.com`
  },
  {
    category: 'DNS & Domains', difficulty: 'Intermediate',
    question: 'What are the most important DNS record types?',
    answer: '**A**: maps domain → IPv4 address. **AAAA**: maps domain → IPv6 address. **CNAME**: alias — maps domain → another domain (not to an IP). **MX**: mail exchange — where to deliver email for this domain. **TXT**: arbitrary text — used for domain verification (Google, GitHub), SPF (email anti-spam), DKIM. **NS**: nameserver — which servers are authoritative for this domain. **SOA**: Start of Authority — administrative info.',
    tip: `-- Common DNS records (zone file format):
@           A       140.82.121.4          -- github.com → IP
www         CNAME   github.com.           -- www → github.com
@           AAAA    2606:50c0:8000::153   -- IPv6

-- Email records
@           MX 10   mail.github.com.      -- primary mail server
@           MX 20   mail2.github.com.     -- fallback

-- TXT records
@           TXT     "v=spf1 include:sendgrid.net ~all"  -- SPF
@           TXT     "google-site-verification=abc123"   -- verify ownership

-- Nameservers
@           NS      ns1.github.com.
@           NS      ns2.github.com.

-- Check records:
dig A github.com
dig MX gmail.com
dig TXT github.com`
  },
  {
    category: 'DNS & Domains', difficulty: 'Beginner',
    question: 'What is a domain name? Explain TLDs, subdomains, and domain hierarchy.',
    answer: 'A domain name is a human-readable address for a website. Structure: `subdomain.second-level.TLD`. **TLD** (Top-Level Domain): the rightmost part — `.com`, `.org`, `.net`, `.io`, `.vn`. **Second-level domain**: the name you register — `github`, `google`. **Subdomain**: prefix you control — `www`, `api`, `blog`, `mail`. Domain registrars (Namecheap, GoDaddy, Google Domains) sell domain registrations for ~$10–15/year.',
    tip: `-- Anatomy of a URL:
https://api.github.com:443/users/tanhoang?tab=repos#code
  │      │   │          │   │              │         └── Fragment
  │      │   │          │   │              └── Query string
  │      │   │          │   └── Path
  │      │   │          └── Port
  │      │   └── Domain (subdomain.second-level.TLD)
  │      └── Host
  └── Protocol (scheme)

-- Examples:
blog.mysite.com      -- subdomain=blog, domain=mysite, TLD=.com
app.mysite.com.vn    -- TLD=.com.vn (country code TLD)
localhost:3000       -- no TLD, local development

-- Common TLDs:
.com  commercial    .org  non-profit    .edu  education
.io   tech/startups .vn   Vietnam       .dev  developers`
  },
  {
    category: 'DNS & Domains', difficulty: 'Beginner',
    question: 'What is web hosting and what are the different types?',
    answer: 'Web hosting is a service that stores your website files on servers connected to the Internet. Types: **Shared hosting** — many sites on one server (cheap, limited). **VPS** (Virtual Private Server) — your own isolated virtual machine, more control. **Dedicated server** — entire physical machine for you (expensive). **Cloud hosting** — scale on demand (AWS, GCP, Azure). **Managed hosting** — provider handles server config (Heroku, Render, Railway). **Static hosting** — serve only HTML/CSS/JS files, no server (Netlify, Vercel, GitHub Pages — often free).',
    tip: `-- Hosting options by use case:

Static sites (HTML/CSS/JS only):
✅ GitHub Pages — free, great for portfolios
✅ Netlify / Vercel — free tier, CI/CD, custom domain

Backend apps / APIs:
✅ Railway / Render — easy deploy, free tier
✅ Heroku — easy but expensive now
✅ AWS EC2 / GCP / Azure — full control, production

Databases:
✅ Supabase — Postgres, free tier, + auth + realtime
✅ PlanetScale — MySQL, serverless, free tier
✅ MongoDB Atlas — managed MongoDB, free 512MB

Full-stack (this flash card app → GitHub Pages):
git push → GitHub Actions → deployed automatically
URL: https://tanhoang0803.github.io/Fash-Cards-for-my-Life/`
  },

  /* ── Browsers ── */
  {
    category: 'Browsers', difficulty: 'Intermediate',
    question: 'What happens when you type a URL in the browser and press Enter?',
    answer: 'This is one of the most famous interview questions. The full journey: URL parsing → DNS resolution → TCP connection → TLS handshake (HTTPS) → HTTP request → Server processes request → HTTP response → HTML parsing → CSS + JS fetched → DOM + CSSOM built → Render tree → Layout → Paint → Composite → Page displayed. Understanding this shows deep knowledge of networking, HTTP, and browser internals.',
    tip: `-- Full journey: "https://google.com" → page displayed

1.  Parse URL          → scheme=https, host=google.com, path=/
2.  HSTS check         → browser knows to use HTTPS
3.  DNS lookup         → google.com → 142.250.80.46
4.  TCP handshake      → SYN → SYN-ACK → ACK  (3 round trips)
5.  TLS handshake      → negotiate cipher, verify cert, session key
6.  HTTP GET /         → request sent encrypted
7.  Server responds    → 200 OK + HTML body
8.  Parse HTML         → builds DOM tree
9.  Fetch sub-resources → CSS, JS, images (parallel)
10. Parse CSS          → builds CSSOM
11. Execute JS         → may modify DOM/CSSOM
12. Render tree        → DOM + CSSOM combined
13. Layout (Reflow)    → calculate element positions/sizes
14. Paint              → draw pixels to layers
15. Composite          → GPU merges layers → screen`
  },
  {
    category: 'Browsers', difficulty: 'Intermediate',
    question: 'How do browsers render a web page? What is the Critical Rendering Path?',
    answer: 'The Critical Rendering Path (CRP) is the sequence of steps to convert HTML/CSS/JS into visible pixels. CSS is render-blocking — the browser cannot paint without the CSSOM. JS is parser-blocking — it stops HTML parsing unless marked `async`/`defer`. Optimising the CRP means: minimising render-blocking resources, inlining critical CSS, deferring non-critical JS, reducing resource sizes, and using HTTP/2 for parallel loading.',
    tip: `-- Critical Rendering Path:
HTML  → DOM
CSS   → CSSOM              ← render-blocking
DOM + CSSOM → Render Tree
Render Tree → Layout (reflow) → Paint → Composite

-- JS can block HTML parsing AND modify DOM/CSSOM
<script src="app.js"></script>          -- blocks parsing!
<script src="app.js" defer></script>    -- parse first, run after
<script src="app.js" async></script>    -- download async, run immediately

-- Avoid layout thrashing (forces synchronous layout):
-- BAD:
for (const el of elements) {
  el.style.width = el.offsetWidth + 10 + 'px'; // read then write!
}
-- GOOD: batch reads, then batch writes (or use requestAnimationFrame)`
  },
  {
    category: 'Browsers', difficulty: 'Intermediate',
    question: 'What is the difference between cookies, localStorage, and sessionStorage?',
    answer: '**Cookies**: sent automatically with every HTTP request to the server, 4KB limit, can have expiry, can be `HttpOnly` (not accessible via JS) and `Secure`. Controlled by server via `Set-Cookie`. **localStorage**: key-value storage in browser, ~5MB, persists until explicitly cleared, only accessible to JS (not sent to server). **sessionStorage**: same as localStorage but cleared when tab closes. Use cookies for session tokens; localStorage for user preferences/app state.',
    tip: `-- Cookies — server sets via HTTP header
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict; Max-Age=3600

// JS can read cookies (unless HttpOnly)
document.cookie = 'theme=dark; max-age=86400';

-- localStorage — persists across tabs and sessions
localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');     // 'dark'
localStorage.removeItem('theme');
localStorage.clear();

-- sessionStorage — cleared when tab closes
sessionStorage.setItem('step', '2');   // form wizard step
sessionStorage.getItem('step');

-- Security comparison:
-- Cookies:        ✅ HttpOnly blocks XSS  ⚠️ CSRF risk
-- localStorage:   ❌ XSS can steal tokens  ✅ no CSRF
-- Best practice:  use HttpOnly + SameSite cookies for auth tokens`
  },
  {
    category: 'Browsers', difficulty: 'Intermediate',
    question: 'What is CORS and why does the browser enforce it?',
    answer: 'CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks JavaScript from making requests to a different origin (protocol + domain + port) than the page it runs on. Without CORS, a malicious site could read your bank data using your session cookie. The server must explicitly allow cross-origin requests via `Access-Control-Allow-Origin` headers. CORS is enforced by the BROWSER only — server-to-server calls are never blocked.',
    tip: `-- Same origin = same protocol + domain + port
-- https://myapp.com/api and https://myapp.com/user → SAME ORIGIN ✅
-- https://myapp.com and http://myapp.com           → different protocol ❌
-- https://myapp.com and https://api.myapp.com      → different subdomain ❌
-- https://myapp.com and https://myapp.com:8080     → different port ❌

-- Simple request: browser adds Origin header
-- Server must respond with:
Access-Control-Allow-Origin: https://myapp.com

-- Preflight (OPTIONS) sent for: non-simple methods, custom headers
OPTIONS /api/data HTTP/1.1
Origin: https://myapp.com
Access-Control-Request-Method: DELETE

-- Server must respond:
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization`
  },
  {
    category: 'Browsers', difficulty: 'Intermediate',
    question: 'What is browser caching and how do Cache-Control headers work?',
    answer: 'Browser caching stores copies of resources (JS, CSS, images) locally to avoid re-downloading. The `Cache-Control` response header controls caching behaviour. `max-age` sets how long (seconds) to use the cached version without checking the server. `ETag` and `Last-Modified` enable conditional requests — the browser asks "has this changed?" and the server returns `304 Not Modified` if not, saving bandwidth.',
    tip: `-- Response headers that control caching:
Cache-Control: public, max-age=31536000    -- cache 1 year (CDN + browser)
Cache-Control: private, max-age=3600      -- browser only, 1 hour
Cache-Control: no-cache                   -- always revalidate with server
Cache-Control: no-store                   -- never cache (sensitive data)
Cache-Control: s-maxage=86400             -- CDN caches 1 day, browser uses max-age

-- ETag conditional request
-- First request:
Response: ETag: "abc123"

-- Subsequent request:
Request:  If-None-Match: "abc123"
Response: 304 Not Modified  -- use your cached copy (no body sent!)

-- Cache busting strategy for JS/CSS bundles:
-- Use content hash in filename: app.a1b2c3d4.js
-- When file changes, hash changes → new URL → fresh fetch
-- Set max-age=31536000 safely because URL changes on update`
  },
];

/* ═══════════════════════════════════════════════════════════
   LINUX — 25 cards across 5 categories
═══════════════════════════════════════════════════════════ */
const LINUX_CARDS = [
  // ── Linux Basics ─────────────────────────────────────────
  {
    category: 'Linux Basics', difficulty: 'Beginner',
    question: 'What is Linux and how does the kernel relate to the OS?',
    answer: 'Linux is an open-source, Unix-like operating system kernel written by Linus Torvalds in 1991. The kernel is the core layer that manages CPU scheduling, memory, device drivers, and system calls. A Linux "distro" (Ubuntu, Fedora, Arch…) bundles the kernel with a package manager, init system (systemd), shell, and user-space tools to form a complete OS.',
    tip: `Kernel space  →  manages hardware, memory, scheduling
User  space   →  your shell, apps, libraries

         ┌─────────────────────────────┐
         │   User Applications         │
         ├─────────────────────────────┤
         │   Shell / Standard Library  │
         ├─────────────────────────────┤
         │   Linux Kernel              │
         ├─────────────────────────────┤
         │   Hardware                  │
         └─────────────────────────────┘

uname -r       -- print running kernel version
uname -a       -- all system info
cat /etc/os-release   -- distro name & version`
  },
  {
    category: 'Linux Basics', difficulty: 'Beginner',
    question: 'What is the Linux Filesystem Hierarchy Standard (FHS)?',
    answer: 'The FHS defines where files live in a Linux system. Everything hangs off the root /. Key directories: /bin (essential binaries), /etc (config files), /home (user home dirs), /var (logs, databases), /tmp (temp files cleared on boot), /usr (user programs & libs), /proc (virtual FS exposing kernel/process info), /dev (device files).',
    tip: `/            -- root of everything
/bin         -- essential commands (ls, cp, bash)
/sbin        -- system binaries (mount, iptables)
/etc         -- config files (nginx.conf, fstab)
/home/user   -- your personal files
/var/log     -- system & app logs
/tmp         -- temp space, wiped on reboot
/proc        -- live kernel & process data (virtual)
/dev         -- device files (disk, tty, null, random)
/usr/local   -- manually installed programs`
  },
  {
    category: 'Linux Basics', difficulty: 'Beginner',
    question: 'What are the essential file-navigation commands in Linux?',
    answer: 'pwd (print working directory), cd (change directory), ls (list files), mkdir (make directory), rm / rmdir (remove file/dir), cp (copy), mv (move/rename), cat (print file), less (page through file), touch (create empty file or update timestamp).',
    tip: `pwd                  -- /home/user/projects
ls -lah              -- long list, all files, human sizes
cd ~                 -- go home
cd -                 -- go to previous directory
mkdir -p a/b/c       -- create nested dirs at once
rm -rf dir/          -- remove dir recursively (careful!)
cp -r src/ dst/      -- recursive copy
mv old.txt new.txt   -- rename
cat file.txt         -- print to terminal
less file.txt        -- scroll through (q to quit)`
  },
  {
    category: 'Linux Basics', difficulty: 'Beginner',
    question: 'How do you get help for any Linux command?',
    answer: 'Three layers of help: (1) --help flag for a quick summary, (2) man <command> for the full manual page (press q to quit, / to search), (3) info <command> for GNU-style docs. For built-ins (cd, alias) use help <builtin>. tldr pages give practical examples via the tldr npm package.',
    tip: `ls --help            -- quick flag summary
man ls               -- full manual (q=quit, /=search, n=next)
man 5 crontab        -- section 5 = file formats
info bash            -- GNU info for bash
help cd              -- built-in shell commands
tldr tar             -- community cheat-sheet (install separately)

# Man page sections:
# 1 = user commands   2 = system calls
# 3 = library funcs   5 = file formats
# 8 = admin commands`
  },
  {
    category: 'Linux Basics', difficulty: 'Beginner',
    question: 'How do Linux package managers work, and which distro uses which?',
    answer: 'A package manager downloads, installs, updates, and removes software along with its dependencies. Debian/Ubuntu use apt (packages are .deb). RHEL/Fedora/CentOS use dnf/yum (packages are .rpm). Arch uses pacman. All query central repositories. snap and flatpak are universal sandboxed alternatives that work across distros.',
    tip: `# Debian / Ubuntu (apt)
sudo apt update          -- refresh package index
sudo apt upgrade         -- upgrade all installed packages
sudo apt install nginx   -- install
sudo apt remove nginx    -- uninstall
sudo apt search redis    -- search

# RHEL / Fedora (dnf)
sudo dnf install nginx
sudo dnf update

# Arch (pacman)
sudo pacman -Syu         -- sync + upgrade
sudo pacman -S nginx     -- install
sudo pacman -Ss redis    -- search`
  },

  // ── Files & Permissions ──────────────────────────────────
  {
    category: 'Files & Permissions', difficulty: 'Beginner',
    question: 'How do Linux file permissions work (rwx, chmod, chown)?',
    answer: 'Every file has three permission sets: owner (u), group (g), others (o). Each set has read (r=4), write (w=2), execute (x=1). chmod changes permissions; chown changes owner/group. Directories need execute permission to be entered (cd). Permissions display as -rwxr-xr-- in ls -l.',
    tip: `ls -l file.sh
# -rwxr-xr--  1  alice  dev  1024  Mar 1 file.sh
#  |||||||||        ^     ^
#  rwx = owner(alice) has read+write+execute
#   r-x = group(dev) has read+execute
#    r-- = others have read only

chmod 755 file.sh    -- rwxr-xr-x  (owner=7, group=5, others=5)
chmod +x  file.sh    -- add execute for all
chmod u-w file.sh    -- remove write from owner
chown alice:dev file.sh   -- change owner and group
chown -R alice dir/       -- recursive`
  },
  {
    category: 'Files & Permissions', difficulty: 'Intermediate',
    question: 'What is the difference between hard links and symbolic (soft) links?',
    answer: 'A hard link is a second directory entry pointing to the same inode (same file data). Deleting the original leaves the hard link intact. A symlink (symbolic link) is a separate file that stores a path to the target — like a shortcut. If the target is deleted, the symlink becomes dangling. Hard links cannot span filesystems or link to directories.',
    tip: `# Hard link — same inode, survives original deletion
ln original.txt hard.txt
ls -li   -- both show the same inode number

# Symbolic link — stores a path
ln -s /etc/nginx/nginx.conf nginx.conf
ls -la   -- nginx.conf -> /etc/nginx/nginx.conf

# Check inode numbers
stat original.txt
stat hard.txt      -- same inode!

# Find all hard links to a file
find / -inum <inode_number> 2>/dev/null`
  },
  {
    category: 'Files & Permissions', difficulty: 'Intermediate',
    question: 'How do you search for files with the find command?',
    answer: 'find recursively traverses a directory tree and filters by name, type, size, time, permissions, and more. It can also execute actions on matches with -exec. It is very powerful but can be slow on large trees — locate (using a pre-built index) is faster for name-only searches.',
    tip: `find /var/log -name "*.log"          -- by name pattern
find . -type f -size +10M            -- files > 10 MB
find . -type d -name "node_modules"  -- directories
find /home -user alice               -- owned by alice
find . -mtime -7                     -- modified in last 7 days
find . -perm 777                     -- exact permission match
find . -name "*.tmp" -delete         -- find and delete
find . -name "*.js" -exec wc -l {} + -- exec on matches

# Faster name search (uses daily index)
locate nginx.conf`
  },
  {
    category: 'Files & Permissions', difficulty: 'Intermediate',
    question: 'How do grep, awk, and sed work for text processing?',
    answer: 'grep searches for patterns in text (regex supported). awk is a field-based text processor — great for columnar data. sed is a stream editor for substitution and deletion. Together they form the backbone of Linux text processing pipelines.',
    tip: `# grep — find matching lines
grep "ERROR" app.log              -- basic search
grep -i "error" app.log           -- case-insensitive
grep -r "TODO" ./src              -- recursive in dir
grep -v "DEBUG" app.log           -- invert (exclude)
grep -n "fail" app.log            -- show line numbers

# awk — field processor (default delimiter: whitespace)
awk '{print $1, $3}' file         -- print cols 1 and 3
awk -F: '{print $1}' /etc/passwd  -- colon-delimited, col 1
awk '$3 > 100 {print}' data.csv   -- filter by value

# sed — stream edit
sed 's/foo/bar/g' file            -- replace all foo→bar
sed -i 's/foo/bar/g' file         -- in-place edit
sed '/^#/d' file                  -- delete comment lines`
  },
  {
    category: 'Files & Permissions', difficulty: 'Advanced',
    question: 'What are special permissions: setuid, setgid, and sticky bit?',
    answer: 'setuid (s on owner execute): program runs as file owner, not the invoking user — used by /usr/bin/passwd to write /etc/shadow as root. setgid (s on group execute): on files, runs as group; on directories, new files inherit the group. Sticky bit (t on others execute): on directories, only the file owner can delete their files — used on /tmp.',
    tip: `# setuid — run as file owner (e.g. root)
chmod u+s /usr/bin/passwd
ls -la /usr/bin/passwd
# -rwsr-xr-x   ← 's' replaces 'x' for owner

# setgid — inherit group on dir
chmod g+s /shared
# New files in /shared get /shared's group

# Sticky bit — only owner can delete
chmod +t /tmp
ls -la /
# drwxrwxrwt  ← 't' at end

# Numeric: 4=setuid, 2=setgid, 1=sticky
chmod 4755 file     -- setuid + rwxr-xr-x
chmod 1777 /tmp     -- sticky + full rwx`
  },

  // ── Processes & System ───────────────────────────────────
  {
    category: 'Processes & System', difficulty: 'Beginner',
    question: 'How do you view and manage processes in Linux (ps, top, kill)?',
    answer: 'ps lists running processes (snapshot). top / htop show a live, sortable process table with CPU/memory. Every process has a PID. kill sends signals — SIGTERM (15) asks the process to exit gracefully; SIGKILL (9) forces immediate termination. kill -9 should be a last resort.',
    tip: `ps aux              -- all processes, BSD style
ps -ef              -- all processes, POSIX style
ps aux | grep nginx -- find nginx process

top                 -- live view (q=quit, k=kill by PID)
htop                -- friendlier (needs install)

kill 1234           -- SIGTERM to PID 1234 (graceful)
kill -9 1234        -- SIGKILL (force)
kill -l             -- list all signal names
killall nginx       -- kill all processes named nginx
pkill -u alice      -- kill all processes owned by alice

# Background jobs
sleep 60 &          -- run in background
jobs                -- list background jobs
fg %1               -- bring job 1 to foreground`
  },
  {
    category: 'Processes & System', difficulty: 'Intermediate',
    question: 'How does systemd manage services (systemctl)?',
    answer: 'systemd is the init system on most modern Linux distros. It starts processes at boot and manages services as "units". systemctl is the control interface. Services are defined in unit files at /etc/systemd/system/ or /lib/systemd/system/. journald collects all logs — query with journalctl.',
    tip: `systemctl status nginx         -- check service state
systemctl start nginx          -- start now
systemctl stop nginx           -- stop now
systemctl restart nginx        -- restart
systemctl reload nginx         -- reload config (no downtime)
systemctl enable nginx         -- start on boot
systemctl disable nginx        -- don't start on boot
systemctl list-units --type=service   -- all services

# Logs via journald
journalctl -u nginx            -- logs for nginx
journalctl -u nginx -f         -- follow (tail -f style)
journalctl --since "1 hour ago"
journalctl -p err              -- errors only`
  },
  {
    category: 'Processes & System', difficulty: 'Intermediate',
    question: 'How do you schedule tasks with cron?',
    answer: 'cron is a daemon that runs commands on a schedule defined in crontab files. Each line is: minute hour day-of-month month day-of-week command. * means "every". User crontabs live in /var/spool/cron/; system crontabs live in /etc/cron.d/ and /etc/crontab. Use crontab -e to edit safely.',
    tip: `# Cron field order:
# .---------------- minute (0-59)
# |   .------------ hour (0-23)
# |   |   .-------- day of month (1-31)
# |   |   |   .---- month (1-12)
# |   |   |   |   . day of week (0-6, 0=Sun)
# |   |   |   |   |
# *   *   *   *   *  command

# Examples:
0 2 * * *  /usr/bin/backup.sh          -- 2 AM daily
*/5 * * * * /usr/bin/check.sh          -- every 5 min
0 9 * * 1   /usr/bin/report.sh         -- Mon 9 AM
@reboot     /usr/bin/startup.sh        -- on boot

crontab -e     -- edit your crontab
crontab -l     -- list current crontab
crontab -r     -- remove crontab`
  },
  {
    category: 'Processes & System', difficulty: 'Intermediate',
    question: 'How do environment variables work in Linux?',
    answer: 'Environment variables are key=value pairs inherited by child processes. export makes a variable available to subprocesses. PATH tells the shell where to find executables. Startup files: ~/.bashrc runs for interactive shells; ~/.bash_profile / ~/.profile runs for login shells; /etc/environment is system-wide.',
    tip: `echo $PATH                     -- print search path for binaries
echo $HOME                     -- home directory
printenv                       -- list all env vars
printenv USER                  -- single var

MY_VAR="hello"                 -- set local var
export MY_VAR                  -- export to child processes
export MY_VAR="hello"          -- set + export at once
unset MY_VAR                   -- remove variable

# Persist across sessions — add to ~/.bashrc:
export JAVA_HOME=/usr/lib/jvm/java-17
export PATH="$HOME/.local/bin:$PATH"

source ~/.bashrc               -- reload without restart
env VAR=value command          -- set var for one command only`
  },
  {
    category: 'Processes & System', difficulty: 'Advanced',
    question: 'How do you monitor system resources and diagnose bottlenecks?',
    answer: 'Use top/htop for CPU+memory, vmstat for memory and I/O rates, iostat for disk throughput, df/du for disk space, free for memory details, lsof for open file descriptors. High load average (>CPU count) means CPU-bound or I/O-wait. Check wa% in top for I/O wait.',
    tip: `free -h                -- RAM: total/used/free/cache/swap
df -h                  -- disk space per filesystem
du -sh ./dir           -- size of a directory
du -sh * | sort -rh | head  -- largest items in CWD

vmstat 1 5             -- memory, swap, I/O every 1s x5
iostat -xz 1           -- per-disk stats (await=latency ms)
iotop                  -- live per-process disk I/O

lsof -p 1234           -- open files for PID
lsof -i :80            -- what's on port 80
ss -tlnp               -- listening TCP sockets
uptime                 -- load average (1/5/15 min)

# Load average > CPU cores = overloaded
nproc                  -- number of CPUs`
  },

  // ── Networking & SSH ────────────────────────────────────
  {
    category: 'Networking & SSH', difficulty: 'Beginner',
    question: 'How do you connect to a remote server via SSH and set up key-based auth?',
    answer: 'SSH (Secure Shell) creates an encrypted tunnel to a remote host. Password auth is convenient but weaker. Key-based auth uses a private key (stays on your machine) and public key (added to ~/.ssh/authorized_keys on the server). Use ssh-keygen to generate a key pair and ssh-copy-id to deploy the public key.',
    tip: `# Connect
ssh user@192.168.1.10
ssh -p 2222 user@host     -- custom port
ssh -i ~/.ssh/mykey user@host  -- specific key

# Generate key pair (Ed25519 = recommended)
ssh-keygen -t ed25519 -C "my laptop"
# Creates: ~/.ssh/id_ed25519 (private) + id_ed25519.pub (public)

# Deploy public key to server
ssh-copy-id user@host
# or manually:
cat ~/.ssh/id_ed25519.pub | ssh user@host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# SSH config file (~/.ssh/config)
Host myserver
  HostName 192.168.1.10
  User alice
  IdentityFile ~/.ssh/id_ed25519

ssh myserver              -- now works with alias`
  },
  {
    category: 'Networking & SSH', difficulty: 'Intermediate',
    question: 'What are the essential Linux networking commands?',
    answer: 'ip (modern replacement for ifconfig/route) manages interfaces and routing. ss (replacement for netstat) shows socket stats. ping tests connectivity. curl / wget make HTTP requests. dig / nslookup query DNS. traceroute maps the network path.',
    tip: `ip addr show               -- network interfaces & IPs
ip route show              -- routing table
ip addr add 192.168.1.5/24 dev eth0  -- add IP

ss -tlnp                   -- TCP listening sockets + process
ss -s                      -- socket summary

ping -c 4 google.com       -- 4 ICMP packets
traceroute google.com      -- hop-by-hop path
mtr google.com             -- traceroute + ping (live)

curl -I https://example.com     -- HTTP headers only
curl -o file.zip URL            -- download
wget -q URL                     -- quiet download

dig google.com                  -- DNS A record
dig google.com MX               -- MX records
dig @8.8.8.8 google.com         -- query specific DNS server
nslookup google.com`
  },
  {
    category: 'Networking & SSH', difficulty: 'Intermediate',
    question: 'How do you transfer files between servers with scp and rsync?',
    answer: 'scp (secure copy) transfers files over SSH — simple but copies everything every time. rsync is smarter: it only transfers differences (delta sync), supports compression, and preserves permissions. rsync is preferred for backups and large transfers.',
    tip: `# scp — simple copy over SSH
scp file.txt user@host:/remote/path/    -- local to remote
scp user@host:/remote/file.txt ./       -- remote to local
scp -r ./dir user@host:/remote/         -- recursive

# rsync — delta sync (only changed bytes)
rsync -avz ./src/ user@host:/dst/       -- sync dir
# -a = archive (preserve perms/times/symlinks)
# -v = verbose
# -z = compress in transit

rsync -avz --delete ./src/ user@host:/dst/
# --delete removes files on remote not in source

rsync -avz --progress large_file user@host:/dst/
# --progress shows transfer speed

# Dry run first (see what would change)
rsync -avz --dry-run ./src/ user@host:/dst/`
  },
  {
    category: 'Networking & SSH', difficulty: 'Advanced',
    question: 'How does the Linux firewall work (iptables / ufw)?',
    answer: 'iptables is the low-level netfilter interface that processes packets through chains (INPUT, OUTPUT, FORWARD) with rules (ACCEPT, DROP, REJECT). ufw (Uncomplicated Firewall) is a frontend for iptables that simplifies common rules. firewalld is another frontend used on RHEL/Fedora.',
    tip: `# ufw — simple firewall (Ubuntu default)
sudo ufw enable
sudo ufw status verbose
sudo ufw allow 22/tcp          -- allow SSH
sudo ufw allow 80/tcp          -- allow HTTP
sudo ufw allow 443/tcp         -- allow HTTPS
sudo ufw deny 3306             -- block MySQL from outside
sudo ufw delete allow 80/tcp   -- remove a rule

# iptables — low level
sudo iptables -L -v -n         -- list all rules
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -j DROP  -- drop everything else
sudo iptables-save > /etc/iptables/rules.v4  -- persist`
  },
  {
    category: 'Networking & SSH', difficulty: 'Advanced',
    question: 'What is SSH port forwarding and tunneling?',
    answer: 'SSH tunneling forwards TCP ports through an encrypted SSH connection. Local forwarding brings a remote port to your local machine (access a DB behind a firewall). Remote forwarding exposes a local port on the remote server. Dynamic forwarding creates a SOCKS proxy. Useful for secure access to services not exposed to the internet.',
    tip: `# Local forwarding: localhost:5432 → remote DB
ssh -L 5432:db-server:5432 user@jump-host
# Now connect to localhost:5432 to reach db-server

# Remote forwarding: expose local port on remote server
ssh -R 8080:localhost:3000 user@public-server
# Remote:8080 → your local:3000

# Dynamic (SOCKS proxy)
ssh -D 1080 user@remote-host
# Configure browser to use SOCKS5 proxy at localhost:1080

# Keep alive / background tunnel
ssh -fNL 5432:db:5432 user@jump-host
# -f = background, -N = no remote command

# Jump host / ProxyJump (bastion)
ssh -J user@bastion user@internal-server`
  },

  // ── Shell Scripting ──────────────────────────────────────
  {
    category: 'Shell Scripting', difficulty: 'Beginner',
    question: 'What are the basics of writing a Bash script?',
    answer: 'A Bash script starts with a shebang line (#!/bin/bash) so the OS knows the interpreter. Variables are set without spaces (VAR=value) and read with $VAR. Command output is captured with $() (command substitution). Always quote variables "$VAR" to handle spaces. Make the script executable with chmod +x.',
    tip: `#!/bin/bash
# script.sh — basic template

NAME="World"
echo "Hello, $NAME!"

# Command substitution
TODAY=$(date +%Y-%m-%d)
FILES=$(ls *.log | wc -l)
echo "Today: $TODAY, log files: $FILES"

# User input
read -p "Enter your name: " USERNAME
echo "Hi, $USERNAME"

# Special variables
echo "$0"   -- script name
echo "$1"   -- first argument
echo "$#"   -- number of arguments
echo "$@"   -- all arguments
echo "$$"   -- current PID

chmod +x script.sh
./script.sh arg1`
  },
  {
    category: 'Shell Scripting', difficulty: 'Intermediate',
    question: 'How do conditionals and loops work in Bash?',
    answer: 'if/elif/else uses test conditions (or [[ ]] / [ ]). Numeric comparisons use -eq, -lt, -gt etc. String comparisons use == and !=. for loops iterate over lists or ranges. while loops run until a condition is false. break and continue work as expected.',
    tip: `#!/bin/bash

# if / elif / else
if [[ $USER == "root" ]]; then
  echo "Running as root"
elif [[ -f /etc/nginx/nginx.conf ]]; then
  echo "Nginx config found"
else
  echo "Normal user"
fi

# Numeric test
COUNT=5
if [[ $COUNT -gt 3 ]]; then echo "big"; fi
# -eq -ne -lt -le -gt -ge

# for loop
for f in *.log; do
  echo "Processing $f"
done

for i in {1..5}; do echo "Item $i"; done

# C-style for
for ((i=0; i<5; i++)); do echo $i; done

# while loop
while [[ $COUNT -gt 0 ]]; do
  echo $COUNT
  ((COUNT--))
done`
  },
  {
    category: 'Shell Scripting', difficulty: 'Intermediate',
    question: 'How do pipes and redirection work in the shell?',
    answer: 'Redirection sends I/O to/from files. > overwrites, >> appends, < reads from file. 2> redirects stderr, 2>&1 merges stderr into stdout. Pipes (|) connect stdout of one command to stdin of the next — enabling powerful one-liners. /dev/null is the black hole that discards output.',
    tip: `# Redirect stdout
ls -la > listing.txt           -- overwrite
ls -la >> listing.txt          -- append
cat < input.txt                -- read from file

# Redirect stderr
command 2> error.log           -- stderr to file
command 2>/dev/null            -- discard errors
command > out.txt 2>&1         -- stdout+stderr to file
command &> out.txt             -- shorthand (bash only)

# Pipes — chain commands
ls -la | grep ".log"           -- filter output
cat /var/log/syslog | grep ERROR | wc -l
ps aux | sort -k3 -rn | head   -- top CPU processes

# tee — output to file AND stdout
command | tee output.txt       -- split stream
command | tee -a output.txt    -- append mode

# Process substitution
diff <(ls dir1) <(ls dir2)    -- compare command outputs`
  },
  {
    category: 'Shell Scripting', difficulty: 'Advanced',
    question: 'How do you handle errors and exit codes in Bash scripts?',
    answer: 'Every command returns an exit code: 0 = success, non-zero = failure. $? holds the last exit code. set -e makes the script exit on any error; set -u treats unset variables as errors; set -o pipefail catches pipe failures. Use trap to clean up resources on exit or error.',
    tip: `#!/bin/bash
set -euo pipefail
# -e  exit on error
# -u  error on unset variable
# -o pipefail  catch pipe failures

# Manual exit code check
if ! cp src.txt dst.txt; then
  echo "Copy failed!" >&2
  exit 1
fi

# Trap for cleanup
TMP=$(mktemp)
trap "rm -f $TMP" EXIT   -- runs on exit (even on error)

# Custom exit codes
readonly E_BADARGS=65
[[ $# -eq 0 ]] && { echo "Usage: $0 <file>"; exit $E_BADARGS; }

# Log to stderr (good practice)
log_error() { echo "[ERROR] $*" >&2; }
log_info()  { echo "[INFO]  $*"; }

# Check command exists
command -v docker &>/dev/null || { log_error "docker not found"; exit 1; }`
  },
  {
    category: 'Shell Scripting', difficulty: 'Advanced',
    question: 'What are useful Bash scripting patterns for real-world automation?',
    answer: 'Real scripts use functions, argument parsing, locks to prevent duplicate runs, and logging. getopts parses flags. flock ensures only one instance runs. Heredocs write multi-line strings. Arrays handle lists of items. Subshells () isolate environment changes.',
    tip: `#!/bin/bash
set -euo pipefail

# Functions
usage() { echo "Usage: $0 [-v] [-f FILE] TARGET"; exit 1; }

# getopts — parse flags
VERBOSE=0; FILE=""
while getopts "vf:" opt; do
  case $opt in
    v) VERBOSE=1 ;;
    f) FILE="$OPTARG" ;;
    *) usage ;;
  esac
done
shift $((OPTIND-1))   -- remaining args start at $1

# Prevent duplicate instances (lock file)
LOCK=/tmp/myscript.lock
exec 9>"$LOCK"
flock -n 9 || { echo "Already running"; exit 1; }

# Arrays
FILES=("a.txt" "b.txt" "c.txt")
for f in "\${FILES[@]}"; do echo "$f"; done
echo "Count: \${#FILES[@]}"

# Heredoc
cat <<'EOF' > /tmp/config.yaml
key: value
port: 8080
EOF`
  },
];

/* ═══════════════════════════════════════════════════════════
   API — RESTful API & JSON  (20 cards across 4 categories)
═══════════════════════════════════════════════════════════ */
const API_CARDS = [
  // ── JSON Basics ──────────────────────────────────────────
  {
    category: 'JSON Basics', difficulty: 'Beginner',
    question: 'What is JSON and why is it the standard format for APIs?',
    answer: 'JSON (JavaScript Object Notation) is a lightweight, text-based data format derived from JavaScript object syntax. It is language-agnostic, human-readable, and natively supported by every major programming language. APIs use JSON because it is compact, easy to parse, and maps naturally to objects/arrays that most languages understand.',
    tip: `{
  "name": "Alice",
  "age": 30,
  "isAdmin": false,
  "scores": [95, 87, 100],
  "address": {
    "city": "Hanoi",
    "zip": "10000"
  },
  "nickname": null
}

// JSON rules:
// - Keys MUST be double-quoted strings
// - Strings MUST use double quotes (not single)
// - No trailing commas
// - No comments
// - Values: string, number, boolean, null, object, array`
  },
  {
    category: 'JSON Basics', difficulty: 'Beginner',
    question: 'What are the 6 JSON data types?',
    answer: 'JSON supports exactly 6 value types: (1) string — text in double quotes, (2) number — integer or float, no NaN/Infinity, (3) boolean — true or false, (4) null — represents absence of value, (5) object — unordered key-value pairs in {}, (6) array — ordered list of values in []. All JSON values must be one of these types.',
    tip: `{
  "type_string":  "hello world",
  "type_number":  42,
  "type_float":   3.14,
  "type_bool":    true,
  "type_null":    null,
  "type_object":  { "key": "value" },
  "type_array":   [1, "two", true, null]
}

// NOT valid JSON values:
// undefined      -- JS-only
// NaN            -- not allowed
// Infinity       -- not allowed
// functions      -- not allowed
// Date objects   -- serialize as string: "2026-03-08T00:00:00Z"`
  },
  {
    category: 'JSON Basics', difficulty: 'Beginner',
    question: 'How do you parse and serialize JSON in JavaScript, Python, and C#?',
    answer: 'Parsing converts a JSON string into a native data structure. Serialization (stringify) converts a native object into a JSON string. Every major language has built-in support. Always wrap parsing in try/catch because malformed JSON throws an exception.',
    tip: `// JavaScript
const obj  = JSON.parse('{"name":"Alice","age":30}');
const json = JSON.stringify(obj, null, 2);  // 2 = indent spaces
obj.name;   // "Alice"

// Python
import json
obj  = json.loads('{"name": "Alice", "age": 30}')
text = json.dumps(obj, indent=2)
obj["name"]  # "Alice"

# C#
using System.Text.Json;
var obj  = JsonSerializer.Deserialize<MyClass>(jsonString);
var json = JsonSerializer.Serialize(obj);

// Always handle parse errors:
try {
  const data = JSON.parse(raw);
} catch (e) {
  console.error("Invalid JSON:", e.message);
}`
  },
  {
    category: 'JSON Basics', difficulty: 'Intermediate',
    question: 'What is JSON Schema and how does it validate API payloads?',
    answer: 'JSON Schema is a vocabulary for describing and validating JSON documents. It defines the expected shape: required fields, types, formats, min/max values, patterns, and more. API gateways and validators use it to reject malformed requests before they hit business logic. OpenAPI (Swagger) uses JSON Schema internally.',
    tip: `// JSON Schema example
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "email", "age"],
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "age": {
      "type": "integer",
      "minimum": 0,
      "maximum": 150
    },
    "role": {
      "type": "string",
      "enum": ["admin", "user", "guest"]
    }
  },
  "additionalProperties": false
}`
  },
  {
    category: 'JSON Basics', difficulty: 'Intermediate',
    question: 'What is the difference between JSON and JSON5 / NDJSON / JSON:API?',
    answer: 'JSON is strict — no comments, no trailing commas, double-quoted keys only. JSON5 relaxes these rules for config files (supports comments, single quotes, trailing commas). NDJSON (Newline-Delimited JSON) puts one JSON object per line — ideal for streaming and log files. JSON:API is a specification for structuring REST API responses with relationships, pagination, and links.',
    tip: `// JSON5 (config files, not wire format)
{
  // comment allowed
  name: 'Alice',       // single quotes OK
  scores: [95, 87,],  // trailing comma OK
}

// NDJSON — one JSON object per line (streaming)
{"id":1,"event":"click","ts":"2026-01-01"}
{"id":2,"event":"scroll","ts":"2026-01-01"}
{"id":3,"event":"submit","ts":"2026-01-01"}

// JSON:API response structure
{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": { "title": "Hello" },
    "relationships": {
      "author": { "data": { "type": "people", "id": "9" } }
    }
  },
  "links": { "self": "https://api.example.com/articles/1" }
}`
  },

  // ── REST Fundamentals ────────────────────────────────────
  {
    category: 'REST Fundamentals', difficulty: 'Beginner',
    question: 'What is REST and what are its 6 architectural constraints?',
    answer: 'REST (Representational State Transfer) is an architectural style for distributed systems defined by Roy Fielding in 2000. Its 6 constraints: (1) Client-Server — UI and data storage are separate, (2) Stateless — each request has all info needed; no server session, (3) Cacheable — responses declare cacheability, (4) Uniform Interface — consistent resource-based URLs, (5) Layered System — client does not know if it talks to a proxy or server, (6) Code on Demand (optional) — server can send executable code.',
    tip: `// Stateless = key principle
// Each request must carry all context:

// ✅ RESTful — state in request
GET /orders?userId=123&status=pending
Authorization: Bearer <token>

// ❌ NOT RESTful — server tracks session
GET /my-orders        // relies on server-side session

// Uniform Interface — resource-based URLs:
GET    /users          -- list users
GET    /users/42       -- get user 42
POST   /users          -- create user
PUT    /users/42       -- replace user 42
PATCH  /users/42       -- partial update
DELETE /users/42       -- delete user 42`
  },
  {
    category: 'REST Fundamentals', difficulty: 'Beginner',
    question: 'What do the HTTP methods mean in a REST API, and which are safe/idempotent?',
    answer: 'GET retrieves a resource (safe + idempotent). POST creates a new resource (neither). PUT replaces a resource completely (idempotent). PATCH partially updates a resource. DELETE removes a resource (idempotent). Safe means no side effects. Idempotent means repeating the request has the same outcome as doing it once.',
    tip: `Method  | Body | Safe | Idempotent | Typical use
--------|------|------|------------|------------------
GET     |  No  |  ✅  |     ✅     | Read resource
POST    |  Yes |  ❌  |     ❌     | Create resource
PUT     |  Yes |  ❌  |     ✅     | Full replace
PATCH   |  Yes |  ❌  |     ❌*    | Partial update
DELETE  |  No  |  ❌  |     ✅     | Delete resource
HEAD    |  No  |  ✅  |     ✅     | Headers only (no body)
OPTIONS |  No  |  ✅  |     ✅     | CORS preflight, capabilities

// * PATCH can be designed idempotent but is not required to be

// Idempotent: calling N times = calling once
// DELETE /users/42 → 200 first time, 404 after — still idempotent
// POST   /users    → creates a NEW user each call — not idempotent`
  },
  {
    category: 'REST Fundamentals', difficulty: 'Beginner',
    question: 'What are the most important HTTP status codes for REST APIs?',
    answer: '2xx = success, 3xx = redirection, 4xx = client error, 5xx = server error. Most used: 200 OK, 201 Created (after POST), 204 No Content (after DELETE), 400 Bad Request, 401 Unauthorized (not authenticated), 403 Forbidden (authenticated but not allowed), 404 Not Found, 409 Conflict, 422 Unprocessable Entity (validation failed), 429 Too Many Requests, 500 Internal Server Error.',
    tip: `// Success
200 OK                -- GET, PUT, PATCH success
201 Created           -- POST created a resource
  Location: /users/42 -- header pointing to new resource
204 No Content        -- DELETE success (no body)

// Client errors (fix your request)
400 Bad Request       -- malformed syntax
401 Unauthorized      -- missing/invalid auth token
403 Forbidden         -- authenticated but no permission
404 Not Found         -- resource does not exist
405 Method Not Allowed
409 Conflict          -- duplicate, version mismatch
422 Unprocessable Entity  -- valid syntax, fails validation
429 Too Many Requests -- rate limit hit
  Retry-After: 60     -- header: seconds to wait

// Server errors (not your fault)
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
  Retry-After: 30`
  },
  {
    category: 'REST Fundamentals', difficulty: 'Beginner',
    question: 'What are the key HTTP headers used in REST APIs?',
    answer: 'Request headers carry metadata about the request: Authorization (auth token), Content-Type (body format), Accept (desired response format), Accept-Language, If-None-Match (cache validation). Response headers carry metadata about the response: Content-Type, Cache-Control, ETag, Location (after 201), X-RateLimit-* for rate limiting.',
    tip: `// Common REQUEST headers
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...
Content-Type: application/json
Accept: application/json
Accept-Language: en-US
If-None-Match: "abc123"   -- conditional GET (cache)
Idempotency-Key: uuid-v4  -- safe to retry POST

// Common RESPONSE headers
Content-Type: application/json; charset=utf-8
Cache-Control: no-store
Cache-Control: public, max-age=3600
ETag: "abc123"            -- version fingerprint
Location: /users/42       -- after 201 Created
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 42
X-RateLimit-Reset: 1700000000
Retry-After: 60           -- after 429 or 503`
  },
  {
    category: 'REST Fundamentals', difficulty: 'Intermediate',
    question: 'How does REST compare to GraphQL and gRPC?',
    answer: 'REST uses fixed endpoints returning fixed shapes — simple but can over-fetch or under-fetch. GraphQL uses a single endpoint where clients query exactly the fields they need — great for complex, client-driven data requirements. gRPC uses Protocol Buffers (binary) over HTTP/2 — extremely fast for internal service-to-service communication but harder to use from browsers.',
    tip: `// REST — fixed endpoint, fixed response shape
GET /users/42
// → returns ALL user fields whether needed or not

// GraphQL — one endpoint, client picks fields
POST /graphql
{
  "query": "{ user(id: 42) { name email } }"
}
// → returns ONLY name and email

// gRPC — binary protocol, defined in .proto files
// service UserService {
//   rpc GetUser (UserRequest) returns (UserResponse);
// }

Feature     | REST       | GraphQL    | gRPC
------------|------------|------------|----------
Protocol    | HTTP/1.1+  | HTTP       | HTTP/2
Format      | JSON       | JSON       | Protobuf (binary)
Typing      | Loose      | Strong     | Strong
Over-fetch  | Common     | Solved     | N/A
Browser use | ✅ Easy    | ✅ Easy    | ❌ Hard
Best for    | Public API | Flexible   | Microservices`
  },

  // ── REST Design ──────────────────────────────────────────
  {
    category: 'REST Design', difficulty: 'Intermediate',
    question: 'What are the best practices for naming REST API endpoints?',
    answer: 'Use nouns (resources), not verbs — the HTTP method IS the verb. Use plural nouns (/users, /orders). Use lowercase kebab-case. Nest related resources to show relationships (/users/42/orders). Never put actions in the URL (/users/42/activate is acceptable as a last resort for non-CRUD actions). Keep URLs intuitive and consistent.',
    tip: `// ✅ Good REST URL design
GET    /users                    -- list users
GET    /users/42                 -- get user 42
POST   /users                    -- create user
PUT    /users/42                 -- replace user 42
PATCH  /users/42                 -- partial update
DELETE /users/42                 -- delete user 42
GET    /users/42/orders          -- user 42's orders
GET    /users/42/orders/7        -- specific order

// ❌ Bad — verbs in URL
POST   /createUser
GET    /getUser?id=42
POST   /users/42/delete
PUT    /updateUser/42

// ✅ Non-CRUD actions (last resort)
POST   /users/42/activate
POST   /orders/7/cancel
POST   /payments/capture`
  },
  {
    category: 'REST Design', difficulty: 'Intermediate',
    question: 'How do you implement pagination, filtering, and sorting in REST APIs?',
    answer: 'Never return unbounded lists — always paginate. Offset pagination uses ?page=2&limit=20 (simple but slow for large offsets). Cursor pagination uses ?cursor=<token> (scalable, used by Facebook/Twitter). Filtering uses query params (?status=active&role=admin). Sorting uses ?sort=createdAt&order=desc. Include pagination metadata in the response.',
    tip: `// Offset pagination
GET /orders?page=2&limit=20&sort=createdAt&order=desc

// Response with pagination metadata
{
  "data": [...],
  "meta": {
    "total": 500,
    "page": 2,
    "limit": 20,
    "totalPages": 25
  },
  "links": {
    "self":  "/orders?page=2&limit=20",
    "prev":  "/orders?page=1&limit=20",
    "next":  "/orders?page=3&limit=20",
    "first": "/orders?page=1&limit=20",
    "last":  "/orders?page=25&limit=20"
  }
}

// Cursor pagination (scalable)
GET /feed?cursor=eyJpZCI6MTAwfQ&limit=20

// Filtering
GET /products?category=shoes&minPrice=50&maxPrice=200
GET /users?role=admin&status=active&createdAfter=2026-01-01`
  },
  {
    category: 'REST Design', difficulty: 'Intermediate',
    question: 'How do you version a REST API?',
    answer: 'API versioning lets you evolve an API without breaking existing clients. Three strategies: (1) URL path versioning (/v1/users) — most common, visible, easy to route, (2) Header versioning (Accept: application/vnd.api.v1+json) — cleaner URLs but harder to test, (3) Query param (?version=1) — easy but pollutes URLs. Never delete v1 without proper deprecation notice.',
    tip: `// 1. URL path versioning (most common)
GET /api/v1/users
GET /api/v2/users

// 2. Header versioning
GET /api/users
Accept: application/vnd.myapi.v2+json
// or custom header:
API-Version: 2

// 3. Query param
GET /api/users?version=2

// Deprecation best practices:
// 1. Add Deprecation header before removal
Deprecation: true
Sunset: Sat, 31 Dec 2026 23:59:59 GMT
Link: <https://docs.api.com/migrate-v2>; rel="successor-version"

// 2. Communicate a timeline to API consumers
// 3. Keep v1 running during migration window
// 4. Log v1 usage to contact active consumers`
  },
  {
    category: 'REST Design', difficulty: 'Intermediate',
    question: 'How should REST APIs return errors consistently?',
    answer: 'Never return 200 OK with an error body. Use the correct HTTP status code. Return a consistent error object with: an error code (machine-readable), a message (human-readable), details (for validation errors — field-level errors), and a request ID (for debugging). RFC 7807 "Problem Details" is the standard format.',
    tip: `// RFC 7807 Problem Details format
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/problem+json

{
  "type":     "https://api.example.com/errors/validation",
  "title":    "Validation Failed",
  "status":   422,
  "detail":   "The request body contains invalid fields.",
  "instance": "/users",
  "errors": [
    { "field": "email",    "message": "Invalid email format" },
    { "field": "age",      "message": "Must be at least 18" }
  ],
  "requestId": "req_abc123xyz"
}

// Never do this:
HTTP/1.1 200 OK
{ "success": false, "error": "something went wrong" }
// ❌ wrong status code, vague message, not machine-readable`
  },
  {
    category: 'REST Design', difficulty: 'Advanced',
    question: 'What is HATEOAS and why does it matter for REST maturity?',
    answer: 'HATEOAS (Hypermedia As The Engine Of Application State) is the highest level of REST maturity (Richardson Maturity Model level 3). The server embeds links in responses so clients discover actions dynamically — they do not hard-code URLs. The client only needs to know the root URL; all other endpoints are discovered through links returned in responses.',
    tip: `// Richardson Maturity Model:
// Level 0 — one endpoint, POST everything (SOAP-style)
// Level 1 — multiple resources (separate URLs)
// Level 2 — HTTP verbs + status codes used correctly
// Level 3 — HATEOAS (hypermedia links in responses)

// Level 3 response example:
GET /orders/42
{
  "id": 42,
  "status": "pending",
  "total": 150.00,
  "_links": {
    "self":    { "href": "/orders/42" },
    "pay":     { "href": "/orders/42/payment",  "method": "POST" },
    "cancel":  { "href": "/orders/42/cancel",   "method": "POST" },
    "customer":{ "href": "/users/7" }
  }
}
// Client follows "_links" — no URL hard-coding needed
// If "cancel" link is absent, the action is not available`
  },

  // ── API in Practice ──────────────────────────────────────
  {
    category: 'API in Practice', difficulty: 'Intermediate',
    question: 'What are the main API authentication methods (API keys, JWT, OAuth2)?',
    answer: 'API Key — simple secret token sent in a header or query param, good for server-to-server. JWT (JSON Web Token) — a signed, self-contained token carrying claims; the server verifies the signature without a DB lookup. OAuth2 — a delegation framework where users grant third-party apps limited access (Authorization Code flow for web apps, Client Credentials for machine-to-machine).',
    tip: `// 1. API Key (simple, server-to-server)
GET /data
X-API-Key: sk-abc123xyz

// 2. Bearer Token / JWT
GET /profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// JWT structure: header.payload.signature (base64url)
// Payload (decoded):
{
  "sub": "42",
  "name": "Alice",
  "role": "admin",
  "iat": 1700000000,
  "exp": 1700003600    // expires in 1 hour
}
// Server verifies signature — no DB lookup needed

// 3. OAuth2 Authorization Code Flow
// 1. User → App → redirect to Auth Server
// 2. User logs in + grants permission
// 3. Auth Server → redirect back with code
// 4. App exchanges code for access_token + refresh_token
// 5. App calls API with: Authorization: Bearer <access_token>`
  },
  {
    category: 'API in Practice', difficulty: 'Intermediate',
    question: 'How does rate limiting protect APIs and how do you implement it?',
    answer: 'Rate limiting caps how many requests a client can make in a time window to prevent abuse, DoS, and runaway clients. Common algorithms: Fixed Window (simple, bursty), Sliding Window (smoother), Token Bucket (allows bursts, refills over time — used by most APIs). Responses should return X-RateLimit headers so clients can back off gracefully.',
    tip: `// Response headers a well-designed API returns
HTTP/1.1 200 OK
X-RateLimit-Limit:     1000    -- max requests per window
X-RateLimit-Remaining: 42      -- requests left
X-RateLimit-Reset:     1700000000  -- Unix timestamp of reset

// When limit hit:
HTTP/1.1 429 Too Many Requests
Retry-After: 60                -- seconds to wait

// Rate limit strategies:
// Fixed Window  — reset counter at fixed intervals (bursty)
// Sliding Window — smooth rolling count
// Token Bucket  — accumulate tokens; burst allowed up to bucket size
// Leaky Bucket  — smooth output rate regardless of input bursts

// Keys for limiting (choose per use case):
// - Per IP address        (anonymous public APIs)
// - Per API key / user    (authenticated APIs)
// - Per endpoint          (expensive operations get tighter limits)
// - Per tenant            (multi-tenant SaaS)`
  },
  {
    category: 'API in Practice', difficulty: 'Intermediate',
    question: 'What is CORS and how do you configure it correctly for an API?',
    answer: 'CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks JavaScript from making requests to a different origin (protocol + domain + port) than the page. Browsers send a preflight OPTIONS request first for non-simple requests. The server must respond with the right Access-Control-* headers. CORS is enforced by browsers only — curl and server-to-server calls are not affected.',
    tip: `// Browser sends preflight (OPTIONS) for non-simple requests:
OPTIONS /api/users
Origin: https://myapp.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization, Content-Type

// Server response — allow it:
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 86400   -- cache preflight for 24h

// For public APIs (any origin):
Access-Control-Allow-Origin: *
// Note: * cannot be used with credentials (cookies/auth)

// With credentials:
Access-Control-Allow-Origin: https://myapp.com  -- must be specific
Access-Control-Allow-Credentials: true`
  },
  {
    category: 'API in Practice', difficulty: 'Intermediate',
    question: 'How do you document a REST API with OpenAPI / Swagger?',
    answer: 'OpenAPI (formerly Swagger) is the industry standard for describing REST APIs in a machine-readable YAML or JSON file. Tools generate interactive docs (Swagger UI, ReDoc), client SDKs, mock servers, and validation from a single source of truth. The spec describes endpoints, request/response schemas, authentication, and examples.',
    tip: `# openapi.yaml — minimal example
openapi: 3.1.0
info:
  title: User API
  version: 1.0.0

paths:
  /users/{id}:
    get:
      summary: Get a user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        "200":
          description: User found
          content:
            application/json:
              schema:
                ref: "#/components/schemas/User"
        "404":
          description: Not found

components:
  schemas:
    User:
      type: object
      properties:
        id:    { type: integer }
        name:  { type: string }
        email: { type: string, format: email }`
  },
  {
    category: 'API in Practice', difficulty: 'Advanced',
    question: 'What are idempotency keys and why are critical API operations need them?',
    answer: 'An idempotency key is a client-generated unique ID (usually UUID v4) sent with a request. The server stores the result against that key and returns the same response if the same key is resent — safely handling retries after network failures. Essential for payment processing, order creation, and any operation where duplicate execution causes harm.',
    tip: `// Client generates a UUID and sends it with POST
POST /payments
Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 5000,
  "currency": "USD",
  "to": "account_xyz"
}

// Server behavior:
// 1st call  → process payment → store result against key → 200 OK
// 2nd call (same key) → lookup key → return SAME stored response
// (no duplicate charge!)

// Server response on duplicate:
HTTP/1.1 200 OK
Idempotent-Replayed: true

// Key expiry: typically 24h to 7 days
// Storage: Redis with TTL is ideal
// Real-world use: Stripe, Braintree, all payment APIs require this`
  },

  // ── JWT ──────────────────────────────────────────────────
  {
    category: 'JWT', difficulty: 'Beginner',
    question: 'What is a JWT and what are its three parts?',
    answer: 'A JWT (JSON Web Token) is a compact, self-contained token for securely transmitting information between parties as a JSON object. It is digitally signed so the receiver can verify it was not tampered with. Structure: three Base64URL-encoded parts separated by dots — Header (algorithm & type), Payload (claims), Signature (proof of integrity).',
    tip: `// JWT format:  header.payload.signature
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsIm5hbWUiOiJBbGljZSIsImV4cCI6MTcwMDAwMzYwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// 1. HEADER (decoded)
{
  "alg": "HS256",   // signing algorithm
  "typ": "JWT"
}

// 2. PAYLOAD (decoded) — the "claims"
{
  "sub":  "42",          // subject (user ID)
  "name": "Alice",
  "role": "admin",
  "iat":  1700000000,    // issued at (Unix timestamp)
  "exp":  1700003600,    // expires at (1 hour later)
  "iss":  "myapp.com"   // issuer
}

// 3. SIGNATURE
// HMACSHA256(base64(header) + "." + base64(payload), SECRET)
// → only the server with the secret can produce a valid signature

// ⚠️ Payload is BASE64 encoded, NOT encrypted
// Anyone can decode it — never store passwords or sensitive data in JWT`
  },
  {
    category: 'JWT', difficulty: 'Beginner',
    question: 'How does JWT authentication work end-to-end?',
    answer: 'Login: client sends credentials → server verifies → server creates and signs a JWT → returns it to client. Subsequent requests: client sends JWT in Authorization header → server verifies signature (no DB lookup needed) → reads claims and processes request. The server is stateless — no session storage required. Token expiry (exp claim) limits the damage of a stolen token.',
    tip: `// STEP 1 — Login
POST /auth/login
{ "email": "alice@example.com", "password": "secret" }

// Server response
HTTP 200 OK
{
  "accessToken":  "eyJ...",   // short-lived (15 min)
  "refreshToken": "eyJ..."    // long-lived (7 days)
}

// STEP 2 — Authenticated request
GET /api/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9...

// Server verifies:
// 1. Signature valid? (was token issued by us?)
// 2. Token expired? (exp claim > now)
// 3. Extract claims: sub="42", role="admin"
// → no DB lookup needed!

// STEP 3 — Token expired → use refresh token
POST /auth/refresh
{ "refreshToken": "eyJ..." }
// → server validates refresh token, issues new access token

// Token storage:
// ✅ HttpOnly cookie — safe from XSS
// ⚠️  localStorage   — vulnerable to XSS`
  },
  {
    category: 'JWT', difficulty: 'Intermediate',
    question: 'What are the differences between HS256 and RS256 signing algorithms?',
    answer: 'HS256 (HMAC-SHA256) uses a single shared secret — same key signs and verifies. Simple but the secret must be shared with every service that verifies tokens. RS256 (RSA-SHA256) uses a private/public key pair — the auth server signs with the private key; any service verifies with the public key (which can be published openly). RS256 is better for microservices and public token verification (e.g. Google, Auth0).',
    tip: `// HS256 — shared secret (symmetric)
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// Sign
const token = jwt.sign({ sub: '42', role: 'admin' }, SECRET, {
  algorithm: 'HS256',
  expiresIn: '15m'
});

// Verify (same secret)
const payload = jwt.verify(token, SECRET);

// RS256 — private/public key pair (asymmetric)
const privateKey = fs.readFileSync('private.pem');
const publicKey  = fs.readFileSync('public.pem');

// Auth server signs with private key
const token = jwt.sign({ sub: '42' }, privateKey, {
  algorithm: 'RS256',
  expiresIn: '15m'
});

// Any service verifies with PUBLIC key (safe to share)
const payload = jwt.verify(token, publicKey);

// Use case guide:
// HS256 → monolith / single service (simple)
// RS256 → microservices, third-party token issuers (Auth0, Google)`
  },
  {
    category: 'JWT', difficulty: 'Intermediate',
    question: 'What are JWT security pitfalls and how do you avoid them?',
    answer: 'Common JWT mistakes: (1) storing tokens in localStorage (XSS-vulnerable — use HttpOnly cookies), (2) weak or hardcoded secrets, (3) not validating expiry, (4) algorithm confusion (alg: "none" attack — always specify expected algorithm), (5) putting sensitive data in payload (it is only Base64 — not encrypted), (6) no token revocation strategy for logout.',
    tip: `// ❌ Algorithm confusion attack — "alg: none"
// Attacker crafts token with alg=none and no signature
// Fix: ALWAYS specify allowed algorithms explicitly
jwt.verify(token, secret, { algorithms: ['HS256'] }); // ✅

// ❌ Weak secret
JWT_SECRET=secret     // brute-forceable!
// ✅ Use strong random secret (32+ bytes)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

// ❌ Storing in localStorage — XSS can steal it
localStorage.setItem('token', jwt);

// ✅ Store in HttpOnly cookie — JS cannot access it
res.cookie('token', jwt, {
  httpOnly: true,   // not accessible by JS
  secure: true,     // HTTPS only
  sameSite: 'strict' // CSRF protection
});

// ❌ No expiry
jwt.sign({ sub: '42' }, secret);  // lives forever!
// ✅ Always set expiry
jwt.sign({ sub: '42' }, secret, { expiresIn: '15m' });

// Token revocation (JWTs are stateless — hard to revoke):
// → Short expiry (15 min) + refresh token rotation
// → Blocklist (Redis) for explicit logout`
  },
  {
    category: 'JWT', difficulty: 'Intermediate',
    question: 'What is the access token + refresh token pattern and why use it?',
    answer: 'Access tokens are short-lived (5–15 min) — limits damage if stolen. Refresh tokens are long-lived (days/weeks) and stored securely — used only to get new access tokens. On every refresh, the old refresh token is rotated (replaced with a new one), so stolen refresh tokens are detected on the next use. This balances security (short access token life) with usability (stay logged in).',
    tip: `// Token lifecycle:
//
// 1. Login → server issues:
//    accessToken  (exp: 15 min)  → stored in memory or HttpOnly cookie
//    refreshToken (exp: 7 days)  → stored in HttpOnly cookie only
//
// 2. Every API call uses accessToken
//
// 3. accessToken expires → client sends refreshToken:
POST /auth/refresh
Cookie: refreshToken=eyJ...

// Server:
// a. Validate refreshToken signature + expiry
// b. Check it's not in the blocklist (revoked)
// c. Issue NEW accessToken + NEW refreshToken (rotation!)
// d. Invalidate old refreshToken

// 4. Logout → server adds refreshToken to blocklist (Redis)

// Refresh token rotation:
// If attacker steals refreshToken and uses it AFTER legitimate user
// already rotated it → old token is invalid → attacker blocked!
// If attacker uses it FIRST → legitimate user's next refresh fails
// → detect theft, force re-login

// Storage summary:
// accessToken  → memory (JS variable) or short HttpOnly cookie
// refreshToken → HttpOnly, Secure, SameSite=Strict cookie ONLY`
  },

  // ── OAuth2 ───────────────────────────────────────────────
  {
    category: 'OAuth2', difficulty: 'Beginner',
    question: 'What is OAuth2 and what problem does it solve?',
    answer: 'OAuth2 is an authorization framework that lets users grant third-party applications limited access to their account without sharing their password. Example: "Sign in with Google" — you allow a third-party app to read your Google profile, but the app never sees your Google password. Key roles: Resource Owner (user), Client (third-party app), Authorization Server (Google/GitHub), Resource Server (the API being accessed).',
    tip: `// The core problem OAuth2 solves:
//
// OLD WAY (bad): give your Gmail password to a third-party app
// → app has full access, password can be stolen/misused
//
// OAuth2 WAY: grant limited, revocable access
// → app gets a scoped token, not your password
// → you can revoke access anytime without changing password

// OAuth2 Roles:
// Resource Owner     = you (the user)
// Client             = the app wanting access (Spotify, Notion...)
// Authorization Server = who verifies identity (Google, GitHub, Auth0)
// Resource Server    = the API storing your data (Google Calendar API)

// OAuth2 is AUTHORIZATION, not AUTHENTICATION
// For authentication (login), use OpenID Connect (OIDC)
// OIDC = OAuth2 + identity layer (adds id_token with user info)

// Common OAuth2 providers:
// Google, GitHub, Facebook, Twitter, Microsoft, Auth0, Okta`
  },
  {
    category: 'OAuth2', difficulty: 'Intermediate',
    question: 'How does the OAuth2 Authorization Code Flow work step by step?',
    answer: 'The most secure and common OAuth2 flow for web and mobile apps. Uses a short-lived authorization code (exchanged server-side for tokens) so tokens never appear in the browser URL. With PKCE (Proof Key for Code Exchange), it is also safe for public clients (SPAs, mobile) where a client secret cannot be kept hidden.',
    tip: `// Authorization Code Flow (with PKCE):
//
// 1. USER clicks "Login with GitHub"
//
// 2. APP redirects user to Auth Server:
GET https://github.com/login/oauth/authorize
  ?client_id=abc123
  &redirect_uri=https://myapp.com/callback
  &scope=read:user,repo
  &state=random_csrf_token
  &code_challenge=base64(sha256(code_verifier))  // PKCE
  &code_challenge_method=S256

// 3. USER logs in on GitHub and grants permission
//
// 4. AUTH SERVER redirects back to app with code:
GET https://myapp.com/callback?code=xyz789&state=random_csrf_token

// 5. APP server exchanges code for tokens (server-side, never in browser):
POST https://github.com/login/oauth/access_token
{
  "client_id":     "abc123",
  "client_secret": "secret",   // kept on server
  "code":          "xyz789",
  "code_verifier": "original_verifier"  // PKCE
}
// → { "access_token": "ghu_...", "scope": "read:user,repo" }

// 6. APP calls API with access_token:
GET https://api.github.com/user
Authorization: Bearer ghu_...`
  },
  {
    category: 'OAuth2', difficulty: 'Intermediate',
    question: 'What are OAuth2 scopes and why do they matter?',
    answer: 'Scopes define the exact permissions a client is requesting. They implement the principle of least privilege — an app should request only the minimum access it needs. Users see the requested scopes on the consent screen. If an access token is stolen, the attacker is limited to those scopes. Resource servers validate that the token\'s scopes cover the requested action.',
    tip: `// Scopes are space-separated strings in the authorization request
scope=read:user repo:status email

// Common scope patterns by provider:
// GitHub:  read:user, repo, gist, admin:org
// Google:  openid, email, profile, https://www.googleapis.com/auth/calendar
// Spotify: user-read-email, playlist-modify-public, streaming

// Minimal scope principle — only request what you need:
// ❌ scope=admin  — full access (dangerous)
// ✅ scope=read:user email  — just what this feature needs

// Token with scopes — server checks before acting:
// GET /repos (needs "repo" scope)
// → Authorization server minted token with scope=read:user only
// → Resource server returns 403 Forbidden — insufficient scope

// OpenID Connect adds standard scopes for identity:
scope=openid          // required for OIDC, returns id_token
scope=openid profile  // name, picture, birthdate
scope=openid email    // email + email_verified`
  },
  {
    category: 'OAuth2', difficulty: 'Intermediate',
    question: 'What are the other OAuth2 flows and when do you use each?',
    answer: 'Authorization Code (+ PKCE) — web & mobile apps (most secure, use this by default). Client Credentials — machine-to-machine / service-to-service (no user involved, uses client_id + client_secret directly). Device Code — devices with no browser (smart TVs, CLI tools). Implicit — deprecated; was for SPAs but PKCE solved that. Resource Owner Password — deprecated; only for legacy trusted first-party apps.',
    tip: `// 1. Authorization Code + PKCE → web apps, SPAs, mobile
// (user-facing, most secure — described in previous card)

// 2. Client Credentials → machine-to-machine (M2M)
// No user involved — service authenticates as itself
POST /oauth/token
{
  "grant_type":    "client_credentials",
  "client_id":     "service-a",
  "client_secret": "secret",
  "scope":         "read:orders"
}
// → { "access_token": "...", "expires_in": 3600 }
// Use case: cron jobs, microservices calling each other

// 3. Device Code → browserless devices
POST /oauth/device/code
{ "client_id": "...", "scope": "read:user" }
// → { "device_code": "...", "user_code": "ABCD-1234",
//     "verification_uri": "https://example.com/device" }
// User visits URL on phone, enters code
// Device polls until authorized
// Use case: CLI tools (GitHub CLI), smart TVs

// Deprecated — DO NOT USE:
// Implicit Flow         → use Auth Code + PKCE instead
// Resource Owner Password → exposes password to client`
  },
  {
    category: 'OAuth2', difficulty: 'Advanced',
    question: 'What is OpenID Connect (OIDC) and how does it extend OAuth2?',
    answer: 'OAuth2 handles authorization ("what can this app do?") but not authentication ("who is this user?"). OpenID Connect (OIDC) is an identity layer on top of OAuth2 that adds authentication. It introduces the id_token (a JWT containing user identity claims) and the /userinfo endpoint. OIDC is what powers "Sign in with Google/GitHub" — the app gets a verified identity, not just an access token.',
    tip: `// OAuth2 alone = "here's a token to access things"
// OIDC        = "here's WHO the user is + a token to access things"

// OIDC adds to the Authorization Code flow:
// 1. Request scope=openid (required)
// 2. Get BOTH access_token AND id_token

// id_token is a JWT with standard claims:
{
  "iss":   "https://accounts.google.com",  // issuer
  "sub":   "1234567890",                   // unique user ID
  "aud":   "your-client-id",              // your app
  "exp":   1700003600,
  "iat":   1700000000,
  "email": "alice@gmail.com",
  "name":  "Alice Smith",
  "picture": "https://lh3.google.com/..."
}

// Standard OIDC endpoints (discovered via /.well-known/openid-configuration):
GET https://accounts.google.com/.well-known/openid-configuration
// → { "authorization_endpoint", "token_endpoint",
//     "userinfo_endpoint", "jwks_uri", ... }

// Use access_token to call /userinfo for fresh user data:
GET https://openidconnect.googleapis.com/v1/userinfo
Authorization: Bearer <access_token>

// Libraries handling OIDC for you:
// NextAuth.js, Passport.js (oidc strategy), Auth0 SDK, Keycloak`
  },
];

/* ═══════════════════════════════════════════════════════════
   NODE.JS — 46 cards across 9 categories
═══════════════════════════════════════════════════════════ */
const NODEJS_CARDS = [

  /* ── Overview ── */
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'Node.js Learning Mindmap — what are the 7 core areas and key learning paths?',
    answer: '7 core areas: 1) Fundamentals — V8 runtime, JS syntax, CommonJS/ESM modules, npm. 2) Core Node.js — event loop, globals, fs, http, path/os, error handling. 3) Async Patterns — callbacks, promises, async/await, streams. 4) Useful Daily Tools — Express.js, middleware, logging, testing, debugging, pm2. 5) Data & Storage — JSON, MongoDB/Mongoose, SQL/ORM, Redis. 6) Advanced Topics — cluster, worker threads, security, performance, WebSockets. 7) Ecosystem — REST/GraphQL, real-time, microservices, serverless, DevOps, MERN.',
    tip: `NODE.JS
│
├─ 1. Fundamentals
│   ├─ Runtime         built on V8 · single-threaded · event-driven
│   ├─ Syntax          JS basics (var/let/const · functions · classes)
│   ├─ Modules         CommonJS (require/exports) · ES Modules (import/export)
│   └─ Package Mgmt    npm · yarn · pnpm
│
├─ 2. Core Node.js
│   ├─ Event Loop      call stack · callback queue · libuv · async I/O
│   ├─ Globals         __dirname · __filename · process · Buffer
│   ├─ File System     fs.readFile · fs.writeFile · streams
│   ├─ HTTP            http.createServer() · request/response
│   ├─ Path & OS       path.join · os.platform · os.cpus
│   └─ Error Handling  try/catch · error-first callbacks
│
├─ 3. Async Patterns
│   ├─ Callbacks       fs.readFile("f", (err, data) => { ... })
│   ├─ Promises        new Promise((resolve, reject) => { ... })
│   ├─ async/await     async function main() { await fetchData(); }
│   └─ Streams         readable · writable · duplex · transform
│
├─ 4. Useful Daily Tools
│   ├─ Express.js      routing · middleware · req/res · error handling
│   ├─ Middleware      body-parser · cookie-parser · cors
│   ├─ Logging         morgan · Winston · console.log
│   ├─ Testing         Mocha · Jest · Supertest
│   ├─ Debugging       node --inspect · Chrome DevTools
│   └─ Build & Deploy  nodemon · pm2 · Docker · CI/CD
│
├─ 5. Data & Storage
│   ├─ JSON            JSON.parse · JSON.stringify
│   ├─ Databases       MongoDB (Mongoose) · PostgreSQL · MySQL · Redis
│   ├─ ORM/ODM         Sequelize · TypeORM · Prisma
│   └─ Caching         Redis · in-memory cache
│
├─ 6. Advanced Topics
│   ├─ Cluster         scaling across CPU cores
│   ├─ Worker Threads  parallel execution
│   ├─ Security        helmet · rate limiting · JWT · OAuth
│   ├─ Performance     profiling · load testing · async optimization
│   └─ Networking      WebSocket (Socket.IO) · gRPC
│
└─ 7. Ecosystem & Applications
    ├─ Web APIs        REST · GraphQL · Apollo Server
    ├─ Real-time       Socket.IO · WebRTC
    ├─ Microservices   Express/Koa · RabbitMQ · Kafka
    ├─ Serverless      AWS Lambda · Azure Functions · GCP
    ├─ DevOps          CI/CD · Docker · Kubernetes
    └─ Full-stack      MERN stack (MongoDB · Express · React · Node)

LEARNING PATHS
Backend:        Fundamentals → Core Node.js → Async → Express.js → Databases → Security → Deploy
Full-stack:     JS Basics → Node.js → Express → React → MERN → Testing → Performance
Microservices:  Core Node.js → Async → Microservices → Serverless → CI/CD → Kubernetes

INTERVIEW CORE
Event Loop · Async Patterns · Express.js · Databases
JWT/OAuth · Security · MERN stack · Microservices`
  },

  /* ── Fundamentals ── */
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'What is Node.js and how does it work under the hood?',
    answer: 'Node.js is a JavaScript runtime built on Chrome\'s **V8** engine. It is **single-threaded** and **event-driven** — it handles concurrency via the **event loop** and non-blocking I/O, not by spawning multiple threads per request. This makes it very efficient for I/O-heavy workloads (APIs, file ops, DB calls) but unsuitable for CPU-intensive tasks (image processing, heavy computation). **libuv** is the C library that powers the event loop and async I/O under the hood.',
    tip: `// Node.js runtime model
// ┌─────────────────────────────────────┐
// │         Your JS Code                │
// │   (single-threaded, V8 engine)      │
// ├─────────────────────────────────────┤
// │         Event Loop (libuv)          │
// │  Timers → I/O → Poll → Check → ...  │
// ├─────────────────────────────────────┤
// │   OS / Thread Pool (4 threads)      │
// │   File I/O, DNS, Crypto, Zlib       │
// └─────────────────────────────────────┘

// Check your Node.js version and environment
console.log(process.version);        // e.g. "v20.11.0"
console.log(process.platform);       // "linux" / "win32" / "darwin"
console.log(process.env.NODE_ENV);   // "development" / "production"

// CPU-bound is a problem — blocks the event loop
// WRONG for production:
// app.get('/cpu', (req, res) => {
//     const result = heavyCpuWork();  // blocks for 5 seconds!
//     res.json(result);
// });

// SOLUTION: Worker Threads for CPU-bound work`
  },
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'How do CommonJS and ES Modules work in Node.js?',
    answer: '**CommonJS** (CJS): `require()` to import, `module.exports` to export — synchronous, the original Node.js module system. **ES Modules** (ESM): `import`/`export` — async, the modern standard (used in browsers too). To use ESM in Node.js: either name files `.mjs` or set `"type": "module"` in `package.json`. In modern projects, ESM is preferred; most packages support both.',
    tip: `// CommonJS (CJS) — .js files by default
// math.js
function add(a, b) { return a + b; }
module.exports = { add };
// or: module.exports.add = add;

// index.js
const { add } = require('./math');
const express  = require('express');   // from node_modules
console.log(add(2, 3)); // 5

// ES Modules (ESM) — requires "type": "module" in package.json
// math.mjs (or .js with "type":"module")
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// index.mjs
import multiply, { add } from './math.mjs';
import express from 'express';

// Key differences:
// CJS: require() is synchronous, can be conditional
// ESM: import is static (top-level), async loading
// ESM: no __dirname / __filename — use import.meta.url
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);`
  },
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'How does npm work? (package.json, scripts, dependencies)',
    answer: '`npm` (Node Package Manager) manages project dependencies. `package.json` describes the project — name, version, scripts, and dependencies. `dependencies` are needed in production; `devDependencies` only in development. `package-lock.json` locks exact versions for reproducibility. `npx` runs a package without installing it globally. `npm scripts` automate tasks (start, test, build).',
    tip: `// Initialize a project
// npm init -y

// Install packages
// npm install express          → adds to dependencies
// npm install jest --save-dev  → adds to devDependencies
// npm install -g nodemon       → installs globally
// npm ci                       → clean install from lock file (CI/CD)

// package.json
{
  "name": "my-api",
  "version": "1.0.0",
  "scripts": {
    "start":   "node index.js",
    "dev":     "nodemon index.js",
    "test":    "jest",
    "build":   "tsc"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "nodemon": "^3.0.0"
  }
}

// Run scripts
// npm start
// npm run dev
// npm test

// npx — run without installing
// npx create-react-app my-app
// npx prisma migrate dev`
  },
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'What are the Node.js global objects? (process, Buffer, __dirname)',
    answer: '`__dirname`: absolute path of the current file\'s directory. `__filename`: absolute path of the current file. `process`: info about the running process — `process.env`, `process.argv`, `process.exit()`, `process.cwd()`. `Buffer`: handles raw binary data (TCP streams, file system). `global`: the global scope (equivalent to `window` in browsers). `setTimeout`, `setInterval`, `clearTimeout` are globally available.',
    tip: `// __dirname and __filename (CommonJS only)
console.log(__dirname);   // /home/user/myproject
console.log(__filename);  // /home/user/myproject/index.js

// process — runtime information
console.log(process.version);    // Node.js version
console.log(process.platform);   // 'linux', 'darwin', 'win32'
console.log(process.pid);        // process ID
console.log(process.cwd());      // current working directory
console.log(process.env.PORT);   // environment variables
console.log(process.argv);       // ['node', 'index.js', ...args]

process.on('uncaughtException', (err) => {
    console.error('Unhandled error:', err);
    process.exit(1);
});

// Buffer — binary data
const buf = Buffer.from('Hello', 'utf8');
console.log(buf);            // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); // 'Hello'

const buf2 = Buffer.alloc(10);  // 10 zero bytes
buf2.write('Hi');

// setImmediate — runs after I/O callbacks
setImmediate(() => console.log('after I/O'));`
  },
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'How does the Node.js event loop work?',
    answer: 'The event loop is what makes Node.js non-blocking. It processes tasks in phases: **Timers** (`setTimeout`/`setInterval`), **Pending callbacks** (I/O errors), **Poll** (retrieve new I/O events, run callbacks), **Check** (`setImmediate`), **Close callbacks**. After each phase, Node runs `process.nextTick()` callbacks and microtasks (Promise `.then()`). Order: `nextTick` > microtasks > timers > poll > check.',
    tip: `// Event loop phase order
console.log('1 — sync');

setTimeout(() => console.log('4 — timer (0ms)'), 0);

setImmediate(() => console.log('5 — check phase'));

Promise.resolve().then(() => console.log('3 — microtask'));

process.nextTick(() => console.log('2 — nextTick'));

// Output:
// 1 — sync
// 2 — nextTick    (runs before anything async)
// 3 — microtask   (Promise .then)
// 4 — timer       (setTimeout)
// 5 — check       (setImmediate)

// Blocking the event loop is DANGEROUS
// BAD — blocks all requests for 5 seconds:
// while (Date.now() < start + 5000) {}

// GOOD — use async, Worker Threads, or offload to a service

// I/O is non-blocking — handled by libuv thread pool
fs.readFile('large.txt', (err, data) => {
    // this runs after file is read — event loop is free meanwhile
    console.log(data.length);
});
console.log('this runs BEFORE the file is read');`
  },

  /* ── Core Node.js ── */
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'How does the Node.js file system (fs) module work?',
    answer: 'The `fs` module provides file system operations. Async versions (`fs.readFile`, `fs.writeFile`) use callbacks or the promise-based `fs.promises` API. `fs.readFileSync`/`fs.writeFileSync` are synchronous — block the event loop (use only in startup, never in request handlers). Streams handle large files without loading all data into memory.',
    tip: `const fs = require('fs');
const fsp = require('fs').promises;  // promise-based API

// Async with callback (old style)
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) { console.error(err); return; }
    console.log(data);
});

// Async with promises (preferred)
async function readData() {
    const data = await fsp.readFile('data.txt', 'utf8');
    console.log(data);
}

// Write file
await fsp.writeFile('out.txt', 'Hello, Node.js!', 'utf8');

// Append
await fsp.appendFile('log.txt', 'new line\n');

// Check existence
const exists = await fsp.access('file.txt')
    .then(() => true).catch(() => false);

// List directory
const files = await fsp.readdir('./src');

// Sync — OK only at startup
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Path utilities (always use path.join — not string concat)
const path = require('path');
const filePath = path.join(__dirname, 'data', 'users.json');`
  },
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'How do you create an HTTP server in Node.js without a framework?',
    answer: 'The built-in `http` module lets you create a server with `http.createServer()`. The callback receives `req` (IncomingMessage) and `res` (ServerResponse). Parse the URL with `url.parse()` or the `URL` class. Read request body by listening to `data`/`end` events. Set `Content-Type` and status code with `res.writeHead()`. In production, use Express.js instead of raw `http`.',
    tip: `const http = require('http');
const url  = require('url');

const server = http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const path   = parsed.pathname;

    // Route matching
    if (req.method === 'GET' && path === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello, World!' }));
        return;
    }

    if (req.method === 'POST' && path === '/data') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const data = JSON.parse(body);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ received: data }));
        });
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(3000, () => console.log('Server on port 3000'));`
  },
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'How do streams work in Node.js?',
    answer: 'Streams process data chunk by chunk instead of loading everything into memory — essential for large files, HTTP responses, and real-time data. Types: **Readable** (source), **Writable** (destination), **Duplex** (both), **Transform** (modify data). Use `.pipe()` to connect streams. The `stream/promises` API provides async/await-friendly versions.',
    tip: `const fs   = require('fs');
const zlib = require('zlib');

// Readable stream — read large file chunk by chunk
const readable = fs.createReadStream('large.txt', { encoding: 'utf8' });
readable.on('data',  chunk => console.log('Chunk:', chunk.length));
readable.on('end',   ()    => console.log('Done'));
readable.on('error', err   => console.error(err));

// Writable stream
const writable = fs.createWriteStream('output.txt');
writable.write('Hello ');
writable.write('World');
writable.end();

// pipe — connect streams elegantly
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())          // transform: compress
  .pipe(fs.createWriteStream('input.txt.gz'))
  .on('finish', () => console.log('Compressed!'));

// pipeline — better error handling (Node 10+)
const { pipeline } = require('stream/promises');
await pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('input.txt.gz')
);

// HTTP response IS a writable stream
http.createServer((req, res) => {
    fs.createReadStream('video.mp4').pipe(res);  // stream file to client
});`
  },
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'How does error handling work in Node.js?',
    answer: 'Node.js has several error handling patterns: **Synchronous**: `try/catch`. **Callbacks**: error-first convention — `(err, data)` — always check `err` first. **Promises**: `.catch()` or `try/catch` with async/await. **EventEmitter**: `emitter.on("error", handler)`. **Process-level**: `process.on("uncaughtException")` and `process.on("unhandledRejection")` — log and exit cleanly.',
    tip: `// 1. Error-first callback (old Node.js style)
fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.error('Failed:', err.message);
        return;   // always return after error!
    }
    console.log(data.toString());
});

// 2. Promise + .catch()
fetch('/api/data')
    .then(res => res.json())
    .catch(err => console.error('Fetch failed:', err));

// 3. async/await + try/catch (preferred)
async function getData() {
    try {
        const data = await fsp.readFile('file.txt', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading config:', err.message);
        throw err;   // re-throw so caller knows
    }
}

// 4. EventEmitter error
const emitter = new EventEmitter();
emitter.on('error', err => console.error('Emitter error:', err));

// 5. Process-level fallbacks (log and exit gracefully)
process.on('uncaughtException',   err => { console.error(err); process.exit(1); });
process.on('unhandledRejection',  err => { console.error(err); process.exit(1); });`
  },

  /* ── Async Patterns ── */
  {
    category: 'Async Patterns', difficulty: 'Beginner',
    question: 'What are callbacks in Node.js and what is "callback hell"?',
    answer: 'A callback is a function passed as an argument to be called when an async operation completes. Node.js uses the **error-first callback** convention: `(err, result)`. **Callback hell** (pyramid of doom) occurs when callbacks are deeply nested — hard to read and maintain. Solutions: Promises, async/await, or `util.promisify()` to convert callback-based APIs to Promises.',
    tip: `// Error-first callback convention
fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) { console.error(err); return; }
    const users = JSON.parse(data);
    console.log(users);
});

// Callback hell — deeply nested, hard to maintain
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) return handleErr(err);
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) return handleErr(err);
        db.query(data1 + data2, (err, result) => {
            if (err) return handleErr(err);
            fs.writeFile('out.txt', result, (err) => {
                if (err) return handleErr(err);
                console.log('Done!');  // nested 4 levels deep!
            });
        });
    });
});

// Fix: util.promisify — convert callback to Promise
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const data = await readFile('file.txt', 'utf8');

// Or use fs.promises directly
const data2 = await fsp.readFile('file.txt', 'utf8');`
  },
  {
    category: 'Async Patterns', difficulty: 'Intermediate',
    question: 'How do Promises work in Node.js?',
    answer: 'A Promise represents an async operation that will complete in the future — either fulfilled (resolved) or rejected. Chain with `.then()` for success and `.catch()` for errors. `Promise.all()` runs multiple Promises in parallel and waits for all. `Promise.allSettled()` waits for all, regardless of failures. `Promise.race()` returns the first to settle. `Promise.any()` returns the first to fulfill.',
    tip: `// Create a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Chain
fetch('/api/users')
    .then(res => res.json())
    .then(users => console.log(users))
    .catch(err  => console.error(err))
    .finally(()  => console.log('Done'));  // always runs

// Promise.all — parallel, fails fast if any rejects
const [users, posts] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
]);

// Promise.allSettled — wait for all, keep results+errors
const results = await Promise.allSettled([
    fetch('/api/a').then(r => r.json()),
    fetch('/api/b').then(r => r.json()),
]);
results.forEach(r => {
    if (r.status === 'fulfilled') console.log(r.value);
    else                          console.error(r.reason);
});

// Promise.race — first to settle wins
const first = await Promise.race([
    fetch('/api/fast'),
    delay(5000).then(() => { throw new Error('Timeout'); })
]);`
  },
  {
    category: 'Async Patterns', difficulty: 'Intermediate',
    question: 'How does async/await work in Node.js?',
    answer: '`async` functions always return a Promise. `await` pauses the function until a Promise resolves — making async code look synchronous. Always wrap `await` in `try/catch`. Run independent operations in parallel with `await Promise.all()` — not sequentially with multiple `await`s. `for await...of` iterates async iterables (like streams).',
    tip: `// Basic async/await
async function getUser(id) {
    const res  = await fetch('/api/users/' + id);
    const user = await res.json();
    return user;
}

// Error handling
async function safeGet(id) {
    try {
        const user = await getUser(id);
        return user;
    } catch (err) {
        console.error('Failed to fetch user:', err.message);
        return null;
    }
}

// WRONG — sequential (slow: waits for each one)
const user  = await getUser(1);
const posts = await getPosts(1);   // waits for user first

// RIGHT — parallel (fast: both start at same time)
const [user, posts] = await Promise.all([getUser(1), getPosts(1)]);

// for await — async iteration (e.g. async generators, streams)
async function processStream(readable) {
    for await (const chunk of readable) {
        process(chunk);
    }
}

// Top-level await (ESM or Node 14.8+ with --experimental)
const config = await fsp.readFile('config.json', 'utf8');`
  },
  {
    category: 'Async Patterns', difficulty: 'Advanced',
    question: 'What are advanced async patterns in Node.js? (streams, generators, async queues)',
    answer: '**Async generators** (`async function*`) produce values asynchronously — consumed with `for await...of`. **Readable streams** are async iterables in Node 10+. **Async queues** (e.g. with `p-queue`) limit concurrent async tasks. **Backpressure** in streams: a writable stream signals when its buffer is full — readable should pause. Handle with `pipeline()` which manages backpressure automatically.',
    tip: `// Async generator — produce values lazily
async function* paginate(url) {
    let page = 1;
    while (true) {
        const res = await fetch(url + '?page=' + page);
        const data = await res.json();
        if (!data.items.length) break;
        yield data.items;
        page++;
    }
}

for await (const items of paginate('/api/users')) {
    console.log('Got page:', items.length);
}

// Streams as async iterables (Node 10+)
async function processFile(path) {
    const stream = fs.createReadStream(path, { encoding: 'utf8' });
    for await (const chunk of stream) {
        process(chunk);
    }
}

// Limit concurrency — p-queue (npm install p-queue)
import PQueue from 'p-queue';
const queue = new PQueue({ concurrency: 5 });
const urls = ['url1', 'url2', 'url3', '...'];
const results = await Promise.all(
    urls.map(url => queue.add(() => fetch(url).then(r => r.json())))
);

// Backpressure — respect writable stream signals
const readable = fs.createReadStream('huge.txt');
const writable = fs.createWriteStream('out.txt');
// pipeline handles backpressure automatically:
await pipeline(readable, writable);`
  },

  /* ── Useful Daily Tools ── */
  {
    category: 'HTTP & Express', difficulty: 'Beginner',
    question: 'How do you build a REST API with Express.js?',
    answer: 'Express is the most popular Node.js web framework. Define routes with `app.get()`, `app.post()`, etc. Middleware runs before route handlers — add with `app.use()`. `req` has `.params`, `.query`, `.body`, `.headers`. `res` has `.json()`, `.send()`, `.status()`, `.redirect()`. Express Router groups related routes. Error middleware takes 4 arguments `(err, req, res, next)`.',
    tip: `const express = require('express');
const app = express();

// Built-in middleware
app.use(express.json());            // parse JSON body
app.use(express.urlencoded({ extended: true })); // parse form data

// GET — query params: /users?page=1&limit=10
app.get('/users', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    res.json({ page, limit, data: [] });
});

// GET — route params: /users/42
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Alice' });
});

// POST — request body
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
});

// Express Router — group related routes
const router = express.Router();
router.get('/',      getAllUsers);
router.get('/:id',   getUserById);
router.post('/',     createUser);
router.put('/:id',   updateUser);
router.delete('/:id', deleteUser);
app.use('/api/users', router);

app.listen(3000, () => console.log('Running on port 3000'));`
  },
  {
    category: 'HTTP & Express', difficulty: 'Intermediate',
    question: 'How does Express middleware work? (body-parser, cors, cookie-parser)',
    answer: 'Middleware are functions that run between the request and the response — they have access to `req`, `res`, and `next()`. Call `next()` to pass to the next middleware or route handler. Order matters — middleware runs in the order it is registered. **cors** enables Cross-Origin Resource Sharing. **helmet** sets security headers. **morgan** logs HTTP requests. Error middleware has 4 params: `(err, req, res, next)`.',
    tip: `const cors    = require('cors');
const helmet  = require('helmet');
const morgan  = require('morgan');

// Global middleware (runs for every request)
app.use(helmet());                         // security headers
app.use(cors({ origin: 'https://mysite.com' })); // CORS
app.use(morgan('dev'));                    // request logging
app.use(express.json());                  // parse JSON body

// Custom middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();   // pass to next handler
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Route-level middleware
app.get('/profile', authMiddleware, (req, res) => {
    res.json(req.user);
});

// Error middleware — 4 params, must be LAST
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
});

// next(err) triggers error middleware
app.get('/fail', (req, res, next) => {
    next(new Error('Something went wrong'));
});`
  },
  {
    category: 'HTTP & Express', difficulty: 'Intermediate',
    question: 'How do you log, test, and debug Node.js applications?',
    answer: '**Logging**: `morgan` for HTTP access logs, `Winston` or `pino` for structured application logs. **Testing**: `Jest` for unit tests, `Supertest` for HTTP integration tests. **Debugging**: `node --inspect` starts the V8 inspector — connect with Chrome DevTools or VS Code. `nodemon` restarts the server on file changes during development.',
    tip: `// Winston — structured logging
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
});
logger.info('Server started', { port: 3000 });
logger.error('DB connection failed', { error: err.message });

// Jest + Supertest — HTTP integration test
const request = require('supertest');
const app = require('./app');

describe('GET /users', () => {
    it('returns 200 with user list', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('returns 401 without token', async () => {
        const res = await request(app).get('/api/profile');
        expect(res.statusCode).toBe(401);
    });
});

// Debug with inspector
// node --inspect index.js
// Open Chrome: chrome://inspect
// Or use VS Code debugger (launch.json)

// nodemon — auto restart on changes
// npm install -g nodemon
// nodemon index.js`
  },
  {
    category: 'HTTP & Express', difficulty: 'Intermediate',
    question: 'How do you deploy and run Node.js in production? (pm2, Docker, CI/CD)',
    answer: '**pm2**: production process manager — clustering, auto-restart on crash, log management, zero-downtime reload. **Docker**: containerize the app for consistent deployment. **Environment variables**: use `.env` with `dotenv` in development; set via platform config in production. **CI/CD**: automate test → build → deploy pipelines with GitHub Actions, GitLab CI, etc.',
    tip: `// pm2 — production process manager
// npm install -g pm2
// pm2 start index.js --name my-api    start
// pm2 start index.js -i max           cluster mode (all CPU cores)
// pm2 logs my-api                     view logs
// pm2 monit                           dashboard
// pm2 reload my-api                   zero-downtime reload
// pm2 startup                         auto-start on reboot
// pm2 save                            save process list

// Dockerfile for Node.js
// FROM node:20-alpine
// WORKDIR /app
// COPY package*.json ./
// RUN npm ci --only=production
// COPY . .
// EXPOSE 3000
// USER node
// CMD ["node", "index.js"]

// .env — environment variables
// PORT=3000
// DATABASE_URL=mongodb://localhost/mydb
// JWT_SECRET=supersecret
// NODE_ENV=production

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

// GitHub Actions — CI/CD pipeline
// on: push to main
// jobs: install → lint → test → build Docker → push → deploy`
  },

  /* ── Data & Storage ── */
  {
    category: 'Data & Storage', difficulty: 'Beginner',
    question: 'How do you work with JSON in Node.js?',
    answer: '`JSON.parse(string)` converts a JSON string to a JavaScript object. `JSON.stringify(obj)` converts an object to a JSON string. `JSON.stringify(obj, null, 2)` pretty-prints with 2-space indent. For large JSON files, use streams to avoid loading into memory. `JSON.parse` throws on invalid JSON — always wrap in `try/catch`.',
    tip: `// Parse JSON string → object
const json = '{"name":"Alice","age":30}';
const user = JSON.parse(json);
console.log(user.name);  // Alice

// Stringify object → JSON
const obj = { name: 'Bob', scores: [95, 87, 92] };
const str = JSON.stringify(obj);           // compact
const pretty = JSON.stringify(obj, null, 2); // pretty-printed

// Read JSON file
const config = JSON.parse(
    fs.readFileSync('config.json', 'utf8')
);

// Write JSON file
await fsp.writeFile(
    'data.json',
    JSON.stringify(data, null, 2),
    'utf8'
);

// Safe parse — JSON.parse throws on invalid input
function safeParse(str, fallback = null) {
    try { return JSON.parse(str); }
    catch { return fallback; }
}

// Replacer — control serialization
JSON.stringify(obj, ['name', 'age']);  // only those keys
JSON.stringify(obj, (key, val) =>
    val instanceof Date ? val.toISOString() : val
);`
  },
  {
    category: 'Data & Storage', difficulty: 'Intermediate',
    question: 'How do you connect to MongoDB with Mongoose?',
    answer: 'Mongoose is an ODM (Object Data Modeling) library for MongoDB. Define **schemas** that describe document shape, add **validation** and **methods**, then compile to **models**. Use `connect()` to establish connection. Models provide `find`, `findById`, `create`, `save`, `updateOne`, `deleteOne`. Use `lean()` for plain JS objects (faster reads).',
    tip: `const mongoose = require('mongoose');

// Connect
await mongoose.connect(process.env.MONGODB_URI);

// Schema + Model
const userSchema = new mongoose.Schema({
    name:      { type: String, required: true, trim: true },
    email:     { type: String, required: true, unique: true, lowercase: true },
    age:       { type: Number, min: 0, max: 150 },
    role:      { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

// Instance method
userSchema.methods.greet = function() {
    return 'Hello, ' + this.name;
};

const User = mongoose.model('User', userSchema);

// CRUD
const user  = await User.create({ name: 'Alice', email: 'alice@x.com' });
const users = await User.find({ role: 'admin' }).sort({ name: 1 }).limit(10);
const one   = await User.findById(id);
await User.findByIdAndUpdate(id, { $set: { name: 'Bob' } }, { new: true });
await User.findByIdAndDelete(id);

// lean() — skip Mongoose overhead for reads
const users = await User.find().lean();`
  },
  {
    category: 'Data & Storage', difficulty: 'Intermediate',
    question: 'How do you connect to SQL databases in Node.js? (Sequelize, Prisma)',
    answer: '**Sequelize**: full-featured ORM for PostgreSQL, MySQL, SQLite, MSSQL — define models with `DataTypes`, use `sync()` or migrations. **Prisma**: modern ORM with a type-safe query builder — define schema in `schema.prisma`, generate the client. **pg/mysql2**: raw SQL drivers — use when you need full SQL control. Always use parameterized queries to prevent SQL injection.',
    tip: `// Prisma (modern — recommended)
// schema.prisma
// model User {
//   id    Int    @id @default(autoincrement())
//   name  String
//   email String @unique
//   posts Post[]
// }

// npx prisma generate
// npx prisma migrate dev

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const user  = await prisma.user.create({ data: { name: 'Alice', email: 'a@x.com' } });
const users = await prisma.user.findMany({ where: { name: { contains: 'Ali' } } });
await prisma.user.update({ where: { id: 1 }, data: { name: 'Bob' } });
await prisma.user.delete({ where: { id: 1 } });

// Sequelize
const { DataTypes } = require('sequelize');
const User = sequelize.define('User', {
    name:  { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true },
});
await User.sync();
await User.create({ name: 'Alice', email: 'a@x.com' });
await User.findAll({ where: { name: 'Alice' } });

// Raw pg — parameterized query (prevents SQL injection)
const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);`
  },
  {
    category: 'Data & Storage', difficulty: 'Intermediate',
    question: 'How do you use Redis for caching in Node.js?',
    answer: 'Redis is an in-memory data store used for caching, sessions, pub/sub, and rate limiting. Use `ioredis` or `redis` (v4+) npm packages. **Cache-aside pattern**: check Redis first — if miss, fetch from DB and store in Redis with a TTL. `SET key value EX seconds` sets with expiry. `GET`, `DEL`, `EXPIRE`, `INCR` are core commands. Use `HSET`/`HGET` for hash structures.',
    tip: `const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

// Cache-aside pattern
async function getUser(id) {
    const cacheKey = 'user:' + id;

    // 1. Check cache
    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);

    // 2. Cache miss — fetch from DB
    const user = await User.findById(id).lean();
    if (!user) return null;

    // 3. Store in cache with TTL (1 hour)
    await redis.set(cacheKey, JSON.stringify(user), 'EX', 3600);
    return user;
}

// Invalidate cache on update
async function updateUser(id, data) {
    await User.findByIdAndUpdate(id, data);
    await redis.del('user:' + id);   // remove stale cache
}

// Rate limiting with Redis
async function rateLimit(ip) {
    const key = 'ratelimit:' + ip;
    const requests = await redis.incr(key);
    if (requests === 1) await redis.expire(key, 60);  // 1 minute window
    return requests > 100;  // limit: 100 req/min
}

// Pub/Sub
await redis.publish('events', JSON.stringify({ type: 'user.created', id }));
redis.subscribe('events', (channel, msg) => console.log(JSON.parse(msg)));`
  },

  /* ── Advanced Topics ── */
  {
    category: 'Performance & Production', difficulty: 'Advanced',
    question: 'How do you scale Node.js? (Cluster module, Worker Threads)',
    answer: '**Cluster module**: forks multiple processes (one per CPU core) — each handles its own event loop. The master process load-balances incoming connections. **Worker Threads** (`worker_threads`): run CPU-intensive JS in parallel threads without forking a full process — share memory via `SharedArrayBuffer`. Use cluster for I/O scaling, worker threads for CPU-bound tasks.',
    tip: `const cluster = require('cluster');
const os      = require('os');

// Cluster — scale I/O across all CPU cores
if (cluster.isPrimary) {
    const numCPUs = os.cpus().length;
    console.log('Primary ' + process.pid + ', forking ' + numCPUs + ' workers');
    for (let i = 0; i < numCPUs; i++) cluster.fork();
    cluster.on('exit', (worker) => {
        console.log('Worker ' + worker.process.pid + ' died, restarting...');
        cluster.fork();  // auto-restart on crash
    });
} else {
    // Each worker runs the Express app
    const app = require('./app');
    app.listen(3000, () =>
        console.log('Worker ' + process.pid + ' on port 3000'));
}

// Worker Threads — CPU-bound work in parallel
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename, { workerData: { input: 1000000 } });
    worker.on('message', result => console.log('Result:', result));
} else {
    // CPU-heavy computation — does not block main thread
    let sum = 0;
    for (let i = 0; i < workerData.input; i++) sum += i;
    parentPort.postMessage(sum);
}`
  },
  {
    category: 'Performance & Production', difficulty: 'Advanced',
    question: 'How do you secure a Node.js application? (helmet, rate limiting, JWT, OAuth)',
    answer: '**helmet**: sets secure HTTP headers. **cors**: restrict allowed origins. **Rate limiting**: `express-rate-limit` prevents brute force. **JWT** (JSON Web Token): stateless auth — sign on login, verify on each request. **Input validation**: `joi`/`zod` validate and sanitize inputs. **HTTPS**: use TLS in production. **Environment variables**: never hardcode secrets. **SQL injection**: always use parameterized queries.',
    tip: `const helmet       = require('helmet');
const rateLimit    = require('express-rate-limit');
const jwt          = require('jsonwebtoken');
const { z }        = require('zod');

// helmet — security headers
app.use(helmet());

// Rate limiting — 100 req per 15 min per IP
app.use('/api/', rateLimit({
    windowMs: 15 * 60 * 1000,
    max:      100,
    message:  { error: 'Too many requests' }
}));

// JWT — sign on login
app.post('/login', async (req, res) => {
    const user = await authenticate(req.body.email, req.body.password);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, role: user.role },
                            process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// JWT middleware — verify on protected routes
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    try { req.user = jwt.verify(token, process.env.JWT_SECRET); next(); }
    catch { res.status(401).json({ error: 'Invalid token' }); }
};

// Input validation with zod
const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(128),
});
app.post('/users', (req, res, next) => {
    const result = createUserSchema.safeParse(req.body);
    if (!result.success) return res.status(400).json(result.error);
    next();
});`
  },
  {
    category: 'Performance & Production', difficulty: 'Advanced',
    question: 'How do you optimize Node.js performance? (profiling, async optimization)',
    answer: 'Profile with `node --prof` (V8 CPU profiler) or `clinic.js`. Avoid blocking the event loop — offload CPU-heavy work to Worker Threads. Use `async/await` with `Promise.all` for parallel I/O. Enable HTTP keep-alive. Implement response caching (Redis). Use a reverse proxy (Nginx) in front of Node. Enable `--enable-source-maps` only in dev (has overhead).',
    tip: `// Profiling
// node --prof index.js         generate isolate log
// node --prof-process isolate-*.log  readable output
// npx clinic doctor -- node index.js  clinic.js toolbox

// Parallel I/O — biggest win
// SLOW — sequential (each waits for previous):
const user  = await getUser(id);
const posts = await getUserPosts(id);   // 200ms + 200ms = 400ms

// FAST — parallel:
const [user, posts] = await Promise.all([getUser(id), getUserPosts(id)]);
// = max(200ms, 200ms) = 200ms

// Avoid memory leaks
// 1. Unsubscribe from EventEmitters
emitter.removeListener('data', handler);

// 2. Clear intervals/timeouts
const timer = setInterval(fn, 1000);
// later:
clearInterval(timer);

// 3. Avoid global state accumulation
// Never grow an array/map in global scope without cleanup

// HTTP keep-alive (reuse connections)
const agent = new http.Agent({ keepAlive: true });

// Compression (gzip responses)
const compression = require('compression');
app.use(compression());

// Load testing
// npx autocannon -c 100 -d 10 http://localhost:3000`
  },
  {
    category: 'Performance & Production', difficulty: 'Intermediate',
    question: 'How do WebSockets and real-time communication work in Node.js? (Socket.IO)',
    answer: 'WebSocket is a full-duplex communication protocol over a single TCP connection — unlike HTTP, it stays open. **Socket.IO** adds rooms, namespaces, auto-reconnect, and fallback to HTTP long-polling. Use cases: chat, live updates, collaborative editing, gaming. For production, use Redis adapter (`@socket.io/redis-adapter`) to share state across multiple Node instances.',
    tip: `const express  = require('express');
const http     = require('http');
const { Server } = require('socket.io');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, {
    cors: { origin: 'https://mysite.com' }
});

// Server-side events
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join a room
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user-joined', socket.id);
    });

    // Receive message — broadcast to room
    socket.on('chat-message', ({ roomId, message }) => {
        io.to(roomId).emit('chat-message', {
            from:    socket.id,
            message, timestamp: new Date()
        });
    });

    socket.on('disconnect', () => console.log('User left:', socket.id));
});

server.listen(3000);

// Client-side (browser)
// const socket = io('https://api.mysite.com');
// socket.emit('join-room', 'room-42');
// socket.on('chat-message', ({ from, message }) => displayMsg(from, message));`
  },

  /* ── Ecosystem ── */
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'How do you build a GraphQL API with Node.js? (Apollo Server)',
    answer: 'GraphQL is a query language for APIs — clients request exactly the data they need. **Apollo Server** integrates with Express. Define a **schema** (types + queries + mutations) in SDL. Write **resolvers** that fetch data. GraphQL eliminates over-fetching and under-fetching. Use `DataLoader` to batch and cache DB calls (solves the N+1 problem).',
    tip: `const { ApolloServer, gql } = require('apollo-server-express');

// Schema definition (SDL)
const typeDefs = gql('
  type User {
    id: ID!  name: String!  email: String!  posts: [Post!]!
  }
  type Post {
    id: ID!  title: String!  author: User!
  }
  type Query {
    user(id: ID!): User
    users: [User!]!
  }
  type Mutation {
    createUser(name: String!, email: String!): User!
  }
');

// Resolvers
const resolvers = {
    Query: {
        user:  (_, { id })   => User.findById(id),
        users: ()            => User.find(),
    },
    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
    },
    User: {
        posts: (user) => Post.find({ authorId: user.id }),  // N+1 issue here!
    },
};

// Fix N+1 with DataLoader
const DataLoader = require('dataloader');
const postLoader = new DataLoader(async (userIds) => {
    const posts = await Post.find({ authorId: { $in: userIds } });
    return userIds.map(id => posts.filter(p => p.authorId.toString() === id));
});`
  },
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'How do you build microservices with Node.js? (message queues, service communication)',
    answer: 'Microservices split a monolith into small, independent services. Communication: **REST/HTTP** (simple, synchronous), **gRPC** (fast, typed, binary), **Message queues** (async, decoupled) — RabbitMQ (`amqplib`) or Kafka (`kafkajs`). Use an API Gateway to route requests. Service discovery and health checks are critical. Docker + Kubernetes orchestrates deployment.',
    tip: `// RabbitMQ — message queue with amqplib
const amqp = require('amqplib');

// Producer — publish a message
async function publishOrder(order) {
    const conn    = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await conn.createChannel();
    await channel.assertQueue('orders', { durable: true });
    channel.sendToQueue('orders',
        Buffer.from(JSON.stringify(order)),
        { persistent: true }
    );
    console.log('Order published:', order.id);
}

// Consumer — process messages
async function startConsumer() {
    const conn    = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await conn.createChannel();
    await channel.assertQueue('orders', { durable: true });
    channel.prefetch(1);
    channel.consume('orders', async (msg) => {
        const order = JSON.parse(msg.content.toString());
        await processOrder(order);
        channel.ack(msg);   // acknowledge after processing
    });
}

// Health check endpoint (required for K8s liveness/readiness)
app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

// Service-to-service REST call (use axios or node-fetch)
const axios = require('axios');
const inventory = await axios.get(process.env.INVENTORY_URL + '/items/' + id);`
  },

  /* ── Interview ── */
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Node.js Interview — Explain the event loop and why Node.js is non-blocking.',
    answer: 'Node.js runs on a **single thread** but handles concurrency through the **event loop** powered by **libuv**. I/O operations (file, network, DB) are offloaded to the OS or libuv thread pool — when they complete, callbacks are queued. The event loop picks up these callbacks when the call stack is empty. This means Node never blocks waiting for I/O — it serves other requests in the meantime.',
    tip: `// Event loop phase order (simplified)
// 1. timers          — setTimeout / setInterval callbacks
// 2. pending I/O     — completed I/O error callbacks
// 3. poll            — retrieve new I/O events + run callbacks
// 4. check           — setImmediate callbacks
// 5. close           — close event callbacks

// nextTick + microtasks run between EVERY phase
process.nextTick(() => console.log('nextTick'));
Promise.resolve().then(() => console.log('microtask'));
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
// Order: nextTick → microtask → timeout → immediate

// Why non-blocking?
// fs.readFile reads the file asynchronously (libuv thread pool)
// The event loop is FREE to handle other requests during the read
fs.readFile('file.txt', callback);
handleOtherRequest();   // executes WHILE file is being read

// BLOCKING the event loop is the #1 Node.js mistake:
// app.get('/', () => {
//     const result = crypto.pbkdf2Sync(pass, salt, 100000, 64, 'sha512');
//     // event loop blocked for ~2 seconds — ALL users wait!
// });`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Node.js Interview — Explain async patterns: callbacks → Promises → async/await.',
    answer: '**Callbacks** (Node.js origin): error-first convention, leads to "callback hell" when nested. **Promises**: cleaner chaining, `.catch()` for errors, `Promise.all()` for parallelism. **async/await** (ES2017): syntactic sugar over Promises — makes async code look synchronous. All three are equivalent under the hood. In modern Node.js, always use async/await unless working with legacy callback APIs (use `util.promisify` to convert them).',
    tip: `// Same operation in all three styles:

// 1. Callback style
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) return handleError(err);
    process(data);
});

// 2. Promise style
const readFileP = promisify(fs.readFile);
readFileP('data.txt', 'utf8')
    .then(data => process(data))
    .catch(err  => handleError(err));

// 3. async/await style (preferred)
async function run() {
    try {
        const data = await fsp.readFile('data.txt', 'utf8');
        process(data);
    } catch (err) {
        handleError(err);
    }
}

// Interview: What does async/await compile to?
// async function is syntax sugar for:
// function run() {
//     return new Promise((resolve, reject) => {
//         fsp.readFile('data.txt', 'utf8')
//             .then(data => resolve(process(data)))
//             .catch(reject);
//     });
// }

// Key pitfall: forget await = fire-and-forget (unhandled rejection!)
// const data = fsp.readFile('data.txt');  // Promise, NOT the data!`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Node.js Interview — Explain Express.js and how middleware works.',
    answer: 'Express is a minimal, unopinionated Node.js web framework. **Middleware** are functions that run sequentially between request and response — each calls `next()` to proceed. Order matters. Built-in middleware: `express.json()`, `express.static()`. Third-party: `cors`, `helmet`, `morgan`. Middleware can modify `req`/`res`, terminate the request, or pass to the next handler. Error middleware has 4 parameters.',
    tip: `// Middleware pipeline
app.use(logRequest);    // 1. log
app.use(parseBody);     // 2. parse
app.use(authenticate);  // 3. auth
app.get('/data', getData); // 4. route handler

function logRequest(req, res, next) {
    console.log(req.method, req.url);
    next();  // MUST call next or request hangs!
}

// next() without arg  → next middleware
// next('route')       → skip to next router
// next(error)         → jump to error middleware

// Route-specific middleware
router.delete('/:id', [authenticate, authorize('admin')], deleteUser);

// Error middleware — 4 params, must be LAST app.use()
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: process.env.NODE_ENV === 'production'
            ? 'Internal Server Error'
            : err.message
    });
});

// Interview: What is the difference between app.use() and app.get()?
// app.use() — matches any method + any path starting with route
// app.get() — matches ONLY GET requests on exact path`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Node.js Interview — How do you connect to databases in Node.js?',
    answer: '**MongoDB + Mongoose**: schema-based ODM, great for flexible document data. **SQL + Prisma**: type-safe ORM, great for relational data with complex joins. **Redis**: in-memory cache — use for sessions, rate limiting, hot data. Key principle: always handle connection errors, use connection pooling for SQL (pg pool), and close connections gracefully on process exit.',
    tip: `// MongoDB — Mongoose
mongoose.connect(process.env.MONGODB_URI, {
    maxPoolSize: 10  // connection pool
});
mongoose.connection.on('error', err => console.error('DB error:', err));
process.on('SIGTERM', () => mongoose.connection.close());

// PostgreSQL — pg with pool
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,          // pool size
    idleTimeoutMillis: 30000,
});
const { rows } = await pool.query(
    'SELECT * FROM users WHERE id = $1', [userId]  // parameterized!
);

// Prisma — type-safe ORM
const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { posts: true }   // join in one query
});

// Redis — caching
const redis = new Redis(process.env.REDIS_URL);
await redis.set('key', JSON.stringify(data), 'EX', 3600);
const cached = await redis.get('key');

// Interview: What is N+1 query problem?
// Fetching users then querying posts for EACH user separately
// Fix: eager loading (Prisma include), DataLoader (GraphQL), JOIN in SQL`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'Node.js Interview — How do you secure and scale a Node.js API?',
    answer: '**Security**: helmet (headers), cors (origin), rate limiting, JWT validation, input validation (zod/joi), parameterized queries, HTTPS. **Scaling**: pm2 cluster mode (multi-core), horizontal scaling behind a load balancer, Redis for shared session/cache state, stateless JWT auth (no sticky sessions needed). **Observability**: structured logging (Winston/pino), metrics (Prometheus), distributed tracing (OpenTelemetry).',
    tip: `// Security checklist
app.use(helmet());                        // secure headers
app.use(cors({ origin: ALLOWED_ORIGINS }));
app.use(rateLimit({ max: 100, windowMs: 15*60*1000 }));
app.use(express.json({ limit: '10kb' })); // prevent huge payloads

// Validate JWT on every protected route
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch { res.status(401).json({ error: 'Unauthorized' }); }
};

// Graceful shutdown — finish in-flight requests
process.on('SIGTERM', () => {
    server.close(() => {
        mongoose.connection.close();
        redis.quit();
        process.exit(0);
    });
});

// Scaling — pm2 cluster
// pm2 start index.js -i max       (one worker per CPU core)

// Horizontal scaling — stateless (JWT, Redis session)
// Load balancer → Node instance 1
//             → Node instance 2   (all share Redis)
//             → Node instance 3

// Observability
const pino   = require('pino');
const logger = pino({ level: 'info' });
logger.info({ userId: req.user.id, route: req.path }, 'Request');`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Node.js Interview — Explain the MERN stack and microservices patterns.',
    answer: '**MERN**: MongoDB (document DB) + Express (Node.js framework) + React (frontend) + Node.js (runtime). Each tier communicates via REST or GraphQL. **Microservices**: break the API into small independent services — each owns its data, communicates via HTTP or message queues (RabbitMQ/Kafka). Benefits: independent deploy, scale, and failure isolation. Tradeoffs: complexity, distributed tracing, network latency.',
    tip: `// MERN stack architecture
// Browser (React)
//   ↕ REST API / GraphQL
// Express + Node.js  (API layer)
//   ↕ Mongoose / Prisma
// MongoDB / PostgreSQL  (data layer)

// Express API — MERN backend pattern
app.use('/api/auth',  authRouter);
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, 'client/build/index.html')));
}

// Microservices pattern
// API Gateway (Express)
//   → User Service    (port 3001, own MongoDB)
//   → Order Service   (port 3002, own PostgreSQL)
//   → Email Service   (port 3003, consumes RabbitMQ)

// Inter-service communication
const userService = axios.create({ baseURL: process.env.USER_SERVICE_URL });
const user = await userService.get('/users/' + userId);

// Service registration + health checks
// Use Consul, Kubernetes services, or DNS for discovery`
  },
];


/* ═══════════════════════════════════════════════════════════
   EXPRESS.JS — 40 cards across 8 categories
═══════════════════════════════════════════════════════════ */
const EXPRESS_CARDS = [

  /* ── Overview ── */
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'Express.js Learning Mindmap — what are the 6 core areas and key learning paths?',
    answer: '6 core areas: 1) Fundamentals — minimal web framework, setup, routing, middleware, req/res. 2) Core Express — routing system, Router, middleware types, static files, error handling. 3) Daily Tools — body parsing, cookies, sessions, logging, validation, security. 4) Async & Data — async routes, MongoDB/Mongoose, SQL/ORM, REST CRUD, GraphQL. 5) Advanced Topics — middleware flow, centralized errors, performance, testing, deployment. 6) Ecosystem — MERN stack, Socket.IO, microservices, serverless, alternatives.',
    tip: `EXPRESS.JS
│
├─ 1. Fundamentals
│   ├─ What it is      Minimalist web framework for Node.js
│   ├─ Setup           const express = require('express'); const app = express();
│   ├─ Routing         app.get('/', (req,res) => res.send('Hello'));
│   ├─ Middleware       app.use(express.json());
│   └─ Request/Response req.query · req.params · req.body · res.json()
│
├─ 2. Core Express
│   ├─ Routing System  app.get/post/put/delete · route params (:id)
│   ├─ Express Router  express.Router() for modular routes
│   ├─ Middleware      built-in · third-party · custom
│   ├─ Static Files    app.use(express.static('public'))
│   └─ Error Handling  app.use((err,req,res,next) => { ... })
│
├─ 3. Daily Tools
│   ├─ Body Parsing    express.json() · express.urlencoded()
│   ├─ Cookies         cookie-parser
│   ├─ Sessions        express-session · JWT authentication
│   ├─ Logging         morgan · Winston
│   ├─ Validation      express-validator · Joi
│   └─ Security        helmet · cors · rate limiting
│
├─ 4. Async & Data
│   ├─ Async Handling  async/await in routes · try/catch · next(err)
│   ├─ MongoDB         Mongoose models · CRUD operations
│   ├─ SQL             Sequelize · Prisma · raw queries
│   ├─ REST APIs       CRUD endpoints · status codes · JSON
│   └─ GraphQL         Apollo Server Express integration
│
├─ 5. Advanced Topics
│   ├─ Middleware Flow  order matters · next() · skip with next('route')
│   ├─ Error Handling   centralized 4-arg middleware
│   ├─ Performance      compression · caching · clustering
│   ├─ Testing          Supertest · Jest · Mocha/Chai
│   └─ Deployment       pm2 · Docker · CI/CD pipelines
│
└─ 6. Ecosystem
    ├─ Full-stack       MERN (MongoDB, Express, React, Node)
    ├─ Real-time        Socket.IO integration
    ├─ Microservices    Express + RabbitMQ/Kafka
    ├─ Serverless       AWS Lambda · Azure Functions
    └─ Alternatives     Koa · Fastify · NestJS

LEARNING PATHS
Backend Dev:           Fundamentals → Core Express → Middleware → REST APIs → Database → Security → Deployment
Full-stack Dev:        JS → Node.js → Express → React → MERN stack → Testing → Performance
Microservices/Cloud:   Express → Async/Data → Microservices → Serverless → CI/CD → Kubernetes

INTERVIEW CORE
Express basics:   routing, middleware, request/response cycle
Middleware:       functions that run before/after routes, can modify req/res
Error handling:   centralized error middleware with next(err)
REST APIs:        CRUD endpoints, proper status codes, JSON responses
Security:         helmet, cors, JWT, rate limiting
Ecosystem:        MERN stack, microservices, serverless deployment`
  },

  /* ── Fundamentals ── */
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What is Express.js and why use it over plain Node.js http module?',
    answer: 'Express.js is a **minimal, unopinionated web framework** built on top of Node.js http module. It adds: **routing** (map URLs to handlers), **middleware** (pipeline of functions), **easier req/res API**, and **templating support**. Plain Node.js http requires manual URL parsing, header management, and body reading. Express handles all that boilerplate. Used in 80%+ of Node.js APIs. Very lightweight — no ORM, no auth, no templating forced on you.',
    tip: `// Plain Node.js — verbose
const http = require('http');
http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World');
    }
}).listen(3000);

// Express — clean & concise
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Server on port 3000'));`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How do you set up Express.js from scratch and start a basic server?',
    answer: 'Install with `npm install express`. Create `app.js`: import express, create an app instance, define routes, start listening. Use `express.json()` middleware to parse JSON bodies. Use `nodemon` for auto-restart during development. Structure: **app** (config) → **routes** (endpoints) → **listen** (start server).',
    tip: `// 1. Install
// npm install express
// npm install --save-dev nodemon

// 2. app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware
app.use(express.json());                          // parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // parse form data

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

// 3. package.json scripts
// "dev": "nodemon app.js"
// "start": "node app.js"`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'How does Express routing work? (route methods, paths, parameters)',
    answer: 'Express routing maps **HTTP methods + URL paths** to handler functions. Route params (`:id`) capture dynamic segments from the URL. `req.params` holds them. Query strings (`?key=val`) go to `req.query`. Use `app.route()` to chain methods on the same path. `app.all()` handles all methods.',
    tip: `// HTTP method routing
app.get('/users',        getAllUsers);   // GET
app.post('/users',       createUser);   // POST
app.put('/users/:id',    updateUser);   // PUT
app.delete('/users/:id', deleteUser);   // DELETE

// Route parameters
app.get('/users/:id/posts/:postId', (req, res) => {
    const { id, postId } = req.params;   // dynamic URL segments
    res.json({ userId: id, postId });
});

// Query strings  GET /search?q=express&page=2
app.get('/search', (req, res) => {
    const { q, page = 1 } = req.query;
    res.json({ query: q, page });
});

// Chained methods on same path
app.route('/products')
    .get((req, res)  => res.json(products))
    .post((req, res) => { products.push(req.body); res.status(201).json(req.body); });`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What is middleware in Express? How does app.use() work?',
    answer: 'Middleware is a **function that runs between the request and response**. Signature: `(req, res, next)`. Must call `next()` to pass control to the next middleware, or send a response to end the chain. `app.use()` registers middleware globally (all routes) or for a path prefix. Middleware runs **in registration order** — order matters. Use cases: logging, auth, body parsing, error handling.',
    tip: `// Middleware signature
function myMiddleware(req, res, next) {
    // 1. Execute logic
    console.log('Request received:', req.method, req.url);
    req.requestTime = Date.now();   // augment req object
    // 2. Pass control forward
    next();
    // OR send response (ends chain):  res.status(401).json({ error: 'Unauthorized' });
}

// Register globally (all routes)
app.use(myMiddleware);

// Register for path prefix only
app.use('/api', myMiddleware);

// Register built-in middleware
app.use(express.json());                         // parse JSON body
app.use(express.urlencoded({ extended: true })); // parse URL-encoded forms
app.use(express.static('public'));               // serve static files

// Middleware chain
app.get('/protected', authenticate, authorize, (req, res) => {
    res.json({ data: 'secret' });   // runs only if both middleware call next()
});`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the key properties of req (request) and res (response) in Express?',
    answer: '**req** holds everything about the incoming request: `req.params` (URL params), `req.query` (query string), `req.body` (parsed body — needs middleware), `req.headers`, `req.method`, `req.url`, `req.ip`. **res** sends the response: `res.send()` (auto content-type), `res.json()` (JSON), `res.status()` (set status code), `res.redirect()`, `res.render()` (templates), `res.set()` (headers). Chain: `res.status(201).json(data)`.',
    tip: `// REQ — reading the request
app.post('/example/:id', (req, res) => {
    req.params.id       // URL parameter    /example/42  → '42'
    req.query.filter    // query string     ?filter=active
    req.body.name       // parsed body      { "name": "Alice" }
    req.headers['authorization']  // header value
    req.method          // 'POST'
    req.url             // '/example/42?filter=active'
    req.ip              // client IP

    // RES — sending the response
    res.send('plain text');                    // text/html
    res.json({ id: 1, name: 'Alice' });        // application/json
    res.status(201).json({ created: true });   // status + JSON
    res.status(404).send('Not found');
    res.redirect('/new-url');                  // 302 redirect
    res.set('X-Custom-Header', 'value');       // set header
    res.sendFile(__dirname + '/file.html');
});`
  },

  /* ── Core Express ── */
  {
    category: 'Core Express', difficulty: 'Beginner',
    question: 'How does express.Router() work and why use it for modular routing?',
    answer: '`express.Router()` creates a **mini Express app** — a modular set of routes and middleware. Mount it on a path with `app.use()`. This separates route logic into dedicated files (users.js, products.js) keeping `app.js` clean. Each Router can have its own middleware applied only to that group of routes.',
    tip: `// routes/users.js
const express = require('express');
const router  = express.Router();

// Middleware only for this router
router.use((req, res, next) => {
    console.log('Users router hit');
    next();
});

router.get('/',    getAllUsers);       // GET  /users
router.get('/:id', getUserById);      // GET  /users/:id
router.post('/',   createUser);       // POST /users
router.put('/:id', updateUser);       // PUT  /users/:id
router.delete('/:id', deleteUser);    // DELETE /users/:id

module.exports = router;

// app.js — mount the router
const usersRouter    = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/users',    usersRouter);
app.use('/products', productsRouter);

// Clean folder structure:
// routes/users.js · routes/products.js · routes/auth.js`
  },
  {
    category: 'Core Express', difficulty: 'Beginner',
    question: 'What are the 3 types of Express middleware and how does each work?',
    answer: '**1. Built-in**: `express.json()`, `express.urlencoded()`, `express.static()` — bundled with Express 4.16+. **2. Third-party**: install via npm — `morgan` (logging), `cors`, `helmet`, `cookie-parser`, `compression`. **3. Custom**: functions you write with `(req, res, next)` signature — auth checks, request logging, data validation, attaching DB to req.',
    tip: `// 1. Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 2. Third-party middleware
const morgan = require('morgan');
const cors   = require('cors');
const helmet = require('helmet');

app.use(morgan('dev'));             // request logging
app.use(cors({ origin: 'https://myapp.com' }));
app.use(helmet());                 // security headers

// 3. Custom middleware
function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid token' });
    }
}

function requestLogger(req, res, next) {
    console.log('[' + new Date().toISOString() + '] ' + req.method + ' ' + req.url);
    next();
}

app.use(requestLogger);
app.get('/profile', authenticate, (req, res) => res.json(req.user));`
  },
  {
    category: 'Core Express', difficulty: 'Beginner',
    question: 'How do you serve static files and configure Express for production?',
    answer: '`express.static()` serves files from a directory — no route handlers needed. Set `Cache-Control` headers for browser caching. In production: serve static files via **nginx** or a CDN (not Express directly — Express is slow at file serving). Use `compression` middleware to gzip responses. Set `NODE_ENV=production` to enable optimizations.',
    tip: `// Serve public/ folder — /public/style.css accessible at /style.css
app.use(express.static('public'));

// With options
app.use(express.static('public', {
    maxAge: '1d',                   // Cache-Control: max-age=86400
    etag:   true,                   // Enable ETags
    index:  'index.html',           // Default file
}));

// Serve from multiple directories
app.use(express.static('public'));
app.use(express.static('uploads'));

// Mount at a URL prefix
app.use('/static', express.static('public'));   // /static/style.css

// Production: gzip compression
const compression = require('compression');
app.use(compression());             // compresses all responses

// Virtual path prefix
app.use('/files', express.static(path.join(__dirname, 'uploads')));`
  },
  {
    category: 'Core Express', difficulty: 'Intermediate',
    question: 'How does error handling work in Express? (4-arg middleware, error types)',
    answer: 'Express error middleware has **4 arguments**: `(err, req, res, next)`. Must be registered **last**, after all other routes. Pass errors to it by calling `next(err)` from any route or middleware. Sync errors thrown in routes are caught automatically; async errors must be explicitly passed with `next(err)`. Create custom error classes for structured error responses.',
    tip: `// Custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Route — throw or call next(err)
app.get('/user/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw new AppError('User not found', 404);
        res.json(user);
    } catch (err) {
        next(err);   // pass to error middleware
    }
});

// 404 handler — no route matched
app.use((req, res, next) => {
    next(new AppError('Route not found', 404));
});

// Global error middleware — MUST be last, MUST have 4 args
app.use((err, req, res, next) => {
    const status  = err.statusCode || 500;
    const message = err.message    || 'Internal Server Error';
    console.error(err.stack);
    res.status(status).json({ error: message });
});`
  },
  {
    category: 'Core Express', difficulty: 'Beginner',
    question: 'How do you structure a real Express.js project? (folder layout, separation of concerns)',
    answer: 'Separate concerns: **routes** (URL → handler), **controllers** (business logic), **models** (DB schema), **middleware** (shared logic), **services** (external calls). Keep `app.js` minimal — just config and mounting. Use `server.js` for `listen()`. This makes testing easier (import app without starting server) and code readable.',
    tip: `// Recommended structure
// project/
// ├─ app.js           — express config, middleware, mount routes
// ├─ server.js        — app.listen(PORT)
// ├─ routes/
// │   ├─ users.js     — router definition
// │   └─ products.js
// ├─ controllers/
// │   ├─ userController.js   — request handlers
// │   └─ productController.js
// ├─ models/
// │   └─ User.js     — Mongoose / Sequelize model
// ├─ middleware/
// │   ├─ auth.js     — JWT verification
// │   └─ validate.js — input validation
// ├─ services/
// │   └─ emailService.js   — external integrations
// └─ config/
//     └─ db.js       — database connection

// app.js
const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./middleware/requestLogger'));

app.use('/api/users',    require('./routes/users'));
app.use('/api/products', require('./routes/products'));

app.use(require('./middleware/errorHandler'));   // last

module.exports = app;   // export for testing

// server.js
const app  = require('./app');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on port ' + PORT));`
  },

  /* ── Daily Tools ── */
  {
    category: 'Daily Tools', difficulty: 'Beginner',
    question: 'How do you handle request body parsing in Express? (JSON, URL-encoded, multipart)',
    answer: '`express.json()` parses `application/json` bodies into `req.body`. `express.urlencoded()` parses HTML form submissions. For file uploads (multipart/form-data), use **multer**. Always validate `req.body` after parsing — never trust user input. Set `limit` to prevent large payload attacks.',
    tip: `// JSON body  — Content-Type: application/json
app.use(express.json({ limit: '10kb' }));   // limit payload size

// URL-encoded form  — Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Route reads req.body
app.post('/users', (req, res) => {
    const { name, email } = req.body;   // works after middleware
    res.status(201).json({ name, email });
});

// File uploads with multer
const multer = require('multer');
const upload = multer({
    dest: 'uploads/',
    limits: { fileSize: 5 * 1024 * 1024 },  // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('Only images allowed'));
    }
});

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({ file: req.file });   // req.file has file info
});`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you implement sessions and JWT authentication in Express?',
    answer: '**Sessions**: server stores session data, sends cookie with session ID. Use `express-session` + a session store (Redis, MongoDB) in production — default memory store leaks. **JWT**: stateless, server sends a signed token, client stores it and sends in Authorization header. JWT scales better (no server storage), but cannot be revoked until expiry. Use short TTL + refresh tokens.',
    tip: `// Option A — Session-based auth
const session = require('express-session');
app.use(session({
    secret:            process.env.SESSION_SECRET,
    resave:            false,
    saveUninitialized: false,
    cookie: { secure: true, httpOnly: true, maxAge: 24*60*60*1000 }
}));

app.post('/login', async (req, res) => {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    req.session.userId = user.id;   // store in session
    res.json({ message: 'Logged in' });
});

// Option B — JWT auth
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    const user  = await User.findByCredentials(req.body.email, req.body.password);
    const token = jwt.sign({ id: user.id, role: user.role },
                            process.env.JWT_SECRET,
                            { expiresIn: '15m' });
    res.json({ token });
});

// JWT middleware
function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
}

app.get('/profile', auth, (req, res) => res.json(req.user));`
  },
  {
    category: 'Daily Tools', difficulty: 'Beginner',
    question: 'How do you add logging to Express? (morgan for HTTP logs, Winston for app logs)',
    answer: '**morgan** logs HTTP requests (method, URL, status, duration). **Winston** is a general-purpose logger — supports log levels, multiple transports (console, file, external services), structured JSON logs. In production: log to files or a logging service (Datadog, Loggly, CloudWatch). Never log sensitive data (passwords, tokens). Use log levels: error, warn, info, debug.',
    tip: `// morgan — HTTP request logger
const morgan = require('morgan');
app.use(morgan('dev'));      // dev: colored, short
app.use(morgan('combined')); // combined: Apache-style, for production

// winston — application logger
const winston = require('winston');
const logger  = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()                // structured JSON logs
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

// Use in routes
app.get('/users', async (req, res, next) => {
    try {
        logger.info('Fetching users', { userId: req.user?.id });
        const users = await User.find();
        res.json(users);
    } catch (err) {
        logger.error('Failed to fetch users', { error: err.message });
        next(err);
    }
});`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you validate request data in Express? (express-validator, Joi)',
    answer: 'Never trust user input — always validate and sanitize. **express-validator**: chain validators on route definition, check `validationResult(req)` in handler. **Joi**: define a schema object, call `schema.validate(data)` — returns errors or clean value. Create reusable validation middleware. Validate early and fail fast — reject bad requests before hitting the database.',
    tip: `// Option A — express-validator
const { body, param, validationResult } = require('express-validator');

const createUserRules = [
    body('name').trim().notEmpty().withMessage('Name required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 8 }).withMessage('Min 8 chars'),
    body('age').optional().isInt({ min: 18 }).withMessage('Must be 18+'),
];

function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    next();
}

app.post('/users', createUserRules, validate, createUser);

// Option B — Joi
const Joi = require('joi');

const userSchema = Joi.object({
    name:     Joi.string().trim().min(1).required(),
    email:    Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    age:      Joi.number().integer().min(18).optional(),
});

function validateBody(schema) {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) return res.status(400).json({ errors: error.details });
        req.body = value;   // use sanitized value
        next();
    };
}

app.post('/users', validateBody(userSchema), createUser);`
  },
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'How do you secure an Express API? (helmet, cors, rate limiting)',
    answer: '**helmet** sets secure HTTP headers (XSS protection, no sniff, HSTS, etc.) with one line. **cors** controls which origins can call your API — always whitelist, never use `*` in production. **express-rate-limit** prevents brute force and DoS by limiting requests per IP. Also: use HTTPS, sanitize inputs, validate JWT, hash passwords with bcrypt, never expose stack traces in production.',
    tip: `const helmet    = require('helmet');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');

// helmet — security headers (always first)
app.use(helmet());
// Sets: X-XSS-Protection, X-Frame-Options, X-Content-Type-Options,
//       Strict-Transport-Security, Content-Security-Policy, etc.

// cors — control allowed origins
app.use(cors({
    origin:      ['https://myapp.com', 'https://admin.myapp.com'],
    methods:     ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,              // allow cookies / auth headers
}));

// rate limiting — 100 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:      100,
    message:  { error: 'Too many requests, please try again later' },
    standardHeaders: true,
    legacyHeaders:   false,
});
app.use('/api/', limiter);

// Stricter limit for auth routes
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 });
app.use('/api/auth', authLimiter);

// Never expose stack traces in production
app.use((err, req, res, next) => {
    const isProd = process.env.NODE_ENV === 'production';
    res.status(err.statusCode || 500).json({
        error:  err.message,
        stack:  isProd ? undefined : err.stack,
    });
});`
  },

  /* ── Async & Data ── */
  {
    category: 'Async & Data', difficulty: 'Intermediate',
    question: 'How do you handle async errors in Express routes? (async/await patterns)',
    answer: 'Express 4 does not catch async errors automatically — you must catch them and call `next(err)`. Wrap every async route in try/catch, or use an `asyncHandler` wrapper to avoid repeating boilerplate. Express 5 (beta) auto-catches rejected promises. The `express-async-errors` package also patches Express 4 to do this automatically.',
    tip: `// Option A — manual try/catch (verbose but explicit)
app.get('/users/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'Not found' });
        res.json(user);
    } catch (err) {
        next(err);   // sends to error middleware
    }
});

// Option B — asyncHandler wrapper (DRY)
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

app.get('/users/:id', asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
}));

// Option C — express-async-errors package
require('express-async-errors');   // patches Express 4
// Now async errors auto-flow to error middleware — no try/catch needed
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) throw new AppError('Not found', 404);   // just throw!
    res.json(user);
});`
  },
  {
    category: 'Async & Data', difficulty: 'Intermediate',
    question: 'How do you connect Express to MongoDB using Mongoose?',
    answer: 'Install `mongoose`, connect in `config/db.js`, define **Schema + Model**, use the model in controllers. Mongoose provides: schema validation, middleware (pre/post hooks), query chaining, population (joins). Store the connection string in `.env`. Handle connection errors and reconnect logic. Disconnect in tests.',
    tip: `// config/db.js
const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:    true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
}

module.exports = connectDB;

// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:      { type: String, required: true, trim: true },
    email:     { type: String, required: true, unique: true, lowercase: true },
    password:  { type: String, required: true, minlength: 8 },
    role:      { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now },
});

// Mongoose middleware — hash password before save
userSchema.pre('save', async function(next) {
    if (this.isModified('password'))
        this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', userSchema);

// controllers/userController.js
const User = require('../models/User');

exports.getUsers    = async (req, res) => { res.json(await User.find().select('-password')); };
exports.createUser  = async (req, res) => { res.status(201).json(await User.create(req.body)); };
exports.updateUser  = async (req, res) => { res.json(await User.findByIdAndUpdate(req.params.id, req.body, { new: true })); };
exports.deleteUser  = async (req, res) => { await User.findByIdAndDelete(req.params.id); res.status(204).send(); };`
  },
  {
    category: 'Async & Data', difficulty: 'Intermediate',
    question: 'How do you connect Express to SQL databases using Sequelize or Prisma?',
    answer: '**Sequelize**: classic ORM — define models with JS class syntax, supports MySQL/PostgreSQL/SQLite. **Prisma**: modern ORM — define schema in `schema.prisma`, auto-generates a typed client. Prisma has better TypeScript support and migration tooling. Both support: relations, transactions, raw queries. Use migrations to manage schema changes — never manually alter production DB.',
    tip: `// --- PRISMA ---
// 1. Install: npm install @prisma/client
//    npx prisma init  →  creates prisma/schema.prisma

// prisma/schema.prisma
// model User {
//   id    Int    @id @default(autoincrement())
//   name  String
//   email String @unique
//   posts Post[]
// }

// 2. Migrate: npx prisma migrate dev --name init
// 3. Generate client: npx prisma generate

// config/db.js (Prisma)
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;

// controllers/userController.js (Prisma)
const prisma = require('../config/db');

exports.getUsers   = async (req, res) => { res.json(await prisma.user.findMany()); };
exports.createUser = async (req, res) => {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json(user);
};

// --- SEQUELIZE ---
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.define('User', {
    name:  { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
});

sequelize.sync({ alter: true });   // sync schema on startup (dev only)`
  },
  {
    category: 'Async & Data', difficulty: 'Intermediate',
    question: 'How do you build a complete REST CRUD API with Express?',
    answer: 'REST CRUD maps HTTP methods to resource operations: **GET /resource** (list all), **GET /resource/:id** (get one), **POST /resource** (create), **PUT /resource/:id** (full update), **PATCH /resource/:id** (partial update), **DELETE /resource/:id** (delete). Use proper status codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Server Error.',
    tip: `// routes/products.js
const router = require('express').Router();
const ctrl   = require('../controllers/productController');
const auth   = require('../middleware/auth');
const { validateBody } = require('../middleware/validate');
const { productSchema } = require('../schemas/productSchema');

router.get('/',     ctrl.getAll);                         // list
router.get('/:id',  ctrl.getOne);                         // get one
router.post('/',    auth, validateBody(productSchema), ctrl.create);   // create
router.put('/:id',  auth, validateBody(productSchema), ctrl.update);   // full update
router.patch('/:id',auth, ctrl.partialUpdate);            // partial update
router.delete('/:id', auth, ctrl.remove);                 // delete

// controllers/productController.js
const Product = require('../models/Product');

exports.getAll    = async (req, res) => {
    const { page = 1, limit = 20, sort = 'createdAt' } = req.query;
    const products = await Product.find()
        .sort(sort).skip((page-1)*limit).limit(Number(limit));
    res.json({ data: products, page, limit });
};
exports.getOne    = async (req, res, next) => {
    const p = await Product.findById(req.params.id);
    if (!p) return next(new AppError('Not found', 404));
    res.json(p);
};
exports.create    = async (req, res) => { res.status(201).json(await Product.create(req.body)); };
exports.update    = async (req, res) => { res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })); };
exports.remove    = async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.status(204).send(); };`
  },
  {
    category: 'Async & Data', difficulty: 'Advanced',
    question: 'How do you integrate GraphQL with Express using Apollo Server?',
    answer: 'Install `@apollo/server` and `@as-integrations/express`. Define a **type schema** (SDL — types, queries, mutations). Write **resolvers** that return data. Mount Apollo on an Express route. GraphQL allows clients to request exactly the fields they need — eliminates over-fetching. Use **DataLoader** to batch DB queries and avoid the N+1 problem.',
    tip: `const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@as-integrations/express');

// Define schema (SDL — no backtick template used here for brevity)
const typeDefs = '
  type User { id: ID!  name: String!  email: String! }
  type Query { users: [User!]!  user(id: ID!): User }
  type Mutation { createUser(name: String!, email: String!): User! }
';

// Define resolvers
const resolvers = {
    Query: {
        users:  ()         => User.find(),
        user:   (_, {id})  => User.findById(id),
    },
    Mutation: {
        createUser: (_, args) => User.create(args),
    },
};

// Wire up Apollo + Express
async function startServer() {
    const app    = express();
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    app.use(express.json());
    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => ({ user: req.user })  // pass auth context
    }));

    app.listen(4000, () => console.log('GraphQL at http://localhost:4000/graphql'));
}
startServer();`
  },

  /* ── Advanced Topics ── */
  {
    category: 'Advanced Topics', difficulty: 'Intermediate',
    question: 'How does middleware execution order work in Express? (next, next("route"), branching)',
    answer: 'Middleware runs in **registration order** — first `app.use()`, then matching routes. `next()` passes to next middleware. `next("route")` skips remaining handlers on the current route and moves to the next matching route. `next(err)` jumps to error middleware. Calling `res.send()` ends the chain — do not call `next()` after sending. Middleware before routes acts as a gate; middleware after routes handles 404s.',
    tip: `// Execution order demonstration
app.use(loggerMiddleware);      // 1st — runs for all requests
app.use('/api', authMiddleware); // 2nd — runs only for /api/* routes

app.get('/api/users',
    checkCache,                 // 3rd — check cache first
    validateQuery,              // 4th — validate params
    async (req, res) => {       // 5th — actual handler
        res.json(await User.find());
    }
);

// next('route') — skip remaining handlers, go to next matching route
app.get('/users/:id',
    (req, res, next) => {
        if (req.params.id === 'me') next('route');  // skip to next app.get('/users/:id')
        else next();
    },
    (req, res) => res.json({ lookup: 'by id' })
);
app.get('/users/:id', (req, res) => res.json({ lookup: 'current user' }));

// 404 — place AFTER all routes
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler — ALWAYS last, ALWAYS 4 args
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});`
  },
  {
    category: 'Advanced Topics', difficulty: 'Intermediate',
    question: 'How do you improve Express performance? (compression, caching, clustering)',
    answer: '**Compression**: gzip responses with `compression` middleware — reduces transfer size 70%+. **Caching**: set `Cache-Control` headers for static assets; use Redis for API response caching. **Clustering**: use Node.js `cluster` or **pm2 cluster mode** to use all CPU cores. **HTTP/2**: use with `spdy` or nginx proxy. **Production checklist**: disable x-powered-by header, enable gzip, serve static via nginx, use CDN.',
    tip: `// 1. Compression middleware
const compression = require('compression');
app.use(compression({ level: 6, threshold: 1024 }));   // compress >1KB responses

// 2. Response caching with Redis
const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

function cache(ttlSeconds) {
    return async (req, res, next) => {
        const key    = 'cache:' + req.url;
        const cached = await client.get(key);
        if (cached) return res.json(JSON.parse(cached));
        res.sendResponse = res.json.bind(res);
        res.json = async (body) => {
            await client.setEx(key, ttlSeconds, JSON.stringify(body));
            res.sendResponse(body);
        };
        next();
    };
}

app.get('/products', cache(60), getProducts);   // cache 60 seconds

// 3. Disable x-powered-by (security)
app.disable('x-powered-by');

// 4. pm2 cluster mode (ecosystem.config.js)
// module.exports = {
//   apps: [{ name: 'api', script: 'server.js', instances: 'max', exec_mode: 'cluster' }]
// };
// pm2 start ecosystem.config.js`
  },
  {
    category: 'Advanced Topics', difficulty: 'Intermediate',
    question: 'How do you test an Express API with Supertest and Jest?',
    answer: '**Supertest** sends HTTP requests directly to an Express app without starting a real server — perfect for integration tests. Import `app` (not `server.js`), pass to `request(app)`. Test status codes, response bodies, headers. Use `beforeAll`/`afterAll` for DB setup/teardown. Mock external services. Aim for: unit tests (controllers), integration tests (routes + DB), and e2e tests.',
    tip: `// app.js — export app without listen()
module.exports = app;

// server.js — only file that calls listen
const app  = require('./app');
app.listen(3000);

// __tests__/users.test.js
const request  = require('supertest');
const app      = require('../app');
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect(process.env.TEST_MONGO_URI);
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

afterEach(async () => {
    await User.deleteMany({});   // clean state between tests
});

describe('POST /api/users', () => {
    it('creates a user and returns 201', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'Alice', email: 'alice@test.com', password: 'secret123' });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe('Alice');
        expect(res.body.password).toBeUndefined();   // never return password
    });

    it('returns 400 for invalid email', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'Bob', email: 'not-an-email' });
        expect(res.statusCode).toBe(400);
    });
});`
  },
  {
    category: 'Advanced Topics', difficulty: 'Intermediate',
    question: 'How do you deploy an Express app? (pm2, Docker, environment config)',
    answer: 'Use **pm2** for process management on a VM — auto-restart on crash, cluster mode, log management. Use **Docker** to containerize — consistent environments, easy to scale. Store secrets in `.env` with `dotenv` in dev; use environment variables in production (never commit secrets). Use a reverse proxy (nginx) in front of Express for SSL termination, static files, and load balancing.',
    tip: `// 1. Environment variables
// .env (dev only — never commit)
// PORT=3000
// NODE_ENV=development
// MONGO_URI=mongodb://localhost/mydb
// JWT_SECRET=supersecret

require('dotenv').config();   // load .env in dev

// 2. pm2 (process manager)
// npm install -g pm2
// pm2 start server.js --name api --instances max --exec-mode cluster
// pm2 save  →  pm2 startup  (auto-start on reboot)

// 3. Dockerfile
// FROM node:20-alpine
// WORKDIR /app
// COPY package*.json ./
// RUN npm ci --only=production
// COPY . .
// EXPOSE 3000
// CMD ["node", "server.js"]

// 4. docker-compose.yml (dev)
// services:
//   api:
//     build: .
//     ports: ["3000:3000"]
//     environment:
//       - NODE_ENV=production
//       - MONGO_URI=mongodb://mongo:27017/mydb
//   mongo:
//     image: mongo:7

// 5. nginx reverse proxy (excerpt)
// server {
//   listen 80;
//   location / { proxy_pass http://localhost:3000; }
//   location /static { root /var/www; expires 1d; }
// }`
  },

  /* ── Ecosystem ── */
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How does the MERN stack work? (MongoDB, Express, React, Node.js)',
    answer: 'MERN is a **full-stack JavaScript** architecture: **MongoDB** stores data as JSON documents, **Express** provides the REST API layer, **React** is the frontend SPA, **Node.js** is the runtime. Express serves a JSON API; React fetches data via `fetch`/Axios. In production, React is built to static files served by nginx or Express itself. Single language (JavaScript) across the entire stack.',
    tip: `// MERN architecture
//
// Browser (React SPA)
//    │  fetch('/api/users')
//    ▼
// nginx / Express (port 3000)
//    │  routes/users.js
//    ▼
// MongoDB (Mongoose)
//
// Express serves: static React build + /api/* routes

// server.js — serve React build in production
const path = require('path');
app.use('/api/users',    require('./routes/users'));
app.use('/api/products', require('./routes/products'));

// Serve React build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) =>                          // catch-all for React Router
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    );
}

// React — fetch from Express API
useEffect(() => {
    fetch('/api/users')
        .then(r => r.json())
        .then(setUsers);
}, []);`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How do you add real-time features to Express using Socket.IO?',
    answer: '**Socket.IO** adds WebSocket support on top of Express — bidirectional, event-based communication. Share the same HTTP server between Express and Socket.IO. Emit events from server to clients and vice versa. Use **rooms** to group connections (e.g., a chat room). Scales horizontally with the `socket.io-redis` adapter (Redis pub/sub).',
    tip: `const express   = require('express');
const http      = require('http');
const { Server } = require('socket.io');

const app    = express();
const server = http.createServer(app);   // share server
const io     = new Server(server, {
    cors: { origin: 'http://localhost:3000' }
});

// Socket.IO events
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join a room
    socket.on('join-room', (roomId) => {
        socket.join(roomId);
        io.to(roomId).emit('user-joined', { id: socket.id });
    });

    // Chat message
    socket.on('message', ({ roomId, text }) => {
        io.to(roomId).emit('message', { from: socket.id, text });
    });

    socket.on('disconnect', () => console.log('User disconnected'));
});

// Express REST + Socket.IO on same port
server.listen(3000);

// Client-side (browser)
// const socket = io('http://localhost:3000');
// socket.emit('join-room', 'room-1');
// socket.on('message', (msg) => console.log(msg));`
  },
  {
    category: 'Ecosystem', difficulty: 'Advanced',
    question: 'How do you build microservices with Express? (message queues, inter-service communication)',
    answer: 'Split a monolith into small, independent services — each with its own Express server and database. Communication: **HTTP/REST** (simple, synchronous), **gRPC** (fast, typed), **Message queues** (async, decoupled) — RabbitMQ or Kafka. An **API Gateway** routes requests to services. Use service discovery (Consul, Kubernetes DNS) in production. Each service deploys independently.',
    tip: `// Order Service — publishes event
const amqp = require('amqplib');

async function publishOrderCreated(order) {
    const conn    = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await conn.createChannel();
    await channel.assertQueue('order.created', { durable: true });
    channel.sendToQueue('order.created', Buffer.from(JSON.stringify(order)));
    console.log('Published order.created event');
}

app.post('/orders', async (req, res) => {
    const order = await Order.create(req.body);
    await publishOrderCreated(order);
    res.status(201).json(order);
});

// Email Service — consumes event
async function startConsumer() {
    const conn    = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await conn.createChannel();
    await channel.assertQueue('order.created', { durable: true });
    channel.consume('order.created', async (msg) => {
        const order = JSON.parse(msg.content.toString());
        await sendConfirmationEmail(order.userEmail, order);
        channel.ack(msg);
    });
}

// API Gateway (Express)
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api/orders',   createProxyMiddleware({ target: 'http://order-service:3001' }));
app.use('/api/products', createProxyMiddleware({ target: 'http://product-service:3002' }));`
  },
  {
    category: 'Ecosystem', difficulty: 'Advanced',
    question: 'How do you deploy Express as a serverless function? (AWS Lambda, Azure Functions)',
    answer: 'Wrap Express with `serverless-http` — converts Lambda events to Express req/res. Deploy with **AWS SAM**, **Serverless Framework**, or **AWS CDK**. Benefits: no server management, pay per request, auto-scale. Trade-offs: **cold starts** (first request latency), stateless (no memory between requests, use Redis/DB), limited execution time (15 min max on Lambda). Good for: low-traffic APIs, event-driven workloads.',
    tip: `// 1. Install: npm install serverless-http

// handler.js (AWS Lambda)
const express       = require('express');
const serverless    = require('serverless-http');

const app = express();
app.use(express.json());

app.get('/users',    getUsers);
app.post('/users',   createUser);

// DB connection — use connection pooling with care
// Initialize outside handler to reuse across warm invocations
let dbConnection;
async function getDB() {
    if (!dbConnection) dbConnection = await connectDB();
    return dbConnection;
}

// Export for Lambda
module.exports.handler = serverless(app);

// serverless.yml (Serverless Framework)
// service: my-api
// provider:
//   name: aws
//   runtime: nodejs20.x
// functions:
//   api:
//     handler: handler.handler
//     events:
//       - http:
//           path: /{proxy+}
//           method: any

// Warm-up trick — ping every 5 min to avoid cold starts
// Use AWS CloudWatch scheduled event or serverless-plugin-warmup`
  },

  /* ── Interview ── */
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'Interview: What is middleware in Express and how does it work?',
    answer: 'Middleware is a **function with (req, res, next) signature** that runs between the request arriving and the response being sent. It can: read/modify req and res, end the request-response cycle, or call `next()` to pass control to the next function. Express is essentially a **pipeline of middleware** — every route handler is middleware. Common uses: logging, authentication, input validation, error handling.',
    tip: `// Middleware = function(req, res, next)
function logRequest(req, res, next) {
    console.log(req.method, req.url);   // 1. do something
    next();                             // 2. pass control forward
}

// Multiple middleware per route
app.get('/dashboard',
    authenticate,    // check JWT token
    authorize,       // check user role
    logRequest,      // log the request
    (req, res) => {  // final handler
        res.json({ data: 'dashboard' });
    }
);

// Key interview points:
// - Runs IN ORDER of registration
// - Must call next() OR send a response — never both
// - next(err) jumps to error-handling middleware
// - 4-arg (err,req,res,next) = error middleware
// - app.use() registers for all methods/paths
// - Path prefix: app.use('/admin', adminMiddleware)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: How does Express handle async errors? What happens if you forget try/catch?',
    answer: 'In Express 4, **uncaught async errors crash the process** or hang the request. You must explicitly call `next(err)` in a catch block. Express 5 (beta) auto-catches rejected promises. The `express-async-errors` package backports this to Express 4. Best practice: use a wrapper like `asyncHandler(fn)` that catches rejections and calls `next(err)` automatically.',
    tip: `// BAD — async error silently hangs the request in Express 4
app.get('/bad', async (req, res) => {
    const data = await riskyOperation();   // if this throws — request hangs forever!
    res.json(data);
});

// GOOD — manual try/catch
app.get('/good', async (req, res, next) => {
    try {
        const data = await riskyOperation();
        res.json(data);
    } catch (err) {
        next(err);   // sends to error middleware
    }
});

// BEST — asyncHandler wrapper (write once, use everywhere)
const asyncHandler = fn => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

app.get('/best', asyncHandler(async (req, res) => {
    const data = await riskyOperation();
    res.json(data);
}));

// Error middleware (always last in app.js)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message });
});`
  },
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'Interview: Explain the Express request/response cycle from browser to response.',
    answer: '1. Browser sends HTTP request. 2. Express receives it in Node.js http server. 3. Request passes through **global middleware** (helmet, cors, body parser, logger). 4. Express matches the URL + method to a **route**. 5. Request passes through **route-specific middleware** (auth, validation). 6. **Route handler** processes the request (DB query, logic). 7. **res.json()** sends response back. 8. If error occurs at any point, **error middleware** sends error response.',
    tip: `// Full request/response cycle:
//
// Client: GET /api/users?page=2
//         Authorization: Bearer <token>
//           │
//           ▼
// [1] morgan logger        — logs method + URL
// [2] helmet               — adds security headers
// [3] cors                 — checks origin header
// [4] express.json()       — parses body (GET has none)
//           │
//           ▼
// [5] Route match: GET /api/users
// [6] authenticate         — verifies JWT, sets req.user
// [7] validateQuery        — checks req.query.page is a number
//           │
//           ▼
// [8] Route handler:
//     const users = await User.find()
//                       .skip(20).limit(20);
//     res.json({ data: users, page: 2 });
//           │
//           ▼
// [9] Response sent to client: 200 OK { data: [...], page: 2 }
//
// If authenticate fails → next(new AppError('Unauthorized', 401))
// → jumps to error middleware → 401 { error: 'Unauthorized' }`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: How do you secure an Express API? (checklist)',
    answer: 'Security checklist: **helmet** (secure headers), **cors** (whitelist origins), **rate limiting** (prevent brute force), **input validation** (never trust user data), **JWT/OAuth** (stateless auth), **bcrypt** (hash passwords), **HTTPS only**, **environment variables** (no hardcoded secrets), **SQL/NoSQL injection prevention** (use parameterized queries/ORM), **error messages** (never expose stack traces in production).',
    tip: `// Security checklist — one-liner overview

// 1. HTTP headers
app.use(helmet());

// 2. CORS
app.use(cors({ origin: ['https://myapp.com'] }));

// 3. Rate limiting
app.use('/api', rateLimit({ windowMs: 15*60*1000, max: 100 }));

// 4. Body size limit
app.use(express.json({ limit: '10kb' }));

// 5. Input validation (never skip)
app.post('/users', validateBody(userSchema), createUser);

// 6. Auth — JWT
const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

// 7. Passwords — bcrypt
const hash = await bcrypt.hash(password, 12);

// 8. Parameterized queries (Mongoose/Prisma handles this)
User.findOne({ email: req.body.email });   // safe — no injection risk

// 9. Hide stack traces in prod
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message,
        stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    });
});

// 10. Never commit .env — use .gitignore`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: What are REST API best practices in Express?',
    answer: 'REST best practices: **Use nouns** not verbs in URLs (`/users` not `/getUsers`). **Use proper HTTP methods** (GET=read, POST=create, PUT=replace, PATCH=update, DELETE=delete). **Correct status codes** (201 for create, 204 for delete, 400 for bad input, 401 for unauth, 404 for not found). **Versioning** (`/api/v1/users`). **Pagination** for list endpoints. **Consistent JSON structure**. **HATEOAS** links (optional). **Idempotency** for PUT/DELETE.',
    tip: `// URL design — nouns, plural, nested for relations
GET    /api/v1/users               — list all users
GET    /api/v1/users/:id           — get one user
POST   /api/v1/users               — create user
PUT    /api/v1/users/:id           — full replace
PATCH  /api/v1/users/:id           — partial update
DELETE /api/v1/users/:id           — delete user
GET    /api/v1/users/:id/posts     — user's posts (nested)

// Status codes
201 Created    — POST success, return created resource
204 No Content — DELETE success (no body)
400 Bad Request — validation error (include details)
401 Unauthorized — missing/invalid auth token
403 Forbidden  — valid token but no permission
404 Not Found  — resource doesn't exist
409 Conflict   — duplicate resource (email already taken)
422 Unprocessable Entity — semantic validation error
500 Internal Server Error — unexpected server error

// Consistent response structure
// Success:  { data: {...}, meta: { page, total } }
// Error:    { error: 'message', details: [...] }

// Pagination
GET /users?page=2&limit=20&sort=-createdAt`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview: Express vs Fastify vs NestJS vs Koa — when to choose each?',
    answer: '**Express**: most popular, huge ecosystem, minimal & flexible, perfect for APIs & microservices. Best choice for 90% of projects. **Fastify**: 2x faster than Express (schema-based validation, JSON serialization), TypeScript-first, built-in logging. Choose for high-performance APIs. **NestJS**: opinionated, Angular-style architecture (decorators, DI), excellent for large teams and enterprise. **Koa**: by Express creators, uses async/await natively, smaller core. Choose if you want Express but cleaner async.',
    tip: `// Express — flexible, minimal
const app = express();
app.get('/users', async (req, res) => res.json(await getUsers()));

// Fastify — performance + schema validation
const fastify = require('fastify')();
fastify.get('/users', {
    schema: {
        response: {
            200: {
                type: 'array',
                items: { type: 'object', properties: { id: { type: 'number' } } }
            }
        }
    }
}, async (request, reply) => getUsers());

// NestJS — decorators + DI (TypeScript)
// @Controller('users')
// class UsersController {
//   constructor(private usersService: UsersService) {}
//   @Get()  findAll() { return this.usersService.findAll(); }
//   @Post() create(@Body() dto: CreateUserDto) { ... }
// }

// Decision guide:
// Small project / quick API    → Express
// High performance (10k+ rps) → Fastify
// Large team / enterprise      → NestJS
// Express but cleaner async    → Koa`
  },

];


/* ═══════════════════════════════════════════════════════════
   REACT & SSR — 31 cards across 9 categories
═══════════════════════════════════════════════════════════ */
const REACT_CARDS = [

  // ── Overview ─────────────────────────────────────────────
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'React mindmap — what are the 7 core areas and how do they connect?',
    answer: 'React is organized into 7 areas: 1) Fundamentals (components, JSX, props, state). 2) Lifecycle (mounting, updating, unmounting via hooks). 3) Hooks (useState, useEffect, useContext, useReducer, custom hooks). 4) Data Flow (one-way binding, lifting state, Context API). 5) Performance (Virtual DOM, memoization, code splitting). 6) Ecosystem (React Router, Redux/Zustand, testing). 7) Advanced (SSR/Next.js, concurrent rendering, Suspense & Error Boundaries).',
    tip: `REACT
│
├─ 1. Fundamentals   Components (Functional vs Class) · JSX · Props · State
│
├─ 2. Lifecycle      Mounting → Updating → Unmounting
│                    useEffect([], [dep], cleanup)
│
├─ 3. Hooks          useState · useEffect · useContext
│                    useReducer · Custom Hooks
│
├─ 4. Data Flow      One-way binding · Lifting state up · Context API
│
├─ 5. Performance    Virtual DOM · React.memo · useMemo · useCallback
│                    Code splitting · React.lazy · Suspense
│
├─ 6. Ecosystem      React Router · Redux / Zustand / Context
│                    Testing (Jest, React Testing Library)
│
└─ 7. Advanced       SSR & Next.js (CSR/SSR/SSG/ISR)
                     Concurrent rendering (startTransition)
                     Suspense & Error Boundaries

CORE INTERVIEW KNOWLEDGE
  Declarative:   describe what UI should look like, React handles updates
  Components:    reusable, isolated pieces of UI
  State vs Props props = inputs (read-only), state = internal + dynamic
  Hooks:         modern way to manage state and lifecycle in functional components
  Virtual DOM:   improves perf by minimising direct DOM manipulation
  Data flow:     one-way, predictable; Context or Redux for global state`
  },

  // ── Fundamentals ─────────────────────────────────────────
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'Functional vs Class Components — what changed and why?',
    answer: 'Class components (pre-2019) required extending React.Component, a constructor, and this.state / this.setState. Functional components are plain JS functions returning JSX. With Hooks (React 16.8+), functional components can do everything class components can — state, lifecycle effects, context — with less boilerplate. Class components are still valid but functional + hooks is the modern standard.',
    tip: `// Class component — verbose, "this" everywhere
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment() { this.setState({ count: this.state.count + 1 }); }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

// Functional component — clean, hooks-based (modern)
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}

// Why functional wins:
// ✅ No 'this' confusion
// ✅ Easier to test (pure functions)
// ✅ Hooks compose better than lifecycle methods
// ✅ Smaller bundle, easier to read`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What is JSX and how does it compile?',
    answer: 'JSX (JavaScript XML) is a syntax extension that looks like HTML inside JavaScript. Babel/TypeScript compiles it to React.createElement() calls. JSX is not required — you could write React.createElement() manually — but JSX makes component trees readable. Key JSX rules: use className (not class), camelCase event names (onClick not onclick), self-close empty tags, wrap multiple elements in a fragment (<> </>) or a parent element.',
    tip: `// JSX
const el = (
  <div className="card">
    <h1 onClick={handleClick}>Hello, {name}!</h1>
    <input type="text" />
  </div>
);

// Compiled by Babel to:
const el = React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', { onClick: handleClick }, 'Hello, ', name, '!'),
  React.createElement('input', { type: 'text' })
);

// JSX rules:
// ✅ className not class, htmlFor not for
// ✅ camelCase events: onClick, onChange, onSubmit
// ✅ Self-close empty tags: <img /> <br /> <input />
// ✅ Expressions in {}: {user.name}, {active ? 'On' : 'Off'}
// ✅ Multiple roots → wrap in fragment: <> ... </>
// ❌ No statements in JSX — use ternary / .map() instead`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are Props and how does one-way data flow work?',
    answer: 'Props are read-only inputs passed from parent to child — the primary mechanism for component communication. Components must be pure: same props always produce the same output. Data flows one way: parent → child. To pass data upward, the parent sends a callback function as a prop and the child calls it. This predictability is the core of React\'s mental model.',
    tip: `// Function component receiving props
function UserCard({ name, role, onSelect }) {
  return (
    <div>
      <h2>{name}</h2>
      <span>{role}</span>
      <button onClick={() => onSelect(name)}>Select</button>
    </div>
  );
}

// Parent passes data down + callback up
function App() {
  const handleSelect = (name) => console.log('Selected:', name);
  return (
    <UserCard
      name="Alice"
      role="Admin"
      onSelect={handleSelect}   // child calls this to send data UP
    />
  );
}

// Props rules:
// ✅ READ-ONLY — never mutate props inside a component
// ✅ Any JS value: string, number, object, array, function, JSX
// ✅ Default values: function Card({ size = 'md' }) {}
// ✅ children prop: content between <Card> ... </Card> tags
// ✅ Spread: <Input {...fieldProps} /> passes all keys as props`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What is State in React and how does it differ from Props?',
    answer: 'State is local, mutable data owned by a component. Unlike props (external inputs), state is internal and can change over time. Updating state with the setter triggers a re-render. React batches state updates for performance. State should be the minimum data needed to describe the UI — derived values should be computed, not stored as state.',
    tip: `import { useState } from 'react';

// Primitive state
const [count, setCount] = useState(0);
setCount(5);                      // set directly
setCount(prev => prev + 1);       // updater fn — safe with batching

// Object state — ALWAYS spread to create a new reference
const [user, setUser] = useState({ name: 'Alice', age: 25 });
setUser(prev => ({ ...prev, age: 26 }));  // ✅ new object
// user.age = 26; setUser(user);           // ❌ same ref, no re-render

// Array state
const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]);          // ✅ add
setItems(prev => prev.filter(i => i.id !== id)); // ✅ remove

// Props vs State:
// Props   → passed from parent, READ-ONLY in this component
// State   → owned by this component, MUTABLE via setter
// Both    → changing either triggers a re-render

// What NOT to put in state:
// ❌ Derived data: const total = items.reduce(...) — compute it
// ❌ Props copies: state mirrors a prop → out-of-sync bugs`
  },

  // ── Lifecycle ────────────────────────────────────────────
  {
    category: 'Lifecycle', difficulty: 'Beginner',
    question: 'What happens during the Mounting phase in React?',
    answer: 'Mounting is when a component is created and inserted into the DOM for the first time. In functional components, this maps to useEffect(() => { ... }, []) — the empty dependency array means "run once after the first render". This is where you initialize data: fetch from APIs, subscribe to external stores, set up timers, or read from localStorage.',
    tip: `// useEffect with [] runs once after mount
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mounting: fetch initial data
  useEffect(() => {
    fetch('/api/users/' + userId)
      .then(r => r.json())
      .then(data => { setUser(data); setLoading(false); });
  }, []);  // empty array = runs on mount only

  if (loading) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}

// Common mounting tasks:
// fetch initial data, set up event listeners
// start timers, subscribe to external stores
// initialize 3rd-party libraries (charts, maps)`
  },
  {
    category: 'Lifecycle', difficulty: 'Beginner',
    question: 'What triggers the Updating phase and how do you react to it?',
    answer: 'A component updates (re-renders) when its state or props change. React re-runs the function top-to-bottom, diffs the virtual DOM, and applies minimal DOM changes. useEffect with a dependency array runs after mount AND after any render where a listed dep changed — this replaces componentDidUpdate.',
    tip: `// useEffect([dep]) runs after mount AND when dep changes
useEffect(() => {
  setLoading(true);
  fetchUser(userId)
    .then(setUser)
    .finally(() => setLoading(false));
}, [userId]);  // re-runs every time userId changes

// What triggers a re-render:
// 1. useState setter called
// 2. Props from parent changed
// 3. useContext value changed
// 4. Parent re-rendered (unless React.memo wraps this child)

// Preventing unnecessary updates:
// React.memo(Component)            skip if props unchanged
// useMemo(() => calc, [dep])       cache computed value
// useCallback(fn, [dep])           stable function reference

// Anti-patterns:
// setState inside useEffect without correct deps  -> loop
// object/array in deps without useMemo            -> new ref every render`
  },
  {
    category: 'Lifecycle', difficulty: 'Beginner',
    question: 'What happens during the Unmounting phase and why does cleanup matter?',
    answer: 'Unmounting is when a component is removed from the DOM. The function returned from useEffect runs on unmount (and before each re-run of that effect). Without cleanup you get memory leaks: event listeners accumulate, timers fire into unmounted components, and fetch calls try to update state that no longer exists. Always clean up what you set up.',
    tip: `// Return a cleanup function from useEffect
useEffect(() => {
  // Setup
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json()).then(setData);

  return () => controller.abort();   // cleanup: cancel fetch on unmount
}, []);

useEffect(() => {
  const handler = (e) => setKey(e.key);
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);

useEffect(() => {
  const id = setInterval(() => setTick(t => t + 1), 1000);
  return () => clearInterval(id);   // cleanup timer
}, []);

// Cleanup checklist:
// abort pending fetch requests
// clear setTimeout / setInterval
// remove event listeners (window, document, socket)
// unsubscribe from observables / stores`
  },

  // ── Hooks ────────────────────────────────────────────────
  {
    category: 'Hooks', difficulty: 'Beginner',
    question: 'How does useState work and what are the rules of Hooks?',
    answer: 'useState returns [currentValue, setterFn]. Calling the setter triggers a re-render with the new value. State updates are asynchronous and batched. For objects/arrays, always pass a new reference — React uses Object.is() for comparison, so mutating the existing object will not trigger a re-render. Rules of Hooks: only call at the top level (not inside conditions/loops), only call from React function components or custom hooks.',
    tip: `import { useState } from 'react';

// Primitive state
const [count, setCount] = useState(0);
setCount(5);                          // set directly
setCount(prev => prev + 1);          // updater function (safe for batching)

// Object state — ALWAYS spread to create new reference
const [user, setUser] = useState({ name: 'Alice', age: 25 });
setUser(prev => ({ ...prev, age: 26 }));  // ✅ new object
// user.age = 26; setUser(user);            // ❌ same ref, no re-render!

// Array state
const [items, setItems] = useState([]);
setItems(prev => [...prev, newItem]);     // ✅ add
setItems(prev => prev.filter(i => i.id !== id)); // ✅ remove

// Lazy initial state (expensive computation runs only once)
const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) ?? []);

// Rules of Hooks:
// ✅ Only call at the TOP LEVEL of a component
// ✅ Only call from function components or custom hooks
// ❌ Never call inside if, for, nested functions`
  },
  {
    category: 'Hooks', difficulty: 'Intermediate',
    question: 'How does useEffect work and how do you control when it runs?',
    answer: 'useEffect runs side effects after the component renders. The dependency array controls when it re-runs: no array = every render, [] = once on mount, [dep1, dep2] = when deps change. Return a cleanup function to cancel subscriptions, timers, or fetch requests. useEffect does not run during SSR, which matters for Next.js.',
    tip: `import { useEffect, useState } from 'react';

// Run once on mount (empty deps)
useEffect(() => {
  document.title = 'My App';
}, []);

// Run when userId changes
useEffect(() => {
  setLoading(true);
  fetchUser(userId)
    .then(data => setUser(data))
    .finally(() => setLoading(false));
}, [userId]);  // re-runs whenever userId changes

// Cleanup — cancel on unmount or before re-run
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json()).then(setData);
  return () => controller.abort();  // cleanup!
}, []);

// Event listener
useEffect(() => {
  const handler = (e) => setKey(e.key);
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler); // cleanup!
}, []);

// ⚠️ Avoid: missing deps → stale closures
// ⚠️ Avoid: objects/arrays as deps → infinite loop (new ref every render)`
  },
  {
    category: 'Hooks', difficulty: 'Intermediate',
    question: 'When do you use useRef, useCallback, and useMemo?',
    answer: 'useRef: persists a mutable value across renders without causing re-renders — used for DOM element access and storing previous values/timers. useCallback: memoizes a function reference so it is not recreated on every render — useful when passing callbacks to child components wrapped in React.memo. useMemo: memoizes an expensive computed value — recalculates only when deps change.',
    tip: `// useRef — mutable box that survives renders, no re-render on change
const inputRef = useRef(null);
const timerRef = useRef(null);
<input ref={inputRef} />
inputRef.current.focus();               // access DOM node
timerRef.current = setTimeout(fn, 1000);// store timer id

// useCallback — stable function reference
const handleClick = useCallback((id) => {
  deleteItem(id);
}, []);  // recreated only when deps change
// Useful: passing to React.memo child, useEffect dep

// useMemo — memoize expensive calculation
const sortedList = useMemo(() =>
  [...items].sort((a, b) => a.price - b.price),
[items]);  // only re-sorts when items changes

// When to use:
// useRef      → DOM refs, previous value, instance variables
// useCallback → stable function for React.memo / useEffect
// useMemo     → heavy computation, derived data, stable object refs

// ❌ Don't over-memoize — has its own cost
// Only use when profiling shows a real performance problem`
  },
  {
    category: 'Hooks', difficulty: 'Intermediate',
    question: 'How do you use useContext and create custom hooks?',
    answer: 'useContext reads a context value without prop drilling — any component in the tree can access it. createContext provides the context; a Provider component sets the value. Custom hooks are plain functions starting with "use" that call other hooks — they extract reusable stateful logic out of components (data fetching, form state, debounce, etc.).',
    tip: `// Context — share data without prop drilling
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />   {/* can access theme without props */}
      <Main />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme('light')}>{theme}</button>;
}

// Custom hook — extract reusable logic
function useFetch(url) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal })
      .then(r => r.json()).then(setData).catch(setError)
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage — clean component
function UserProfile({ id }) {
  const { data, loading, error } = useFetch('/api/users/' + id);
  if (loading) return <Spinner />;
  return <div>{data?.name}</div>;
}`
  },
  {
    category: 'Hooks', difficulty: 'Intermediate',
    question: 'How does useReducer work and when should you prefer it over useState?',
    answer: 'useReducer manages complex state with a reducer function: (state, action) → newState. Use it when: multiple sub-values are related, next state depends on the previous state in complex ways, or state transitions follow clear action patterns. It is the same pattern as Redux but local to a component.',
    tip: `import { useReducer } from 'react';

const initialState = { count: 0, step: 1, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count:   state.count + state.step,
        history: [...state.history, state.count + state.step]
      };
    case 'DECREMENT':
      return { ...state, count: state.count - state.step };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'RESET':
      return initialState;
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'SET_STEP', payload: 5 })}>Step=5</button>
    </>
  );
}

// Prefer useReducer over useState when:
// → state has 3+ related fields that update together
// → next state depends on previous in multiple ways
// → you want predictable, testable state transitions`
  },

  // ── Data Flow ────────────────────────────────────────────
  {
    category: 'Data Flow', difficulty: 'Beginner',
    question: 'What is one-way data binding and why does React use it?',
    answer: 'One-way data binding means data flows in a single direction: from parent to child via props. A child cannot directly modify its parent\'s state. This makes data flow predictable and easy to trace — when a bug appears, you follow the data upward. Two-way binding (like Angular\'s ngModel) updates state automatically on input change, but can cause hard-to-trace cycles.',
    tip: `// One-way: parent owns state, child renders it
function Parent() {
  const [name, setName] = useState('Alice');
  return <Child name={name} onChange={setName} />;
}

// Child receives data (down) and calls callback (up)
function Child({ name, onChange }) {
  return (
    <input
      value={name}                        // data flows IN via props
      onChange={e => onChange(e.target.value)} // data flows OUT via callback
    />
  );
}

// Two-way binding pattern (simulated):
// <input value={state} onChange={e => setState(e.target.value)} />

// Why one-way is better:
// ✅ Predictable — one source of truth
// ✅ Debuggable — trace state changes up the tree
// ✅ Testable — pure functions in, pure output out
// ✅ No hidden mutation surprises`
  },
  {
    category: 'Data Flow', difficulty: 'Beginner',
    question: 'What is "lifting state up" and when do you do it?',
    answer: 'Lifting state up means moving shared state to the closest common ancestor of all components that need it. When two sibling components need the same data, neither can directly share state — so the parent holds it and passes it down as props. This keeps a single source of truth.',
    tip: `// Problem: two siblings need to share the same filter value
// ❌ Each manages its own state — they go out of sync

// ✅ Lift state to the common parent
function SearchPage() {
  const [query, setQuery] = useState('');  // lifted up here

  return (
    <div>
      {/* SearchBar reads and writes the shared query */}
      <SearchBar query={query} onQueryChange={setQuery} />
      {/* ResultsList reads the same query */}
      <ResultsList query={query} />
    </div>
  );
}

function SearchBar({ query, onQueryChange }) {
  return (
    <input
      value={query}
      onChange={e => onQueryChange(e.target.value)}
      placeholder="Search..."
    />
  );
}

function ResultsList({ query }) {
  const results = useFilteredData(query);
  return <ul>{results.map(r => <li key={r.id}>{r.title}</li>)}</ul>;
}

// Rule of thumb:
// Lift state to the LOWEST common ancestor that needs it.
// Don't over-lift — unnecessary re-renders happen higher up.`
  },
  {
    category: 'Data Flow', difficulty: 'Intermediate',
    question: 'What is the Context API and when should you use it instead of props?',
    answer: 'Context lets you share values across the component tree without passing props at every level (prop drilling). createContext() creates the context, a Provider sets the value, and useContext() reads it anywhere below the Provider. Use context for truly global state: current user, theme, locale, feature flags. Avoid it for high-frequency updates (every keystroke) — all consumers re-render on every context change.',
    tip: `// 1. Create context with a default value
const ThemeContext = createContext('light');

// 2. Provide the value at the top of the tree
function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Main />
    </ThemeContext.Provider>
  );
}

// 3. Consume anywhere below — no prop drilling needed
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
      {theme}
    </button>
  );
}

// Good Context use-cases:
// current user / auth state
// theme / color scheme
// locale / language
// feature flags

// Bad use-cases (prefer Zustand / Redux):
// frequent updates (search input, mouse position)
// complex server state (use React Query / SWR instead)`
  },

  // ── Performance ──────────────────────────────────────────
  {
    category: 'Performance', difficulty: 'Intermediate',
    question: 'How does React.memo prevent unnecessary re-renders?',
    answer: 'By default, when a parent re-renders, all child components re-render too — even if their props did not change. React.memo wraps a component and shallow-compares its props; if props are the same, the previous render output is reused. Combine with useCallback (stable function props) and useMemo (stable object/array props) for maximum effect. Do not use blindly — profile first.',
    tip: `// Without React.memo — re-renders every time parent renders
function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>;
}

// With React.memo — skips re-render if items reference unchanged
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>;
});

// ⚠️ Shallow comparison — objects/functions fail unless memoized
function Parent() {
  const [count, setCount] = useState(0);

  // ❌ New function every render → memo is bypassed
  const handleDelete = (id) => deleteItem(id);

  // ✅ Stable reference with useCallback
  const handleDelete = useCallback((id) => deleteItem(id), []);

  // ❌ New array every render → memo bypassed
  const filtered = items.filter(i => i.active);

  // ✅ Stable reference with useMemo
  const filtered = useMemo(() => items.filter(i => i.active), [items]);

  return <ExpensiveList items={filtered} onDelete={handleDelete} />;
}`
  },
  {
    category: 'Performance', difficulty: 'Intermediate',
    question: 'How do code splitting and lazy loading work in React?',
    answer: 'Code splitting breaks your bundle into smaller chunks loaded on demand — the initial bundle is smaller and pages load faster. React.lazy() dynamically imports a component (returns a Promise). Wrap it in Suspense with a fallback UI shown while loading. Use with React Router for route-based splitting — the most impactful approach.',
    tip: `import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// ❌ All pages bundled together — big initial load
import Dashboard from './pages/Dashboard';
import Settings  from './pages/Settings';

// ✅ Each page loaded only when navigated to
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings  = lazy(() => import('./pages/Settings'));
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings"  element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// Named chunk (Vite/webpack magic comment)
const Modal = lazy(() => import(/* webpackChunkName: "modal" */ './Modal'));

// Preload on hover for instant feel
const preloadDashboard = () => import('./pages/Dashboard');
<Link onMouseEnter={preloadDashboard} to="/dashboard">Dashboard</Link>`
  },
  {
    category: 'Performance', difficulty: 'Intermediate',
    question: 'Why does the key prop matter and how does React reconciliation work?',
    answer: 'Reconciliation is React\'s algorithm for updating the DOM efficiently. It compares the old and new virtual DOM trees top-down. The key prop helps React identify which items in a list changed, were added, or removed. Stable, unique keys (like database IDs) allow React to reorder DOM nodes instead of rebuilding them. Index as key causes bugs when items are reordered or filtered.',
    tip: `// Without key — React cannot tell what changed:
// Old: [A, B, C]  →  New: [X, A, B, C]
// React diffs each position → thinks A changed to X, B to A...
// → destroys and rebuilds all DOM nodes ❌

// With stable key — React matches by identity:
// React sees X is new, A/B/C just moved → inserts X, reuses rest ✅

// ✅ Use stable, unique IDs from data
{users.map(u => <UserRow key={u.id} user={u} />)}

// ❌ Index as key — breaks on sort/filter
{users.map((u, i) => <UserRow key={i} user={u} />)}

// Reconciliation rules:
// 1. Different element type → unmount old, mount new
// 2. Same type → update props in place
// 3. Lists → match by key, then update/add/remove

// Force remount by changing key (resets component state)
<Input key={userId} defaultValue={user.email} />
// Changing userId creates a fresh Input with no stale state`
  },

  // ── Ecosystem ────────────────────────────────────────────
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How does React Router work for client-side navigation?',
    answer: 'React Router is the standard client-side routing library for React SPAs. BrowserRouter wraps the app, Routes/Route define URL-to-component mappings, and Link/NavLink replace anchor tags for navigation without full page reloads. useNavigate() programmatically redirects, useParams() reads URL params, and useLocation() reads the current path.',
    tip: `import { BrowserRouter, Routes, Route, Link, NavLink,
         useNavigate, useParams } from 'react-router-dom';

// App setup
function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/blog"       element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*"           element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Reading URL params in a child component
function BlogPost() {
  const { slug } = useParams();   // /blog/hello-world → slug='hello-world'
  return <h1>Post: {slug}</h1>;
}

// Programmatic navigation
function LoginButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/dashboard')}>Login</button>;
}

// Nested routes — layout stays, inner page swaps
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index     element={<Overview />} />
  <Route path="settings" element={<Settings />} />
</Route>`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'Redux vs Zustand vs Context API — when do you use each?',
    answer: 'Context API is built into React — good for low-frequency global values (theme, locale, current user). Redux (with Redux Toolkit) is a battle-tested state machine for large apps with complex state logic, time-travel debugging, and middleware. Zustand is a lightweight alternative: minimal boilerplate, no Provider needed, direct store subscriptions. Choose based on complexity: Context → Zustand → Redux Toolkit.',
    tip: `// Context API — simple, built-in, no extra library
const CountCtx = createContext(0);
// ⚠️ All consumers re-render on every change — avoid for frequent updates

// Zustand — minimal, no Provider, component subscribes to slices
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set(s => ({ count: s.count + 1 })),
  reset:     () => set({ count: 0 }),
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}

// Redux Toolkit — structured, powerful, more setup
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: s => { s.value++; },   // Immer lets you mutate
  }
});

// Decision guide:
// Context     simple global values (theme, user, locale)
// Zustand     medium apps, easy migration from useState
// Redux Toolkit  large teams, complex flows, devtools needed`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'How do you test React components with React Testing Library and Jest?',
    answer: 'React Testing Library (RTL) tests components through user interactions — find elements by accessible queries (role, label, text) rather than implementation details (class names, test IDs). This gives confidence the component works as users expect. Jest provides the test runner, assertions, and mocking. userEvent simulates real user interactions; waitFor handles async updates.',
    tip: `import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

test('calls onLogin with email and password on submit', async () => {
  const onLogin = jest.fn();
  render(<LoginForm onLogin={onLogin} />);

  // Find by accessible role/label (like a real user would)
  await userEvent.type(screen.getByLabelText('Email'), 'alice@example.com');
  await userEvent.type(screen.getByLabelText('Password'), 'secret');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(onLogin).toHaveBeenCalledWith({
    email: 'alice@example.com',
    password: 'secret',
  });
});

// Query priority (most to least preferred):
// getByRole        most semantic (button, heading, input)
// getByLabelText   form fields with labels
// getByText        any visible text
// getByTestId      last resort — implementation detail

// Async: waitFor waits for DOM to stabilize
await waitFor(() => expect(screen.getByText('Welcome!')).toBeInTheDocument());

// RTL principle:
// Test behavior, not implementation.
// If a refactor doesn't change user experience, tests shouldn't break.`
  },

  // ── Advanced ─────────────────────────────────────────────
  {
    category: 'Advanced', difficulty: 'Intermediate',
    question: 'What is SSR with Next.js — CSR vs SSR vs SSG vs ISR?',
    answer: 'CSR: browser runs JS and fetches data — slow first load, bad SEO. SSR: server renders HTML on every request — fast first paint, always fresh, higher cost. SSG: HTML generated at build time — fastest, CDN-cacheable, stale risk. ISR: SSG pages that regenerate in the background after a configurable interval — near-fresh data without full SSR cost. Next.js App Router: all components are Server Components by default; add "use client" for interactivity.',
    tip: `//  Strategy  Rendered When       SEO   Data
//  CSR       In browser          No    On demand
//  SSR       Each request        Yes   Always fresh
//  SSG       Build time          Yes   At build
//  ISR       Build + revalidate  Yes   Near-fresh

// Next.js App Router defaults:
// - All components are Server Components (no JS shipped)
// - 'use client' at top → Client Component (useState OK)
// - fetch() extended with cache options

// SSG (static, cached forever)
const data = await fetch(url, { cache: 'force-cache' });

// SSR (fresh on every request)
const data = await fetch(url, { cache: 'no-store' });

// ISR (regenerate every 60 seconds)
const data = await fetch(url, { next: { revalidate: 60 } });

// Hydration: server sends HTML → browser loads JS → React
// attaches event handlers to existing DOM. Mismatch between
// server and client render causes hydration errors.`
  },
  {
    category: 'Advanced', difficulty: 'Advanced',
    question: 'What is Concurrent Rendering in React 18 and what does it enable?',
    answer: 'Concurrent rendering lets React interrupt, pause, and resume rendering work — so the browser stays responsive during heavy renders. Enabled by createRoot() in React 18. Key primitives: startTransition() marks a state update as non-urgent (can be interrupted by higher-priority input), useDeferredValue() defers re-rendering of a slow component. This eliminates UI freezes during expensive updates like large list filtering.',
    tip: `import { createRoot, startTransition, useDeferredValue, useTransition }
  from 'react';

// React 18: use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(<App />);

// startTransition — mark low-priority updates
function SearchPage() {
  const [input, setInput]   = useState('');
  const [query, setQuery]   = useState('');
  const [isPending, startTr] = useTransition();

  function handleChange(e) {
    setInput(e.target.value);             // urgent: update input immediately
    startTr(() => setQuery(e.target.value)); // non-urgent: can be interrupted
  }

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <Spinner />}
      <BigResultsList query={query} />    {/* deferred render */}
    </>
  );
}

// useDeferredValue — defer re-render of a slow subtree
function App({ text }) {
  const deferredText = useDeferredValue(text);  // lags behind text
  return <SlowList text={deferredText} />;
}

// Key point: UI stays responsive — typing feels instant
// even while React re-renders a 10,000-item list.`
  },
  {
    category: 'Advanced', difficulty: 'Intermediate',
    question: 'How do Suspense and Error Boundaries work in React?',
    answer: 'Suspense lets you declaratively show a fallback UI while a child component is loading (lazy-loaded code, data fetching). Error Boundaries are class components that catch errors in their subtree via getDerivedStateFromError / componentDidCatch — they prevent the whole app from crashing. In Next.js App Router, loading.tsx is a Suspense boundary and error.tsx is an Error Boundary.',
    tip: `import { lazy, Suspense } from 'react';

// Suspense + lazy loading — show fallback while chunk loads
const HeavyChart = lazy(() => import('./HeavyChart'));

function Dashboard() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <HeavyChart />
    </Suspense>
  );
}

// Error Boundary — catch runtime errors in child components
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    logErrorToService(error, info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong: {this.state.error.message}</h2>;
    }
    return this.props.children;
  }
}

// Usage — wrap risky subtrees
<ErrorBoundary>
  <Suspense fallback={<Spinner />}>
    <UserDashboard />
  </Suspense>
</ErrorBoundary>

// Next.js equivalents:
// loading.tsx  → automatic Suspense boundary for the route
// error.tsx    → automatic Error Boundary for the route`
  },

  // ── Interview ────────────────────────────────────────────
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'React is declarative — what does that mean and why does it matter?',
    answer: 'Declarative means you describe what the UI should look like for a given state, and React figures out how to update the DOM to match. You never manually add/remove DOM nodes. The opposite is imperative: "find element, add class, remove child, append new child." Declarative code is predictable, easier to debug, and scales — state changes automatically produce the correct UI.',
    tip: `// Imperative (vanilla JS) — describe HOW to update
const btn = document.getElementById('btn');
btn.textContent = 'Loading...';
btn.disabled = true;
btn.classList.add('spinner');

// Declarative (React) — describe WHAT to show
function SubmitButton({ isLoading }) {
  return (
    <button disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Submit'}
    </button>
  );
}
// React handles ALL the DOM updates when isLoading changes

// Why it matters:
// ✅ No manual DOM manipulation → fewer bugs
// ✅ UI = f(state) — same state always produces same UI
// ✅ React batches and optimises DOM updates for you
// ✅ Easy to reason about — just look at the render output`
  },
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'What is component-based architecture in React?',
    answer: 'Component-based architecture breaks the UI into small, reusable, self-contained pieces. Each component owns its markup, logic, and (optionally) styles. Components compose together like LEGO — a Page is made of Sections, Sections are made of Cards, Cards are made of Buttons. Benefits: reusability, isolated testing, parallel development, and incremental updates.',
    tip: `// Bad: one giant component — hard to reuse, test, maintain
function App() {
  return (
    <div>
      {/* 300 lines of mixed concerns */}
    </div>
  );
}

// Good: composed from focused components
function App() {
  return (
    <Layout>
      <Navbar user={currentUser} />
      <main>
        <ProductGrid products={products} />
        <Sidebar filters={filters} onFilter={handleFilter} />
      </main>
      <Footer />
    </Layout>
  );
}

// Component design principles:
// Single Responsibility — one component, one job
// Reusable — accepts props to customise behaviour
// Isolated — no hidden side effects during render
// Composable — small components build larger ones`
  },
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'State vs Props — what is the difference and when do you use each?',
    answer: 'Props are read-only inputs passed from parent to child — like function arguments. State is internal, mutable data owned by the component — like local variables that trigger re-renders when changed. Rule: if a value comes from outside, it is a prop. If a component needs to remember and change something itself, it is state. Never mutate props; always use the setter for state.',
    tip: `// Props — passed in, READ-ONLY
function Button({ label, onClick, disabled }) {
  // label/onClick/disabled are given to us — we cannot change them
  return <button onClick={onClick} disabled={disabled}>{label}</button>;
}

// State — owned internally, MUTABLE via setter
function Toggle() {
  const [on, setOn] = useState(false);  // this component owns 'on'
  return (
    <button onClick={() => setOn(prev => !prev)}>
      {on ? 'ON' : 'OFF'}
    </button>
  );
}

// Quick decision guide:
// "Does a parent need to control this value?"  → prop
// "Does only this component need to track it?" → state
// "Is it derived from props/state?"            → compute it, not state

// Common mistake: copying props into state
// ❌ const [name, setName] = useState(props.name) → goes stale
// ✅ just use props.name directly in the render`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'What are React Hooks and why were they introduced?',
    answer: 'Hooks are functions that let functional components use state, lifecycle effects, and other React features — replacing class component patterns. Introduced in React 16.8 to solve: hard-to-reuse stateful logic (required HOCs or render props), complex lifecycle methods that mixed unrelated concerns, and the confusion of "this" in classes. Core hooks: useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer.',
    tip: `// Before hooks: class component with lifecycle mixing concerns
class UserPage extends React.Component {
  componentDidMount()  { fetchUser(); subscribeToSocket(); }
  componentDidUpdate() { if (idChanged) fetchUser(); }
  componentWillUnmount() { unsubscribeFromSocket(); }
  // fetch logic and socket logic tangled together ^
}

// After hooks: each concern in its own useEffect
function UserPage({ userId }) {
  // Concern 1: fetch user
  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  // Concern 2: socket subscription
  useEffect(() => {
    subscribeToSocket();
    return () => unsubscribeFromSocket();
  }, []);
}

// Rules of Hooks (enforced by eslint-plugin-react-hooks):
// ✅ Only call at the TOP LEVEL — not inside if/loops
// ✅ Only call from function components or custom hooks
// These rules ensure hook call order is stable across renders.`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'How does the Virtual DOM work and why does it improve performance?',
    answer: 'The Virtual DOM is a lightweight JavaScript object tree that mirrors the real DOM. On each state change React re-renders the component to a new virtual tree, diffs it against the previous version (reconciliation), and computes the minimal set of real DOM mutations needed. Direct DOM operations are expensive (trigger layout/repaint); batching them via the virtual DOM minimises that cost. React 18 adds concurrent rendering — work can be paused and prioritised.',
    tip: `// Virtual DOM cycle:
//
//  setState() called
//       │
//       ▼
//  React re-renders component → new Virtual DOM tree
//       │
//       ▼
//  Reconciliation (diffing):
//    same element type?  → update props in place
//    different type?     → unmount old, mount new
//    list items?         → match by key, add/remove/reorder
//       │
//       ▼
//  Commit: apply ONLY changed nodes to real DOM
//       │
//       ▼
//  Browser paints

// Why real DOM is slow:
// every change can trigger: style recalc → layout → paint → composite

// React's optimisations:
// ✅ Batch multiple setState calls into one render
// ✅ Skip re-render if props unchanged (React.memo)
// ✅ Concurrent mode: pause low-priority renders for urgent input`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'What is one-way data flow in React and how do you handle global state?',
    answer: 'Data flows in one direction: parent → child via props. A child cannot modify a parent\'s state directly — it calls a callback prop instead. This makes bugs easy to trace (follow the data up the tree). For global state shared across many components, options are: Context API (built-in, good for low-frequency data like theme/user), Zustand (lightweight, minimal boilerplate), or Redux Toolkit (large apps, complex flows, devtools).',
    tip: `// One-way flow: parent owns state, passes data down
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} onIncrement={() => setCount(c => c + 1)} />;
}
function Child({ count, onIncrement }) {
  return <button onClick={onIncrement}>Count: {count}</button>;
}

// Problem: prop drilling — passing through many layers
// Solution 1: Context API (built-in)
const UserCtx = createContext(null);
<UserCtx.Provider value={user}><DeepTree /></UserCtx.Provider>
const user = useContext(UserCtx); // anywhere below Provider

// Solution 2: Zustand (no Provider needed)
const useStore = create(set => ({
  user: null,
  setUser: (u) => set({ user: u }),
}));
const { user, setUser } = useStore(); // any component, anywhere

// When to use what:
// Context     theme, locale, current user (low update frequency)
// Zustand     shared UI state, medium complexity
// Redux Toolkit  enterprise apps, time-travel debugging, middleware`
  },
];


/* ═══════════════════════════════════════════════════════════
   TESTING & CONTAINERS — Docker + Kubernetes  (20 cards)
═══════════════════════════════════════════════════════════ */
const DEVOPS_CARDS = [

  // ── Testing ──────────────────────────────────────────────
  {
    category: 'Testing', difficulty: 'Beginner',
    question: 'What are the three levels of software testing: unit, integration, and E2E?',
    answer: 'Unit tests verify isolated functions/components in memory — fast, numerous, no external dependencies (mocked). Integration tests verify multiple units working together (e.g. controller + service + database) — slower, catch wiring bugs. End-to-End (E2E) tests drive a real browser through real user flows — slowest, most realistic, most expensive to write. The Testing Trophy: write mostly integration tests, a solid base of unit tests, and a small suite of E2E tests.',
    tip: `// Testing Trophy (Kent C. Dodds):
//
//          /\\   E2E (few, high confidence)
//         /  \\
//        / Integration (most — good ROI)
//       /──────\\
//      /  Unit   \\  (many, fast, isolated)
//     /────────────\\
//    /   Static     \\  (TypeScript, ESLint — free!)

// Unit test  → test a pure function in isolation
// Integration → test API endpoint hitting real DB
// E2E         → Playwright opens Chrome, clicks through checkout

// Tools:
// Jest / Vitest      — unit + integration (JS/TS)
// React Testing Library — component integration tests
// Playwright / Cypress  — E2E browser automation
// Supertest          — HTTP integration tests for Express`
  },
  {
    category: 'Testing', difficulty: 'Beginner',
    question: 'How do you write unit tests with Jest / Vitest?',
    answer: 'Jest and Vitest share the same API. A test file groups tests in describe() blocks. Each test() or it() asserts expected behaviour with expect() matchers. Arrange-Act-Assert (AAA) is the standard pattern: set up test data, call the function, assert the output. beforeEach / afterEach run setup/teardown around each test.',
    tip: `// sum.js
export function sum(a, b) { return a + b; }
export function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// sum.test.js
import { sum, divide } from './sum';

describe('Math utilities', () => {
  // Arrange-Act-Assert
  it('adds two numbers', () => {
    const result = sum(2, 3);     // Act
    expect(result).toBe(5);       // Assert
  });

  it('throws on divide by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  it('returns correct division', () => {
    expect(divide(10, 2)).toBe(5);
  });
});

// Common matchers:
// .toBe(val)           strict equality (Object.is)
// .toEqual(obj)        deep equality for objects/arrays
// .toBeNull() / .toBeUndefined()
// .toBeTruthy() / .toBeFalsy()
// .toContain(item)     array/string contains
// .toHaveLength(n)
// .toThrow('message')  error thrown`
  },
  {
    category: 'Testing', difficulty: 'Intermediate',
    question: 'How does mocking work in Jest — jest.fn(), jest.mock(), and spies?',
    answer: 'Mocking replaces real dependencies with controlled fakes so unit tests are fast and isolated. jest.fn() creates a mock function that records calls. jest.mock() replaces an entire module. jest.spyOn() wraps a real method to observe/override calls. Always restore mocks after tests to prevent state leaking between tests.',
    tip: `// jest.fn() — create a standalone mock
const mockSend = jest.fn().mockResolvedValue({ ok: true });
await mockSend('payload');
expect(mockSend).toHaveBeenCalledWith('payload');
expect(mockSend).toHaveBeenCalledTimes(1);

// jest.mock() — replace entire module
jest.mock('./emailService', () => ({
  sendEmail: jest.fn().mockResolvedValue(true)
}));
import { sendEmail } from './emailService';
// sendEmail is now a mock — real email never sent

// jest.spyOn() — wrap a real method
const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
// ... run code that calls console.error ...
expect(spy).toHaveBeenCalled();
spy.mockRestore();  // restore original

// Cleanup — reset all mocks between tests
afterEach(() => jest.clearAllMocks());

// Mock return values
mockFn.mockReturnValue(42);
mockFn.mockReturnValueOnce(99);      // once then default
mockFn.mockResolvedValue({ data }); // for async functions
mockFn.mockRejectedValue(new Error('fail'));`
  },
  {
    category: 'Testing', difficulty: 'Intermediate',
    question: 'How do you test React components with React Testing Library?',
    answer: 'React Testing Library (RTL) tests components the way users interact with them — by finding elements via accessible queries (role, label, text) rather than implementation details (class names, IDs). Core principle: the more your tests resemble how users use the software, the more confidence they give. Use userEvent for realistic interactions, waitFor for async updates.',
    tip: `import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('calls onLogin with email and password on submit', async () => {
    const onLogin = jest.fn();
    render(<LoginForm onLogin={onLogin} />);

    // Query by accessible role/label — like a real user would
    await userEvent.type(screen.getByLabelText(/email/i), 'alice@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'secret123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(onLogin).toHaveBeenCalledWith({
      email: 'alice@test.com',
      password: 'secret123'
    });
  });

  it('shows error when email is invalid', async () => {
    render(<LoginForm onLogin={jest.fn()} />);
    await userEvent.type(screen.getByLabelText(/email/i), 'bad-email');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
  });
});

// Query priority (most to least preferred):
// getByRole > getByLabelText > getByPlaceholderText > getByText
// ❌ Avoid: getByClassName, getByTestId (implementation detail)`
  },
  {
    category: 'Testing', difficulty: 'Intermediate',
    question: 'What is TDD (Test-Driven Development) and what is the Red-Green-Refactor cycle?',
    answer: 'TDD is a development practice where you write a failing test BEFORE writing implementation code. Cycle: Red — write a test that fails (feature does not exist yet), Green — write the minimum code to make the test pass, Refactor — clean up code while keeping tests green. Benefits: forces clear requirements upfront, produces 100% test coverage naturally, creates a safety net for refactoring.',
    tip: `// TDD example: build a stack data structure
// Step 1 — RED: write failing test first
it('push adds item and pop returns it', () => {
  const stack = new Stack();
  stack.push(10);
  expect(stack.pop()).toBe(10);  // fails — Stack doesn't exist yet
});

// Step 2 — GREEN: minimum code to pass
class Stack {
  #data = [];
  push(val) { this.#data.push(val); }
  pop()     { return this.#data.pop(); }
}

// Step 3 — REFACTOR: improve without breaking tests
// (add peek(), isEmpty(), size, etc. — each with its own TDD cycle)

// TDD benefits:
// ✅ Tests document intended behaviour
// ✅ Forces small, focused functions
// ✅ 100% coverage by construction
// ✅ Confidence to refactor anything
// ✅ Catches regressions instantly

// TDD mantra:
// "Never write a line of production code
//  without a failing test to justify it"`
  },
  {
    category: 'Testing', difficulty: 'Intermediate',
    question: 'How does E2E testing work with Playwright?',
    answer: 'Playwright automates real browsers (Chromium, Firefox, WebKit) to test full user journeys. Tests navigate pages, fill forms, click buttons, and assert on visible content — just like a real user. Playwright auto-waits for elements before interacting (no flaky sleep() calls), supports screenshots/video on failure, and can run tests in parallel across browsers.',
    tip: `// playwright.config.ts
import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: { baseURL: 'http://localhost:3000', headless: true },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  ]
});

// tests/login.spec.ts
import { test, expect } from '@playwright/test';

test('user can log in and see dashboard', async ({ page }) => {
  await page.goto('/login');

  // Fill form
  await page.getByLabel('Email').fill('alice@example.com');
  await page.getByLabel('Password').fill('secret123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert redirect and content
  await expect(page).toHaveURL('/dashboard');
  await expect(page.getByText('Welcome, Alice')).toBeVisible();
});

// Run tests
// npx playwright test
// npx playwright test --headed     -- see the browser
// npx playwright test --ui         -- interactive UI mode
// npx playwright show-report       -- HTML report`
  },

  // ── Docker ───────────────────────────────────────────────
  {
    category: 'Docker', difficulty: 'Beginner',
    question: 'What is Docker and how do containers differ from virtual machines?',
    answer: 'Docker is a platform for packaging applications and their dependencies into containers — lightweight, portable, isolated units. Containers share the host OS kernel (no full OS per container) making them start in milliseconds and use far less RAM than VMs. VMs virtualise the entire hardware stack including a full OS — heavier but stronger isolation. "Works on my machine" → never again with containers.',
    tip: `// Virtual Machine vs Container:
//
// ┌─────────────────┐    ┌─────────────────┐
// │   VM            │    │   Container      │
// ├─────────────────┤    ├─────────────────┤
// │  App            │    │  App            │
// │  Libraries      │    │  Libraries      │
// │  Guest OS       │    │  (no guest OS!) │
// ├─────────────────┤    ├─────────────────┤
// │  Hypervisor     │    │  Docker Engine  │
// ├─────────────────┤    ├─────────────────┤
// │  Host OS        │    │  Host OS        │
// │  Hardware       │    │  Hardware       │
// └─────────────────┘    └─────────────────┘
// Startup: minutes          Startup: milliseconds
// Size:    GBs              Size:    MBs
// Isolation: strong         Isolation: process-level

// Key Docker concepts:
// Image     — read-only blueprint (like a class)
// Container — running instance of an image (like an object)
// Registry  — image storage (Docker Hub, AWS ECR, GHCR)
// Dockerfile— recipe to build an image`
  },
  {
    category: 'Docker', difficulty: 'Beginner',
    question: 'How do you write a Dockerfile to containerise a Node.js app?',
    answer: 'A Dockerfile is a series of instructions that builds a Docker image layer by layer. Each instruction (FROM, COPY, RUN, etc.) creates a new cached layer. Order matters — put infrequently-changing layers first (dependencies) and frequently-changing layers last (source code) so Docker can reuse cached layers and rebuild only what changed.',
    tip: `# Dockerfile — Node.js app example
FROM node:20-alpine          # base image (alpine = tiny Linux)

WORKDIR /app                 # set working directory inside container

# Copy package files FIRST — separate layer for dependency install
# Docker caches this layer if package.json hasn't changed
COPY package*.json ./
RUN npm ci --omit=dev        # install prod dependencies only

# Copy source code LAST (changes most often)
COPY . .

# Expose port (documentation only — does not publish to host)
EXPOSE 3000

# Non-root user for security
USER node

# Start command
CMD ["node", "dist/index.js"]

# Build and run:
# docker build -t my-app:1.0 .
# docker run -p 3000:3000 my-app:1.0

# Layer caching benefit:
# Source code changes → only last COPY layer rebuilds
# npm packages unchanged → npm ci layer hits cache ✅`
  },
  {
    category: 'Docker', difficulty: 'Beginner',
    question: 'What are the essential Docker CLI commands?',
    answer: 'The Docker CLI covers the full container lifecycle: build images, run containers, inspect state, view logs, and clean up resources. docker run combines pull + create + start. Containers are ephemeral — data is lost when removed unless stored in a volume.',
    tip: `# Images
docker build -t myapp:1.0 .          # build from Dockerfile
docker pull nginx:alpine             # pull from registry
docker images                        # list local images
docker rmi myapp:1.0                 # remove image
docker push myapp:1.0                # push to registry

# Containers
docker run -d -p 8080:80 nginx       # run detached, map port
docker run -it ubuntu bash           # interactive terminal
docker run --rm myapp node test.js   # auto-remove on exit
docker run --env-file .env myapp     # load env vars from file

docker ps                            # running containers
docker ps -a                         # all containers (incl. stopped)
docker stop  <id>                    # graceful stop (SIGTERM)
docker kill  <id>                    # force stop (SIGKILL)
docker rm    <id>                    # remove container
docker logs  <id>                    # view stdout/stderr
docker logs  <id> -f                 # follow logs (tail -f style)
docker exec -it <id> sh             # shell into running container

# Cleanup
docker system prune                  # remove all unused resources
docker system prune -a               # remove everything unused`
  },
  {
    category: 'Docker', difficulty: 'Intermediate',
    question: 'How do Docker Compose and multi-container apps work?',
    answer: 'Docker Compose defines and runs multi-container apps in a single YAML file. Services, networks, and volumes are all declared together. `docker compose up` starts everything; Compose creates a shared network so services reach each other by service name (DNS). Perfect for local development — run your app, database, and cache with one command.',
    tip: `# docker-compose.yml
version: '3.9'
services:
  api:
    build: .                         # build from local Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgres://postgres:secret@db:5432/mydb
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:    { condition: service_healthy }
      cache: { condition: service_started }
    volumes:
      - .:/app                       # mount source for hot-reload
      - /app/node_modules            # exclude node_modules

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data  # persist data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      retries: 5

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:

# Commands:
# docker compose up -d       start all services in background
# docker compose logs -f api follow api logs
# docker compose down        stop and remove containers
# docker compose down -v     also remove volumes (wipes DB!)`
  },
  {
    category: 'Docker', difficulty: 'Intermediate',
    question: 'What are Docker volumes and networking?',
    answer: 'Volumes persist data outside the container filesystem — survive container restarts and removals. Three storage types: volumes (Docker-managed, best for DBs), bind mounts (map host directory into container, best for dev hot-reload), tmpfs (in-memory, temporary). Networks allow containers to communicate. Compose auto-creates a bridge network; containers reach each other by service name.',
    tip: `# Volumes — persistent data storage
docker volume create mydata
docker run -v mydata:/data nginx       # named volume
docker run -v /host/path:/app/data nginx  # bind mount
docker volume ls                       # list volumes
docker volume inspect mydata

# Volume types:
# Named volume   → Docker manages location, best for prod
# Bind mount     → maps host path, best for dev (hot reload)
# tmpfs mount    → in-memory, wiped on restart

# Networking
docker network create mynet
docker run --network mynet --name api myapp
docker run --network mynet --name db postgres
# api container can reach db at hostname "db" ✅

# Network types:
# bridge  → default, containers on same host talk by name
# host    → container shares host network (no isolation)
# none    → no networking (fully isolated)
# overlay → multi-host (Swarm / Kubernetes)

# Compose networking — automatic:
# All services in docker-compose.yml share one bridge network
# Service named "db" reachable at hostname "db" ✅
# No manual network commands needed`
  },
  {
    category: 'Docker', difficulty: 'Intermediate',
    question: 'What are Docker best practices: multi-stage builds and .dockerignore?',
    answer: 'Multi-stage builds use multiple FROM instructions in one Dockerfile — build in one stage (full toolchain), copy only the output to a minimal final stage. This produces tiny production images with no build tools, source code, or dev dependencies. .dockerignore excludes files from the build context — speeds up builds and prevents secrets from leaking into images.',
    tip: `# Multi-stage Dockerfile — Node.js TypeScript example
# Stage 1: build (has TypeScript compiler, full node_modules)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci                           # install ALL deps including devDeps
COPY . .
RUN npm run build                    # compile TypeScript → dist/

# Stage 2: production (tiny — only runtime needs)
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev                # only production deps
COPY --from=builder /app/dist ./dist # copy compiled output only
USER node
EXPOSE 3000
CMD ["node", "dist/index.js"]

# Result: image has NO TypeScript, NO src/, NO devDeps
# Size: 400 MB → 80 MB ✅

# .dockerignore — exclude from build context
node_modules/
.git/
.env
.env.*
*.log
dist/
coverage/
README.md
.dockerignore
# Prevents: secrets leaking, large build contexts, cache busting`
  },

  // ── Kubernetes ───────────────────────────────────────────
  {
    category: 'Kubernetes', difficulty: 'Intermediate',
    question: 'What is Kubernetes and what problems does it solve?',
    answer: 'Kubernetes (K8s) is an open-source container orchestration platform — it automates deploying, scaling, and managing containerised applications across a cluster of machines. It solves: automatic bin-packing (schedule containers on available nodes), self-healing (restart failed containers, replace unhealthy ones), horizontal scaling (scale up/down based on load), rolling updates (deploy new versions with zero downtime), service discovery, and load balancing.',
    tip: `// Why K8s after Docker?
// Docker runs containers on ONE machine
// K8s runs containers across MANY machines (a cluster)

// K8s cluster architecture:
//
// Control Plane (master):
//   API Server   — gateway for all commands (kubectl talks here)
//   Scheduler    — decides which Node to run a Pod on
//   etcd         — distributed key-value store (cluster state)
//   Controller   — watches cluster state, reconciles to desired state
//
// Worker Nodes:
//   kubelet      — agent on each node, runs pods
//   kube-proxy   — handles networking rules
//   Container Runtime (containerd / Docker)
//   Pods         — your running containers

// K8s self-healing example:
// You say: "I want 3 replicas of my-api"
// K8s schedules 3 Pods across nodes
// Node crashes → K8s detects, reschedules Pods on healthy nodes
// Auto-healed, no manual intervention ✅`
  },
  {
    category: 'Kubernetes', difficulty: 'Intermediate',
    question: 'What are the core Kubernetes objects: Pod, Deployment, and Service?',
    answer: 'Pod: smallest deployable unit — one or more containers sharing network/storage. Never create Pods directly. Deployment: manages a ReplicaSet to keep N identical Pod replicas running; handles rolling updates and rollbacks. Service: gives a stable DNS name and IP to a set of Pods (which come and go) so other services can reliably reach them. Services load-balance across all matching Pods.',
    tip: `# Deployment — manage N replicas of a Pod
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-api
spec:
  replicas: 3                          # keep 3 Pods running
  selector:
    matchLabels:
      app: my-api
  template:
    metadata:
      labels:
        app: my-api
    spec:
      containers:
        - name: api
          image: myregistry/my-api:1.5
          ports:
            - containerPort: 3000
          resources:
            requests: { cpu: "100m", memory: "128Mi" }
            limits:   { cpu: "500m", memory: "512Mi" }
          env:
            - name: NODE_ENV
              value: production

---
# Service — stable endpoint for the Deployment
apiVersion: v1
kind: Service
metadata:
  name: my-api-svc
spec:
  selector:
    app: my-api           # routes to all Pods with this label
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP         # internal only (use LoadBalancer for external)`
  },
  {
    category: 'Kubernetes', difficulty: 'Intermediate',
    question: 'What are the essential kubectl commands?',
    answer: 'kubectl is the CLI to interact with a Kubernetes cluster. You apply YAML manifests to declare desired state; K8s reconciles the real state to match. Key commands cover: applying config, checking status, viewing logs, exec-ing into pods, and scaling.',
    tip: `# Apply manifests (declarative — preferred)
kubectl apply -f deployment.yaml
kubectl apply -f ./k8s/              # apply whole directory

# View resources
kubectl get pods                     # list pods
kubectl get pods -w                  # watch (live updates)
kubectl get all                      # pods, services, deployments
kubectl get pods -o wide             # show node assignment
kubectl describe pod my-api-abc123   # detailed info + events

# Logs
kubectl logs my-api-abc123           # stdout of pod
kubectl logs my-api-abc123 -f        # follow logs
kubectl logs -l app=my-api           # all pods with label

# Debug
kubectl exec -it my-api-abc123 -- sh   # shell into pod
kubectl port-forward svc/my-api 3000:80 # forward to localhost

# Scale
kubectl scale deployment my-api --replicas=5

# Rolling update
kubectl set image deployment/my-api api=myregistry/my-api:1.6
kubectl rollout status deployment/my-api
kubectl rollout undo   deployment/my-api   # rollback!

# Delete
kubectl delete -f deployment.yaml
kubectl delete pod my-api-abc123`
  },
  {
    category: 'Kubernetes', difficulty: 'Intermediate',
    question: 'How do you manage configuration and secrets in Kubernetes?',
    answer: 'ConfigMap stores non-sensitive configuration (env vars, config files). Secret stores sensitive data (passwords, tokens, TLS certs) — base64-encoded at rest (use sealed-secrets or Vault for encryption at rest in production). Both can be injected as environment variables or mounted as files. Never hardcode config in container images.',
    tip: `# ConfigMap — non-sensitive config
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  NODE_ENV: production
  LOG_LEVEL: info
  API_URL: https://api.example.com

---
# Secret — sensitive data (base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  # echo -n "mysecret" | base64
  DB_PASSWORD: bXlzZWNyZXQ=
  JWT_SECRET:  c3VwZXJzZWNyZXQ=

---
# Use in Deployment — inject as env vars
spec:
  containers:
    - name: api
      image: my-api:1.0
      envFrom:
        - configMapRef:
            name: app-config        # all keys → env vars
        - secretRef:
            name: app-secrets       # all keys → env vars
      env:
        - name: DB_HOST             # individual key
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: DB_HOST`
  },
  {
    category: 'Kubernetes', difficulty: 'Intermediate',
    question: 'What is a Kubernetes Ingress and how does it manage external traffic?',
    answer: 'A Service of type LoadBalancer exposes one service with one cloud load balancer (expensive). Ingress is a single entry point that routes HTTP/HTTPS traffic to multiple services based on host name or URL path — one load balancer for all services. An Ingress Controller (nginx-ingress, Traefik, AWS ALB) watches Ingress resources and configures the actual load balancer.',
    tip: `# Ingress — route external traffic to internal services
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: main-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - api.example.com
      secretName: tls-secret       # TLS certificate stored in a Secret
  rules:
    # Route by hostname
    - host: api.example.com
      http:
        paths:
          - path: /v1/users
            pathType: Prefix
            backend:
              service:
                name: users-svc
                port: { number: 80 }
          - path: /v1/orders
            pathType: Prefix
            backend:
              service:
                name: orders-svc
                port: { number: 80 }

# Install nginx Ingress Controller:
# kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/...
# or: helm install ingress-nginx ingress-nginx/ingress-nginx`
  },
  {
    category: 'Kubernetes', difficulty: 'Advanced',
    question: 'How do Kubernetes liveness/readiness probes and HPA work?',
    answer: 'Probes: Liveness probe — K8s restarts the container if it fails (app is stuck/deadlocked). Readiness probe — K8s removes the pod from Service endpoints if it fails (app not ready to serve traffic — e.g. still warming up). HPA (Horizontal Pod Autoscaler) automatically scales the number of Pod replicas based on CPU/memory usage or custom metrics, between a configured min and max.',
    tip: `# Probes + HPA in a Deployment
spec:
  containers:
    - name: api
      image: my-api:1.0
      # Readiness — remove from Service if fails
      readinessProbe:
        httpGet:
          path: /health/ready
          port: 3000
        initialDelaySeconds: 10    # wait before first check
        periodSeconds: 5
        failureThreshold: 3        # fail 3x → mark not ready

      # Liveness — restart container if fails
      livenessProbe:
        httpGet:
          path: /health/live
          port: 3000
        initialDelaySeconds: 30
        periodSeconds: 10
        failureThreshold: 3        # fail 3x → kill + restart

---
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-api
  minReplicas: 2
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70   # scale up if CPU > 70%`
  },
];


/* ═══════════════════════════════════════════════════════════
   JAVASCRIPT — 50 cards across 10 topics
═══════════════════════════════════════════════════════════ */
const JS_CARDS = [

  // ── Overview & Learning Paths ────────────────────────────
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'JavaScript mindmap — what are the 10 core areas and how do they connect?',
    answer: 'JavaScript is organized into 10 areas: 1) Fundamentals (variables, types, functions). 2) Core JS (scope, closures, this, prototype, event loop). 3) ES6+ (modern syntax). 4) Async JS (callbacks → promises → async/await). 5) DOM & Browser APIs. 6) Data Structures (arrays, objects, Map, Set). 7) Advanced JS (execution context, memory, deep copy, debounce). 8) Performance. 9) Testing. 10) Ecosystem (npm, build tools, frameworks). Master them in order for the fastest path to production.',
    tip: `JAVASCRIPT
│
├─ 1. Fundamentals    var/let/const · types · operators · loops · functions
├─ 2. Core JS         scope · closures · hoisting · this · prototype · event loop
├─ 3. ES6+            arrow fn · template literals · destructuring · spread · classes
├─ 4. Async JS        callbacks → Promises → async/await · fetch · error handling
├─ 5. DOM & Browser   manipulation · events · bubbling · delegation · localStorage
├─ 6. Data Structures map/filter/reduce · Object · Map · Set
├─ 7. Advanced JS     execution context · memory · deep copy · debounce · FP
├─ 8. Performance     lazy loading · memoization · web workers
├─ 9. Testing         unit tests · Jest · Testing Library
└─ 10. Ecosystem      npm/yarn · Webpack/Vite · React/Vue/Angular · Node.js

LEARNING PATHS
  Frontend Dev:  Core JS → ES6+ → DOM → Async → React → Performance
  Backend Dev:   Fundamentals → ES6 → Async → Node.js → API → Database`
  },

  // ── 1. Fundamentals ──────────────────────────────────────
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are var, let, and const? How do they differ?',
    answer: '`var` is function-scoped, hoisted (initialized to undefined), and can be re-declared. `let` is block-scoped, hoisted but NOT initialized (temporal dead zone), cannot be re-declared. `const` is block-scoped like let but requires an initial value and cannot be reassigned — however the object/array it points to IS still mutable. Rule of thumb: always use `const` by default, `let` when you need to reassign, never `var` in modern code.',
    tip: `// var — function scoped, hoisted
function example() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  if (true) { var x = 20; } // same x!
  console.log(x);            // 20
}

// let — block scoped
let count = 0;
if (true) { let count = 99; } // different count
console.log(count); // 0

// const — cannot reassign, but object IS mutable
const PI = 3.14;
// PI = 3;           // TypeError
const user = { name: 'Alice' };
user.name = 'Bob';  // OK — object contents mutable`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are JavaScript data types? Primitives vs reference types?',
    answer: '7 primitive types: `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`. Primitives are stored by VALUE — copying creates an independent copy. Reference types (`Object`, `Array`, `Function`) are stored by REFERENCE — copying only copies the pointer. `typeof null === "object"` is a legacy bug. Use `Array.isArray()` to check arrays.',
    tip: `// Primitives — copied by value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — unchanged

// Reference types — copied by reference
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;
console.log(obj1.x); // 99 — same object!

// Type checking
typeof 42          // "number"
typeof "hello"     // "string"
typeof null        // "object"  ← legacy bug
typeof []          // "object"  ← use Array.isArray()
Array.isArray([])  // true`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are JavaScript operators? What is == vs ===?',
    answer: 'Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`. Comparison: `==` (loose, type coercion), `===` (strict, no coercion). Always use `===` — `"0" == false` is true but `"0" === false` is false. Logical: `&&`, `||`, `!`. Short-circuit: `&&` returns first falsy; `||` returns first truthy. Nullish coalescing `??` returns right side only when left is `null`/`undefined` — unlike `||` which also fires on `0` or `""`.',
    tip: `// == vs === (always use ===)
0    == false   // true  — coercion
0    === false  // false — different types
null == undefined  // true
null === undefined // false

// Logical short-circuit
const name  = user && user.name;    // safe access
const label = name || 'Anonymous';  // fallback
const port  = config.port ?? 3000;  // null/undefined only

// Optional chaining (ES2020)
const city = user?.address?.city;   // undefined if missing
const val  = arr?.[0];              // safe array access
const res  = fn?.();                // safe function call`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the control flow structures in JavaScript?',
    answer: '`if/else` for conditional branching. `switch` for matching one value — always `break` to avoid fall-through. Ternary `cond ? a : b` for inline expression. `for` (index), `while` (condition), `do...while` (runs at least once), `for...of` (values of iterables), `for...in` (keys of objects — avoid on arrays). `break` exits a loop; `continue` skips to the next iteration.',
    tip: `// if / else
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else grade = 'F';

// switch — don't forget break
switch (day) {
  case 'Sat': case 'Sun': console.log('Weekend'); break;
  default: console.log('Weekday');
}

// Loops
for (let i = 0; i < 5; i++) { ... }

const nums = [1, 2, 3];
for (const n of nums) console.log(n);    // values

const obj = { a: 1, b: 2 };
for (const key in obj) console.log(key); // keys

while (queue.length > 0) { process(queue.shift()); }`
  },
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'What are the three ways to declare a function? When do you use each?',
    answer: 'Function declaration: `function fn() {}` — fully hoisted, can be called before definition. Function expression: `const fn = function() {}` — not hoisted, stored in a variable. Arrow function: `const fn = () => {}` — concise syntax, no own `this` (inherits from enclosing scope), no `arguments` object. Use declarations for top-level utilities, expressions when assigning to variables, arrows for callbacks and class methods that need the outer `this`.',
    tip: `// 1. Declaration — hoisted, can call before definition
greet(); // works
function greet(name) { return 'Hello ' + name; }

// 2. Expression — not hoisted
const add = function(a, b) { return a + b; };

// 3. Arrow — concise, no own this
const double  = n => n * 2;           // single param, no parens needed
const sum     = (a, b) => a + b;      // implicit return
const getUser = id => ({ id, name: 'Alice' }); // wrap object in ()

// Arrow this — captures enclosing this
class Timer {
  start() {
    setInterval(() => this.tick(), 1000); // this = Timer instance
  }
  tick() { console.log('tick'); }
}`
  },

  // ── 2. Core JavaScript ───────────────────────────────────
  // Topics: Execution Context · Closures · Event Loop · Prototype
  //         Async Programming · Memory · Scopes · Hoisting · this

  // 2-1. Execution Context
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'What is an Execution Context? How does the Call Stack work?',
    answer: 'An **Execution Context (EC)** is the environment in which JS code runs. Three types: **Global EC** (created first — `window`/`globalThis`), **Function EC** (created on every call), **Eval EC** (rare). Each EC has two phases: **Creation** — sets up scope chain, `this`, hoists vars/functions. **Execution** — runs code line by line. The **Call Stack** (LIFO) tracks active ECs. Calling a function pushes a new EC; returning pops it. Stack overflow = recursion without base case.',
    tip: `// Call Stack demo
function multiply(a, b) { return a * b; }
function square(n)      { return multiply(n, n); }
function printSquare(n) { const result = square(n); console.log(result); }

printSquare(5);
// Stack at deepest:
// [ multiply(5,5) ]   <-- top
// [ square(5)     ]
// [ printSquare(5)]
// [ global EC     ]   <-- bottom

// Each function gets its own EC with:
//   - Variable Environment (local vars/params)
//   - Scope chain (access to outer scopes)
//   - this binding`
  },

  // 2-2. Closures
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'What is a Closure? Give a real-world use case.',
    answer: 'A **closure** is a function that retains access to its outer scope\'s variables even after that scope has finished executing. Functions capture a **reference** — not a snapshot — to outer variables. **Use cases**: private state/encapsulation, factory functions, memoization, event handlers with context. **Classic pitfall**: `var` in loops captured by reference — fix with `let` (block-scoped per iteration).',
    tip: `// Private counter via closure
function makeCounter() {
  let count = 0;       // private — not accessible outside
  return {
    inc()   { return ++count; },
    dec()   { return --count; },
    value() { return count; },
  };
}
const c = makeCounter();
c.inc(); c.inc(); // count = 2
c.value();        // 2

// Loop pitfall
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3,3,3 (shared ref)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0,1,2 (own binding)`
  },

  // 2-3. Event Loop
  {
    category: 'Core JavaScript', difficulty: 'Advanced',
    question: 'How does the Event Loop work? What is the difference between microtasks and macrotasks?',
    answer: 'JS is **single-threaded**. The Event Loop keeps it non-blocking. **Call Stack** runs sync code (LIFO). **Web APIs** handle async ops (setTimeout, fetch). **Microtask queue** (Promises, `queueMicrotask`, MutationObserver) runs **before** the next macrotask — fully drained each loop turn. **Macrotask queue** (setTimeout, setInterval, I/O, UI events) runs **one** per loop turn. Order each turn: all sync → drain microtasks → one macrotask → drain microtasks → ...',
    tip: `console.log('A');           // sync

setTimeout(() => console.log('B'), 0); // macrotask

Promise.resolve()
  .then(() => console.log('C'))        // microtask
  .then(() => console.log('D'));       // microtask (queued after C)

queueMicrotask(() => console.log('E')); // microtask

console.log('F');           // sync

// Output: A  F  C  E  D  B
// Sync (A,F) → microtasks (C,E,D) → macrotask (B)

// Tip: infinite microtask loop starves macrotasks
// Use setTimeout(fn, 0) to yield to the event loop`
  },

  // 2-4. Prototype
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'What is the Prototype chain? How does JavaScript inheritance work?',
    answer: 'Every JS object has a hidden `[[Prototype]]` link. Property lookup walks the chain until found or reaches `null`. `Object.prototype` is the root. **class/extends** is syntactic sugar over this chain — no real classes, just prototype delegation. `instanceof` checks the prototype chain. `Object.create(proto)` creates an object with a specific prototype. Own properties shadow prototype properties.',
    tip: `// Prototype chain
const animal = { speak() { return 'sound'; } };
const dog = Object.create(animal);
dog.speak();   // 'sound' — found on prototype

dog.speak = () => 'Woof'; // own property shadows prototype
dog.speak();   // 'Woof'

// class syntax (sugar over prototype)
class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + ' makes a sound'; }
}
class Dog extends Animal {
  speak() { return this.name + ' barks'; }  // override
}
const d = new Dog('Rex');
d.speak();            // 'Rex barks'
d instanceof Dog;     // true
d instanceof Animal;  // true (chain)
Object.getPrototypeOf(d) === Dog.prototype; // true`
  },

  // 2-5. Async Programming
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'What are the three stages of async programming in JS? What problem does each solve?',
    answer: '**Callbacks** (Node.js era): function passed as argument, runs when async op completes. Problem: Callback Hell — deeply nested, hard to read, error-prone. **Promises** (ES6): object with 3 states (pending → fulfilled/rejected). Chainable with `.then()/.catch()/.finally()`. Solves nesting. **async/await** (ES2017): syntactic sugar over Promises. Write async code that reads like sync. `await` pauses the function (not the thread) until the Promise resolves. Errors caught with `try/catch`.',
    tip: `// 1. Callback (old way)
fs.readFile('file.txt', (err, data) => {
  if (err) handle(err);
  process(data);         // nested → callback hell
});

// 2. Promise
fetch('/api/user')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 3. async/await (modern)
async function loadUser() {
  try {
    const res  = await fetch('/api/user');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Parallel — don't await sequentially when independent:
const [a, b] = await Promise.all([fetchA(), fetchB()]);`
  },

  // 2-6. Memory
  {
    category: 'Core JavaScript', difficulty: 'Advanced',
    question: 'How does JavaScript manage memory? What causes memory leaks?',
    answer: '**Stack**: fixed-size, fast — stores primitives and references. **Heap**: dynamic-size — stores objects/functions. **Garbage Collection** (V8 uses Mark-and-Sweep): finds all roots (global, call stack), marks reachable objects, sweeps the rest. **Generational GC**: most objects die young (Minor GC), survivors promoted to old space (Major GC). **Memory Leaks**: forgotten global variables, detached DOM nodes still referenced, closures holding large data, uncleared timers/listeners, circular references (less common with modern GC).',
    tip: `// Common memory leaks:

// 1. Forgotten global variable
function leak() { forgotVar = 'I live forever'; } // no var/let/const

// 2. Detached DOM node
let el = document.getElementById('btn');
document.body.removeChild(el);
// el still holds a reference — node not GC'd
el = null; // fix: clear the reference

// 3. Forgotten setInterval
const timer = setInterval(() => doWork(), 1000);
// Always clear when done:
clearInterval(timer);

// 4. Closure over large data
function outer() {
  const bigData = new Array(1000000).fill('x');
  return function inner() {
    console.log(bigData[0]); // bigData cannot be GC'd
  };
}

// Use WeakMap/WeakSet for cache without preventing GC:
const cache = new WeakMap(); // keys held weakly`
  },

  // 2-7. Scopes
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'What are the types of scope in JavaScript? What is lexical scoping?',
    answer: '**Global scope**: accessible everywhere. **Function scope**: `var` inside a function — not accessible outside. **Block scope**: `let`/`const` inside `{}` — scoped to that block. **Module scope**: top-level vars in ES modules are module-private, not global. **Lexical scoping**: a function looks up variables in the scope where it was **defined**, not where it is **called** — this is the foundation of closures. Scope chain: JS walks outward from the current scope until found or hits global.',
    tip: `let globalVar = 'global';

function outer() {
  let outerVar = 'outer';

  function inner() {
    let innerVar = 'inner';
    // Lexical: can access all outer scopes
    console.log(globalVar, outerVar, innerVar); // all work
  }
  inner();
  // console.log(innerVar); // ReferenceError — no upward access
}

// Block scope
{
  let blockLet   = 'only here';
  const blockConst = 'also here';
  var blockVar   = 'leaks out!'; // var ignores blocks
}
console.log(blockVar);   // 'leaks out!' — var is function-scoped
// console.log(blockLet); // ReferenceError`
  },

  // 2-8. Hoisting
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'What is Hoisting? How does it differ for var, let/const, function declarations, and classes?',
    answer: 'Hoisting moves **declarations** to the top of their scope at compile time (not the values). `var`: hoisted AND initialized to `undefined` — readable before assignment (but undefined). `function` declarations: **fully hoisted** (name + body) — callable before the line. `let`/`const`/`class`: hoisted but **NOT initialized** — accessing before declaration throws `ReferenceError` (**Temporal Dead Zone**). Function expressions/arrows: follow the rules of their variable keyword.',
    tip: `// var — hoisted + initialized to undefined
console.log(x); // undefined (no error)
var x = 5;

// Function declaration — fully hoisted
greet();                    // works!
function greet() { console.log('Hi'); }

// let — Temporal Dead Zone
console.log(y);             // ReferenceError
let y = 10;

// Function expression — var hoisted, value is NOT
console.log(fn);            // undefined
fn();                       // TypeError: fn is not a function
var fn = function() { return 42; };

// class — also TDZ
const obj = new MyClass(); // ReferenceError
class MyClass {}

// Arrow functions follow the same rules as their keyword:
console.log(arrow);         // undefined
var arrow = () => 'hi';`
  },

  // 2-9. this keyword
  {
    category: 'Core JavaScript', difficulty: 'Intermediate',
    question: 'How is `this` determined in JavaScript? What are the 5 rules?',
    answer: '`this` = the object executing the current function. Always look at the **call site**, not the definition. 5 rules (priority order): 1) **`new` binding** — `this` = newly created object. 2) **Explicit binding** — `call(ctx)` / `apply(ctx)` / `bind(ctx)`. 3) **Implicit binding** — `obj.fn()` → `this = obj`. 4) **Default binding** — standalone call → `window` (sloppy) / `undefined` (strict). 5) **Arrow functions** — no own `this`; inherit from enclosing lexical scope, cannot be overridden by call/apply/bind.',
    tip: `// Implicit — this = the object before the dot
const user = { name: 'Alice', greet() { console.log(this.name); } };
user.greet();         // 'Alice'

// Detached — loses implicit binding
const fn = user.greet;
fn();                 // undefined (strict) or window.name (sloppy)

// Explicit binding
fn.call(user);        // 'Alice'
fn.apply(user);       // 'Alice'
const bound = fn.bind(user);
bound();              // 'Alice' — permanently bound

// new binding
function Person(name) { this.name = name; }
const p = new Person('Bob');
p.name;               // 'Bob'

// Arrow — lexical this, ignores call site
class Timer {
  start() {
    setInterval(() => console.log(this), 1000); // this = Timer
    // Regular function here would be undefined/window
  }
}`
  },

  // ── 3. ES6+ Modern JavaScript ────────────────────────────
  {
    category: 'ES6+', difficulty: 'Beginner',
    question: 'What is destructuring? What is spread and rest?',
    answer: '**Destructuring** unpacks array/object values into variables with one line. **Spread** (`...`) expands an iterable into individual elements — copy, merge, pass args. **Rest** (`...`) collects remaining items into an array — function params, destructuring tail. Same syntax, opposite direction: spread expands, rest collects. Default values work in both object and array destructuring.',
    tip: `// Object destructuring + rename + default
const { name, age = 0, city: hometown } = user;

// Array destructuring + skip + rest
const [first, , third, ...tail] = [1, 2, 3, 4, 5];

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];

// Spread — copy & merge
const copy   = { ...original };
const merged = { ...defaults, ...overrides };
const arr2   = [...arr1, 4, 5];

// Rest in function params
function sum(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first);
}
sum(1, 2, 3, 4); // 10

// Nested destructuring
const { address: { city, zip } } = user;`
  },
  {
    category: 'ES6+', difficulty: 'Beginner',
    question: 'What are template literals, default parameters, and optional chaining?',
    answer: '**Template literals** (backticks) allow multi-line strings and `${expression}` interpolation. **Default parameters** provide fallbacks when an argument is `undefined`. **Optional chaining** (`?.`) safely traverses nested properties — returns `undefined` instead of throwing. **Nullish coalescing** (`??`) returns the right operand only when left is `null`/`undefined` — safer than `||` which also triggers on `0` or `""`.',
    tip: `// Template literals
const msg  = \`Hello \${user.name}! Count: \${count}\`;
const html = \`
  <div class="card">
    <h2>\${title}</h2>
  </div>
\`;

// Default parameters
function createUser(name = 'Guest', role = 'user', active = true) {
  return { name, role, active };
}
createUser();           // { name:'Guest', role:'user', active:true }
createUser('Alice');    // { name:'Alice', role:'user', active:true }

// Optional chaining
const city   = user?.address?.city;
const first  = list?.[0];
const result = obj?.compute?.();

// Nullish coalescing
const port  = config.port  ?? 3000;  // 0 is kept, not replaced
const label = input.value  ?? 'N/A'; // '' is kept`
  },
  {
    category: 'ES6+', difficulty: 'Intermediate',
    question: 'How do ES6 Classes work? What are extends, super, and private fields?',
    answer: '`class` is syntactic sugar over prototype chains. Key concepts: `constructor` initializes instance, `extends` sets up prototype chain, `super()` must be called in subclass constructor before using `this`, `static` methods belong to the class not instances, private fields (`#name`) are truly private (not accessible outside the class). Class expressions are also valid.',
    tip: `class Shape {
  #color;                       // private field (ES2022)
  constructor(color) {
    this.#color = color;
  }
  getColor()  { return this.#color; }
  toString()  { return \`Shape(\${this.#color})\`; }
  static create(c) { return new Shape(c); }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);               // must call before 'this'
    this.radius = radius;
  }
  area()   { return Math.PI * this.radius ** 2; }
  speak()  { return \`\${super.toString()} radius=\${this.radius}\`; }
}

const c = new Circle('red', 5);
c.area();        // 78.5...
c.getColor();    // 'red'
c instanceof Circle; // true
c instanceof Shape;  // true`
  },
  {
    category: 'ES6+', difficulty: 'Intermediate',
    question: 'How do ES6 Modules work? Named exports vs default export?',
    answer: 'Each file is its own module scope — nothing is global by default. **Named exports**: `export const x = 1` — import with exact name in braces. **Default export**: `export default fn` — one per file, import with any name (no braces). Use `import()` for dynamic/lazy loading. Module files are deferred and execute once regardless of how many times they are imported.',
    tip: `// math.js — named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export class Vector { ... }

// app.js — named import
import { PI, add, Vector } from './math.js';
import { add as sum } from './math.js'; // rename

// utils.js — default export
export default function formatDate(date) { ... }

// app.js — default import (any name)
import formatDate from './utils.js';

// Re-export / barrel
export { add, PI } from './math.js';

// Dynamic import — lazy load on demand
button.addEventListener('click', async () => {
  const { renderChart } = await import('./chart.js');
  renderChart(data);
});`
  },

  // ── 4. Async JavaScript ──────────────────────────────────
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'What are Promises? How do they fix callback hell?',
    answer: 'A Promise represents a future value: pending → fulfilled or rejected. Callbacks suffer "callback hell" — nested, hard to read, error-handling is duplicated. Promises flatten this with chaining: `.then()` (success), `.catch()` (error), `.finally()` (always). `Promise.all([...])` runs in parallel, fails fast if any rejects. `Promise.allSettled([...])` waits for all regardless. `Promise.race([...])` resolves/rejects with the first to settle.',
    tip: `// Callback hell
fetchUser(id, (err, user) => {
  fetchOrders(user.id, (err, orders) => {
    fetchItems(orders[0], (err, items) => { ... });
  });
});

// Promise chain — flat and readable
fetchUser(id)
  .then(user   => fetchOrders(user.id))
  .then(orders => fetchItems(orders[0]))
  .then(items  => render(items))
  .catch(err   => console.error(err))
  .finally(()  => hideSpinner());

// Parallel — all must succeed
const [user, posts] = await Promise.all([
  fetchUser(id), fetchPosts(id),
]);

// Create a promise
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
await delay(1000);`
  },
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'How does async/await work? What are the common patterns?',
    answer: '`async` makes a function always return a Promise. `await` pauses the function until the Promise resolves — the rest of the program keeps running. Error handling: use `try/catch` (same as synchronous). Performance trap: sequential `await` runs in series — use `Promise.all()` for parallel execution. `await` can only appear inside `async` functions (or top-level in ESM modules).',
    tip: `// Basic async/await
async function loadUser(id) {
  try {
    const user   = await fetchUser(id);
    const orders = await fetchOrders(user.id);
    return { user, orders };
  } catch (err) {
    console.error(err.message);
    throw err;
  } finally {
    hideSpinner();         // always runs
  }
}

// ❌ Sequential (slow — waits one by one)
const user  = await fetchUser(id);
const posts = await fetchPosts(id);

// ✓ Parallel (fast — run together)
const [user, posts] = await Promise.all([
  fetchUser(id), fetchPosts(id),
]);

// Handle individual failures in parallel
const results = await Promise.allSettled([fetchA(), fetchB()]);
results.forEach(r => {
  if (r.status === 'fulfilled') use(r.value);
  else console.error(r.reason);
});`
  },
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'How does the Fetch API work? What are the common error-handling patterns?',
    answer: '`fetch()` resolves to a Response for ANY HTTP status — it only rejects on network failure. Always check `response.ok` (true for 200–299). Read the body with `.json()`, `.text()`, or `.blob()` (these also return Promises). For non-GET requests, pass an options object with `method`, `headers`, and `body`. Use `AbortController` for timeouts and cancellation.',
    tip: `// GET
async function getUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  return res.json();
}

// POST with JSON body
async function createUser(data) {
  const res = await fetch('/api/users', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message);
  }
  return res.json();
}

// Timeout with AbortController
async function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}`
  },

  // ── 5. DOM & Browser APIs ─────────────────────────────────
  {
    category: 'DOM & Browser', difficulty: 'Beginner',
    question: 'How do you query and manipulate the DOM?',
    answer: 'Select: `querySelector(cssSelector)` returns first match; `querySelectorAll` returns NodeList. Modify text safely with `textContent`; use `innerHTML` only for trusted HTML (XSS risk). Create nodes with `createElement`, insert with `append`/`prepend`/`insertBefore`. Manage CSS classes with `classList.add/remove/toggle/contains`. Set attributes with `setAttribute`/`removeAttribute`. Traverse with `parentElement`, `children`, `nextElementSibling`.',
    tip: `// Query
const btn   = document.querySelector('#submit');
const items = document.querySelectorAll('.item'); // NodeList

// Modify content
btn.textContent = 'Loading...';        // safe — text only
div.innerHTML   = '<b>bold</b>';       // parses HTML (XSS risk!)

// Create & insert
const li = document.createElement('li');
li.textContent = 'New item';
list.append(li);            // end
list.prepend(li);           // beginning
parent.insertBefore(li, ref); // before ref

// Classes
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('open');
el.classList.contains('active'); // boolean

// Attributes
img.setAttribute('src', '/img.png');
btn.getAttribute('data-id');
input.removeAttribute('disabled');`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is event bubbling and event delegation?',
    answer: 'Events propagate in 3 phases: **Capture** (window → target), **Target**, **Bubble** (target → window). Most handlers fire in bubble phase. `stopPropagation()` prevents bubbling. `preventDefault()` stops the browser default (form submit, link navigation). **Event delegation**: attach one listener to a parent — use `event.target` + `closest()` to identify the child. Efficient for dynamic lists since you don\'t re-attach per item.',
    tip: `// Bubbling — child click fires parent handler too
parent.addEventListener('click', () => console.log('parent'));
child.addEventListener('click', e => {
  console.log('child');
  e.stopPropagation();   // prevent reaching parent
});

// preventDefault
form.addEventListener('submit', e => {
  e.preventDefault();    // stop page reload
  handleForm(new FormData(form));
});

// Event delegation — one listener for entire list
ul.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li) return;
  li.classList.toggle('done');
  console.log('id:', li.dataset.id);
});
// Works even for li's added later — no re-attachment needed`
  },
  {
    category: 'DOM & Browser', difficulty: 'Beginner',
    question: 'How do localStorage and sessionStorage work?',
    answer: '**localStorage**: persists until explicitly cleared, shared across tabs of the same origin, ~5MB limit. **sessionStorage**: cleared when the tab closes, isolated per tab. Both are synchronous key-value string stores. Use `JSON.stringify`/`JSON.parse` for objects. Not suitable for sensitive data — no encryption, accessible via JS (XSS vulnerable).',
    tip: `// localStorage — persists across sessions
localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme');
localStorage.removeItem('theme');
localStorage.clear();

// Store objects (must stringify)
localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Alice' }));
const user = JSON.parse(localStorage.getItem('user') || 'null');

// Safe helper
function getLocal(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

// sessionStorage — same API, cleared on tab close
sessionStorage.setItem('draftId', '42');
const draftId = sessionStorage.getItem('draftId');`
  },

  // ── 6. Data Structures ───────────────────────────────────
  {
    category: 'Data Structures', difficulty: 'Intermediate',
    question: 'What are the essential Array methods? (map, filter, reduce, find, sort)',
    answer: '`map(fn)` transforms each element → new same-length array. `filter(fn)` keeps matching elements. `reduce(fn, init)` accumulates to one value. `find(fn)` returns first match (or undefined). `findIndex(fn)` returns index. `some/every` test conditions. `flat(depth)` flattens nested arrays. `sort()` mutates in place — always pass comparator `(a,b) => a-b` for numbers. None mutate the original except `sort` and `splice`.',
    tip: `const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);              // [2, 4, 6, 8, 10]
nums.filter(n => n % 2 === 0);     // [2, 4]
nums.reduce((sum, n) => sum + n, 0); // 15
nums.find(n => n > 3);             // 4
nums.findIndex(n => n > 3);        // 3
nums.some(n => n > 4);             // true
nums.every(n => n > 0);            // true

// Sort gotcha — always use comparator for numbers
[3, 1, 10].sort();              // [1, 10, 3] ← wrong (lexicographic)
[3, 1, 10].sort((a, b) => a-b); // [1,  3, 10] ✓

// Chaining
const result = users
  .filter(u => u.active)
  .map(u => ({ id: u.id, name: u.name }))
  .sort((a, b) => a.name.localeCompare(b.name));`
  },
  {
    category: 'Data Structures', difficulty: 'Intermediate',
    question: 'What are Map and Set? How do they differ from plain objects and arrays?',
    answer: '**Map**: key-value, keys can be ANY type (object, function, NaN). Maintains insertion order. O(1) get/set. Use when keys are non-strings or when you frequently add/delete. **Set**: unique values only — auto-deduplicates. O(1) has/add/delete. Use for membership checks or deduplication. Both are iterable with `for...of`. Unlike plain objects, Map doesn\'t inherit prototype properties as keys.',
    tip: `// Map — any key type
const map = new Map();
map.set('str', 1);
map.set(42, 'num key');
map.set(obj, 'object key');
map.get('str');  // 1
map.has(42);     // true
map.size;        // 3
for (const [k, v] of map) { ... }

// Set — unique values
const set = new Set([1, 2, 2, 3, 3]); // Set {1, 2, 3}
set.add(4);
set.has(2);    // true
set.delete(1);

// Deduplication
const unique = [...new Set(arr)];

// Set operations
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
const union  = new Set([...a, ...b]);                        // {1,2,3,4}
const inter  = new Set([...a].filter(x => b.has(x)));       // {2,3}
const diff   = new Set([...a].filter(x => !b.has(x)));      // {1}`
  },

  // ── 7. Advanced JavaScript ───────────────────────────────
  {
    category: 'Advanced', difficulty: 'Advanced',
    question: 'What is Execution Context and the Call Stack?',
    answer: 'An **Execution Context** (EC) is the environment in which code runs: Variable Environment (bindings), `this` binding, and outer scope reference. Types: Global EC (created once), Function EC (per call). The **Call Stack** is LIFO — push on call, pop on return. Stack overflow = too many nested calls. The Global EC is always at the bottom. Each EC goes through: creation phase (allocate memory, hoist) → execution phase (run code).',
    tip: `function c() { return 'c'; }
function b() { return c(); }
function a() { return b(); }
a();

// Stack:
// → a pushed  [global, a]
// → b pushed  [global, a, b]
// → c pushed  [global, a, b, c]
// ← c popped  [global, a, b]
// ← b popped  [global, a]
// ← a popped  [global]

// Each EC created with:
// 1. Variable Object — var declarations (undefined), function declarations (hoisted)
// 2. Scope chain    — reference to outer environments
// 3. this binding   — depends on call type

// Stack overflow
function boom() { return boom(); } // RangeError: Maximum call stack size exceeded`
  },
  {
    category: 'Advanced', difficulty: 'Advanced',
    question: 'What is the difference between shallow and deep copy?',
    answer: '**Shallow copy** copies only top-level properties — nested objects remain shared references. `Object.assign`, spread `{...obj}`, `[...arr]` are all shallow. **Deep copy** recursively copies everything — no shared references. Options in priority order: 1) `structuredClone()` — modern, handles Dates/Maps/Sets/ArrayBuffers. 2) `JSON.parse(JSON.stringify())` — simple but lossy (drops functions, turns Dates to strings). 3) Custom recursive function for full control.',
    tip: `// Shallow copy problem
const obj = { name: 'Alice', addr: { city: 'Hanoi' } };
const shallow = { ...obj };
shallow.addr.city = 'HCM'; // mutates original!
console.log(obj.addr.city); // 'HCM'

// Deep copy — structuredClone (recommended, modern)
const deep = structuredClone(obj);
deep.addr.city = 'HCM';
console.log(obj.addr.city); // 'Hanoi' ✓

// JSON round-trip — simple but loses types
const deep2 = JSON.parse(JSON.stringify(obj));
// Loses: functions, undefined, Date→string, Map/Set→{}

// Recursive deep clone
function deepClone(val) {
  if (val === null || typeof val !== 'object') return val;
  if (val instanceof Date) return new Date(val);
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(
    Object.entries(val).map(([k, v]) => [k, deepClone(v)])
  );
}`
  },
  {
    category: 'Advanced', difficulty: 'Advanced',
    question: 'What are debounce and throttle? When do you use each?',
    answer: '**Debounce**: delays function execution until N ms after the LAST call — collapses a burst of calls into one. Use for: search-as-you-type, resize handler, form auto-save. **Throttle**: runs at most once per N ms regardless of call frequency. Use for: scroll handlers, mouse move, rate-limiting API calls. Memory aid: debounce = "wait for silence"; throttle = "speed limit".',
    tip: `// Debounce — fires after user stops typing
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const onSearch = debounce(q => fetchResults(q), 300);
input.addEventListener('input', e => onSearch(e.target.value));

// Throttle — fires at most once per 100ms
function throttle(fn, limit) {
  let lastRan = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRan >= limit) {
      fn(...args);
      lastRan = now;
    }
  };
}
const onScroll = throttle(() => updateNavbar(), 100);
window.addEventListener('scroll', onScroll);

// Debounce = wait for pause → search, validation
// Throttle = rate limit   → scroll, mouse move, API calls`
  },
  {
    category: 'Advanced', difficulty: 'Advanced',
    question: 'What is Functional Programming in JavaScript?',
    answer: '**FP** treats functions as first-class values and avoids shared mutable state. Core ideas: **Pure functions** — same input → same output, no side effects. **Immutability** — return new values instead of mutating. **Higher-order functions** — functions that take/return functions (map, filter, reduce). **Composition** — combine small functions to build complex behavior. Benefits: easier to test, reason about, and parallelize. JS supports FP natively alongside OOP.',
    tip: `// Pure function — no side effects
const add      = (a, b) => a + b;
const pushItem = (arr, item) => [...arr, item]; // returns new array

// Impure — side effect
let total = 0;
const addToTotal = n => { total += n; }; // mutates outer

// Higher-order functions
const double = x => x * 2;
const isEven = x => x % 2 === 0;

[1,2,3,4].filter(isEven).map(double); // [4, 8]

// Composition
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const process = pipe(
  arr => arr.filter(isEven),
  arr => arr.map(double),
  arr => arr.reduce((s, n) => s + n, 0)
);
process([1,2,3,4]); // 12`
  },

  // ── 8. Performance ───────────────────────────────────────
  {
    category: 'Performance', difficulty: 'Advanced',
    question: 'What are memoization, lazy loading, and code splitting?',
    answer: '**Memoization** caches function results by input — avoids recomputing expensive pure functions. **Lazy loading** defers loading resources until needed — reduces initial page load time. **Code splitting** breaks a large JS bundle into smaller chunks loaded on demand — critical for SPAs. Tools: dynamic `import()`, `React.lazy`, Webpack/Vite chunking. The shared goal: do less work, do it later, load less upfront.',
    tip: `// Memoization — cache by args
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
const fib = memoize(n => n < 2 ? n : fib(n-1) + fib(n-2));

// Lazy loading images
<img loading="lazy" src="photo.jpg" alt="" />

// Code splitting — dynamic import
const { render } = await import('./chart.js'); // loads on demand

// React lazy + Suspense
const Chart = React.lazy(() => import('./Chart'));
<Suspense fallback={<Spinner />}>
  <Chart data={data} />
</Suspense>`
  },
  {
    category: 'Performance', difficulty: 'Advanced',
    question: 'What are Web Workers? How do they solve the single-thread limitation?',
    answer: 'Heavy computation on the main thread blocks the UI — animations freeze, interactions lag. **Web Workers** run JS in a background thread, communicating via `postMessage`/`onmessage`. Workers have no DOM access. Use for: image processing, large data parsing, encryption, physics. **Service Workers** intercept network requests — used for offline caching (PWA) and background sync.',
    tip: `// main.js — spawn and message
const worker = new Worker('worker.js');
worker.postMessage({ data: bigArray, op: 'sort' });
worker.onmessage = e => console.log('Done:', e.data.result);
worker.onerror   = e => console.error(e.message);
worker.terminate(); // clean up

// worker.js — background thread
self.onmessage = function({ data: { data, op } }) {
  let result;
  if (op === 'sort') result = [...data].sort((a,b)=>a-b);
  self.postMessage({ result });
};

// Inline worker (no separate file)
const code = 'self.onmessage = e => postMessage(e.data * 2);';
const blob  = new Blob([code], { type: 'application/javascript' });
const w     = new Worker(URL.createObjectURL(blob));
w.postMessage(5);
w.onmessage = e => console.log(e.data); // 10`
  },

  // ── 9. Testing ───────────────────────────────────────────
  {
    category: 'Testing', difficulty: 'Intermediate',
    question: 'How do you write unit tests with Jest?',
    answer: '**Jest** is the standard JS testing framework. Structure: `describe` groups related tests, `test`/`it` defines a test, `expect(value).matcher()` makes assertions. Key matchers: `toBe` (===), `toEqual` (deep equal), `toBeTruthy/Falsy`, `toThrow`, `toHaveBeenCalled`. Mock with `jest.fn()` (spy on calls) or `jest.mock()` (replace a module). Async tests: use `async/await` or return a Promise.',
    tip: `// sum.test.js
import { sum, fetchUser } from './utils';

describe('sum()', () => {
  test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('handles negatives', () => {
    expect(sum(-1, -1)).toBe(-2);
  });
});

// Async test
test('fetchUser returns user', async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({ id: 1, name: 'Alice' });
});

// Mock module
jest.mock('./api', () => ({
  getUser: jest.fn().mockResolvedValue({ id: 1, name: 'Alice' }),
}));

// Spy on method
const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
doThing();
expect(spy).toHaveBeenCalledTimes(1);
spy.mockRestore();`
  },

  // ── 10. Ecosystem ────────────────────────────────────────
  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'What is npm? What are the key commands and package.json fields?',
    answer: '`npm` manages JS dependencies. `package.json` is the project manifest: `dependencies` (production), `devDependencies` (dev only), `scripts` (runnable commands), `version`, `main`. `package-lock.json` locks exact versions for reproducible installs — commit this to git. `node_modules` stores installed packages — never commit it. `yarn` is an alternative with the same package.json format.',
    tip: `# Install all deps from package.json
npm install

# Add production dep
npm install express axios

# Add dev-only dep
npm install -D jest eslint vite typescript

# Run a script
npm run dev
npm run build
npm test        # shorthand for npm run test

# Remove a dep
npm uninstall lodash

# package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev":   "vite",
    "build": "vite build",
    "test":  "jest --coverage"
  },
  "dependencies":    { "react": "^18.3.0" },
  "devDependencies": { "vite": "^5.0.0", "jest": "^29.0.0" }
}`
  },
  {
    category: 'Ecosystem', difficulty: 'Intermediate',
    question: 'What are Webpack, Vite, and Babel? What role does each play?',
    answer: '**Webpack**: module bundler — combines all assets (JS, CSS, images) into optimized output bundles. Highly configurable, slower dev experience. **Vite**: modern build tool using native ESM dev server (instant HMR) + Rollup for production — much faster than Webpack for dev. **Babel**: transpiler — converts ES2022+/JSX/TypeScript to older JS that browsers support. They often combine: Vite or Webpack handles bundling, Babel handles syntax transformation.',
    tip: `# Create projects with Vite
npm create vite@latest my-app -- --template react
npm create vite@latest my-app -- --template vue

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['react', 'react-dom'] }
      }
    }
  }
});

// .babelrc — transpile syntax
{
  "presets": [
    "@babel/preset-env",         // ES6+ → ES5
    "@babel/preset-react",       // JSX → React.createElement
    "@babel/preset-typescript"   // TypeScript → JS
  ]
}`
  },

  // ── JS Functions Pack ────────────────────────────────────
  // Topics: Array Methods · Object Utilities · Async Functions
  //         Function Methods · Spread/Rest · String Functions · JSON

  // F-1. Array Methods — map / filter / reduce
  {
    category: 'JS Functions', difficulty: 'Intermediate',
    question: 'Array Methods #1 — map(), filter(), reduce(): how do they work, when do you use each, and what are common pitfalls?',
    answer: '**map(fn)** — transforms every element, always returns a **new array of the same length**. Pure: original untouched. Use for: convert data shapes, format API responses, render React lists (`arr.map(item => <Card key={item.id} />)`). **filter(fn)** — keeps elements where `fn` returns truthy, returns a (shorter or equal) new array. Use for: search results, filtering products/users by criteria. **reduce(fn, initial)** — most powerful: collapses the array into **any single value** (number, object, array). Use for: sum/average, grouping by key, building lookup objects, composing pipelines. **Key rule**: all three are **immutable** — they return new arrays, never mutate the original. Never use map for side-effect-only loops (use `forEach`) and never use reduce where filter/map is clearer.',
    tip: `const nums = [1, 2, 3, 4, 5];

// map — transform each element
const doubled = nums.map(n => n * 2);   // [2,4,6,8,10]

// filter — keep matching elements
const evens = nums.filter(n => n % 2 === 0);  // [2,4]

// reduce — accumulate into any shape
const sum = nums.reduce((acc, n) => acc + n, 0);  // 15

// Chain: readable data pipelines
const result = nums
  .filter(n => n > 1)          // [2,3,4,5]
  .map(n => n * 10)             // [20,30,40,50]
  .reduce((a, b) => a + b, 0); // 140

// Real-world: group objects by property
const users = [
  {id:1, role:'admin'}, {id:2, role:'user'}, {id:3, role:'admin'}
];
const byRole = users.reduce((acc, u) => {
  acc[u.role] = acc[u.role] || [];
  acc[u.role].push(u);
  return acc;
}, {});
// { admin: [{id:1},{id:3}], user: [{id:2}] }

// Implement map using reduce (interview trick)
const mapped = nums.reduce((acc, n) => [...acc, n * 2], []);`
  },

  // F-2. Array Methods — find / some / every
  {
    category: 'JS Functions', difficulty: 'Beginner',
    question: 'Array Methods #2 — find(), some(), every(): what do they return, how do they short-circuit, and when do you use each?',
    answer: '**find(fn)** — returns the **first element** that matches, or `undefined`. Stops immediately on first match (short-circuit). Best for: looking up a specific object by id, finding a product, finding a config entry. **findIndex(fn)** — same but returns the index (-1 if not found). **some(fn)** — returns `true` if **at least one** element passes. Short-circuits on first truthy. Best for: "does any user have admin role?", permission checks, feature flag existence. **every(fn)** — returns `true` only if **ALL** elements pass. Short-circuits on first falsy. Best for: full form validation, data integrity, checking all items are selected. **Interview tip**: `some` = logical OR across array; `every` = logical AND across array.',
    tip: `const users = [
  { id: 1, name: 'Alice', role: 'admin', age: 30 },
  { id: 2, name: 'Bob',   role: 'user',  age: 17 },
  { id: 3, name: 'Carol', role: 'user',  age: 25 },
];

// find — first match or undefined
const bob = users.find(u => u.id === 2);
// { id:2, name:'Bob', role:'user', age:17 }

users.find(u => u.id === 99); // undefined

// findIndex — index of first match
const idx = users.findIndex(u => u.role === 'admin'); // 0

// some — at least one passes? (OR)
const hasAdmin    = users.some(u => u.role === 'admin'); // true
const hasMinor    = users.some(u => u.age < 18);         // true

// every — all pass? (AND)
const allAdults   = users.every(u => u.age >= 18);       // false
const allHaveName = users.every(u => Boolean(u.name));   // true

// Practical: validate required form fields
const form = { name: 'Alice', email: 'a@b.com', age: 25 };
const required = ['name', 'email', 'age'];
const isValid = required.every(field => Boolean(form[field])); // true`
  },

  // F-3. Object Utility Functions
  {
    category: 'JS Functions', difficulty: 'Beginner',
    question: 'Object.keys(), Object.values(), Object.entries() — what do they return and what real-world patterns use them?',
    answer: '**Object.keys(obj)** — array of own enumerable **property names** (strings). **Object.values(obj)** — array of own **values**. **Object.entries(obj)** — array of `[key, value]` pairs — the most versatile. All three only include **own** (non-inherited), **enumerable** properties. Since they return arrays, you can chain `.map()`, `.filter()`, `.reduce()` directly. **Object.fromEntries(entries)** reverses entries back to an object — useful for transforming objects. **Object.assign(target, src)** — shallow merge/copy. **Object.freeze(obj)** — prevents any property changes (shallow immutability).',
    tip: `const user = { name: 'Alice', age: 25, role: 'admin' };

Object.keys(user);    // ['name', 'age', 'role']
Object.values(user);  // ['Alice', 25, 'admin']
Object.entries(user); // [['name','Alice'],['age',25],['role','admin']]

// Loop an object (preferred pattern)
for (const [key, val] of Object.entries(user)) {
  console.log(key + ': ' + val);
}

// Transform all values
const prices = { apple: 1.2, banana: 0.5, cherry: 3.0 };
const withTax = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, +(v * 1.1).toFixed(2)])
);
// { apple: 1.32, banana: 0.55, cherry: 3.3 }

// Filter an object's entries
const expensive = Object.fromEntries(
  Object.entries(prices).filter(([, v]) => v > 1)
);
// { apple: 1.2, cherry: 3.0 }

// Check if value exists
Object.values(user).includes('admin'); // true

// Shallow copy / merge
const copy = Object.assign({}, user, { age: 26 });

// Freeze (shallow immutability — nested objects still mutable)
const cfg = Object.freeze({ env: 'prod', port: 3000 });
cfg.port = 9999; // silently fails (or throws in strict mode)`
  },

  // F-4. Async — setTimeout / fetch
  {
    category: 'JS Functions', difficulty: 'Beginner',
    question: 'setTimeout() and fetch() — how do they work and how do they fit into JavaScript async model?',
    answer: '**setTimeout(fn, ms)** — schedules `fn` to run after at least `ms` milliseconds (macrotask). Non-blocking: the call stack continues. Returns a timer ID for `clearTimeout()`. **setInterval(fn, ms)** — repeats every `ms` ms. **fetch(url, options)** — browser-native HTTP client, returns a **Promise** that resolves to a `Response` object. The response body is a readable stream — call `.json()`, `.text()`, or `.blob()` to parse it (also async). Always handle network errors with `.catch()` or `try/catch`. `fetch()` does **NOT** reject on HTTP error status (4xx, 5xx) — you must check `res.ok` manually.',
    tip: `// setTimeout — one-time delay
const id = setTimeout(() => console.log('later'), 1000);
clearTimeout(id); // cancel it

// setInterval — repeat
const tick = setInterval(() => console.log('tick'), 500);
clearInterval(tick); // stop it

// fetch — GET request (Promise style)
fetch('/api/users')
  .then(res => {
    if (!res.ok) throw new Error('HTTP error: ' + res.status);
    return res.json();    // parse JSON body
  })
  .then(data => console.log(data))
  .catch(err  => console.error('Network error:', err));

// fetch — async/await style (preferred)
async function getUsers() {
  try {
    const res  = await fetch('/api/users');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// fetch — POST with JSON body
await fetch('/api/users', {
  method:  'POST',
  headers: { 'Content-Type': 'application/json' },
  body:    JSON.stringify({ name: 'Alice', role: 'admin' }),
});

// fetch does NOT reject on 404/500 — always check res.ok!`
  },

  // F-5. Promise / async-await
  {
    category: 'JS Functions', difficulty: 'Intermediate',
    question: 'Promise and async/await — states, chaining, combinators, and common pitfalls.',
    answer: '**Promise** — object with 3 states: **pending** → **fulfilled** (resolve) / **rejected** (reject). Chain with `.then(onFulfilled)`, `.catch(onRejected)`, `.finally(fn)`. **async function** always returns a Promise. **await** pauses the function (not the thread) until the Promise settles. **Combinators**: `Promise.all([])` — parallel, fails fast if any reject. `Promise.allSettled([])` — parallel, never rejects, each result has status + value/reason. `Promise.race([])` — first to settle (any state) wins. `Promise.any([])` — first to **succeed** wins (ignores rejects). **Common pitfalls**: awaiting in a loop sequentially when parallel is needed; missing `await` silently returns a Promise; `forEach` does not await async callbacks.',
    tip: `// Promise basics
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// Chaining
fetch('/api/data')
  .then(res  => res.json())
  .then(data => process(data))
  .catch(err => console.error(err))
  .finally(()=> hideSpinner());

// async/await with error handling
async function load() {
  try {
    const res  = await fetch('/api/data');
    const data = await res.json();
    return data;
  } catch (err) { console.error(err); }
}

// PARALLEL — fastest pattern
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
]);

// allSettled — get all results even if some fail
const results = await Promise.allSettled([fetchA(), fetchB()]);
results.forEach(r =>
  r.status === 'fulfilled'
    ? console.log(r.value)
    : console.error(r.reason)
);

// PITFALL: forEach doesn't await
// Wrong:
arr.forEach(async item => await process(item)); // no waiting!
// Correct:
await Promise.all(arr.map(async item => await process(item)));
// Or:
for (const item of arr) { await process(item); } // sequential`
  },

  // F-6. Function Methods — call / apply / bind
  {
    category: 'JS Functions', difficulty: 'Intermediate',
    question: 'call(), apply(), bind() — differences, use cases, and why they matter for interviews.',
    answer: 'All three **explicitly set `this`** context for a function. **call(ctx, arg1, arg2, ...)** — invokes the function immediately, arguments passed individually (comma-separated). **apply(ctx, [arg1, arg2])** — invokes immediately, arguments passed as an **array**. Memory trick: **A**pply = **A**rray. **bind(ctx, arg1, ...)** — does **NOT** invoke; returns a **new function** permanently bound to `ctx`. Also supports **partial application** — pre-fill arguments. **Why it matters**: React class components use `.bind(this)` in constructors; borrowing methods from other objects; extracting methods from objects; currying/partial application patterns. Arrow functions **ignore** all three — they inherit `this` from lexical scope and cannot be rebound.',
    tip: `function greet(greeting, punct) {
  return greeting + ', ' + this.name + punct;
}
const user = { name: 'Alice' };

// call — invoke now, args as individual values
greet.call(user, 'Hello', '!');   // 'Hello, Alice!'

// apply — invoke now, args as an array
greet.apply(user, ['Hi', '.']);   // 'Hi, Alice.'

// bind — return new function, invoke later
const sayHello = greet.bind(user, 'Hey');
sayHello('?'); // 'Hey, Alice?'   — ctx + greeting pre-set

// Partial application pattern (currying-lite)
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2);  // pre-set a = 2
double(5);  // 10   double(9);  // 18

// Borrow array methods for array-like objects
function logArgs() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args); // real array from arguments object
}

// Spread is the modern alternative to apply:
Math.max.apply(null, [1,2,3]);  // 3 (old)
Math.max(...[1,2,3]);           // 3 (modern)

// Arrow — cannot be rebound (call/apply/bind ignored for this)
const arrow = () => this;
arrow.call({ x: 99 }); // still outer this`
  },

  // F-7. Spread & Rest
  {
    category: 'JS Functions', difficulty: 'Beginner',
    question: 'Spread (...) vs Rest (...) — what is the difference and where is each used?',
    answer: 'Same syntax, opposite directions. **Spread** (`...`) — **expands** an iterable (array, string, object) into individual elements. Used in: array literals to copy/merge, object literals to clone/override (React state!), function calls to unpack args. **Rest** (`...`) — **collects** remaining arguments/elements into an array. Used in: function parameters for variadic functions, destructuring to capture leftovers. **Key insight**: spread = "burst out"; rest = "gather up". **Shallow copy trap** with spread: nested objects are still shared references — modifying a nested property in the copy also changes the original.',
    tip: `// SPREAD — arrays
const arr = [1, 2, 3];
const copy   = [...arr];              // [1,2,3] — shallow copy
const added  = [...arr, 4, 5];       // [1,2,3,4,5]
const merged = [...[0], ...arr, 4];  // [0,1,2,3,4]

// Function call — unpack as args
Math.max(...arr); // 3

// SPREAD — objects (React state pattern!)
const user = { name: 'Alice', age: 25, role: 'admin' };
const updated  = { ...user, age: 26 };          // override
// { name:'Alice', age:26, role:'admin' }
const merged2  = { ...defaults, ...overrides }; // right side wins

// Shallow copy trap!
const nested = { info: { score: 100 } };
const copy2  = { ...nested };
copy2.info.score = 0;
nested.info.score; // 0 — still shared! (info is same reference)
// Fix: deep clone with JSON.parse(JSON.stringify(nested)) or structuredClone()

// REST — variadic function params
function sum(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first);
}
sum(1, 2, 3, 4); // 10

// REST — destructuring arrays
const [head, ...tail] = [1, 2, 3, 4];
head; // 1    tail; // [2,3,4]

// REST — destructuring objects
const { name, ...others } = user;
others; // { age:25, role:'admin' }`
  },

  // F-8. String Functions
  {
    category: 'JS Functions', difficulty: 'Beginner',
    question: 'Essential String methods — which ones must you know and what are the gotchas?',
    answer: '**Search**: `includes(str)` — boolean; `startsWith()/endsWith()` — position-aware; `indexOf(str)` — first index or -1; `search(regex)`. **Transform**: `replace(pat, rep)` — first match; `replaceAll(pat, rep)` — all matches; `toUpperCase()/toLowerCase()`; `slice(start, end)` — extract substring (negative indexes count from end); `padStart(n, char)/padEnd(n, char)` — pad to length. **Split/join**: `split(sep)` — string → array; `join(sep)` on arrays reverses it. **Clean**: `trim()/trimStart()/trimEnd()`. **Important**: strings are **immutable** — all methods return new strings, the original is never changed. Template literals (backticks) are often cleaner than concatenation.',
    tip: `const s = '  Hello, World!  ';

// Check content
s.includes('World');          // true
s.startsWith('  Hello');      // true
'file.tsx'.endsWith('.tsx');  // true
'abcabc'.indexOf('b');        // 1 (first occurrence)

// Clean up whitespace
s.trim();       // 'Hello, World!'
s.trimStart();  // 'Hello, World!  '
s.trimEnd();    // '  Hello, World!'

// Split — string to array
'a,b,c'.split(',');        // ['a','b','c']
'hello'.split('');         // ['h','e','l','l','o']
'one two three'.split(' ');// ['one','two','three']

// Replace (first match vs all)
'foo foo'.replace('foo', 'bar');    // 'bar foo'
'foo foo'.replaceAll('foo', 'bar'); // 'bar bar'
'  extra  spaces  '.replace(/\s+/g, ' ').trim(); // 'extra spaces'

// Extract
'Hello World'.slice(0, 5);   // 'Hello'
'Hello World'.slice(-5);     // 'World'
'Hello World'.slice(6);      // 'World'

// Padding — format numbers, ids
String(7).padStart(3, '0');  // '007'
'42'.padStart(5);            // '   42' (spaces by default)

// Case
'Alice'.toLowerCase();       // 'alice'
'alice'.toUpperCase();       // 'ALICE'

// Array back to string
['a','b','c'].join('-');     // 'a-b-c'`
  },

  // F-9. JSON.parse / JSON.stringify
  {
    category: 'JS Functions', difficulty: 'Beginner',
    question: 'JSON.stringify() and JSON.parse() — how do they work and what are the critical edge cases?',
    answer: '**JSON.stringify(value, replacer, space)** — serializes a JS value to a JSON **string**. Use for: API request bodies, `localStorage`, logging, deep clone trick. **JSON.parse(str, reviver)** — deserializes a JSON string back to a JS value. **Critical edge cases**: 1) `undefined`, functions, and Symbols are **silently dropped** from objects (and become `null` in arrays). 2) `Date` objects become ISO strings — `parse()` gives you a string back, not a Date. 3) **Circular references throw** `TypeError`. 4) Numbers `Infinity`, `-Infinity`, and `NaN` become `null`. Use `replacer` to control which fields are serialized; `reviver` to post-process parsed values. For true deep clone, use `structuredClone()` (modern) instead.',
    tip: `const user = { name: 'Alice', age: 25, active: true };

// Stringify
const json = JSON.stringify(user);
// '{"name":"Alice","age":25,"active":true}'

// Parse
const obj = JSON.parse(json);
// { name: 'Alice', age: 25, active: true }

// Pretty print — indent for readability / logging
JSON.stringify(user, null, 2);

// GOTCHA 1 — undefined / functions / Symbol silently dropped
JSON.stringify({ fn: () => {}, x: undefined, s: Symbol() });
// '{}'  — they disappear!

// GOTCHA 2 — Date becomes string, not Date on parse
const d = { ts: new Date() };
const s = JSON.stringify(d);
const back = JSON.parse(s);
back.ts instanceof Date; // false — it's a string!

// GOTCHA 3 — Infinity / NaN become null
JSON.stringify({ a: Infinity, b: NaN }); // '{"a":null,"b":null}'

// GOTCHA 4 — circular reference throws
const circ = {};
circ.self = circ;
// JSON.stringify(circ); // TypeError: circular structure

// Quick deep clone (safe only for plain JSON-serializable data)
const clone = JSON.parse(JSON.stringify(user));

// Modern alternative — structuredClone (handles Date, circular, etc.)
const clone2 = structuredClone(user);

// Replacer — filter/rename fields
JSON.stringify(user, ['name', 'age']); // only include those keys

// API usage — send JSON body
fetch('/api', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Bob' }),
});
localStorage.setItem('user', JSON.stringify(user));
const saved = JSON.parse(localStorage.getItem('user'));`
  },

  // ── JS Patterns Pack ─────────────────────────────────────
  // 6 sections · 33 cards · category: 'JS Patterns'

  // ════════════════════════════════════════════════════════
  // 1. ARRAY TRANSFORMATION PATTERNS
  // ════════════════════════════════════════════════════════

  // 1.1 Map Pattern
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '1.1 Map Pattern — transform every element of an array into a new shape.',
    answer: '**map(fn)** creates a new array by applying `fn` to every element. The original array is never mutated, the result is always the same length. **When to use**: convert raw API data to display format, extract a single field from objects, apply a formula to every value. **React**: the go-to for rendering lists — `arr.map(item => <Component key={item.id} {...item} />)`. **Rule**: use `map` when you need ALL elements transformed — use `filter` when you need to remove some, use `reduce` when the output shape is different.',
    tip: `// Basic transform
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);     // [2, 4, 6]
const squared = nums.map(n => n ** 2);    // [1, 4, 9]

// Extract a field from objects
const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob',   age: 32 },
];
const names = users.map(u => u.name);     // ['Alice', 'Bob']
const ids   = users.map(u => u.id);       // [1, 2]

// Format API data for display
const products = [
  { price: 9.9, title: 'book' },
  { price: 19.9, title: 'pen' },
];
const display = products.map(p => ({
  ...p,
  priceLabel: '$' + p.price.toFixed(2),
  title: p.title.toUpperCase(),
}));
// [{ price:9.9, title:'BOOK', priceLabel:'$9.90' }, ...]

// React list rendering
// products.map(p => <ProductCard key={p.id} product={p} />)`
  },

  // 1.2 Filter Pattern
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '1.2 Filter Pattern — keep only elements that pass a test condition.',
    answer: '**filter(fn)** returns a new array with only the elements where `fn(element)` returns truthy. Never mutates the original. Result can be shorter (or even empty). **When to use**: search results, filter products by category/price, show only active/completed items, remove nulls. **Combine with map**: filter first to reduce data, then map to transform — always filter before mapping for efficiency. **Falsy removal trick**: `arr.filter(Boolean)` removes all `null`, `undefined`, `0`, `false`, `""` values.',
    tip: `// Basic filter
const nums = [1, 2, 3, 4, 5, 6];
const evens  = nums.filter(n => n % 2 === 0);   // [2, 4, 6]
const greats = nums.filter(n => n > 3);          // [4, 5, 6]

// Filter objects by property
const users = [
  { name: 'Alice', active: true,  role: 'admin' },
  { name: 'Bob',   active: false, role: 'user'  },
  { name: 'Carol', active: true,  role: 'user'  },
];
const activeUsers = users.filter(u => u.active);
// [{ name:'Alice'... }, { name:'Carol'... }]

const admins = users.filter(u => u.role === 'admin');

// Remove falsy values (nulls, undefined, empty strings)
const mixed = [1, null, 'hello', undefined, 0, false, 'world'];
mixed.filter(Boolean); // [1, 'hello', 'world']

// Search by keyword
const searchTerm = 'al';
const results = users.filter(u =>
  u.name.toLowerCase().includes(searchTerm.toLowerCase())
);

// Chaining: filter then map
const activeNames = users
  .filter(u => u.active)
  .map(u => u.name);    // ['Alice', 'Carol']`
  },

  // 1.3 Reduce Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '1.3 Reduce Pattern — collapse an array into any single value (sum, object, grouped data).',
    answer: '**reduce(fn, initial)** is the most powerful array method — it can replace `map` and `filter`, and produce any output shape (number, string, object, array). `acc` = accumulator (carries result forward), `cur` = current element. Always provide the initial value to avoid bugs on empty arrays. **Key mental model**: think of `reduce` as folding the array left-to-right, accumulating a running result. **Use cases**: sum/average, count frequencies, group by property, flatten arrays, build lookup objects from arrays.',
    tip: `// 1. Sum and statistics
const nums = [1, 2, 3, 4, 5];
const sum  = nums.reduce((acc, n) => acc + n, 0);       // 15
const max  = nums.reduce((acc, n) => Math.max(acc, n), -Infinity); // 5

// 2. Count frequencies (frequency map)
const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const freq = fruits.reduce((acc, f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
}, {});
// { apple: 3, banana: 2, cherry: 1 }

// 3. Group by property
const orders = [
  { status: 'pending', id: 1 },
  { status: 'done',    id: 2 },
  { status: 'pending', id: 3 },
];
const grouped = orders.reduce((acc, o) => {
  acc[o.status] = acc[o.status] || [];
  acc[o.status].push(o);
  return acc;
}, {});
// { pending: [{id:1},{id:3}], done: [{id:2}] }

// 4. Build a lookup object (array -> object keyed by id)
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const byId = users.reduce((acc, u) => { acc[u.id] = u; return acc; }, {});
// { '1': { id:1, name:'Alice' }, '2': { id:2, name:'Bob' } }

// 5. Flatten nested arrays
const nested = [[1,2],[3,4],[5]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
// [1, 2, 3, 4, 5]  (modern: nested.flat())`
  },

  // 1.4 Find Pattern
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '1.4 Find Pattern — locate the first matching element (or its index) efficiently.',
    answer: '**find(fn)** returns the **first element** where `fn` returns truthy, or `undefined` if not found. **findIndex(fn)** returns the index (-1 if not found). Both **short-circuit** — they stop as soon as a match is found (no full scan needed). `find` is ideal when you need the actual object; `findIndex` is ideal when you need to update/delete by position. **vs filter**: `filter` returns ALL matches (new array); `find` returns ONE match (the object or `undefined`).',
    tip: `const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob',   role: 'user'  },
  { id: 3, name: 'Carol', role: 'user'  },
];

// find — first matching element
const alice = users.find(u => u.id === 1);
// { id: 1, name: 'Alice', role: 'admin' }

const notFound = users.find(u => u.id === 99);
// undefined — always guard against this!

if (notFound) { /* safe */ } else { console.log('not found'); }

// findIndex — position of first match
const idx = users.findIndex(u => u.name === 'Bob');  // 1
const noIdx = users.findIndex(u => u.id === 99);     // -1

// Use findIndex to update an element immutably (React pattern)
function updateUser(users, id, changes) {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return users;
  return [
    ...users.slice(0, idx),
    { ...users[idx], ...changes },
    ...users.slice(idx + 1),
  ];
}

// Use findIndex to remove an element immutably
function removeUser(users, id) {
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return users;
  return [...users.slice(0, idx), ...users.slice(idx + 1)];
}`
  },

  // 1.5 Some Pattern
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '1.5 Some Pattern — check if at least one element satisfies a condition (logical OR).',
    answer: '**some(fn)** returns `true` as soon as ANY element passes the test — it short-circuits immediately. Think of it as a logical OR across all elements. **Use cases**: permission checks ("does this user have at least one admin role?"), feature flag existence, form validation ("is any field invalid?"), checking if an array contains a certain value/condition. **vs every**: `some` = OR (one is enough); `every` = AND (all must pass). Both return a boolean and are O(n) worst-case but O(1) best-case via short-circuit.',
    tip: `const nums = [1, 3, 5, 7, 8];
const users = [
  { name: 'Alice', roles: ['admin', 'user'] },
  { name: 'Bob',   roles: ['user'] },
];

// Basic checks
nums.some(n => n % 2 === 0);       // true  (8 is even)
nums.some(n => n > 100);           // false (none > 100)
[1, 2, 3].some(n => n > 2);       // true  — stops at 3

// Permission check — does user have ANY allowed role?
const allowedRoles = ['admin', 'moderator'];
const canAccess = users[0].roles.some(r => allowedRoles.includes(r));
// true (has 'admin')

// Form validation — is ANY field missing?
const form = { name: 'Alice', email: '', age: 25 };
const hasEmptyField = Object.values(form).some(v => !v);
// true (email is empty)

// Check if array contains an object with certain property
const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
const hasProduct2 = products.some(p => p.id === 2);  // true

// Early-exit advantage: with 1000 elements, stops at first match
// vs filter which always scans all 1000
const huge = Array.from({length: 1000}, (_, i) => i);
huge.some(n => n > 5); // stops at index 6 — O(1) best case`
  },

  // 1.6 Every Pattern
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '1.6 Every Pattern — verify that ALL elements satisfy a condition (logical AND).',
    answer: '**every(fn)** returns `true` only if ALL elements pass — it short-circuits and returns `false` on the first failure. Think of it as a logical AND across all elements. **Use cases**: validate all form fields are filled, check all items are selected/checked, ensure all permissions are met, data integrity checks. **Empty array edge case**: `[].every(fn)` returns `true` (vacuous truth) — guard against this if needed. **Combine with some**: `some` for "any", `every` for "all" — together they cover most conditional collection checks.',
    tip: `const nums = [2, 4, 6, 8, 10];

// Basic checks
nums.every(n => n % 2 === 0);      // true  — all even
nums.every(n => n > 5);            // false — stops at 2

// Form validation — are ALL required fields filled?
const form = { name: 'Alice', email: 'a@b.com', age: 25 };
const required = ['name', 'email', 'age'];
const isValid = required.every(field => Boolean(form[field]));
// true

const formBad = { name: 'Alice', email: '', age: 25 };
required.every(field => Boolean(formBad[field])); // false (email empty)

// Check all checkboxes selected
const items = [
  { label: 'Item 1', checked: true  },
  { label: 'Item 2', checked: true  },
  { label: 'Item 3', checked: false },
];
const allSelected = items.every(i => i.checked);  // false
const selectAllLabel = allSelected ? 'Deselect All' : 'Select All';

// Check all API responses succeeded
const responses = [
  { ok: true, data: { id: 1 } },
  { ok: true, data: { id: 2 } },
];
const allSucceeded = responses.every(r => r.ok);  // true

// Combine some + every for complex validation
const users = [{ age: 20 }, { age: 17 }, { age: 25 }];
const anyMinor  = users.some(u => u.age < 18);   // true
const allAdults = users.every(u => u.age >= 18);  // false`
  },

  // ════════════════════════════════════════════════════════
  // 2. FUNCTIONAL PROGRAMMING PATTERNS
  // ════════════════════════════════════════════════════════

  // 2.1 Function Composition
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '2.1 Function Composition — combine functions so the output of one becomes the input of the next (right to left).',
    answer: '**Composition** `compose(f, g)(x) = f(g(x))` — applies functions **right to left**. g runs first, passes result to f. Build complex operations by chaining simple, single-purpose functions. **Benefits**: each function is small and testable, pipelines are readable, functions are reusable in any combination. The mathematical notation `(f ∘ g)(x) = f(g(x))` maps directly to code. For N functions: `compose(f, g, h)(x) = f(g(h(x)))`. **Contrast with pipe**: pipe applies left-to-right (more intuitive for most devs).',
    tip: `// Basic compose (right to left)
const compose = (f, g) => x => f(g(x));

const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

const squareThenDouble = compose(double, square);
squareThenDouble(3); // double(square(3)) = double(9) = 18

const doubleThenSquare = compose(square, double);
doubleThenSquare(3); // square(double(3)) = square(6) = 36

// Compose N functions (variadic)
const composeN = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const transform = composeN(addOne, double, square);
transform(3); // addOne(double(square(3))) = addOne(double(9)) = addOne(18) = 19

// Real-world: compose string transformers
const trim      = s => s.trim();
const lowercase = s => s.toLowerCase();
const slugify   = s => s.replace(/\s+/g, '-');

const toSlug = composeN(slugify, lowercase, trim);
toSlug('  Hello World  '); // 'hello-world'

// Compose works great for data transformation pipelines:
// parseJSON -> validate -> normalize -> format`
  },

  // 2.2 Pipe Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '2.2 Pipe Pattern — apply functions left to right (same as compose but more readable).',
    answer: '**Pipe** `pipe(f, g)(x) = g(f(x))` — applies functions **left to right** (the order you write them = the order they execute). More intuitive than compose for most developers because you read top-to-bottom, like a Unix pipe. **Real-world use**: data transformation pipelines, middleware chains, request/response processing. `pipe` is equivalent to `compose` with arguments reversed. Modern JS proposal: `|>` operator (pipeline operator) aims to make this native. Libraries: Ramda, Lodash/fp, fp-ts all provide pipe/compose.',
    tip: `// Pipe — left to right
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const double  = x => x * 2;
const square  = x => x * x;
const addOne  = x => x + 1;

const transform = pipe(double, square, addOne);
transform(3);
// double(3)=6 -> square(6)=36 -> addOne(36)=37

// Compare: compose(addOne, square, double)(3) = same result, reverse order

// Real-world: user data pipeline
const trim      = s => s.trim();
const lowercase = s => s.toLowerCase();
const slugify   = s => s.replace(/\s+/g, '-');
const validate  = s => { if (!s) throw new Error('Empty'); return s; };

const processInput = pipe(trim, validate, lowercase, slugify);
processInput('  Hello World  '); // 'hello-world'

// API request middleware pattern (pipe-like)
const withAuth    = req => ({ ...req, headers: { ...req.headers, Authorization: 'Bearer token' } });
const withJson    = req => ({ ...req, headers: { ...req.headers, 'Content-Type': 'application/json' } });
const withLogging = req => { console.log('REQ:', req.url); return req; };

const buildRequest = pipe(withAuth, withJson, withLogging);
buildRequest({ url: '/api/users', method: 'GET' });`
  },

  // 2.3 Currying
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '2.3 Currying — transform a multi-argument function into a chain of single-argument functions.',
    answer: '**Currying** converts `f(a, b, c)` into `f(a)(b)(c)` — each call receives one argument and returns a new function expecting the next. **Benefits**: partial application (pre-fill some arguments), reusability, composition compatibility. **Auto-curry**: a curry utility that handles both curried and normal calling styles. **Real uses**: event handlers with pre-bound data, customizable validators, filtering factories, logging with pre-set context. Curried functions work naturally with `compose` and `pipe` since they accept one argument.',
    tip: `// Manual currying
const add = a => b => a + b;
add(2)(3);    // 5
const add5 = add(5);     // partial: pre-fills a=5
add5(10);     // 15
add5(20);     // 25 — reusable!

// Curried multiply
const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);
[1,2,3].map(double); // [2,4,6]
[1,2,3].map(triple); // [3,6,9]

// Auto-curry utility (handles any arity)
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}
const addThree = curry((a, b, c) => a + b + c);
addThree(1)(2)(3); // 6
addThree(1, 2)(3); // 6  — flexible calling
addThree(1)(2, 3); // 6

// Curried validator factory
const isGreaterThan = min => value => value > min;
const isPositive  = isGreaterThan(0);
const isAdult     = isGreaterThan(17);
[1, -2, 3].filter(isPositive); // [1, 3]
[15, 18, 20].filter(isAdult);  // [18, 20]`
  },

  // 2.4 Partial Application
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '2.4 Partial Application — pre-fill some arguments of a function to create a specialized version.',
    answer: '**Partial Application** fixes some arguments of a function, returning a new function that takes the remaining arguments. Unlike currying (which fixes ONE argument at a time), partial application can fix multiple at once. **Methods**: `Function.prototype.bind(null, arg1, arg2)` — built-in partial application. Manual `partial` utility. **Difference from curry**: curry always produces unary (single-arg) functions; partial application can produce functions with any number of remaining args. **Use cases**: pre-configure API base URLs, create logging functions with pre-set severity, specialize utility functions.',
    tip: `// Using bind for partial application
function multiply(a, b) { return a * b; }
const double = multiply.bind(null, 2); // pre-fill a=2
const triple = multiply.bind(null, 3);

double(5);  // 10
triple(5);  // 15
[1,2,3].map(double); // [2,4,6]

// Manual partial utility
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function log(level, timestamp, message) {
  console.log('[' + level + '] ' + timestamp + ': ' + message);
}

const logError = partial(log, 'ERROR');
const logWarn  = partial(log, 'WARN');

logError(Date.now(), 'Connection failed');
logWarn(Date.now(),  'Slow response');

// API factory with pre-set base URL
function request(baseUrl, endpoint, options) {
  return fetch(baseUrl + endpoint, options);
}
const apiRequest = partial(request, 'https://api.example.com');
apiRequest('/users', { method: 'GET' });
apiRequest('/posts', { method: 'POST', body: '{}' });`
  },

  // 2.5 Higher-Order Functions
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '2.5 Higher-Order Functions — functions that take or return other functions.',
    answer: 'A **Higher-Order Function (HOF)** either: 1) **Takes a function as argument** (map, filter, reduce, setTimeout, addEventListener, sort), or 2) **Returns a function** (factory functions, decorators, middleware). HOFs are the foundation of functional programming in JS and enable: abstraction over behavior, code reuse, decorating/wrapping existing functions. **Key insight**: in JS, functions are first-class values — they can be stored in variables, passed as arguments, and returned from functions just like any other value.',
    tip: `// HOF: takes a function as argument
function repeat(fn, times) {
  for (let i = 0; i < times; i++) fn(i);
}
repeat(i => console.log('Step ' + i), 3);
// Step 0, Step 1, Step 2

// HOF: returns a function (factory / decorator)
function withLogging(fn) {
  return function(...args) {
    console.log('Calling with:', args);
    const result = fn(...args);
    console.log('Result:', result);
    return result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);
// Calling with: [2, 3]
// Result: 5

// HOF: once — call a function only once
function once(fn) {
  let called = false, result;
  return function(...args) {
    if (!called) { called = true; result = fn(...args); }
    return result;
  };
}
const init = once(() => { console.log('Initialized!'); return 42; });
init(); // 'Initialized!' -> 42
init(); // 42  (fn not called again)

// Built-in HOFs in action
[1,2,3,4].map(n => n * 2);              // HOF: takes fn
[1,2,3,4].filter(n => n % 2 === 0);    // HOF: takes fn
setTimeout(() => console.log('hi'), 0); // HOF: takes fn`
  },

  // 2.6 Pure Functions
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '2.6 Pure Functions — deterministic, side-effect-free functions and why they matter.',
    answer: 'A **pure function**: 1) Always returns the **same output** for the same input. 2) Has **no side effects** — doesn\'t modify external state, doesn\'t read mutable external data, no I/O. **Benefits**: predictable, easily testable (no mocks needed), safe to memoize, safe to run in parallel. **Side effects** (impure): modifying a variable outside the function, mutating function arguments, HTTP calls, console.log, reading `Date.now()`. **Key distinction**: pure functions TRANSFORM data; impure functions DO things. Aim for pure core logic, push side effects to the edges.',
    tip: `// PURE functions — same input always = same output
const add = (a, b) => a + b;             // pure
const double = x => x * 2;              // pure
const getFullName = u => u.first + ' ' + u.last; // pure

// IMPURE — reads mutable external state
let tax = 0.1;
const priceWithTax = price => price * (1 + tax); // impure: reads 'tax'
tax = 0.2; // now priceWithTax(100) returns different value!

// Make it pure — pass all dependencies as arguments
const calcPrice = (price, taxRate) => price * (1 + taxRate); // pure

// IMPURE — mutates argument
function addItem(cart, item) {
  cart.push(item);    // MUTATES original array!
  return cart;
}
// PURE — returns new array
function addItemPure(cart, item) {
  return [...cart, item];  // original unchanged
}

// IMPURE — side effect (external call)
function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user)); // side effect
  return user;
}

// Testing pure vs impure:
// Pure: add(2, 3) === 5 always — no setup needed
// Impure: must mock localStorage, Date, fetch, etc.

// React principle: reducers MUST be pure functions
// Redux reducer: (state, action) => newState — pure!`
  },

  // ════════════════════════════════════════════════════════
  // 3. PERFORMANCE OPTIMIZATION PATTERNS
  // ════════════════════════════════════════════════════════

  // 3.1 Debounce
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '3.1 Debounce — delay function execution until input stops for N milliseconds.',
    answer: '**Debounce** wraps a function so it only executes after the user has stopped triggering it for a specified delay. Each new call resets the timer. **Use when**: you want to react to the FINAL state after a burst of events. **Use cases**: search-as-you-type API calls, form auto-save, window resize recalculations, button rapid-click prevention. **Difference from throttle**: debounce fires AFTER the burst ends; throttle fires AT MOST once per interval during the burst. **Key parameters**: `fn` = function to debounce, `delay` = wait time in ms.',
    tip: `// Debounce implementation
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);                     // reset on every call
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Search input — only fires after user stops typing for 300ms
const searchInput = document.getElementById('search');
const search = debounce((query) => {
  fetch('/api/search?q=' + query)
    .then(r => r.json())
    .then(results => renderResults(results));
}, 300);

searchInput.addEventListener('input', e => search(e.target.value));
// User types 'j', 'ja', 'jav', 'java' fast — only ONE request sent

// Window resize (re-render only after resize stops)
const handleResize = debounce(() => {
  console.log('Window size:', window.innerWidth, window.innerHeight);
}, 200);
window.addEventListener('resize', handleResize);

// Debounce with immediate option (fire once at START, then debounce)
function debounceImmediate(fn, delay) {
  let timer = null;
  return function(...args) {
    const callNow = !timer;
    clearTimeout(timer);
    timer = setTimeout(() => { timer = null; }, delay);
    if (callNow) fn(...args);  // fire immediately first time
  };
}`
  },

  // 3.2 Throttle
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '3.2 Throttle — limit a function to fire at most once per time interval.',
    answer: '**Throttle** ensures a function executes at most once per specified interval, regardless of how many times it\'s triggered. Unlike debounce (waits for silence), throttle fires regularly during continuous input. **Use when**: you want PERIODIC updates during continuous events. **Use cases**: scroll event handlers (update navbar/progress), mouse move (drag effects), game loop updates, rate-limiting API calls. **Mental model**: debounce = "wait until things calm down"; throttle = "fire every N ms max, no matter what".',
    tip: `// Throttle implementation
function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn(...args);
    }
  };
}

// Scroll progress bar — update at most 10 times/second
const updateProgress = throttle(() => {
  const scrollTop    = window.scrollY;
  const docHeight    = document.body.scrollHeight - window.innerHeight;
  const progress     = (scrollTop / docHeight) * 100;
  document.getElementById('progress').style.width = progress + '%';
}, 100);

window.addEventListener('scroll', updateProgress);
// Without throttle: fires HUNDREDS of times per second on scroll
// With throttle(100ms): fires max 10 times per second

// Button spam prevention (throttle click)
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', throttle(async () => {
  await submitForm();
}, 2000)); // can only submit once per 2 seconds

// Comparison summary:
// Debounce: search input, auto-save, resize
//   → waits for user to STOP, then fires once
// Throttle: scroll, mousemove, game loop
//   → fires REGULARLY during continuous events`
  },

  // 3.3 Memoization
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '3.3 Memoization — cache expensive function results to avoid redundant computation.',
    answer: '**Memoization** stores the result of a function call keyed by its arguments. On subsequent calls with the same arguments, the cached result is returned instantly without recomputing. **When to use**: computationally expensive pure functions that are called repeatedly with the same arguments (fibonacci, factorial, complex calculations). **Requirements**: the function must be **pure** (same input = same output, no side effects). **In React**: `useMemo` memoizes a computed value; `useCallback` memoizes a function reference; `React.memo` memoizes a component.',
    tip: `// Basic memoize (single argument)
function memoize(fn) {
  const cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      console.log('Cache hit for:', x);
      return cache.get(x);
    }
    const result = fn(x);
    cache.set(x, result);
    return result;
  };
}

// Expensive Fibonacci without memo: O(2^n)
const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2); // recursive calls also hit cache
});
fib(40); // computes once — subsequent calls instant

// Multi-argument memoize (JSON key)
function memoizeMulti(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
const expensiveCalc = memoizeMulti((a, b) => {
  // imagine heavy computation here
  return a ** b;
});

// React memoization
// useMemo: memoize computed value
// const total = useMemo(() => items.reduce((s, i) => s + i.price, 0), [items]);

// useCallback: memoize function reference
// const handleClick = useCallback(() => onPress(id), [id]);`
  },

  // 3.4 Lazy Evaluation
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '3.4 Lazy Evaluation — defer computation until the value is actually needed.',
    answer: '**Lazy Evaluation** delays computation until the result is required, avoiding wasted work. **Techniques in JS**: 1) **Getter functions** — compute on first access. 2) **Thunks** — wrap value in a function `() => value`, call only when needed. 3) **Generators** — produce values on demand (infinite sequences). 4) **Dynamic imports** — `import()` loads modules on demand. 5) **Short-circuit evaluation** — `a && b` only evaluates `b` if `a` is truthy. **Benefits**: improved startup time, memory savings for values that might never be needed.',
    tip: `// 1. Getter — lazy property computation
const obj = {
  get expensiveData() {
    console.log('Computing...');
    return Array.from({length: 1000000}, (_, i) => i * 2);
  }
};
// Not computed until accessed:
// obj.expensiveData  <- computes now

// 2. Thunk — wrap computation in a function
const getConfig = () => JSON.parse(localStorage.getItem('config'));
// Config only read when getConfig() is called

// 3. Lazy singleton with closure
function lazyInit(factory) {
  let instance = null;
  return () => {
    if (!instance) instance = factory();
    return instance;
  };
}
const getDB = lazyInit(() => {
  console.log('Connecting to DB...');
  return { query: () => {} };
});
getDB(); // connects now
getDB(); // reuses existing connection

// 4. Generator — infinite lazy sequence
function* naturals() {
  let n = 1;
  while (true) yield n++;
}
const gen = naturals();
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3 — computed on demand, never all at once

// 5. Dynamic import — load code only when needed
async function loadModule() {
  const { heavyLib } = await import('./heavyLib.js'); // lazy!
  heavyLib.doWork();
}`
  },

  // 3.5 Virtualization
  {
    category: 'JS Patterns', difficulty: 'Advanced',
    question: '3.5 Virtualization (Virtual List) — render only visible items for massive lists.',
    answer: '**Virtualization** (windowing) renders only the DOM nodes that are currently visible in the viewport, instead of all items. A list of 10,000 items creates 10,000 DOM nodes and kills performance; virtualization keeps only ~20-30 nodes alive at any time. **Libraries**: `react-window`, `react-virtualized`, `@tanstack/virtual`. **Core concept**: maintain a window of visible items based on scroll position, recycle DOM nodes as user scrolls. **When to use**: lists with 100+ items where rendering all causes jank. Other perf patterns: code splitting, lazy images, pagination, infinite scroll.',
    tip: `// Concept: Virtual List core logic
function VirtualList({ items, itemHeight, containerHeight }) {
  const [scrollTop, setScrollTop] = React.useState(0);

  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIdx     = Math.floor(scrollTop / itemHeight);
  const endIdx       = Math.min(startIdx + visibleCount + 1, items.length);

  const visibleItems = items.slice(startIdx, endIdx);
  const topPadding   = startIdx * itemHeight;
  const totalHeight  = items.length * itemHeight;

  return (
    // <div style={{height: containerHeight, overflow: 'auto'}} onScroll={...}>
    //   <div style={{height: totalHeight, paddingTop: topPadding}}>
    //     {visibleItems.map(item => <Row key={item.id} item={item} />)}
    //   </div>
    // </div>
    null // JSX shown conceptually
  );
}

// Using react-window (production solution)
// import { FixedSizeList } from 'react-window';
//
// <FixedSizeList
//   height={600}
//   itemCount={10000}
//   itemSize={35}
//   width="100%"
// >
//   {({ index, style }) => (
//     <div style={style}>Row {index}: {items[index].name}</div>
//   )}
// </FixedSizeList>

// Performance rules of thumb:
// < 100 items:   render all — no optimization needed
// 100-500 items: consider pagination or simple windowing
// 500+ items:    always virtualize`
  },

  // ════════════════════════════════════════════════════════
  // 4. OBJECT / DATA HANDLING PATTERNS
  // ════════════════════════════════════════════════════════

  // 4.1 Destructuring
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '4.1 Destructuring — extract values from objects and arrays with clean syntax.',
    answer: '**Destructuring** unpacks values from arrays/objects into variables in a single statement. Makes code more readable, eliminates repetitive property access. **Object destructuring**: `const { a, b } = obj` — can rename, set defaults, nest. **Array destructuring**: `const [first, ...rest] = arr` — position-based, good for swapping. **Function parameter destructuring**: receive objects and destructure inline. **Common patterns**: rename during destructure `{ name: userName }`, default values `{ age = 18 }`, skip array elements `[, second]`, nested `{ address: { city } }`.',
    tip: `// Object destructuring
const user = { name: 'Alice', age: 28, role: 'admin', city: 'Hanoi' };

const { name, age }       = user;         // basic
const { name: userName }  = user;         // rename: userName = 'Alice'
const { score = 100 }     = user;         // default: score = 100 (not in obj)
const { name: n, ...rest} = user;         // rest: rest = { age, role, city }

// Nested destructuring
const data = { user: { profile: { city: 'Hanoi' } } };
const { user: { profile: { city } } } = data; // city = 'Hanoi'

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary]     = colors;  // red, green
const [first, , third]         = colors;  // skip: red, blue
const [head, ...tail]          = colors;  // head='red', tail=['green','blue']

// Swap variables (no temp needed)
let a = 1, b = 2;
[a, b] = [b, a];  // a=2, b=1

// Function parameter destructuring (common in React)
function UserCard({ name, age, role = 'user' }) {
  return name + ' (' + age + ') - ' + role;
}
UserCard({ name: 'Alice', age: 28, role: 'admin' }); // clean API

// API response destructuring
const { data: users, status, headers: { 'content-type': ct } } =
  await axios.get('/api/users');`
  },

  // 4.2 Spread Operator
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '4.2 Spread Operator — copy, merge, and override arrays and objects.',
    answer: '**Spread** (`...`) expands an iterable into individual elements. **For arrays**: copy, merge, prepend/append, unpack into function args. **For objects**: shallow copy, merge, override properties. **React state pattern**: `setState(prev => ({ ...prev, field: newValue }))` — always return a new object, never mutate. **Shallow copy warning**: spread copies top-level properties by reference — nested objects are still shared. For deep cloning, use `structuredClone()` or `JSON.parse(JSON.stringify(obj))`. **vs Object.assign**: spread is more readable and works in literals; `Object.assign` modifies the target in-place.',
    tip: `// Array spread
const arr = [1, 2, 3];
const copy   = [...arr];                  // [1,2,3] — new array
const added  = [...arr, 4, 5];           // [1,2,3,4,5]
const merged = [...arr, ...[4, 5]];      // [1,2,3,4,5]
Math.max(...arr);                        // 3 — unpack as args

// Object spread
const defaults = { theme: 'dark', lang: 'en', size: 'md' };
const userPrefs = { lang: 'vi', size: 'lg' };
const config = { ...defaults, ...userPrefs };
// { theme:'dark', lang:'vi', size:'lg' } — right side wins

// React immutable state update pattern
const state = { name: 'Alice', score: 10, level: 2 };

// Update one field — return NEW object
const newState = { ...state, score: state.score + 1 };
// { name:'Alice', score:11, level:2 }

// Add a new field
const withRole = { ...state, role: 'admin' };

// Update nested (need spread at each level!)
const nested = { user: { name: 'Alice', address: { city: 'Hanoi' } } };
const updatedCity = {
  ...nested,
  user: { ...nested.user, address: { ...nested.user.address, city: 'HCM' } },
};

// SHALLOW COPY TRAP
const orig = { info: { score: 100 } };
const copy = { ...orig };
copy.info.score = 0;   // mutates orig.info too! (shared reference)
// Fix: structuredClone(orig) for true deep copy`
  },

  // 4.3 Immutability
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '4.3 Immutability Pattern — never mutate state; always return new data.',
    answer: '**Immutability** means never changing existing data — instead, create and return a new copy with the desired changes. **Why it matters**: makes state changes predictable and traceable, enables time-travel debugging, is required for React state updates to trigger re-renders (React compares references, not values). **Techniques**: spread for update/merge, `filter` for remove, `map` for update-in-array, `Object.freeze` for enforced immutability. **Immutable libraries**: Immer (`produce` function lets you "mutate" a draft that creates a new immutable copy).',
    tip: `// MUTABLE (bad for React/Redux)
const state = { count: 0, items: ['a', 'b'] };
state.count = 1;          // direct mutation — React won't re-render!
state.items.push('c');    // array mutation

// IMMUTABLE patterns
// Update a field
const newState = { ...state, count: state.count + 1 };

// Add to array
const withNew = { ...state, items: [...state.items, 'c'] };

// Remove from array (filter)
const withRemoved = { ...state, items: state.items.filter(i => i !== 'b') };

// Update element in array (map)
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const updated = users.map(u => u.id === 1 ? { ...u, name: 'Alicia' } : u);

// Object.freeze — shallow immutability enforcement
const config = Object.freeze({ env: 'prod', port: 3000 });
// config.port = 9999; // silently fails in sloppy, throws in strict

// Immer — write "mutations", get immutable result
// import produce from 'immer';
// const nextState = produce(state, draft => {
//   draft.count += 1;        // looks like mutation
//   draft.items.push('c');   // but draft is a proxy
// });
// state is unchanged; nextState is a new object

// Redux reducer pattern (must be pure + immutable)
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'RESET':     return { ...state, count: 0 };
    default:          return state;
  }
}`
  },

  // 4.4 Object.entries / Object.values
  {
    category: 'JS Patterns', difficulty: 'Beginner',
    question: '4.4 Object.entries / Object.values — iterate and transform objects like arrays.',
    answer: '**Object.entries(obj)** → `[[key, value], ...]` pairs. **Object.values(obj)** → `[value, ...]`. **Object.keys(obj)** → `[key, ...]`. All return arrays, so you can chain `.map()`, `.filter()`, `.reduce()`. **Object.fromEntries(pairs)** reverses entries back to an object — the key for object transformation pipelines. **Common patterns**: filter object properties, transform all values, convert between object and array format. These four methods together cover almost all object iteration needs.',
    tip: `const prices = { apple: 1.2, banana: 0.5, cherry: 3.0, durian: 15.0 };

// Object.keys / values / entries
Object.keys(prices);    // ['apple','banana','cherry','durian']
Object.values(prices);  // [1.2, 0.5, 3.0, 15.0]
Object.entries(prices); // [['apple',1.2],['banana',0.5],...]

// Loop an object (clean pattern)
for (const [key, val] of Object.entries(prices)) {
  console.log(key + ': $' + val);
}

// Transform all values (map over object)
const withTax = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k, +(v * 1.1).toFixed(2)])
);
// { apple: 1.32, banana: 0.55, cherry: 3.3, durian: 16.5 }

// Filter object properties
const affordable = Object.fromEntries(
  Object.entries(prices).filter(([, v]) => v < 5)
);
// { apple: 1.2, banana: 0.5, cherry: 3.0 }

// Rename keys
const renamed = Object.fromEntries(
  Object.entries(prices).map(([k, v]) => [k.toUpperCase(), v])
);
// { APPLE: 1.2, BANANA: 0.5, ... }

// Sum all values
const total = Object.values(prices).reduce((acc, v) => acc + v, 0);

// Check if a value exists
Object.values(prices).includes(3.0);  // true
Object.entries(prices).some(([k]) => k === 'cherry'); // true`
  },

  // 4.5 Deep Clone
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '4.5 Deep Clone — create a fully independent copy with no shared references.',
    answer: '**Shallow copy** (`{...obj}`, `Object.assign`) copies top-level properties — nested objects are still shared references. **Deep clone** creates a completely independent copy at all levels. **Methods**: 1) `structuredClone(obj)` — modern, built-in (Chrome 98+, Node 17+), handles Date, Map, Set, ArrayBuffer, circular refs. 2) `JSON.parse(JSON.stringify(obj))` — works for plain JSON data, but drops `undefined`, functions, Dates become strings, no circular refs. 3) Custom recursive clone for special cases. 4) Lodash `_.cloneDeep` — battle-tested for edge cases.',
    tip: `// Shallow copy problem
const original = { name: 'Alice', address: { city: 'Hanoi' } };
const shallow  = { ...original };

shallow.name = 'Bob';          // OK — own property
shallow.address.city = 'HCM'; // MUTATES original.address too!
original.address.city;         // 'HCM' — shared reference!

// --- Method 1: structuredClone (BEST — modern) ---
const deep1 = structuredClone(original);
deep1.address.city = 'HCM';
original.address.city; // 'Hanoi' — untouched!

// structuredClone supports: Date, Map, Set, RegExp, ArrayBuffer, Blob
// Does NOT support: functions, DOM nodes

// --- Method 2: JSON (simple, limited) ---
const deep2 = JSON.parse(JSON.stringify(original));
// Limitations:
//   undefined / functions -> dropped
//   Date -> string (not Date object)
//   Map / Set -> {}
//   Circular refs -> throws

// --- Method 3: recursive custom clone ---
function deepClone(value) {
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) return value.map(deepClone);
  return Object.fromEntries(
    Object.entries(value).map(([k, v]) => [k, deepClone(v)])
  );
}

// When to use which:
// structuredClone -> default choice (modern environments)
// JSON method      -> quick hack for plain data, no special types
// _.cloneDeep      -> when supporting older envs or edge cases matter`
  },

  // ════════════════════════════════════════════════════════
  // 5. ASYNC PROGRAMMING PATTERNS
  // ════════════════════════════════════════════════════════

  // 5.1 Promise Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '5.1 Promise Pattern — create, chain, and handle Promises correctly.',
    answer: 'A **Promise** represents a value that will be available in the future (or fail). States: **pending** → **fulfilled** (resolve) or **rejected** (reject). **Chain** with `.then(onFulfilled).catch(onRejected).finally(cleanup)`. Each `.then()` returns a new Promise — enabling chaining. **Key rules**: always handle rejections (unhandled rejections crash Node.js); `.catch` at the end catches any error in the chain; `.finally` always runs (great for cleanup). **Promisify**: convert callback-based APIs to Promises with `new Promise((resolve, reject) => ...)`.',
    tip: `// Create a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Promisify a callback-based function
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Promise chain
fetch('/api/user')
  .then(res => {
    if (!res.ok) throw new Error('HTTP ' + res.status); // caught by .catch
    return res.json();
  })
  .then(user => {
    console.log('Got user:', user.name);
    return fetch('/api/posts?userId=' + user.id); // chain another request
  })
  .then(res => res.json())
  .then(posts => console.log('Posts:', posts))
  .catch(err => console.error('Error:', err))  // catches ALL above errors
  .finally(() => hideSpinner());               // always runs

// Promise.resolve / reject — create pre-settled Promises
Promise.resolve(42).then(v => console.log(v));  // 42
Promise.reject(new Error('oops')).catch(e => console.error(e));

// Wrap async in Promise for compatibility
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload  = () => resolve(script);
    script.onerror = () => reject(new Error('Script load failed: ' + src));
    document.head.appendChild(script);
  });
}`
  },

  // 5.2 Async/Await Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '5.2 Async/Await Pattern — write async code that reads like synchronous code.',
    answer: '**async** makes a function return a Promise. **await** pauses the function until the Promise resolves — but DOES NOT block the thread. `try/catch` handles rejections just like sync errors. **Common mistakes**: forgetting `await` (returns a Promise instead of the value); using `await` inside `forEach` (doesn\'t work — use `for...of` or `Promise.all`); sequential `await` when parallel is faster. **Best practice**: always `await` in a `try/catch`; use `Promise.all` for independent parallel operations.',
    tip: `// Basic async/await
async function getUser(id) {
  try {
    const res  = await fetch('/api/users/' + id);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const user = await res.json();
    return user;
  } catch (err) {
    console.error('Failed to load user:', err);
    throw err; // re-throw if caller needs to handle
  }
}

// PITFALL 1: forgetting await
async function bad() {
  const user = fetch('/api/user'); // Promise, not user data!
  console.log(user.name);          // undefined
}

// PITFALL 2: await in forEach (does NOT wait)
async function processAll(items) {
  items.forEach(async item => {
    await process(item); // forEach ignores returned Promises!
  });
  // Returns before any item is processed!
}
// Fix: use for...of for sequential, or Promise.all for parallel:
for (const item of items) { await process(item); } // sequential
await Promise.all(items.map(item => process(item))); // parallel

// PITFALL 3: unnecessary sequential awaits
// Slow — waits for each before starting next:
const a = await fetchA();
const b = await fetchB();

// Fast — both start simultaneously:
const [a, b] = await Promise.all([fetchA(), fetchB()]);

// Top-level await (ES modules only)
// const data = await fetchConfig(); // works at module top level`
  },

  // 5.3 Promise.all Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '5.3 Promise.all — run multiple async operations in parallel and wait for all.',
    answer: '**Promise.all(arr)** runs all Promises in parallel and returns a new Promise that resolves with an array of all results when ALL succeed. If ANY Promise rejects, `Promise.all` immediately rejects with that error (fail-fast). **Promise.allSettled(arr)** waits for ALL, never rejects — each result has `{status, value}` or `{status, reason}`. **Promise.race(arr)** resolves/rejects with the first to settle. **Promise.any(arr)** resolves with the first to SUCCEED (ignores rejects). Use `Promise.all` when you need all results; `allSettled` when partial failure is acceptable.',
    tip: `// Promise.all — parallel, fail-fast
async function loadDashboard(userId) {
  try {
    const [user, posts, notifications] = await Promise.all([
      fetch('/api/users/' + userId).then(r => r.json()),
      fetch('/api/posts?user=' + userId).then(r => r.json()),
      fetch('/api/notifications/' + userId).then(r => r.json()),
    ]);
    return { user, posts, notifications };
  } catch (err) {
    // If ANY request fails, catch runs
    console.error('Dashboard load failed:', err);
  }
}

// Promise.allSettled — never fails, check each result
async function loadOptional(ids) {
  const results = await Promise.allSettled(
    ids.map(id => fetch('/api/items/' + id).then(r => r.json()))
  );
  const items  = results.filter(r => r.status === 'fulfilled').map(r => r.value);
  const failed = results.filter(r => r.status === 'rejected').map(r => r.reason);
  console.log('Loaded:', items.length, 'Failed:', failed.length);
  return items; // partial results — only successful ones
}

// Promise.race — timeout pattern
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout after ' + ms + 'ms')), ms)
  );
  return Promise.race([promise, timeout]);
}
await withTimeout(fetchData(), 5000); // throws if fetch takes > 5s

// Promise.any — first success wins
const fastest = await Promise.any([
  fetch('https://mirror1.com/data'),
  fetch('https://mirror2.com/data'),
  fetch('https://mirror3.com/data'),
]); // uses whichever server responds first`
  },

  // 5.4 Sequential Async Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '5.4 Sequential Async — process items one after another in order (with correct patterns).',
    answer: '**Sequential async** processes each item after the previous completes — useful when order matters or when parallel would overwhelm a server. **The trap**: `forEach` ignores returned Promises — async callbacks inside `forEach` run but are never awaited. **Correct patterns**: `for...of` with `await` (sequential), `reduce` with Promise chaining. **When to choose sequential**: API rate limits, dependent requests (use result of call N in call N+1), database transactions, order-sensitive operations. **When to choose parallel**: independent operations where order doesn\'t matter.',
    tip: `const items = [1, 2, 3, 4, 5];
const processItem = async (item) => {
  await new Promise(r => setTimeout(r, 100)); // simulate async work
  console.log('Processed:', item);
  return item * 2;
};

// --- WRONG: forEach ignores async callbacks ---
async function wrongWay() {
  items.forEach(async item => {
    await processItem(item); // not awaited by forEach!
  });
  console.log('Done'); // prints BEFORE items are processed!
}

// --- CORRECT 1: for...of (sequential, clean) ---
async function sequential() {
  const results = [];
  for (const item of items) {
    const result = await processItem(item); // waits for each
    results.push(result);
  }
  return results; // [2, 4, 6, 8, 10] in order
}

// --- CORRECT 2: reduce with Promise chaining ---
async function sequentialReduce() {
  return items.reduce(async (prevPromise, item) => {
    const prev = await prevPromise; // wait for previous
    const result = await processItem(item);
    return [...prev, result];
  }, Promise.resolve([]));
}

// Batch processing — parallel in groups of N
async function batchProcess(items, batchSize) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processItem));
    results.push(...batchResults);
  }
  return results;
}`
  },

  // 5.5 Retry Pattern
  {
    category: 'JS Patterns', difficulty: 'Advanced',
    question: '5.5 Retry Pattern — automatically retry failed async operations with backoff.',
    answer: '**Retry** wraps an async operation and re-attempts it on failure, up to a maximum number of tries. **Exponential backoff**: wait `2^attempt * baseDelay` ms between retries — avoids hammering a struggling server. **Jitter**: add random delay to backoff to prevent thundering herd (many clients retrying at the same time). **Retryable vs non-retryable**: retry on network errors and 5xx (server errors); do NOT retry on 4xx (client errors — won\'t fix itself). Essential for resilient production systems, API integrations, and network-unreliable environments.',
    tip: `// Basic retry
async function retry(fn, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxAttempts) throw err; // give up
      console.log('Attempt ' + attempt + ' failed, retrying...');
    }
  }
}
await retry(() => fetch('/api/data'));

// Retry with exponential backoff + jitter
async function retryWithBackoff(fn, {
  maxAttempts = 3,
  baseDelay   = 300,
  maxDelay    = 10000,
} = {}) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxAttempts) throw err;

      const exponential = baseDelay * 2 ** (attempt - 1);
      const jitter      = Math.random() * baseDelay;
      const delay       = Math.min(exponential + jitter, maxDelay);

      console.log('Attempt', attempt, 'failed. Waiting', Math.round(delay), 'ms...');
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// Smart retry — only retry on retriable errors
async function smartRetry(fn, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const retriable = !err.status || err.status >= 500; // retry 5xx, not 4xx
      if (!retriable || attempt === maxAttempts) throw err;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}
await smartRetry(() => fetchWithStatus('/api/data'));`
  },

  // ════════════════════════════════════════════════════════
  // 6. CORE JAVASCRIPT INTERNALS
  // ════════════════════════════════════════════════════════

  // 6.1 Closure Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '6.1 Closure Pattern — use closures to create private state and factory functions.',
    answer: 'A **closure** forms when a function "closes over" variables from its outer scope, retaining access even after the outer function has returned. **Pattern use cases**: 1) **Private state** — encapsulate variables that shouldn\'t be accessible from outside. 2) **Factory functions** — create specialized functions with pre-configured state. 3) **Module-like objects** — expose only what\'s needed via returned methods. 4) **Event handlers** — capture loop variables or configuration. **Gotcha**: closures capture the REFERENCE to a variable, not its value at the time of creation (the `var` loop bug).',
    tip: `// 1. Private state with closure
function createCounter(initialValue = 0) {
  let count = initialValue; // private — not accessible outside

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { count = initialValue; return count; },
    value()     { return count; },
  };
}
const counter = createCounter(10);
counter.increment(); // 11
counter.increment(); // 12
counter.value();     // 12
// count is inaccessible: counter.count === undefined

// 2. Factory function with closure
function createMultiplier(factor) {
  return (number) => number * factor; // closes over 'factor'
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
[1,2,3].map(double); // [2,4,6]
[1,2,3].map(triple); // [3,6,9]

// 3. Once function — run only on first call
function once(fn) {
  let ran = false, result;
  return function(...args) {
    if (!ran) { ran = true; result = fn(...args); }
    return result;
  };
}
const initDB = once(() => { console.log('DB connected!'); return db; });
initDB(); // 'DB connected!' -> db
initDB(); // db (no log, no reconnect)

// 4. var loop bug (classic closure gotcha)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // prints 3,3,3 — shared ref!
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // prints 0,1,2 — let = new binding per iter
}`
  },

  // 6.2 Module Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '6.2 Module Pattern — encapsulate code and expose only a public API.',
    answer: 'The **Module Pattern** uses an IIFE (Immediately Invoked Function Expression) or ES Modules to create a private scope — only what you explicitly return is public. **IIFE Module**: wraps code in `(function() { ... })()` for immediate execution and scope isolation. **Revealing Module**: define everything privately, then return an object exposing only the public API. **ES Modules (modern)**: `export` only what should be public, everything else stays module-scoped. Modules are the foundation of scalable JavaScript architecture — they prevent global namespace pollution.',
    tip: `// 1. IIFE Module Pattern (classic, pre-ES6)
const CartModule = (function() {
  // Private variables — not accessible outside
  let items = [];
  let discount = 0;

  // Private function
  function calcTotal() {
    return items.reduce((sum, i) => sum + i.price, 0) * (1 - discount);
  }

  // Public API (Revealing Module)
  return {
    addItem(item)    { items.push(item); },
    removeItem(id)   { items = items.filter(i => i.id !== id); },
    setDiscount(d)   { discount = d; },
    getTotal()       { return calcTotal(); },
    getItemCount()   { return items.length; },
  };
})();

CartModule.addItem({ id: 1, name: 'Book', price: 10 });
CartModule.setDiscount(0.1);
CartModule.getTotal(); // 9

// 2. ES Module (modern — one module per file)
// cart.js
// let items = [];
// export function addItem(item) { items.push(item); }
// export function getTotal() { return items.reduce((s,i) => s+i.price, 0); }
// export default CartModule;

// main.js
// import { addItem, getTotal } from './cart.js';
// import CartModule from './cart.js';

// 3. Namespace object (simple grouping)
const MathUtils = {
  clamp: (val, min, max) => Math.min(Math.max(val, min), max),
  lerp:  (a, b, t) => a + (b - a) * t,
  range: (n) => Array.from({ length: n }, (_, i) => i),
};
MathUtils.clamp(150, 0, 100); // 100`
  },

  // 6.3 Singleton Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '6.3 Singleton Pattern — ensure only one instance of an object exists.',
    answer: '**Singleton** restricts instantiation to exactly ONE object — every call returns the same instance. **Use cases**: database connection pool, configuration store, logger, event bus, global state. **Implementation**: store the instance in a closure variable; return existing instance on subsequent calls. **In Node.js**: module caching naturally creates singletons (a required module is cached after first load). **Caution**: Singletons can make testing harder (shared state between tests) and can hide dependencies — use dependency injection when possible.',
    tip: `// 1. Singleton with closure
function createSingleton(factory) {
  let instance = null;
  return {
    getInstance() {
      if (!instance) instance = factory();
      return instance;
    }
  };
}
const DBConnection = createSingleton(() => {
  console.log('Connecting to DB...');
  return { query: (sql) => console.log('Query:', sql), connected: true };
});

const db1 = DBConnection.getInstance(); // 'Connecting to DB...'
const db2 = DBConnection.getInstance(); // (no log — reuses)
db1 === db2; // true — same object

// 2. Class-based Singleton
class AppConfig {
  constructor() {
    if (AppConfig._instance) return AppConfig._instance;
    this.theme = 'dark';
    this.lang  = 'en';
    AppConfig._instance = this;
  }
  static getInstance() {
    return AppConfig._instance || new AppConfig();
  }
}
const config1 = new AppConfig();
const config2 = new AppConfig();
config1 === config2; // true

// 3. Node.js module singleton (natural)
// db.js
// const pool = new Pool({ connectionString: process.env.DB_URL });
// module.exports = pool; // same instance everywhere it's imported

// 4. ES Module singleton
// store.js
// let state = { count: 0 };
// export const getState = () => state;
// export const setState = (next) => { state = next; };
// Importing store.js anywhere = same state object (module cached)`
  },

  // 6.4 Factory Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '6.4 Factory Pattern — create objects without exposing construction logic.',
    answer: '**Factory** is a function that creates and returns objects — hides the construction details from the caller. The caller says "give me a user" without needing to know HOW it\'s built. **Benefits**: centralize object creation logic, easy to swap implementations, add validation/defaults in one place, create different subtypes from one factory. **vs Constructor/Class**: factories don\'t need `new`, can return any object type, more flexible. **Abstract Factory**: a factory that creates other factories — for families of related objects.',
    tip: `// 1. Simple factory function
function createUser(name, role = 'user') {
  if (!name) throw new Error('Name required');
  return {
    id:        Math.random().toString(36).slice(2),
    name:      name.trim(),
    role,
    createdAt: new Date().toISOString(),
    isAdmin:   role === 'admin',
    greet()    { return 'Hi, I am ' + this.name; },
  };
}
const alice = createUser('Alice', 'admin');
const bob   = createUser('Bob');
alice.isAdmin; // true   bob.isAdmin; // false

// 2. Factory with type switching
function createShape(type, options) {
  const shapes = {
    circle:    ({ radius })        => ({ type, radius, area: () => Math.PI * radius ** 2 }),
    rectangle: ({ width, height }) => ({ type, width, height, area: () => width * height }),
    triangle:  ({ base, height })  => ({ type, base, height, area: () => 0.5 * base * height }),
  };
  const factory = shapes[type];
  if (!factory) throw new Error('Unknown shape: ' + type);
  return factory(options);
}
const c = createShape('circle', { radius: 5 });
c.area(); // 78.54

// 3. Factory for test doubles / stubs
function createMockUser(overrides = {}) {
  return {
    id: 1, name: 'Test User', role: 'user',
    email: 'test@example.com',
    ...overrides, // allow test-specific overrides
  };
}
const adminUser = createMockUser({ role: 'admin', name: 'Admin' });`
  },

  // 6.5 Prototype Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '6.5 Prototype Pattern — share methods via prototype chain to save memory.',
    answer: '**Prototype** allows objects to share methods via the prototype chain instead of each instance having its own copy — saves memory for method storage. When a property isn\'t found on the object, JS walks up the `[[Prototype]]` chain. **`class` syntax** is syntactic sugar over prototypes — `class` extends = setting up prototype chains. **Object.create(proto)** creates an object with a specific prototype. **`instanceof`** checks the prototype chain. Key principle: data goes on instances, behavior (methods) goes on prototypes.',
    tip: `// 1. Constructor function + prototype (old style)
function Person(name, age) {
  this.name = name; // instance data
  this.age  = age;
}
// Methods on prototype — shared by ALL instances (one copy in memory)
Person.prototype.greet = function() {
  return 'Hi, I am ' + this.name;
};
Person.prototype.isAdult = function() {
  return this.age >= 18;
};

const alice = new Person('Alice', 28);
const bob   = new Person('Bob', 16);
alice.greet();    // 'Hi, I am Alice'
alice.isAdult();  // true
bob.isAdult();    // false

// alice.greet === bob.greet  -> true (shared, not duplicated)

// 2. class syntax (sugar over prototypes)
class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + ' makes a sound'; }
}
class Dog extends Animal {                     // sets up prototype chain
  speak() { return this.name + ' barks'; }   // overrides
  fetch() { return this.name + ' fetches!'; }
}
const rex = new Dog('Rex');
rex.speak();  // 'Rex barks'
rex instanceof Dog;    // true
rex instanceof Animal; // true (chain)
Object.getPrototypeOf(rex) === Dog.prototype; // true

// 3. Object.create — explicit prototype link
const vehicleProto = {
  describe() { return this.make + ' ' + this.model; }
};
const car = Object.create(vehicleProto);
car.make  = 'Toyota';
car.model = 'Camry';
car.describe(); // 'Toyota Camry'`
  },

  // 6.6 Event Delegation Pattern
  {
    category: 'JS Patterns', difficulty: 'Intermediate',
    question: '6.6 Event Delegation — handle events from many children with one parent listener.',
    answer: '**Event Delegation** attaches ONE event listener to a parent element instead of one per child. Works because events **bubble up** from the target to the root. Use `event.target` to identify which child was clicked, and `event.target.closest(selector)` to handle nested child structures. **Benefits**: one listener handles thousands of items (memory efficient), automatically handles dynamically added elements (no need to re-attach listeners), cleaner code. **Use cases**: dynamic lists (todo items), table rows, navigation menus, any repeated element pattern.',
    tip: `// Without delegation — attach to each button (bad for many items)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', handleClick); // N listeners
});

// With delegation — ONE listener on the parent
document.getElementById('button-list').addEventListener('click', (e) => {
  const btn = e.target.closest('button');    // handle nested elements
  if (!btn) return;                           // click wasn't on a button

  const action = btn.dataset.action;
  const id     = btn.dataset.id;

  if (action === 'delete') deleteItem(id);
  if (action === 'edit')   editItem(id);
});

// HTML structure this handles:
// <ul id="button-list">
//   <li><button data-action="edit"   data-id="1"><span>Edit</span></button></li>
//   <li><button data-action="delete" data-id="1"><span>Delete</span></button></li>
// </ul>
// e.target might be the <span>, closest('button') finds the button

// Dynamic elements — delegation handles newly added items automatically
const list = document.getElementById('todo-list');
list.addEventListener('click', (e) => {
  const item = e.target.closest('li');
  if (!item) return;
  if (e.target.classList.contains('delete-btn')) {
    item.remove();  // dynamically added items are handled!
  }
  if (e.target.classList.contains('toggle')) {
    item.classList.toggle('done');
  }
});

// Add new item — no need to attach a new listener!
function addTodo(text) {
  const li = document.createElement('li');
  li.innerHTML = text + ' <button class="delete-btn">X</button>';
  list.appendChild(li); // automatically handled by delegation
}`
  },

  // ── Interview Pack ───────────────────────────────────────
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #1 — var vs let vs const: what are the key differences?',
    answer: 'Three key axes: **Scope** — `var` is function-scoped; `let`/`const` are block-scoped. **Hoisting** — `var` is hoisted and initialized to `undefined`; `let`/`const` are hoisted but stay in the Temporal Dead Zone (TDZ) — accessing before declaration throws ReferenceError. **Reassignment** — `const` cannot be reassigned (but objects/arrays it holds are still mutable). Interview tip: always start with `const`, downgrade to `let` only when you need to reassign, never use `var` in modern code.',
    tip: `// 1. Scope
function test() {
  if (true) {
    var x = 'var';    // function-scoped → leaks out of if
    let y = 'let';    // block-scoped → stays inside if
  }
  console.log(x); // 'var'  ← accessible
  console.log(y); // ReferenceError ← not accessible
}

// 2. Hoisting
console.log(a); // undefined (var hoisted + init)
var a = 1;
console.log(b); // ReferenceError (TDZ)
let b = 2;

// 3. Reassignment & mutation
const arr = [1, 2, 3];
arr.push(4);        // ✓ mutating the object is fine
arr = [5, 6];       // ✗ TypeError: assignment to constant

// Interview gotcha — var in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3, 3, 3 (shared)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0, 1, 2 (per-block)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #2 — Closure: what is it and why does it matter?',
    answer: 'A closure is a function that remembers variables from its outer scope even after that scope has finished executing. Every function in JS forms a closure over its enclosing scope. Why it matters: enables **private state** (module pattern), **factory functions**, **memoization**, and **callbacks with context**. Interview test: can you spot what `count` will be in a counter example, or what the loop outputs with `var` vs `let`?',
    tip: `// Classic closure — private counter
function makeCounter(start = 0) {
  let count = start;        // private, not accessible outside
  return {
    inc()   { return ++count; },
    dec()   { return --count; },
    reset() { count = start; },
    get()   { return count; },
  };
}
const c = makeCounter(10);
c.inc(); // 11
c.inc(); // 12
c.dec(); // 11

// Factory function — closure over config
function multiplier(factor) {
  return n => n * factor;   // closes over 'factor'
}
const double = multiplier(2);
const triple = multiplier(3);
double(5); // 10
triple(5); // 15

// Closure in React — stale closure trap
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(count); // stale! always 0
    }, 1000);
    return () => clearInterval(id);
  }, []); // [] means closure captures count=0
}`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #3 — Hoisting: what gets hoisted and how?',
    answer: 'Hoisting is JS\'s behaviour of moving declarations to the top of their scope during compilation. **What is hoisted**: `var` (declaration only, init = undefined), `function` declarations (fully — name + body). **Not initialized (TDZ)**: `let`, `const`, `class`. **Not hoisted at all**: function expressions, arrow functions (follow their variable\'s rules). Interview tip: only `function` declarations can be safely called before their line — everything else is a trap.',
    tip: `// function declaration — fully hoisted ✓
sayHi();                         // works
function sayHi() { return 'Hi'; }

// var — declaration hoisted, init is NOT
console.log(score); // undefined (not error)
var score = 100;

// let/const — TDZ: hoisted but inaccessible
console.log(name);  // ReferenceError
let name = 'Alice';

// function expression — var hoisted, function NOT
console.log(greet); // undefined
greet();            // TypeError: greet is not a function
var greet = function() { return 'Hello'; };

// class — also TDZ
const obj = new Foo(); // ReferenceError
class Foo {}

// Interview question: what does this print?
var x = 1;
function test() {
  console.log(x); // undefined (NOT 1) — local var x hoisted
  var x = 2;
}
test();`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #4 — this keyword: how is it determined in each context?',
    answer: '`this` is determined at call time, not definition time (except arrows). 5 rules in priority order: 1) **new binding** (`new Fn()`) → new object. 2) **Explicit** (`call/apply/bind`) → provided context. 3) **Implicit** (`obj.fn()`) → `obj`. 4) **Arrow function** → lexical `this` from enclosing scope (cannot be changed). 5) **Default** → `window` (browser) or `undefined` (strict mode). Most interview bugs come from rule 3 losing `this` when a method is extracted.',
    tip: `// Rule 3 — implicit binding (most common bug source)
const user = {
  name: 'Alice',
  greet() { return 'Hi, ' + this.name; }
};
user.greet();                    // 'Hi, Alice' ✓

const fn = user.greet;
fn();                            // 'Hi, undefined' ✗ — lost this

// Fix 1: bind
const bound = user.greet.bind(user);
bound();                         // 'Hi, Alice' ✓

// Fix 2: arrow in class
class Timer {
  count = 0;
  start() {
    setInterval(() => this.count++, 1000); // lexical this ✓
  }
}

// Interview question: what does this log?
function Person(name) {
  this.name = name;
  this.sayName = function() { console.log(this.name); };
  this.sayNameArrow = () => console.log(this.name);
}
const p = new Person('Bob');
const { sayName, sayNameArrow } = p;
sayName();       // undefined (lost this)
sayNameArrow();  // 'Bob' (arrow, lexical this = p)`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: 'Interview #5 — Event Loop: explain the execution order with an example.',
    answer: 'JS is single-threaded. The event loop keeps it non-blocking by managing 3 queues: **Call Stack** (sync, LIFO). **Microtask queue** (Promises `.then/catch`, `queueMicrotask`, `MutationObserver`) — drained fully after each task. **Macrotask queue** (setTimeout, setInterval, I/O) — one per loop turn. Execution order: run sync code → drain microtasks → run one macrotask → drain microtasks → repeat. Interview trap: `setTimeout(fn, 0)` runs AFTER all Promises in the same tick.',
    tip: `console.log('A');               // 1. sync

setTimeout(() => {
  console.log('B');              // 5. macrotask
}, 0);

Promise.resolve()
  .then(() => {
    console.log('C');            // 3. microtask
    return Promise.resolve();
  })
  .then(() => console.log('D')); // 4. microtask (queued after C)

queueMicrotask(() => console.log('E')); // microtask

console.log('F');               // 2. sync

// Output: A  F  C  E  D  B
// Sync first → ALL microtasks (C, E, D) → macrotask (B)

// Why this matters in React:
// setState batches updates (microtask-level in React 18)
// useEffect runs after paint (macrotask-level)
// Knowing this helps debug "why is my state stale?"`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #6 — Promises: states, chaining, and parallel patterns.',
    answer: 'A Promise has 3 states: **pending** → **fulfilled** (resolved) or **rejected** (immutable once settled). Chaining: each `.then()` returns a NEW Promise — you can chain transformations. Error propagation: a rejected promise skips `.then()` until a `.catch()`. Key static methods: `Promise.all` (parallel, fails fast), `Promise.allSettled` (parallel, waits for all), `Promise.race` (first to settle wins), `Promise.any` (first to fulfil wins). Interview trap: forgetting to return inside `.then()` breaks the chain.',
    tip: `// Promise states
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
  // or: reject(new Error('failed'));
});

// Chaining — MUST return to pass value forward
fetchUser(1)
  .then(user => {
    return fetchOrders(user.id); // return is crucial!
  })
  .then(orders => render(orders))
  .catch(err  => handleError(err))
  .finally(()  => hideSpinner());

// Parallel patterns
const [user, posts] = await Promise.all([   // fails if any fails
  fetchUser(1),
  fetchPosts(1),
]);

const results = await Promise.allSettled([  // never rejects
  fetchA(), fetchB(), fetchC()
]);
results.forEach(r =>
  r.status === 'fulfilled' ? use(r.value) : log(r.reason)
);

// Create resolved/rejected shorthand
const resolved = Promise.resolve(42);
const rejected  = Promise.reject(new Error('fail'));`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #7 — async/await: how does it work and what are the common mistakes?',
    answer: '`async` wraps the return value in a Promise. `await` suspends the function (not the thread) until the Promise settles. Errors: use `try/catch` — equivalent to `.catch()`. Common mistakes: 1) sequential `await` when you could be parallel (use `Promise.all`). 2) Forgetting `await` — returns a pending Promise instead of the value. 3) Using `await` in `forEach` — use `for...of` or `Promise.all(arr.map(...))` instead. 4) Unhandled rejections — always catch.',
    tip: `// ✗ Mistake 1: sequential when parallel is possible (2x slower)
const user   = await fetchUser(1);  // waits 300ms
const posts  = await fetchPosts(1); // waits 300ms → 600ms total

// ✓ Fix: parallel
const [user, posts] = await Promise.all([
  fetchUser(1), fetchPosts(1),      // both fire at once → 300ms
]);

// ✗ Mistake 2: await in forEach (doesn't wait)
items.forEach(async item => {
  await processItem(item);          // forEach ignores the promise
});

// ✓ Fix: for...of  OR  Promise.all
for (const item of items) {
  await processItem(item);          // sequential, awaited
}
await Promise.all(items.map(item => processItem(item))); // parallel

// ✗ Mistake 3: forgot await
const data = fetchData();           // Promise object, not value!

// ✓
const data = await fetchData();

// Error handling
async function load() {
  try {
    return await riskyFetch();
  } catch (err) {
    console.error(err);
    return null;                    // graceful fallback
  }
}`
  },
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'Interview #8 — Destructuring: object, array, nested, and function params.',
    answer: 'Destructuring extracts values from objects/arrays into named variables in one line. Features: **rename** (`{ a: newName }`), **default value** (`{ a = 0 }`), **nested** (drill into deep structures), **rest** (`{ a, ...rest }`). In function parameters, destructure directly in the signature for cleaner APIs. Array destructuring lets you swap variables and skip elements. Used everywhere in modern JS: React hooks (`const [state, setState] = useState()`), API responses, config objects.',
    tip: `// Object destructuring
const { name, age, city = 'Unknown', role: userRole } = user;
//                    ↑ default        ↑ rename to userRole

// Nested
const { address: { city, zip } } = user;

// Array destructuring — skip with comma
const [first, , third, ...rest] = [1, 2, 3, 4, 5];

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];    // a=2, b=1

// Function parameter destructuring
function render({ name, age = 0, active = true }) {
  return \`\${name} (\${age}) - \${active ? 'on' : 'off'}\`;
}
render({ name: 'Alice', age: 25 });

// In React
const [count, setCount] = useState(0);
const { data, error, loading } = useFetch('/api/users');

// Interview question: what does this output?
const { a: x = 10, b: y = 20 } = { a: 1 };
console.log(x, y); // 1  20`
  },
  {
    category: 'Interview', difficulty: 'Beginner',
    question: 'Interview #9 — Spread operator: copying, merging, and passing arguments.',
    answer: 'Spread (`...`) expands an iterable into individual elements. Three main uses: 1) **Copy** arrays/objects (shallow). 2) **Merge** multiple arrays/objects (later keys win in objects). 3) **Pass** array as function arguments. Remember: spread makes a **shallow copy** — nested objects still share references. In objects, later spread overwrites earlier keys — use this for defaults/overrides pattern.',
    tip: `// 1. Shallow copy
const arrCopy = [...original];
const objCopy = { ...original };

// 2. Merge arrays
const merged = [...arr1, ...arr2, 4, 5];

// 3. Merge objects — later keys WIN
const defaults  = { color: 'blue', size: 'md', visible: true };
const overrides = { color: 'red' };
const config    = { ...defaults, ...overrides };
// { color:'red', size:'md', visible:true }

// 4. Function arguments
const nums = [3, 1, 4, 1, 5];
Math.max(...nums); // 5  (instead of Math.max.apply(null, nums))

// 5. Add/remove from array (immutable update)
const addItem    = (arr, item) => [...arr, item];
const removeItem = (arr, idx)  => [...arr.slice(0, idx), ...arr.slice(idx+1)];

// Interview: shallow vs deep
const a = { x: { y: 1 } };
const b = { ...a };
b.x.y = 99;
console.log(a.x.y); // 99 ← shared reference! spread is shallow

// Interview question: what is the output?
const obj = { a: 1, b: 2 };
const copy = { ...obj, b: 99, c: 3 };
console.log(copy); // { a:1, b:99, c:3 }`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: 'Interview #10 — Array methods: map, filter, reduce — how do they work and how do you combine them?',
    answer: '**map(fn)**: transforms every element → returns new array of same length. **filter(fn)**: keeps elements where fn returns truthy → shorter or equal length array. **reduce(fn, init)**: accumulates all elements into a single value (number, string, object, array). All three are **pure** — they don\'t mutate the original. Combine by chaining. Performance note: each chained call iterates the array separately — use `reduce` for a single-pass when performance matters on large arrays.',
    tip: `const users = [
  { name: 'Alice', age: 25, active: true  },
  { name: 'Bob',   age: 17, active: false },
  { name: 'Carol', age: 30, active: true  },
];

// map — transform
users.map(u => u.name); // ['Alice', 'Bob', 'Carol']
users.map(u => ({ ...u, age: u.age + 1 })); // new array, +1 age

// filter — keep matching
users.filter(u => u.active && u.age >= 18);
// [{ name:'Alice'... }, { name:'Carol'... }]

// reduce — accumulate
users.reduce((sum, u) => sum + u.age, 0); // 72
// Group by active status:
users.reduce((groups, u) => {
  const key = u.active ? 'active' : 'inactive';
  groups[key] = [...(groups[key] || []), u];
  return groups;
}, {}); // { active: [...], inactive: [...] }

// Chain — active users' names sorted
users
  .filter(u => u.active)
  .map(u => u.name)
  .sort();       // ['Alice', 'Carol']

// Interview: implement map using reduce
const myMap = (arr, fn) =>
  arr.reduce((acc, item) => [...acc, fn(item)], []);`
  },

];


/* ═══════════════════════════════════════════════════════════
   TRICKED MEMORY
═══════════════════════════════════════════════════════════ */
const TRICKED_CARDS = [

  /* ── SQL ── */
  {
    category: 'SQL', difficulty: 'Beginner',
    question: 'SQL execution order mnemonic — what does "FJ WGH SOL" mean?',
    answer: '"FJ WGH SOL" is the SQL clause execution order: **F**ROM → **J**OIN → **W**HERE → **G**ROUP BY → **H**AVING → **S**ELECT → **O**RDER BY → **L**IMIT. The DB processes clauses in this order — NOT the order you write them. This is why you cannot reference a SELECT alias in WHERE (WHERE runs before SELECT), and why HAVING can filter on aggregates but WHERE cannot.',
    tip: `FJ  WGH  SOL   ← say it like a word

F — FROM        (pick the table / join sources)
J — JOIN        (combine tables)
W — WHERE       (filter rows — before grouping)
G — GROUP BY    (group rows → run aggregates)
H — HAVING      (filter groups — after aggregates)
S — SELECT      (choose output columns)
O — ORDER BY    (sort the result)
L — LIMIT       (cap the rows returned)

Example query — spot each letter:
SELECT   department, COUNT(*) AS headcount   ← S
FROM     employees                            ← F
JOIN     departments ON ...                   ← J
WHERE    active = TRUE                        ← W
GROUP BY department                           ← G
HAVING   COUNT(*) > 5                         ← H
ORDER BY headcount DESC                       ← O
LIMIT    10;                                  ← L`
  },
  {
    category: 'SQL', difficulty: 'Beginner',
    question: 'FJ WGH SOL — why does the execution order matter in practice?',
    answer: 'Knowing the order prevents common bugs: 1) You cannot use a SELECT alias in WHERE — WHERE runs before SELECT so the alias doesn\'t exist yet. 2) You cannot use aggregate functions in WHERE — use HAVING instead. 3) You cannot reference a window function alias in WHERE or HAVING — wrap in a subquery/CTE. 4) DISTINCT runs after SELECT but before ORDER BY. 5) LIMIT is always last — it cuts after sorting.',
    tip: `-- ❌ WRONG: alias used in WHERE (WHERE runs before SELECT)
SELECT price * 0.9 AS discounted
FROM products
WHERE discounted < 50;          -- ERROR: column "discounted" unknown

-- ✅ RIGHT: repeat the expression, or use subquery
SELECT price * 0.9 AS discounted
FROM products
WHERE price * 0.9 < 50;

-- ❌ WRONG: aggregate in WHERE
SELECT department, COUNT(*) FROM employees
WHERE COUNT(*) > 5              -- ERROR
GROUP BY department;

-- ✅ RIGHT: aggregate filter → HAVING
SELECT department, COUNT(*) FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

-- ❌ WRONG: window function alias in WHERE
SELECT name, RANK() OVER (ORDER BY score DESC) AS rnk
FROM students WHERE rnk <= 3;   -- ERROR

-- ✅ RIGHT: wrap in CTE / subquery
WITH r AS (SELECT *, RANK() OVER (ORDER BY score DESC) AS rnk FROM students)
SELECT * FROM r WHERE rnk <= 3;`
  },
  {
    category: 'SQL', difficulty: 'Intermediate',
    question: 'FJ WGH SOL — what happens at each step? Walk through a real query.',
    answer: 'Each step transforms the working dataset before passing it to the next: FROM loads raw rows → JOIN merges additional tables → WHERE removes non-matching rows → GROUP BY collapses rows into groups and computes aggregates → HAVING drops groups → SELECT projects only the requested columns → ORDER BY sorts → LIMIT truncates. Understanding each step\'s input/output helps you write and debug complex queries.',
    tip: `-- Full worked example: top 3 departments by active headcount

SELECT   department, COUNT(*) AS headcount   -- ➎ keep 2 cols
FROM     employees                            -- ➊ load all rows
JOIN     departments d ON d.id = dept_id     -- ➋ add dept name
WHERE    active = TRUE                        -- ➌ drop inactive
GROUP BY department                           -- ➍ one row/dept
HAVING   COUNT(*) > 2                         -- ➎ drop tiny depts
ORDER BY headcount DESC                       -- ➏ sort biggest first
LIMIT    3;                                   -- ➐ top 3 only

-- Step-by-step data flow:
-- ➊ FROM:     [all 500 employee rows]
-- ➋ JOIN:     [500 rows + department.name column]
-- ➌ WHERE:    [320 rows — only active=TRUE]
-- ➍ GROUP BY: [12 groups — one per department, COUNT computed]
-- ➎ HAVING:   [9 groups — dropped 3 with <= 2 people]
-- ➏ SELECT:   [9 rows, 2 columns: department + headcount]
-- ➐ ORDER BY: [9 rows sorted descending]
-- ➑ LIMIT:    [3 rows returned]`
  },
];

/* ═══════════════════════════════════════════════════════════
   PLACEHOLDER PACKS  (no cards yet)
═══════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   HTML — HyperText Markup Language
═══════════════════════════════════════════════════════════ */
const HTML_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════

  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'HTML — Full Mind Map, Learning Paths & Interview Core',
    answer: '6 sections: 1. Fundamentals · 2. Core Concepts · 3. Useful Daily Tools · 4. Advanced Features · 5. Performance & Security · 6. Ecosystem & Applications',
    tip: `HTML
│
├─ 1. Fundamentals
│   ├─ What it is       HyperText Markup Language · structure of web pages
│   ├─ Anatomy          <!DOCTYPE html> · <html> · <head> · <body>
│   ├─ Tags & Elements  block vs inline · semantic vs non-semantic
│   ├─ Attributes       id · class · href · src · alt · title · style
│   └─ Nesting Rules    valid structure · parent-child hierarchy
│
├─ 2. Core Concepts
│   ├─ Text Content     <h1>-<h6> · <p> · <span> · <br> · <hr>
│   ├─ Lists            <ul> · <ol> · <li> · <dl> · <dt> · <dd>
│   ├─ Links & Media    <a href=""> · <img src=""> · <video> · <audio>
│   ├─ Tables           <table> · <thead> · <tbody> · <tr> · <td> · <th>
│   ├─ Forms            <form> · <input> · <textarea> · <select> · <button>
│   └─ Semantic Tags    <header> · <nav> · <main> · <section> · <article> · <footer>
│
├─ 3. Useful Daily Tools
│   ├─ Meta Tags        <meta charset="UTF-8"> · viewport · description · keywords
│   ├─ Favicons         <link rel="icon" href="favicon.ico">
│   ├─ Embeds           <iframe> · <embed> · <object>
│   ├─ Accessibility    alt text · ARIA roles · tabindex
│   └─ SEO Basics       semantic tags · heading hierarchy · structured data
│
├─ 4. Advanced Features
│   ├─ HTML5 APIs       Geolocation · Drag & Drop · Web Storage · Canvas
│   ├─ Responsive       viewport meta · picture/srcset for images
│   ├─ Performance      lazy loading · defer/async scripts
│   ├─ Forms Advanced   input types (email, date, range) · validation attributes
│   └─ Multimedia       <source> · <track> · captions · autoplay
│
├─ 5. Performance & Security
│   ├─ Validation       W3C Validator · Lighthouse audits
│   ├─ Optimization     minimal DOM · semantic structure · accessibility checks
│   ├─ Security         sandboxed iframes · rel="noopener" · CSP basics
│   └─ Integrity        crossorigin · SRI (Subresource Integrity)
│
└─ 6. Ecosystem & Applications
    ├─ HTML + CSS       styling · responsive layouts · animations
    ├─ HTML + JS        DOM manipulation · event handling
    ├─ Frameworks       React · Vue · Angular (HTML templates)
    ├─ Editors          VS Code · Sublime · WebStorm
    └─ Real-world Use   websites · web apps · emails · documentation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Tags & Elements → Attributes → Text & Lists → Links & Media
Intermediate: Forms → Tables → Semantic HTML → Accessibility → SEO Basics
Advanced:     HTML5 APIs → Responsive → Performance → Security → Multimedia
Integration:  HTML + CSS → HTML + JS → Frameworks → Full-stack applications

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Semantic HTML:    improves accessibility & SEO · <article> vs <div>
Forms & Inputs:   <input type="text"> · validation · form submission
Accessibility:    alt text · ARIA roles · keyboard navigation
HTML5 Features:   <canvas> · <video> · localStorage · sessionStorage
SEO & Structure:  heading order · meta tags · semantic layout
Integration:      how HTML works with CSS & JS · DOM structure`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. FUNDAMENTALS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'HTML Fundamentals — anatomy of an HTML document, tags vs elements, block vs inline, and nesting rules?',
    answer: '**HTML (HyperText Markup Language)** defines the structure and meaning of web content. **Document anatomy**: `<!DOCTYPE html>` (tells browser it\'s HTML5) → `<html>` (root) → `<head>` (metadata: title, charset, links) → `<body>` (visible content). **Tags vs Elements**: a tag is `<p>`; an element is the full thing `<p>content</p>`. **Block elements** take full width, start on a new line: `<div>`, `<p>`, `<h1>`, `<section>`. **Inline elements** flow within text: `<span>`, `<a>`, `<strong>`, `<img>`. **Attributes** add extra info: `id` (unique), `class` (grouping), `href`, `src`, `alt`, `style`. **Nesting rules**: always close tags in reverse order; block elements cannot be inside inline elements.',
    tip: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Block elements -->
  <h1>Main Heading</h1>
  <p>A paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
  <div class="container">
    <span id="highlight">Inline span</span> inside a block div.
  </div>

  <!-- Attributes -->
  <a href="https://example.com" target="_blank" rel="noopener">Link</a>
  <img src="photo.jpg" alt="Description of image" width="400">

  <!-- ✅ Correct nesting -->
  <p><strong>Bold inside paragraph</strong></p>

  <!-- ❌ Wrong: block inside inline -->
  <!-- <span><div>bad</div></span> -->

  <script src="app.js" defer></script>
</body>
</html>`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. CORE CONCEPTS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Core Concepts', difficulty: 'Beginner',
    question: 'HTML Core Concepts — text, lists, links & media, tables, forms, and semantic tags?',
    answer: '**Text**: `<h1>`–`<h6>` headings (h1 = most important, one per page for SEO), `<p>` paragraph, `<span>` inline container, `<br>` line break, `<hr>` horizontal rule. **Lists**: `<ul>` unordered, `<ol>` ordered, `<li>` item; `<dl>/<dt>/<dd>` definition list. **Links & Media**: `<a href="">` link (`target="_blank" rel="noopener"` for external), `<img src="" alt="">` (alt required for accessibility), `<video controls>`, `<audio controls>`. **Tables**: `<table>` → `<thead>/<tbody>/<tfoot>` → `<tr>` (row) → `<th>` (header cell) / `<td>` (data cell). **Forms**: `<form action="" method="POST">` → `<input>`, `<textarea>`, `<select>`, `<button type="submit">`. **Semantic tags**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` — use these instead of generic `<div>` to improve SEO and accessibility.',
    tip: `<!-- Lists -->
<ul><li>Item A</li><li>Item B</li></ul>
<ol><li>First</li><li>Second</li></ol>
<dl><dt>Term</dt><dd>Definition</dd></dl>

<!-- Links & Media -->
<a href="/about">Internal link</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External</a>
<img src="hero.jpg" alt="Hero image showing the product" loading="lazy">
<video src="demo.mp4" controls width="600"></video>

<!-- Table -->
<table>
  <thead><tr><th>Name</th><th>Age</th></tr></thead>
  <tbody><tr><td>Alice</td><td>30</td></tr></tbody>
</table>

<!-- Form -->
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <textarea name="msg" rows="4" placeholder="Message..."></textarea>
  <select name="role">
    <option value="dev">Developer</option>
    <option value="design">Designer</option>
  </select>
  <button type="submit">Send</button>
</form>

<!-- Semantic layout -->
<header><nav>...</nav></header>
<main>
  <section><article>...</article></section>
  <aside>Sidebar</aside>
</main>
<footer>...</footer>`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. USEFUL DAILY TOOLS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Useful Daily Tools', difficulty: 'Beginner',
    question: 'HTML Daily Tools — meta tags, favicons, embeds, accessibility (ARIA), and SEO basics?',
    answer: '**Meta tags**: `<meta charset="UTF-8">` (character encoding), `<meta name="viewport" content="width=device-width, initial-scale=1">` (responsive), `<meta name="description" content="...">` (SEO snippet), `<meta name="keywords">` (less important today). **Favicons**: `<link rel="icon" href="favicon.ico">` — browsers display in tab. **Embeds**: `<iframe src="">` (embed another page/map/video), `sandbox` attribute for security. **Accessibility**: `alt` on images, `<label for="">` linked to inputs, `aria-label`, `aria-describedby`, `role` attributes, `tabindex` for keyboard nav. **SEO basics**: use one `<h1>` per page, descriptive heading hierarchy, semantic tags over divs, descriptive `alt` text, fast load time (Core Web Vitals).',
    tip: `<!-- Meta tags in <head> -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Learn HTML with interactive flash cards">
<meta name="author" content="TanQHoang">
<!-- Open Graph (social sharing) -->
<meta property="og:title" content="Dev Flash Cards">
<meta property="og:image" content="preview.png">

<!-- Favicon -->
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<!-- Iframe embed (YouTube, Google Maps) -->
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video title"
  width="560" height="315"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin"
></iframe>

<!-- Accessibility -->
<img src="logo.svg" alt="Company logo">          <!-- always add alt -->
<img src="decoration.png" alt="">                 <!-- empty alt = decorative -->
<button aria-label="Close dialog">X</button>
<nav aria-label="Main navigation">...</nav>
<input id="name" type="text">
<label for="name">Your name</label>              <!-- linked label -->

<!-- ARIA roles when semantic tags not possible -->
<div role="alert">Error: invalid email</div>
<div role="navigation" aria-label="Breadcrumb">...</div>`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. ADVANCED FEATURES
  // ══════════════════════════════════════════════════════════

  {
    category: 'Advanced Features', difficulty: 'Intermediate',
    question: 'HTML Advanced Features — HTML5 APIs, responsive images, lazy loading, advanced form inputs, and multimedia?',
    answer: '**HTML5 APIs**: `Geolocation` — `navigator.geolocation.getCurrentPosition()`; `Drag & Drop` — `draggable`, `ondragstart/ondrop`; `Web Storage` — `localStorage` (persistent) / `sessionStorage` (tab-scoped); `Canvas` — `<canvas>` + JS 2D/WebGL drawing. **Responsive images**: `<picture>` + `<source media="...">` for art direction; `srcset` + `sizes` on `<img>` for resolution switching. **Performance**: `loading="lazy"` on images/iframes; `<script defer>` (runs after HTML parsed), `async` (runs as soon as downloaded). **Advanced form inputs**: `type="email"`, `type="date"`, `type="range"`, `type="color"`, `required`, `pattern`, `minlength`, `maxlength`. **Multimedia**: `<video>` / `<audio>` with `<source>` for multiple formats, `<track kind="subtitles">` for captions.',
    tip: `<!-- Responsive images -->
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(max-width: 1200px)" srcset="medium.jpg">
  <img src="large.jpg" alt="Hero image" loading="lazy">
</picture>
<!-- Or simple srcset: -->
<img src="photo.jpg"
     srcset="photo-400.jpg 400w, photo-800.jpg 800w"
     sizes="(max-width: 600px) 400px, 800px"
     alt="Photo">

<!-- Scripts: defer vs async -->
<script src="app.js" defer></script>   <!-- after HTML parse, in order -->
<script src="analytics.js" async></script> <!-- ASAP, no order guarantee -->

<!-- Advanced form inputs -->
<input type="email" required placeholder="you@example.com">
<input type="date" min="2024-01-01" max="2026-12-31">
<input type="range" min="0" max="100" value="50" step="5">
<input type="color" value="#f97316">
<input type="text" pattern="[A-Za-z]{3,}" title="3+ letters only">

<!-- Video with fallback formats + captions -->
<video controls width="600" poster="thumbnail.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4"  type="video/mp4">
  <track src="subs.vtt" kind="subtitles" srclang="en" label="English" default>
  Your browser does not support video.
</video>

<!-- localStorage -->
<script>
  localStorage.setItem('theme', 'dark');
  const theme = localStorage.getItem('theme'); // 'dark'
</script>`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. PERFORMANCE & SECURITY
  // ══════════════════════════════════════════════════════════

  {
    category: 'Performance & Security', difficulty: 'Intermediate',
    question: 'HTML Performance & Security — validation, DOM optimization, sandboxed iframes, rel="noopener", and SRI?',
    answer: '**Validation**: W3C Validator (`validator.w3.org`) catches broken nesting, missing attributes, deprecated tags. Lighthouse audits accessibility, performance, SEO. **DOM optimization**: minimal DOM depth speeds up rendering; avoid unnecessary wrapper divs; use semantic tags (helps both layout and screen readers). **Security — iframes**: `sandbox` attribute restricts scripts/forms/popups — `sandbox="allow-scripts allow-same-origin"` for controlled embeds. **Security — links**: `rel="noopener noreferrer"` on `target="_blank"` links prevents the opened page from accessing `window.opener` (tabnapping attack). **CSP** (Content Security Policy): HTTP header or `<meta http-equiv="Content-Security-Policy">` restricts which scripts/styles can load. **SRI** (Subresource Integrity): `integrity="sha384-..."` on `<link>`/`<script>` ensures the CDN file hasn\'t been tampered with.',
    tip: `<!-- rel="noopener" — prevent tabnapping -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  Safe external link
</a>

<!-- Sandboxed iframe — restrict permissions -->
<iframe
  src="https://example.com"
  sandbox="allow-scripts allow-same-origin"
  title="Embedded content"
></iframe>

<!-- SRI — verify CDN file integrity -->
<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
>
<script
  src="https://cdn.example.com/lib.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous"
></script>

<!-- CSP via meta tag (prefer HTTP header in production) -->
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' https://cdn.example.com">

<!-- Performance: lazy load images & iframes -->
<img src="below-fold.jpg" alt="..." loading="lazy">
<iframe src="map.html" loading="lazy" title="Map"></iframe>

<!-- crossorigin for CORS-enabled resources -->
<img src="https://api.example.com/avatar.png" crossorigin="anonymous" alt="Avatar">`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECOSYSTEM & APPLICATIONS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'HTML Ecosystem — how HTML works with CSS & JS, frameworks, editors, and real-world applications?',
    answer: '**HTML + CSS**: HTML provides structure, CSS provides styling. External stylesheet via `<link rel="stylesheet">` or inline via `style=""`. CSS selects elements by tag, class (`.`), id (`#`), attribute. **HTML + JS**: JS accesses HTML through the **DOM** (`document.getElementById`, `querySelector`). JS can create, modify, and delete elements dynamically. Events (`click`, `submit`, `keydown`) are attached via `addEventListener`. **Frameworks**: React/Vue/Angular generate and manage HTML via templates and virtual DOM — you write components, frameworks output HTML. **Editors**: VS Code (Emmet for HTML shortcuts), WebStorm, Sublime Text. **Real-world**: every website, web app, email newsletter (inline styles only), and documentation site is built on HTML.',
    tip: `<!-- HTML + CSS connection -->
<link rel="stylesheet" href="style.css">     <!-- external -->
<style>h1 { color: orange; }</style>         <!-- embedded -->
<p style="color: red;">Inline style</p>      <!-- inline (avoid) -->

<!-- HTML + JS connection -->
<button id="myBtn">Click me</button>
<script>
  // Access HTML elements
  const btn = document.getElementById('myBtn');
  btn.addEventListener('click', () => {
    btn.textContent = 'Clicked!';
    btn.style.background = 'green';
  });

  // Create and insert elements
  const p = document.createElement('p');
  p.textContent = 'Dynamically added paragraph';
  document.body.appendChild(p);
</script>

<!-- Emmet shortcuts in VS Code -->
// Type: div.container>ul>li*3>a[href="#"]
// Expands to:
// <div class="container">
//   <ul>
//     <li><a href="#">...</a></li>
//     <li><a href="#">...</a></li>
//     <li><a href="#">...</a></li>
//   </ul>
// </div>

<!-- React JSX (compiles to HTML) -->
// function App() {
//   return <h1 className="title">Hello</h1>;
// }
// → <h1 class="title">Hello</h1>`,
  },

];
/* ═══════════════════════════════════════════════════════════
   CSS — Cascading Style Sheets
═══════════════════════════════════════════════════════════ */
const CSS_ONLY_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════

  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'CSS — Full Mind Map, Learning Paths & Interview Core',
    answer: '6 sections: 1. Fundamentals · 2. Core Concepts · 3. Useful Daily Tools · 4. Advanced Features · 5. Performance & Security · 6. Ecosystem & Applications',
    tip: `CSS
│
├─ 1. Fundamentals
│   ├─ What it is       Cascading Style Sheets · styling web pages
│   ├─ Syntax           selector { property: value; }
│   ├─ Selectors        element · class · id · universal · group
│   ├─ Colors           named · hex · rgb() · hsl()
│   └─ Units            px · em · rem · % · vh/vw
│
├─ 2. Core Concepts
│   ├─ Box Model        content · padding · border · margin
│   ├─ Display          block · inline · inline-block · none
│   ├─ Positioning      static · relative · absolute · fixed · sticky
│   ├─ Flexbox          display:flex · justify-content · align-items · flex-wrap
│   └─ Grid             display:grid · grid-template-rows/columns · gap
│
├─ 3. Useful Daily Tools
│   ├─ Typography       font-family · font-size · line-height · text-align
│   ├─ Backgrounds      background-color · background-image · gradients
│   ├─ Borders          border-style · border-radius · box-shadow
│   ├─ Transitions      transition-property · transition-duration
│   └─ Animations       @keyframes · animation-name · animation-duration
│
├─ 4. Advanced Features
│   ├─ Pseudo-classes   :hover · :focus · :nth-child()
│   ├─ Pseudo-elements  ::before · ::after · ::first-line
│   ├─ Variables        --primary-color · var(--primary-color)
│   ├─ Media Queries    @media (max-width:600px){...}
│   └─ Responsive       fluid layouts · mobile-first design
│
├─ 5. Performance & Security
│   ├─ Optimization     minimize CSS · critical CSS · avoid !important
│   ├─ Specificity      inline > id > class > element
│   ├─ Maintainability  modular CSS · naming conventions (BEM)
│   └─ Security         sanitize user styles · CSP for style-src
│
└─ 6. Ecosystem & Applications
    ├─ Preprocessors    Sass · Less · Stylus
    ├─ Frameworks       Bootstrap · Tailwind · Bulma · Foundation
    ├─ Tools            PostCSS · Autoprefixer · CSS Modules
    ├─ Editors          VS Code · Sublime · WebStorm
    └─ Real-world Use   responsive sites · web apps · UI components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Selectors → Colors → Units → Box Model
Intermediate: Display → Positioning → Flexbox → Grid → Typography
Advanced:     Pseudo-classes → Pseudo-elements → Variables → Media Queries → Responsive Design
Integration:  CSS + HTML → Preprocessors → Frameworks → UI libraries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Box Model:        content, padding, border, margin — critical for layout questions
Positioning:      relative vs absolute vs fixed vs sticky
Flexbox & Grid:   modern layout systems · justify-content · align-items · grid-template
Specificity:      inline > id > class > element · how conflicts are resolved
Responsive:       media queries · mobile-first · fluid units (em, rem, %)
CSS Variables:    reusable values · theming · maintainability
Frameworks:       Bootstrap, Tailwind, etc. · pros/cons in interviews`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. FUNDAMENTALS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'CSS Fundamentals — syntax, selectors, colors, and units?',
    answer: '**CSS (Cascading Style Sheets)** controls how HTML elements look. **Syntax**: `selector { property: value; }`. **Selectors**: element (`p`), class (`.card`), id (`#header`), universal (`*`), group (`h1, h2`), descendant (`div p`), child (`ul > li`), attribute (`[type="text"]`). **Specificity order** (low → high): element (0,0,1) → class/pseudo-class (0,1,0) → id (1,0,0) → inline style. **Colors**: named (`red`), hex (`#f97316`), `rgb(249, 115, 22)`, `rgba(...)` with alpha, `hsl(27, 95%, 53%)`. **Units**: `px` (absolute), `em` (relative to parent font-size), `rem` (relative to root font-size), `%` (relative to parent), `vh/vw` (viewport height/width). Use `rem` for font-size, `px` for borders, `%`/`vh` for layouts.',
    tip: `/* Syntax */
selector { property: value; }

/* Selectors */
p          { color: #333; }          /* element */
.card      { padding: 1rem; }        /* class */
#header    { background: #000; }     /* id */
*          { box-sizing: border-box; }/* universal */
h1, h2     { font-weight: bold; }    /* group */
ul > li    { list-style: none; }     /* direct child */
a:hover    { color: orange; }        /* pseudo-class */
[required] { border-color: red; }   /* attribute */

/* Colors */
color: red;               /* named */
color: #f97316;           /* hex */
color: rgb(249, 115, 22); /* rgb */
color: rgba(0,0,0, 0.5);  /* rgba — 50% transparent */
color: hsl(27, 95%, 53%); /* hue, saturation, lightness */

/* Units */
font-size: 16px;     /* absolute pixels */
font-size: 1rem;     /* 1x root font-size (usually 16px) */
font-size: 1.2em;    /* 1.2x parent font-size */
width: 80%;          /* 80% of parent width */
height: 100vh;       /* full viewport height */
gap: 1.5rem;         /* spacing: rem is best for spacing */

/* Linking CSS */
<link rel="stylesheet" href="style.css">  /* external (preferred) */`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. CORE CONCEPTS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Core Concepts', difficulty: 'Beginner',
    question: 'CSS Core Concepts — Box Model, display, positioning, Flexbox, and Grid?',
    answer: '**Box Model**: every element is a box — from inside out: `content` → `padding` (inner space) → `border` → `margin` (outer space). `box-sizing: border-box` makes width include padding+border. **Display**: `block` (full width, new line), `inline` (text flow, no width/height), `inline-block` (inline + accepts width/height), `none` (hidden). **Positioning**: `static` (default flow), `relative` (offset from own position), `absolute` (removed from flow, relative to nearest non-static ancestor), `fixed` (relative to viewport), `sticky` (relative until scroll threshold). **Flexbox**: one-dimensional — `display:flex` → `justify-content` (main axis), `align-items` (cross axis), `flex-wrap`, `gap`. **Grid**: two-dimensional — `display:grid` → `grid-template-columns/rows`, `gap`, `grid-column/row` span.',
    tip: `/* Box Model */
* { box-sizing: border-box; } /* include padding+border in width — always add this */

.box {
  width: 300px; height: 100px;
  padding: 16px;          /* inner space (top right bottom left) */
  border: 2px solid #333;
  margin: 24px auto;      /* outer space, auto = center horizontally */
}

/* Display */
display: block;        /* <div>, <p>, <h1> default */
display: inline;       /* <span>, <a> default */
display: inline-block; /* behaves inline but accepts width/height */
display: none;         /* hides + removes from layout (vs visibility:hidden) */

/* Positioning */
position: relative;  top: 10px; left: 20px;  /* offset from original spot */
position: absolute;  top: 0; right: 0;        /* relative to nearest positioned ancestor */
position: fixed;     bottom: 20px; right: 20px; /* stays on screen while scrolling */
position: sticky;    top: 0;                  /* sticks when it reaches top while scrolling */

/* Flexbox — 1D layout */
.container { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; }
.item      { flex: 1; }  /* grow equally */

/* Grid — 2D layout */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.wide { grid-column: span 2; }  /* span 2 columns */`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. USEFUL DAILY TOOLS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Useful Daily Tools', difficulty: 'Beginner',
    question: 'CSS Daily Tools — typography, backgrounds, borders, transitions, and animations?',
    answer: '**Typography**: `font-family` (use system stack or Google Fonts), `font-size`, `font-weight` (100–900), `line-height` (1.5–1.75 for readability), `text-align`, `text-transform`, `letter-spacing`. **Backgrounds**: `background-color`, `background-image: url(...)`, `background-size: cover/contain`, `background-position`, linear/radial gradients. **Borders**: `border: 1px solid #333`, `border-radius` (corners), `box-shadow` (multiple layers supported). **Transitions**: smoothly animate CSS property changes — `transition: property duration timing-function delay`. **Animations**: `@keyframes` defines the steps, `animation` applies it — properties: `name`, `duration`, `timing-function`, `delay`, `iteration-count`, `direction`.',
    tip: `/* Typography */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px; line-height: 1.6;
}
h1 { font-size: 2.5rem; font-weight: 700; letter-spacing: -0.02em; }
p  { text-align: left; text-transform: none; color: #334155; }

/* Backgrounds */
.hero {
  background-color: #0f172a;
  background-image: linear-gradient(135deg, #6366f1, #8b5cf6);
  background-size: cover;
  background-position: center;
}
/* Radial gradient */
background: radial-gradient(circle at top, #1e293b, #0f172a);

/* Borders & Shadows */
.card {
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06);
}

/* Transitions — smooth state changes */
.btn {
  background: #6366f1;
  transition: background 0.2s ease, transform 0.15s ease;
}
.btn:hover { background: #4f46e5; transform: translateY(-2px); }

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.modal { animation: fadeIn 0.3s ease forwards; }
/* spin loader */
@keyframes spin { to { transform: rotate(360deg); } }
.spinner { animation: spin 1s linear infinite; }`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. ADVANCED FEATURES
  // ══════════════════════════════════════════════════════════

  {
    category: 'Advanced Features', difficulty: 'Intermediate',
    question: 'CSS Advanced Features — pseudo-classes, pseudo-elements, custom properties (variables), media queries, and responsive design?',
    answer: '**Pseudo-classes** target elements in a specific state: `:hover`, `:focus`, `:active`, `:visited`, `:nth-child(n)`, `:first-child`, `:last-child`, `:not()`, `:checked`, `:disabled`. **Pseudo-elements** style a part of an element: `::before`, `::after` (must have `content`), `::first-line`, `::first-letter`, `::placeholder`, `::selection`. **CSS Custom Properties (variables)**: `--name: value` on `:root`, used with `var(--name)`. Support fallback: `var(--color, #333)`. Enable theming (dark/light mode). **Media queries**: `@media (max-width: 768px) { ... }` — adapt layout to screen size. Combine: `@media (min-width: 600px) and (max-width: 1200px)`. **Mobile-first** uses `min-width` breakpoints (start small, scale up).',
    tip: `/* Pseudo-classes */
a:hover    { color: #6366f1; }
input:focus { outline: 2px solid #6366f1; outline-offset: 2px; }
li:nth-child(odd)  { background: #f8fafc; }
li:nth-child(2n+1) { background: #f8fafc; } /* same: odd */
p:not(.special)    { color: #64748b; }
input:checked + label { font-weight: bold; }

/* Pseudo-elements */
.card::before {
  content: '';         /* required — even if empty */
  display: block;
  width: 4px; height: 100%;
  background: #6366f1;
  position: absolute; left: 0; top: 0;
}
p::first-line { font-weight: bold; }
::selection   { background: #6366f1; color: white; }

/* CSS Variables */
:root {
  --primary:   #6366f1;
  --radius:    0.5rem;
  --shadow:    0 4px 6px rgba(0,0,0,0.1);
}
.btn { background: var(--primary); border-radius: var(--radius); }
/* Dark mode via class toggle */
[data-theme="dark"] { --primary: #818cf8; --bg: #0f172a; }

/* Media Queries — mobile-first (min-width) */
/* Base styles: mobile */
.grid { grid-template-columns: 1fr; }

@media (min-width: 768px) {   /* tablet */
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1200px) {  /* desktop */
  .grid { grid-template-columns: repeat(3, 1fr); }
}`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. PERFORMANCE & SECURITY
  // ══════════════════════════════════════════════════════════

  {
    category: 'Performance & Security', difficulty: 'Intermediate',
    question: 'CSS Performance & Security — specificity, avoiding !important, critical CSS, BEM, and CSP?',
    answer: '**Specificity** (highest wins): inline style (1,0,0,0) > `#id` (0,1,0,0) > `.class`/`:pseudo-class`/`[attr]` (0,0,1,0) > element/`::pseudo-element` (0,0,0,1). Equal specificity: **last rule wins** (cascade). **Avoid `!important`** — breaks the cascade, makes debugging painful; use higher specificity instead. **Critical CSS**: inline the minimum CSS needed for above-the-fold content to eliminate render-blocking. **Optimization**: remove unused CSS (PurgeCSS), minify, use `will-change` sparingly, prefer CSS transitions over JS animation. **BEM naming**: `.block__element--modifier` — flat, readable, avoids specificity wars. **CSP for styles**: `Content-Security-Policy: style-src \'self\' \'nonce-abc123\'` — prevents injected styles.',
    tip: `/* Specificity examples */
p           { color: black; }   /* 0,0,0,1 */
.text       { color: blue; }    /* 0,0,1,0 — wins over p */
#main .text { color: green; }   /* 0,1,1,0 — wins over .text */
/* inline style="color:red"     1,0,0,0 — highest */

/* Avoid !important — prefer higher specificity */
/* ❌ */ .btn { color: red !important; }
/* ✅ */ #app .btn { color: red; }  /* increase specificity instead */

/* BEM — Block, Element, Modifier */
.card {}               /* block */
.card__title {}        /* element (double underscore) */
.card__title--large {} /* modifier (double dash) */
.btn {}
.btn--primary {}
.btn--disabled {}

/* Critical CSS — inline above-the-fold styles */
<style>
  /* Only what's needed for first paint */
  body { margin: 0; font-family: system-ui; }
  .hero { height: 100vh; display: flex; align-items: center; }
</style>
<link rel="stylesheet" href="style.css" media="print" onload="this.media='all'">

/* CSS will-change — hint browser for compositing */
.animated { will-change: transform; }  /* use sparingly: creates new layer */

/* Unused CSS removal with PurgeCSS (in build step) */
/* purgecss { content: ['./src/**/*.html', './src/**/*.js'] } */`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECOSYSTEM & APPLICATIONS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'CSS Ecosystem — preprocessors (Sass), frameworks (Tailwind/Bootstrap), PostCSS, and real-world usage?',
    answer: '**Preprocessors**: Sass (most popular) adds variables, nesting, mixins, partials, functions — compiles to CSS. Less and Stylus are alternatives. **Frameworks**: Bootstrap — component-based, utility classes, grid system; Tailwind CSS — utility-first, no pre-built components, highly customisable; Bulma — flexbox-based, no JS. **PostCSS**: transforms CSS with plugins — Autoprefixer (adds vendor prefixes), cssnano (minify), PurgeCSS (remove unused). **CSS Modules**: scopes class names locally to component, avoids collisions — used in React/Vue. **CSS-in-JS**: Styled Components, Emotion — write CSS in JS, scoped per component. **Choice guide**: quick prototypes → Bootstrap; custom design systems → Tailwind; large-scale apps → CSS Modules or CSS-in-JS.',
    tip: `/* Sass (SCSS) — superset of CSS */
// Variables
$primary: #6366f1;
$radius: 0.5rem;

// Nesting
.card {
  padding: 1rem;
  &:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
  &__title { font-size: 1.25rem; font-weight: 700; }
  &--featured { border: 2px solid $primary; }
}

// Mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero { @include flex-center; height: 100vh; }

// Partial files: _variables.scss, _mixins.scss, _components.scss
// Import: @use 'variables'; @use 'mixins';

/* Tailwind CSS — utility-first */
// <div class="flex items-center justify-between gap-4 p-6 rounded-xl bg-indigo-500 text-white">
// No custom CSS needed — compose utilities in HTML

/* CSS Modules (React) */
// Button.module.css
.button { background: #6366f1; border-radius: 0.5rem; }
// Button.jsx
// import styles from './Button.module.css';
// <button className={styles.button}>Click</button>
// Compiles to: <button class="Button_button__abc12">

/* PostCSS Autoprefixer — input */
.container { display: grid; }
/* Output (auto-prefixed) */
.container { display: -ms-grid; display: grid; }`,
  },

];
const NPM_CARDS           = [];
const GIT_CARDS           = [];
/* ═══════════════════════════════════════════════════════════
   TAILWIND CSS — Utility-First CSS Framework
═══════════════════════════════════════════════════════════ */
const TAILWIND_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════

  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'Tailwind CSS — Full Mind Map, Learning Paths & Interview Core',
    answer: '6 sections: 1. Fundamentals · 2. Core Concepts · 3. Useful Daily Tools · 4. Advanced Features · 5. Performance & Security · 6. Ecosystem & Applications',
    tip: `Tailwind CSS
│
├─ 1. Fundamentals
│   ├─ What it is       Utility-first CSS framework · rapid UI development
│   ├─ Install          npm install tailwindcss · PostCSS setup
│   ├─ Config File      tailwind.config.js · theme · extend · plugins
│   ├─ Directives       @tailwind base · @tailwind components · @tailwind utilities
│   └─ Basic Usage      class="text-center bg-blue-500 p-4"
│
├─ 2. Core Concepts
│   ├─ Utility Classes  text-lg · font-bold · bg-gray-200 · p-4 · m-2
│   ├─ Responsive       sm: · md: · lg: · xl: · 2xl:
│   ├─ State Variants   hover: · focus: · active: · disabled:
│   ├─ Dark Mode        class strategy · media strategy
│   └─ Customization    extend theme · colors · spacing · typography
│
├─ 3. Useful Daily Tools
│   ├─ Typography       text-sm · leading-relaxed · tracking-wide
│   ├─ Layout           flex · grid · gap-x-4 · justify-between
│   ├─ Spacing          p-2 · m-4 · space-x-2 · space-y-4
│   ├─ Borders          border · border-radius · ring utilities
│   └─ Effects          shadow-lg · opacity-75 · transition-all · duration-300
│
├─ 4. Advanced Features
│   ├─ Plugins          typography · forms · aspect-ratio · line-clamp
│   ├─ Arbitrary Values w-[450px] · bg-[#1da1f2]
│   ├─ JIT Mode         on-demand class generation · instant builds
│   ├─ Reusable Styles  @apply directive · component extraction
│   └─ Theming          multiple themes · CSS variables integration
│
├─ 5. Performance & Security
│   ├─ PurgeCSS         remove unused classes · optimize bundle size
│   ├─ Tree-shaking     automatic removal of unused utilities
│   ├─ Best Practices   avoid deep nesting · keep config clean
│   └─ Security         CSP compatibility · safe class names
│
└─ 6. Ecosystem & Applications
    ├─ Frameworks       Next.js · React · Vue · Angular integration
    ├─ UI Libraries     Headless UI · DaisyUI · Flowbite
    ├─ Tooling          VS Code extensions · IntelliSense · Prettier plugin
    ├─ Community        Tailwind UI · templates · starter kits
    └─ Real-world Use   dashboards · landing pages · e-commerce · SaaS apps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Install → Config → Basic Usage → Utility Classes
Intermediate: Responsive design → State variants → Dark mode → Customization
Advanced:     Plugins → Arbitrary values → JIT mode → @apply directive → Theming
Integration:  Tailwind + React/Vue/Next.js → UI libraries → Real-world projects

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Utility-first:   rapid prototyping · small reusable classes
Responsive:      sm:, md:, lg:, xl: breakpoints · mobile-first by default
Variants:        hover:, focus:, active:, dark mode strategies
Customization:   tailwind.config.js · extend theme · arbitrary values
Performance:     PurgeCSS · JIT mode · bundle optimization
Ecosystem:       Tailwind UI · Headless UI · DaisyUI · framework integrations`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. FUNDAMENTALS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'Tailwind CSS Fundamentals — what it is, installation, config file, and directives?',
    answer: '**Tailwind CSS** is a utility-first CSS framework — instead of pre-built components, it provides low-level utility classes you compose directly in HTML. **No context switching** between HTML and CSS files. **Install**: `npm install -D tailwindcss postcss autoprefixer` → `npx tailwindcss init -p` (creates `tailwind.config.js` + `postcss.config.js`). **Config**: `tailwind.config.js` has `content` (files to scan for classes), `theme.extend` (add/override tokens), `plugins`. **Directives** in your main CSS file: `@tailwind base` (normalize/reset), `@tailwind components` (component classes), `@tailwind utilities` (all utility classes). **JIT (Just-In-Time)**: default in Tailwind v3 — generates only the classes you use, making dev builds instant.',
    tip: `# Install (v3)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',  // scan these files for classes
  ],
  theme: {
    extend: {
      colors: {
        brand: { 500: '#6366f1', 600: '#4f46e5' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class', // or 'media'
};

/* src/index.css — the three directives */
@tailwind base;        /* Preflight (CSS reset) */
@tailwind components;  /* @layer components { .btn { @apply ... } } */
@tailwind utilities;   /* All utility classes (generated on-demand with JIT) */

/* Build command */
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. CORE CONCEPTS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Core Concepts', difficulty: 'Beginner',
    question: 'Tailwind Core Concepts — utility classes, responsive prefixes, state variants, and dark mode?',
    answer: '**Utility classes**: single-purpose classes that map directly to CSS — `text-lg` = `font-size: 1.125rem`, `bg-blue-500` = specific blue, `p-4` = `padding: 1rem` (4 × 0.25rem). **Responsive**: Tailwind is **mobile-first** — unprefixed classes apply to all sizes, prefixes add breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px). **State variants**: `hover:bg-blue-600`, `focus:ring-2`, `active:scale-95`, `disabled:opacity-50`, `group-hover:`, `peer-focus:`. **Dark mode — class strategy**: add `dark` class to `<html>`, then use `dark:bg-gray-900`. **Dark mode — media strategy**: responds to OS preference automatically via `prefers-color-scheme`.',
    tip: `<!-- Utility classes -->
<div class="text-xl font-bold text-gray-900 bg-white rounded-lg shadow-md p-6 m-4">
  Card
</div>

<!-- Responsive — mobile-first -->
<div class="
  grid grid-cols-1        <!-- mobile: 1 column -->
  md:grid-cols-2          <!-- tablet: 2 columns -->
  lg:grid-cols-3          <!-- desktop: 3 columns -->
  gap-6 p-4
">...</div>

<!-- State variants -->
<button class="
  bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold
  hover:bg-indigo-600
  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
  active:scale-95
  disabled:opacity-50 disabled:cursor-not-allowed
  transition-all duration-200
">
  Submit
</button>

<!-- Dark mode (class strategy) -->
<html class="dark">
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
    Dark-aware card
  </div>
</body>

<!-- Group hover — parent controls child -->
<div class="group flex items-center gap-3 cursor-pointer">
  <span class="text-gray-600 group-hover:text-indigo-500 transition-colors">Icon</span>
  <span class="group-hover:font-semibold">Label</span>
</div>`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. USEFUL DAILY TOOLS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Useful Daily Tools', difficulty: 'Beginner',
    question: 'Tailwind Daily Tools — typography, layout (flex/grid), spacing, borders, and effects?',
    answer: '**Typography**: `text-{size}` (xs/sm/base/lg/xl/2xl…), `font-{weight}` (thin/light/normal/medium/semibold/bold/extrabold), `leading-{value}` (line-height), `tracking-{value}` (letter-spacing), `text-{color}`, `uppercase/lowercase/capitalize`, `truncate`, `line-clamp-{n}`. **Layout**: `flex`, `grid`, `justify-{start/end/center/between/around/evenly}`, `items-{start/end/center/baseline/stretch}`, `gap-{n}`, `flex-wrap`, `flex-col`. **Spacing**: `p-{n}` (padding all), `px-/py-/pt-/pr-/pb-/pl-` (directional), `m-{n}`, `mx-auto` (center), `space-x-{n}` / `space-y-{n}` (gap between flex/block children). **Borders**: `border`, `border-{color}`, `rounded-{none/sm/md/lg/xl/2xl/full}`, `ring-{n}` (focus outline). **Effects**: `shadow-{sm/md/lg/xl}`, `opacity-{n}`, `transition-{all/colors/opacity}`, `duration-{ms}`, `ease-{linear/in/out}`.',
    tip: `<!-- Typography -->
<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">Heading</h1>
<p class="text-base leading-relaxed text-gray-600">Paragraph text</p>
<span class="text-sm font-medium uppercase tracking-widest text-indigo-500">Label</span>
<p class="truncate w-48">Long text that gets cut off...</p>
<p class="line-clamp-3">Multi-line text clamped to 3 lines max...</p>

<!-- Flex layout -->
<div class="flex items-center justify-between gap-4 flex-wrap">
  <div class="flex-1 min-w-0">...</div>
  <div class="shrink-0">...</div>
</div>

<!-- Grid layout -->
<div class="grid grid-cols-12 gap-6">
  <div class="col-span-8">Main content</div>
  <div class="col-span-4">Sidebar</div>
</div>

<!-- Spacing -->
<div class="p-6 px-8 py-4 mx-auto max-w-2xl">
  <ul class="space-y-2">       <!-- gap between children -->
    <li>Item 1</li><li>Item 2</li>
  </ul>
</div>

<!-- Borders & Shadows -->
<div class="border border-gray-200 rounded-xl shadow-lg">Card</div>
<input class="border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent">

<!-- Transitions & Effects -->
<div class="opacity-75 hover:opacity-100 transition-opacity duration-200">Fade</div>
<button class="transform hover:-translate-y-1 transition-transform duration-150 shadow hover:shadow-lg">
  Lift on hover
</button>`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. ADVANCED FEATURES
  // ══════════════════════════════════════════════════════════

  {
    category: 'Advanced Features', difficulty: 'Intermediate',
    question: 'Tailwind Advanced Features — arbitrary values, @apply, plugins, and theming with CSS variables?',
    answer: '**Arbitrary values**: escape the design system with `w-[450px]`, `bg-[#1da1f2]`, `text-[22px]`, `grid-cols-[1fr_2fr_1fr]` — uses JIT. **`@apply` directive**: extract repeated class lists into a semantic CSS class. Use sparingly — overuse defeats utility-first purpose. **Plugins**: `@tailwindcss/typography` (`.prose` for rich text), `@tailwindcss/forms` (styled form elements), `@tailwindcss/aspect-ratio`, `line-clamp`. **Custom plugins**: add new utilities/components via `addUtilities()`/`addComponents()`. **Theming with CSS variables**: define `--color-primary` in `:root`, reference in config with `var(--color-primary)` — enables runtime theme switching without rebuilding. **`theme()` function**: reference config values in CSS — `color: theme(\'colors.indigo.500\')`.',
    tip: `<!-- Arbitrary values — any CSS value -->
<div class="w-[450px] h-[200px] bg-[#1da1f2] text-[14px] mt-[7px]">
  Custom sizing
</div>
<!-- Arbitrary with modifiers -->
<div class="lg:w-[800px] hover:bg-[#custom] dark:text-[#f0f0f0]">...</div>

/* @apply — extract component styles */
@layer components {
  .btn {
    @apply inline-flex items-center px-4 py-2 rounded-lg font-semibold
           transition-all duration-200 focus:outline-none focus:ring-2;
  }
  .btn-primary {
    @apply btn bg-indigo-500 text-white hover:bg-indigo-600
           focus:ring-indigo-500 focus:ring-offset-2;
  }
  .card {
    @apply bg-white dark:bg-gray-800 rounded-xl shadow-md p-6
           border border-gray-100 dark:border-gray-700;
  }
}

/* CSS Variables theming */
:root { --color-primary: 99 102 241; }  /* RGB values for opacity support */
[data-theme="purple"] { --color-primary: 139 92 246; }

/* tailwind.config.js */
theme: {
  extend: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
    }
  }
}
/* Usage: bg-primary/50 (50% opacity) */

/* Custom plugin */
const plugin = require('tailwindcss/plugin');
plugins: [
  plugin(({ addUtilities }) => {
    addUtilities({ '.text-shadow': { 'text-shadow': '2px 2px 4px rgba(0,0,0,0.3)' } });
  })
]`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. PERFORMANCE & SECURITY
  // ══════════════════════════════════════════════════════════

  {
    category: 'Performance & Security', difficulty: 'Intermediate',
    question: 'Tailwind Performance & Security — PurgeCSS, JIT, bundle optimization, and CSP?',
    answer: '**PurgeCSS / content scanning**: Tailwind v3 scans all files listed in `content` and generates ONLY the classes found — production build is typically 5–20 KB (vs 3 MB full CSS). **JIT (Just-In-Time)**: default in v3 — classes generated on demand during development, no separate purge step needed. Enables arbitrary values and unlimited variants. **Bundle size**: never ship the full Tailwind CSS — always use `NODE_ENV=production` for minified, purged output. **Best practices**: don\'t construct class names dynamically (`text-${color}-500` won\'t be detected — use full class names in source). **CSP**: Tailwind generates standard CSS, compatible with CSP `style-src \'self\'`. Avoid inline styles that require `\'unsafe-inline\'`. **Safe class names**: Tailwind classes are predictable — no risk of user-controlled class injection.',
    tip: `# Production build — auto-purges unused classes
NODE_ENV=production npx tailwindcss -i input.css -o output.css --minify

# tailwind.config.js — content paths (critical for purging)
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
    // Include any library that uses Tailwind classes:
    './node_modules/@headlessui/react/**/*.js',
  ],
};

# ❌ Dynamic class construction — WON'T be detected by scanner
const color = 'red';
<div class={"text-" + color + "-500"}>Bad</div>

# ✅ Use full class names — always detectable
const classes = { red: 'text-red-500', blue: 'text-blue-500' };
<div class={classes[color]}>Good</div>

# Safelist — force-include dynamic classes
module.exports = {
  safelist: [
    'text-red-500', 'text-blue-500', 'text-green-500',
    { pattern: /bg-(red|blue|green)-(100|200|500)/ },
  ],
};

# Bundle size comparison:
# Full Tailwind CSS v3:  ~3.5 MB (development)
# After JIT purge:       ~5–20 KB (production) ← massive savings`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECOSYSTEM & APPLICATIONS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'Tailwind Ecosystem — UI libraries (Headless UI, DaisyUI), framework integrations, tooling, and real-world use?',
    answer: '**Headless UI**: unstyled, accessible components (Dialog, Listbox, Combobox, Switch) — style with Tailwind. **DaisyUI**: component library built on Tailwind, adds semantic class names (`btn`, `card`, `badge`) with themes. **Flowbite**: Tailwind component library with interactive JS components. **Tailwind UI**: official premium component library (paid). **Framework integrations**: Next.js (built-in support), React (via `className`), Vue (`:class`), Angular, SvelteKit. **VS Code tools**: Tailwind CSS IntelliSense extension (autocomplete, hover preview, linting), Prettier plugin for class sorting. **Real-world**: used by Vercel, GitHub, Linear, Shopify, Laravel — especially popular for SaaS dashboards, landing pages, and design systems.',
    tip: `// React + Tailwind + Headless UI
import { Dialog } from '@headlessui/react';

function Modal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md w-full">
          <Dialog.Title className="text-lg font-bold text-gray-900 dark:text-white">
            Confirm Action
          </Dialog.Title>
          <p className="mt-2 text-sm text-gray-500">Are you sure?</p>
          <div className="mt-4 flex gap-3 justify-end">
            <button onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors">
              Confirm
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

<!-- DaisyUI — semantic component classes -->
<button class="btn btn-primary">Primary</button>
<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>Content</p>
  </div>
</div>
<span class="badge badge-success">Active</span>`,
  },

];
/* ═══════════════════════════════════════════════════════════
   REDUX — Predictable State Container
═══════════════════════════════════════════════════════════ */
const REDUX_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════

  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'Redux — Full Mind Map, Learning Paths & Interview Core',
    answer: '6 sections: 1. Fundamentals · 2. Core Concepts · 3. Useful Daily Tools · 4. Advanced Features · 5. Performance & Security · 6. Ecosystem & Applications',
    tip: `Redux
│
├─ 1. Fundamentals
│   ├─ What it is       Predictable state container for JavaScript apps
│   ├─ Principles       Single source of truth · State is read-only · Changes via pure functions
│   ├─ Store            createStore() · holds state tree
│   ├─ Actions          plain JS objects · { type: 'INCREMENT', payload: ... }
│   └─ Reducers         pure functions · (state, action) => newState
│
├─ 2. Core Concepts
│   ├─ Dispatch         store.dispatch(action)
│   ├─ Selectors        store.getState() · reselect for memoization
│   ├─ Middleware       intercept actions · redux-thunk · redux-saga
│   ├─ DevTools         Redux DevTools extension · time-travel debugging
│   └─ Immutability     spread operator · immer library
│
├─ 3. Useful Daily Tools
│   ├─ Redux Toolkit    configureStore · createSlice · createAsyncThunk
│   ├─ Async Logic      thunks · sagas · observables
│   ├─ Integration      react-redux · Provider · useSelector · useDispatch
│   ├─ Testing          reducer tests · action creators · mock store
│   └─ Debugging        logging middleware · DevTools
│
├─ 4. Advanced Features
│   ├─ Normalized State flatten nested data · entity adapter
│   ├─ Code Splitting   dynamic reducers · lazy loading
│   ├─ Rehydration      redux-persist · localStorage/sessionStorage
│   ├─ Performance      memoized selectors · batching updates
│   └─ Complex Flows    sagas for side effects · cancellation
│
├─ 5. Performance & Security
│   ├─ Optimization     avoid unnecessary re-renders · selector memoization
│   ├─ Maintainability  modular slices · clear action types
│   ├─ Debugging Tools  Redux DevTools · logging middleware
│   └─ Alternatives     MobX · Zustand · Recoil · Jotai
│
└─ 6. Ecosystem & Applications
    ├─ Libraries        Redux Toolkit · React-Redux · Reselect · Immer
    ├─ Frameworks       MERN stack · Next.js with Redux
    ├─ Real-world Use   dashboards · e-commerce carts · authentication flows
    └─ DevOps           state persistence · debugging in CI/CD

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Store → Actions → Reducers → Dispatch
Intermediate: Middleware → Selectors → DevTools → Immutability
Advanced:     Redux Toolkit → Async Logic → Normalized State → Code Splitting → Rehydration
Integration:  React-Redux → Provider → useSelector/useDispatch → Full-stack apps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Principles:    single source of truth · state is immutable · reducers are pure functions
Actions:       plain objects with type & payload · describe what happened
Reducers:      pure functions · compute new state · no side effects
Middleware:    extend Redux with async logic (thunk, saga)
Redux Toolkit: modern concise Redux · createSlice · createAsyncThunk
Integration:   Provider, useSelector, useDispatch hooks
Performance:   memoized selectors · normalized state · batching updates
Alternatives:  MobX · Zustand · Recoil · Jotai · when to use Redux vs others`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. FUNDAMENTALS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'Redux Fundamentals — three principles, Store, Actions, and Reducers?',
    answer: '**Redux** is a predictable state container — the entire app state lives in one place, changes are traceable and reproducible. **Three principles**: 1. **Single source of truth** — one store holds all state. 2. **State is read-only** — you never mutate state directly; dispatch an action to request a change. 3. **Changes via pure functions** — reducers take `(state, action)` and return a new state, no side effects. **Store**: holds the state tree. Created with `createStore(reducer)` (legacy) or `configureStore()` (Redux Toolkit). **Actions**: plain JS objects with a required `type` field and optional `payload`. **Reducers**: pure functions `(state = initialState, action) => newState` — handle each action type with a `switch`.',
    tip: `// Actions — plain objects
const increment = () => ({ type: 'counter/increment' });
const addTodo   = (text) => ({ type: 'todos/add', payload: { id: Date.now(), text } });

// Reducer — pure function, no mutations
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, count: state.count + 1 };  // new object
    case 'counter/decrement':
      return { ...state, count: state.count - 1 };
    case 'counter/reset':
      return initialState;
    default:
      return state;  // always return state for unknown actions
  }
}

// Store (legacy)
import { createStore } from 'redux';
const store = createStore(counterReducer);

// Core API
store.getState();          // { count: 0 }
store.dispatch(increment()); // triggers reducer
store.subscribe(() => {    // called after every dispatch
  console.log(store.getState());
});

// Combine multiple reducers
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. CORE CONCEPTS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Core Concepts', difficulty: 'Intermediate',
    question: 'Redux Core Concepts — dispatch, selectors (Reselect), middleware (Thunk), DevTools, and immutability?',
    answer: '**Dispatch**: `store.dispatch(action)` — the only way to trigger a state change. **Selectors**: functions that extract specific data from state — `state => state.counter.value`. **Reselect**: creates memoized selectors with `createSelector` — recomputes only when inputs change, prevents unnecessary re-renders. **Middleware**: sits between dispatch and reducer — intercepts actions for async logic, logging, crash reporting. `redux-thunk` lets action creators return functions (for async); `redux-saga` uses generators for complex async flows. **DevTools**: Redux DevTools browser extension enables time-travel debugging — step forward/back through every dispatched action. **Immutability**: reducers must NOT mutate state — use spread (`{...state, key: value}`), `Object.assign`, or Immer (writes mutable-style code but produces immutable updates).',
    tip: `// Middleware — redux-thunk (async action creator)
const fetchUser = (id) => async (dispatch, getState) => {
  dispatch({ type: 'users/fetchStart' });
  try {
    const user = await api.getUser(id);
    dispatch({ type: 'users/fetchSuccess', payload: user });
  } catch (err) {
    dispatch({ type: 'users/fetchError', payload: err.message });
  }
};
store.dispatch(fetchUser(1));  // dispatch a thunk

// Custom middleware
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);  // pass to next middleware/reducer
  console.log('next state', store.getState());
  return result;
};

// Apply middleware (legacy)
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));

// Reselect — memoized selectors
import { createSelector } from 'reselect';
const selectTodos      = state => state.todos.items;
const selectFilter     = state => state.todos.filter;
const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => todos.filter(t => filter === 'all' || t.status === filter)
  // Only recomputes when todos or filter actually changes
);

// Immer — mutable-style updates in reducer
import produce from 'immer';
const reducer = produce((draft, action) => {
  if (action.type === 'todos/add') draft.push(action.payload); // direct mutation OK!
}, []);`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. USEFUL DAILY TOOLS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Useful Daily Tools', difficulty: 'Beginner',
    question: 'Redux Toolkit — configureStore, createSlice, createAsyncThunk, and React-Redux hooks?',
    answer: '**Redux Toolkit (RTK)** is the official, recommended way to write Redux — eliminates boilerplate. **`configureStore`**: wraps `createStore` + sets up DevTools, `redux-thunk`, and Immer automatically. **`createSlice`**: generates action creators and action types from reducer logic in one call. Uses Immer internally so you can write "mutating" logic safely. **`createAsyncThunk`**: handles the async lifecycle (pending/fulfilled/rejected) with generated action types. **React-Redux hooks**: `useSelector(selector)` reads from store (re-renders on change), `useDispatch()` returns the dispatch function. **`Provider`**: wraps the app to make the store available via React context. These three (`configureStore` + `createSlice` + hooks) cover 90% of real-world Redux usage.',
    tip: `// store.js — configureStore
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todosReducer   from './todosSlice';

export const store = configureStore({
  reducer: { counter: counterReducer, todos: todosReducer },
  // DevTools auto-enabled in dev, Thunk middleware included
});

// counterSlice.js — createSlice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCount = createAsyncThunk('counter/fetchCount', async (amount) => {
  const response = await fetch('/api/count');
  return response.json(); // becomes action.payload in fulfilled
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, status: 'idle' },
  reducers: {
    increment: state => { state.value += 1; },   // Immer: direct mutation OK!
    decrement: state => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCount.pending,   state => { state.status = 'loading'; })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.status = 'idle'; state.value = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// App.jsx — Provider + hooks
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count    = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default function App() {
  return <Provider store={store}><Counter /></Provider>;
}`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. ADVANCED FEATURES
  // ══════════════════════════════════════════════════════════

  {
    category: 'Advanced Features', difficulty: 'Advanced',
    question: 'Redux Advanced — normalized state (EntityAdapter), redux-persist, code splitting, and RTK Query?',
    answer: '**Normalized state**: flatten nested data into a `{ids: [], entities: {}}` shape — avoid duplication, O(1) lookups. RTK\'s `createEntityAdapter` generates CRUD reducers + selectors automatically. **redux-persist**: automatically saves and rehydrates Redux state to/from `localStorage` or `sessionStorage`. Wrap store with `persistStore`, use `PersistGate` in React. **Code splitting**: inject reducers dynamically with `store.replaceReducer` — load only the reducers needed for the current route. **RTK Query**: built-in data fetching/caching solution in Redux Toolkit — auto-generates hooks, handles loading/error states, caching, invalidation, and refetching. Replaces thunks for server state. **Batching**: RTK uses `unstable_batchedUpdates` automatically so multiple dispatches don\'t cause multiple re-renders.',
    tip: `// Normalized state with createEntityAdapter
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.createdAt - b.createdAt,
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({ status: 'idle' }),
  reducers: {
    addTodo:    todosAdapter.addOne,       // auto-generated CRUD
    updateTodo: todosAdapter.updateOne,
    removeTodo: todosAdapter.removeOne,
    setAll:     todosAdapter.setAll,
  },
});
// Selectors (auto-generated):
export const { selectAll, selectById, selectIds } = todosAdapter.getSelectors(
  state => state.todos
);

// RTK Query — data fetching & caching
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Post'],
    }),
    addPost: builder.mutation({
      query: body => ({ url: '/posts', method: 'POST', body }),
      invalidatesTags: ['Post'], // auto-refetch getPosts after mutation
    }),
  }),
});
export const { useGetPostsQuery, useAddPostMutation } = api;
// Usage: const { data, isLoading, error } = useGetPostsQuery();

// redux-persist setup
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = { key: 'root', storage, whitelist: ['auth'] };
const store = configureStore({ reducer: persistReducer(persistConfig, rootReducer) });`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. PERFORMANCE & SECURITY
  // ══════════════════════════════════════════════════════════

  {
    category: 'Performance & Security', difficulty: 'Intermediate',
    question: 'Redux Performance & Security — selector memoization, avoiding re-renders, and when to use Redux vs alternatives?',
    answer: '**Selector memoization**: `useSelector` re-renders the component whenever the selected value changes (reference equality). Use `createSelector` (Reselect) for derived data — only recomputes when inputs change. **Avoid expensive selectors inline** — define selectors outside components. **Structural sharing**: RTK/Immer only creates new references for changed nodes — unchanged parts of state keep the same reference, preventing unnecessary re-renders. **When NOT to use Redux**: local UI state (modals, form input), server cache (use RTK Query or React Query instead), simple apps (Context API is enough). **Alternatives**: Zustand (simple, minimal boilerplate), Recoil/Jotai (atomic state), MobX (observable-based, implicit reactivity). **Security**: never store sensitive data (tokens, passwords) in Redux state unless necessary — state is accessible via DevTools; use `httpOnly` cookies for auth tokens instead.',
    tip: `// ❌ Expensive computation in useSelector — runs every render
const total = useSelector(state =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.qty, 0)
);

// ✅ Memoized selector — recomputes only when cart.items changes
const selectCartTotal = createSelector(
  state => state.cart.items,
  items => items.reduce((sum, item) => sum + item.price * item.qty, 0)
);
const total = useSelector(selectCartTotal);

// ✅ Equality function for object selectors
import { shallowEqual } from 'react-redux';
const { name, email } = useSelector(
  state => ({ name: state.user.name, email: state.user.email }),
  shallowEqual  // prevent re-render if name & email unchanged
);

// When to choose what:
// Redux:   complex shared state · many components · time-travel debugging needed
// Zustand: simple global state · minimal boilerplate · no Provider needed
// Context: small apps · infrequent updates · theme/locale/auth
// RTK Query / React Query: server data (fetching, caching, sync)
// Recoil/Jotai: fine-grained atomic state · React concurrent features

// Zustand comparison
import { create } from 'zustand';
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));
// No Provider, no boilerplate — just use the hook
const { count, increment } = useStore();`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECOSYSTEM & APPLICATIONS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'Redux Ecosystem — Redux Toolkit, RTK Query, Immer, Reselect, and real-world patterns?',
    answer: '**Core libraries**: `@reduxjs/toolkit` (RTK — the standard), `react-redux` (React bindings), `reselect` (memoized selectors, now built into RTK), `immer` (immutable updates, now built into RTK). **RTK Query**: replaces `redux-thunk` + manual fetch logic for server state — handles caching, loading states, polling, optimistic updates, and cache invalidation automatically. **redux-persist**: state persistence across page refreshes. **redux-saga**: generator-based side effect management — useful for complex async flows (cancellation, debouncing, race conditions). **Testing**: test reducers as pure functions (`expect(reducer(state, action)).toEqual(newState)`), use `configureStore` for integration tests. **Real-world patterns**: feature-based folder structure (`features/counter/counterSlice.js`), one slice per domain, RTK Query for API calls.',
    tip: `// Feature-based folder structure (recommended)
// src/
//   app/
//     store.js
//   features/
//     auth/
//       authSlice.js
//       authAPI.js
//     cart/
//       cartSlice.js
//       CartComponent.jsx
//     todos/
//       todosSlice.js

// Testing a reducer (pure function — easy to test)
import counterReducer, { increment, decrement } from './counterSlice';

describe('counter reducer', () => {
  it('should handle increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  it('should handle decrement', () => {
    expect(counterReducer({ value: 5 }, decrement())).toEqual({ value: 4 });
  });
});

// RTK Query — replaces manual thunk + loading state boilerplate
// Before RTK Query (verbose):
// dispatch(fetchStart()) → fetch → dispatch(fetchSuccess(data)) or dispatch(fetchError(err))
// After RTK Query:
const { data: posts, isLoading, isError } = useGetPostsQuery();
if (isLoading) return <Spinner />;
if (isError)   return <ErrorMessage />;
return posts.map(post => <PostCard key={post.id} {...post} />);

// redux-saga for complex async (cancellation, debounce)
import { takeLatest, call, put, delay } from 'redux-saga/effects';
function* searchSaga(action) {
  yield delay(300);                        // debounce 300ms
  const results = yield call(api.search, action.payload);
  yield put(searchSuccess(results));
}
function* watchSearch() {
  yield takeLatest('search/query', searchSaga); // cancel previous if new one fires
}`,
  },

];
/* ═══════════════════════════════════════════════════════════
   POSTGRESQL — Open-Source Relational Database
═══════════════════════════════════════════════════════════ */
const POSTGRESQL_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════

  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'PostgreSQL — Full Mind Map, Learning Paths & Interview Core',
    answer: '6 sections: 1. Fundamentals · 2. Core Concepts · 3. Useful Daily Tools · 4. Advanced Features · 5. Performance & Security · 6. Ecosystem & Applications',
    tip: `PostgreSQL
│
├─ 1. Fundamentals
│   ├─ What it is       Open-source relational database · ACID compliant · extensible
│   ├─ Install          package managers · binaries · Docker images
│   ├─ Init Database    initdb · createdb · psql
│   ├─ Basic Commands   CREATE DATABASE · \\c · \\dt · \\d
│   └─ SQL Basics       SELECT · INSERT · UPDATE · DELETE
│
├─ 2. Core Concepts
│   ├─ Data Types       integer · varchar · text · boolean · date · jsonb
│   ├─ Tables           CREATE TABLE · constraints · primary/foreign keys
│   ├─ Indexes          CREATE INDEX · unique · composite · partial
│   ├─ Joins            INNER · LEFT · RIGHT · FULL
│   └─ Transactions     BEGIN · COMMIT · ROLLBACK
│
├─ 3. Useful Daily Tools
│   ├─ psql CLI         \\dt · \\d · \\l · \\q
│   ├─ Extensions       pgcrypto · PostGIS · uuid-ossp
│   ├─ Roles & Auth     CREATE ROLE · GRANT · REVOKE
│   ├─ Backup/Restore   pg_dump · pg_restore · psql < file.sql
│   └─ Monitoring       pg_stat_activity · EXPLAIN · ANALYZE
│
├─ 4. Advanced Features
│   ├─ JSON/JSONB       store/query JSON · operators · indexing
│   ├─ Window Functions ROW_NUMBER() · RANK() · PARTITION BY
│   ├─ CTEs             WITH queries · recursive queries
│   ├─ Partitioning     range · list · hash partitioned tables
│   └─ Replication      streaming replication · logical replication
│
├─ 5. Performance & Security
│   ├─ Query Tuning     EXPLAIN · ANALYZE · indexes · VACUUM
│   ├─ Optimization     normalization · denormalization · caching
│   ├─ Security         roles · SSL · row-level security (RLS)
│   └─ Integrity        constraints · triggers · foreign keys
│
└─ 6. Ecosystem & Applications
    ├─ ORMs             Sequelize · TypeORM · Prisma · Django ORM
    ├─ Tools            pgAdmin · DBeaver · DataGrip
    ├─ Frameworks       Node.js · Spring Boot · Rails integration
    ├─ Cloud Services   AWS RDS · Azure Database for PostgreSQL · GCP Cloud SQL
    └─ Real-world Use   web apps · analytics · geospatial (PostGIS) · financial systems

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Install → Init Database → Basic SQL → Tables & Data Types
Intermediate: Indexes → Joins → Transactions → Roles & Auth → Backup/Restore
Advanced:     JSON/JSONB → Window Functions → CTEs → Partitioning → Replication
Integration:  PostgreSQL + ORMs → Frameworks → Cloud services → Real-world applications

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SQL Basics:      SELECT · INSERT · UPDATE · DELETE · joins
Indexes:         improve query performance · unique vs composite vs partial
Transactions:    ACID properties · BEGIN · COMMIT · ROLLBACK
Advanced Queries:CTEs · window functions · recursive queries
JSON/JSONB:      flexible schema · operators · GIN indexing
Performance:     EXPLAIN ANALYZE · VACUUM · query tuning
Security:        roles · GRANT/REVOKE · row-level security (RLS)
Replication:     streaming vs logical · high availability
Ecosystem:       pgAdmin · ORMs (Prisma, TypeORM) · cloud services · PostGIS`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. FUNDAMENTALS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'PostgreSQL Fundamentals — what it is, installation, initialising a database, and basic psql commands?',
    answer: '**PostgreSQL** is an open-source, ACID-compliant object-relational database known for extensibility, standards compliance, and rich feature set (JSON, full-text search, PostGIS). **Install**: `apt install postgresql` (Linux), `brew install postgresql@16` (macOS), or `docker run postgres:16`. **Init**: `initdb -D /var/lib/postgresql/data` (creates cluster), `createdb mydb`, `psql mydb` (interactive shell). **Key psql meta-commands**: `\l` list databases, `\c dbname` connect, `\dt` list tables, `\d tablename` describe table, `\q` quit. **Basic SQL**: `CREATE DATABASE`, `CREATE TABLE`, `SELECT`, `INSERT INTO`, `UPDATE`, `DELETE FROM`, `DROP TABLE`.',
    tip: `-- Install via Docker (quickest for dev)
-- docker run --name pg -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:16

-- Connect with psql
-- psql -h localhost -U postgres -d mydb

-- psql meta-commands
\\l          -- list databases
\\c mydb     -- connect to database
\\dt         -- list tables in current schema
\\d users    -- describe table structure
\\di         -- list indexes
\\du         -- list roles/users
\\q          -- quit

-- Basic SQL
CREATE DATABASE shop;

CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  name       TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO users (email, name) VALUES ('alice@example.com', 'Alice');
INSERT INTO users (email, name) VALUES ('bob@example.com',   'Bob');

SELECT * FROM users;
SELECT id, name FROM users WHERE email LIKE '%@example.com' ORDER BY name;

UPDATE users SET name = 'Alice Smith' WHERE id = 1;

DELETE FROM users WHERE id = 2;

DROP TABLE IF EXISTS users;`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. CORE CONCEPTS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Core Concepts', difficulty: 'Beginner',
    question: 'PostgreSQL Core Concepts — data types, table constraints, indexes, joins, and transactions?',
    answer: '**Data types**: `INTEGER`/`BIGINT`, `VARCHAR(n)`/`TEXT`, `BOOLEAN`, `DATE`/`TIMESTAMPTZ`, `NUMERIC(p,s)`, `UUID`, `JSONB`, `ARRAY`. **Constraints**: `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY ... REFERENCES`, `CHECK`. **Indexes**: `CREATE INDEX` (B-tree default), `UNIQUE INDEX`, composite `(col1, col2)`, `PARTIAL` (with WHERE clause). Index speeds up reads but slows writes. **Joins**: `INNER JOIN` (only matching rows), `LEFT JOIN` (all left + matching right), `RIGHT JOIN`, `FULL OUTER JOIN`, `CROSS JOIN`. **Transactions**: `BEGIN` starts, `COMMIT` saves, `ROLLBACK` undoes. ACID: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent safety), Durability (survives crash).',
    tip: `-- Data types
CREATE TABLE products (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  price       NUMERIC(10, 2) CHECK (price >= 0),
  in_stock    BOOLEAN DEFAULT true,
  tags        TEXT[],
  metadata    JSONB,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Foreign key constraint
CREATE TABLE orders (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total      NUMERIC(10,2),
  status     VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending','paid','shipped'))
);

-- Indexes
CREATE INDEX idx_users_email  ON users(email);             -- single column
CREATE UNIQUE INDEX           ON users(lower(email));       -- expression index
CREATE INDEX idx_orders_user  ON orders(user_id, status);  -- composite
CREATE INDEX idx_active_users ON users(created_at) WHERE is_active = true; -- partial

-- Joins
SELECT u.name, o.total, o.status
FROM   users u
INNER  JOIN orders o ON u.id = o.user_id
WHERE  o.status = 'paid'
ORDER  BY o.total DESC;

-- LEFT JOIN (show users with or without orders)
SELECT u.name, COUNT(o.id) AS order_count
FROM   users u
LEFT   JOIN orders o ON u.id = o.user_id
GROUP  BY u.id, u.name;

-- Transactions
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2;
  -- if anything fails, ROLLBACK; otherwise:
COMMIT;`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. USEFUL DAILY TOOLS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Useful Daily Tools', difficulty: 'Beginner',
    question: 'PostgreSQL Daily Tools — psql CLI, extensions, roles & auth, backup/restore, and monitoring?',
    answer: '**psql**: interactive CLI — `\copy` for bulk load, `\timing` to measure query time, `\e` to open editor. **Extensions**: `uuid-ossp` (UUID generation), `pgcrypto` (encryption, `crypt()`), `PostGIS` (geospatial), `pg_trgm` (fuzzy search), `unaccent`. Enable with `CREATE EXTENSION`. **Roles & Auth**: `CREATE ROLE` / `CREATE USER` (user = role with LOGIN). `GRANT SELECT ON TABLE` / `REVOKE`. Roles can own schemas and objects. **Backup**: `pg_dump mydb > backup.sql` (text), `pg_dump -Fc mydb > backup.dump` (compressed). Restore: `psql mydb < backup.sql` or `pg_restore -d mydb backup.dump`. **Monitoring**: `pg_stat_activity` (active queries), `pg_stat_user_tables` (table stats), `EXPLAIN ANALYZE` (query plan + actual times).',
    tip: `-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS pg_trgm; -- fuzzy text search

SELECT uuid_generate_v4();       -- random UUID
SELECT crypt('password', gen_salt('bf')); -- bcrypt hash

-- Roles & Auth
CREATE ROLE readonly;
GRANT CONNECT ON DATABASE mydb TO readonly;
GRANT USAGE   ON SCHEMA public TO readonly;
GRANT SELECT  ON ALL TABLES IN SCHEMA public TO readonly;

CREATE USER alice WITH PASSWORD 'secret' IN ROLE readonly;

REVOKE INSERT, UPDATE, DELETE ON products FROM readonly;

-- Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY user_orders ON orders
  USING (user_id = current_setting('app.user_id')::int);

-- Backup & Restore
-- pg_dump -U postgres -Fc mydb > mydb.dump
-- pg_restore -U postgres -d mydb mydb.dump
-- pg_dump -U postgres mydb | gzip > mydb.sql.gz

-- Monitoring
SELECT pid, usename, application_name, state, query
FROM   pg_stat_activity
WHERE  state != 'idle';

-- Kill long-running query
SELECT pg_terminate_backend(pid)
FROM   pg_stat_activity
WHERE  state = 'active' AND query_start < NOW() - INTERVAL '5 minutes';

-- psql timing + copy
\\timing on
\\copy users FROM '/tmp/users.csv' CSV HEADER;`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. ADVANCED FEATURES
  // ══════════════════════════════════════════════════════════

  {
    category: 'Advanced Features', difficulty: 'Intermediate',
    question: 'PostgreSQL Advanced Features — JSONB, window functions, CTEs, partitioning, and replication?',
    answer: '**JSONB**: stores JSON in binary format — supports indexing with GIN, operators `->` (key), `->>` (text value), `#>` (path), `@>` (contains), `?` (key exists). Partial updates with `jsonb_set()`. **Window functions**: compute over a set of rows related to current row without collapsing them — `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LAG()`/`LEAD()`, `SUM() OVER (PARTITION BY ...)`. **CTEs**: `WITH name AS (SELECT...)` — improves readability; recursive CTEs for hierarchical data (`WITH RECURSIVE`). **Partitioning**: split a large table by range, list, or hash — queries automatically route to relevant partitions. **Replication**: streaming (physical, real-time copy) for HA; logical (row-level, selective) for cross-version or cross-platform sync.',
    tip: `-- JSONB operators
SELECT metadata->>'brand'          AS brand,   -- text value
       metadata->'specs'->'ram'    AS ram,      -- nested
       metadata @> '{"color":"red"}'::jsonb     -- contains
FROM   products
WHERE  metadata ? 'discount';                  -- key exists

-- GIN index for JSONB (fast @> and ? queries)
CREATE INDEX idx_products_meta ON products USING GIN (metadata);

-- Update nested JSONB field
UPDATE products
SET    metadata = jsonb_set(metadata, '{specs,ram}', '"16GB"')
WHERE  id = 1;

-- Window Functions
SELECT
  name, department, salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
  SUM(salary)  OVER (PARTITION BY department)                      AS dept_total,
  LAG(salary)  OVER (PARTITION BY department ORDER BY salary DESC) AS prev_salary
FROM employees;

-- CTE — readable multi-step query
WITH active_users AS (
  SELECT id, name FROM users WHERE last_login > NOW() - INTERVAL '30 days'
),
user_orders AS (
  SELECT user_id, COUNT(*) AS cnt FROM orders GROUP BY user_id
)
SELECT u.name, COALESCE(o.cnt, 0) AS order_count
FROM   active_users u
LEFT   JOIN user_orders o ON u.id = o.user_id;

-- Recursive CTE — org chart / tree
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, org.level + 1
  FROM   employees e JOIN org ON e.manager_id = org.id
)
SELECT level, name FROM org ORDER BY level;

-- Table Partitioning (range by date)
CREATE TABLE events (id BIGSERIAL, created_at DATE, data TEXT)
  PARTITION BY RANGE (created_at);
CREATE TABLE events_2024 PARTITION OF events FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
CREATE TABLE events_2025 PARTITION OF events FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. PERFORMANCE & SECURITY
  // ══════════════════════════════════════════════════════════

  {
    category: 'Performance & Security', difficulty: 'Intermediate',
    question: 'PostgreSQL Performance & Security — EXPLAIN ANALYZE, VACUUM, RLS, and query tuning?',
    answer: '**EXPLAIN ANALYZE**: shows the actual query plan + real execution times — look for `Seq Scan` on large tables (needs index), high `rows` estimates vs actual, nested loops on large datasets. **VACUUM**: reclaims storage from dead tuples (PostgreSQL MVCC leaves old row versions). `AUTOVACUUM` runs automatically but manual `VACUUM ANALYZE` helps after bulk loads. **Query tuning**: add indexes for WHERE/JOIN columns, avoid `SELECT *`, use `LIMIT`, avoid functions on indexed columns in WHERE (`WHERE lower(email)` needs expression index). **Row-Level Security (RLS)**: policies restrict which rows a role can see/modify — ideal for multi-tenant apps. **SSL**: enforce with `ssl = on` in `postgresql.conf`, `hostssl` entries in `pg_hba.conf`. **pg_hba.conf**: controls client authentication — method `scram-sha-256` is most secure.',
    tip: `-- EXPLAIN ANALYZE — read the query plan
EXPLAIN ANALYZE
SELECT u.name, o.total
FROM   users u JOIN orders o ON u.id = o.user_id
WHERE  o.status = 'paid';
-- Look for:
--   Seq Scan on large tables  → add index
--   Nested Loop (large rows)  → consider hash join hint or index
--   Actual rows vs estimated  → if far off, run ANALYZE to update stats

-- Force index usage (rarely needed — trust the planner)
SET enable_seqscan = off;

-- VACUUM & ANALYZE
VACUUM ANALYZE users;          -- reclaim dead tuples + update stats
VACUUM FULL users;             -- rewrite table (locks table — use with care)

-- Check table bloat
SELECT relname, n_dead_tup, n_live_tup
FROM   pg_stat_user_tables
ORDER  BY n_dead_tup DESC;

-- Row-Level Security — multi-tenant example
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON projects
  USING (tenant_id = current_setting('app.tenant_id')::int);

-- App sets tenant before queries:
-- SET app.tenant_id = '42';
-- SELECT * FROM projects; -- only returns tenant 42's rows

-- Connection pooling (PgBouncer)
-- postgresql.conf key settings:
-- max_connections = 200
-- shared_buffers = 256MB          (25% of RAM)
-- effective_cache_size = 768MB    (75% of RAM)
-- work_mem = 4MB                  (per sort/hash operation)
-- maintenance_work_mem = 64MB     (VACUUM, CREATE INDEX)`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECOSYSTEM & APPLICATIONS
  // ══════════════════════════════════════════════════════════

  {
    category: 'Ecosystem', difficulty: 'Beginner',
    question: 'PostgreSQL Ecosystem — ORMs (Prisma, TypeORM), GUI tools, cloud services, and real-world use cases?',
    answer: '**ORMs**: Prisma (type-safe, auto-generated client, migrations), TypeORM (decorators, entity-based), Sequelize (mature, promise-based), Django ORM (Python), ActiveRecord (Ruby). **GUI tools**: pgAdmin (web-based, official), DBeaver (universal, free), DataGrip (JetBrains, paid), TablePlus (macOS/Windows). **Cloud services**: AWS RDS for PostgreSQL, AWS Aurora PostgreSQL (serverless), Azure Database for PostgreSQL (flexible server), Google Cloud SQL, Supabase (Postgres + REST/realtime), Neon (serverless Postgres). **Real-world use cases**: web apps (user/session data), analytics (window functions + partitioning), geospatial apps (PostGIS), financial systems (ACID, numeric precision), time-series (TimescaleDB extension). **Connection pooling**: PgBouncer (transaction-mode pooling) or built-in pool in ORMs.',
    tip: `// Prisma — type-safe ORM
// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  orders    Order[]
  createdAt DateTime @default(now())
}
model Order {
  id     Int    @id @default(autoincrement())
  total  Float
  userId Int
  user   User   @relation(fields: [userId], references: [id])
}

// npx prisma migrate dev --name init
// npx prisma generate

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const users = await prisma.user.findMany({
  where:   { orders: { some: { total: { gt: 100 } } } },
  include: { orders: true },
  orderBy: { createdAt: 'desc' },
});

// TypeORM — decorator-based
@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ unique: true })  email: string;
  @OneToMany(() => Order, order => order.user) orders: Order[];
}
const users = await userRepo.find({ relations: ['orders'] });

// Supabase — Postgres as a service
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(URL, ANON_KEY);
const { data } = await supabase.from('users').select('*').eq('active', true);`,
  },

];
const JWT_CARDS           = [];
const REDIS_CARDS         = [];
const CICD_CARDS          = [];
const AI_ASSIST_CARDS     = [];
const THIRD_PARTY_CARDS   = [];
const ARCHITECTURE_CARDS  = [];

/* ═══════════════════════════════════════════════════════════
   NestJS
═══════════════════════════════════════════════════════════ */
const NESTJS_CARDS = [

  // ══════════════════════════════════════════════════════════
  // 0. OVERVIEW
  // ══════════════════════════════════════════════════════════
  {
    category: 'Overview', difficulty: 'Beginner',
    question: 'NestJS — Full Mind Map, Learning Paths & Interview Core',
    answer: '9 sections: 1. Fundamentals · 2. Core Building Blocks · 3. Request Pipeline · 4. DTO & Validation · 5. Data Access & Persistence · 6. Auth & Security · 7. Advanced Features · 8. Testing & Tooling · 9. Production & Scaling. **Request Lifecycle**: Request → Middleware → Guard → Interceptor(pre) → Pipe → Controller/Service → Interceptor(post) → Exception Filter → Response.',
    tip: `NestJS
│
├─ 1. Fundamentals
│   ├─ Philosophy      TypeScript-first · modular · DI container · Express/Fastify
│   ├─ Decorators      @Module · @Controller · @Injectable · @Get/@Post · reflect-metadata
│   ├─ Bootstrap       NestFactory.create() · app.listen() · global pipes/guards
│   └─ v11/v12         SWC default · Vitest · Express v5 · Native ESM (v12)
│
├─ 2. Core Building Blocks
│   ├─ Modules         imports · providers · controllers · exports · dynamic modules
│   ├─ DI Scopes       Singleton (default) · Request · Transient
│   ├─ Custom Providers useClass · useValue · useFactory · useExisting
│   └─ Controllers     @Param · @Query · @Body · @Headers routing
│
├─ 3. Request Pipeline (cross-cutting)
│   ├─ Guard           canActivate() · AuthGuard · RolesGuard · ExecutionContext
│   ├─ Interceptor     NestInterceptor · Observable/RxJS · logging · response transform
│   ├─ Pipe            ValidationPipe · ParseIntPipe · whitelist · transform
│   └─ Exception Filter @Catch() · HttpException · global filter
│
├─ 4. DTO & Validation — daily use
│   ├─ DTO Pattern     @IsEmail · @IsNotEmpty · @IsOptional · @IsEnum
│   ├─ class-transformer plainToInstance · @Exclude · @Expose · @Type
│   └─ Global Pipe     whitelist: true · forbidNonWhitelisted · transform: true
│
├─ 5. Data Access & Persistence
│   ├─ ORMs            Prisma (schema-first) · TypeORM (entities) · Mongoose · Drizzle
│   ├─ Repository      Service → Repository → DB · @InjectRepository
│   └─ Config          @nestjs/config · Joi/Zod validation · .env files
│
├─ 6. Auth & Security
│   ├─ JWT + Passport  @nestjs/passport · JwtStrategy · access/refresh token
│   ├─ RBAC            @Roles() decorator · custom guard · SetMetadata
│   └─ Security        Helmet · ThrottlerModule · bcrypt · CORS
│
├─ 7. Advanced Features
│   ├─ Microservices   TCP · Redis · gRPC + Protobuf · Kafka · RabbitMQ
│   ├─ GraphQL         @nestjs/graphql · @Resolver · code-first · subscriptions
│   ├─ WebSockets      @WebSocketGateway · @SubscribeMessage · Socket.io
│   ├─ Custom Decorators createParamDecorator · @User() · SetMetadata
│   └─ OpenAPI/Swagger @nestjs/swagger · @ApiProperty · auto-generated docs
│
├─ 8. Testing & Tooling
│   ├─ Unit Tests      @nestjs/testing · TestingModule · mock providers · Vitest/Jest
│   └─ E2E Tests       Supertest · e2e spec · SWC (fast)
│
└─ 9. Production & Scaling
    ├─ Performance     Fastify adapter · SWC compilation · standalone apps
    ├─ Deployment      Docker multi-stage · Kubernetes · AWS Lambda · PM2
    └─ Observability   OpenTelemetry · Pino/Winston · graceful shutdown

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUEST LIFECYCLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Request → Middleware → Guard → Interceptor(pre) → Pipe
        → Controller → Service → Interceptor(post) → Exception Filter → Response

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEARNING PATHS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Beginner:     Fundamentals → Modules → DI → Controllers → Services → DTOs
Intermediate: Guards/Pipes/Interceptors → Auth → TypeORM/Prisma → Config
Advanced:     Microservices → GraphQL → WebSockets → Custom Providers → Testing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INTERVIEW CORE KNOWLEDGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Modular architecture: feature modules, shared modules, dynamic modules
DI container:         constructor injection, scopes (Singleton/Request/Transient)
Request lifecycle:    Middleware → Guard → Interceptor(pre) → Pipe → Handler → Interceptor(post) → Filter
Guard vs Pipe vs Interceptor: auth/roles · validate/transform · wrap handler (AOP)
JWT auth flow:        Passport strategy · JwtStrategy · validate payload · @UseGuards(AuthGuard)
Prisma vs TypeORM:    schema-first vs entity decorators · type safety vs flexibility
DTO validation:       class-validator + ValidationPipe + class-transformer
Layered architecture: Controller → Service → Repository → Database`,
  },

  // ══════════════════════════════════════════════════════════
  // 1. FUNDAMENTALS
  // ══════════════════════════════════════════════════════════
  {
    category: 'Fundamentals', difficulty: 'Beginner',
    question: 'NestJS Fundamentals — philosophy, decorators, bootstrap, and v11/v12 highlights?',
    answer: '**NestJS** is a TypeScript-first Node.js framework for building scalable server-side apps. It wraps Express (or Fastify) and adds **Angular-inspired architecture**: modules, providers, DI container. **Decorators** drive everything: `@Module` groups related code, `@Controller` handles routing, `@Injectable` marks a class as a provider, `@Get/@Post` etc. bind HTTP methods. Decorators use `reflect-metadata` to store metadata on classes. **Bootstrap** in `main.ts`: `NestFactory.create(AppModule)` creates the app, then optionally set global pipes/guards/interceptors before `app.listen(3000)`. **v11**: SWC as the default compiler (10× faster), Vitest support, Express v5. **v12** (upcoming): Native ESM.',
    tip: `// main.ts — bootstrap
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,   // strip unknown props
    transform: true,   // auto-cast to DTO types
  }));
  app.enableCors({ origin: process.env.ALLOWED_ORIGINS });
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();

// Key decorators at a glance
// @Module({ imports, providers, controllers, exports })
// @Controller('users')       — route prefix
// @Injectable()              — DI-able provider
// @Get() @Post() @Put(':id') @Delete(':id')
// @Param('id') @Body() @Query() @Headers()`,
  },

  // ══════════════════════════════════════════════════════════
  // 2. CORE CONCEPTS
  // ══════════════════════════════════════════════════════════
  {
    category: 'Core Concepts', difficulty: 'Intermediate',
    question: 'NestJS Core Concepts — Modules, Dependency Injection, and Custom Providers?',
    answer: '**Modules** are the main organizational unit. Each feature gets its own module with `imports` (other modules), `providers` (services, repos), `controllers`, and `exports` (what other modules can use). **Shared modules** export providers for reuse. **Dynamic modules** are configured at import time via `forRoot()` / `forRootAsync()`. **Dependency Injection**: NestJS maintains a DI container. Providers are injected via constructor. Three scopes — **Singleton** (default, one instance per app), **Request** (new per HTTP request), **Transient** (new per injection). **Custom providers** let you register anything: `useValue` for constants, `useFactory` for async/config-based creation, `useClass` to swap implementations, `useExisting` to alias.',
    tip: `// Feature module
@Module({
  imports:     [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers:   [UsersService],
  exports:     [UsersService],  // share with other modules
})
export class UsersModule {}

// Constructor injection
@Injectable()
export class UsersService {
  constructor(
    private readonly repo: UsersRepository,
    private readonly config: ConfigService,
  ) {}
}

// Custom providers
const providers = [
  { provide: 'CONFIG',   useValue: { port: 3000 } },
  { provide: Logger,     useClass: WinstonLogger },
  { provide: 'DB_CONN',
    useFactory: async (cfg: ConfigService) => createConn(cfg),
    inject: [ConfigService] },
  { provide: CacheStore, useExisting: RedisService },
];`,
  },

  // ══════════════════════════════════════════════════════════
  // 3. DAILY TOOLS — Request pipeline + DTO validation
  // ══════════════════════════════════════════════════════════
  {
    category: 'Daily Tools', difficulty: 'Intermediate',
    question: 'NestJS Daily Tools — request pipeline (Guards, Pipes, Interceptors) and DTO validation?',
    answer: '**Request pipeline order**: Middleware → Guard → Interceptor(pre) → Pipe → Handler → Interceptor(post) → Exception Filter. **Guards** (`canActivate()`) decide if a request proceeds — used for auth and roles. **Pipes** validate and transform incoming data — `ValidationPipe` uses `class-validator` decorators on DTOs. **Interceptors** wrap the handler with `RxJS Observable` — used for logging, caching, response transformation. **Exception Filters** catch thrown errors and format the HTTP response. **DTOs** with `class-validator`: decorate properties with `@IsString`, `@IsEmail`, `@IsNotEmpty`, `@IsOptional`, `@IsEnum` etc. Global `ValidationPipe` with `whitelist: true` auto-strips unknown properties; `transform: true` auto-casts to DTO types.',
    tip: `// DTO with class-validator
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty() name:     string;
  @IsEmail()    email:    string;
  @MinLength(8) password: string;
  @IsOptional() role?:    string;
}
export class UserResponseDto {
  @Expose()  id:       number;
  @Expose()  email:    string;
  @Exclude() password: string;  // never sent
}

// Guard — authorization
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    return validateToken(req.headers.authorization);
  }
}

// Interceptor — AOP pattern (logging)
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => console.log('Duration:', Date.now() - start, 'ms'))
    );
  }
}`,
  },

  // ══════════════════════════════════════════════════════════
  // 4. ADVANCED FEATURES
  // ══════════════════════════════════════════════════════════
  {
    category: 'Advanced Features', difficulty: 'Advanced',
    question: 'NestJS Advanced Features — Microservices, GraphQL, WebSockets, custom decorators, and Swagger?',
    answer: '**Microservices**: NestJS supports TCP, Redis pub/sub, gRPC (Protobuf), Kafka, RabbitMQ. Use `ClientsModule.register()` to connect and `@MessagePattern()` to define handlers. **GraphQL**: Use `@nestjs/graphql` code-first — `@Resolver`, `@Query`, `@Mutation`, `@ObjectType`. Supports subscriptions. **WebSockets**: `@WebSocketGateway()` handles real-time connections; `@SubscribeMessage("event")` handles incoming messages. Works with Socket.io or native ws. **Custom decorators**: `createParamDecorator()` creates param extractors (e.g. `@CurrentUser()`). `SetMetadata()` attaches metadata for guards/interceptors to read via `Reflector`. **Swagger**: `@nestjs/swagger` auto-generates OpenAPI docs — `@ApiProperty`, `@ApiTags`, `@ApiOperation`, `@ApiBearerAuth`.',
    tip: `// Custom parameter decorator
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);

// Usage: @Get('me') getMe(@CurrentUser() user: User) {}

// GraphQL resolver — code-first
@Resolver(() => User)
export class UsersResolver {
  @Query(() => [User])
  users() { return this.usersService.findAll(); }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.create(input);
  }
}

// WebSocket Gateway
@WebSocketGateway({ cors: true })
export class EventsGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string) {
    this.server.emit('broadcast', data);
  }
}`,
  },

  // ══════════════════════════════════════════════════════════
  // 5. PERFORMANCE & SECURITY
  // ══════════════════════════════════════════════════════════
  {
    category: 'Performance & Security', difficulty: 'Advanced',
    question: 'NestJS Performance & Security — JWT auth, RBAC, security hardening, and testing?',
    answer: '**JWT + Passport**: Install `@nestjs/passport` + `passport-jwt`. Create `JwtStrategy` extending `PassportStrategy(Strategy)` that extracts the Bearer token, verifies it, and returns the user payload. Protect routes with `@UseGuards(AuthGuard("jwt"))`. **RBAC**: Create `@Roles()` via `SetMetadata("roles", roles)` and a `RolesGuard` that uses `Reflector` to read metadata and checks `request.user.roles`. **Security hardening**: Helmet (HTTP security headers), `@nestjs/throttler` (rate limiting), bcrypt (10+ rounds), `app.enableCors()`. **Testing**: `@nestjs/testing` creates a test module with real DI. Mock repo/service dependencies with `useValue`. E2E tests use `Supertest` against a fully bootstrapped app (Jest or Vitest).',
    tip: `// JWT Strategy
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:    process.env.JWT_SECRET,
    });
  }
  async validate(payload: { sub: number; email: string }) {
    return { id: payload.sub, email: payload.email };
  }
}

// RBAC — decorator + guard
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.get<Role[]>('roles', ctx.getHandler());
    if (!required) return true;
    const { user } = ctx.switchToHttp().getRequest();
    return required.some(r => user.roles.includes(r));
  }
}

// Unit test
const module = await Test.createTestingModule({
  providers: [UsersService,
    { provide: getRepositoryToken(User), useValue: { find: jest.fn() } }]
}).compile();`,
  },

  // ══════════════════════════════════════════════════════════
  // 6. ECOSYSTEM
  // ══════════════════════════════════════════════════════════
  {
    category: 'Ecosystem', difficulty: 'Advanced',
    question: 'NestJS Ecosystem — data access (Prisma vs TypeORM), config, production, and observability?',
    answer: '**Data access**: **Prisma** (schema-first: define models in `schema.prisma`, generates type-safe client, excellent DX) vs **TypeORM** (entity decorators + `@InjectRepository`, Active Record or Data Mapper pattern) vs **Mongoose** (MongoDB, schema validation) vs **Drizzle** (SQL-first, lightweight). **Config**: `@nestjs/config` loads `.env` files; validate with Joi or Zod via `validationSchema`. **Production — Fastify**: Swap the Express adapter for `FastifyAdapter` for ~2× throughput. **SWC**: Replaces `ts-jest` — 10× faster compile. **Docker**: Multi-stage build — compile in `node:alpine` builder stage, copy `dist/` to lean runtime image. **Deployment**: Kubernetes (pod scaling), AWS Lambda, PM2 for bare-metal. **Observability**: OpenTelemetry SDK for traces, Pino/Winston for structured JSON logging, `enableShutdownHooks()` for graceful SIGTERM handling.',
    tip: `// Prisma service
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() { await this.$connect(); }
}

// TypeORM — repository pattern
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
  ) {}
  findAll()            { return this.repo.find(); }
  findOne(id: number)  { return this.repo.findOneBy({ id }); }
}

// Config with validation
ConfigModule.forRoot({
  isGlobal: true,
  validationSchema: Joi.object({
    DATABASE_URL: Joi.string().required(),
    JWT_SECRET:   Joi.string().min(32).required(),
    PORT:         Joi.number().default(3000),
  }),
})

// Fastify for production performance
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter({ logger: true }),
);`,
  },
];

/* ═══════════════════════════════════════════════════════════
   SUBJECTS
═══════════════════════════════════════════════════════════ */
const SUBJECTS = {
  'DSA_JavaScript': DSA_JAVASCRIPT_CARDS,
  'Python':     PYTHON_CARDS,
  'C#':         CSHARP_CARDS,
  'C++':        CPP_CARDS,
  'SQL':        SQL_CARDS,
  'Database':   DATABASE_CARDS,
  'JavaScript': JS_CARDS,
  'Internet':   INTERNET_CARDS,
  'Linux':      LINUX_CARDS,
  'API':        API_CARDS,
  'NestJS':               NESTJS_CARDS,
  'Node.js':              NODEJS_CARDS,
  'Express.js':           EXPRESS_CARDS,
  'PostgreSQL':           POSTGRESQL_CARDS,
  'JWT authentication':   JWT_CARDS,
  'Redis':                REDIS_CARDS,
  'CI/CD':                CICD_CARDS,
  'AI-assist':            AI_ASSIST_CARDS,
  'Third-party generation': THIRD_PARTY_CARDS,
  'Architecture':         ARCHITECTURE_CARDS,
  'Html':                 HTML_CARDS,
  'CSS':            CSS_ONLY_CARDS,
  'npm':            NPM_CARDS,
  'Git/Github':     GIT_CARDS,
  'Tailwind CSS':   TAILWIND_CARDS,
  'React & SSR':    REACT_CARDS,
  'Redux':          REDUX_CARDS,
  'Testing & Containers': DEVOPS_CARDS,
  'Tricked Memory': TRICKED_CARDS,
};

/* ═══════════════════════════════════════════════════════════
   SUBJECT GROUPS  (controls menu bar sections)
═══════════════════════════════════════════════════════════ */
const SUBJECT_GROUPS = {
  'Cheat Sheet': ['Junior Dev Daily Essentials'],
  'Core':        ['DSA_JavaScript', 'Internet', 'Linux', 'Tricked Memory'],
  'Language':    ['Python', 'C#', 'C++', 'JavaScript'],
  'Frontend':    ['Html', 'CSS', 'npm', 'Git/Github', 'Tailwind CSS', 'React & SSR', 'Redux'],
  'Backend':     ['NestJS', 'Node.js', 'Express.js', 'SQL', 'Database', 'PostgreSQL', 'API', 'JWT authentication', 'Redis', 'Testing & Containers', 'CI/CD', 'AI-assist', 'Third-party generation', 'Architecture'],
  'DevOps':      [],
};

// Subjects that open a separate page instead of loading flash cards
const LINK_SUBJECTS = {
  'Junior Dev Daily Essentials': 'cheatsheet.html',
};

const GROUP_COLORS = {
  'Cheat Sheet': '#10b981',
  'Core':        '#f97316',
  'Language':    '#ec4899',
  'Frontend':    '#61dafb',
  'Backend':     '#6366f1',
  'DevOps':      '#f43f5e',
};

/* ═══════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════ */
const SUBJECT_COLORS = {
  'DSA_JavaScript': '#f97316',
  'Python':     '#3b82f6',
  'C#':         '#8b5cf6',
  'C++':        '#00599c',
  'SQL':        '#06b6d4',
  'Database':   '#ec4899',
  'JavaScript': '#f59e0b',
  'Internet':   '#10b981',
  'Linux':      '#f97316',
  'API':        '#6366f1',
  'NestJS':     '#e0234e',
  'Node.js':    '#68a063',
  'Express.js': '#595959',
  'Html':           '#e34c26',
  'CSS':            '#264de4',
  'npm':            '#cb3837',
  'Git/Github':     '#f05032',
  'Tailwind CSS':   '#38bdf8',
  'React & SSR':    '#61dafb',
  'Redux':          '#764abc',
  'PostgreSQL':           '#336791',
  'JWT authentication':   '#d63aff',
  'Redis':                '#dc382d',
  'Testing & Containers': '#14b8a6',
  'CI/CD':                '#f59e0b',
  'AI-assist':            '#10b981',
  'Third-party generation': '#8b5cf6',
  'Architecture':         '#64748b',
  'Tricked Memory': '#f43f5e',
};

const CATEGORY_COLORS = {
  // HTML
  'Advanced Features':      '#f59e0b',
  'Performance & Security': '#0ea5e9',
  // DSA_JavaScript — overview & new sections
  'Overview':          '#94a3b8',
  'Fundamentals':      '#ef4444',
  'Linked Lists':      '#f59e0b',
  'Stacks & Queues':   '#fb923c',
  'Heaps':             '#84cc16',
  'Sorting':           '#3b82f6',
  'Strategy Patterns': '#8b5cf6',
  'Advanced Topics':   '#7c3aed',
  'Ecosystem':         '#f43f5e',
  // DSA — new topic-based categories
  'Arrays':              '#f97316',
  'Strings':             '#10b981',
  'HashMap':             '#3b82f6',
  'Searching':           '#8b5cf6',
  'Recursion':           '#f59e0b',
  'Trees':               '#14b8a6',
  'Graph':               '#6366f1',
  'Dynamic Programming': '#ec4899',
  'Patterns':            '#c2410c',
  // Legacy DSA (kept for any old references)
  'Complexity':      '#f97316',
  'Data Structures': '#fb923c',
  'Algorithms':      '#ea580c',
  'Hashing':         '#fbbf24',
  'Interview':       '#d97706',
  // Database
  'Core Concepts':      '#ec4899',
  'Database Types':     '#f472b6',
  'Building for Scale': '#be185d',
  'Relational DB':      '#db2777',
  'NoSQL':              '#9d174d',
  'DB Design & Perf':   '#831843',
  'PostgreSQL':         '#0369a1',
  // SQL
  'Core':                '#38bdf8',
  'SQL Basics':          '#06b6d4',
  'DDL':                 '#22d3ee',
  'DML':                 '#0ea5e9',
  'DQL':                 '#38bdf8',
  'DCL':                 '#7dd3fc',
  'Joins & Aggregation': '#0891b2',
  'Advanced SQL':        '#164e63',
  'GROUP BY Patterns':   '#0284c7',
  'SQL Patterns':        '#0369a1',
  // C#
  'C# Basics':          '#8b5cf6',
  'OOP & Patterns':     '#a78bfa',
  'LINQ & Async':       '#7c3aed',
  'Core C#':            '#a78bfa',
  'Core C++':           '#0080cc',
  'Modern C++':         '#0066aa',
  'Daily Tools':        '#004c88',
  'DSA in C++':         '#003366',
  'Advanced C++':       '#002244',
  'Modern C#':          '#7c3aed',
  'Useful Daily Tools': '#6d28d9',
  'DSA in C#':          '#5b21b6',
  'Advanced Topics':    '#4c1d95',
  // Python
  'Core Python': '#3b82f6',
  'OOP & Design': '#60a5fa',
  'Ecosystem':   '#1d4ed8',
  // JavaScript
  'JavaScript Core': '#f59e0b',
  'Async JavaScript':'#3b82f6',
  'DOM & Browser':   '#10b981',
  'JS Functions':    '#f97316',
  'JS Patterns':     '#a855f7',
  'CSS':             '#ec4899',
  'Performance':     '#8b5cf6',
  'Security':        '#ef4444',
  // Testing & Containers
  'Testing':    '#14b8a6',
  'Docker':     '#0891b2',
  'Kubernetes': '#0e7490',
  // React & SSR
  'Overview':     '#22d3ee',
  'Fundamentals': '#61dafb',
  'Lifecycle':    '#38bdf8',
  'Hooks':        '#0ea5e9',
  'Data Flow':    '#0369a1',
  'Performance':  '#7c3aed',
  'Ecosystem':    '#a855f7',
  'Advanced':     '#7e22ce',
  'Interview':    '#be185d',
  // Express.js
  'Core Express': '#595959',
  'Async & Data': '#404040',
  // Node.js
  'Node.js Basics':           '#68a063',
  'Async Patterns':           '#4ade80',
  'HTTP & Express':           '#15803d',
  'Data & Storage':           '#16a34a',
  'Performance & Production': '#14532d',
  // API
  'JSON Basics':       '#6366f1',
  'REST Fundamentals': '#818cf8',
  'REST Design':       '#4f46e5',
  'API in Practice':   '#3730a3',
  'JWT':               '#7c3aed',
  'OAuth2':            '#5b21b6',
  // Linux
  'Linux Basics':        '#f97316',
  'Files & Permissions': '#fb923c',
  'Processes & System':  '#ea580c',
  'Networking & SSH':    '#c2410c',
  'Shell Scripting':     '#9a3412',
  // Internet
  'How Internet Works': '#10b981',
  'HTTP & Web':         '#059669',
  'DNS & Domains':      '#34d399',
  'Browsers':           '#065f46',
  // Tricked Memory
  'SQL':                '#f43f5e',
};

const DIFFICULTY_CONFIG = {
  'Beginner':     { bg: '#10b981' },
  'Intermediate': { bg: '#f59e0b' },
  'Advanced':     { bg: '#ef4444' },
};

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
const state = {
  activeSubject: 'DSA_JavaScript',
  activeFilter:  'All',
  currentIndex:  0,
  isFlipped:     false,
  known:         new Set(), // stores "Subject|index" strings
  deck:          [],
};

/* ═══════════════════════════════════════════════════════════
   DOM REFS
═══════════════════════════════════════════════════════════ */
const cardEl         = document.getElementById('card');
const cardImageEl    = document.getElementById('cardImage');
const questionText   = document.getElementById('questionText');
const answerText     = document.getElementById('answerText');
const tipBlock       = document.getElementById('tipBlock');
const tipCode        = document.getElementById('tipCode');
const progressBar    = document.getElementById('progressBar');
const progressInd    = document.getElementById('progressIndicator');
const statsBadge     = document.getElementById('statsBadge');
const catBadgeFront  = document.getElementById('catBadgeFront');
const diffBadgeFront = document.getElementById('diffBadgeFront');
const catBadgeBack   = document.getElementById('catBadgeBack');
const diffBadgeBack  = document.getElementById('diffBadgeBack');
const knownBtnFront  = document.getElementById('knownBtnFront');
const knownBtnBack   = document.getElementById('knownBtnBack');

/* ═══════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════ */
function formatText(str) {
  return str.replace(/`([^`\n]+)`/g, '<code>$1</code>');
}

function cardId(card) {
  const idx = SUBJECTS[state.activeSubject].indexOf(card);
  return `${state.activeSubject}|${idx}`;
}

/* ═══════════════════════════════════════════════════════════
   BUILD SUBJECT MENU
═══════════════════════════════════════════════════════════ */
function buildSubjectMenu() {
  const nav = document.getElementById('subjectMenu');
  nav.innerHTML = '';

  Object.entries(SUBJECT_GROUPS).forEach(([groupName, subjects], groupIdx) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'subject-group';

    // Group label bar
    const label = document.createElement('span');
    label.className = 'group-label';
    label.textContent = groupName;
    label.style.color = GROUP_COLORS[groupName] || '#94a3b8';
    label.style.borderColor = GROUP_COLORS[groupName] || '#94a3b8';
    groupEl.appendChild(label);

    // Subject buttons for this group
    const btnRow = document.createElement('div');
    btnRow.className = 'group-btns';

    subjects.forEach(subject => {
      // Link subjects open a separate page
      if (LINK_SUBJECTS[subject]) {
        const a = document.createElement('a');
        a.className  = 'subject-btn';
        a.textContent = subject;
        a.href       = LINK_SUBJECTS[subject];
        a.target     = '_blank';
        a.rel        = 'noopener';
        const color  = GROUP_COLORS[groupName] || '#10b981';
        a.style.textDecoration = 'none';
        a.addEventListener('mouseenter', () => { a.style.borderColor = color; a.style.color = color; });
        a.addEventListener('mouseleave', () => { a.style.borderColor = ''; a.style.color = ''; });
        btnRow.appendChild(a);
        return;
      }

      const btn = document.createElement('button');
      btn.className   = 'subject-btn' + (subject === state.activeSubject ? ' active' : '');
      btn.textContent = subject;

      const color = SUBJECT_COLORS[subject] || '#64748b';
      if (subject === state.activeSubject) {
        btn.style.background = color;
        btn.style.color      = '#0a0e1a';
        btn.style.borderColor = color;
      } else {
        btn.addEventListener('mouseenter', () => { btn.style.borderColor = color; btn.style.color = color; });
        btn.addEventListener('mouseleave', () => { btn.style.borderColor = ''; btn.style.color = ''; });
      }

      btn.addEventListener('click', () => {
        if (subject === state.activeSubject) return;
        state.activeSubject = subject;
        state.activeFilter  = 'All';
        state.currentIndex  = 0;
        state.isFlipped     = false;
        buildDeck();
        buildSubjectMenu();
        buildFilterBar();
        render();
      });

      btnRow.appendChild(btn);
    });

    groupEl.appendChild(btnRow);
    nav.appendChild(groupEl);

    // Divider between groups (not after last)
    if (groupIdx < Object.keys(SUBJECT_GROUPS).length - 1) {
      const divider = document.createElement('div');
      divider.className = 'group-divider';
      nav.appendChild(divider);
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   BUILD CATEGORY FILTER BAR
═══════════════════════════════════════════════════════════ */
function buildFilterBar() {
  const nav = document.getElementById('categoryFilter');
  nav.innerHTML = '';

  const subjectCards = SUBJECTS[state.activeSubject] || [];
  const cats = ['All', ...new Set(subjectCards.map(c => c.category).filter(Boolean))];

  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className   = 'filter-btn' + (cat === state.activeFilter ? ' active' : '');
    btn.textContent = cat;

    const color = cat === 'All'
      ? SUBJECT_COLORS[state.activeSubject]
      : (CATEGORY_COLORS[cat] || SUBJECT_COLORS[state.activeSubject]);

    if (state.activeFilter === cat) {
      btn.style.background = color;
      btn.style.color      = '#0a0e1a';
    }

    btn.addEventListener('click', () => {
      state.activeFilter = cat;
      state.currentIndex = 0;
      state.isFlipped    = false;
      buildDeck();
      buildFilterBar();
      render();
    });

    nav.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════════════════════
   BUILD DECK
═══════════════════════════════════════════════════════════ */
function buildDeck() {
  const all = SUBJECTS[state.activeSubject] || [];
  state.deck = state.activeFilter === 'All'
    ? [...all]
    : all.filter(c => c.category === state.activeFilter);
}

/* ═══════════════════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════════════════ */
function render() {
  if (state.deck.length === 0) return;

  const card = state.deck[state.currentIndex];
  const id   = cardId(card);

  // Text
  // Image card support
  if (card.image) {
    cardImageEl.src           = card.image;
    cardImageEl.style.display = 'block';
    questionText.style.display = 'none';
  } else {
    cardImageEl.style.display  = 'none';
    questionText.style.display = '';
    questionText.innerHTML     = formatText(card.question);
  }
  answerText.innerHTML   = formatText(card.answer);

  // Code tip block
  if (card.tip) {
    tipCode.textContent    = card.tip;
    tipBlock.style.display = 'block';
  } else {
    tipBlock.style.display = 'none';
  }

  // Flip
  cardEl.classList.toggle('flipped', state.isFlipped);

  // Progress
  const pct = ((state.currentIndex + 1) / state.deck.length) * 100;
  progressBar.style.width = pct + '%';
  progressInd.textContent = `${state.currentIndex + 1} of ${state.deck.length}`;

  // Stats
  const knownCount = state.deck.filter(c => state.known.has(cardId(c))).length;
  statsBadge.textContent = `${knownCount} / ${state.deck.length} known`;

  // Category badges
  const catColor = CATEGORY_COLORS[card.category] || SUBJECT_COLORS[state.activeSubject] || '#94a3b8';
  [catBadgeFront, catBadgeBack].forEach(b => {
    b.textContent        = card.category;
    b.style.background   = catColor + '22';
    b.style.color        = catColor;
    b.style.border       = `1px solid ${catColor}55`;
  });

  // Difficulty badges
  const diffColor = (DIFFICULTY_CONFIG[card.difficulty] || { bg: '#64748b' }).bg;
  [diffBadgeFront, diffBadgeBack].forEach(b => {
    b.textContent        = card.difficulty;
    b.style.background   = diffColor + '33';
    b.style.color        = diffColor;
    b.style.border       = `1px solid ${diffColor}66`;
  });

  // Known buttons
  const isKnown = state.known.has(id);
  [knownBtnFront, knownBtnBack].forEach(btn => {
    btn.textContent = isKnown ? '✓ Known!' : '✓ Got it';
    btn.classList.toggle('is-known', isKnown);
  });

  // Disable Prev / Next at boundaries
  document.querySelectorAll('.nav-buttons button:first-child').forEach(btn => {
    btn.disabled = state.currentIndex === 0;
  });
  document.querySelectorAll('.nav-buttons button:last-child').forEach(btn => {
    btn.disabled = state.currentIndex === state.deck.length - 1;
  });
}

/* ═══════════════════════════════════════════════════════════
   ACTIONS
═══════════════════════════════════════════════════════════ */
function navigate(direction) {
  const next = state.currentIndex + direction;
  if (next < 0 || next >= state.deck.length) return;
  state.currentIndex = next;
  state.isFlipped    = false;
  render();
}

function flip(show) {
  state.isFlipped = show;
  render();
}

function toggleKnown() {
  const id = cardId(state.deck[state.currentIndex]);
  if (state.known.has(id)) state.known.delete(id);
  else                     state.known.add(id);
  render();
}

function shuffleDeck() {
  for (let i = state.deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
  }
  state.currentIndex = 0;
  state.isFlipped    = false;
  render();
}

function resetAll() {
  state.known.clear();
  buildDeck();
  state.currentIndex = 0;
  state.isFlipped    = false;
  render();
}

/* ═══════════════════════════════════════════════════════════
   KEYBOARD
═══════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  switch (e.key) {
    case 'ArrowLeft':  navigate(-1); break;
    case 'ArrowRight': navigate(1);  break;
    case ' ':
      e.preventDefault();
      flip(!state.isFlipped);
      break;
    case 'k': case 'K': toggleKnown(); break;
  }
});

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
buildDeck();
buildSubjectMenu();
buildFilterBar();
render();
