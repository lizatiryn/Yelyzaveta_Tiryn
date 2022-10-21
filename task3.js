const digital_root = function (number) {
  if (number < 10) return number;
  else
    return digital_root(
      number
        .toString()
        .split("") //splitting a number into an array of strings
        .map(Number)
        .reduce((a, b) => a + b) //summing each number until the result is a single-digit number
    );
};

console.log(digital_root(223));
