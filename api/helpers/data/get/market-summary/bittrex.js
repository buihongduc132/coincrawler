module.exports = {


  friendlyName: 'Bittrex',


  description: 'Bittrex market summary.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    sails.config.globals.rp(sails.config.custom.api.marketSummary.bittrex).then((data) => {
      let results = JSON.parse(data).result; 

      Promise.all(_.map(results, (result) => {
        let parsedModel = sails.helpers.modelParser.marketSummary.bittrex(result);

        return MarketSummary.create(parsedModel);
      })).then((createdData) => {
        console.log(`MarketSummary collected for Bittrex - ${(new Date)}`);
        
        return exits.success(createdData);
      });
    })

  }

};