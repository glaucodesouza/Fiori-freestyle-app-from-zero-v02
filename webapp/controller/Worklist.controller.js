sap.ui.define([
    "./BaseController",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function (myBaseController, myController, myMessageToast, JSONModel) {
    'use strict';

    // ----------------------------------------------------------------
    // redefining my controller (ampliando ele)
    // Assim, eu posso extender o Conrtoller standard
    // sap/ui/core/mvc/Controller
    // ----------------------------------------------------------------
    return myBaseController.extend("freestyledozerov02.controller.Worklist", {
        //////////////////// ini metodos customizados (meus)

        ///INITIALIZATION
        onInit: function () {
            alert("on init Controller!");
            // Modificar o texto do botão da VEIW
            this.byId("Text").setText("Worklist.view.xml - Novo Texto pelo oninit() do Controller!");

            // let oViewModel = new JSONModel({
            //     moeda: "BRL",
            //     moedaEstrangeira: "JPY",
            //   });
            // this.getView().setModel(oViewModel, "view");

            let iOriginalBusyDelay;
            let oTable = this.byId("table");

            // Put down worklist table's original value for busy indicator delay,
            // so it can be restored later on. Busy handling on the table is
            // taken care of by the table itself.
            iOriginalBusyDelay = oTable.getBusyIndicatorDelay();
            // keeps the search state
            this._aTableSearchState = [];

            // Model used to manipulate control states
            let oViewModel = new JSONModel({
                worklistTableTitle:
                    this.getResourceBundle().getText("worklistTableTitle"),
                shareOnJamTitle: this.getResourceBundle().getText("worklistTitle"),
                shareSendEmailSubject: this.getResourceBundle().getText(
                    "shareSendEmailWorklistSubject"
                ),
                shareSendEmailMessage: this.getResourceBundle().getText(
                    "shareSendEmailWorklistMessage",
                    [location.href]
                ),
                tableNoDataText:
                    this.getResourceBundle().getText("tableNoDataText"),
                tableBusyDelay: 0,
            });
            this.setModel(oViewModel, "worklistView");

            // Make sure, busy indication is showing immediately so there is no
            // break after the busy indication for loading the view's meta data is
            // ended (see promise 'oWhenMetadataIsLoaded' in AppController)
            oTable.attachEventOnce("updateFinished", function () {
                // Restore original busy indicator delay for worklist's table
                oViewModel.setProperty("/tableBusyDelay", iOriginalBusyDelay);
            });

        },

        //MODULE PBO - AT SELECTION SCREEN OUTPUT
        onBeforeRendering: function () {
            // alert("onBeforeRendering");
            //uso comum: buscar dados do serviço odata no backend
        },

        //MODULE PAI - AT SELECTION SCREEN
        onAfterRendering: function () {
            // alert("onAfterRendering");
            //uso comum: validar dados e alterar UI de acordo com dados
        },

        //AT EXIT COMMAND       
        onExit: function () {
            // alert("on Exit");
            //uso comum: limpar variaveis ao sair dessa view
        },

        onTableLinePress: function (oEvent) {
            // The source is the list item that got pressed
            this._showObject(oEvent.getSource());
        },

        _showObject: function (oItem) {
            this.getRouter().navTo("object", {
                objectId: oItem
                    .getBindingContext()
                    .getPath()
                    .substring("/Z270CADPRODUTOSSet".length),
            });
        },

        onCriar: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("create", {});
        },

        onAprovarProduto: function (oEvent) {
            var oSource = oEvent.getSource();
            var oParent = oSource.getParent();
            var bc = oParent.getBindingContext();
            var path = bc.getPath();
            var obj = bc.getObject();
            var oModel = this.getView().getModel();

            oModel.callFunction("/aprovar_produto", {
                method: "GET",
                urlParameters: {
                    Codigo: obj.Codigo,
                },
                success: function () {
                    sap.m.MessageToast.show("Produto aprovado com sucesso !");
                }.bind(this),
                error: function (e) {
                    console.error(e);
                }.bind(this),
            });
        },

        /**
         * Triggered by the table's 'updateFinished' event: after new table
         * data is available, this handler method updates the table counter.
         * This should only happen if the update was successful, which is
         * why this handler is attached to 'updateFinished' and not to the
         * table's list binding's 'dataReceived' method.
         * @param {sap.ui.base.Event} oEvent the update finished event
         * @public
         */
        onUpdateFinished: function (oEvent) {
            // update the worklist's object counter after the table update
            var sTitle,
                oTable = oEvent.getSource(),
                iTotalItems = oEvent.getParameter("total");
            // only update the counter if the length is final and
            // the table is not empty
            if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
                sTitle = this.getResourceBundle().getText(
                    "worklistTableTitleCount",
                    [iTotalItems]
                );
            } else {
                sTitle = this.getResourceBundle().getText("worklistTableTitle");
            }
            this.getModel("worklistView").setProperty("/worklistTableTitle", sTitle);
        },
        //////////////////// fim metodos customizados (meus)
    });

});