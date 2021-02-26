const add1 = n => n + 1;
const multiplyBy5 = n => n * 5;
const minus10 = n => n - 10;

const calculate = n => {
  const a = add1(n);
  const b = multiplyBy5(a);
  const c = minus10(b);
  return c;
};

const result = calculate(2);

const composeReducer = (fn1, fn2) => (...args) => fn1(fn2(...args));
const pipeReducer = (fn1, fn2) => (...args) => fn2(fn1(...args));

const compose = (...fns) => fns.reduce(composeReducer);
const pipe = (...fns) => fns.reduce(pipeReducer);

const composeResult = compose(minus10, multiplyBy5, add1)(2);
const pipeResult = pipe(add1, multiplyBy5, minus10)(2);

console.log('Result returned by caculate ------>', result);
console.log('Result returned by compose ------->', composeResult);
console.log('Result returned by pipe ---------->', pipeResult);
