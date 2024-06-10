sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    return Controller.extend("tit.mm.app.controller.Main",{
        onInit: function(){
            // console.log("test");
            // var oJsonModel = new sap.ui.model.JSONModel({

            // });

        },
        active: function(){
            alert("I am active now...");
        },
        popup: function(){
            sInp = sap.ui.getCore().byId("idInp").getValue();
            alert(sInp);
            sap.ui.getCore().byId("idInp").setEnabled(false);
            sap.ui.getCore().byId("idBtn2").setEnabled(true); 
            sap.ui.getCore().byId("idBtn2").attachPress(this.active);
        }
    });
});