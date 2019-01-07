// var mysql = require("mysql");
var numeral = require('numeral');
var connection = require('./connection');


var productTable = require('./productTable');
var products = [['ID', 'PRODUCT','   DEPARTMENT','PRICE   ','STOCK']];


var displayProducts = function () {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) throw err;

        console.log('\n\n **************************      WELCOME TO BAMAZON SALES SYSTEM      ************************** \n\n')
        console.log('List of Products: ')

        queryResult = response
        response.forEach((item) => {
            let row = [];
            let price = numeral(item.price).format('$0,0.00')
            row.push(item.item_id, item.product_name, item.department_name, price, item.stock_quantity)
            products.push(row)
        });
            productTable(products)
            return true
    });
}

module.exports = displayProducts