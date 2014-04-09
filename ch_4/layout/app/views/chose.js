var Backbone = require('backbone');

var ChoseView = Backbone.View.extend({
    el: '#details',
    template: 'Chose a movie',
    class: 'details',
    render: function() {
      this.$el.html(this.template);
      return this;
}
});
module.exports = ChoseView;
