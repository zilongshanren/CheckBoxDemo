var ToggleGroup = cc.Class({
    extends: cc.Component,

    properties: {
        _toggleLists : []
    },

    addToggle: function (toggle) {
        this._toggleLists.push(toggle);
        this.updateToggles(toggle);
    },

    removeToggle: function (toggle) {
        var index = this._toggleLists.indexOf(toggle);
        if (index > -1) {
            this._toggleLists.splice(index, 1);
        } else {
            cc.error('The toggle component is not exists!');
        }
    },

    updateToggles: function (toggle) {
        this._toggleLists.forEach(function (item){
            if(toggle.isChecked) {
                if (item !== toggle && item.isChecked && item.enabled) {
                    item.isChecked = false;
                }
            }
        });
    },


    _allowOnlyOneToggleChecked: function () {
        var isChecked = false;
        this._toggleLists.forEach(function (item) {
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
