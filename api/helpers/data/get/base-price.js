module.exports = {


  friendlyName: 'Base price',


  description: '',


  inputs: {
    pairInfos: { type: 'json', required: true }
  },


  exits: {

  },

  sync: true,

  fn: function (inputs, exits) {
    let pairInfos = inputs.pairInfos;

    let baseEth = _.find(pairInfos, (pairInfo) => {
      return pairInfo.origin.name == 'USDT-ETH';
    });

    let baseBtc = _.find(pairInfos, (pairInfo) => {
      return pairInfo.origin.name == 'USDT-BTC';
    });

    // All done.
    return exits.success({
      usdt: 1,
      eth: baseEth.origin.price,
      btc: baseBtc.origin.price,
    });

  }


};

