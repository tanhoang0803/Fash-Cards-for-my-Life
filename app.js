/* ═══════════════════════════════════════════════════════════
   DSA — Data Structures & Algorithms  (14 cards)
═══════════════════════════════════════════════════════════ */
const DSA_CARDS = [
  {
    category: 'Complexity', difficulty: 'Beginner',
    question: 'What is Big O notation?',
    answer: 'Big O describes the worst-case growth rate of an algorithm\'s time or space as input size n grows. Constants and low-order terms are dropped — only the dominant term matters. It lets you compare algorithms independently of hardware and predict how they scale.',
    tip: `O(1)       — hash lookup, array index access
O(log n)   — binary search, balanced BST
O(n)       — linear scan
O(n log n) — merge sort, heap sort
O(n²)      — bubble/insertion sort (nested loops)
O(2ⁿ)      — brute-force subset enumeration`
  },
  {
    category: 'Data Structures', difficulty: 'Beginner',
    question: 'What is the difference between an Array and a Linked List?',
    answer: 'Array: contiguous memory, O(1) random access by index, O(n) insert/delete at arbitrary position (elements shift). Linked List: nodes connected by pointers, O(n) access by index, O(1) insert/delete at a known node. Choose arrays for fast reads; linked lists for frequent head/middle insertions.',
    tip: `// Array — O(1) index access
const arr = [10, 20, 30];
arr[1];               // 20 — instant
arr.splice(1, 0, 99); // O(n) — shifts all elements

// Singly Linked List node
class Node {
  constructor(val) {
    this.val  = val;
    this.next = null; // pointer to next node
  }
}`
  },
  {
    category: 'Data Structures', difficulty: 'Beginner',
    question: 'What is a Stack and what are its real-world use cases?',
    answer: 'A Stack is LIFO (Last-In, First-Out). Core operations — push, pop, peek — are all O(1). Used for: call stack / recursion tracking, undo/redo in editors, balanced brackets validation, DFS graph traversal, expression parsing (postfix evaluation).',
    tip: `class Stack {
  #data = [];
  push(val)  { this.#data.push(val); }
  pop()      { return this.#data.pop(); }
  peek()     { return this.#data.at(-1); }
  isEmpty()  { return this.#data.length === 0; }
}

// Classic: validate balanced brackets
function isValid(s) {
  const st = [], map = { ')': '(', ']': '[', '}': '{' };
  for (const c of s) {
    if ('([{'.includes(c)) st.push(c);
    else if (st.pop() !== map[c]) return false;
  }
  return st.length === 0;
}`
  },
  {
    category: 'Data Structures', difficulty: 'Beginner',
    question: 'What is a Queue and when do you use it?',
    answer: 'A Queue is FIFO (First-In, First-Out). Enqueue adds to the back; dequeue removes from the front. O(1) for both with a proper implementation. Used for: BFS graph traversal, task/job schedulers, message brokers (Kafka, RabbitMQ), rate-limiting request buffers, print queues.',
    tip: `// Efficient O(1) Queue using two stacks
class Queue {
  #in = []; #out = [];
  enqueue(v) { this.#in.push(v); }
  dequeue() {
    if (!this.#out.length)
      while (this.#in.length)
        this.#out.push(this.#in.pop());
    return this.#out.pop();
  }
  peek()    { return this.#out.at(-1) ?? this.#in[0]; }
  isEmpty() { return !this.#in.length && !this.#out.length; }
}`
  },
  {
    category: 'Data Structures', difficulty: 'Intermediate',
    question: 'What is a Hash Table and how does it handle collisions?',
    answer: 'A Hash Table maps keys to values via a hash function that computes an array index. Average O(1) for get/set/delete. Collisions (two keys → same index) are resolved by: Chaining (each slot holds a linked list of entries) or Open Addressing (probe for next empty slot). A load factor above ~0.7 triggers resizing (rehashing).',
    tip: `// Frequency map — quintessential hash table use
function wordFreq(text) {
  const freq = new Map();
  for (const w of text.split(' '))
    freq.set(w, (freq.get(w) ?? 0) + 1);
  return freq;
}

// Two Sum — O(n) using hash map
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
}`
  },
  {
    category: 'Data Structures', difficulty: 'Intermediate',
    question: 'What is a Binary Search Tree (BST)?',
    answer: 'A BST is a binary tree where: left child < parent < right child for every node. Average O(log n) for search, insert, delete on a balanced tree; worst case O(n) if unbalanced (e.g. inserting sorted data). Self-balancing variants (AVL, Red-Black) guarantee O(log n). In-order traversal always yields sorted output.',
    tip: `function insert(root, val) {
  if (!root) return { val, left: null, right: null };
  if (val < root.val) root.left  = insert(root.left,  val);
  else               root.right = insert(root.right, val);
  return root;
}

// In-order => sorted sequence
function inOrder(node, res = []) {
  if (!node) return res;
  inOrder(node.left, res);
  res.push(node.val);
  inOrder(node.right, res);
  return res;
}`
  },
  {
    category: 'Algorithms', difficulty: 'Intermediate',
    question: 'How does Binary Search work?',
    answer: 'Binary Search finds a target in a SORTED array in O(log n) by halving the search space each step: compare target to the middle element — equal → found; less → search left half; greater → search right half. For n = 1,000,000 it takes ≤ 20 comparisons. The array MUST be sorted first.',
    tip: `function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;   // fast floor divide
    if      (arr[mid] === target) return mid;
    else if (arr[mid] < target)  lo = mid + 1;
    else                         hi = mid - 1;
  }
  return -1; // not found
}

// After loop: lo = correct insertion index
// Useful for: first/last occurrence,
//             "search on answer" problems`
  },
  {
    category: 'Algorithms', difficulty: 'Intermediate',
    question: 'What is the difference between BFS and DFS?',
    answer: 'BFS (Breadth-First Search) uses a Queue and explores nodes level by level — guarantees shortest path in an unweighted graph. DFS (Depth-First Search) uses a Stack/recursion and goes as deep as possible before backtracking. BFS: shortest path, level-order traversal. DFS: cycle detection, topological sort, connected components, maze solving.',
    tip: `// BFS — level-by-level, shortest path
function bfs(graph, start) {
  const visited = new Set([start]);
  const queue   = [start];
  while (queue.length) {
    const node = queue.shift();
    for (const nb of graph[node])
      if (!visited.has(nb)) { visited.add(nb); queue.push(nb); }
  }
}

// DFS — depth-first, recursive
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  for (const nb of graph[node]) dfs(graph, nb, visited);
}`
  },
  {
    category: 'Algorithms', difficulty: 'Intermediate',
    question: 'What is Merge Sort and what are its trade-offs?',
    answer: 'Merge Sort uses divide-and-conquer: split array in half recursively, sort each half, merge. Time: O(n log n) guaranteed. Space: O(n) extra. Stable sort (preserves relative order of equal elements). Preferred for linked lists and when stability matters. Quick Sort is usually faster in practice (better cache locality) but O(n²) worst case.',
    tip: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  const L   = mergeSort(arr.slice(0, mid));
  const R   = mergeSort(arr.slice(mid));
  return merge(L, R);
}
function merge(L, R) {
  const out = []; let i = 0, j = 0;
  while (i < L.length && j < R.length)
    out.push(L[i] <= R[j] ? L[i++] : R[j++]);
  return out.concat(L.slice(i), R.slice(j));
}
// Time: O(n log n) all cases | Space: O(n)`
  },
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'What is the Two Pointers technique?',
    answer: 'Two Pointers uses two indices moving through a sorted array or string — usually from both ends toward each other, or both moving forward at different speeds. Reduces O(n²) brute-force pair checks to O(n). Common problems: pair sum in sorted array, palindrome check, remove duplicates, container with most water, three-sum.',
    tip: `// Pair with target sum — O(n) on sorted array
function hasPairSum(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    const sum = arr[lo] + arr[hi];
    if      (sum === target) return true;
    else if (sum <  target) lo++;  // need bigger
    else                    hi--;  // need smaller
  }
  return false;
}

// Palindrome check — O(n)
const isPalin = s => {
  let l = 0, r = s.length - 1;
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
};`
  },
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'What is the Sliding Window technique?',
    answer: 'Sliding Window maintains a contiguous subarray/substring as a "window" that expands or shrinks as it moves through the input. Avoids recomputing the whole window each step — O(n) instead of O(n²). Common problems: max sum subarray of size k, longest substring without repeating characters, minimum window substring, count anagrams in string.',
    tip: `// Longest substring without repeating chars — O(n)
function maxUniqueLen(s) {
  const seen = new Map();
  let max = 0, left = 0;
  for (let r = 0; r < s.length; r++) {
    if (seen.has(s[r]) && seen.get(s[r]) >= left)
      left = seen.get(s[r]) + 1;  // shrink window
    seen.set(s[r], r);
    max = Math.max(max, r - left + 1);
  }
  return max;
}
// "abcabcbb" => 3 ("abc")`
  },
  {
    category: 'Patterns', difficulty: 'Intermediate',
    question: 'What is Dynamic Programming (DP)?',
    answer: 'DP solves problems with overlapping sub-problems and optimal substructure by caching intermediate results. Top-down (memoization): recursion + cache — easy to write, computes only needed states. Bottom-up (tabulation): fill a table iteratively from base cases — no recursion overhead. Common DP: Fibonacci, coin change, longest common subsequence, 0/1 knapsack, edit distance.',
    tip: `// Memoization — top-down O(n)
const memo = {};
function fib(n) {
  if (n <= 1) return n;
  return memo[n] ??= fib(n - 1) + fib(n - 2);
}

// Coin change — min coins (bottom-up tabulation)
function minCoins(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++)
    for (const c of coins)
      if (c <= i) dp[i] = Math.min(dp[i], dp[i - c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}`
  },
  {
    category: 'Data Structures', difficulty: 'Advanced',
    question: 'What is a Heap (Priority Queue) and what is it used for?',
    answer: 'A Heap is a complete binary tree with the heap property. Min-Heap: parent ≤ children (root = minimum). Max-Heap: parent ≥ children (root = maximum). Insert and extract-min/max are O(log n); peek is O(1). Stored as an array (node i has children at 2i+1 and 2i+2). Used for: priority queues, Dijkstra\'s algorithm, heap sort, top-K elements.',
    tip: `// Array representation of a Min-Heap:
// index:  0   1   2   3   4   5
// value: [1,  3,  2,  7,  4,  5]
// Node i: parent = floor((i-1)/2)
//         left   = 2*i + 1
//         right  = 2*i + 2

// Top-K largest numbers (min-heap of size k):
// If heap.size < k  → push element
// Else if elem > heap.min → pop + push
// Result: k largest in O(n log k) time`
  },
  {
    category: 'Algorithms', difficulty: 'Advanced',
    question: "What is Dijkstra's algorithm and when does it fail?",
    answer: "Dijkstra's finds shortest paths from a source node to all others in a weighted graph with non-negative weights. It greedily picks the unvisited node with the smallest known distance, then relaxes its neighbours. Time: O((V + E) log V) with a min-heap. Fails with negative edge weights — use Bellman-Ford O(VE) instead.",
    tip: `function dijkstra(graph, src) {
  // graph: { node: [[neighbor, weight], ...] }
  const dist = {}; const visited = new Set();
  dist[src] = 0;
  const pq = [[0, src]]; // [cost, node]

  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]); // use real min-heap
    const [cost, node] = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    for (const [nb, w] of graph[node] ?? []) {
      const d = cost + w;
      if (d < (dist[nb] ?? Infinity)) {
        dist[nb] = d;
        pq.push([d, nb]);
      }
    }
  }
  return dist;
}`
  },

  // ── Hashing ──────────────────────────────────────────────
  {
    category: 'Hashing', difficulty: 'Beginner',
    question: 'How does a Hash Table work internally?',
    answer: 'A hash table maps keys to values via a hash function that converts any key into an array index. Ideal case: O(1) average for insert, lookup, delete. The hash function must be deterministic and distribute keys uniformly. When two keys map to the same index (collision), the table resolves it via chaining (linked list per bucket) or open addressing (probe for next empty slot). Load factor = items / buckets; rehash when it exceeds ~0.7.',
    tip: `// How hashing works step by step:
// key "alice"
//   → hash("alice") = 92847263
//   → 92847263 % 16 (bucket count) = 7
//   → store value at bucket[7]

// Chaining collision resolution:
// bucket[7] → [("alice", 25)] → [("charlie", 30)] → null

// Open addressing (linear probe):
// bucket[7] taken → try 8 → try 9 → ...

// Load factor & rehashing
const map = new Map();         // JS built-in hash map
map.set('alice', 25);
map.get('alice');              // O(1)
map.has('alice');              // O(1)
map.delete('alice');           // O(1)
map.size;                      // number of entries

// Object as hash map (string keys only)
const freq = {};
for (const ch of 'hello') freq[ch] = (freq[ch] || 0) + 1;
// { h:1, e:1, l:2, o:1 }`
  },
  {
    category: 'Hashing', difficulty: 'Intermediate',
    question: 'What are the most common hashing patterns for solving array/string problems?',
    answer: 'Three core patterns: (1) Frequency Map — count occurrences of each element in O(n), (2) Seen Set — detect duplicates or check membership in O(1), (3) Prefix-Sum + Hash Map — find subarray with a target sum in O(n). These patterns solve dozens of interview problems in linear time that naive solutions would do in O(n²).',
    tip: `// 1. Frequency Map — count occurrences
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([n]) => n);
}

// 2. Seen Set — first duplicate
function findDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return n;
    seen.add(n);
  }
}

// 3. Prefix Sum + Map — subarray sum equals k
function subarraySum(nums, k) {
  const prefixCount = new Map([[0, 1]]);
  let sum = 0, count = 0;
  for (const n of nums) {
    sum += n;
    count += prefixCount.get(sum - k) || 0;
    prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
  }
  return count;
}`
  },
  {
    category: 'Hashing', difficulty: 'Intermediate',
    question: 'How do you use hashing to group and match patterns?',
    answer: 'Hash maps excel at grouping items by a computed key — the canonical form of the data. Group anagrams by sorted characters; group by first letter; detect isomorphic strings by mapping structure. The key insight: transform each item into a canonical representation and use that as the map key.',
    tip: `// Group Anagrams — canonical key = sorted chars
function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
}
// ["eat","tea","tan","ate","nat","bat"]
// → [["eat","tea","ate"],["tan","nat"],["bat"]]

// Two Sum — O(n) with hash map
function twoSum(nums, target) {
  const seen = new Map();   // value → index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
}

// Isomorphic Strings — map char-to-char in both directions
function isIsomorphic(s, t) {
  const st = new Map(), ts = new Map();
  for (let i = 0; i < s.length; i++) {
    if (st.get(s[i]) !== t[i] || ts.get(t[i]) !== s[i])
      if (st.has(s[i]) || ts.has(t[i])) return false;
    st.set(s[i], t[i]);
    ts.set(t[i], s[i]);
  }
  return true;
}`
  },

  // ── Recursion ─────────────────────────────────────────────
  {
    category: 'Recursion', difficulty: 'Beginner',
    question: 'What is recursion and what are the two required parts?',
    answer: 'Recursion is when a function calls itself to solve a smaller version of the same problem. Every correct recursive function has: (1) Base case — the condition that stops the recursion (without it, you get infinite recursion / stack overflow), (2) Recursive case — the function calls itself with a simpler input, moving toward the base case. Think: "trust the recursion" — assume the recursive call correctly solves the smaller problem.',
    tip: `// Factorial: n! = n × (n-1)!
function factorial(n) {
  if (n <= 1) return 1;          // ← base case
  return n * factorial(n - 1);   // ← recursive case
}
factorial(5) = 5 * factorial(4)
             = 5 * 4 * factorial(3)
             = 5 * 4 * 3 * 2 * 1 = 120

// Call stack visualization:
// factorial(5)
//   factorial(4)
//     factorial(3)
//       factorial(2)
//         factorial(1) → 1  ← base case hit, unwind
//       → 2
//     → 6
//   → 24
// → 120

// Fibonacci
function fib(n) {
  if (n <= 1) return n;           // base cases: fib(0)=0, fib(1)=1
  return fib(n - 1) + fib(n - 2);// recursive case
}
// ⚠️ Naive fib is O(2ⁿ) — use memoization!`
  },
  {
    category: 'Recursion', difficulty: 'Intermediate',
    question: 'What is memoization and how does it optimize recursive solutions?',
    answer: 'Memoization caches the result of a function call so repeated calls with the same arguments return instantly. It converts naive exponential recursive solutions (like Fibonacci O(2ⁿ)) to linear O(n) by ensuring each unique subproblem is solved only once. This is the top-down approach of Dynamic Programming.',
    tip: `// Naive fib: O(2ⁿ) — recalculates same values repeatedly
//         fib(5)
//        /       \\
//     fib(4)   fib(3)    ← fib(3) called twice!
//    /    \\   /    \\
// fib(3) fib(2)...      ← fib(2) called 3 times!

// Memoized fib: O(n) — each value computed once
function fib(n, memo = new Map()) {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n);  // cache hit!
  const result = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, result);                  // cache result
  return result;
}

// Generic memoize helper
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
const memoFib = memoize(fib);`
  },
  {
    category: 'Recursion', difficulty: 'Intermediate',
    question: 'What is backtracking and how does it differ from plain recursion?',
    answer: 'Backtracking explores all possible solutions by building candidates incrementally and abandoning ("pruning") a candidate as soon as it cannot lead to a valid solution. Pattern: choose → explore → unchoose (undo). Used for: permutations, combinations, subsets, N-Queens, Sudoku solver, word search. Backtracking prunes branches early, making it much faster than brute force.',
    tip: `// Permutations using backtracking
function permutations(nums) {
  const result = [];
  function backtrack(current, remaining) {
    if (remaining.length === 0) {   // base: no more to pick
      result.push([...current]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);                      // choose
      backtrack(current, remaining.filter((_, j) => j !== i)); // explore
      current.pop();                                   // unchoose ← backtrack!
    }
  }
  backtrack([], nums);
  return result;
}

// Subsets (power set)
function subsets(nums) {
  const result = [];
  function backtrack(start, current) {
    result.push([...current]);          // every state is a valid subset
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);            // choose
      backtrack(i + 1, current);        // explore
      current.pop();                    // unchoose
    }
  }
  backtrack(0, []);
  return result;
}`
  },

  // ── Interview ─────────────────────────────────────────────
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Two Sum — find indices of two numbers that add to a target.',
    answer: 'Classic hash map problem. Naive O(n²): check every pair. Optimal O(n): for each number, check if its complement (target - num) already exists in a map. If yes → found the pair. If no → store current number and its index in the map. One pass, O(n) time, O(n) space.',
    tip: `// Problem: nums = [2,7,11,15], target = 9 → [0,1]
// 2+7=9, return indices [0,1]

function twoSum(nums, target) {
  const seen = new Map();        // value → index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
}

// Trace through [2,7,11,15], target=9:
// i=0: complement=7, seen={}, not found → seen={2:0}
// i=1: complement=2, seen has 2! → return [0,1] ✅

// Time:  O(n)   — one pass
// Space: O(n)   — map stores up to n entries
// Key insight: instead of searching for the pair,
// ask "have I SEEN the complement before?"`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Valid Anagram — check if two strings are anagrams.',
    answer: 'Two strings are anagrams if they contain the same characters with the same frequencies. Approach 1: sort both strings and compare O(n log n). Approach 2 (optimal): build a frequency map for s, then subtract for t — if all counts reach zero, they\'re anagrams. O(n) time, O(1) space (only 26 letters).',
    tip: `// Problem: s="anagram", t="nagaram" → true
//          s="rat",     t="car"    → false

// Approach 1: sort (simple, O(n log n))
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  return s.split('').sort().join('') ===
         t.split('').sort().join('');
}

// Approach 2: frequency map (optimal O(n))
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - a]++;   // increment for s
    count[t.charCodeAt(i) - a]--;   // decrement for t
  }
  return count.every(c => c === 0); // all zero = anagram
}

// Time:  O(n)
// Space: O(1) — fixed 26-char array
// Follow-up: Unicode → use Map instead of fixed array`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Longest Consecutive Sequence — find longest run of consecutive numbers.',
    answer: 'Given [100,4,200,1,3,2] → answer is 4 (sequence 1,2,3,4). Naive sorting: O(n log n). Optimal using hash set: only start counting from the beginning of a sequence (num-1 not in set). Each number is visited at most twice → O(n).',
    tip: `// Problem: [100,4,200,1,3,2] → 4  (1,2,3,4)

function longestConsecutive(nums) {
  const set = new Set(nums);    // O(1) lookup
  let best = 0;

  for (const num of set) {
    // Only start a sequence from its beginning
    if (set.has(num - 1)) continue;  // not a start → skip

    let current = num;
    let length  = 1;
    while (set.has(current + 1)) {
      current++;
      length++;
    }
    best = Math.max(best, length);
  }
  return best;
}

// Trace [100,4,200,1,3,2]:
// set = {100,4,200,1,3,2}
// num=100: 99 not in set → start, 101 not in set → length=1
// num=4:   3 in set → skip (not a start)
// num=200: 199 not in set → length=1
// num=1:   0 not in set → start: 1→2→3→4, length=4 ✅
// num=3,2: predecessors in set → skip

// Time:  O(n)   — each num visited at most twice
// Space: O(n)   — hash set`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Contains Duplicate / Find All Duplicates using hashing.',
    answer: 'Contains Duplicate: return true if any value appears at least twice — one-liner with Set. Find All Duplicates: in an array of n integers where 1 ≤ nums[i] ≤ n, find all duplicates in O(n) time and O(1) extra space by using the array itself as a hash map (negate values at visited indices).',
    tip: `// Contains Duplicate — O(n) time, O(n) space
function containsDuplicate(nums) {
  return nums.length !== new Set(nums).size;
}
// Or:
function containsDuplicate(nums) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}

// Find All Duplicates — O(n) time, O(1) space
// Key trick: use sign of nums[abs(num)-1] as visited marker
function findDuplicates(nums) {
  const result = [];
  for (const num of nums) {
    const idx = Math.abs(num) - 1;
    if (nums[idx] < 0) {
      result.push(Math.abs(num));  // visited twice → duplicate!
    } else {
      nums[idx] = -nums[idx];      // mark as visited
    }
  }
  return result;
}
// [4,3,2,7,8,2,3,1] → [2,3]`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: '[Interview] LRU Cache — design a data structure with O(1) get and put.',
    answer: 'LRU (Least Recently Used) cache evicts the least recently accessed item when capacity is full. Optimal O(1) design: combine a HashMap (key → node, for O(1) lookup) with a Doubly Linked List (maintains access order — head = most recent, tail = least recent). On access/update, move the node to the head. On eviction, remove the tail.',
    tip: `class LRUCache {
  #cap; #map; #head; #tail;

  constructor(capacity) {
    this.#cap  = capacity;
    this.#map  = new Map();             // key → node
    this.#head = { key: 0, val: 0 };   // dummy head (MRU side)
    this.#tail = { key: 0, val: 0 };   // dummy tail (LRU side)
    this.#head.next = this.#tail;
    this.#tail.prev = this.#head;
  }

  #remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  #insertFront(node) {
    node.next = this.#head.next;
    node.prev = this.#head;
    this.#head.next.prev = node;
    this.#head.next = node;
  }

  get(key) {
    if (!this.#map.has(key)) return -1;
    const node = this.#map.get(key);
    this.#remove(node);
    this.#insertFront(node);            // move to MRU
    return node.val;
  }

  put(key, val) {
    if (this.#map.has(key)) this.#remove(this.#map.get(key));
    const node = { key, val };
    this.#insertFront(node);
    this.#map.set(key, node);
    if (this.#map.size > this.#cap) {
      const lru = this.#tail.prev;     // evict LRU
      this.#remove(lru);
      this.#map.delete(lru.key);
    }
  }
}
// Time: O(1) get and put   Space: O(capacity)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Longest Substring Without Repeating Characters.',
    answer: 'Sliding window + hash map (or set). Maintain a window [left, right]. Expand right; when a duplicate is found, shrink from the left until the duplicate is gone. The map stores each character\'s latest index so left can jump directly past the duplicate instead of sliding one-by-one.',
    tip: `// Problem: "abcabcbb" → 3 ("abc")
