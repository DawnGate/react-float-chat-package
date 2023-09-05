export function padStartForNumber(num: number, len = 2) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: len,
    useGrouping: false,
  });
}
