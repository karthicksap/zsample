sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(JSONModel,ResourceModel) {
    return ({
        createJSONModel: function(sPath){
            var oModel = new JSONModel();
            // var oModel = new sap.ui.model.json.JSONModel();
            // var oModel = new sap.ui.model.json.JSONModel({

            // });
            oModel.loadData(sPath);
            return oModel;
        },
        createXMLModel: function(){
      
        },
        createResourceModel: function(){
            var oResource = new ResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            return oResource;
        }
    });
});