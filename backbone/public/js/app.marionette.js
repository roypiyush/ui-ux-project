var FormField = Backbone.Marionette.View.extend({
    template: '#form-field-template'
});

var FormButton = Backbone.Marionette.View.extend({
    template: '#button-item'
});

var ButtonList = Backbone.Marionette.CollectionView.extend({
    collection: new Backbone.Collection(),
    template: "#button-list"
});

var Form = Backbone.Marionette.CollectionView.extend({
    template: '#template-layout',
    collection: new Backbone.Collection(),
    childView(item) {
        console.log(item);
    },
    ui: {
        save: '.save-btn',
        close: '.close-btn'
    },
    initialize: function() {
        
    },
    events: {
        'click @ui.save': 'handleSave'
    },
    triggers: {
        'click @ui.close': 'close:view'
    },
    handleSave: function() {
        console.log('Calling handleSave()');
    },
    onCloseView: function() {
        console.log('Calling closeView event');
    }
});
var App = Backbone.Marionette.Application.extend({
    region: '#app',
    onStart() {
        var form = new Form();
        form.collection.add(new FormField());
        form.collection.add(new FormField());
        form.collection.add(new FormField());
        form.collection.add(new FormField());
        var buttonList = new ButtonList();
        buttonList.collection
        form.collection.add(new FormButton());
        this.showView(form);
    }
});

$(function(){ 
    var app = new App();
    app.start();
});