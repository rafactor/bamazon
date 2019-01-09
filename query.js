var connection = require("./connection")
var displayProducts = require('./displayProducts');

var processOrder = function () {
    let updated_stock = stock - quantity
    let item_ref = item_id + 1
    // console.log('updated_stock:' + updated_stock + ';item_ref:' + item_ref)
    connection.query('UPDATE bamazon.products SET stock_quantity = ? WHERE item_id = ?', [updated_stock, item_ref], function (err, response) {
        if (err) throw err;
       
        displayProducts()
        connection.end()
    });
}

module.exports = processOrder