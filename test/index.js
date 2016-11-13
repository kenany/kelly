var kelly = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(kelly));
});

test('b=1, p=0.6', function(t) {
  t.plan(1);

  // 0.2
  t.equal(kelly(1, 0.6), 0.19999999999999996);
});

test('roulette', function(t) {
  t.plan(1);

  // -1/19
  t.equal(kelly(1, 18 / 38), -0.052631578947368474);
});
