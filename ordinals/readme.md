# Numbers to Ordinals

## Challenge
An ordinal is an indicator of position in a list. Example, 1st, 2nd, 3rd, etc.

Given a positive integer, return a string containing that number as an ordinal.

Examples: 
* 1 => 1st
* 22 => 2nd
* 333 => 333rd 
* 4 => 4th

Other things to consider:

* The numbers 11-13 are a special case.

## Solution

A working javascript/node.js solution is provided in `index.js`. It may not be optimal, but it is correct (as far as I can tell).

There are also tests provided. To run the tests, first cd into the ordinals dir, then install the npm dependencies. The tests require Node.js to be installed on your system.

```bash
cd path/to/ordinals/dir
npm i
```

Then run the tests

```bash
npm test
```