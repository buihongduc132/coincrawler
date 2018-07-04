module.exports = {

  friendlyName: 'Url parser',


  description: '',


  inputs: {
    url: {
      type: 'string',
      required: true
    },
    params: {
      type: 'ref'
    }
  },


  exits: {

  },

  sync: true,

  fn: function (inputs, exits) {
    let params = inputs.params;
    let url = inputs.url;

    for (var key in params) {
      url = url.replace(`{{${key}}}`, params[key]);
    }

    return exits.success(url);
  }


};

