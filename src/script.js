window.timeoutIds = [];

const originalSetTimeout = window.setTimeout;

window.setTimeout = (...args) => {
  const id = originalSetTimeout(...args);

  window.timeoutIds.push(id);

  return id;
};

window.clearAllTimeout = () => {
  while (window.timeoutIds.length) {
    clearTimeout(window.timeoutIds.pop());
  }
};

setTimeout(() => console.log("1"), 1000);
setTimeout(() => console.log("2"), 2000);
setTimeout(() => console.log("3"), 3000);
setTimeout(() => window.clearAllTimeout(), 3500);
setTimeout(() => console.log("4"), 4000);
