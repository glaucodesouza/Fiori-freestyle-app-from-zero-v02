sap.ui.define([
    "sap/ui/core/UIComponent"
], function(myUIComponent) {
    'use strict';
    
    return myUIComponent.extend("freestyledozerov02.Component",{
        metadata: {
            rootView: {
                "viewName": "freestyledozerov02.view.Worklist",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },

        /////INITIALIZATION
        init: function() {
            //chamar superclasse
            myUIComponent.prototype.init.apply(this, arguments);
            alert('Alo dentro do Component.js!');
        }
        
        ///////////implementação customizada

        //////////////////////////
    });
});