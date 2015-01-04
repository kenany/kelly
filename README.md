# kelly

[![Build Status][travis-svg]][travis]

[Kelly criterion](https://en.wikipedia.org/wiki/Kelly_criterion).

## Example

``` javascript
var kelly = require('kelly');

kelly(1, 0.6);
// => 0.19999999999999996
```

## Installation

``` bash
$ npm install kelly
```

## API

``` javascript
var kelly = require('kelly');
```

### `kelly(b, p)`

Given two _Number_ arguments, where `b` is the net odds received on the wager
and `p` is the probability of winning, returns the fraction of the current
bankroll (as a _Number_) that one should bet to maximize the long-run growth
rate of the bankroll.


   [travis]: https://travis-ci.org/KenanY/kelly
   [travis-svg]: https://img.shields.io/travis/KenanY/kelly.svg