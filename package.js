// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'twbs:bootstrap',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'Framework basado en Bootstrap v4 para mis sitios personales.',
  version: '1.1.0',
  git: 'https://github.com/Fermoto5HD/FM5strap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/fm5strap.css',
    'dist/js/fm5strap.js'
  ], 'client');
});
