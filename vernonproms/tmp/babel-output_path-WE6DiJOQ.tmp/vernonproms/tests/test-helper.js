define('vernonproms/tests/test-helper', ['exports', 'vernonproms/tests/helpers/resolver', 'ember-qunit'], function (exports, _vernonpromsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_vernonpromsTestsHelpersResolver['default']);
});