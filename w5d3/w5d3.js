const setTimeout = function() {
  window.setTimeout(function() {
    alert('HAMMERTIME');
  }, 5 * 1000);
}

setTimeout();
// asynchronous

const hammerTime = (time) => {
  window.setTimeout(function() {
    alert(`${time} is hammertime!`);
  });
}

hammerTime(50);