//          "pwwkew"  → 3 ("wke")

function lengthOfLongestSubstring(s) {
  const lastIndex = new Map();  // char → last seen index
  let left = 0, best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    // If char seen inside current window, jump left past it
    if (lastIndex.has(ch) && lastIndex.get(ch) >= left) {
      left = lastIndex.get(ch) + 1;
    }
    lastIndex.set(ch, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}

// Trace "abcabcbb":
// r=0 a → window=[a]         best=1
// r=1 b → window=[ab]        best=2
// r=2 c → window=[abc]       best=3
// r=3 a → dup! left→1, window=[bca]  best=3
// r=4 b → dup! left→2, window=[cab]  best=3
// r=5 c → dup! left→3, window=[abc]  best=3
// r=6 b → dup! left→4, window=[bc]   ...
// → 3

// Time: O(n)   Space: O(min(n, charset))`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Top K Frequent Elements — return the k most frequent numbers.',
    answer: 'Step 1: build a frequency map O(n). Step 2: bucket sort by frequency — create an array of buckets where index = frequency, put numbers in their bucket. Step 3: collect from highest-frequency bucket down until k elements gathered. Overall O(n) — faster than the heap approach O(n log k).',
    tip: `// Problem: nums=[1,1,1,2,2,3], k=2 → [1,2]

function topKFrequent(nums, k) {
  // Step 1: frequency map
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  // Step 2: bucket sort (index = frequency)
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  // Step 3: collect top k from highest bucket
  const result = [];
  for (let i = buckets.length - 1; i >= 1 && result.length < k; i--) {
    result.push(...buckets[i]);
  }
  return result.slice(0, k);
}

// freq map: {1:3, 2:2, 3:1}
// buckets:  [[], [3], [2], [1], [], [], ...]
//                 ↑1x  ↑2x  ↑3x
// collect from end: bucket[3]=[1] → bucket[2]=[2] → result=[1,2] ✅

// Time: O(n)   Space: O(n)
// Alternative: use min-heap of size k → O(n log k)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Subarray Sum Equals K — count subarrays with sum = k.',
    answer: 'Prefix sum + hash map in one pass. Key insight: if prefixSum[j] - prefixSum[i] = k, then subarray [i+1..j] sums to k. So for each position j, count how many previous prefix sums equal prefixSum[j] - k. Initialize the map with {0: 1} (empty subarray has sum 0).',
    tip: `// Problem: nums=[1,1,1], k=2 → 2  (subarrays [1,1] at index 0-1 and 1-2)
//          nums=[1,2,3], k=3 → 2  ([1,2] and [3])

function subarraySum(nums, k) {
  const prefixCount = new Map([[0, 1]]);  // {prefixSum: count}
  let sum = 0, count = 0;

  for (const num of nums) {
    sum += num;
    // How many times has (sum - k) appeared as a prefix sum?
    count += prefixCount.get(sum - k) || 0;
    prefixCount.set(sum, (prefixCount.get(sum) || 0) + 1);
  }
  return count;
}

// Trace [1,1,1], k=2:
// map={0:1}, sum=0, count=0
// num=1: sum=1, need sum-k=-1 → 0 times. map={0:1,1:1}
// num=1: sum=2, need 2-2=0   → 1 time! count=1. map={0:1,1:2,2:1} wait...
// Actually: num=1: sum=2, need 0 → found 1. count=1. map={0:1,1:1,2:1}
// num=1: sum=3, need 1 → found 2. count=3... let me re-trace:
// Result = 2 for [1,1,1] k=2 ✅

// Time: O(n)   Space: O(n)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Word Pattern — check if a string follows a pattern.',
    answer: 'Bijection problem: each pattern letter maps to exactly one word, and each word maps to exactly one letter (one-to-one, both directions). Use two maps: pattern→word and word→pattern. If either mapping conflicts, return false. This is the same technique used for Isomorphic Strings.',
    tip: `// Problem: pattern="abba", s="dog cat cat dog" → true
//          pattern="abba", s="dog cat cat fish" → false
//          pattern="aaaa", s="dog cat cat dog" → false

function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const charToWord = new Map();
  const wordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const word = words[i];

    if (charToWord.has(ch) && charToWord.get(ch) !== word) return false;
    if (wordToChar.has(word) && wordToChar.get(word) !== ch) return false;

    charToWord.set(ch, word);
    wordToChar.set(word, ch);
  }
  return true;
}

// Why TWO maps? One map isn't enough:
// pattern="ab", s="dog dog"
// charToWord: {a→dog, b→dog}  ← b→dog conflicts? No!
// But a and b should map to DIFFERENT words → wordToChar catches it
// wordToChar: dog→a, then dog→b conflicts ✅

// Time: O(n)   Space: O(n)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] 4Sum II — count tuples (i,j,k,l) such that A[i]+B[j]+C[k]+D[l]=0.',
    answer: 'Brute force O(n⁴) is too slow. Split into two halves: enumerate all O(n²) pair sums from A+B into a map, then for each pair sum from C+D, look up its negation in the map. O(n²) time and space.',
    tip: `// Problem: A=[1,2], B=[-2,-1], C=[-1,2], D=[0,2] → 2

function fourSumCount(A, B, C, D) {
  const pairSums = new Map();

  // Store all A[i]+B[j] pair sums
  for (const a of A) {
    for (const b of B) {
      const s = a + b;
      pairSums.set(s, (pairSums.get(s) || 0) + 1);
    }
  }

  // For each C[k]+D[l], find how many A+B pairs complete to 0
  let count = 0;
  for (const c of C) {
    for (const d of D) {
      count += pairSums.get(-(c + d)) || 0;
    }
  }
  return count;
}

// A+B pairs: {-1:1, 0:1, 1:1, 3:1}
// Wait: 1+(-2)=-1, 1+(-1)=0, 2+(-2)=0, 2+(-1)=1
// pairSums: {-1:1, 0:2, 1:1}
// C+D: -1+0=-1, -1+2=1, 2+0=2, 2+2=4
// need -(−1)=1 → found 1 time
// need -(1)=-1 → found 1 time
// count=2 ✅

// Time: O(n²)   Space: O(n²)`
  },
  {
    category: 'Interview', difficulty: 'Advanced',
    question: '[Interview] Minimum Window Substring — smallest window in s containing all chars of t.',
    answer: 'Sliding window + two frequency maps. Expand the right pointer to include characters; once all characters of t are covered ("valid"), shrink from the left to minimize the window, recording the minimum. Track "formed" count (how many distinct chars meet their required frequency) to check validity in O(1) per step.',
    tip: `// Problem: s="ADOBECODEBANC", t="ABC" → "BANC"

function minWindow(s, t) {
  if (!s || !t) return '';
  const need = new Map();
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);

  const window = new Map();
  let have = 0, required = need.size;
  let left = 0, minLen = Infinity, minLeft = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    window.set(ch, (window.get(ch) || 0) + 1);

    // Did this char's count just meet the requirement?
    if (need.has(ch) && window.get(ch) === need.get(ch)) have++;

    // Shrink from left while window is valid
    while (have === required) {
      // Update minimum
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }
      // Remove leftmost char
      const lch = s[left++];
      window.set(lch, window.get(lch) - 1);
      if (need.has(lch) && window.get(lch) < need.get(lch)) have--;
    }
  }
  return minLen === Infinity ? '' : s.slice(minLeft, minLeft + minLen);
}

// Time: O(|s| + |t|)   Space: O(|s| + |t|)`
  },
  {
    category: 'Interview', difficulty: 'Intermediate',
    question: '[Interview] Ransom Note — can you build the note using magazine letters?',
    answer: 'Frequency map problem. Count character frequencies in the magazine, then subtract for each character in the ransom note. If any character count goes negative, return false. O(n) time, O(1) space (only 26 lowercase letters).',
    tip: `// Problem: ransomNote="aa", magazine="aab" → true
//          ransomNote="aa", magazine="ab"  → false

function canConstruct(ransomNote, magazine) {
  const count = new Array(26).fill(0);
  const a = 'a'.charCodeAt(0);

  // Count available letters in magazine
  for (const ch of magazine) {
    count[ch.charCodeAt(0) - a]++;
  }

  // Consume letters for ransom note
  for (const ch of ransomNote) {
    count[ch.charCodeAt(0) - a]--;
    if (count[ch.charCodeAt(0) - a] < 0) return false; // not enough
  }
  return true;
}

// Pattern: "do you have enough of X?"
// → count available supply, subtract demand, check for negatives
// Same pattern used in:
//   - Valid Anagram
//   - Task Scheduler (frequency counts)
//   - Find All Anagrams in a String (sliding window + freq)

// Time: O(m + n)   Space: O(1) — fixed 26-char array`
  },
];

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
   C# — 18 cards across 3 categories
