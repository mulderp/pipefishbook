  var Backbone = require('backbone');
  
  // import the moviesList
  var MoviesList = require('views/moviesList');
  
  var Layout = Backbone.View.extend({
    
    render: function() {
      this.$el.append(this.moviesList.render().el);
      return this;
    },
  
    initialize: function(options) {
      this.moviesList = new MoviesList({
        el: options.el,
        collection: options.collection,
        router: options.router
      });
    } 
  });

  var instance;
  Layout.getInstance = function(options) {
    if (!instance) {
      instance = new Layout({
        el: options.el,
        router: options.router,
        collection: options.router.movies
      });
    }
    return instance;
  }
  module.exports = Layout;
