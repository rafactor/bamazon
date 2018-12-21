var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'bamazon'
})

var start = connection.connect(function(err){
    if (err) {throw err};
    displayProducts()
})

function displayProducts() {
    // console.log('here')
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
      if (err) throw err;

      var products = [];
  
    //   console.log(res)
      res.forEach((item) => {
          let line = 'id: ' + item.item_id + ' - product: '+ item.product_name + ' - price: $' + item.price
        //   products.push(line)
         console.log(line)
      });

      return products
      connection.end();
    });
  }

var end = function(){
    console.log('disconnected')
    connection.end()
}

module.exports = {
    connection: connection,
    start: start,
    end: end
}