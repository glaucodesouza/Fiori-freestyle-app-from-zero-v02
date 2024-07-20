sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    ], function(meuController, minhaMessageToast) {
        'use strict';
    
        // ----------------------------------------------------------------
        // redefining my controller (ampliando ele)
        // Assim, eu posso extender o Conrtoller standard
        // sap/ui/core/mvc/Controller
        // ----------------------------------------------------------------
        return meuController.extend("freestyledozerov02.controller.Worklist", {
            //////////////////// ini metodos customizados (meus)
    
    
            ///INITIALIZATION
            onInit: function(){
                alert("on init");
                // Modificar o texto do botão da VEIW
                this.byId("Text").setText("Novo Texto pelo oninit() do Controller!");
            },
    
            //MODULE PBO - AT SELECTION SCREEN OUTPUT
            onBeforeRendering: function(){
                //alert("onBeforeRendering");
                //uso comum: buscar dados do serviço odata no backend
            },
            
            //MODULE PAI - AT SELECTION SCREEN
            onAfterRendering: function(){
                //alert("onAfterRendering");
                //uso comum: validar dados e alterar UI de acordo com dados
            },
    
            //AT EXIT COMMAND       
            onExit: function(){
                alert("on Exit");
                //uso comum: limpar variaveis ao sair dessa view
            },
    
            onClique: function() {
                // alert("ola pelo controller!");	
                minhaMessageToast.show("Ola pessoal no onClique()")
            }
            //////////////////// fim metodos customizados (meus)
        });
        
    });