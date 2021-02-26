const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs = ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

pairs.forEach(async symbol => {
  const result = await fetch(`${url}${symbol}`);
  console.log(symbol, ':', result);
});

console.log('Start Fetching Prices');

console.log('While');
const getPricesSyncWhile = async (pairs, url) => {
  while (pairs.length > 0) {
    const symbol = pairs.shift();
    const result = await fetch(`${url}${symbol}`);
    console.log(symbol, ':', result);
  }
};

getPricesSyncWhile(pairs, urlApi);

console.log('for of');

const getPricesSyncOf = async (pairs, url) => {
  for (const symbol of pairs) {
    S;
    const result = await fetch(`${urlApi}${symbol}`);
    console.log(symbol, ':', result);
  }
};

getPricesSyncOf(pairs, urlApi);

const pairsPromises = pairs.map(
  async symbol => await fetch(`${urlApi}${symbol}`)
);

const getPricesSyncOfAwait = async promises => {
  for await (const result of promises) {
    console.log('result', result);
  }
};

getPricesSyncOfAwait(pairsPromises);
