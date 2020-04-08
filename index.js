function key_reflection (arr, opt) {
  return arr.reduce(function (acc, key) {
    var newKey = (opts.prefix || opts.prefixKey || '') + key,
        newValue = (opts.prefix || opts.prefixValue || '') + key;

    acc[newKey] = newValue;

    return acc;
  }, {});
}

module.exports = key_reflection;
