//business logic
function Pizza (inches, toppings, price)  {
  this.inches = inches;
  this.toppings = toppings;
  this.price = price;
};

Pizza.prototype.price = function()  {

};

// var orderTotal = {};

//user interface logic
$(document).ready(function(event){
  $("form#byopizza").submit(function(event){
    event.preventDefault();
      var inches = $("#inches").val();
      var price = 0;
        if (inches === "9in") {
          price = price += 9.00;
        } else if (inches === "12in")  {
          price = price += 12.00;
        } else if (inches === "16in") {
          price = price += 16.00;
        } else if (inches === "20in") {
          price = price += 20.00;
        };
      var spread = $("#spreads").val();
        if (spread === "Truffle Oil" || spread === "Basil Pesto" || spread === "BBQ" || spread === "Buffalo" || spread === "Alfredo") {
          price = price += 1.00;
        } else {
          price = price;
        };
      var toppings = [];
      $("input:checkbox[name=veggies]:checked").each(function(){
        var selection = $(this).val();
        toppings.push(selection);
        price = price += 1.00;
      });
      $("input:checkbox[name=meats]:checked").each(function(){
        var selection = $(this).val();
        toppings.push(selection);
        price = price += 1.50;
      });
      console.log(toppings);
      console.log(price);
      console.log(spread);
      console.log(inches);
    var newPizza = new Pizza(inches, toppings, price);
    console.log (newPizza);
  });

});
