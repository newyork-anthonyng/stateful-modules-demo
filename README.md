This demo shows how modules are stateful.

`cache.js` has a `cache` variable. The `cache` variable is initially set to `0`. It is shared by `first.js` and `second.js`.

`first.js` increments the `cache` variable twice. We print the `cache` variable and it shows `2`.
Afterwards, `second.js` increments the `cache` variable twice. We print the `cache` variable and it shows `4`.

# Getting started
```
node app.js

# Count from first.js
# 2
# Count from second.js
# 4
```
