# key-reflection

[![npm version](https://badge.fury.io/js/key-reflection.svg)](http://badge.fury.io/js/key-reflection)
[![Build Status](https://travis-ci.org/soluml/key-reflection.svg?branch=master)](https://travis-ci.org/soluml/key-reflection)

Create an enum object from an array of keys with optional prefixes and suffixes. IE9+ Support. No dependencies.

Pass `key-reflection` an array of strings with an optional prefix/suffix and it will return an enum that you can use as a look up. Great for state stores like [Redux](https://github.com/reduxjs/redux).

## Installation

`npm install key-reflection --save`

## Usage

`key_reflection(ARRAY, OPTIONS)`

```
const key_reflection = require('key-reflection');

const enums = key_reflection(["A", "B"]);
// {A: "A", B: "B"}

const prefixedEnums = key_reflection(["A", "B"], { prefix: 'PREFIX_' });
// {PREFIX_A: "PREFIX_A", PREFIX_B: "PREFIX_B"}

const suffixedEnums = key_reflection(["A", "B"], { suffix: '_SUFFIX' });
// {A_SUFFIX: "A_SUFFIX", B_SUFFIX: "B_SUFFIX"}
```

You can also target prefixes and suffixes at just the Key's or Value's depending on your needs.

## Options

**prefix:** Prefixes both the keys and values in the resulting array.

**prefixKey:** Prefixes the keys in the resulting array.

**prefixValue:** Prefixes the values in the resulting array.

**suffix:** Suffixes both the keys and values in the resulting array.

**suffixKey:** Suffixes the keys in the resulting array.

**suffixValue:** Suffixes the values in the resulting array.
