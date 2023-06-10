'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');

const kelly = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(kelly));
});

test('b=1, p=0.6', (t) => {
  t.plan(1);

  // 0.2
  t.equal(kelly(1, 0.6), 0.19999999999999996);
});

test('roulette', (t) => {
  t.plan(1);

  // -1/19
  t.equal(kelly(1, 18 / 38), -0.052631578947368474);
});
