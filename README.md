# Ember CLI Moment Range

[![npm version][npm version badge]][npm]
[![Build Status][travis badge]][travis]
[![Code Climate][code climate badge]][code climate]
[![Ember Observer Score][ember observer badge]][ember observer]
[![MIT License][license badge]][license]

ES6 accessible module for both [Moment.js][moment] and
[moment-range][moment-range] within your [Ember.js][ember] application

## Installation

Installing the Ember CLI Moment Range addon installs both
[moment][moment github] and [moment-range][moment-range].

```shell
ember install ember-cli-moment-range
```

## Usage

To use `moment` in your Ember app, import the module
and call `moment` as you would the global `moment`.

To use moment-range, invoke the `moment.range()` function.

### Example

```javascript
// app/components/date-range.js

import Component from 'ember-component';
import computed from 'ember-computed';
import moment from 'moment';

export default Component.extend({
  dateRange: computed(function () {
    let startDate = moment('2016-05-18', 'YYYY-MM-DD');
    let endDate = moment('2016-12-31', 'YYYY-MM-DD');

    return moment.range(startDate, endDate);
  })
});
```

To learn more about `moment`, see the [Moment.js Guides][moment guides]
and the [moment-range examples][moment-range examples].

## Contributing

### Installing

```shell
git clone git@github.com:hankfanchiu/ember-cli-moment-range.git
cd ember-cli-moment-range
npm install
bower install
```

### Running

* `ember server`
* Visit your app at [http://localhost:4200][localhost].

### Testing

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit
[http://ember-cli.com][ember-cli].

## License

Ember CLI Moment Range is freely distributable under the terms
of the [MIT license][license].

[npm version badge]: http://img.shields.io/npm/v/ember-cli-moment-range.svg?style=flat
[npm]: https://www.npmjs.com/package/ember-cli-moment-range

[travis badge]: https://travis-ci.org/hankfanchiu/ember-cli-moment-range.svg?branch=master
[travis]: https://travis-ci.org/hankfanchiu/ember-cli-moment-range

[code climate badge]: https://codeclimate.com/github/hankfanchiu/ember-cli-moment-range/badges/gpa.svg
[code climate]: https://codeclimate.com/github/hankfanchiu/ember-cli-moment-range

[ember observer badge]: https://emberobserver.com/badges/ember-cli-moment-range.svg
[ember observer]: https://emberobserver.com/addons/ember-cli-moment-range

[license badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: ./LICENSE.md

[moment]: http://momentjs.com
[moment github]: https://github.com/moment/moment
[moment guides]: http://momentjs.com/guides

[moment-range]: https://github.com/gf3/moment-range
[moment-range examples]: https://github.com/gf3/moment-range#examples

[ember]: http://emberjs.com
[ember-cli]: http://ember-cli.com

[localhost]: http://localhost:4200