═══════════════════════════════════════════════════════════ */
const CSHARP_CARDS = [

  /* ── C# Basics ── */
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'What are the basic data types in C#?',
    answer: 'C# is statically typed — every variable must have a declared type. Common types: `int` (32-bit integer), `long` (64-bit), `double` (64-bit float), `decimal` (high-precision money), `bool` (`true`/`false`), `char` (single character), `string` (immutable text, reference type). Use `var` to let the compiler infer the type — it is still statically typed.',
    tip: `int    age    = 30;
double price  = 9.99;
decimal tax   = 0.08m;   // 'm' suffix for decimal
bool   active = true;
char   grade  = 'A';
string name   = "Alice";

// Type inference — compiler knows it's an int
var count = 42;

// Checking type
Console.WriteLine(age.GetType());  // System.Int32
Console.WriteLine(name is string); // True`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'What is the difference between value types and reference types?',
    answer: 'Value types (`int`, `double`, `bool`, `struct`, `enum`) store data directly on the stack — assignment copies the value. Reference types (`class`, `string`, `array`, `interface`) store a reference (pointer) on the stack; the actual object lives on the heap — assignment copies the reference, so both variables point to the same object. `string` is immutable despite being a reference type.',
    tip: `// Value type — copy on assign
int a = 5;
int b = a;
b = 10;
Console.WriteLine(a); // 5 (unchanged)

// Reference type — shared reference
var list1 = new List<int> { 1, 2 };
var list2 = list1;         // same object!
list2.Add(3);
Console.WriteLine(list1.Count); // 3

// Copy a list properly
var list3 = new List<int>(list1);  // independent copy`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'How does string interpolation and string formatting work in C#?',
    answer: 'C# offers several ways to format strings. `$"..."` (string interpolation, C# 6+) is the most readable — embed any expression in `{}`. `string.Format()` is the classic approach. Verbatim strings `@"..."` treat backslashes literally (useful for file paths and regex). Raw string literals `"""..."""` (C# 11+) need no escaping at all.',
    tip: `string name  = "Alice";
int    age   = 30;
double score = 95.678;

// String interpolation (preferred)
Console.WriteLine($"Name: {name}, Age: {age}");
Console.WriteLine($"Score: {score:F2}");      // 95.68
Console.WriteLine($"Upper: {name.ToUpper()}");

// Verbatim — backslashes are literal
string path = @"C:\\Users\\Alice\\file.txt";

// Useful string methods
"  hello  ".Trim()          // "hello"
"a,b,c".Split(',')          // ["a","b","c"]
string.Join("-", new[]{"a","b"}) // "a-b"`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'How do `if/else` and `switch` work in C#?',
    answer: 'C# supports classic `if/else if/else` blocks and `switch` statements. Modern C# (8+) adds `switch expressions` — concise, expression-based pattern matching that returns a value. The `when` keyword adds a condition guard to a case. Switch expressions are exhaustive — the compiler warns if cases are missing.',
    tip: `int score = 85;

// Classic if/else
if      (score >= 90) Console.WriteLine("A");
else if (score >= 80) Console.WriteLine("B");
else                  Console.WriteLine("C");

// Switch expression (C# 8+) — returns a value
string grade = score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    _     => "F"   // _ is the default/discard
};

// With when guard
string label = score switch
{
    100            => "Perfect",
    >= 90 and < 100=> "Excellent",
    _              => "Keep going"
};`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'How do loops work in C#?',
    answer: 'C# has four loop constructs. `for`: classic index-based loop. `foreach`: iterates any `IEnumerable` — cleanest for collections. `while`: condition-first loop. `do/while`: body runs at least once. Use `break` to exit early, `continue` to skip to the next iteration. LINQ methods (`Where`, `Select`) often replace explicit loops.',
    tip: `// for — index-based
for (int i = 0; i < 5; i++)
    Console.WriteLine(i);

// foreach — clean collection iteration
var fruits = new List<string> { "apple", "banana" };
foreach (var fruit in fruits)
    Console.WriteLine(fruit);

// while
int n = 0;
while (n < 5) n++;

// do/while — runs body at least once
do {
    Console.WriteLine("runs once even if false");
} while (false);

// Range (C# 9+)
foreach (var i in 1..=5)  // 1,2,3,4,5
    Console.WriteLine(i);`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'How do methods work in C#?',
    answer: 'Methods are defined with an access modifier, return type, name, and parameters. `void` means no return value. Parameters can have default values (optional), be passed by reference (`ref`/`out`), or collected with `params`. Method overloading allows multiple methods with the same name but different parameter signatures.',
    tip: `// Basic method
public int Add(int a, int b) => a + b;  // expression body

// Optional parameters with defaults
public string Greet(string name, string greeting = "Hello")
    => $"{greeting}, {name}!";

// out parameter — return multiple values
public bool TryParse(string s, out int result)
{
    return int.TryParse(s, out result);
}

// params — variable number of arguments
public int Sum(params int[] nums)
    => nums.Sum();

Sum(1, 2, 3, 4, 5);  // 15

// Overloading
public double Add(double a, double b) => a + b;`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'How do arrays and `List<T>` work in C#?',
    answer: 'Arrays are fixed-size, contiguous memory — fast but inflexible. `List<T>` is a dynamic array that grows automatically — preferred for most use cases. Both offer O(1) random access by index. `List<T>` has methods like `Add`, `Remove`, `Contains`, `Sort`, `Find`. Use `Dictionary<K,V>` for key-value lookup and `HashSet<T>` for unique collections.',
    tip: `// Array — fixed size
int[] nums = { 1, 2, 3, 4, 5 };
int[] arr  = new int[3];     // [0, 0, 0]
arr[0] = 10;

// List<T> — dynamic, preferred
var list = new List<string> { "a", "b" };
list.Add("c");
list.Remove("a");
list.Contains("b");  // true
list.Count;          // 2

// Dictionary<K,V>
var scores = new Dictionary<string, int>
{
    ["Alice"] = 95,
    ["Bob"]   = 87
};
scores.TryGetValue("Alice", out int score); // safe lookup`
  },
  {
    category: 'C# Basics', difficulty: 'Beginner',
    question: 'How does exception handling work in C#?',
    answer: 'Use `try/catch/finally`. `try` wraps risky code. `catch(ExceptionType ex)` handles specific exceptions — always catch the most specific type first. `finally` always runs (cleanup, closing resources). `throw` re-throws the current exception (preserves stack trace). `when` adds a filter condition. `using` is the preferred way to auto-dispose `IDisposable` resources.',
    tip: `try
{
    var text = await File.ReadAllTextAsync(path);
    var data = JsonSerializer.Deserialize<Config>(text);
}
catch (FileNotFoundException ex)
{
    _logger.LogWarning("Missing: {File}", ex.FileName);
}
catch (JsonException ex) when (ex.Message.Contains("token"))
{
    throw new InvalidConfigException("Bad JSON", ex); // wrap
}
finally
{
    _logger.LogInformation("Done"); // always runs
}

// using — auto-disposes (calls Dispose on exit)
using var conn = new SqlConnection(connectionString);
await conn.OpenAsync();`
  },

  /* ── OOP & Patterns ── */
  {
    category: 'OOP & Patterns', difficulty: 'Beginner',
    question: 'How do classes and objects work in C#?',
    answer: 'A class is a blueprint; an object is an instance created with `new`. Classes have fields (data), properties (encapsulated fields), methods (behaviour), and constructors (initialisation). C# supports access modifiers: `public`, `private`, `protected`, `internal`. Use `static` for members that belong to the class itself rather than any instance.',
    tip: `public class BankAccount
{
    // Property with private setter
    public string Owner  { get; }
    public decimal Balance { get; private set; }

    // Constructor
    public BankAccount(string owner, decimal initial = 0)
    {
        Owner   = owner;
        Balance = initial;
    }

    // Method
    public void Deposit(decimal amount)
    {
        if (amount <= 0) throw new ArgumentException("Must be positive");
        Balance += amount;
    }
}

// Usage
var account = new BankAccount("Alice", 1000m);
account.Deposit(500m);
Console.WriteLine(account.Balance); // 1500`
  },
  {
    category: 'OOP & Patterns', difficulty: 'Intermediate',
    question: 'What is the difference between an interface and an abstract class?',
    answer: 'Interface: defines a contract (method/property signatures) with no state. A class can implement multiple interfaces. Abstract class: can have concrete methods, fields, and constructors — but only single inheritance. Rule of thumb: use interfaces for capabilities (`IDisposable`, `ILogger`); use abstract classes for shared base behaviour with some implementation provided.',
    tip: `// Interface — multiple allowed
public interface ILogger {
    void Log(string message);
    void LogError(string msg) => Log($"ERROR: {msg}"); // default impl (C#8+)
}
public interface ISaveable { void Save(); }

// Abstract class — single inheritance, shared logic
public abstract class Shape {
    public string Color { get; set; } = "Red";
    public abstract double Area();          // must override
    public void Print() => Console.WriteLine($"{Color}: {Area():F2}");
}

public class Circle : Shape, ILogger, ISaveable {
    public double Radius { get; init; }
    public override double Area() => Math.PI * Radius * Radius;
    public void Log(string m)  => Console.WriteLine(m);
    public void Save()         => Console.WriteLine("Saved");
}`
  },
  {
    category: 'OOP & Patterns', difficulty: 'Intermediate',
    question: 'What are properties in C# and how do they differ from fields?',
    answer: 'A field is a plain variable on a class. A property wraps a field with `get`/`set` accessors, enabling validation, computed values, and change notification. Auto-properties generate the backing field automatically. `init` (C# 9+) allows setting only during object initialisation. Properties are the standard for public data — they allow implementation changes without breaking the API.',
    tip: `public class Person
{
    // Auto-property
    public string Name { get; set; }

    // Init-only — set in constructor or object initializer
    public string Id { get; init; }

    // Private setter — only class can change it
    public int Age { get; private set; }

    // Computed (no backing field)
    public bool IsAdult => Age >= 18;

    // Full property with validation
    private decimal _salary;
    public decimal Salary {
        get => _salary;
        set => _salary = value >= 0 ? value
            : throw new ArgumentOutOfRangeException(nameof(value));
    }
}

// Object initializer syntax
var p = new Person { Name = "Alice", Id = "001" };`
  },
  {
    category: 'OOP & Patterns', difficulty: 'Intermediate',
    question: 'What are generics in C# and why use them?',
    answer: 'Generics allow classes, methods, and interfaces to be parameterised by type, providing compile-time type safety without boxing/unboxing overhead. `List<T>` is a generic class — you get type-safe collections without casting. Constraints (`where T : class`, `where T : IComparable<T>`, `where T : new()`) restrict valid type arguments.',
    tip: `// Generic class
public class Stack<T>
{
    private readonly List<T> _data = new();
    public void Push(T item) => _data.Add(item);
    public T    Pop()  { var v = _data[^1]; _data.RemoveAt(_data.Count-1); return v; }
    public T    Peek() => _data[^1];
    public bool IsEmpty => _data.Count == 0;
}

// Generic method with constraint
public T Max<T>(T a, T b) where T : IComparable<T>
    => a.CompareTo(b) >= 0 ? a : b;

Max(3, 7);          // 7
Max("apple","banana"); // "banana"

var stack = new Stack<string>();
stack.Push("hello");`
  },
  {
    category: 'OOP & Patterns', difficulty: 'Intermediate',
    question: 'What are records in C# and when should you use them?',
    answer: 'Records (C# 9+) are types designed for immutable data. They auto-generate value-based equality (`==` compares all properties), `ToString()`, and `GetHashCode()`. `with` expressions create modified copies non-destructively. Use records for DTOs, API response models, value objects, and command/query objects — anywhere immutability and equality by value matter.',
    tip: `// Positional record — concise syntax
public record Point(double X, double Y);

var p1 = new Point(1, 2);
var p2 = p1 with { Y = 5 };  // copy with one change

Console.WriteLine(p1 == new Point(1, 2)); // true (value equality)
Console.WriteLine(p2);                    // Point { X = 1, Y = 5 }

// Extended record with methods
public record Person(string Name, int Age)
{
    public bool IsAdult => Age >= 18;
}

// record struct (C# 10+) — value type record
public record struct Coordinate(float Lat, float Lng);`
  },
  {
    category: 'OOP & Patterns', difficulty: 'Intermediate',
    question: 'What are delegates and events in C#?',
    answer: 'A delegate is a type-safe function pointer — it holds references to methods matching a specific signature. `event` wraps a delegate and enforces the publish-subscribe pattern: only the declaring class can invoke it; subscribers can only `+=` or `-=`. `Action<T>` (void return) and `Func<T, TResult>` are built-in generic delegates. Events are the foundation of the Observer pattern.',
    tip: `// Built-in delegates: Func & Action
Func<int, int, int> add = (a, b) => a + b;
Action<string>       log = Console.WriteLine;
add(3, 4);  // 7

// Event — publish/subscribe
public class Button
{
    public event EventHandler<string> Clicked;

    public void Click(string label)
        => Clicked?.Invoke(this, label);  // null-safe invoke
}

var btn = new Button();
btn.Clicked += (sender, label) =>
    Console.WriteLine($"Clicked: {label}");

btn.Click("Submit");  // Clicked: Submit`
  },

  /* ── LINQ & Async ── */
  {
    category: 'LINQ & Async', difficulty: 'Intermediate',
    question: 'What is LINQ and how do you use it?',
    answer: 'LINQ (Language Integrated Query) provides a uniform syntax to query collections, databases (EF Core), XML, and more. Queries are lazy — they execute only when iterated (`ToList()`, `foreach`). Two styles: method syntax (lambda chains, preferred) and query syntax (SQL-like). Core methods: `Where`, `Select`, `OrderBy`, `GroupBy`, `Join`, `First`, `Any`, `All`, `Count`, `Sum`, `Aggregate`.',
    tip: `var people = new List<Person> { ... };

// Method syntax (preferred)
var result = people
    .Where(p => p.Age > 18)
    .OrderBy(p => p.Name)
    .Select(p => new { p.Name, p.Age })
    .ToList();

// Query syntax (SQL-like)
var result2 = from p in people
              where p.Age > 18
              orderby p.Name
              select new { p.Name, p.Age };

// Useful aggregates
people.Any(p => p.Age > 65);             // bool
people.Count(p => p.IsActive);           // int
people.Max(p => p.Salary);              // decimal
people.GroupBy(p => p.Department);      // grouped`
  },
  {
    category: 'LINQ & Async', difficulty: 'Intermediate',
    question: 'How does async/await work in C#?',
    answer: '`async` marks a method asynchronous — it returns `Task` or `Task<T>`. `await` suspends the method and releases the thread back to the thread pool until the awaited task completes, then resumes. Avoid `.Result` or `.Wait()` — they block the thread and can deadlock. Use `Task.WhenAll` to run tasks in parallel. Use `ConfigureAwait(false)` in library code.',
    tip: `public async Task<string> GetDataAsync(string url)
{
    using var client = new HttpClient();
    // Thread is freed while waiting — not blocked
    var response = await client.GetAsync(url);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}

// Run two tasks in parallel
var t1 = GetDataAsync(url1);
var t2 = GetDataAsync(url2);
await Task.WhenAll(t1, t2);

// Async stream (C# 8+)
await foreach (var item in GetItemsAsync())
    Console.WriteLine(item);`
  },
  {
    category: 'LINQ & Async', difficulty: 'Intermediate',
    question: 'What is Dependency Injection in C# / ASP.NET Core?',
    answer: 'DI is a pattern where a class receives its dependencies from outside rather than creating them. ASP.NET Core has a built-in DI container. Register services with lifetimes: `Singleton` (one instance for the app), `Scoped` (one per HTTP request), `Transient` (new instance every time). Inject via constructor — the container resolves the whole dependency graph automatically.',
    tip: `// Register in Program.cs
builder.Services.AddSingleton<IConfig, AppConfig>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddTransient<IEmailService, SmtpEmailService>();

// Inject via constructor (preferred)
public class UserService
{
    private readonly IUserRepository _repo;
    private readonly IEmailService   _email;

    public UserService(IUserRepository repo, IEmailService email)
    {
        _repo  = repo;
        _email = email;
    }

    public async Task RegisterAsync(string email)
    {
        var user = await _repo.CreateAsync(email);
        await _email.SendWelcomeAsync(user);
    }
}`
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
    question: 'Pattern 1 — Filter data: how do you use WHERE effectively?',
    answer: '`WHERE` filters rows before any grouping or aggregation. Core operators: `=`, `<>`, `>`, `<`, `>=`, `<=` for comparisons; `AND`/`OR`/`NOT` to combine; `BETWEEN` for ranges (inclusive); `IN (...)` for a list; `LIKE` for pattern matching (`%` = any chars, `_` = one char); `IS NULL` / `IS NOT NULL` for null checks. Always filter as early as possible — pushing conditions into WHERE lets the DB use indexes and skip rows before processing them.',
    tip: `-- Basic filter
SELECT * FROM orders WHERE status = 'pending';

-- Multiple conditions
SELECT * FROM users
WHERE age >= 18 AND country = 'VN' AND is_active = TRUE;

-- Range + list
SELECT * FROM products
WHERE price BETWEEN 10 AND 100
  AND category IN ('electronics', 'books');

-- Pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- NULL check
SELECT * FROM orders WHERE shipped_at IS NULL;

-- Combine everything
SELECT id, name, price FROM products
WHERE category = 'electronics'
  AND price < 500
  AND name LIKE '%phone%'
  AND deleted_at IS NULL
ORDER BY price ASC;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Beginner',
    question: 'Pattern 2 — Count per group: how does GROUP BY + COUNT work?',
    answer: '`GROUP BY` collapses rows with the same value into one group, then aggregate functions compute per-group statistics. `COUNT(*)` counts all rows in the group; `COUNT(col)` skips NULLs; `COUNT(DISTINCT col)` counts unique values. The golden rule: every column in SELECT must either be in GROUP BY or wrapped in an aggregate. Use `ORDER BY COUNT(*) DESC` to rank groups by size.',
    tip: `-- Count orders per customer
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
ORDER BY order_count DESC;

-- Count unique products per category
SELECT category, COUNT(DISTINCT product_id) AS unique_products
FROM order_items
GROUP BY category;

-- Multiple aggregates in one query
SELECT
  country,
  COUNT(*)           AS total_users,
  COUNT(DISTINCT city) AS unique_cities,
  AVG(age)           AS avg_age
FROM users
GROUP BY country
ORDER BY total_users DESC;

-- Count signups per day
SELECT DATE(created_at) AS day, COUNT(*) AS signups
FROM users
GROUP BY DATE(created_at)
ORDER BY day;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Beginner',
    question: 'Pattern 3 — Find duplicates: how do you detect and remove duplicate rows?',
    answer: 'To find duplicates: `GROUP BY` the key column(s) and use `HAVING COUNT(*) > 1`. This reveals which values appear more than once and how many times. To see the full duplicate rows: join back to the original table. To keep only one copy (the "best" row per key): use `ROW_NUMBER() OVER (PARTITION BY key ORDER BY ...)` and filter `WHERE rn = 1`. To physically delete duplicates: use a CTE with ROW_NUMBER + DELETE.',
    tip: `-- Find duplicate emails
SELECT email, COUNT(*) AS occurrences
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- See the full duplicate rows
SELECT * FROM users
WHERE email IN (
  SELECT email FROM users
  GROUP BY email HAVING COUNT(*) > 1
)
ORDER BY email;

-- Keep only the latest row per email (dedup SELECT)
WITH ranked AS (
  SELECT *,
    ROW_NUMBER() OVER (
      PARTITION BY email ORDER BY created_at DESC
    ) AS rn
  FROM users
)
SELECT * FROM ranked WHERE rn = 1;

-- Delete duplicates, keep lowest id
WITH dupes AS (
  SELECT id,
    ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
  FROM users
)
DELETE FROM users WHERE id IN (SELECT id FROM dupes WHERE rn > 1);`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'Pattern 4 — Join tables: what are the JOIN types and when do you use each?',
    answer: '`INNER JOIN` — returns only rows with a match in both tables. `LEFT JOIN` — all rows from left, NULLs for non-matching right rows. `RIGHT JOIN` — all rows from right (rarely used; swap tables and use LEFT). `FULL JOIN` — all rows from both sides, NULLs where no match. `CROSS JOIN` — cartesian product, every combination. Key interview pattern: `LEFT JOIN + WHERE right.id IS NULL` finds rows in A that have NO match in B (anti-join / missing records).',
    tip: `-- INNER JOIN: matching rows only
SELECT u.name, o.id AS order_id
FROM users u
JOIN orders o ON o.user_id = u.id;

-- LEFT JOIN: all users, even those with no orders
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
GROUP BY u.id, u.name;

-- Anti-join: users who never placed an order
SELECT u.name
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;

-- Multi-table join
SELECT u.name, p.name AS product, oi.quantity
FROM users u
JOIN orders o      ON o.user_id    = u.id
JOIN order_items oi ON oi.order_id = o.id
JOIN products p    ON p.id         = oi.product_id;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Beginner',
    question: 'Pattern 5 — Top N rows: how do you select the highest or lowest N records?',
    answer: 'Simple Top N: `ORDER BY col DESC LIMIT N` — sort descending, take the first N rows. This works when you need the global top N. For Top N per group (e.g., top 3 per category), you need `ROW_NUMBER() OVER (PARTITION BY group ORDER BY col DESC)` and filter `WHERE rn <= N`. Also useful: `OFFSET` for pagination, `FETCH FIRST N ROWS ONLY` (SQL standard alternative to LIMIT).',
    tip: `-- Global Top 5 most expensive products
SELECT name, price
FROM products
ORDER BY price DESC
LIMIT 5;

-- Bottom 3 (cheapest)
SELECT name, price
FROM products
ORDER BY price ASC
LIMIT 3;

-- Top 1 per category (latest order per customer)
SELECT DISTINCT ON (customer_id)
  customer_id, id AS order_id, total, created_at
FROM orders
ORDER BY customer_id, created_at DESC;  -- PostgreSQL

-- Top N per group (any database)
WITH ranked AS (
  SELECT *,
    ROW_NUMBER() OVER (
      PARTITION BY category
      ORDER BY price DESC
    ) AS rn
  FROM products
)
SELECT * FROM ranked WHERE rn <= 3;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'Pattern 6 — Ranking: how do ROW_NUMBER, RANK, and DENSE_RANK differ?',
    answer: '`ROW_NUMBER()` — always unique, no ties: 1, 2, 3, 4. `RANK()` — ties share the same rank, next rank skips: 1, 2, 2, 4. `DENSE_RANK()` — ties share the same rank, no gaps: 1, 2, 2, 3. All three use `OVER (PARTITION BY group ORDER BY col)`. Use ROW_NUMBER for dedup / Top-N per group. Use RANK/DENSE_RANK when ties matter (leaderboards, competition results).',
    tip: `-- Compare all three on the same data
SELECT
  name, score,
  ROW_NUMBER()  OVER (ORDER BY score DESC) AS row_num,
  RANK()        OVER (ORDER BY score DESC) AS rank,
  DENSE_RANK()  OVER (ORDER BY score DESC) AS dense_rank
FROM students;
-- score: 95, 90, 90, 85
-- row_num:  1,  2,  3,  4
-- rank:     1,  2,  2,  4   <- gap after tie
-- dense_rank: 1, 2, 2, 3   <- no gap

-- Ranking per group (per subject)
SELECT
  student_id, subject, score,
  ROW_NUMBER() OVER (
    PARTITION BY subject
    ORDER BY score DESC
  ) AS rank_in_subject
FROM exam_scores;

-- Top 1 per group using ROW_NUMBER
WITH r AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY subject ORDER BY score DESC) AS rn
  FROM exam_scores
)
SELECT * FROM r WHERE rn = 1;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'Interview pattern — Find missing records: LEFT JOIN + WHERE IS NULL',
    answer: 'The anti-join pattern finds rows in table A that have no corresponding row in table B. Use `LEFT JOIN` then filter `WHERE B.id IS NULL`. Common interview questions: customers who never ordered, employees with no manager, products never sold, users who never logged in. This is more reliable than `NOT IN` when the subquery could return NULLs (NOT IN with NULLs returns no rows — a subtle bug).',
    tip: `-- Customers who never placed an order
SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE o.id IS NULL;

-- Products that were never sold
SELECT p.id, p.name
FROM products p
LEFT JOIN order_items oi ON oi.product_id = p.id
WHERE oi.id IS NULL;

-- NOT IN version (BEWARE: fails if subquery returns NULL)
SELECT id, name FROM users
WHERE id NOT IN (SELECT user_id FROM orders);
-- If any user_id is NULL in orders → returns 0 rows!

-- Safe alternative: NOT EXISTS
SELECT id, name FROM users u
WHERE NOT EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id
);`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'Interview pattern — Running total and moving average with window functions',
    answer: 'A running total accumulates values row by row using `SUM(col) OVER (ORDER BY date)`. A moving average smooths data over a sliding window using `AVG(col) OVER (ORDER BY date ROWS BETWEEN N PRECEDING AND CURRENT ROW)`. Add `PARTITION BY` to reset per group. These are common in analytics, dashboards, and data engineering interviews — the key insight is that window functions do NOT collapse rows like GROUP BY does.',
    tip: `-- Daily revenue with running total
SELECT
  DATE(created_at)                         AS day,
  SUM(amount)                              AS daily_revenue,
  SUM(SUM(amount)) OVER (
    ORDER BY DATE(created_at)
  )                                        AS running_total
FROM orders
GROUP BY DATE(created_at);

-- 7-day moving average of daily signups
SELECT
  day,
  signups,
  ROUND(AVG(signups) OVER (
    ORDER BY day
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ), 1) AS moving_avg_7d
FROM daily_signups
ORDER BY day;

-- Running total per user (resets per partition)
SELECT user_id, order_date, amount,
  SUM(amount) OVER (
    PARTITION BY user_id ORDER BY order_date
  ) AS cumulative_spend
FROM orders;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Intermediate',
    question: 'Interview pattern — Swap values and classify rows with CASE WHEN',
    answer: 'CASE WHEN is used to transform data inline without changing the schema. Classic interview tasks: swap M/F values, classify rows into buckets, flag records meeting a condition, build pivot tables. Rule: CASE is an expression — it returns a value and can go anywhere a value can (SELECT, WHERE, ORDER BY, GROUP BY, inside aggregates). Without ELSE, unmatched rows return NULL.',
    tip: `-- Swap gender values (classic interview question)
UPDATE users
SET gender = CASE gender
  WHEN 'M' THEN 'F'
  WHEN 'F' THEN 'M'
  ELSE gender
END;

-- Classify rows into buckets
SELECT name, salary,
  CASE
    WHEN salary < 30000  THEN 'Junior'
    WHEN salary < 70000  THEN 'Mid'
    WHEN salary < 120000 THEN 'Senior'
    ELSE                      'Executive'
  END AS level
FROM employees;

-- Conditional count (pivot)
SELECT department,
  COUNT(*) FILTER (WHERE gender = 'M') AS male_count,
  COUNT(*) FILTER (WHERE gender = 'F') AS female_count
FROM employees
GROUP BY department;

-- Flag rows
SELECT *, (score >= 60) AS passed FROM students;`
  },
  {
    category: 'SQL Patterns', difficulty: 'Advanced',
    question: 'Interview pattern — Subquery patterns: IN, NOT IN, EXISTS, scalar, derived table',
    answer: 'Four subquery shapes: `IN (SELECT ...)` checks membership — simple but can be slow on large sets. `NOT IN (SELECT ...)` — beware: if the subquery returns any NULL, the entire result is empty (use NOT EXISTS instead). `EXISTS (SELECT 1 ...)` — stops at the first match, efficient for large tables. `Scalar subquery` returns one value and can go in SELECT. `Derived table` (subquery in FROM) lets you pre-aggregate before joining.',
    tip: `-- IN: orders from VIP customers
SELECT * FROM orders
WHERE customer_id IN (
  SELECT id FROM customers WHERE tier = 'VIP'
);

-- NOT EXISTS (safe replacement for NOT IN with NULLs)
SELECT * FROM products p
WHERE NOT EXISTS (
  SELECT 1 FROM order_items oi WHERE oi.product_id = p.id
);

-- Scalar subquery in SELECT
SELECT name,
  salary,
  (SELECT AVG(salary) FROM employees) AS company_avg,
  salary - (SELECT AVG(salary) FROM employees) AS diff_from_avg
FROM employees;

-- Derived table: top-spending customers
SELECT d.customer_id, d.total_spent, c.name
FROM (
  SELECT customer_id, SUM(amount) AS total_spent
  FROM orders
  GROUP BY customer_id
  HAVING SUM(amount) > 1000
) d
JOIN customers c ON c.id = d.customer_id
ORDER BY d.total_spent DESC;`
  },
];

