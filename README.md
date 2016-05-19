# Ember CLI Moment Range

[![Build Status](https://travis-ci.org/hankfanchiu/ember-cli-moment-range.svg?branch=master)](https://travis-ci.org/hankfanchiu/ember-cli-moment-range)
[![Code Climate](https://codeclimate.com/github/hankfanchiu/ember-cli-moment-range/badges/gpa.svg)](https://codeclimate.com/github/hankfanchiu/ember-cli-moment-range)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-moment-range.svg)](https://emberobserver.com/addons/ember-cli-moment-range)

ES6 accessible module for both [Moment.js][moment] and [moment-range][moment-range] within your [Ember.js][ember] application

## Installation

```shell
ember install ember-cli-moment-range
```

## Usage

To use `moment` in your Ember app, import the module:

```javascript
import moment from 'moment';
```

Then call `moment` as you would the global `moment` provided by [Moment.js][moment].

To use [moment-range][moment-range], call the `moment.range()` function.

### Installation

```shell
git clone git@github.com:hankfanchiu/ember-cli-moment-range.git
cd ember-cli-moment-range
npm install
bower install
```

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).


[moment]: http://momentjs.com/ "Moment.js"
[moment-range]: https://github.com/gf3/moment-range "moment-range package"
[ember]: http://emberjs.com/ "Ember.js"
