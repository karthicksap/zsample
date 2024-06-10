sap.ui.define([
  'tit/mm/app/controller/Basecontroller',
  'tit/mm/app/model/model',
  'tit/mm/app/util/Formatter'
], function (Basecontroller, model,Formatter) {
  return Basecontroller.extend("tit.mm.app.controller.Myxml", {
    onInit: function () {
      this.oView = this.getView();
      this.oView.byId("idTab").bindAggregation("rows", "/empTab");
      // var oJsonModel = new sap.ui.model.json.JSONModel({
      // });
      // oJsonModel.loadData("model/mydata.json");
      this.oCore = sap.ui.getCore();
      this.oCore.setModel(model.createJSONModel("model/mockdata/mydata.json"));
      // this.oCore.setModel(model.createJSONModel("model/mockdata/sample.json"), "sample");
      this.oModel = this.oCore.getModel();
      // this.oModelsam = this.oCore.getModel("sample");
      this.oView.byId("idSimp").bindElement("/empTab/0", "content");
      // this.oModel.setDefaultBindingMode("OneWay");
      this.oView.setModel(model.createResourceModel(), "i18n");
    },
    oFormatter : Formatter,
    onPress: function () {
      // console.log(this.oView.byId("idEmp").getValue());
      // this.test();
      // console.log(this.calculateSal(this.oView.byId("idSal").getValue()));
      console.log(this.oModel.getProperty("/empStr"));
    },
    onDisable: function () {
      this.oModel.setProperty("/empStr/enabled", false);
    },
    onFlip: function () {
      var oModel = this.oCore.getModel();
      this.oCore.setModel(this.oCore.getModel("sample"));
      this.oCore.setModel(oModel, "sample");
    },
    onChange: function (oEvent) {
      // var sPath = oEvent.getParameter("rowContext").getPath();
      // this.oModel.setProperty("/empStr", this.oModel.getProperty(sPath));
      // this.elementAddress = oEvent.getParameter("rowContext").getPath();
      this.rowIndex = oEvent.getParameter("rowIndex");
      // this.oView.byId("idSimp").bindElement(this.elementAddress, "content");
    },
    onDelete: function(){
      var aEmpTab = this.oModel.getProperty("/empTab");
      aEmpTab.splice(this.rowIndex,1);
      this.oModel.setProperty("/empTab", aEmpTab);
    }
  });
});