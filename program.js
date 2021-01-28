// Add new functions, variables here
function Prime(n) {
  let kq = [];
  for (i = 2; i < n; i++) {
    while (n > 1) {
      if (n % i == 0) {
        kq.push(i);
        n = n / i;
      } else {
        i++;
      }
    }
  }
  return kq;
}


function main(input) {
  let n = parseInt(input);
  console.log(Prime(n).join(" "));
}

module.exports = main;
