const { customSetTimeout, clearAllTimeout } = (() => {
  const timeoutIds = [];

  const customSetTimeout = (...args) => {
    const id = setTimeout(...args);

    timeoutIds.push(id);

    return id;
  };

  const clearAllTimeout = () => {
    while (timeoutIds.length) {
      clearTimeout(timeoutIds.pop());
    }
  };

  return { customSetTimeout, clearAllTimeout };
})();

customSetTimeout(() => console.log("1"), 1000);
customSetTimeout(() => console.log("2"), 2000);
customSetTimeout(() => clearAllTimeout(), 2500);
customSetTimeout(() => console.log("3"), 3000);
customSetTimeout(() => console.log("4"), 4000);
