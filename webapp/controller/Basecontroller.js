sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function (Controller) {
    'use strict';
    return Controller.extend("tit.mm.app.controller.Basecontroller", {
        calculateSal: function (sAmt) {
            return (sAmt * 0.18);
        },
        test: function () {
            alert("test");
        }
    });
});