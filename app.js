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
};

const CATEGORY_COLORS = {
  // DSA
  'Complexity':      '#f97316',
  'Data Structures': '#fb923c',
  'Algorithms':      '#ea580c',
  'Patterns':        '#c2410c',
  // Database
  'Relational DB':    '#ec4899',
  'NoSQL':            '#f472b6',
  'DB Design & Perf': '#be185d',
  'PostgreSQL':       '#0369a1',
  // SQL
  'SQL Basics':          '#06b6d4',
  'Joins & Aggregation': '#0891b2',
  'Advanced SQL':        '#164e63',
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

  Object.keys(SUBJECTS).forEach(subject => {
    const btn = document.createElement('button');
    btn.className   = 'subject-btn' + (subject === state.activeSubject ? ' active' : '');
    btn.textContent = subject;

    const color = SUBJECT_COLORS[subject] || '#64748b';
    if (subject === state.activeSubject) {
      btn.style.background = color;
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

    nav.appendChild(btn);
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
