define('vernonproms/tests/helpers/start-app', ['exports', 'ember', 'vernonproms/app', 'vernonproms/config/environment'], function (exports, _ember, _vernonpromsApp, _vernonpromsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _vernonpromsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _vernonpromsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});