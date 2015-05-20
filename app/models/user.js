import DS from 'ember-data';

var User = DS.Model.extend({
    name: DS.attr('string'),
    dob: DS.attr('date')
});

User.reopenClass({
    FIXTURES: [{
        id: 1,
        name: 'Johnny Jameson',
        dob: 534211200
    }, {
        id: 2,
        name: 'James Johnson',
        dob: 534241200
    }]
});

export default User;
