var fibonacci = (function(n) {
  var memo = {};
  function inner(n) {
    var value;
    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = n;
      } else {
        value = inner(n - 1) + inner(n - 2);
      }
      memo[n] = value;
    }
    return value;
  }
  return inner;
})();
