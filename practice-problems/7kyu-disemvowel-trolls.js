// Disemvowel Trolls

// take the vowels out of a string

function disemvowel(string) {
  // use reg exp to find the vowels, replace with ''
  return string.replace(/[aeiou]/gi, "");
}
