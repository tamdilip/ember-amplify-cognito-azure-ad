'use strict';

define("ember-amplify-cognito-azure-ad/tests/integration/components/signout-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | signout', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Signout />
      */
      {
        id: "e4Sp1Cps",
        block: "{\"symbols\":[],\"statements\":[[5,\"signout\",[],[[],[]]]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Signout>
              template block text
            </Signout>
          
      */
      {
        id: "aW0nX9Ri",
        block: "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"signout\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-amplify-cognito-azure-ad/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/signout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/signout.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/tokens.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/tokens.js should pass ESLint\n\n');
  });
  QUnit.test('services/amplify.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/amplify.js should pass ESLint\n\n');
  });
  QUnit.test('services/hub.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/hub.js should pass ESLint\n\n');
  });
});
define("ember-amplify-cognito-azure-ad/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-amplify-cognito-azure-ad/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-amplify-cognito-azure-ad/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-amplify-cognito-azure-ad/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-amplify-cognito-azure-ad/templates/home.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-amplify-cognito-azure-ad/templates/tokens.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-amplify-cognito-azure-ad/templates/tokens.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-amplify-cognito-azure-ad/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/signout-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/signout-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/tokens-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/tokens-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/amplify-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/amplify-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/hub-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/hub-test.js should pass ESLint\n\n');
  });
});
define("ember-amplify-cognito-azure-ad/tests/test-helper", ["ember-amplify-cognito-azure-ad/app", "ember-amplify-cognito-azure-ad/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-amplify-cognito-azure-ad/tests/unit/routes/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("ember-amplify-cognito-azure-ad/tests/unit/routes/home-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define("ember-amplify-cognito-azure-ad/tests/unit/routes/tokens-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | tokens', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:tokens');
      assert.ok(route);
    });
  });
});
define("ember-amplify-cognito-azure-ad/tests/unit/services/amplify-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | amplify', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:amplify');
      assert.ok(service);
    });
  });
});
define("ember-amplify-cognito-azure-ad/tests/unit/services/hub-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | hub', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:hub');
      assert.ok(service);
    });
  });
});
define('ember-amplify-cognito-azure-ad/config/environment', [], function() {
  var prefix = 'ember-amplify-cognito-azure-ad';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-amplify-cognito-azure-ad/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
