function debounce(fn, ms) {
  let timeout;
  return function() {
    let t = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(t, args), ms);
  };
}

var foo = debounce(function(msg) {
  console.log(msg);
}, 5000);

foo('test');
setTimeout(() => foo('test 2'), 0);
setTimeout(() => foo('test 3'), 3000);
setTimeout(() => foo('test 4'), 7500);
setTimeout(() => foo('test 5'), 14000);
