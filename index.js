/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-moment-range',

  included: function (app) {
    this._super.included.apply(this, arguments);

    while (app.app) {
      app = app.app;
    }

    this.import(app.bowerDirectory + '/moment-range/dist/moment-range.min.js');
  }
};
