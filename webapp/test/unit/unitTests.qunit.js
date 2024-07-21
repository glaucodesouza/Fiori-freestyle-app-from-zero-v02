/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zewm_picking_tf/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
