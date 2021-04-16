exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',

    // seleniumAddress: 'https://localhost:4444/wd/hub',

    specs: ['features/*feature.js'],

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
}