var ToggleGroup = cc.Class({
    extends: cc.Component,
    editor: CC_EDITOR && {
        executeInEditMode: true
    },

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
        }
    },

    updateToggles: function (toggle) {
        this._toggleLists.forEach(function (item){
            if(toggle.isChecked) {
                if (item !== toggle && item.isChecked) {
                    item.isChecked = false;
                }
            }
        });
    },


});
