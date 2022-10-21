const str = "aabbcd";

const first_non_repeating_letter = function (string) {
  for (let i = 0; i < string.length; i++) {
    let j = string.charAt(i);
    //comparison of the index of the first and last appearance of a character in a string
    if (string.indexOf(j) === string.lastIndexOf(j)) {
      return j;
    }
  }
  return "None";
};

console.log(first_non_repeating_letter(str));
