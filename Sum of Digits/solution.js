function digital_root(n) {
  if (n.toString().length === 1) {
    return n;
  }
  const numbers = n.toString().split("");
  let sum = 0;
  numbers.forEach(num => {
    sum += parseInt(num);
  });
  if (sum.toString().length > 1) {
    return digital_root(sum);
  } else {
    return sum;
  }
}
