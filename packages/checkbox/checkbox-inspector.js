'use strict';

Vue.component('cc-button', {
  template: `
    <ui-prop v-prop="target.target"></ui-prop>
    <ui-prop v-prop="target.interactable"></ui-prop>

    <ui-prop v-prop="target.toggleGroup"></ui-prop>

    <ui-prop v-prop="target.isChecked"></ui-prop>

    <ui-prop name="Checked State">
      <div class="child">
        <ui-prop indent=1 v-prop="target.activeNormalSprite"></ui-prop>
        <ui-prop indent=1 v-prop="target.activePressedSprite"></ui-prop>
        <ui-prop indent=1 v-prop="target.activeDisabledSprite"></ui-prop>
      </div>
    </ui-prop>

    <ui-prop name="Unchecked State">
      <div class="child">
        <ui-prop indent=1 v-prop="target.inActiveNormalSprite"></ui-prop>
        <ui-prop indent=1 v-prop="target.inActivePressedSprite"></ui-prop>
        <ui-prop indent=1 v-prop="target.inActiveDisabledSprite"></ui-prop>
      </div>
    </ui-prop>

    <cc-array-prop :target.sync="target.checkEvents"></cc-array-prop>
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
