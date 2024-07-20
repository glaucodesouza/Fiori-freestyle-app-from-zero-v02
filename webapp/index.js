sap.ui.define([
    // "sap/m/Text",
    // "sap/m/Button"	
    "sap/ui/core/mvc/XMLView"

], function(XMLView) {
    'use strict';
    
    XMLView.create({
        viewName: "freestyledozerov02.view.Worklist"
    }).then(function (oView) {
        oView.placeAt("myIndexContent");
    });

});