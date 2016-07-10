module.exports = {
  bitfinex: {
    currency: '$',
    site: 'https://bitfinex.com/',
    url: 'https://api.bitfinex.com/v1/pubticker/ETHUSD'
  },
  etherscan: {
    currency: '$',
    site: 'https://etherscan.io',
    url: 'https://api.etherscan.io/api?module=stats&action=ethprice'
  },
  poloniex: {
    currency: '$',
    site: 'https://poloniex.com',
    url: 'https://poloniex.com/public?command=returnTicker'
  },
  kraken: {
    currency: '$',
    site: 'https://kraken.com',
    url: 'https://api.kraken.com/0/public/Ticker?pair=XETHZUSD'
  }
};
