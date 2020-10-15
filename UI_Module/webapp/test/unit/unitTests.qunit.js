/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UI_Module/UI_Module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});