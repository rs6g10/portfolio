'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'analytics-variables-viz';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngMaterial', 'ui.router', 'ui.bootstrap', 'ui.utils', 'ui.grid', 'sf.virtualScroll'];
    var directives = ['slickGrid.directive'];

	// Add a new vertical module
	var registerModule = function(moduleName) {
		// Create angular module
		angular.module(moduleName, []);
        console.log('registering module: ', moduleName);
		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        directives: directives,
		registerModule: registerModule
	};
})();