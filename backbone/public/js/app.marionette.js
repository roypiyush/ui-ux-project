var View = Backbone.Marionette.View.extend({
    template: '#template-layout',
    ui: {
        save: '.save-btn',
        close: '.close-btn'
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
        this.showView(new View());
    }
});

$(function(){ 
    var app = new App();
    app.start();
});