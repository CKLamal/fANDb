module.exports = {
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': 4,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/mustache-interpolation-spacing': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/component-tags-order': ['error', {
      'order': ['template', 'style', 'script']
    }]
  }
}
