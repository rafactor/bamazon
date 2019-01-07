var connection = require("./connection")

// UPDATE bamazon.products SET stock_quantity =8  WHERE item_id = 1
var processOrder = function () {
    console.log('update the database')
    // stock - quantity
    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [100, item_id + 1], function (err, response) {
        // if (err) throw err;
            // console.log(response)
        console.log('*************      Updated       ************* \n')

        
    });
}

module.exports = processOrder