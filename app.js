import storage from "./library";

storage("names", ["john", "apple"]);
storage("nano", "adam");
storage(222, 123);

console.log(storage("names"));
console.log(storage("nano"));
