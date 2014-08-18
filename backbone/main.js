//TODO practice from http://backbonejs.org/docs/todos.html

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
  var TodoList = Backbone.Collection.extend({
    model: Todo,
//this is a dependency required TODO
    localStorage: new Backbone.LocalStorage("todos-backbone"),
    done: function () {
      return this.where({done: true});
    },
    remaining: function () {
      return this.where({done: false});
    },
    nextOrder: function () {
      if (!this.length){
        return 1;
      }
      return this.last().get("order") +1;
    },
    comparator: 'order'
  });
  //view
  var TodoView = Backbone.View.extend({
    //
  });
});
