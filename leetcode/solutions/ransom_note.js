// https://leetcode.com/problems/ransom-note/
// https://leetcode.com/submissions/detail/677129710/
// Runtime: 112 ms, faster than 61.56% of JavaScript online submissions for Ransom Note.
// Memory Usage: 44.2 MB, less than 81.87% of JavaScript online submissions for Ransom Note.
// O(max(r, m)) time, O(m) space where r === ransomNote.length, m === magazine.length

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const magazineLetters = {};

  for (letter of magazine) {
    if (magazineLetters[letter]) magazineLetters[letter]++;
    else magazineLetters[letter] = 1;
  }

  for (letter of ransomNote) {
    if (!magazineLetters[letter]) return false;
    magazineLetters[letter]--;
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
