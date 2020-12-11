const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

pairs.forEach( async symbol => {
  const result = await fetch(`${url}${symbol}`);
  console.log(symbol, ':', result);
})

console.log('Start Fetching Prices');

const getPricesSync = async (pairs, url) => {
  while (pairs.length > 0) {
    const symbol = symbol.shift();
    const result = await fetch(`${url}${symbol}`);
    console.log(symbol, ':', result);
  }
};s

getPricesSync(pairs, urlApi);


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



const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

const getPricesSync = async (pairs, url) => {
  for (const symbol of pairs) {
    const result = await fetch(`${urlApi}${symbol}`);
    console.log(symbol, ':', result);
  }
};

getPricesSync(pairs, urlApi);


const urlApi = 'https://api.binance.com/api/v3/ticker/price?symbol=';
const pairs =  ['BTCUSDT', 'ETHUSDT', 'NEOUSDT', 'XRPUSDT', 'DAIUSDT'];

const pairsPromises = pairs.map(async symbol => await fetch(`${urlApi}${symbol}`));

const getPricesSync = async (promises) => {
  for await (const result of promises) {
    console.log('result', result);
  }
};
