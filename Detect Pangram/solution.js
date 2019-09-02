function isPangram(string) {
  let hash = new Map();
  const charArr = string.toUpperCase().match(/[A-Z]/g);
  for (let i = 0; i < charArr.length; i++) {
    if (!hash.has(charArr[i])) {
      hash.set(charArr[i], charArr[i]);
    }
  }
  return hash.size >= 26 ? true : false;
}
