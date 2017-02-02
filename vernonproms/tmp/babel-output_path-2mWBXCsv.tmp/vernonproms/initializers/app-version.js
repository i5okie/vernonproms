define('vernonproms/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'vernonproms/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _vernonpromsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_vernonpromsConfigEnvironment['default'].APP.name, _vernonpromsConfigEnvironment['default'].APP.version)
  };
});