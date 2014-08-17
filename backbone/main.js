$(function(){
  //I hope lookmai is happy, had to go find local Jquery
    //create Model
    var Todo = Backbone.Model.extend({
    defaults: function () {
      return {
        title: "blank",
        order: Todos.nextOrder(),
        done: false
      };
    },
    //adding function to toggle
    toggle: function () {
      this.save({done: !this.get("done")});
    }
  });
  //create collection
  
});
