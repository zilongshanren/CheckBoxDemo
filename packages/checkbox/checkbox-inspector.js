'use strict';

Vue.component('cc-button', {
  template: `
    <ui-prop v-prop="target.target"></ui-prop>
    <ui-prop v-prop="target.interactable"></ui-prop>

    <ui-prop indent=1 v-prop="target.normalSprite"></ui-prop>
    <ui-prop indent=1 v-prop="target.pressedSprite"></ui-prop>
    <ui-prop indent=1 v-prop="target.hoverSprite"></ui-prop>
    <ui-prop indent=1 v-prop="target.disabledSprite"></ui-prop>

    <cc-array-prop :target.sync="target.clickEvents"></cc-array-prop>
  `,

  props: {
    target: {
      twoWay: true,
      type: Object,
    },
  },

  methods: {
    T: Editor.T,
  }
});
