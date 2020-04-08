function key_reflection(arr, opts) {
  opts = opts || {};

  return arr.reduce(function (acc, key) {
    var newKey =
      (opts.prefix || opts.prefixKey || "") +
      key +
      (opts.suffix || opts.suffixKey || "");
    var newValue =
      (opts.prefix || opts.prefixValue || "") +
      key +
      (opts.suffix || opts.suffixValue || "");

    acc[newKey] = newValue;

    return acc;
  }, {});
}

module.exports = key_reflection;
