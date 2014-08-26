/*
We have an Array recording orders made at a store.

    [ { article: 1, quantity: 4 },
      { article: 2, quantity: 2 },
      { article: 1, quantity: 5 } ]

As you can see in this example data, "1" was ordered twice. We want
to know the total quantities ordered for each article.

Please write a function that:

  * Calculates the total number of orders for each article.
  * Sorts the resulting array so that the articles with the highest number of orders are on top

    [ { article: 1, total_orders: 9 },
      { article: 2, total_orders: 2 } ]

*/

// include the Lo-Dash library
var _ = require("lodash");

var worker = function(orders) {
  //define the overview
  var overviewarray = [],
  total = 0;

  //the orders article
  orders = _.groupBy(orders, "article");

  //it will always get me the value,key assignment
    _.forEach(orders, function (item, key) {

      key = parseInt(key);
      total = 0;

      // If only one article
      if (item.length === 1) {
          total = item[0].quantity;

      // Else make sum of all orders
      } else {
          total = _.reduce(item, function(sum, item) {
              return sum + item.quantity;
          }, 0);
      }

      overviewarray.push({
          article: key,
          total_orders: total
      });

  });

      // Order
    overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

    return overviewarray;

};

// export the worker function as a nodejs module
module.exports = worker;