/* ═══════════════════════════════════════════════════════════
   DATABASE — Relational + NoSQL  |  20 cards  Beginner → Advanced
═══════════════════════════════════════════════════════════ */
const DATABASE_CARDS = [

  /* ── Relational DB ── */
  {
    category: 'Relational DB', difficulty: 'Beginner',
    question: 'What is a relational database and how does it work?',
    answer: 'A relational database stores data in tables (relations) made of rows and columns. Tables are linked via foreign keys. A DBMS (Database Management System) like PostgreSQL, MySQL, or SQL Server enforces data integrity, handles concurrent access, and uses SQL as the query language. Data is stored on disk durably; queries are executed by the query planner/optimizer which finds the most efficient execution plan.',
    tip: `-- Core concepts at a glance:
-- Table  = relation (like a spreadsheet with schema)
-- Row    = record / tuple
-- Column = attribute (has a fixed data type)
-- Schema = the structure definition

-- Popular relational databases:
-- PostgreSQL — open-source, feature-rich, ACID, JSON support
-- MySQL      — fast reads, widely hosted, web apps
-- SQLite     — embedded, zero-config, local/mobile apps
-- SQL Server — Microsoft, enterprise, Azure integration
-- Oracle     — enterprise, high-volume, complex queries`
  },
  {
    category: 'Relational DB', difficulty: 'Intermediate',
    question: 'What are ACID properties and why do they matter?',
    answer: '**Atomicity**: a transaction is all-or-nothing — if any step fails, all changes are rolled back. **Consistency**: a transaction brings the DB from one valid state to another, respecting all constraints. **Isolation**: concurrent transactions behave as if executed serially — one cannot see another\'s uncommitted changes. **Durability**: once committed, data survives crashes (written to disk/WAL). ACID prevents data corruption in concurrent, failure-prone environments.',
    tip: `-- Classic example: bank transfer
BEGIN;
  UPDATE accounts SET balance = balance - 500 WHERE id = 1;
  UPDATE accounts SET balance = balance + 500 WHERE id = 2;
  -- If the second UPDATE fails, the first is rolled back (Atomicity)
  -- Both updates are invisible to others until COMMIT (Isolation)
COMMIT;
-- After COMMIT the data is on disk (Durability)
-- Both accounts still satisfy balance >= 0 constraint (Consistency)

-- Isolation levels (weakest → strongest):
-- READ UNCOMMITTED  — sees dirty reads (rare to use)
-- READ COMMITTED    — default in PostgreSQL/SQL Server
-- REPEATABLE READ   — default in MySQL
-- SERIALIZABLE      — strongest, no anomalies, slowest`
  },
  {
    category: 'Relational DB', difficulty: 'Intermediate',
    question: 'What is the difference between normalization and denormalization?',
    answer: 'Normalization organises tables to eliminate redundancy (splitting data into related tables). Benefits: no update anomalies, smaller storage. Downside: requires JOINs for reads. Denormalization intentionally adds redundancy (duplicating data, pre-joining tables) to speed up frequent reads at the cost of harder writes. OLTP systems favour normalization; OLAP/analytics systems often denormalize into star schemas or wide tables.',
    tip: `-- Normalized (3NF) — no redundancy, JOINs needed for reads
-- employees(id, name, dept_id FK)
-- departments(id, name, location)

-- Denormalized — faster reads, redundant data
-- employees(id, name, dept_name, dept_location)  ← duplicated!
-- Problem: if dept moves, update EVERY employee row

-- Practical middle ground:
-- Normalize the write model (OLTP tables)
-- Denormalize for read models (materialized views, read replicas)

-- Materialized view — pre-computed JOIN stored on disk
CREATE MATERIALIZED VIEW emp_dept AS
  SELECT e.name, d.name AS dept, d.location
  FROM employees e JOIN departments d ON e.dept_id = d.id;
REFRESH MATERIALIZED VIEW emp_dept;  -- update it`
  },
  {
    category: 'Relational DB', difficulty: 'Intermediate',
    question: 'How do database indexes work under the hood?',
    answer: 'The default index type is a **B-tree** (balanced tree): O(log n) lookup, range queries, ORDER BY. **Hash index**: O(1) equality lookup only — no range queries. **GIN** (PostgreSQL): full-text search, array/JSONB containment. **GiST**: geometric data, nearest-neighbour. Indexes trade write speed and disk space for read speed. A composite index `(a, b)` helps queries on `a` or `(a, b)` but NOT on `b` alone (leftmost prefix rule).',
    tip: `-- B-tree (default) — equality + range + ORDER BY
CREATE INDEX idx_orders_date ON orders(created_at);

-- Composite — left-prefix rule
CREATE INDEX idx_name_age ON users(last_name, age);
-- Helps: WHERE last_name = ?
-- Helps: WHERE last_name = ? AND age > ?
-- DOES NOT help: WHERE age > ?  (missing left prefix)

-- Partial — index only what you query
CREATE INDEX idx_pending ON orders(created_at)
WHERE status = 'pending';

-- Covering index — includes extra columns, avoids table lookup
CREATE INDEX idx_cover ON orders(user_id) INCLUDE (total, status);

-- Check index usage
EXPLAIN ANALYZE SELECT * FROM orders WHERE created_at > NOW() - INTERVAL '7 days';`
  },
  {
    category: 'Relational DB', difficulty: 'Intermediate',
    question: 'What is connection pooling and why is it essential?',
    answer: 'Opening a database connection is expensive (~50–100ms, memory per connection). Connection pooling maintains a pool of pre-opened connections that are reused across requests. Without pooling, a high-traffic app opens hundreds of connections simultaneously, overwhelming the DB. Tools: **PgBouncer** (PostgreSQL), built-in pools in ORMs. Key settings: `min_pool`, `max_pool`, `timeout`, `idle_timeout`.',
    tip: `-- PostgreSQL can handle ~100-300 connections before degrading
-- A Node.js app with 10 workers each opening 10 conns = 100 conns

-- pg (Node.js) — built-in pool
import { Pool } from 'pg';
const pool = new Pool({
  host:     'localhost',
  database: 'myapp',
  max:      20,          // max connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Reuse connection from pool
const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

-- PgBouncer sits between app and Postgres:
-- App → PgBouncer (thousands of connections ok)
-- PgBouncer → Postgres (small fixed pool, e.g. 50)`
  },
  {
    category: 'Relational DB', difficulty: 'Intermediate',
    question: 'What is an ORM and what are its trade-offs?',
    answer: 'An ORM (Object-Relational Mapper) maps database tables to classes/objects in code, letting you query the DB using your language instead of raw SQL. Examples: **Prisma**, **TypeORM**, **Sequelize** (Node.js); **SQLAlchemy** (Python); **Entity Framework** (C#); **Hibernate** (Java). Trade-offs: ORMs boost productivity and prevent SQL injection by default, but can generate inefficient queries, hide performance issues, and are harder to optimise for complex queries.',
    tip: `// Prisma (Node.js) — type-safe ORM
const user = await prisma.user.findUnique({
  where:   { id: 1 },
  include: { orders: { where: { status: 'completed' } } }
});

// Equivalent raw SQL Prisma generates:
// SELECT u.*, o.* FROM users u
// LEFT JOIN orders o ON o.user_id = u.id
// WHERE u.id = 1 AND o.status = 'completed'

// When to drop to raw SQL (Prisma example)
const result = await prisma.$queryRaw\`
  SELECT department, AVG(salary) FROM employees
  GROUP BY department HAVING AVG(salary) > 50000
\`;`
  },
  {
    category: 'Relational DB', difficulty: 'Advanced',
    question: 'What are transaction isolation levels and what anomalies do they prevent?',
    answer: 'Isolation levels control what a transaction can "see" from concurrent transactions. Anomalies: **Dirty Read** (reading uncommitted data), **Non-repeatable Read** (same query returns different rows in one transaction), **Phantom Read** (new rows appear in a re-executed query). Higher isolation = fewer anomalies but more locking/blocking. Most apps work fine with READ COMMITTED.',
    tip: `--                    Dirty   Non-repeatable  Phantom
-- READ UNCOMMITTED      ✅ possible  ✅ possible    ✅ possible
-- READ COMMITTED        ❌ prevented ✅ possible    ✅ possible  ← PG default
-- REPEATABLE READ       ❌ prevented ❌ prevented   ✅ possible  ← MySQL default
-- SERIALIZABLE          ❌ prevented ❌ prevented   ❌ prevented (slowest)

-- Set isolation level for a transaction
BEGIN;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
  SELECT balance FROM accounts WHERE id = 1;
  -- ... do calculations ...
  UPDATE accounts SET balance = ... WHERE id = 1;
COMMIT;`
  },

  /* ── NoSQL ── */
  {
    category: 'NoSQL', difficulty: 'Beginner',
    question: 'What is NoSQL and why does it exist?',
    answer: 'NoSQL ("Not Only SQL") databases were created to solve problems relational DBs struggle with: horizontal scaling (sharding across many machines), flexible/schema-less data, and very high write throughput. Types: **Document** (MongoDB), **Key-Value** (Redis, DynamoDB), **Column-family** (Cassandra), **Graph** (Neo4j). NoSQL sacrifices some ACID guarantees for availability and scale. Choose based on your data model, access patterns, and scale needs.',
    tip: `-- When NoSQL makes sense:
-- ✅ Schema changes frequently (products with different attributes)
-- ✅ Massive horizontal scale (billions of writes/day)
-- ✅ Simple key-based lookups at very high speed (caching)
-- ✅ Hierarchical/document-shaped data (avoid JOIN hell)
-- ✅ Graph relationships (social networks, recommendations)

-- When relational is better:
-- ✅ Complex relationships + JOINs
-- ✅ Strong consistency required (financial, medical)
-- ✅ Ad-hoc queries and reporting
-- ✅ Rich query language (SQL)

-- Many modern systems use BOTH (polyglot persistence)`
  },
  {
    category: 'NoSQL', difficulty: 'Beginner',
    question: 'What is MongoDB and how does it model data?',
    answer: 'MongoDB is a document database. Data is stored as BSON documents (Binary JSON) inside collections (like tables). Documents in the same collection can have different fields — schema-less by default. Embed related data inside one document to avoid joins. Reference (store an ID) when data is large, shared, or needs independent updates. MongoDB supports rich queries, aggregation pipelines, and indexes.',
    tip: `// Document — a JSON-like object
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "Alice",
  "email": "alice@mail.com",
  "address": {                    // embedded document
    "city": "Hanoi",
    "zip": "10000"
  },
  "orders": [                     // embedded array
    { "product": "Phone", "price": 999 },
    { "product": "Case",  "price": 19  }
  ],
  "createdAt": ISODate("2026-03-01")
}

// Query in Node.js (Mongoose)
const users = await User.find({ "address.city": "Hanoi" })
                        .sort({ createdAt: -1 })
                        .limit(10);`
  },
  {
    category: 'NoSQL', difficulty: 'Intermediate',
    question: 'What is Redis and what is it used for?',
    answer: 'Redis is an in-memory key-value store (also supports disk persistence). Sub-millisecond read/write latency. Data structures: strings, hashes, lists, sets, sorted sets, streams, bitmaps. Common uses: **caching** (reduce DB load), **session storage**, **rate limiting**, **pub/sub messaging**, **leaderboards** (sorted sets), **job queues** (lists/streams). Data fits in RAM — not for large datasets as primary storage.',
    tip: `// Node.js — ioredis
import Redis from 'ioredis';
const redis = new Redis();

// Cache-aside pattern
async function getUser(id) {
  const cached = await redis.get('user:' + id);
  if (cached) return JSON.parse(cached);     // cache hit

  const user = await db.findUser(id);        // cache miss
  await redis.setex('user:' + id, 3600, JSON.stringify(user)); // TTL 1hr
  return user;
}

// Rate limiting — 100 requests per minute per IP
const key = 'ratelimit:' + ip;
const count = await redis.incr(key);
if (count === 1) await redis.expire(key, 60);
if (count > 100) throw new Error('Rate limit exceeded');

// Leaderboard with sorted set
await redis.zadd('leaderboard', score, userId);
await redis.zrevrange('leaderboard', 0, 9, 'WITHSCORES'); // top 10`
  },
  {
    category: 'NoSQL', difficulty: 'Intermediate',
    question: 'What is Apache Cassandra and when should you use it?',
    answer: 'Cassandra is a wide-column distributed database designed for massive write throughput and high availability with no single point of failure. Data is partitioned across nodes by a partition key. It has no JOINs and limited query flexibility — you design tables around query patterns (query-first design). Best for: time-series data (IoT, logs, metrics), write-heavy workloads, and data that spans multiple data centres.',
    tip: `-- Cassandra CQL — SQL-like but very different rules
-- Table design must match your query exactly

-- Time-series: sensor readings per device per hour
CREATE TABLE sensor_readings (
  device_id  UUID,
  recorded   TIMESTAMP,
  temp       FLOAT,
  humidity   FLOAT,
  PRIMARY KEY (device_id, recorded)  -- device_id = partition key
) WITH CLUSTERING ORDER BY (recorded DESC);

-- Query — MUST include partition key
SELECT * FROM sensor_readings
WHERE device_id = ? AND recorded > ? AND recorded < ?;

-- Cassandra guarantees: AP (Available + Partition tolerant)
-- Eventual consistency by default; tunable per query
-- Handles millions of writes/second across clusters`
  },
  {
    category: 'NoSQL', difficulty: 'Intermediate',
    question: 'What is a Graph database and when does it excel?',
    answer: 'Graph databases store data as nodes (entities) and edges (relationships) with properties on both. Queries traverse relationships in O(1) per hop regardless of total data size — unlike SQL JOINs which slow down as the table grows. Use cases: social networks (friends of friends), recommendation engines, fraud detection, knowledge graphs, access control (who has permission to what). **Neo4j** is the most popular; AWS Neptune, ArangoDB are alternatives.',
    tip: `// Neo4j — Cypher query language

// Create nodes and relationship
CREATE (alice:Person {name: 'Alice', age: 30})
CREATE (bob:Person {name: 'Bob', age: 25})
CREATE (alice)-[:FOLLOWS {since: 2024}]->(bob);

// Find friends of friends (2 hops)
MATCH (me:Person {name: 'Alice'})-[:FOLLOWS*2]->(fof)
WHERE NOT (me)-[:FOLLOWS]->(fof)
RETURN fof.name;

// Shortest path between two people
MATCH path = shortestPath(
  (a:Person {name:'Alice'})-[:FOLLOWS*]-(b:Person {name:'Charlie'})
)
RETURN path;

// SQL equivalent of "friends of friends" degrades at scale
// Graph DB traversal stays fast regardless of data volume`
  },
  {
    category: 'NoSQL', difficulty: 'Intermediate',
    question: 'What is the CAP Theorem?',
    answer: 'CAP Theorem states that a distributed system can guarantee at most 2 of 3 properties simultaneously. **Consistency**: every read gets the most recent write. **Availability**: every request receives a response (not necessarily latest data). **Partition Tolerance**: system works despite network failures between nodes. Since network partitions always happen in reality, the real choice is **CP** (consistent, may be unavailable) vs **AP** (available, may return stale data).',
    tip: `-- CP systems — prioritise Consistency
-- MongoDB (with majority write concern)
-- HBase, Zookeeper, etcd
-- → Returns error rather than stale data during partition
-- → Good for: financial data, inventory

-- AP systems — prioritise Availability
-- Cassandra, DynamoDB, CouchDB
-- → Returns possibly stale data during partition
-- → Good for: social feeds, shopping carts, DNS

-- CA systems — only possible without partitions (single node)
-- Traditional RDBMS on one server

-- PACELC (extension of CAP):
-- Even without partition, choose: Latency vs Consistency
-- DynamoDB: configurable per-request consistency level`
  },
  {
    category: 'NoSQL', difficulty: 'Beginner',
    question: 'When should you choose SQL vs NoSQL?',
    answer: 'Choose **SQL** when: data has clear relationships, you need JOINs, strong consistency is required (financial, medical), schema is stable, ad-hoc queries are needed. Choose **NoSQL** when: schema evolves frequently, need to scale horizontally to many machines, data is document/graph/time-series shaped, you need very high write throughput or low latency at scale. Many production systems use both (polyglot persistence).',
    tip: `-- Use SQL (PostgreSQL) for:
✅ User accounts, orders, payments (relational + ACID)
✅ Reporting & analytics (rich SQL aggregations)
✅ Any data needing complex queries

-- Use MongoDB for:
✅ Product catalog (varying attributes per product)
✅ CMS / blog posts (flexible document structure)
✅ Event logs with nested data

-- Use Redis for:
✅ Session storage, caching, rate limiting
✅ Real-time leaderboards

-- Use Cassandra for:
✅ IoT time-series, clickstream, audit logs
✅ Billions of writes/day across regions

-- Real architecture: PostgreSQL + Redis + maybe MongoDB
-- Start with PostgreSQL — scale to NoSQL only when needed`
  },

  /* ── DB Design & Perf ── */
  {
    category: 'DB Design & Perf', difficulty: 'Intermediate',
    question: 'What is the N+1 query problem and how do you fix it?',
    answer: 'The N+1 problem occurs when code executes 1 query to fetch N records, then N more queries to fetch related data — one per record. For 100 users, that\'s 101 queries instead of 2. It is the most common ORM performance pitfall. Fix with eager loading (`JOIN` or `include`) to fetch related data in one query, or batch loading (DataLoader pattern).',
    tip: `// N+1 problem (bad) — 1 + N queries
const users = await User.findAll();          // query 1
for (const user of users) {
  const orders = await user.getOrders();     // query per user → N queries!
}

// Fix 1: eager loading (JOIN) — 2 queries total
const users = await User.findAll({
  include: [{ model: Order }]                // single JOIN query
});

// Fix 2: DataLoader (batch + cache per request)
const loader = new DataLoader(async (userIds) => {
  const orders = await Order.findAll({ where: { userId: userIds } });
  return userIds.map(id => orders.filter(o => o.userId === id));
});

// Fix 3: raw SQL with JOIN
SELECT u.*, o.* FROM users u
LEFT JOIN orders o ON o.user_id = u.id;`
  },
  {
    category: 'DB Design & Perf', difficulty: 'Advanced',
    question: 'What is database sharding and when do you need it?',
    answer: 'Sharding horizontally partitions data across multiple database servers (shards). Each shard holds a subset of rows, determined by a shard key (e.g. user_id % N). Enables horizontal scaling beyond a single server\'s limits. Challenges: cross-shard JOINs are hard/impossible, shard key choice is critical (avoid hotspots), rebalancing requires careful migration. Consider sharding only after exhausting: indexing, query optimization, read replicas, and vertical scaling.',
    tip: `-- Sharding by user_id (hash-based)
-- Shard 0: users where user_id % 4 = 0  → DB server 0
-- Shard 1: users where user_id % 4 = 1  → DB server 1
-- Shard 2: users where user_id % 4 = 2  → DB server 2
-- Shard 3: users where user_id % 4 = 3  → DB server 3

-- Range-based sharding
-- Shard 0: user_id 1       → 10,000,000
-- Shard 1: user_id 10M+1   → 20,000,000

-- Problems to watch for:
-- Hotspot: shard 0 gets all new users (time-based key)
-- Cross-shard: "find users in Hanoi" → query ALL shards
-- Joins: impossible across shards at DB level

-- Alternatives before sharding:
-- 1. Read replicas     (scale reads)
-- 2. Vertical scaling  (bigger machine)
-- 3. Caching (Redis)   (reduce DB load)
-- 4. Table partitioning (within one server)`
  },
  {
    category: 'DB Design & Perf', difficulty: 'Intermediate',
    question: 'What is database replication and what types exist?',
    answer: 'Replication copies data from a primary (leader) server to one or more replicas (followers). Types: **Primary-Replica** (most common) — all writes go to primary, reads can go to replicas; if primary fails, a replica is promoted. **Multi-Primary** — multiple writable nodes, risk of write conflicts. **Synchronous** replication waits for replica acknowledgment (safe but slower). **Asynchronous** is faster but replica may lag.',
    tip: `-- Primary-Replica setup (most common)
-- App writes → Primary DB
-- App reads  → Replica 1 / Replica 2  (load balanced)

-- Benefits:
-- ✅ Scale read traffic (replicas handle SELECT queries)
-- ✅ High availability (promote replica if primary dies)
-- ✅ Backups on replica (no impact on primary performance)

-- Replication lag — replica may be seconds behind primary
-- Problem: user writes then immediately reads — sees old data
-- Solution: read-your-own-writes (route user to primary for 1s after write)

-- PostgreSQL replication (postgresql.conf)
-- wal_level = replica
-- max_wal_senders = 5

-- Connection routing example (Node.js)
const writeDb = new Pool({ host: 'primary.db.com' });
const readDb  = new Pool({ host: 'replica.db.com' });`
  },
  {
    category: 'DB Design & Perf', difficulty: 'Intermediate',
    question: 'What are database migrations and how do you manage them?',
    answer: 'A database migration is a versioned, incremental change to the database schema (adding a column, creating a table, adding an index). Migrations are stored as files in version control alongside code. This ensures every environment (dev, staging, prod) has the same schema. Tools: **Flyway**, **Liquibase** (Java), **Alembic** (Python), **Prisma Migrate**, **Knex.js** (Node). Always write both `up` (apply) and `down` (rollback) migrations.',
    tip: `-- Migration file: 001_create_users.sql
-- UP
CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE INDEX idx_users_email ON users(email);

-- DOWN (rollback)
DROP TABLE IF EXISTS users;

-- Knex.js migration (Node.js)
exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary();
    t.string('email', 255).unique().notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTable('users');

-- Run migrations
-- knex migrate:latest    (apply all pending)
-- knex migrate:rollback  (undo last batch)`
  },
  {
    category: 'DB Design & Perf', difficulty: 'Advanced',
    question: 'What is the difference between optimistic and pessimistic locking?',
    answer: '**Pessimistic locking**: lock the row when you read it — no one else can modify it until you release. Safe but reduces concurrency and can cause deadlocks. **Optimistic locking**: read without locking, check at write time that no one modified it (using a version number or timestamp). If it changed, retry or reject. Better for low-contention workloads. Most web apps use optimistic locking; pessimistic for high-contention or critical sections.',
    tip: `-- Pessimistic locking — lock row on SELECT
BEGIN;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;  -- locks the row
-- Now safe to read + update, no one else can touch it
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
COMMIT;  -- lock released

-- Optimistic locking — version column pattern
-- Schema: ADD COLUMN version INT DEFAULT 1

-- Read
SELECT id, balance, version FROM accounts WHERE id = 1;
-- Returns: id=1, balance=1000, version=5

-- Write — only if version hasn't changed
UPDATE accounts
SET balance = 500, version = version + 1
WHERE id = 1 AND version = 5;  -- fails if someone else updated

-- Check rows affected: if 0, conflict → retry or error
-- Prisma handles this automatically with @updatedAt or @version`
  },

  /* ── PostgreSQL ── */
  {
    category: 'PostgreSQL', difficulty: 'Beginner',
    question: 'What makes PostgreSQL stand out among relational databases?',
    answer: 'PostgreSQL is a powerful, open-source object-relational database (ORDBMS) with 35+ years of active development. Key strengths: full ACID compliance, MVCC for concurrency without read locks, native JSON/JSONB support (NoSQL inside SQL), rich indexing (B-tree, Hash, GIN, GiST, BRIN), table inheritance, custom types and functions, full-text search, and a massive extension ecosystem (PostGIS, pgvector, TimescaleDB).',
    tip: `-- Check version
SELECT version();

-- Key advantages over MySQL:
-- ✅ Better SQL standards compliance
-- ✅ JSONB (binary JSON) — indexed and fast
-- ✅ Advanced indexing (GIN, GiST, partial, expression)
-- ✅ Full-text search built-in
-- ✅ CTEs (WITH queries), window functions
-- ✅ Table partitioning and inheritance
-- ✅ PostGIS for geospatial data
-- ✅ LISTEN/NOTIFY for pub/sub

-- Common PostgreSQL data types
INTEGER, BIGINT, NUMERIC(p,s)    -- numbers
TEXT, VARCHAR(n), CHAR(n)        -- strings (prefer TEXT)
BOOLEAN                          -- true/false
TIMESTAMP WITH TIME ZONE         -- always use with TZ!
UUID                             -- universally unique ID
JSONB                            -- binary JSON (indexable)
ARRAY                            -- native array columns`
  },
  {
    category: 'PostgreSQL', difficulty: 'Beginner',
    question: 'How does MVCC (Multi-Version Concurrency Control) work in PostgreSQL?',
    answer: 'MVCC allows readers and writers to not block each other. Instead of locking rows for reads, PostgreSQL keeps multiple versions of a row — each transaction sees a snapshot of the data as it existed when the transaction started. Readers never block writers, writers never block readers. Old row versions are cleaned up by the VACUUM process.',
    tip: `-- MVCC in action: no locking between reader and writer

-- Transaction A (long-running read):
BEGIN;
SELECT * FROM orders WHERE status = 'pending';
-- sees 100 rows at time T1

-- Transaction B (concurrent write, commits at T2):
BEGIN;
UPDATE orders SET status = 'shipped' WHERE id = 1;
COMMIT;

-- Transaction A (still in its snapshot):
SELECT * FROM orders WHERE status = 'pending';
-- still sees 100 rows! (sees T1 snapshot, not T2)
COMMIT;

-- Key points:
-- ✅ Readers never block writers
-- ✅ Writers never block readers
-- ⚠️  Old row versions accumulate → VACUUM cleans up
-- Auto-vacuum runs in background; tune for high-write tables`
  },
  {
    category: 'PostgreSQL', difficulty: 'Intermediate',
    question: 'What is JSONB in PostgreSQL and when should you use it?',
    answer: 'JSONB stores JSON as a decomposed binary format — it is parsed on write, stored efficiently, and supports indexing with GIN indexes. This makes JSONB fast to query. Use JSONB when: some attributes vary per row (semi-structured data), you need NoSQL flexibility inside a relational schema, or you are prototyping a schema that may evolve. Prefer dedicated columns for frequently-queried or joined fields.',
    tip: `-- Create table with JSONB column
CREATE TABLE products (
  id      SERIAL PRIMARY KEY,
  name    TEXT NOT NULL,
  attrs   JSONB
);

-- Insert
INSERT INTO products (name, attrs)
VALUES ('Laptop', '{"brand":"Dell","ram":16,"tags":["sale","refurb"]}');

-- Query JSONB fields
SELECT attrs->>'brand'          FROM products;  -- text
SELECT attrs->'ram'             FROM products;  -- JSON value
SELECT attrs#>>'{tags,0}'       FROM products;  -- "sale"

-- Filter on JSONB
SELECT * FROM products WHERE attrs->>'brand' = 'Dell';
SELECT * FROM products WHERE attrs @> '{"ram": 16}';  -- contains

-- GIN index for fast JSONB queries
CREATE INDEX idx_products_attrs ON products USING GIN (attrs);

-- Check if key exists
SELECT * FROM products WHERE attrs ? 'brand';`
  },
  {
    category: 'PostgreSQL', difficulty: 'Intermediate',
    question: 'What index types does PostgreSQL offer and when do you use each?',
    answer: 'PostgreSQL has several index types: B-tree (default, for =, <, >, BETWEEN, LIKE prefix), Hash (equality only, rarely needed), GIN (arrays, JSONB, full-text search — many values per row), GiST (geometric data, PostGIS, full-text), BRIN (very large tables with naturally-ordered data like timestamps — tiny size, approximate), Partial (index only rows matching a condition).',
    tip: `-- B-tree (default) — equality and range queries
CREATE INDEX idx_orders_created ON orders (created_at);
CREATE INDEX idx_users_email ON users (email);

-- GIN — JSONB and full-text search
CREATE INDEX idx_products_attrs ON products USING GIN (attrs);
CREATE INDEX idx_articles_fts   ON articles
  USING GIN (to_tsvector('english', title || ' ' || body));

-- Partial index — only index relevant rows
CREATE INDEX idx_orders_pending
  ON orders (created_at)
  WHERE status = 'pending';
-- Much smaller, faster for queries that filter on status='pending'

-- Expression index
CREATE INDEX idx_users_lower_email ON users (LOWER(email));

-- Check index usage
EXPLAIN ANALYZE SELECT * FROM orders WHERE status = 'pending';
-- Look for "Index Scan" vs "Seq Scan"

-- Find unused indexes
SELECT * FROM pg_stat_user_indexes WHERE idx_scan = 0;`
  },
  {
    category: 'PostgreSQL', difficulty: 'Intermediate',
    question: 'How do CTEs and Window Functions work in PostgreSQL?',
    answer: 'A CTE (Common Table Expression) with the WITH keyword names a temporary result set you can reference like a table — great for breaking complex queries into readable steps. Window Functions (OVER clause) compute aggregates across a set of rows related to the current row without collapsing them into groups — use for running totals, rankings, and moving averages.',
    tip: `-- CTE: break complex query into named steps
WITH monthly_revenue AS (
  SELECT
    DATE_TRUNC('month', created_at) AS month,
    SUM(amount)                     AS revenue
  FROM orders
  WHERE status = 'completed'
  GROUP BY 1
),
ranked AS (
  SELECT *, RANK() OVER (ORDER BY revenue DESC) AS rnk
  FROM monthly_revenue
)
SELECT * FROM ranked WHERE rnk <= 3;

-- Window Functions — no row collapsing
SELECT
  id,
  amount,
  SUM(amount)  OVER (ORDER BY created_at)           AS running_total,
  AVG(amount)  OVER (PARTITION BY user_id)          AS user_avg,
  RANK()       OVER (PARTITION BY dept ORDER BY salary DESC) AS rank,
  LAG(amount)  OVER (ORDER BY created_at)           AS prev_amount,
  LEAD(amount) OVER (ORDER BY created_at)           AS next_amount,
  ROW_NUMBER() OVER (ORDER BY created_at)           AS row_num
FROM orders;`
  },
  {
    category: 'PostgreSQL', difficulty: 'Advanced',
    question: 'How do you optimize slow queries in PostgreSQL?',
    answer: 'Use EXPLAIN ANALYZE to see the actual query plan and execution times. Key problem signs: Seq Scan on large tables (missing index), high rows estimate vs actual (stale statistics — run ANALYZE), nested loop on large datasets (may need hash join), high cost nodes. Tune with: proper indexes, partial indexes, rewriting joins, VACUUM/ANALYZE, pg_stat_statements for identifying the slowest queries system-wide.',
    tip: `-- See query plan with timing
EXPLAIN ANALYZE
SELECT * FROM orders o
JOIN users u ON u.id = o.user_id
WHERE o.status = 'pending' AND o.created_at > NOW() - INTERVAL '7 days';

-- Key plan nodes to look for:
-- Seq Scan        → no index used (add one!)
-- Index Scan      → good
-- Index Only Scan → best (all data in index)
-- Hash Join       → good for large sets
-- Nested Loop     → fast for small sets, slow for large
-- Bitmap Heap Scan → combines index results

-- Refresh statistics (helps planner make better choices)
ANALYZE orders;

-- Find slowest queries (enable pg_stat_statements first)
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;

-- Kill long-running query
SELECT pg_cancel_backend(pid)
FROM pg_stat_activity
WHERE state = 'active' AND query_start < NOW() - INTERVAL '5 min';`
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
   NODE.JS — 25 cards across 5 categories
═══════════════════════════════════════════════════════════ */
const NODEJS_CARDS = [
  // ── Node.js Basics ───────────────────────────────────────
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'What is Node.js and how does it differ from browser JavaScript?',
    answer: 'Node.js is a server-side JavaScript runtime built on Chrome\'s V8 engine. It uses an event-driven, non-blocking I/O model — a single thread handles thousands of concurrent connections by delegating I/O to the OS and continuing other work while waiting. Differences from browser JS: no DOM/window, but has fs, http, os, path modules; has process and Buffer globals; uses CommonJS or ESM modules.',
    tip: `// Node.js architecture:
//
//   Your JS Code
//        ↓
//   Node.js APIs (fs, http, crypto...)
//        ↓
//   libuv  ──→  OS (I/O, timers, networking)
//        ↓
//   V8 Engine (executes JS)
//
// Single-threaded event loop + async I/O
// → 1 thread handles 10,000 concurrent connections
// → never blocks waiting for disk/network

// Check Node.js version
node --version    // v22.x.x
node -e "console.log(process.version)"

// Run a file
node app.js

// REPL (interactive shell)
node
> 1 + 1
> require('os').hostname()`
  },
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'What is the Node.js Event Loop and how does it work?',
    answer: 'The event loop is what makes Node.js non-blocking. After starting, it processes callbacks in phases: timers (setTimeout/setInterval), pending I/O callbacks, idle/prepare (internal), poll (waits for new I/O), check (setImmediate), close callbacks. Between each phase it drains the microtask queue (Promise callbacks, process.nextTick — nextTick runs before Promises).',
    tip: `// Event loop phase order:
//
//  ┌─────────────────────────────┐
//  │          timers             │  ← setTimeout, setInterval
//  │   pending I/O callbacks     │  ← system I/O errors
//  │       idle, prepare         │  ← internal
//  │           poll              │  ← fetch new I/O events ← ─┐
//  │          check              │  ← setImmediate             │
//  │      close callbacks        │  ← socket.on('close')  ─ ──┘
//  └─────────────────────────────┘
//  Between each phase → microtasks:
//    1. process.nextTick()   (highest priority)
//    2. Promise.then()

setTimeout(() => console.log('timer'), 0);
setImmediate(() => console.log('immediate'));
Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));

// Output order:
// nextTick → promise → timer → immediate`
  },
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'What are the key Node.js global objects?',
    answer: 'Node.js globals available everywhere without require: process (runtime info, env vars, exit), __dirname / __filename (current file\'s directory/path — CommonJS only), Buffer (binary data), console, setTimeout/setInterval/setImmediate, global (the global object, like window in browsers). In ESM modules use import.meta.url instead of __dirname.',
    tip: `// process — runtime information
process.version          // 'v22.0.0'
process.platform         // 'linux', 'win32', 'darwin'
process.env.NODE_ENV     // 'production' | 'development'
process.env.PORT         // read env variables
process.argv             // ['node', 'app.js', 'arg1']
process.cwd()            // current working directory
process.exit(0)          // exit (0 = success, 1 = error)
process.on('uncaughtException', err => { ... })

// __dirname / __filename (CommonJS)
console.log(__dirname)   // /home/user/projects/myapp
console.log(__filename)  // /home/user/projects/myapp/app.js

// Buffer — binary data
const buf = Buffer.from('hello', 'utf8');
buf.toString('base64')   // 'aGVsbG8='
Buffer.alloc(10)         // zero-filled 10-byte buffer

// ESM equivalent of __dirname:
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));`
  },
  {
    category: 'Node.js Basics', difficulty: 'Beginner',
    question: 'What is the difference between CommonJS (require) and ES Modules (import)?',
    answer: 'CommonJS (CJS) is Node\'s original module system: require() is synchronous and dynamic; exports via module.exports. ES Modules (ESM) is the modern standard: import/export, static (resolved at parse time), asynchronous. To use ESM in Node.js: use .mjs extension or set "type": "module" in package.json. CJS and ESM can interop but with restrictions — you can require() a CJS file from ESM via createRequire.',
    tip: `// CommonJS (default in Node.js)
const fs   = require('fs');
const path = require('path');
const { add, sub } = require('./math');

module.exports = { greet };          // named
module.exports = function greet() {} // default

// ES Modules (.mjs or "type":"module" in package.json)
import fs from 'fs';
import { readFile } from 'fs/promises';
import { add, sub } from './math.js';  // .js required in ESM

export function greet() {}           // named export
export default function greet() {}   // default export

// Dynamic import (works in both CJS and ESM)
const mod = await import('./plugin.js');

// package.json
{
  "type": "module"   // all .js files treated as ESM
}
// or keep CJS default and use .mjs for ESM files`
  },
  {
    category: 'Node.js Basics', difficulty: 'Intermediate',
    question: 'What are the key built-in Node.js modules (fs, path, os, crypto)?',
    answer: 'Node.js ships batteries-included: fs (file system — read, write, watch), path (cross-platform path manipulation), os (operating system info), crypto (hashing, encryption, random), http/https (HTTP server/client), stream (streaming data), url (URL parsing), events (EventEmitter), child_process (spawn subprocesses), util (promisify, inspect).',
    tip: `// fs — file system (prefer fs/promises)
import { readFile, writeFile, readdir } from 'fs/promises';
const data = await readFile('./file.txt', 'utf8');
await writeFile('./out.txt', 'hello');
const files = await readdir('./src');

// path — safe cross-platform paths
import path from 'path';
path.join(__dirname, 'data', 'file.txt') // correct on Win+Linux
path.resolve('./config.json')            // absolute path
path.basename('/usr/local/bin/node')     // 'node'
path.extname('app.min.js')              // '.js'
path.dirname('/home/user/app.js')       // '/home/user'

// os — system info
import os from 'os';
os.cpus().length    // number of CPU cores
os.totalmem()       // total RAM in bytes
os.freemem()        // free RAM
os.homedir()        // '/home/user'
os.platform()       // 'linux' | 'win32' | 'darwin'

// crypto — hashing
import crypto from 'crypto';
crypto.randomUUID()                          // UUID v4
crypto.createHash('sha256').update('data').digest('hex')
crypto.randomBytes(32).toString('hex')       // random token`
  },

  // ── Modules & npm ────────────────────────────────────────
  {
    category: 'Modules & npm', difficulty: 'Beginner',
    question: 'How do you use npm to manage packages and scripts?',
    answer: 'npm (Node Package Manager) is the default package manager for Node.js. It installs packages from the npm registry into node_modules, records them in package.json, and locks exact versions in package-lock.json. npm scripts let you define shortcuts for common commands in package.json.',
    tip: `npm init -y                    // create package.json (yes to all)
npm install express            // install + add to dependencies
npm install -D nodemon         // devDependency (dev only)
npm install -g typescript      // global install
npm uninstall express          // remove package
npm update                     // update all packages
npm outdated                   // list outdated packages
npm audit                      // security vulnerability check
npm audit fix                  // auto-fix vulnerabilities

// npm scripts in package.json:
{
  "scripts": {
    "start":   "node dist/index.js",
    "dev":     "nodemon src/index.js",
    "build":   "tsc",
    "test":    "jest",
    "lint":    "eslint src/**/*.js"
  }
}
npm run dev    // run script
npm test       // shortcut for npm run test
npm start      // shortcut for npm run start`
  },
  {
    category: 'Modules & npm', difficulty: 'Beginner',
    question: 'What is package.json and what do its key fields mean?',
    answer: 'package.json is the manifest for a Node.js project. It describes the project, lists dependencies, defines scripts, and sets configuration. dependencies are installed in production; devDependencies are only for development; peerDependencies are expected to be installed by the consumer. Semantic versioning (semver) controls version ranges.',
    tip: `{
  "name": "my-app",
  "version": "1.2.3",          // semver: major.minor.patch
  "description": "My app",
  "main": "dist/index.js",     // entry point (CJS)
  "type": "module",            // use ESM by default
  "engines": { "node": ">=20" },
  "scripts": {
    "start": "node dist/index.js",
    "dev":   "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.18.0",      // ^ = compatible (4.x.x)
    "dotenv":  "~16.0.0"       // ~ = patch only (16.0.x)
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "jest":    "^29.0.0"
  }
}

// Semver ranges:
// "4.18.0"   exact version
// "^4.18.0"  >= 4.18.0, < 5.0.0  (minor + patch)
// "~4.18.0"  >= 4.18.0, < 4.19.0 (patch only)
// "*"        any version (avoid!)

// package-lock.json = exact locked versions → commit this!`
  },
  {
    category: 'Modules & npm', difficulty: 'Beginner',
    question: 'What is the difference between npm, npx, and pnpm?',
    answer: 'npm is the package manager — installs and manages packages. npx runs a package binary without installing it globally (great for one-off CLI tools). pnpm is a faster, disk-efficient alternative to npm — it uses a content-addressable store so packages are shared across projects, saving gigabytes of disk space. Yarn is another popular alternative.',
    tip: `// npx — run without installing globally
npx create-react-app my-app    // run create-react-app once
npx prisma migrate dev         // run prisma CLI
npx cowsay hello               // fun one-off

// Without npx you would need:
npm install -g create-react-app && create-react-app my-app

// pnpm — fast, disk-efficient npm alternative
npm install -g pnpm
pnpm install                   // install deps (much faster!)
pnpm add express               // install package
pnpm run dev                   // run script

// pnpm advantages:
// ✅ Shared package store across all projects
// ✅ Strict (no phantom deps)
// ✅ Much faster installs
// ✅ Monorepo workspace support

// Other alternatives:
// Yarn (yarn add, yarn.lock)
// Bun (bun install — fastest, also a runtime)`
  },
  {
    category: 'Modules & npm', difficulty: 'Intermediate',
    question: 'How do Streams work in Node.js?',
    answer: 'Streams process data piece by piece (chunks) instead of loading everything into memory. Four types: Readable (source — fs.createReadStream, http.IncomingMessage), Writable (destination — fs.createWriteStream, http.ServerResponse), Duplex (both — TCP sockets), Transform (modify in-transit — zlib.createGzip). Pipe connects streams. Use streams for large files, video, or any data larger than available RAM.',
    tip: `import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

// Read → compress → write (streaming, low memory)
await pipeline(
  createReadStream('bigfile.txt'),
  createGzip(),
  createWriteStream('bigfile.txt.gz')
);

// Without streams: entire file loaded into RAM ❌
// const data = fs.readFileSync('10gb.log'); // out of memory!

// Custom readable stream
import { Readable } from 'stream';
const readable = new Readable({
  read() {
    this.push('chunk1');
    this.push('chunk2');
    this.push(null);  // signal end
  }
});

// HTTP response is a writable stream
http.createServer((req, res) => {
  const file = createReadStream('./video.mp4');
  file.pipe(res);  // stream file directly to client
});`
  },
  {
    category: 'Modules & npm', difficulty: 'Intermediate',
    question: 'How does the EventEmitter pattern work in Node.js?',
    answer: 'EventEmitter is Node\'s built-in implementation of the observer/pub-sub pattern. Objects emit named events; listeners subscribe with .on(). Many core Node.js APIs (http.Server, Stream, process) extend EventEmitter. It is the foundation of Node\'s event-driven architecture.',
    tip: `import { EventEmitter } from 'events';

class OrderService extends EventEmitter {
  placeOrder(order) {
    // ... save to DB
    this.emit('order:placed', order);     // fire event
    this.emit('order:notify', order.userId);
  }
}

const orders = new OrderService();

// Subscribe
orders.on('order:placed', (order) => {
  console.log('New order:', order.id);
});
orders.once('order:placed', handler);    // fires only once

// Unsubscribe
orders.off('order:placed', handler);

// Error events — MUST have a listener or Node crashes
orders.on('error', (err) => console.error(err));

// Count listeners
orders.listenerCount('order:placed');    // 1

// Max listeners warning threshold (default 10)
orders.setMaxListeners(20);`
  },

  // ── Async & Error Handling ───────────────────────────────
  {
    category: 'Async & Error Handling', difficulty: 'Intermediate',
    question: 'How does async code evolve in Node.js: callbacks → Promises → async/await?',
    answer: 'Node.js started with the error-first callback pattern (err, data). Promises eliminated callback hell with .then()/.catch() chains. async/await (ES2017) makes async code look synchronous — much more readable. Modern Node.js uses fs/promises, util.promisify to wrap old callback APIs, and top-level await (in ESM modules).',
    tip: `// 1. Callback (old style) — error-first convention
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// 2. Promise
import { readFile } from 'fs/promises';
readFile('data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 3. async/await (preferred)
async function loadFile() {
  try {
    const data = await readFile('data.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Promisify old callback APIs
import { promisify } from 'util';
const sleep = promisify(setTimeout);
await sleep(1000);

// Run in parallel (don't await one by one!)
const [users, orders] = await Promise.all([
  fetchUsers(),
  fetchOrders()
]);`
  },
  {
    category: 'Async & Error Handling', difficulty: 'Intermediate',
    question: 'How do you handle errors properly in Node.js async code?',
    answer: 'Unhandled promise rejections crash Node.js in v15+. Always: wrap await in try/catch, handle .catch() on promise chains, listen for process "unhandledRejection" and "uncaughtException" as last-resort safety nets (log and exit cleanly — do not try to resume). Use a centralized error handler in Express. Never swallow errors silently.',
    tip: `// ✅ try/catch for async functions
async function getUser(id) {
  try {
    const user = await db.findUser(id);
    if (!user) throw new Error('User not found');
    return user;
  } catch (err) {
    logger.error({ err, id }, 'getUser failed');
    throw err;  // re-throw so caller can handle
  }
}

// ✅ Global safety net (log + exit gracefully)
process.on('unhandledRejection', (reason) => {
  logger.fatal({ reason }, 'Unhandled rejection');
  process.exit(1);
});
process.on('uncaughtException', (err) => {
  logger.fatal({ err }, 'Uncaught exception');
  process.exit(1);
});

// ✅ Express centralized error handler (4 params!)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: err.message,
    requestId: req.id
  });
});

// ❌ Never do this — swallowed error!
try { await riskyOp(); } catch {}  // silent failure`
  },
  {
    category: 'Async & Error Handling', difficulty: 'Advanced',
    question: 'When do you use Worker Threads vs Child Process in Node.js?',
    answer: 'Node.js is single-threaded — CPU-intensive work (image processing, heavy computation) blocks the event loop. Worker Threads run JS in parallel threads sharing memory (via SharedArrayBuffer / MessageChannel) — best for CPU work within Node. Child Process spawns a separate OS process — best for running external programs or completely isolated work. Cluster (built on child_process) forks the whole app for multi-core HTTP serving.',
    tip: `// Worker Threads — CPU-heavy JS work
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
  const worker = new Worker('./worker.js', {
    workerData: { input: largeArray }
  });
  worker.on('message', result => console.log(result));
  worker.on('error', err => console.error(err));
} else {
  // runs in worker thread
  const result = heavyComputation(workerData.input);
  parentPort.postMessage(result);
}

// Child Process — run external programs
import { exec, spawn } from 'child_process';

exec('ls -la', (err, stdout) => console.log(stdout));

const proc = spawn('ffmpeg', ['-i', 'in.mp4', 'out.webm']);
proc.stdout.pipe(process.stdout);
proc.on('close', code => console.log('exit:', code));

// Use case guide:
// Worker Threads → heavy JS computation (image resize, crypto)
// Child Process  → external CLI tools, isolation needed
// Cluster        → scale HTTP server across all CPU cores`
  },

  // ── HTTP & Express ───────────────────────────────────────
  {
    category: 'HTTP & Express', difficulty: 'Beginner',
    question: 'How do you create an HTTP server in Node.js without a framework?',
    answer: 'Node.js has a built-in http module that creates a raw HTTP server. The request and response objects are streams. You read the method, URL, headers from req; write status, headers, and body to res. This is the foundation Express.js is built on. For production apps use Express or Fastify for routing, middleware, and JSON handling.',
    tip: `import http from 'http';

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  // Route: GET /hello
  if (req.method === 'GET' && url.pathname === '/hello') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello World' }));
    return;
  }

  // Read POST body
  if (req.method === 'POST') {
    let body = '';
    for await (const chunk of req) body += chunk;
    const data = JSON.parse(body);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ received: data }));
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`
  },
  {
    category: 'HTTP & Express', difficulty: 'Intermediate',
    question: 'How does Express.js work — routing and middleware?',
    answer: 'Express is a minimal web framework for Node.js. The middleware chain is the core concept: every request flows through a stack of functions (middleware) in order. Middleware has (req, res, next) — call next() to pass to the next middleware, or send a response to end the chain. Routing maps HTTP method + URL pattern to handler functions.',
    tip: `import express from 'express';
const app = express();

// Built-in middleware
app.use(express.json());             // parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Custom middleware (runs for every request)
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();  // MUST call next() or the request hangs
});

// Route handlers
app.get('/users', async (req, res) => {
  const users = await db.findAll();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;          // route params
  const { fields } = req.query;       // query string
  const user = await db.findById(id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

app.post('/users', async (req, res) => {
  const user = await db.create(req.body);
  res.status(201).json(user);
});

app.listen(3000);`
  },
  {
    category: 'HTTP & Express', difficulty: 'Intermediate',
    question: 'How do you structure a real Express.js REST API project?',
    answer: 'A well-structured Express API separates concerns: routes define URL patterns, controllers handle request/response logic, services contain business logic, and the data layer handles DB access. Use express.Router() to split routes into modules. This keeps files small and testable — business logic can be tested without HTTP.',
    tip: `// Project structure:
// src/
//   index.js          ← start server
//   app.js            ← create Express app (no listen)
//   routes/
//     users.js        ← router for /users
//   controllers/
//     userController.js
//   services/
//     userService.js  ← business logic
//   middleware/
//     auth.js, errorHandler.js

// routes/users.js
import { Router } from 'express';
import * as ctrl from '../controllers/userController.js';
import { auth } from '../middleware/auth.js';

const router = Router();
router.get('/',     auth, ctrl.listUsers);
router.get('/:id',  auth, ctrl.getUser);
router.post('/',    auth, ctrl.createUser);
router.patch('/:id',auth, ctrl.updateUser);
export default router;

// app.js
import usersRouter from './routes/users.js';
app.use('/api/v1/users', usersRouter);

// Error handler LAST
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});`
  },
  {
    category: 'HTTP & Express', difficulty: 'Intermediate',
    question: 'How do you use environment variables and configuration in Node.js?',
    answer: 'Never hard-code secrets or environment-specific values in code. Use environment variables (process.env) and a .env file for local development (loaded by the dotenv package). In production, set env vars through your platform (Docker, Heroku, AWS, etc.). Validate required env vars at startup so the app fails fast with a clear message rather than crashing later.',
    tip: `// .env file (never commit to git!)
PORT=3000
NODE_ENV=development
DATABASE_URL=postgres://user:pass@localhost:5432/mydb
JWT_SECRET=supersecretkey123
REDIS_URL=redis://localhost:6379

// Load .env in development
import 'dotenv/config';         // npm install dotenv

// Access env vars
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Validate at startup — fail fast!
const required = ['DATABASE_URL', 'JWT_SECRET'];
for (const key of required) {
  if (!process.env[key]) {
    console.error('Missing required env var:', key);
    process.exit(1);
  }
}

// .gitignore — MUST include:
// .env
// .env.local
// .env.production

// Config module pattern
export const config = {
  port:   parseInt(process.env.PORT) || 3000,
  dbUrl:  process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  isProd: process.env.NODE_ENV === 'production',
};`
  },

  // ── Performance & Production ─────────────────────────────
  {
    category: 'Performance & Production', difficulty: 'Intermediate',
    question: 'How do you run Node.js in production with PM2?',
    answer: 'PM2 is a production process manager for Node.js. It keeps your app alive (auto-restarts on crash), clusters it across CPU cores, manages logs, and enables zero-downtime reloads. It is the standard tool for deploying Node.js apps on bare metal or VMs.',
    tip: `npm install -g pm2

// Start app
pm2 start dist/index.js --name "my-api"
pm2 start ecosystem.config.js

// ecosystem.config.js
module.exports = {
  apps: [{
    name:      'my-api',
    script:    'dist/index.js',
    instances: 'max',        // one per CPU core
    exec_mode: 'cluster',    // cluster mode
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    max_memory_restart: '1G' // restart if memory > 1GB
  }]
};

pm2 status                   // show all processes
pm2 logs my-api              // tail logs
pm2 logs my-api --lines 200  // last 200 lines
pm2 reload my-api            // zero-downtime reload
pm2 restart my-api           // full restart
pm2 stop my-api              // stop
pm2 startup                  // auto-start on server reboot
pm2 save                     // save current process list`
  },
  {
    category: 'Performance & Production', difficulty: 'Intermediate',
    question: 'How do you add security best practices to a Node.js/Express API?',
    answer: 'Key Express security practices: use helmet (sets security HTTP headers), rate-limit with express-rate-limit, validate + sanitize all input (never trust req.body), use parameterized queries (never string-concatenate SQL), store passwords with bcrypt (never plain text), keep dependencies updated (npm audit), disable X-Powered-By, use HTTPS in production.',
    tip: `import helmet from 'helmet';            // npm install helmet
import rateLimit from 'express-rate-limit'; // npm install express-rate-limit
import { body, validationResult } from 'express-validator';

// helmet — set security headers automatically
app.use(helmet());
// Sets: X-Content-Type-Options, X-Frame-Options,
//       Content-Security-Policy, HSTS, etc.

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                   // max 100 requests per window
  standardHeaders: true,
  message: { error: 'Too many requests' }
});
app.use('/api/', limiter);

// Input validation with express-validator
app.post('/users', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('age').isInt({ min: 0, max: 150 }),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  // safe to use req.body here
});`
  },
  {
    category: 'Performance & Production', difficulty: 'Advanced',
    question: 'How does Node.js clustering work and when should you use it?',
    answer: 'A single Node.js process uses one CPU core. The Cluster module forks multiple worker processes (one per core) that all share the same port. The master process distributes incoming connections across workers using round-robin. PM2 cluster mode does this automatically. For containerized deployments (Docker/Kubernetes), it is usually better to run one process per container and scale with replicas.',
    tip: `import cluster from 'cluster';
import os from 'os';
import http from 'http';

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  console.log('Primary PID:', process.pid, 'CPUs:', numCPUs);

  // Fork one worker per CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart dead workers
  cluster.on('exit', (worker, code) => {
    console.log('Worker', worker.pid, 'died — restarting');
    cluster.fork();
  });

} else {
  // Each worker runs its own HTTP server
  http.createServer((req, res) => {
    res.end('Worker PID: ' + process.pid);
  }).listen(3000);

  console.log('Worker started PID:', process.pid);
}

// Easier with PM2:
// pm2 start app.js -i max --exec-mode cluster
// → PM2 handles forking, restarts, and zero-downtime reloads`
  },
  {
    category: 'Performance & Production', difficulty: 'Advanced',
    question: 'How do you diagnose and fix performance issues in Node.js?',
    answer: 'The most common Node.js performance issues: (1) CPU-blocking sync operations (fs.readFileSync, heavy JSON.parse on large objects), (2) Memory leaks (global collections that grow, uncleaned timers/listeners), (3) unoptimized database queries (N+1 problem), (4) too many small I/O calls (batch instead). Use clinic.js or --prof to profile, heapdump for memory snapshots.',
    tip: `// ❌ Blocks event loop — all requests stall
app.get('/data', (req, res) => {
  const data = fs.readFileSync('big.json'); // SYNC!
  res.json(JSON.parse(data));
});

// ✅ Non-blocking
app.get('/data', async (req, res) => {
  const data = await readFile('big.json', 'utf8');
  res.json(JSON.parse(data));
});

// Memory leak patterns to avoid:
const cache = {};                // grows forever if not pruned
setInterval(() => {}, 1000);    // uncleaned interval leaks

// Monitor event loop lag
import { monitorEventLoopDelay } from 'perf_hooks';
const h = monitorEventLoopDelay({ resolution: 20 });
h.enable();
setInterval(() => {
  console.log('EL delay p99:', h.p99 / 1e6, 'ms');
}, 5000);

// Profile with built-in profiler
node --prof app.js
node --prof-process isolate-*.log > profile.txt

// clinic.js (npm install -g clinic)
clinic doctor -- node app.js    // detect CPU, I/O, memory issues
clinic flame  -- node app.js    // flame graph`
  },
];

