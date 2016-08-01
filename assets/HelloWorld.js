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

    },

    start: function () {
        //create a checkbox with code
        this._anotherCheckBox = cc.instantiate(this.prefab);
        this._anotherCheckBox.position = cc.p(80, 80);

       this.node.addChild(this._anotherCheckBox);
       this._anotherCheckBox.on('check-event', this.onCheckBoxChecked2);

    },

    onCheckBoxChecked2: function (sender) {
        var checkbox = sender.detail;
        if(checkbox.isChecked) {
            cc.log("checkBox2 is checked.");
        } else {
            cc.log("checkBox2 is unchecked.");
        }
    },

    onCheckBoxChecked1: function (checkBox) {
        if(checkBox.isChecked) {
            cc.log("checkBox1 is checked.");
        } else {
            cc.log("checkBox1 is unchecked.");
        }
    }

});
