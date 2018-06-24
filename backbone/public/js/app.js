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

var Input = Backbone.View.extend({
    
    initialize: function(args) {
        this.render(args.id);
        this.on('customenter', function(textValue) {
            var label = new Label({className: 'purple'})
            this.$el.append(label.name());
        });
    },
    render: function(id) {
        var template = _.template($('#inputTemplate').html());
        this.$el.append(template({id: "myinput"}));
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
    new NameDiv({el: '#fname'}); // bind view and events with it
    var inputView = new Input({el: '#fname', id: 'myinput'}); // These are arguments
    $('#myinput').keydown(function (e) {
        if (e.keyCode == 13) {
            // on function trigger example
            inputView.trigger('customenter', $('#myinput').val());
        }
    });
});