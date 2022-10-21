//swapping the last two digits, if the first one is smaller
const sortLast = function (String) {
  let i = String.length - 1;
  if (String[i] > String[i - 1]) {
    [String[i - 1], String[i]] = [String[i], String[i - 1]];
    return String;
  } else return String;
};

const nextBigger = function (number) {
  let newNum = number;
  //a number to a string, splitting into an array one character at a time, sorting and returning to number
  newNum = parseInt(
    sortLast(newNum.toString().split("")).join().replaceAll(",", "")
  );
  //checking if the new number is greater
  if (newNum > number) {
    return newNum;
  } else return -1;
};

console.log(nextBigger(125));
