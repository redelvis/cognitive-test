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

var foo = throttle(function(msg) {
  console.log(msg);
}, 5000);

foo('test');
setTimeout(() => foo('test 2'), 0);
setTimeout(() => foo('test 3'), 3000);
setTimeout(() => foo('test 4'), 7500);
setTimeout(() => foo('test 5'), 14000);
