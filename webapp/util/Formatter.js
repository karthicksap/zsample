sap.ui.define([
    'sap/ui/core/format/NumberFormat'
], function(NumberFormat){
return {
  init: function(){

  },
    convertName: function(sName){
        return sName.toUpperCase();
      },
      convertSalary: function(sAmt,sCurr){
        var oCurrencyFormat = NumberFormat.getCurrencyInstance({
          currencyCode: false
      });
        return oCurrencyFormat.format(sAmt, sCurr);
      }
}
});