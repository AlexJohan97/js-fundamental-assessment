# Exercise 4

Given the next implementation, refactor the `logAsync` function and the invocations in order to get the logs as expected.

```js
const logAsync = (msg) =>
  setTimeout(function () {
    console.log(msg);
  }, Math.random() * 1000);

const logOne = logAsync("I");
const logTwo = logAsync("promise");
const logThree = logAsync("you");

// expected:
// I
// promise
// you
```

**Restrictions:**

The solution must still using the `setTimeout` and `Math.random` for the time.
