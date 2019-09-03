function spinWords(string) {
  const wordsArr = string.split(" ");
  return wordsArr
    .map(word =>
      word.length >= 5
        ? word
            .split("")
            .reverse()
            .join("")
        : word
    )
    .join(" ");
}
