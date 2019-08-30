function alphabetPosition(text) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const charArray = text
    .replace(/\s/g, "")
    .toLowerCase()
    .split("");
  const arr = [];
  for (let i = 0; i < charArray.length; i++) {
    const number = alphabet.indexOf(charArray[i]);
    if (number !== -1) {
      arr.push(number + 1);
    }
  }
  return arr.join(" ");
}
