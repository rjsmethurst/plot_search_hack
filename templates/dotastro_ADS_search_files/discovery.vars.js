define([], function() {
  "use strict";
  return {

    /**
     * The url to the API services, if you develop locally,
     * (and have created tunnel to the API) you can set this
     * to //localhost:5000/v1 - but since our API allows for
     * limited number of cross-site requests (from origin
     * of 'http://localhost:8000' you can also use the production
     * API of //api.adslabs.org/v1/
     */
    apiRoot: '/v1/',

    /**
     * to let bumblebee discover oauth access_token at boot time
     * and load dynamic configuration (which will be merged with
     * the default config)
     * this can be absolute url; or url relative to the api path
     */
    bootstrapUrls: ['accounts/bootstrap'],

    /**
     *  pushState: when true, urls are without hashtag '#'
     *  root is the url, under which your application is
     *  deployed, eg. /foo/bar if the main page lives at
     *  http://somewhere.org/foo/bar/index.html
     */
    routerConf: {
      pushState: true,
      root: '/',
    },

    /**
     * When set to true, window.app will contain reference to
     * to the application object
     */
    debugExportBBB: true,

    /**
     * To get debugging output in console
     */
    debug: false,

    /**
     * When a component has method 'activateCache' - we'll call it;
     * this is e.g. useful for Query Mediator which controls traffic
     * between widgets and API (and doesn't bother issuing another
     * request when the query can be served from the application cache)
     */
    useCache: false,

    googleTrackingCode: 'UA-37369750-6',
    googleTrackingOptions: 'auto',
 googleOptimizeCode: 'OPT-TJS48Z2',
  orcidClientId: 'APP-BA5POB6F5D7CTHX2',
 orcidLoginEndpoint: 'https://orcid.org/oauth/authorize',
    orcidApiEndpoint: '/v1/orcid',

    recaptchaKey : "6Lex_aQUAAAAAMwJFbdGFeigshN7mRQdbXoGQ7-N"

  }
});
