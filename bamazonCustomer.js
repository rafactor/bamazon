var mysql = require("mysql");
var inquirer = require('inquirer');

var products;
var quantity;
var selectedProduct;
var stock;
var item_id;



var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

var start = connection.connect(function (err) {
    if (err) {
        throw err
    };
    console.log('connected')
    queryProducts()
})

function queryProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        products = res
        //   return products
        connection.end()
    });
}

function displayProducts() {
    products.forEach((item) => {
        let line = 'ID: ' + item.item_id + ' - ' + item.product_name + ' - Price: $' + item.price
        console.log(line)
    });
}

function display() {
    console.log('*************      BAMAZON       ************* \n')
    console.log('List of Products: ')
    displayProducts()

    inquirer.prompt([{
        type: 'input',
        name: "id",
        message: "--Enter the Product ID:",
        // add validation
    }, {
        type: 'input',
        name: "quantity",
        message: "--Enter the quantity of products to buy:"
        //add validation
    }]).then(function (answers) {
        // check the quantity available for the selected product
        stock = products[answers.id - 1].stock_quantity;
        quantity = answers.quantity;
        item_id = answers.id;

        if (stock >= quantity) {

            connection.query("SELECT * FROM products", function (error, results,fields) {

                // connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?',[stock - quantity,item_id],function(error,results){
                if (error) throw error;

                console.log('updated')

                console.log(fields)

            })


        } else {
            console.log(`\n Insufficient quantity in stock. \n Order canceled. \n`)
        }
        // console.log(products[parseInt(answers.id) + 1])
    });
}

function processOrder() {
    console.log('update')


}