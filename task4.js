const count_pairs = function (array) {
  let count = 0;
  //loop to compare an element with the following ones
  for (let index = 0; index < array.length; index++) {
    for (i = index + 1; i < array.length; i++) {
      if (array[index] + array[i] == 5) count++; //pair counter
    }
  }
  return count;
};

console.log(count_pairs([1, 3, 6, 2, 2, 0, 4, 5]));
