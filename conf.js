exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',

    // seleniumAddress: 'https://localhost:4444/wd/hub',

    specs: ['features/*feature.js'],

//    suites: {

//			smoke: ['smoke/*.spec.js'],
//			regression: ['regression/*spec.js'],
//			functional: ['functional/*spec.js'],
//			all: ['./*/*spec.js'],
//			selected: ['functional/addcustomer.spec.js','regression/openaccount.spec.js'],
//	  }, 

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
}