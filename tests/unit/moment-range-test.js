import { module } from 'qunit';
import { test } from 'ember-qunit';
import moment from 'moment';

module('Unit | moment.range');

test('it exports moment', (assert) => {
  assert.ok(moment, 'moment exports an object');
});

test('moment.range function exists', (assert) => {
  assert.ok(typeof moment().range, 'function', 'moment.range is defined as a function');
});
