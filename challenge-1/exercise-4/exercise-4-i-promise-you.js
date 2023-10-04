// refactor here...

const logAsync = (msg) =>
  setTimeout(function () {
    console.log(msg);
  }, Math.random() * 1000);

const logOne = logAsync("I");
const logTwo = logAsync("promise");
const logThree = logAsync("you");
