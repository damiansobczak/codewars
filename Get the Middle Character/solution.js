function getMiddle(s) {
  const word = s.split("");
  if (word.length % 2 === 0) {
    return word[word.length / 2 - 1] + word[word.length / 2 + 1 - 1];
  } else {
    return word[(word.length + 1) / 2 - 1];
  }
}
