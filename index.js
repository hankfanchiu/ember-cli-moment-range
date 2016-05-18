/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-moment-range',

  included: function () {
    this._super.included.apply(this, arguments);

    this.import('bower_components/moment-range/dist/moment-range.min.js');
  }
};
