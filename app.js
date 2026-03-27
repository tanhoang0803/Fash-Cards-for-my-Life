/* ═══════════════════════════════════════════════════════════
   DSA — Data Structures & Algorithms  (14 cards)
═══════════════════════════════════════════════════════════ */
const DSA_CARDS = [

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
   REACT & SSR — 24 cards across 7 categories
═══════════════════════════════════════════════════════════ */
const REACT_CARDS = [

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
  'Tricked Memory': TRICKED_CARDS,
};

/* ═══════════════════════════════════════════════════════════
   SUBJECT GROUPS  (controls menu bar sections)
═══════════════════════════════════════════════════════════ */
const SUBJECT_GROUPS = {
  'Core':     ['DSA', 'Internet', 'Linux', 'Tricked Memory'],
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
  'Tricked Memory': '#f43f5e',
};

const CATEGORY_COLORS = {
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
  'JS Functions':    '#f97316',
  'JS Patterns':     '#a855f7',
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
  'Fundamentals': '#61dafb',
  'Lifecycle':    '#38bdf8',
  'Hooks':        '#0ea5e9',
  'Data Flow':    '#0369a1',
  'Performance':  '#7c3aed',
  'Ecosystem':    '#a855f7',
  'Advanced':     '#7e22ce',
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
