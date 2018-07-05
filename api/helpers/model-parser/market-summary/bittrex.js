

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

    let convertedPair = convertPair(data.MarketName);

    return exits.success({
      name: convertedPair.name,
      exchange: "bittrex",
      pair: convertedPair.pair,
      baseCurrency: convertedPair.base,
      volume: null,
      baseVolume: null,
      top: null,
      price: null,
      origin: {
        name: data.MarketName,
        volume: data.Volume,
        baseVolume: data.BaseVolume,
        price: data.Last,
        time: data.TimeStamp
      },
      time: sails.helpers.convert.stringToTime(data.TimeStamp),
    });
  }
};

function convertPair(originalPair) {
  let currencies = originalPair.split('-');

  return {
    name: currencies[1],
    base: currencies[0],
    pair: `${currencies[1]}/${currencies[0]}`,
  }
}

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