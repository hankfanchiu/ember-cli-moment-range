/*jshint node:true*/
module.exports = {
  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified (since that doesn't actually matter to us)
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('moment-range', '^2.2.0');
  }
};
