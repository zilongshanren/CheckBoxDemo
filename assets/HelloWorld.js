cc.Class({
    extends: cc.Component,

    properties: {
        checkBox: {
            default: null,
            type: require("./CheckBox.js")
        },

        prefab: {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        this.checkBox.node.on('check-event', this.onCheckBoxChecked2);

    },

    start: function () {
        //create a checkbox with code
        this._anotherCheckBox = cc.instantiate(this.prefab);
        this._anotherCheckBox.position = cc.p(80, 80);

        this.node.addChild(this._anotherCheckBox);
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
