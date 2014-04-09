  var Backbone = require('backbone');
  var _ = require('underscore');
  
  var DetailsView = Backbone.View.extend({
    el: '#details',
    template: _.template('<%= showtime %> <br> <%= description %>'),
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  module.exports = DetailsView;