/* ═══════════════════════════════════════════════════════════
   REACT & SSR — 25 cards across 5 categories
═══════════════════════════════════════════════════════════ */
const REACT_CARDS = [

  // ── React Basics ─────────────────────────────────────────
  {
    category: 'React Basics', difficulty: 'Beginner',
    question: 'What is React and how does the Virtual DOM work?',
    answer: 'React is a JavaScript library for building UIs as a tree of components. Instead of updating the real DOM directly (slow), React maintains a Virtual DOM — a lightweight JS object copy of the DOM. On each state change, React re-renders the virtual tree, diffs it against the previous version (reconciliation), and applies only the minimal real DOM mutations needed. This batching and diffing is what makes React fast.',
    tip: `// Virtual DOM flow:
//
// State changes
//       ↓
// React re-renders component → new Virtual DOM tree
//       ↓
// Diffing (reconciliation) — find what changed
//       ↓
// Commit — apply only the changes to real DOM
//       ↓
// Browser paints

// Real DOM manipulation is slow because:
// - Layout recalculation
// - Style recalculation
// - Repaint / reflow
// React batches updates to minimize DOM touches

// React 18+ Concurrent Mode:
// React can pause, interrupt, and resume rendering
// → keeps UI responsive during heavy work
// → enabled by createRoot() instead of ReactDOM.render()`
  },
  {
    category: 'React Basics', difficulty: 'Beginner',
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
// ✅ className not class
// ✅ htmlFor not for
// ✅ camelCase events: onClick, onChange, onSubmit
// ✅ Self-close: <img /> <input /> <br />
// ✅ Expressions in {}: {user.name}, {isOpen ? 'Yes' : 'No'}
// ✅ Multiple elements → fragment: <> ... </>
// ❌ Statements in JSX (no if/for — use ternary or .map())`
  },
  {
    category: 'React Basics', difficulty: 'Beginner',
    question: 'What are components and props in React?',
    answer: 'A component is a reusable function that accepts props and returns JSX. Props (properties) are the inputs — read-only data passed from parent to child. Components must be pure: same props → same output, no side effects during render. Data flows one way: parent → child. To send data up, pass a callback function as a prop.',
    tip: `// Function component — preferred modern style
function UserCard({ name, role, onSelect }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <span>{role}</span>
      <button onClick={() => onSelect(name)}>Select</button>
    </div>
  );
}

// Usage — parent passes props
function App() {
  const handleSelect = (name) => console.log('Selected:', name);
  return (
    <UserCard
      name="Alice"
      role="Admin"
      onSelect={handleSelect}  // callback for upward data flow
    />
  );
}

// Props rules:
// ✅ Props are READ-ONLY — never mutate props
// ✅ Any JS value: string, number, object, array, function, JSX
// ✅ Destructure in params: ({ name, role }) instead of (props)
// ✅ Default values: function Card({ size = 'md' }) {}
// ✅ children prop: content between opening/closing tags`
  },
  {
    category: 'React Basics', difficulty: 'Beginner',
    question: 'How does conditional rendering and list rendering work in React?',
    answer: 'React renders JSX expressions — so you use JavaScript for logic. Conditionals: ternary operator (? :) or short-circuit (&&) inside JSX. Lists: .map() returns an array of JSX elements. Every list item needs a unique key prop so React can track items during reconciliation and avoid unnecessary re-renders.',
    tip: `function Feed({ isLoading, error, posts }) {
  // Early return pattern for loading/error states
  if (isLoading) return <Spinner />;
  if (error)     return <ErrorMsg message={error} />;

  return (
    <div>
      {/* Conditional rendering */}
      {posts.length === 0 && <p>No posts yet.</p>}

      {posts.length > 0 ? (
        <p>{posts.length} posts found</p>
      ) : null}

      {/* List rendering — key is required! */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>          {/* key must be unique & stable */}
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ❌ Bad key — index changes on sort/filter → wrong re-renders
posts.map((p, i) => <li key={i}>{p.title}</li>)

// ✅ Good key — stable unique ID from data
posts.map(p => <li key={p.id}>{p.title}</li>)`
  },
  {
    category: 'React Basics', difficulty: 'Beginner',
    question: 'What are controlled vs uncontrolled components in React forms?',
    answer: 'Controlled component: React state is the single source of truth for the input value. Every keystroke triggers onChange → updates state → re-renders input. Full control for validation, formatting, disabling. Uncontrolled component: the DOM manages its own state; you read the value via a ref when needed (e.g. on submit). Simpler for basic forms but less flexible.',
    tip: `// Controlled component — React drives the value
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // email and password are always in sync with state
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}                          // controlled by state
        onChange={e => setEmail(e.target.value)}
        type="email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

// Uncontrolled component — ref reads DOM value on demand
function SimpleForm() {
  const emailRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);  // read on submit
  };
  return <form onSubmit={onSubmit}><input ref={emailRef} /></form>;
}`
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

  // ── SSR & Next.js ────────────────────────────────────────
  {
    category: 'SSR & Next.js', difficulty: 'Intermediate',
    question: 'What are CSR, SSR, SSG, and ISR — and when do you use each?',
    answer: 'CSR (Client-Side Rendering): browser downloads JS bundle, runs it, fetches data — slow first load, bad SEO. SSR (Server-Side Rendering): server renders HTML on every request — fast first paint, always fresh, higher server cost. SSG (Static Site Generation): HTML generated at build time — fastest, best for CDN, but data can be stale. ISR (Incremental Static Regeneration): SSG pages that regenerate in the background after a time interval — best of SSG and SSR.',
    tip: `//  Strategy     │ Rendered When  │ Data Fresh │ SEO  │ Cost
// ─────────────┼────────────────┼────────────┼──────┼──────
//  CSR         │ In browser     │ On demand  │  ❌  │ Low
//  SSR         │ Each request   │ Always     │  ✅  │ High
//  SSG         │ Build time     │ At build   │  ✅  │ Low
//  ISR         │ Build + revalidate│ Near-fresh│ ✅  │ Low

// Use CSR  for: dashboards, admin UIs (no SEO needed)
// Use SSR  for: personalized pages, real-time stock/scores
// Use SSG  for: blog, docs, marketing pages (data rarely changes)
// Use ISR  for: product pages, news (fresh enough + fast + cheap)

// Next.js App Router:
// Default      → Server Component (SSR / RSC)
// 'use client' → Client Component (CSR)
// generateStaticParams() → SSG for dynamic routes
// revalidate = 60        → ISR (regenerate every 60 seconds)

// In Next.js page:
export const revalidate = 60; // ISR — regenerate every 60s`
  },
  {
    category: 'SSR & Next.js', difficulty: 'Intermediate',
    question: 'What is the difference between Server Components and Client Components in Next.js?',
    answer: 'React Server Components (RSC) run only on the server — they can fetch data directly (no useEffect), access backend resources, and never ship their code to the browser (smaller bundle). Client Components ("use client") run in the browser — they can use useState, useEffect, event handlers, and browser APIs. In Next.js App Router, all components are Server Components by default; add "use client" at the top to make one a Client Component.',
    tip: `// Server Component (default in App Router)
// ✅ Async — can await fetch/DB directly
// ✅ No JS sent to browser
// ✅ Access filesystem, env vars, DB
// ❌ No hooks (useState, useEffect)
// ❌ No event handlers (onClick)
// ❌ No browser APIs (window, localStorage)

async function ProductPage({ params }) {
  const product = await db.products.findById(params.id); // direct DB!
  return <ProductView product={product} />;
}

// Client Component — add "use client" directive at top
'use client';
import { useState } from 'react';

function AddToCart({ productId }) {
  const [added, setAdded] = useState(false);
  return (
    <button onClick={() => setAdded(true)}>
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}

// Composition pattern — Server wraps Client:
// ProductPage (Server) → renders AddToCart (Client)
// ✅ Server fetches data, Client handles interaction
// ❌ Client component CANNOT import Server component`
  },
  {
    category: 'SSR & Next.js', difficulty: 'Intermediate',
    question: 'How does data fetching work in Next.js App Router?',
    answer: 'In the App Router, Server Components are async functions — fetch data directly with await. Next.js extends the native fetch() with caching and revalidation options. For mutations, use Server Actions (async functions that run on the server, called from Client Components). No need for getServerSideProps or getStaticProps (Pages Router patterns).',
    tip: `// Server Component — direct async data fetch
async function BlogPost({ params }) {
  // Cached by default (like SSG)
  const post = await fetch('https://api.example.com/posts/' + params.id, {
    next: { revalidate: 3600 }  // ISR: revalidate every hour
  }).then(r => r.json());

  // No cache — fresh on every request (SSR)
  const views = await fetch('/api/views/' + params.id, {
    cache: 'no-store'
  }).then(r => r.json());

  return <article><h1>{post.title}</h1><p>Views: {views}</p></article>;
}

// Server Action — mutation runs on server, called from client
'use server';
async function submitComment(formData) {
  const comment = formData.get('comment');
  await db.comments.create({ text: comment });
  revalidatePath('/blog/' + formData.get('postId'));
}

// Client form using Server Action
'use client';
function CommentForm({ postId }) {
  return (
    <form action={submitComment}>
      <input name="comment" />
      <input type="hidden" name="postId" value={postId} />
      <button type="submit">Post</button>
    </form>
  );
}`
  },
  {
    category: 'SSR & Next.js', difficulty: 'Intermediate',
    question: 'What is hydration in React SSR and what causes hydration errors?',
    answer: 'Hydration is the process where React takes server-rendered HTML and attaches event listeners / state to make it interactive. React "hydrates" by rendering the component tree client-side and matching it to the existing DOM. A hydration mismatch occurs when the server HTML and client render produce different output — React warns and may re-render, causing a flash. Common causes: using Date.now() / Math.random() in render, browser-only APIs, locale-specific formatting.',
    tip: `// SSR lifecycle:
// 1. Server renders component to HTML string
// 2. Browser receives and displays HTML immediately (fast!)
// 3. JS bundle loads
// 4. React hydrates: renders component again, diffs with DOM
// 5. Event listeners attached → page is now interactive

// Hydration mismatch causes:
// ❌ Different output on server vs client

// Bad — Math.random() differs each run
function Avatar() {
  return <div style={{ color: randomColor() }}>...</div>;
}

// Bad — Date differs between server and client
function Timestamp() {
  return <time>{new Date().toLocaleString()}</time>; // locale mismatch!
}

// ✅ Fix: suppress for truly dynamic content
<div suppressHydrationWarning>{new Date().toLocaleString()}</div>

// ✅ Fix: render on client only
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;

// ✅ Fix: use stable values
// Store random/date values in state initialized on client only`
  },
  {
    category: 'SSR & Next.js', difficulty: 'Advanced',
    question: 'How does the Next.js App Router file-based routing system work?',
    answer: 'Next.js App Router uses the file system as the router. Every folder inside app/ can have a page.tsx (the page), layout.tsx (persistent wrapper — does not remount on navigation), loading.tsx (Suspense fallback), error.tsx (error boundary), and not-found.tsx. Dynamic segments use [param] folders. Route groups use (group) folders (no URL impact). Parallel routes use @slot folders.',
    tip: `// File structure → URL mapping:
app/
├── layout.tsx          → root layout (wraps everything)
├── page.tsx            → /
├── globals.css
├── about/
│   └── page.tsx        → /about
├── blog/
│   ├── page.tsx        → /blog
│   ├── loading.tsx     → shown while blog loads (Suspense)
│   ├── error.tsx       → error boundary for /blog
│   └── [slug]/
│       └── page.tsx    → /blog/my-post  (params.slug = "my-post")
├── (marketing)/        → route group — no effect on URL
│   ├── pricing/page.tsx→ /pricing
│   └── features/page.tsx→ /features
└── dashboard/
    ├── layout.tsx      → persistent sidebar (no remount!)
    └── page.tsx        → /dashboard

// layout.tsx — wraps children, persists across navigations
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body><Navbar />{children}<Footer /></body>
    </html>
  );
}

// Dynamic page
export default function BlogPost({ params, searchParams }) {
  // params.slug = "my-post"  (from [slug] folder)
  // searchParams.page = "2"  (from ?page=2)
}`
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
   CSS & TAILWIND — 20 cards across 4 categories
═══════════════════════════════════════════════════════════ */
const CSS_CARDS = [

  // ── CSS Fundamentals ─────────────────────────────────────
  {
    category: 'CSS Fundamentals', difficulty: 'Beginner',
    question: 'What is the CSS Box Model and how does box-sizing affect it?',
    answer: 'Every HTML element is a rectangular box with four layers: content (text/image), padding (space inside border), border, and margin (space outside border). By default (box-sizing: content-box) width/height apply to content only — padding and border add to the total size. box-sizing: border-box includes padding and border in the declared width/height — far more predictable and used by Tailwind and most modern projects.',
    tip: `/* Default: content-box */
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
}
/* Total rendered width = 200 + 20*2 + 2*2 = 244px ❌ surprising */

/* border-box — recommended */
*, *::before, *::after { box-sizing: border-box; }
.box {
  width: 200px;    /* total width INCLUDING padding + border */
  padding: 20px;
  border: 2px solid;
}
/* Total rendered width = 200px ✅ predictable */

/* Box model layers (inside → out): */
/* content → padding → border → margin */

/* Margin collapse: */
/* vertical margins between siblings collapse to the larger value */
/* h1 margin-bottom: 24px + p margin-top: 16px = 24px (not 40px) */`
  },
  {
    category: 'CSS Fundamentals', difficulty: 'Beginner',
    question: 'How does CSS specificity and the cascade work?',
    answer: 'When multiple rules target the same element, the cascade determines which wins: (1) Origin & importance (!important > author > browser defaults), (2) Specificity — inline styles (1-0-0-0) > IDs (0-1-0-0) > classes/attributes/pseudo-classes (0-0-1-0) > elements/pseudo-elements (0-0-0-1), (3) Source order — later rule wins on tie. !important overrides everything but makes CSS hard to maintain.',
    tip: `/* Specificity score: (inline, id, class, element) */

p                    { color: black; }   /* 0,0,0,1 */
.text                { color: blue; }    /* 0,0,1,0 */
#title               { color: red; }     /* 0,1,0,0 */
style="color:green"                      /* 1,0,0,0 */

p.text               { color: purple; }  /* 0,0,1,1 */
#nav .link:hover     { color: pink; }    /* 0,1,1,0 + pseudo-class */

/* Higher specificity always wins regardless of order */

/* !important — last resort */
.btn { color: blue !important; } /* beats everything */

/* Modern: CSS Layers (@layer) — control specificity cleanly */
@layer base, components, utilities;

@layer base       { a { color: blue; } }
@layer components { .btn { color: red; } }
@layer utilities  { .text-green { color: green; } }
/* utilities layer always beats components and base */`
  },
  {
    category: 'CSS Fundamentals', difficulty: 'Beginner',
    question: 'What are CSS units and when do you use px, rem, em, %, and viewport units?',
    answer: 'px: absolute, predictable — good for borders, shadows, media queries. rem: relative to root font-size (html) — best for font sizes and spacing (scales with user accessibility preferences). em: relative to parent font-size — useful for padding that should scale with text. %: relative to parent — good for widths. vw/vh: relative to viewport — good for full-screen layouts, hero sections. clamp(): fluid sizing between min and max.',
    tip: `/* px — absolute, not user-scalable */
border: 1px solid;
border-radius: 8px;

/* rem — relative to :root font-size (default 16px) */
html { font-size: 16px; }
h1   { font-size: 2rem; }    /* 32px */
p    { font-size: 1rem; }    /* 16px */
.gap { margin-top: 1.5rem; } /* 24px */

/* em — relative to PARENT font-size */
.card { font-size: 18px; }
.card p { padding: 1em; }    /* 18px — scales with card font */

/* % — relative to parent */
.sidebar { width: 30%; }
.main    { width: 70%; }

/* Viewport units */
.hero { height: 100vh; width: 100vw; }
.hero { height: 100dvh; }  /* dynamic vh — avoids mobile browser bar issue */

/* clamp(min, preferred, max) — fluid typography */
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
/* grows with viewport, clamped between 24px and 48px */`
  },
  {
    category: 'CSS Fundamentals', difficulty: 'Beginner',
    question: 'What are CSS custom properties (variables) and how do you use them?',
    answer: 'CSS custom properties (--name) store reusable values in CSS itself — unlike preprocessor variables they are live in the browser, can be updated with JavaScript, and cascade through the DOM. Define on :root for global scope, or on a selector for local scope. Used by every major design system for theming (dark mode, brand colors, spacing scale).',
    tip: `/* Define on :root — available everywhere */
:root {
  --color-primary:    #38bdf8;
  --color-bg:         #080f1e;
  --color-text:       #e2e8f0;
  --spacing-sm:       0.5rem;
  --spacing-md:       1rem;
  --radius:           0.5rem;
  --shadow:           0 4px 24px rgba(0, 0, 0, 0.4);
}

/* Use with var() */
.card {
  background: var(--color-bg);
  color:       var(--color-text);
  padding:     var(--spacing-md);
  border-radius: var(--radius);
  box-shadow:  var(--shadow);
}

/* Local scope — override for component */
.btn-primary {
  --color-primary: #818cf8;
  background: var(--color-primary);
}

/* Dark mode theming */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:   #0f172a;
    --color-text: #f1f5f9;
  }
}

/* Update via JavaScript */
document.documentElement.style.setProperty('--color-primary', '#f97316');`
  },
  {
    category: 'CSS Fundamentals', difficulty: 'Intermediate',
    question: 'What are CSS pseudo-classes, pseudo-elements, and useful modern selectors?',
    answer: 'Pseudo-classes select elements in a specific state (:hover, :focus, :nth-child, :not, :is, :where). Pseudo-elements style a specific part of an element (::before, ::after, ::placeholder, ::selection). :is() and :where() reduce repetition — :where() has zero specificity. :has() is the "parent selector" — style a parent based on its children.',
    tip: `/* Pseudo-classes — element state */
a:hover  { color: #38bdf8; }
input:focus { outline: 2px solid #818cf8; }
li:first-child  { font-weight: bold; }
li:last-child   { border-bottom: none; }
li:nth-child(2n) { background: #1e293b; } /* even rows */
p:not(.hidden)   { display: block; }

/* :is() — group selectors, takes highest specificity of list */
:is(h1, h2, h3) { line-height: 1.2; }

/* :where() — same but ZERO specificity (easy to override) */
:where(h1, h2, h3) { margin-top: 1rem; }

/* :has() — parent selector (modern, game-changing) */
.card:has(img)    { padding: 0; }      /* card with image */
label:has(+ input:focus) { color: blue; } /* label before focused input */

/* Pseudo-elements — style parts of element */
p::first-line   { font-weight: bold; }
::placeholder   { color: #64748b; }
::selection     { background: #38bdf8; color: #000; }

.btn::before {
  content: '';           /* required even if empty */
  display: block;
}`
  },

  // ── CSS Layouts ──────────────────────────────────────────
  {
    category: 'CSS Layouts', difficulty: 'Intermediate',
    question: 'How does CSS Flexbox work — axes, alignment, and common patterns?',
    answer: 'Flexbox is a one-dimensional layout system (either row or column). The flex container controls alignment of its children (flex items). Main axis: direction of flex-direction. Cross axis: perpendicular. justify-content aligns along main axis; align-items aligns along cross axis. flex: 1 makes an item grow to fill available space.',
    tip: `/* Flex container */
.container {
  display: flex;
  flex-direction: row;          /* row | column | row-reverse */
  justify-content: space-between; /* main axis alignment */
  align-items: center;          /* cross axis alignment */
  gap: 1rem;                    /* space between items */
  flex-wrap: wrap;              /* wrap to next line */
}

/* justify-content values: */
/* flex-start | flex-end | center | space-between | space-around | space-evenly */

/* align-items values: */
/* flex-start | flex-end | center | stretch | baseline */

/* Flex items */
.item { flex: 1; }              /* grow, shrink, basis shorthand */
/* flex: 1       = flex: 1 1 0%   (grow + shrink equally) */
/* flex: auto    = flex: 1 1 auto (natural size then grow/shrink) */
/* flex: none    = flex: 0 0 auto (no grow or shrink) */

/* Common patterns */
/* Center anything: */
.parent { display: flex; justify-content: center; align-items: center; }

/* Sticky footer: */
body { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }               /* pushes footer to bottom */

/* Navbar: logo left, links right */
nav { display: flex; justify-content: space-between; align-items: center; }`
  },
  {
    category: 'CSS Layouts', difficulty: 'Intermediate',
    question: 'How does CSS Grid work — tracks, areas, and placement?',
    answer: 'CSS Grid is a two-dimensional layout system for rows AND columns simultaneously. Define the grid on a container; children are placed automatically or explicitly. grid-template-columns / rows define track sizes. fr unit distributes available space. grid-template-areas gives layouts a visual, named map. Auto-placement fills items into the next available cell.',
    tip: `/* Define grid */
.layout {
  display: grid;
  grid-template-columns: 240px 1fr 1fr;   /* 3 cols */
  grid-template-rows: auto 1fr auto;       /* 3 rows */
  gap: 1rem;
  min-height: 100vh;
}

/* fr unit — fractional space */
grid-template-columns: 1fr 2fr;   /* 1/3 and 2/3 */
grid-template-columns: repeat(3, 1fr); /* 3 equal cols */

/* Named template areas */
.layout {
  grid-template-areas:
    "header header header"
    "sidebar main   main  "
    "footer  footer footer";
}
header  { grid-area: header; }
.sidebar{ grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }

/* Explicit item placement */
.hero { grid-column: 1 / -1; }    /* span all columns */
.box  { grid-column: 2 / 4; grid-row: 1 / 3; }

/* Responsive grid without media queries */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
/* creates as many 250px+ cols as fit in the container ✅ */`
  },
  {
    category: 'CSS Layouts', difficulty: 'Intermediate',
    question: 'How does CSS positioning work (relative, absolute, fixed, sticky)?',
    answer: 'static: default, normal flow. relative: offset from its own normal position, still occupies original space. absolute: removed from flow, positioned relative to nearest non-static ancestor. fixed: removed from flow, positioned relative to viewport — stays on scroll. sticky: stays in normal flow until it reaches a scroll threshold, then acts like fixed.',
    tip: `/* static — default, no offset */
.box { position: static; }

/* relative — offset from normal position */
.badge {
  position: relative;
  top: -4px;       /* moves UP 4px, original space preserved */
}

/* absolute — positioned relative to nearest positioned ancestor */
.card { position: relative; }   /* ← establishes positioning context */
.tag  {
  position: absolute;
  top: 1rem; right: 1rem;       /* top-right corner of .card */
}

/* fixed — stays relative to viewport */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;   /* pinned to top of screen */
  z-index: 100;
}

/* sticky — normal flow until scroll threshold */
.table-header {
  position: sticky;
  top: 60px;     /* sticks 60px from viewport top when scrolled to */
}

/* z-index — only works on positioned elements */
/* Higher = on top. Default auto = stack order in HTML */`
  },
  {
    category: 'CSS Layouts', difficulty: 'Intermediate',
    question: 'How do you implement responsive design with media queries and mobile-first?',
    answer: 'Mobile-first: write base styles for small screens, then use min-width media queries to add styles for larger screens. This ensures minimal CSS is loaded on mobile. Common breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl). Prefer logical breakpoints based on your content over device-specific ones. Container queries (new) let you respond to the parent container width, not the viewport.',
    tip: `/* Mobile-first — base styles = smallest screen */
.grid {
  display: flex;
  flex-direction: column;  /* single column on mobile */
  gap: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .grid {
    flex-direction: row;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Common breakpoints (Tailwind defaults): */
/* sm:  640px   md:  768px   lg: 1024px   xl: 1280px   2xl: 1536px */

/* Dark mode */
@media (prefers-color-scheme: dark) { ... }

/* Reduced motion (accessibility) */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}

/* Container queries — NEW, respond to parent not viewport */
.card-container { container-type: inline-size; }
@container (min-width: 400px) {
  .card { flex-direction: row; }
}`
  },

  // ── Tailwind CSS ─────────────────────────────────────────
  {
    category: 'Tailwind CSS', difficulty: 'Beginner',
    question: 'What is Tailwind CSS and what is the utility-first approach?',
    answer: 'Tailwind CSS is a utility-first CSS framework — instead of writing custom CSS classes, you compose small, single-purpose utility classes directly in HTML. No more naming things, no CSS files bloating over time, no context-switching. Tailwind\'s JIT (Just-In-Time) compiler scans your files and generates only the CSS you actually use, resulting in tiny production bundles (~5–15 KB).',
    tip: `<!-- Traditional CSS approach -->
<div class="card">...</div>

<style>
.card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>

<!-- Tailwind utility-first approach -->
<div class="bg-white rounded-lg p-6 shadow-md">...</div>

<!-- Real button example -->
<button class="
  bg-blue-500 hover:bg-blue-600
  text-white font-semibold
  px-4 py-2 rounded-lg
  transition-colors duration-200
  disabled:opacity-50 disabled:cursor-not-allowed
">
  Save Changes
</button>

<!-- Benefits:
  ✅ No unused CSS in production (JIT purges)
  ✅ Never name classes again
  ✅ Consistent spacing/color scale
  ✅ Styles visible in HTML — no hunting through CSS files
  ✅ No specificity battles
-->`
  },
  {
    category: 'Tailwind CSS', difficulty: 'Beginner',
    question: 'What are the core Tailwind utility categories and naming conventions?',
    answer: 'Tailwind classes follow consistent naming: property-value patterns with a standardised scale. Spacing uses a numeric scale (4 = 1rem, 8 = 2rem). Colors follow color-shade. Sizing uses fractions and keywords. Learning the naming pattern lets you guess most class names.',
    tip: `/* Layout */
flex items-center justify-between gap-4
grid grid-cols-3 col-span-2
container mx-auto px-4

/* Spacing (1 unit = 4px / 0.25rem) */
p-4      /* padding: 1rem */
px-6     /* padding-left + right: 1.5rem */
py-2     /* padding-top + bottom: 0.5rem */
mt-8     /* margin-top: 2rem */
mb-0     /* margin-bottom: 0 */
gap-3    /* gap: 0.75rem */
space-x-4 /* margin between horizontal children */

/* Sizing */
w-full   h-screen   w-1/2   max-w-lg   min-h-0

/* Typography */
text-sm text-lg text-2xl      /* font-size */
font-bold font-semibold        /* font-weight */
text-gray-600 text-white       /* color */
leading-relaxed tracking-wide  /* line-height, letter-spacing */
uppercase truncate text-center

/* Colors */
bg-blue-500   text-red-600   border-green-400
/* Scale: 50(lightest) 100 200 300 400 500 600 700 800 900 950(darkest) */

/* Borders + Effects */
border border-gray-200 rounded-xl rounded-full
shadow-sm shadow-lg
opacity-50 transition duration-200`
  },
  {
    category: 'Tailwind CSS', difficulty: 'Beginner',
    question: 'How does Tailwind responsive design and state variants work?',
    answer: 'Tailwind uses prefix modifiers for responsive breakpoints (sm:, md:, lg:, xl:) and interaction states (hover:, focus:, active:, disabled:, dark:, group-hover:). Breakpoints are mobile-first — sm: means "at 640px and above". Combine multiple variants: dark:hover:bg-blue-600. Tailwind generates variants on-demand with JIT.',
    tip: `<!-- Responsive: mobile-first prefixes -->
<div class="
  flex-col        <!-- mobile: column -->
  md:flex-row     <!-- 768px+: row -->
  lg:gap-8        <!-- 1024px+: larger gap -->
">

<!-- State variants -->
<button class="
  bg-blue-500
  hover:bg-blue-600       <!-- on hover -->
  focus:ring-2            <!-- on focus -->
  focus:ring-blue-300
  active:scale-95         <!-- on click -->
  disabled:opacity-50     <!-- when disabled -->
  disabled:cursor-not-allowed
">Submit</button>

<!-- Dark mode -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

<!-- Group hover — parent hover affects child -->
<div class="group cursor-pointer">
  <p class="text-gray-500 group-hover:text-blue-500">Link</p>
  <span class="opacity-0 group-hover:opacity-100">→</span>
</div>

<!-- Peer — sibling state -->
<input type="checkbox" class="peer" />
<label class="peer-checked:text-blue-500">Accept terms</label>`
  },
  {
    category: 'Tailwind CSS', difficulty: 'Intermediate',
    question: 'How do you customise Tailwind with tailwind.config.js and @apply?',
    answer: 'tailwind.config.js is the central config — extend the default theme (colors, fonts, spacing, breakpoints) without replacing it. Use the theme.extend key to add new values alongside defaults. @apply lets you compose utilities into a reusable CSS class — good for components repeated many times. Plugins add new utilities or components.',
    tip: `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],  // files to scan
  darkMode: 'class',   // toggle dark mode with .dark class on <html>
  theme: {
    extend: {           // ADD to defaults (not replace)
      colors: {
        brand: {
          50:  '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // .prose class for rich text
    require('@tailwindcss/forms'),        // styled form inputs
  ],
};

/* @apply — extract repeated utilities into a class */
.btn {
  @apply inline-flex items-center justify-center;
  @apply px-4 py-2 rounded-lg font-semibold;
  @apply transition-colors duration-200;
}
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white;
}`
  },
  {
    category: 'Tailwind CSS', difficulty: 'Intermediate',
    question: 'How does Tailwind v4 differ from v3, and what is the new CSS-first config?',
    answer: 'Tailwind v4 (2025) is a complete rewrite with a new Rust-based engine (Oxide) — 10x faster builds. Key changes: no tailwind.config.js — configuration moves entirely into CSS using @import and @theme. Automatic content detection (no content array needed). CSS variables for every design token. New utilities added (field-sizing, color-mix, starting-style). @utility replaces @layer for custom utilities.',
    tip: `/* Tailwind v4 — CSS-first configuration (no config.js!) */
@import "tailwindcss";

/* Custom theme tokens via @theme */
@theme {
  --color-brand-500: #0ea5e9;
  --color-brand-900: #0c4a6e;
  --font-family-sans: "Inter", system-ui, sans-serif;
  --spacing-18: 4.5rem;
  --radius-4xl: 2rem;
}

/* Custom utilities with @utility */
@utility container-query {
  container-type: inline-size;
}

/* v4 new features */
/* field-sizing: auto-grow textarea */
textarea { field-sizing: content; }

/* color-mix for opacity variants */
/* bg-blue-500/75 uses color-mix(in oklch, ...) internally */

/* Starting style — animate from initial state */
@starting-style {
  .dialog[open] { opacity: 0; transform: scale(0.9); }
}

/* v3 → v4 migration: */
/* v3: npx tailwindcss@3    v4: npx @tailwindcss/cli */
/* v3: tailwind.config.js   v4: @import "tailwindcss" in CSS */
/* v3: purge/content array  v4: auto-detected ✅ */`
  },
];

/* ═══════════════════════════════════════════════════════════
   JAVASCRIPT — 50 cards across 6 topics
═══════════════════════════════════════════════════════════ */
const JS_CARDS = [
  {
    category: 'JavaScript Core', difficulty: 'Beginner',
    question: 'What is a closure?',
    answer: 'A closure is a function that retains access to its outer (lexical) scope even after that scope has finished executing. The inner function "closes over" variables from the enclosing scope.',
    tip: `function makeCounter() {
  let count = 0;
  return () => ++count;   // closes over 'count'
}
const counter = makeCounter();
counter(); // 1
counter(); // 2`
  },
  {
    category: 'JavaScript Core', difficulty: 'Beginner',
    question: 'What are the differences between `var`, `let`, and `const`?',
    answer: '`var` is function-scoped, hoisted, and re-declarable. `let` is block-scoped, not hoisted to a usable value (temporal dead zone), and can be reassigned. `const` is block-scoped, cannot be reassigned, but objects/arrays it references can still be mutated.',
    tip: `if (true) {
  var x = 1;   // leaks to function scope
  let y = 2;   // block-scoped
  const z = 3; // block-scoped, no re-assign
}
console.log(x); // 1
console.log(y); // ReferenceError`
  },
  {
    category: 'JavaScript Core', difficulty: 'Beginner',
    question: 'What is the difference between `==` and `===`?',
    answer: '`==` (loose equality) performs type coercion before comparing — it converts operands to the same type first. `===` (strict equality) compares value AND type with no conversion. Always prefer `===` to avoid unexpected bugs.',
    tip: `0 == "0"   // true  (coercion)
0 === "0"  // false (strict)
null == undefined   // true
null === undefined  // false`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'What is hoisting and what gets hoisted?',
    answer: 'Hoisting is JS\'s behaviour of moving declarations to the top of their scope before execution. Function declarations are fully hoisted. `var` declarations are hoisted but initialised as `undefined`. `let`/`const` are hoisted but stay in a Temporal Dead Zone (TDZ) — accessing them before declaration throws a ReferenceError.',
    tip: `console.log(a); // undefined (hoisted)
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 5;

greet(); // works — function declaration hoisted
function greet() { console.log('hi'); }`
  },
  {
    category: 'JavaScript Core', difficulty: 'Beginner',
    question: 'What does the spread operator (`...`) do?',
    answer: 'The spread operator expands an iterable (array, string, Set) or object into its individual elements. Common uses: copying arrays/objects, merging them, and spreading array items as function arguments.',
    tip: `const a = [1, 2];
const b = [...a, 3, 4];   // [1, 2, 3, 4]

const obj = { x: 1 };
const clone = { ...obj, y: 2 }; // { x:1, y:2 }

Math.max(...a); // 2`
  },
  {
    category: 'JavaScript Core', difficulty: 'Beginner',
    question: 'What is destructuring?',
    answer: 'Destructuring is syntax that unpacks values from arrays or properties from objects into individual variables. It supports default values, renaming, and rest patterns.',
    tip: `const { name, age = 18 } = person;       // object
const [first, , third] = [1, 2, 3];     // array
const { a: renamed } = { a: 42 };       // rename
const { x, ...rest } = { x:1, y:2 };   // rest`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'How does `this` work in JavaScript?',
    answer: '`this` is determined at call time, not definition time. In a regular function: `this` = the caller object, or `undefined` in strict mode. In an arrow function: `this` is inherited from the enclosing lexical scope. In a method: `this` = the object before the dot. In class constructor: `this` = the new instance.',
    tip: `const obj = {
  name: 'Alice',
  greet() { console.log(this.name); }, // 'Alice'
  arrow: () => console.log(this),      // outer this
};
obj.greet();         // 'Alice'
const fn = obj.greet;
fn();                // undefined (strict mode)`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'What is the difference between `call`, `apply`, and `bind`?',
    answer: 'All three set the `this` value of a function. `call(thisArg, a, b)` invokes immediately with individual arguments. `apply(thisArg, [a, b])` invokes immediately with an array. `bind(thisArg, a)` returns a new permanently-bound function without calling it.',
    tip: `function greet(greeting, punct) {
  return greeting + ' ' + this.name + punct;
}
const user = { name: 'Alice' };
greet.call(user, 'Hi', '!');      // 'Hi Alice!'
greet.apply(user, ['Hi', '!']);   // 'Hi Alice!'
const hi = greet.bind(user, 'Hi');
hi('.');                          // 'Hi Alice.'`
  },
  {
    category: 'JavaScript Core', difficulty: 'Beginner',
    question: 'What is the difference between `null` and `undefined`?',
    answer: '`undefined` means a variable was declared but never assigned a value — it is the default. `null` is an explicit, intentional absence of a value. Notably, `typeof null === "object"` is a long-standing JS bug. Use `=== null` to check for null.',
    tip: `let a;              // undefined
let b = null;       // explicit empty value

typeof undefined    // "undefined"
typeof null         // "object" (quirk!)

null == undefined   // true (loose)
null === undefined  // false`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'What is prototypal inheritance?',
    answer: 'Objects in JS have an internal `[[Prototype]]` link to another object. When you access a property, JS walks up the prototype chain until it finds it or reaches `null`. Classes in JS are syntactic sugar over this prototype system.',
    tip: `const animal = { breathe() { return true; } };
const dog = Object.create(animal);
dog.bark = () => 'woof';

dog.bark();    // 'woof'   (own property)
dog.breathe(); // true     (from prototype)
Object.getPrototypeOf(dog) === animal; // true`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'What is a higher-order function?',
    answer: 'A higher-order function either takes one or more functions as arguments, or returns a function. They enable composition, abstraction, and functional programming patterns. `map`, `filter`, `reduce`, and `setTimeout` are all higher-order functions.',
    tip: `// Takes a function
[1,2,3].map(x => x * 2);       // [2, 4, 6]

// Returns a function
const multiply = n => x => x * n;
const double = multiply(2);
double(5); // 10`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'What is the difference between `map`, `filter`, and `reduce`?',
    answer: '`map` transforms every element and returns a new array of the same length. `filter` returns a new array with only elements that pass a test. `reduce` accumulates all elements into a single value of any type.',
    tip: `const nums = [1, 2, 3, 4];
nums.map(n => n * 2);              // [2, 4, 6, 8]
nums.filter(n => n % 2 === 0);    // [2, 4]
nums.reduce((acc, n) => acc + n, 0); // 10`
  },
  {
    category: 'JavaScript Core', difficulty: 'Advanced',
    question: 'What is a generator function?',
    answer: 'A generator function (declared with `function*`) can pause execution at each `yield` and resume later. Calling it returns an iterator. Useful for lazy sequences, infinite data streams, and async control flow.',
    tip: `function* range(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
const gen = range(1, 3);
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }`
  },
  {
    category: 'JavaScript Core', difficulty: 'Intermediate',
    question: 'What is nullish coalescing (`??`) vs logical OR (`||`)?',
    answer: '`||` returns the right-hand side when the left is any falsy value (`0`, `""`, `false`, `null`, `undefined`). `??` only falls back when the left side is `null` or `undefined`, preserving legitimate falsy values like `0` or `""`. Use `??` when `0` or empty string are valid values.',
    tip: `const a = 0 || 'default';   // 'default' (0 is falsy)
const b = 0 ?? 'default';   // 0  (not null/undef)

const c = null ?? 'fallback'; // 'fallback'
const d = '' ?? 'fallback';   // ''`
  },
  {
    category: 'Async JavaScript', difficulty: 'Beginner',
    question: 'What is a Promise?',
    answer: 'A Promise is an object representing the eventual completion or failure of an async operation. It has three states: `pending` (initial), `fulfilled` (succeeded), or `rejected` (failed). You attach callbacks with `.then()`, `.catch()`, and `.finally()`.',
    tip: `const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
});

p.then(val => console.log(val))  // 'done'
 .catch(err => console.error(err))
 .finally(() => console.log('cleanup'));`
  },
  {
    category: 'Async JavaScript', difficulty: 'Beginner',
    question: 'What does `async`/`await` do?',
    answer: '`async` marks a function to always return a Promise. `await` pauses execution inside that function until the awaited Promise settles, then returns its resolved value. It makes asynchronous code look synchronous. Errors are caught with `try/catch`.',
    tip: `async function fetchUser(id) {
  try {
    const res  = await fetch('/api/users/' + id);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Failed:', err);
  }
}`
  },
  {
    category: 'Async JavaScript', difficulty: 'Advanced',
    question: 'How does the JavaScript event loop work?',
    answer: 'JS is single-threaded. The event loop continuously checks: if the call stack is empty, it first drains the microtask queue (Promises, queueMicrotask), then picks one task from the macrotask queue (setTimeout, setInterval, I/O). Microtasks always run before the next macrotask.',
    tip: `console.log('1');                        // call stack
setTimeout(() => console.log('4'), 0);  // macrotask
Promise.resolve().then(() => console.log('3')); // microtask
console.log('2');                        // call stack
// Output order: 1 → 2 → 3 → 4`
  },
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'What is the difference between microtasks and macrotasks?',
    answer: 'Macrotasks: `setTimeout`, `setInterval`, `setImmediate`, I/O, UI events. Microtasks: Promise `.then`/`.catch`, `queueMicrotask`, `MutationObserver`. After each macrotask the entire microtask queue is drained before the next macrotask. Promise callbacks always resolve before the next timer.',
  },
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'What is the difference between `Promise.all`, `Promise.allSettled`, and `Promise.race`?',
    answer: '`Promise.all([...])` — resolves when ALL resolve; rejects immediately if ANY rejects. `Promise.allSettled([...])` — waits for ALL to settle; returns array of `{status, value/reason}`. `Promise.race([...])` — resolves/rejects as soon as the FIRST one settles.',
    tip: `await Promise.all([p1, p2]);        // fails fast on error
await Promise.allSettled([p1, p2]); // always waits for all
await Promise.race([p1, timeout]);  // first settled wins
// Also: Promise.any() — first fulfilled (ignores rejects)`
  },
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'What is callback hell and how do you avoid it?',
    answer: 'Callback hell (pyramid of doom) occurs when async operations are deeply nested, making code unreadable and error-prone. Solutions: Promises with `.then()` chaining, `async`/`await`, or extracting callbacks into named functions.',
    tip: `// Callback hell ❌
fs.readFile(f, (err, data) => {
  parse(data, (err, result) => {
    save(result, (err) => { ... });
  });
});

// async/await ✅
const data   = await fs.promises.readFile(f);
const result = await parse(data);
await save(result);`
  },
  {
    category: 'Async JavaScript', difficulty: 'Advanced',
    question: 'What is `AbortController` and when do you use it?',
    answer: 'AbortController lets you cancel in-flight async operations (like `fetch` requests). Create a controller, pass its `.signal` to the request, and call `.abort()` to cancel. The fetch rejects with a `DOMException` named `"AbortError"`. Useful for cancelling stale requests in search-as-you-type or on component unmount.',
    tip: `const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .then(r => r.json())
  .catch(err => {
    if (err.name === 'AbortError') return; // cancelled
    throw err;
  });

controller.abort(); // cancel the request`
  },
  {
    category: 'Async JavaScript', difficulty: 'Intermediate',
    question: 'What does `setTimeout(fn, 0)` actually do?',
    answer: 'It schedules `fn` as a macrotask to run after the current call stack AND all microtasks are cleared, with at least 0 ms delay (browsers enforce ~1–4 ms minimum). Does NOT run immediately. Used to defer work until after the browser paints, or to yield control to the event loop.',
    tip: `console.log('A');
setTimeout(() => console.log('C'), 0);
Promise.resolve().then(() => console.log('B'));
// Output: A → B → C
// Microtask (Promise) always runs before macrotask (setTimeout)`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is event delegation?',
    answer: 'Event delegation places a single listener on a parent element instead of on every child. Because events bubble up the DOM, you check `event.target` to act on the specific child. Benefits: fewer listeners, works for dynamically added elements, lower memory usage.',
    tip: `document.querySelector('#list').addEventListener('click', e => {
  const item = e.target.closest('li');
  if (!item) return;
  console.log('Clicked:', item.textContent);
});`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is the difference between event bubbling and event capturing?',
    answer: 'Events travel in three phases: capture (top → target), target, bubble (target → top). By default, listeners fire in the bubble phase. Pass `true` (or `{ capture: true }`) as the third argument to listen in the capture phase. `stopPropagation()` halts propagation in either direction.',
    tip: `// Bubble (default) — inner to outer
el.addEventListener('click', fn);

// Capture — outer to inner
el.addEventListener('click', fn, true);

// Stop propagation
el.addEventListener('click', e => {
  e.stopPropagation(); // stops travelling up/down
});`
  },
  {
    category: 'DOM & Browser', difficulty: 'Beginner',
    question: 'What is the difference between `preventDefault()` and `stopPropagation()`?',
    answer: '`preventDefault()` cancels the browser\'s default action (e.g. prevents a link from navigating, a form from submitting). `stopPropagation()` stops the event from travelling further up/down the DOM tree. They are independent — you can call one, both, or neither.',
    tip: `link.addEventListener('click', e => {
  e.preventDefault();    // don't follow href
  e.stopPropagation();   // don't bubble to parent
});`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is `MutationObserver` and when is it useful?',
    answer: '`MutationObserver` watches for changes to the DOM (added/removed nodes, attribute changes, text content changes) and fires a callback asynchronously. Useful for reacting to third-party DOM mutations, tracking when elements appear/disappear, building component frameworks.',
    tip: `const observer = new MutationObserver(mutations => {
  mutations.forEach(m => console.log(m.type));
});
observer.observe(document.body, {
  childList: true,   // watch added/removed nodes
  subtree: true,     // include all descendants
  attributes: true,  // watch attribute changes
});
observer.disconnect(); // stop observing`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is `IntersectionObserver` and what is it used for?',
    answer: '`IntersectionObserver` asynchronously observes when an element enters or exits the viewport. It fires a callback with intersection ratio data. Used for: lazy-loading images, infinite scroll, triggering CSS animations on scroll, sticky header activation.',
    tip: `const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src; // lazy load
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('img[data-src]')
  .forEach(img => observer.observe(img));`
  },
  {
    category: 'DOM & Browser', difficulty: 'Beginner',
    question: 'What is the difference between `localStorage` and `sessionStorage`?',
    answer: 'Both Web Storage APIs store key-value pairs as strings. `localStorage` persists until explicitly cleared — survives browser restarts. `sessionStorage` is cleared when the browser tab closes. Both are synchronous, limited to ~5 MB, and scoped to the origin.',
    tip: `localStorage.setItem('theme', 'dark');
localStorage.getItem('theme');     // 'dark'
localStorage.removeItem('theme');
localStorage.clear();

// sessionStorage: same API, tab-scoped
sessionStorage.setItem('token', 'abc');`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is `requestAnimationFrame` and why use it for animations?',
    answer: '`requestAnimationFrame(callback)` schedules a callback to run just before the browser\'s next repaint (~60 fps). Syncs with the display refresh rate, pauses when the tab is hidden, and avoids layout thrashing. Always use it for JS-driven animations instead of `setInterval`.',
    tip: `function animate(timestamp) {
  const progress = timestamp / 1000; // seconds
  element.style.left = progress * 100 + 'px';

  if (progress < 5) {
    requestAnimationFrame(animate); // loop
  }
}
requestAnimationFrame(animate);`
  },
  {
    category: 'DOM & Browser', difficulty: 'Intermediate',
    question: 'What is the Virtual DOM?',
    answer: 'The Virtual DOM is a lightweight in-memory JS representation of the real DOM, used by frameworks like React. On state change, a new virtual tree is created, diffed against the previous one (reconciliation), and only changed nodes are updated in the real DOM. This batches updates and avoids costly full re-renders.',
  },
  {
    category: 'CSS', difficulty: 'Beginner',
    question: 'What is the CSS box model?',
    answer: 'Every element is a rectangular box: Content → Padding → Border → Margin (inside out). `box-sizing: content-box` (default) makes `width`/`height` apply to content only. `box-sizing: border-box` includes padding and border in stated dimensions — far more intuitive and recommended.',
    tip: `/* Apply globally (recommended) */
*, *::before, *::after { box-sizing: border-box; }

.box {
  width: 200px;   /* includes padding + border */
  padding: 20px;
  border: 2px solid;
  margin: 10px;   /* outside the element */
}`
  },
  {
    category: 'CSS', difficulty: 'Beginner',
    question: 'What is Flexbox and when should you use it?',
    answer: 'Flexbox is a one-dimensional layout model — distributing space along a row OR a column. Use it for: navigation bars, centering items, equal-height columns, spacing with `gap`, and any layout where items should flex to fill space. Set `display: flex` on the parent container.',
    tip: `.container {
  display: flex;
  flex-direction: row;            /* or column */
  justify-content: space-between; /* main axis */
  align-items: center;            /* cross axis */
  gap: 1rem;
  flex-wrap: wrap;                /* allow wrapping */
}`
  },
  {
    category: 'CSS', difficulty: 'Intermediate',
    question: 'What is CSS Grid and how does it differ from Flexbox?',
    answer: 'CSS Grid is two-dimensional — rows AND columns simultaneously. Use Grid for overall page layouts, image galleries, and complex two-axis positioning. Use Flexbox for one-dimensional layouts (a row OR a column). They complement each other and can be nested freely.',
    tip: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.item-wide {
  grid-column: span 2; /* spans 2 columns */
}

/* Named areas */
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";`
  },
  {
    category: 'CSS', difficulty: 'Intermediate',
    question: 'How does CSS specificity work?',
    answer: 'Specificity is a score (A, B, C): A = inline styles, B = ID selectors, C = class/attribute/pseudo-class selectors + element selectors (lowest). Higher specificity always wins, regardless of source order. When tied, last rule wins. Avoid `!important` — it breaks the cascade.',
    tip: `/* Specificity: A  B  C  */
style=""            /* 1, 0, 0 — inline */
#nav                /* 0, 1, 0 — ID */
.nav-link           /* 0, 0, 1 — class */
nav a.link          /* 0, 0, 2 — element + class */
nav                 /* 0, 0, 1 — element */`
  },
  {
    category: 'CSS', difficulty: 'Beginner',
    question: 'What are CSS Custom Properties (variables)?',
    answer: 'CSS Custom Properties (`--name: value`) are variables that cascade and inherit like regular CSS. Define on `:root` for global scope. Use `var(--name)` to reference. Ideal for theming and design tokens — change one variable and it propagates everywhere.',
    tip: `:root {
  --color-primary: #38bdf8;
  --spacing-md: 1rem;
}
.button {
  background: var(--color-primary);
  padding: var(--spacing-md);
}
@media (prefers-color-scheme: dark) {
  :root { --color-primary: #7dd3fc; }
}`
  },
  {
    category: 'CSS', difficulty: 'Intermediate',
    question: 'What is the difference between `position: relative`, `absolute`, `fixed`, and `sticky`?',
    answer: '`relative`: offset from normal position, stays in flow. `absolute`: removed from flow, positioned relative to nearest positioned ancestor. `fixed`: removed from flow, positioned relative to viewport — stays on scroll. `sticky`: stays in flow until it hits a threshold, then acts like `fixed` within its parent.',
    tip: `.parent { position: relative; } /* anchor for absolute child */

.tooltip {
  position: absolute;
  top: 100%; left: 0; /* relative to .parent */
}
.header {
  position: sticky;
  top: 0;       /* sticks when scrolled to top */
  z-index: 100;
}`
  },
  {
    category: 'CSS', difficulty: 'Intermediate',
    question: 'What is a stacking context and how does `z-index` work?',
    answer: 'A stacking context is an isolated layer where elements are painted in z-order. `z-index` only works within the same stacking context — a child with `z-index: 9999` cannot appear above a sibling stacking context with lower z-index. New stacking contexts are created by: `position` + `z-index`, `opacity < 1`, `transform`, `filter`, `will-change`, etc.',
  },
  {
    category: 'CSS', difficulty: 'Intermediate',
    question: 'What is BEM methodology?',
    answer: 'BEM (Block, Element, Modifier) is a CSS naming convention: `.block`, `.block__element`, `.block--modifier`. Creates self-documenting, low-specificity class names. Avoids style leaks and makes component-based CSS scalable across large teams without naming conflicts.',
    tip: `/* Block */           .card {}
/* Element */        .card__title {}
/* Element */        .card__image {}
/* Modifier */       .card--featured {}
/* Elem+Modifier */  .card__title--large {}

<article class="card card--featured">
  <h2 class="card__title card__title--large">
    Hello
  </h2>
</article>`
  },
  {
    category: 'Performance', difficulty: 'Intermediate',
    question: 'What is the difference between debounce and throttle?',
    answer: 'Both limit how often a function runs. `debounce` delays execution until after a pause — fires once after the user stops triggering. Best for: search-as-you-type, window resize. `throttle` fires at most once per interval — events in-between are ignored. Best for: scroll handlers, mousemove, game loops.',
    tip: `// Debounce — fires after 300ms pause
const search = debounce(q => fetchResults(q), 300);
input.addEventListener('input', e => search(e.target.value));

// Throttle — fires at most once per 100ms
const onScroll = throttle(() => updateHeader(), 100);
window.addEventListener('scroll', onScroll);`
  },
  {
    category: 'Performance', difficulty: 'Beginner',
    question: 'What is lazy loading and why does it matter?',
    answer: 'Lazy loading defers loading of resources (images, scripts, components) until they are needed (e.g. entering the viewport). Reduces initial page load time, bandwidth, and memory usage. Native HTML: `loading="lazy"` on `<img>` and `<iframe>`.',
    tip: `<!-- Native lazy loading -->
<img src="photo.jpg" loading="lazy" alt="..." />

<!-- React lazy component -->
const Chart = React.lazy(() => import('./Chart'));

// IntersectionObserver approach
if (entry.isIntersecting) {
  img.src = img.dataset.src; // load on demand
}`
  },
  {
    category: 'Performance', difficulty: 'Advanced',
    question: 'What is the Critical Rendering Path?',
    answer: 'The CRP is the sequence of steps the browser takes to render pixels: Parse HTML → Build DOM → Parse CSS → Build CSSOM → Combine into Render Tree → Layout → Paint → Composite. Optimise by: minimising render-blocking resources, reducing CSS/JS sizes, eliminating layout thrashing, using `async`/`defer` on scripts.',
  },
  {
    category: 'Performance', difficulty: 'Advanced',
    question: 'What are Web Workers?',
    answer: 'Web Workers run JavaScript in a background thread, separate from the main UI thread. Cannot access the DOM directly; communicate via `postMessage`/`onmessage`. Use for CPU-intensive tasks (image processing, data crunching, parsing) that would otherwise freeze the UI.',
    tip: `// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: heavyArray });
worker.onmessage = e => console.log('Result:', e.data);

// worker.js
self.onmessage = e => {
  const result = e.data.data.map(heavyCalc);
  self.postMessage(result);
};`
  },
  {
    category: 'Performance', difficulty: 'Advanced',
    question: 'What is tree shaking?',
    answer: 'Tree shaking is dead-code elimination by bundlers (Webpack, Rollup, Vite). It statically analyses ES module `import`/`export` statements and removes code that is never imported. Only works with ES modules — not CommonJS `require`. Results in smaller production bundles.',
    tip: `// math.js
export const add      = (a, b) => a + b;
export const multiply = (a, b) => a * b; // unused

// main.js — only 'add' is bundled
import { add } from './math.js';

// multiply() is tree-shaken out of the final bundle`
  },
  {
    category: 'Performance', difficulty: 'Advanced',
    question: 'What is code splitting?',
    answer: 'Code splitting divides a JS bundle into smaller chunks loaded on demand instead of all at once. Reduces initial bundle size and improves Time to Interactive (TTI). Implemented via dynamic `import()`, `React.lazy`, or bundler entry-point/vendor chunk configuration.',
    tip: `// Dynamic import — chunk loaded on click
button.addEventListener('click', async () => {
  const { Chart } = await import('./chart.js');
  new Chart(canvas, config);
});

// React lazy-loaded route
const Dashboard = React.lazy(() => import('./Dashboard'));`
  },
  {
    category: 'Security', difficulty: 'Intermediate',
    question: 'What is XSS (Cross-Site Scripting)?',
    answer: 'XSS is an attack where malicious scripts are injected into pages viewed by other users. Types: Stored (saved in DB), Reflected (in URL), DOM-based (unsafe client-side DOM manipulation). Prevent with: output encoding, CSP headers, avoid `innerHTML` with untrusted data.',
    tip: `// VULNERABLE ❌
element.innerHTML = userInput;

// SAFE ✅ — use textContent
element.textContent = userInput;

// Safe encoding helper
function encode(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}`
  },
  {
    category: 'Security', difficulty: 'Intermediate',
    question: 'What is CSRF (Cross-Site Request Forgery)?',
    answer: 'CSRF tricks an authenticated user\'s browser into making an unwanted request to a site they\'re logged into. Since cookies are sent automatically, the server sees a valid session. Defences: CSRF tokens in forms, `SameSite` cookie attribute (`Strict`/`Lax`), checking `Origin`/`Referer` headers.',
    tip: `// Server sets SameSite cookie
Set-Cookie: session=abc; SameSite=Strict; Secure; HttpOnly

// CSRF token in HTML form (server-rendered)
<input type="hidden" name="csrf_token"
       value="{{ csrf_token }}">`
  },
  {
    category: 'Security', difficulty: 'Beginner',
    question: 'What is HTTPS and why does it matter?',
    answer: 'HTTPS uses TLS (Transport Layer Security) to encrypt data between client and server, providing: Confidentiality (data unreadable in transit), Integrity (data can\'t be tampered with), Authentication (certificate proves server identity). Without HTTPS, passwords and tokens are transmitted in plaintext.',
  },
  {
    category: 'Security', difficulty: 'Intermediate',
    question: 'What is Content Security Policy (CSP)?',
    answer: 'CSP is an HTTP response header that tells the browser which sources are allowed to load scripts, styles, images, etc. One of the most effective XSS defences — even if a script is injected, the browser refuses to execute it if it violates the policy.',
    tip: `Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.example.com;
  style-src 'self' 'unsafe-inline';
  img-src *;
  frame-ancestors 'none';`
  },
  {
    category: 'Security', difficulty: 'Intermediate',
    question: 'What is CORS (Cross-Origin Resource Sharing)?',
    answer: 'CORS is a browser security mechanism that restricts cross-origin HTTP requests. By default, browsers block fetch/XHR to a different origin. The server must include `Access-Control-Allow-Origin` and related headers to grant access. CORS is enforced by the browser only — it does not protect server-to-server calls.',
    tip: `# Server response headers
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type, Authorization

# Preflight OPTIONS sent for:
# - non-simple methods (PUT, DELETE, PATCH)
# - custom headers`
  },
  {
    category: 'Security', difficulty: 'Beginner',
    question: 'What is SQL Injection and how do you prevent it?',
    answer: 'SQL Injection occurs when untrusted user input is embedded directly in a SQL query, letting attackers read unauthorised data, bypass authentication, or delete records. Prevention: always use parameterised queries / prepared statements. Never concatenate user input into SQL strings.',
    tip: `// VULNERABLE ❌
const q = "SELECT * FROM users WHERE id = " + userId;

// SAFE ✅ — parameterised query
db.query('SELECT * FROM users WHERE id = ?', [userId]);

// Node.js (pg)
const { rows } = await pool.query(
  'SELECT * FROM users WHERE id = $1', [userId]
);`
  },
];

