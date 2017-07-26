function orderPizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

orderPizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === "s")  {
    cost = 10;
  } else if (this.size === "m") {
    cost = 14;
  } else {
    cost = 18;
  }
  $("input:checkbox[name=toppings]:checked").each(function() {
      cost = parseInt(cost) + parseInt($(this).val());
    });
  return cost;
};


$(document).ready(function() {
  $("#order-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var toppings = $("#toppings").val();
    var totalOrderPizza = new orderPizza(size, toppings);
    var cost = totalOrderPizza.cost();
    $("#price").text("$" + cost);
    $(".reveal").show();
  });
});
