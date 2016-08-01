cc.Class({
    extends: cc.Component,

    properties: {
        checkBox: {
            default: null,
            type: require("./CheckBox.js")
        }
    },

    // use this for initialization
    onLoad: function () {
        this.checkBox.node.on('check-event', this.onCheckBoxChecked2);

        //create a checkbox with code
    },

    onCheckBoxChecked2: function (sender) {
        var checkbox = sender.detail;
        if(checkbox.isChecked) {
            cc.log("checkBox is checked.");
        } else {
            cc.log("checkBox is unchecked.");
        }
    },

    onCheckBoxChecked1: function (checkBox) {
        if(checkBox.isChecked) {
            cc.log("checkBox is checked.");
        } else {
            cc.log("checkBox is unchecked.");
        }
    }

});
