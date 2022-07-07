Package.describe({
  name: 'igoandtrack:sensors-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.7.3');
  api.use('ecmascript');
  api.mainModule('sensors-collection.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sensors-collection');
  api.mainModule('sensors-collection-tests.js');
});
