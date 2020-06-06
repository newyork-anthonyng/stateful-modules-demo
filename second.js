const { incrementCache, getCache } = require("./cache");

incrementCache();
incrementCache();

console.log("Count from second.js");
console.log(getCache());
