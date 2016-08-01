var CheckBox = cc.Class({
    extends: cc.Button,
    editor: CC_EDITOR && {
        inspector: 'packages://checkbox/checkbox-inspector.js',
        executeInEditMode: true
    },

    properties: {
        isChecked: {
            default: true,
            notify: function() {
                this._updateSprites();
            }
        },

        inActiveNormalSprite: {
            default: null,
            type: cc.SpriteFrame,
            displayName: 'Inactive Normal Sprite',
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
            displayName: 'Inactive Pressed Sprite',
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
            displayName: 'Inactive Disabled Sprite',
            notify: function () {
                this._updateSprites();
            }
        },

        checkEvents: {
            default: [],
            type: cc.Component.EventHandler
        }
    },

    _updateSprites: function () {
        if(this.isChecked) {
            this.normalSprite = this.activeNormalSprite;
            this.pressedSprite = this.activePressedSprite;
            this.disabledSprite = this.activeDisabledSprite;
        } else {
            this.normalSprite = this.inActiveNormalSprite;
            this.pressedSprite = this.inActivePressedSprite;
            this.disabledSprite = this.inActiveDisabledSprite;
        }
    },

    onEnable: function () {
        this._super();

        this.hoverSprite = null;
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this._onMouseMoveIn, this);
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this._onMouseMoveOut, this);

    },

    // use this for initialization
    onLoad: function () {
        this._updateSprites();

        this._registerEvent();
    },

    //this method override the parent method...
    _registerCheckBoxEvent: function () {
        //register checkbox specific event
        var event = new cc.Component.EventHandler();
        event.target = this.node;
        event.component = 'CheckBox';
        event.handler = 'toggleCheckBoxStatus';
        this.clickEvents = [event];

    },

    toggleCheckBoxStatus: function () {
        this.isChecked = !this.isChecked;

        this.node.emit('check-event', this);
        if(this.checkEvents) {
            cc.Component.EventHandler.emitEvents(this.checkEvents, this);
        }
    }



});
