

module.exports = {


  friendlyName: 'Bittrex',


  description: 'Bittrex market summary.',


  inputs: {
    data: { type: 'json', required: true },
  },


  exits: {

  },

  sync: true, 


  fn: function (inputs, exits) {
    let data = inputs.data;

    // All done.
    return exits.success({
      pair: data.MarketName,
      volume: data.Volume,
      baseVolume: data.BaseVolume,
      bid: data.Bid,
      ask: data.Ask,
      last: data.Last,
      dataTime: data.TimeStamp,
      exchanger: "bittrex",
    });

  }
};

// "MarketName": "ETH-WAX",
// "High": 0.00036955,
// "Low": 0.00027104,
// "Volume": 1202693.05005046,
// "Last": 0.00027766,
// "BaseVolume": 385.50588575,
// "TimeStamp": "2018-07-04T04:52:48.423",
// "Bid": 0.00027281,
// "Ask": 0.00027861,
// "OpenBuyOrders": 154,
// "OpenSellOrders": 125,
// "PrevDay": 0.00034204,
// "Created": "2018-02-15T01:09:15.167"