//business logic
function Pizza (size, toppings)  {
  this.measure = measure;
  this.toppings = [];
  this.price = {};
};

Pizza.prototype.price = function()  {

};

// var cartTotal = {};

//user interface logic
$(document).ready(function(event){
  $("form#byopizza").submit(function(event){
    event.preventDefault();
      var measure = $("#measure").val();
      $("input:checkbox[name=toppings]:checked").each(function(){
        var toppings = $(this).val();
      })
      var price = {
        if (measure === "9in")  {
          //i am working right here
        }
      }
    var newPizza = new Pizza(measure, toppings, price);
  })
});
