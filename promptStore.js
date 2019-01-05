var inquirer = require('inquirer');

var prompt = function () {

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
      stock = queryResult[answers.id].stock_quantity;
      quantity = answers.quantity;
      item_id = answers.id;
      totalcost = quantity * queryResult[answers.id].price
      // console.log(products[answers.id])

      if (stock >= quantity) {
          // processOrder()
          console.log(`\n ${item_id} ${queryResult[answers.id].product_name} added into the shopping cart. Total value is ${totalcost} \n`)
      } else {
          console.log(`\n Insufficient quantity in stock. \n Order canceled. \n`)
      }
    
  }).catch((err)=>{
      console.log(err)
  });
}

module.exports = prompt