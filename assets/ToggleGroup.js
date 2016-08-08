var ToggleGroup = cc.Class({
    extends: cc.Component,

    properties: {
        toggleItem: {
            default: [],
            type: require('./CheckBox')
        }
    },

    updateToggles: function (toggle) {
        this.toggleItem.forEach(function (item){
            if(toggle.isChecked) {
                if (item !== toggle && item.isChecked && item.enabled) {
                    item.isChecked = false;
                }
            }
        });
    },


    _allowOnlyOneToggleChecked: function () {
        var isChecked = false;
        var self = this;
        this.toggleItem.forEach(function (item) {
            if(!item._toggleGroup) {
                item._toggleGroup = self;
            }

            if(isChecked && item.enabled) {
                item.isChecked = false;
            }

            if (item.isChecked && item.enabled) {
                isChecked = true;
            }
        });
    },

    onLoad: function () {
        //only allow one toggle to be checked
        this._allowOnlyOneToggleChecked();
    }


});
