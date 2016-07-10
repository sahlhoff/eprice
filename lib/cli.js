var colors = require('colors');
var open = require('open');
var exchanges = require('./exchanges');
var ethereum = require('./ethereum');
var rightPad = require('right-pad');
var List = require('term-list');

module.exports = cli;

function cli(){

  var list = new List({ marker: '\033[36m› \033[0m', markerLength: 2 });

  list._init = function(){
    for(var e in exchanges){
      list.add(exchanges[e].site, e);
    }

    list._fetch();
    list.start();
  };

  list._fetch = function(){
    var c = 0;
    for(var e in exchanges){
      ethereum(c, e, list._update);
      c++;
    }
  };

  list._update = function(index, exchange, value){
    var item = list.at(index);
    var label = '';
    
    label += rightPad(exchange, 25) + ' ';

    if(value !== 0){
      label += colors.green(exchanges[exchange].currency + value);
    } else {
      label += colors.red('offline');
    }

    item.label = label;
    list.draw();
  };

  list.on('keypress', function(key, item){
    switch(key.name){
    case 'return':
      list._fetch();
      break;
    case 'q':
      process.exit();
      break;
    case 'o':
      open(item);
      list.stop();
    }
  });

  list._init();
  
};
