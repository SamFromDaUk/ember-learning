import Ember from 'ember';

export default Ember.Controller.extend({
    isEditing: false,

    actions: {
        toggleEdit: function(toggle) {
            this.set('isEditing', toggle);
        },

        cancelEdit: function() {
            this.get('model').rollback();
            this.set('isEditing', false);
        }
    }
});
