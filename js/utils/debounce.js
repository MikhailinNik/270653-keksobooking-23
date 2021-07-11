const TIMEOUT = 500;

const debounce = (callback, timeoutDelay) => {
  timeoutDelay = TIMEOUT;

  let timeoutId;

  return (...rest) => {

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {debounce};
