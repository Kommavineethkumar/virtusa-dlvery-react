export function isEnterPressed(event, callback) {
  if (event.key === "Enter") {
    callback();
  }
}
