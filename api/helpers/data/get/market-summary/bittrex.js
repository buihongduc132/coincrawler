

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


      let parsedResults = _.map(results, (result) => {
        let parsedModel = sails.helpers.modelParser.marketSummary.bittrex(result);

        return parsedModel;
      });

      let basePrice = sails.helpers.data.get.basePrice(parsedResults);

      parsedResults = _.map(parsedResults, (parsedResult) => {
        return sails.helpers.data.calculate.price(parsedResult, basePrice);
      });

      parsedResults = _.orderBy(parsedResults, ['volume'], ['desc']);

      for (let i = 0; i < parsedResults.length; i++) {
        parsedResults[i].top = i + 1;
      }

      Promise.all(_.map(parsedResults, (parsedResult) => {
        return MarketSummary.updateOrCreate({ 
          time: parsedResult.time,
          exchange: parsedResult.exchange,
          pair: parsedResult.pair
         }, parsedResult);
      })).then((createdResult) => {
        console.log(`Collected Data for Bittrex (${new Date()})`);
      });
    })

  }

};