  var Backbone = require('backbone');
  Backbone.XView = require('backbone.xview');
  var _ = require('underscore');
  
  // import the moviesList
  var MoviesList = require('views/moviesList');
  var DetailsView = require('views/details');
  
  var Layout = Backbone.XView.extend({

    template: _.template('           \
               <div id="overview">   \
               </div>                \
               <div id="details">    \
               </div>'),
    setDetails: function(movie) {
      if (this.currentDetails) {
        this.removeView(this.currentDetails.cid);
      }
      this.currentDetails = new DetailsView({model: movie});
      this.addView('#details', this.currentDetails);
    },
    
    initialize: function(options) {
      this.addView('#overview', new MoviesList({
        collection: options.router.movies,
        router: options.router
      }));
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
