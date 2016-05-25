// !minifyOnSave
// minifyOnSave: false
// !minOnSave
// minOnSave: false
module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  // "plugins": ["react"],
  "ecmaVersion": 5,
  "ecmaFeatures": {
    "jsx": false,
    "modules": false,
    "arrowFunctions": false,
    "classes": true,
    "spread": true,
  },
  "env": {
    "browser": true,
    "jquery": true
  },
  "rules": {
    // "indent": [ "error", "tab" ],
    // "linebreak-style": [ "error", "windows" ],
    // "quotes": [ "error", "single" ],
    // "semi": [ "error", "always" ]
    // "newline-per-chained-call": ["off"],
    // "no-var": ["off"],
    // "max-len": ["off", 100, 4],
    // "radix": ["off"],
    // "prefer-template": ["off"],
    // "prefer-arrow-callback": ["off"],
    // "func-names": ["off"],
    // "no-use-before-define": ["off"]
    "prefer-arrow-callback": ["off"]
  },
  "globals": {
    "Materialize": true,
    "intervalID": true
  },
};
