module.exports = {


  friendlyName: 'Price',


  description: 'Price calculate.',


  inputs: {
    pairInfo: { type: 'json', required: true },
    basePrice: { type: 'json', required: true },
  },


  exits: {

  },

  sync: true, 
  fn: function (inputs, exits) {
    let pairInfo = inputs.pairInfo; 
    let basePrice = inputs.basePrice; 

    if(pairInfo.origin.name.indexOf('USDT') == 0 || pairInfo.origin.name.indexOf('USD') == 0) {
      pairInfo.price = pairInfo.origin.price;
    }
    else if(pairInfo.origin.name.indexOf('BTC') == 0) {
      pairInfo.price = pairInfo.origin.price * basePrice.btc;
    }
    else if(pairInfo.origin.name.indexOf('ETH') == 0) {
      pairInfo.price = pairInfo.origin.price * basePrice.eth;
    }

    pairInfo.volume = pairInfo.price * pairInfo.origin.volume;
 
    // All done.
    return exits.success(pairInfo);

  }


};

