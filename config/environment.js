'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-amplify-cognito-azure-ad',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      amplify: {
        Auth: {
          oauth: {
            domain: 'dilipan-test-login-app.auth.us-east-1.amazoncognito.com',
            scope: ['openid'],
            redirectSignIn: ':4200/tokens',
            redirectSignOut: ':4200/tokens',
            responseType: 'code'
          },
          userPoolWebClientId: 'r9vv0bjhg0u2nqlusvua6ab0j',
          userPoolId: 'us-east-1_VkCkeBZb2'
        },
        identityProvider: 'dilip-azure-AD',
        logLevel: 'DEBUG'
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.rootURL = '/ember-amplify-cognito-azure-ad/';
    ENV.APP.amplify.Auth.oauth.redirectSignIn = "/ember-amplify-cognito-azure-ad/tokens";
    ENV.APP.amplify.Auth.oauth.redirectSignOut = "/ember-amplify-cognito-azure-ad/tokens";
    ENV.APP.amplify.logLevel = "ERROR"
  }

  return ENV;
};
