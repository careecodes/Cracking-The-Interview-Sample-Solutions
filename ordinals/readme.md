# Numbers to Ordinals

## Background
An ordinal is an indicator of position in a list. Example, 1st, 2nd, 3rd, etc.

In English, the final digit will determine which form the ordinal will take:

* Ends with 1 = 'st'
* Ends with 2 = 'nd'
* Ends with 3 = 'rd'
* Ends with another number = 'th'

But, numbers that end in 11, 12, and 13 are a special case. These all use the 'th' ordinal form.

## Challenge

Given a positive integer, return a string representing the ordinal form of that number.

Examples: 
* 1 => 1st
* 22 => 22nd
* 333 => 333rd 
* 4 => 4th

Other things to remember:

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
