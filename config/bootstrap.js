/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const seedData = require('./seed/data');

module.exports.bootstrap = function bootstrap(done) {
  
  sails.on('lifted', function () {
    setInterval(() => {
      sails.helpers.data.get.marketSummary.bittrex().then((data) => {
        
      });
    }, sails.config.custom.apiConfigs.default.tickInterval);
  });
  // By convention, this is a good place to set up fake data during development.

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};