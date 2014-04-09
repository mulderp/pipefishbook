  var Backbone = require('backbone');
  var _ = require('underscore');
  var moment = require('moment');
  
  var DetailsView = Backbone.View.extend({
    el: '#details',

    template: _.template('<h1><%= showtimeFormatted %> - <%= title %> </h1>\
                         <br><br> <%= description %>'),

    render: function() {
      var showtime = moment(showtime).format("DD-MMMM HH:MM");
      var data = _.extend(this.model.toJSON(), {showtimeFormatted: showtime});
      this.$el.html(this.template(data));
      return this;
    }
  });
  module.exports = DetailsView;
