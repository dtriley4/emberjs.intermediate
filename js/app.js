(function(win){

  win.App = Ember.Application.create({
    ApplicationController: Ember.Controller.extend(),
  ready: function(){
    console.log(this);
    this.initialize();
  }

  });

})(window);
