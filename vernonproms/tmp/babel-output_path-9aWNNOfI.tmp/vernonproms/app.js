define('vernonproms/app', ['exports', 'ember', 'vernonproms/resolver', 'ember-load-initializers', 'vernonproms/config/environment'], function (exports, _ember, _vernonpromsResolver, _emberLoadInitializers, _vernonpromsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _vernonpromsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _vernonpromsConfigEnvironment['default'].podModulePrefix,
    Resolver: _vernonpromsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _vernonpromsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});