/* ═══════════════════════════════════════════════════════════
   SUBJECTS
═══════════════════════════════════════════════════════════ */
const SUBJECTS = {
  'DSA':        DSA_CARDS,
  'Python':     PYTHON_CARDS,
  'C#':         CSHARP_CARDS,
  'SQL':        SQL_CARDS,
  'Database':   DATABASE_CARDS,
  'JavaScript': JS_CARDS,
  'Internet':   INTERNET_CARDS,
  'Linux':      LINUX_CARDS,
  'API':        API_CARDS,
  'Node.js':    NODEJS_CARDS,
  'React & SSR': REACT_CARDS,
  'CSS & Tailwind': CSS_CARDS,
  'Testing & Containers': DEVOPS_CARDS,
};

/* ═══════════════════════════════════════════════════════════
   SUBJECT GROUPS  (controls menu bar sections)
═══════════════════════════════════════════════════════════ */
const SUBJECT_GROUPS = {
  'Core':     ['DSA', 'Internet', 'Linux'],
  'Backend':  ['Python', 'C#', 'SQL', 'Database', 'API', 'Node.js', 'Testing & Containers'],
  'Frontend': ['JavaScript', 'React & SSR', 'CSS & Tailwind'],
};

const GROUP_COLORS = {
  'Core':     '#f97316',
  'Backend':  '#6366f1',
  'Frontend': '#61dafb',
};

