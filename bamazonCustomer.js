// var inquirer = require('inquirer');
var connection = require('./connection');


var displayProducts = require('./displayProducts');
// var queryResult;

// var stock;
// var quantity;
// var item_id;

connection.connect(function (err) {
    if (err) {
        throw err
    };
    console.log('Server connected')
    displayProducts()
    
    connection.end()
})


// UPDATE bamazon.products SET stock_quantity =8  WHERE item_id = 1
// processOrder = () => {
//     connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [stock - quantity, item_id], function (err, response) {
//         if (err) throw err;

//         console.log('*************      Updated       ************* \n')

        
//     });
// }