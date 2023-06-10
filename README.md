# kelly

[Kelly criterion](https://en.wikipedia.org/wiki/Kelly_criterion).

## Example

``` javascript
const kelly = require('kelly');

kelly(1, 0.6);
// => 0.19999999999999996
```

## Installation

``` bash
$ npm install kelly
```

## API

``` javascript
const kelly = require('kelly');
```

### `kelly(b, p)`

Given two _Number_ arguments, where `b` is the net odds received on the wager
and `p` is the probability of winning, returns the fraction of the current
bankroll (as a _Number_) that one should bet to maximize the long-run growth
rate of the bankroll.
