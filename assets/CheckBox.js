cc.Class({
    extends: cc.Button,
    editor: CC_EDITOR && {
        inspector: 'packages://checkbox/checkbox-inspector.js',
        executeInEditMode: true
    },

    properties: {
        _spriteFrames: [],


        isChecked: {
            default: true,
            notify: function() {
                this._updateSprites();
            }
        },

        inActiveNormalSprite: {
            default: null,
            type: cc.SpriteFrame,
            notify: function() {
                this._updateSprites();
            }
        },

        activeNormalSprite: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this._updateSprites();
            }
        },

        activePressedSprite: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this._updateSprites();
            }
        },

        inActivePressedSprite: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this._updateSprites();
            }
        },

        activeDisabledSprite: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this._updateSprites();
            }
        },

        inActiveDisabledSprite: {
            default: null,
            type: cc.SpriteFrame,
            notify: function () {
                this._updateSprites();
            }
        }
    },

    _updateSprites: function () {
        if(this.isChecked) {
            this.normalSprite = this.activeNormalSprite;
            this.pressedSprite = this.activePressedSprite;
            this.disabledSprite = this.activeDisabledSprite;
        } else {
            this.normalSprite = this.inActiveNormalSprite;
            this.normalSprite = this.inActivePressedSprite;
            this.disabledSprite = this.inActiveDisabledSprite;
        }
    },

    // use this for initialization
    onLoad: function () {
    },

});
