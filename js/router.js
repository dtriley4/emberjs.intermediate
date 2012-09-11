(function(app){
  var Router = Ember.Router.extend({
    root: Ember.Route.extend({
      index: Ember.Route.extend({
        route: '/',
      redirectsTo: 'friends',
      }),
      friends: Ember.Route.extend({
        route: '/friends',
      connectOutlets: function(router){
        router.get('applicationController').connectOutlet('friends', App.Friend);
      }
      }),
      friend: Ember.Route.extend({
        route: '/friend/:friend_id',
      })
    })
  });
  app.Router = Router;
})(window.App);
