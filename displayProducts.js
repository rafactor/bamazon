// var mysql = require("mysql");
// var inquirer = require('inquirer');
var connection = require('./connection');
var prompt= require('./promptStore')

var productTable = require('./productTable');
var products = [['ID', 'PRODUCT','DEPARTMENT','PRICE']];


var displayProducts = function displayProducts() {
    connection.query("SELECT * FROM products", function (err, response) {
        if (err) throw err;

        console.log('**************************      BAMAZON       ************************** \n')
        console.log('List of Products: ')

        queryResult = response
        response.forEach((item) => {
            let row = [];
            row.push(item.item_id, item.product_name, item.department_name, item.price)
            products.push(row)
        });
            
        productTable(products)
        // console.log('questions')
        prompt()
    });
}

module.exports = displayProducts