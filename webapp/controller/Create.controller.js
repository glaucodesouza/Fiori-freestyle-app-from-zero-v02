sap.ui.define(
    [
        "./BaseController",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/routing/History",
        "sap/m/MessageToast",
        "sap/ui/core/UIComponent",
    ],
    function (BaseController, JSONModel, History, MessageToast, UIComponent) {
        "use strict";
        return BaseController.extend("fresstyledozerov02.controller.Create", {
            onInit: function () {

                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter
                    .getRoute("create")
                    .attachPatternMatched(this._onCreateMatched, this);

                //MODEL p/ iniciar valors
                let oViewModel = new JSONModel({
                    Codigo: 0,
                    Descricao: "",
                    Kwmeng: "0.000",
                    Meins: "KG",
                    Netpr: "0.00",
                    Waerk: "BRL",
                });
                this.getView().setModel(oViewModel, "view");
            },

            _onCreateMatched: function (oEvent) {
                let m = this.getView().getModel();
                m.metadataLoaded().then(
                    function () {
                        let oContext = m.createEntry("/Z270CADPRODUTOSSet", {
                            properties: {
                                Descricao: "",
                                Kwmeng: "0.00",
                                Meins: "",
                                Netpr: "0.00",
                                Waerk: "",
                            },
                        });
                        this.getView().bindElement({
                            path: oContext.getPath(),
                            expand: "view",
                            //model: "view",
                        });
                    }.bind(this)
                );
            },

            onNavBack: function () {
                let oHistory = History.getInstance();
                let sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    let oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("worklist", {}, true);
                }
            },

            parseFloatExternoBrasileiro(string) { },

            onGravar: function () {
                //Limpar mensagens antigas
                sap.ui.getCore().getMessageManager().removeAllMessages();

                let oModel = this.getView().getModel();

                let dados = {
                    // Codigo:     this.byId("inpCodigo").getValue(),
                    Descricao: this.byId("inpDescricao").getValue(),
                    Kwmeng: this.byId("inpKwmeng").getValue(),
                    Meins: this.byId("inpMeins").getValue(),
                    Netpr: this.byId("inpNetpr").getValue(),
                    Waerk: this.byId("inpWaerk").getValue(),
                };

                oModel.create("/Z270CADPRODUTOSSet", dados, {
                    success: function (oDados, response) {
                        //var lv_message = JSON.parse(response.headers["sap-message"]);
                        //this.getView().setBusy(false);
                        let lv_message = JSON.parse(response.headers["sap-message"]);
                        sap.m.MessageToast.show(
                            "Produto " + oDados.Codigo + " criado com sucesso !", {
                                duration: 5000,                  // default
                                width: "15em",                   // default
                                my: "center bottom",             // default
                                at: "center bottom",             // default
                                of: window,                      // default
                                offset: "0 0",                   // default
                                collision: "fit fit",            // default
                                onClose: null,                   // default
                                autoClose: true,                 // default
                                animationTimingFunction: "ease", // default
                                animationDuration: 1000,         // default
                                closeOnBrowserNavigation: false   // default);
                            });
                        //var mensagem = JSON.parse(resposta.headers["sap-message"]);
                        // teste 2
                        // this.getRouter().navTo("object", {
                        //     objectId: dados.Codigo,
                        // });

                        oModel.refresh();
                        //teste 1
                        this.onNavBack();

                        // teste 3
                        //this.onNavBack("object", parseInt(dados.Codigo) );
                    }.bind(this),
                    error: function (Error) {
                        let lv_mensagem = JSON.parse(Error.responseText).error.message
                            .value;
                        MessageToast.show(lv_mensagem + dados.Descricao, {
                            duration: 5000,                  // default
                            width: "15em",                   // default
                            my: "center bottom",             // default
                            at: "center bottom",             // default
                            of: window,                      // default
                            offset: "0 0",                   // default
                            collision: "fit fit",            // default
                            onClose: null,                   // default
                            autoClose: true,                 // default
                            animationTimingFunction: "ease", // default
                            animationDuration: 1000,         // default
                            closeOnBrowserNavigation: false   // default);
                        });
                        this.onNavBack();
                        // MessageToast.show("Aconteceu um erro.");
                        // console.error(oData);
                        //this.getView().setBusy(false);
                        // this.onNavBack();
                    }.bind(this),
                });
            },

            onCancelar: function (oEvent) {
                this.onNavBack();
            },
        }
        );
    }
);