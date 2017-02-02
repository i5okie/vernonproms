define('vernonproms/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'vernonproms/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _vernonpromsConfigEnvironment) {

  var name = _vernonpromsConfigEnvironment['default'].APP.name;
  var version = _vernonpromsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});