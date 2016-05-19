/* jshint node: true */

module.exports = {
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackageToProject('moment-range', '^2.2.0');
  }
};
