module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.function.name'
      ],
      useBuiltIns: "entry" 
    }]
  ]
}
