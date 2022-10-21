const numToIp = function (number) {
  let binaryNumber = number.toString(2).padStart(32, "0");
  let partOfIP = [];

  for (let i = 4; i > 0; i--) {
    partOfIP.push(binaryNumber.slice(32 - i * 8, 40 - i * 8));
  }
  partOfIP.forEach((elem, index) => (partOfIP[index] = parseInt(elem, 2)));

  return partOfIP.join(".");
};

console.log(numToIp(2149583361));
