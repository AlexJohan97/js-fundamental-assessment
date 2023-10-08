// refactor here...

const logAsync = (msg,delay) =>
  setTimeout(function () {
    console.log(msg);
  }, Math.random()+delay*10);

const logOne = logAsync("I", 1);
const logTwo = logAsync("promise",2);
const logThree = logAsync("you",3);
