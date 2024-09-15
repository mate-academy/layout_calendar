module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    // Added this rule because i alway catch error "scss/dollar-variable-colon-space-after:"
    "scss/dollar-variable-colon-space-after": null
  }
};
