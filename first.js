const { incrementCache, getCache } = require("./cache");

incrementCache();
incrementCache();

console.log("Count from first.js");
console.log(getCache());
