var View = Backbone.Marionette.View.extend({
    template: '#template-layout'
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