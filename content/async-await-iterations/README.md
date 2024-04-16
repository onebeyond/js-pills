---
slug: "/pill/async-await-iterations"
date: "2020-12-14"
author: ""
title: "Async Await iterations"
description: "Do you want to make asynchronous request sequentially? Using async await can be tricky. Let's see why."
---

### Async Await iterations

Do you want to make asynchronous request sequentially? Using async await can be tricky. Let's see why.

### The bad way (synchronous loop)

Let's do a dummy example let's say we want to get the quotes for a bunch of tokens y a crypto market.

If we run await in a regular forEach loop you will get the results of your request in random order since forEach only supports synchronous functions.

```js
const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

pairs.forEach( async symbol => {
  const result = await fetch(`${urlApi}${symbol}`);
  console.log(symbol, ':', result);
})

console.log('Start Fetching Prices');
```

Same happens with the classic imperative for loop, will not reproduce the example since I confident you already got the point.

```Js
for (var i=0; i < array.length; i++) {
  var item = array[i];
  // do something with item
}
```

### The while Way

We can run async functions sequentially inside an array

```js
const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

const getPricesSync = async (pairs, url) => {
  while (pairs.length > 0) {
    const symbol = pairs.shift();
    const result = await fetch(`${url}${symbol}`);
    console.log(symbol, ':', result);
  }
};

getPricesSync(pairs, urlApi);
```

### The for of way

The classic for of to the rescue. For of can run both synchronous and asynchronous functions.


```js
const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

const getPricesSync = async (pairs, url) => {
  for (const symbol of pairs) {
    const result = await fetch(`${urlApi}${symbol}`);
    console.log(symbol, ':', result);
  }
};

getPricesSync(pairs, urlApi);
```

### The for await way

Similar for of case when we want to loop an array of promises sequentially.

```js
const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

const pairsPromises = pairs.map(async symbol => await fetch(`${urlApi}${symbol}`));

const getPricesSync = async (promises) => {
  for await (const result of promises) {
    console.log('result', result);
  }
};

getPricesSync(pairsPromises);
```

### Bonus

There are still some awaits that can be used in other iterations as "map", "filter", "reduce" but this is for another pill since some won't work and other can with some workarounds.


### References

[https://zellwk.com/blog/async-await-in-loops/](https://zellwk.com/blog/async-await-in-loops/)s
