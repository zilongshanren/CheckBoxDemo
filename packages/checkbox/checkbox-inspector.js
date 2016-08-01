'use strict';

Vue.component('cc-button', {
  template: `
    <ui-prop v-prop="target.target"></ui-prop>
    <ui-prop v-prop="target.interactable"></ui-prop>

    <ui-prop v-prop="target.isChecked"></ui-prop>

    <ui-prop v-prop="target.activeNormalSprite"></ui-prop>
    <ui-prop v-prop="target.activePressedSprite"></ui-prop>
    <ui-prop v-prop="target.activeDisabledSprite"></ui-prop>

    <ui-prop v-prop="target.inActiveNormalSprite"></ui-prop>
    <ui-prop v-prop="target.inActivePressedSprite"></ui-prop>
    <ui-prop v-prop="target.inActiveDisabledSprite"></ui-prop>

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