/* ═══════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════ */
const SUBJECT_COLORS = {
  'DSA':        '#f97316',
  'Python':     '#3b82f6',
  'C#':         '#8b5cf6',
  'SQL':        '#06b6d4',
  'Database':   '#ec4899',
  'JavaScript': '#f59e0b',
  'Internet':   '#10b981',
  'Linux':      '#f97316',
  'API':        '#6366f1',
  'Node.js':    '#68a063',
  'React & SSR':    '#61dafb',
  'CSS & Tailwind': '#e879f9',
  'Testing & Containers': '#14b8a6',
};

const CATEGORY_COLORS = {
  // DSA
  'Complexity':      '#f97316',
  'Data Structures': '#fb923c',
  'Algorithms':      '#ea580c',
  'Patterns':        '#c2410c',
  'Hashing':         '#fbbf24',
  'Recursion':       '#f59e0b',
  'Interview':       '#d97706',
  // Database
  'Relational DB':    '#ec4899',
  'NoSQL':            '#f472b6',
  'DB Design & Perf': '#be185d',
  'PostgreSQL':       '#0369a1',
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
  'C# Basics':    '#8b5cf6',
  'OOP & Patterns': '#a78bfa',
  'LINQ & Async': '#7c3aed',
  // Python
  'Core Python': '#3b82f6',
  'OOP & Design': '#60a5fa',
  'Ecosystem':   '#1d4ed8',
  // JavaScript
  'JavaScript Core': '#f59e0b',
  'Async JavaScript':'#3b82f6',
  'DOM & Browser':   '#10b981',
  'CSS':             '#ec4899',
  'Performance':     '#8b5cf6',
  'Security':        '#ef4444',
  // Testing & Containers
  'Testing':    '#14b8a6',
  'Docker':     '#0891b2',
  'Kubernetes': '#0e7490',
  // CSS & Tailwind
  'CSS Fundamentals': '#e879f9',
  'CSS Layouts':      '#d946ef',
  'Tailwind CSS':     '#a21caf',
  // React & SSR
  'React Basics': '#61dafb',
  'Hooks':        '#38bdf8',
  'Performance':  '#0ea5e9',
  'SSR & Next.js':'#0284c7',
  // Node.js
  'Node.js Basics':           '#68a063',
  'Modules & npm':            '#4ade80',
  'Async & Error Handling':   '#16a34a',
  'HTTP & Express':           '#15803d',
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
  activeSubject: 'DSA',
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
  questionText.innerHTML = formatText(card.question);
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
