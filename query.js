var connection = require("./connection")
var displayProducts = require('./displayProducts');

// UPDATE bamazon.products SET stock_quantity =8  WHERE item_id = 1
var processOrder = function () {
    console.log('update the database')
    // stock - quantity
    let updated_stock = stock - quantity
    let item_ref = item_id + 1
    console.log('updated_stock:' + updated_stock + ';item_ref:' + item_ref)
    connection.query('UPDATE bamazon.products SET stock_quantity = ? WHERE item_id = ?', [updated_stock, item_ref], function (err, response) {
        // if (err) throw err;
            // console.log(response)
        // console.log('*************      Updated       ************* \n')
        
        connection.end()

        
        
        
    });
}

module.exports = processOrder