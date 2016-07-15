import Ember from 'ember';

export default Ember.Component.extend({
  expandedBranch: null,
  expandBranch(branch) {
    this.set('expandedBranch', branch);
  },
  collapseAll() {
    this.set('expandedBranch', null);
  }
});
