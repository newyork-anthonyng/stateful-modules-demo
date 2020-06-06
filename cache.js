let cache = 0;

function incrementCache() {
  cache++;
}

function getCache() {
  return cache;
}

module.exports = {
  incrementCache,
  getCache,
};
