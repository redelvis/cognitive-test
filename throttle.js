let throttle = function(fn, ms) {
  let inThrottle = undefined;
  return function() {
    let t = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(t, args);
      inThrottle = true;
      return setTimeout(() => (inThrottle = false), ms);
    }
  };
};
