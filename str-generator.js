function make(string) {
  let count = 0;
  return () => `${string}_${++count}`;
}

var foo = make('A');
var bar = make('B');

console.log(foo()); // -> A_1
console.log(bar()); // -> B_1
console.log(foo()); // -> A_2
console.log(foo()); // -> A_3
console.log(bar()); // -> B_2
