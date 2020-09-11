// HELPERS
function checkJSON(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    return json;
  }
}

function storage(...rest) {
  if (
    (typeof rest[0] === "string" || typeof rest[0] === "number") &&
    typeof rest[1] === "undefined"
  ) {
    let data = localStorage.getItem(rest[0]);

    return checkJSON(data);
  } else if (
    (typeof rest[0] === "string" && typeof rest[1] === "string") ||
    (typeof rest[0] === "number" && typeof rest[1] === "number") ||
    (typeof rest[0] === "string" && typeof rest[1] === "number")
  ) {
    return localStorage.setItem(rest[0], rest[1]);
  } else if (
    (typeof rest[0] === "string" && typeof [1] === "object") ||
    (typeof rest[0] === "string" && rest[1].isArray())
  ) {
    const data = JSON.stringify(rest[1]);
    return localStorage.setItem(rest[0], data);
  }
}
export default storage;
