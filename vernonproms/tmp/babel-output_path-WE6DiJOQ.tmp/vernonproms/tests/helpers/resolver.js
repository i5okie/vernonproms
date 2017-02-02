define('vernonproms/tests/helpers/resolver', ['exports', 'vernonproms/resolver', 'vernonproms/config/environment'], function (exports, _vernonpromsResolver, _vernonpromsConfigEnvironment) {

  var resolver = _vernonpromsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _vernonpromsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _vernonpromsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});