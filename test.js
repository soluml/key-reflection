const assert = require("assert");
const key_reflection = require("./index.js");

describe("key-reflection", function () {
  const prefix = "prefix";
  const suffix = "suffix";

  it("creates mirrored object", function () {
    const enums = key_reflection(["A", "B"]);

    assert.equal(enums.A, "A");
    assert.equal(enums.B, "B");
  });

  it("adds a prefix if defined", function () {
    const fullyPrefixedEnums = key_reflection(["A", "B"], { prefix });

    assert.equal(fullyPrefixedEnums[`${prefix}A`], `${prefix}A`);
    assert.equal(fullyPrefixedEnums[`${prefix}B`], `${prefix}B`);

    const prefixedKeysEnums = key_reflection(["A", "B"], { prefixKey: prefix });

    assert.equal(prefixedKeysEnums[`${prefix}A`], "A");
    assert.equal(prefixedKeysEnums[`${prefix}B`], "B");

    const prefixedValuesEnums = key_reflection(["A", "B"], {
      prefixValue: prefix,
    });

    assert.equal(prefixedValuesEnums.A, `${prefix}A`);
    assert.equal(prefixedValuesEnums.B, `${prefix}B`);

    // Text that "prefix" trumps both individual key/value
    const fullyPrefixedEnumsExtra = key_reflection(["A", "B"], {
      prefix,
      prefixKey: "KEY",
      prefixValue: "VALUE",
    });

    assert.equal(fullyPrefixedEnumsExtra[`${prefix}A`], `${prefix}A`);
    assert.equal(fullyPrefixedEnumsExtra[`${prefix}B`], `${prefix}B`);
  });

  it("adds a suffix if defined", function () {
    const fullySuffixedEnums = key_reflection(["A", "B"], { suffix });

    assert.equal(fullySuffixedEnums[`A${suffix}`], `A${suffix}`);
    assert.equal(fullySuffixedEnums[`B${suffix}`], `B${suffix}`);

    const suffixedKeysEnums = key_reflection(["A", "B"], { suffixKey: suffix });

    assert.equal(suffixedKeysEnums[`A${suffix}`], "A");
    assert.equal(suffixedKeysEnums[`B${suffix}`], "B");

    const suffixedValuesEnums = key_reflection(["A", "B"], {
      suffixValue: suffix,
    });

    assert.equal(suffixedValuesEnums.A, `A${suffix}`);
    assert.equal(suffixedValuesEnums.B, `B${suffix}`);

    // Text that "suffix" trumps both individual key/value
    const fullySuffixedEnumsExtra = key_reflection(["A", "B"], {
      suffix,
      suffixKey: "KEY",
      suffixValue: "VALUE",
    });

    assert.equal(fullySuffixedEnumsExtra[`A${suffix}`], `A${suffix}`);
    assert.equal(fullySuffixedEnumsExtra[`B${suffix}`], `B${suffix}`);
  });
});
