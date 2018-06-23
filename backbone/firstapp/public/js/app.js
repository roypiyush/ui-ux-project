
var Person = Backbone.Model.extend({
    defaults: {
        fname: '',
        lname: ''
    },
    initialize: function() {
        this.fname = 'Piyush';
        this.lname = 'Roy';
    },
    name: function () {
        return this.fname + ' ' + this.lname;
    }
});


var Label = Backbone.View.extend({
    tagName: 'label',
    
    defaults: {
        className: '',
    },
    name: function () {
        var person = new Person();
        this.el.className = this.className;
        return this.$el.append(person.name());
    }
});

var NameDiv = Backbone.View.extend({
    events: {
        'click #btn1': function() {
            var person = new Label({className: 'red'});
            this.$el.append(person.name());
        },
        'click #btn2': function() {
            var personLabel = new Label({className: 'blue'});
            this.$el.append(personLabel.name());
        }
    }
});

/*
onclick function
function call(id) {
    var person = new Person();
    person.trigger('show:name', id);
}
*/



$(function(){
    var view = new NameDiv({el: '#fname'}); // bind view and events with it
});