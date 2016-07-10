var request = require('request');
var exchanges = require('./exchanges');

module.exports = price;

function price(index, key, updateList){
  request(exchanges[key].url, function(err, response, body){
    if(!err && response.statusCode == 200){
      var data = JSON.parse(body);
      updateList(index, key, normalize(key, data));
    } else {
      updateList(index, key, 0);
    }
  });
}

function normalize(key, data){
  var vale = 0;

  switch(key){
  case 'bitfinex':
    value = data.mid;
    break;
  case 'etherscan':
    value = data.result.ethusd;
    break;
  case 'poloniex':
    value = data.USDT_ETH.last;
    break;
  case 'kraken':
    value = data.result.XETHZUSD.c[0];
    break;
  }
  
  return Number(value).toFixed(2);
}
