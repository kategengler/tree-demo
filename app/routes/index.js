import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      branches: [
        {id: 1, title: 'Branch A', items: [{value: 'Item 1'}, {value: 'Item 2'}]},
        {id: 2, title: 'Branch B', items: [{value: 'Item 3'}, {value: 'Item 4'}]}
      ]
    };
  }
});
