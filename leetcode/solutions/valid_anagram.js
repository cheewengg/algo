// https://leetcode.com/problems/valid-anagram/
// https://leetcode.com/submissions/detail/675224862/
// Runtime: 72 ms, faster than 97.57% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42.8 MB, less than 87.83% of JavaScript online submissions for Valid Anagram.
// O(n) time, O(n) space where n === s.length

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const convertStrToObj = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (obj.hasOwnProperty(char)) obj[char]++;
      else obj[char] = 1;
    }
    return obj;
  };

  const objS = convertStrToObj(s);
  const objT = convertStrToObj(t);

  const keyS = Object.keys(objS);
  const keyT = Object.keys(objT);

  if (keyS.length !== keyT.length) return false;

  for (let i = 0; i < keyS.length; i++) {
    const key = keyS[i];
    if (objS[key] !== objT[key]) return false;
  }

  return true;
};

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const arrayS = [...s];
//   const arrayT = [...t];

//   arrayS.sort();
//   arrayT.sort();

//   for (let i = 0; i < s.length; i++) {
//     if (arrayS[i] !== arrayT[i]) return false;
//   }

//   return true;
// };
