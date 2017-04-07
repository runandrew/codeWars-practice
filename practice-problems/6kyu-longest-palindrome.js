// Longest palindrome

const longestPalindrome = (str) => {
  let longest = str.length && 1;

  for (let i = 0; i < str.length; i++) {
    let left = i - 1;
    let right = i + 1;

    console.log(str.charAt(i), i, left, right)
    while (left >= 0 || right <= str.length - 1) {
      if ((right - left) <= 999) {
        console.log('left/right', left, right)
        if (str.charAt(right) === str.charAt(i)) {
          right++;
        } else if (str.charAt(left) === str.charAt(i)) {
          left--;
        } else {
          console.log('break');
          // break;
        }
      }

      if (str.charAt(left) === str.charAt(right)) {
        console.log('in equal')
        left--;
        right++;
      } else {
        break;
      }
    }

    let length = right - left - 1;
    if (length > longest) longest = length;
  }

  return longest;
};

console.log(longestPalindrome('asasa'));
// racecar
// baab
