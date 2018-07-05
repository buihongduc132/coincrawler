function addZero(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}


module.exports = {


  friendlyName: 'String to time',


  description: '',


  inputs: {
    time: { type: 'string', required: true },
  },


  exits: {

  },

  sync: true,

  fn: function (inputs, exits) {
    let time = inputs.time;
    let timeObject = new Date(time);

    // All done.
    return exits.success(`${addZero(timeObject.getMonth())}${addZero(timeObject.getDate())}${addZero(timeObject.getHours())}${addZero(timeObject.getMinutes())}`);

  }

};

