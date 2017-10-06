import Ember from 'ember';
import layout from '../../templates/components/mdc-toolbar/title';

export default Ember.Component.extend({
  //region Ember Hooks
  layout,
  classNames: ['mdc-toolbar__title'],
  classNameBindings: ['fixed:mdc-toolbar__title--fixed'],
  attributeBindings: ['style'],
  //endregion

  //region Attributes
  /**
   * @type {Boolean}
   */
  fixed: false,
  //endregion

  //region Computed Properties
  style: Ember.computed.readOnly('title-style')
  //endregion
});
