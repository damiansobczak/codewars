function validatePIN(pin) {
  return /(^\d{6}$|^\d{4}$)/.test(pin);
}
