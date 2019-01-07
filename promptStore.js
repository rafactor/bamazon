var inquirer = require('inquirer');
var numeral = require('numeral');
var processOrder = require('./query');

var promptToSale = function () {

  inquirer.prompt([{
      type: 'input',
      name: "id",
      message: "Enter the ID of the product to add it to the shopping cart:",
      validate: function(value) {
          var valid = !isNaN(parseFloat(value)) && value < 11 && value > 0;
          return valid || 'Please enter a valid ID between 1 and 10';
        },

      }, {
      type: 'input',
      name: "quantity",
      message: "Enter the quantity of products to buy:",
      validate: function(value) {
          var valid = !isNaN(parseFloat(value)) && value > 0;
          return valid || 'Please enter a valid quantity';
      }
     
  }]).then(function (answers) {
      // check the quantity available for the selected product
      item_id = answers.id - 1 // adjust the selected item reference
      stock = queryResult[item_id].stock_quantity;
      quantity = answers.quantity;
      totalcost = numeral(quantity * queryResult[item_id].price).format('$0,0.00')
      // console.log(products[answers.id])

      if (stock >= quantity) {
          processOrder()
          console.log(`\n ${quantity} ${queryResult[item_id].product_name} added into your shopping cart.\n\n The total value of your purchase is ${totalcost} \n`)
      } else {
          var verb = (stock > 1)? 'are': 'is';
          console.log(`\n Insufficient quantity in stock. There ${verb} ${stock} units available in stock. \n\n Your order is canceled. \n`)
      }
    
  }).catch((err)=>{
      console.log(err)
  });
}

module.exports = promptToSale