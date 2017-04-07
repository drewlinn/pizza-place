//business logic

function Pizza (inches, spread, cheese, vegToppings, meatToppings)  {
  this.inches = inches,
  this.spread = spread,
  this.cheese = cheese,
  this.vegToppings = vegToppings,
  this.meatToppings = meatToppings;
};

Pizza.prototype.price = function(inches, spread, vegToppings, meatToppings)  {
  var price = 0;
  if (inches === "9in") {
    price = price += 9.00;
  } else if (inches === "12in")  {
    price = price += 12.00;
  } else if (inches === "16in") {
    price = price += 16.00;
  } else if (inches === "20in") {
    price = price += 20.00;
  }
  if (spread === "Truffle Oil" || spread === "Basil Pesto" || spread === "BBQ" || spread === "Buffalo" || spread === "Alfredo") {
    price = price += 1.50;
  } else {
    price = price;
  }
  vegToppings.forEach(function(vegTopping){
    price = price += 1.00;
  })
  meatToppings.forEach(function(meatTopping){
    price = price += 2.00;
  })
return price;
};

//user interface logic
$(document).ready(function(event){
  $("form#byopizza").submit(function(event){
    event.preventDefault();
    var inches = $("#inches").val();
    var spread = $("#spreads").val();
    var cheese = $("#cheeses").val();
    var vegToppings = [];
    $("input:checkbox[name=veggies]:checked").each(function(){
      var vegSelection = $(this).val();
      vegToppings.push(vegSelection);
    });
    var meatToppings = [];
    $("input:checkbox[name=meats]:checked").each(function(){
      var meatSelection = $(this).val();
      meatToppings.push(meatSelection);
    });
    var newPizza = new Pizza (inches, spread, cheese, vegToppings, meatToppings);
    var price = newPizza.price(inches, spread, vegToppings, meatToppings);
    $("ul#yourOrder").append("<li>" + newPizza.inches + ", " + newPizza.spread + ", " + newPizza.cheese + ", " + newPizza.vegToppings + ", " + newPizza.meatToppings + ", " + "$" + price + "</li>");
  });
});
