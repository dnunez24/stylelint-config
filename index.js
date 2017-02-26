"use strict";

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "order/declaration-block-properties-alphabetical-order": [
      true, {
        "severity": "warning"
      }
    ],
    "string-quotes": "single",
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
  },
};