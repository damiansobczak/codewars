function humanReadable(seconds) {
  let format = function(int) {
    return int.length === 1 ? `0${int}` : `${int}`;
  };
  let hr = format(Math.floor(seconds / 3600).toString());
  let min = format(Math.floor((seconds % 3600) / 60).toString());
  let sec = format(Math.floor((seconds % 3600) % 60).toString());
  return `${hr}:${min}:${sec}`;
}
