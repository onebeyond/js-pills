# Recuce
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## Syntax ✏️
```
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

## Accumulate numbers 🔢

```
const cb = (acc, val) => acc + val

const sum = [1, 1].reduce(cb);
```

## Accumulate characters in a string 🎻

```
const cb = (acc, val) => acc + val

const animals = ['🐈','🦮'].reduce(cb);
```

## Accumulate object's properties 🍕

```
  data.reduce((acc, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.name] = { type: item.type };
    return acc;
  }, {});
```